import { useState } from "react";
import { X } from "lucide-react";
import { useBooks } from "@/context/addToCart";

interface Book {
    id: string;
    name: string;
    price: number;
    image: string;
    quantity: number;
}

interface PaymentModalProps {
    isOpen: boolean;
    onClose: () => void;
    books: Book[];
}

export default function PaymentModal({
    isOpen,
    onClose,
    books = [],
}: PaymentModalProps) {
    const [isProcessing, setIsProcessing] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const { increaseQuantity, decreaseQuantity, removeBook, clearCart } =
        useBooks();

    // Customer information state
    const [customerData, setCustomerData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        address: "",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCustomerData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleCheckout = async () => {
        setIsProcessing(true);
        setError("");
        setSuccess("");

        // Validate inputs
        if (!customerData.first_name || !customerData.last_name) {
            setError("الاسم الأول واسم العائلة مطلوبان");
            setIsProcessing(false);
            return;
        }

        if (!customerData.email || !customerData.phone) {
            setError("البريد الإلكتروني ورقم الهاتف مطلوبان");
            setIsProcessing(false);
            return;
        }

        if (!customerData.address) {
            setError("العنوان مطلوب");
            setIsProcessing(false);
            return;
        }

        try {
            const response = await fetch(
                "https://tafra.learnock.com/api/payments/create",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer YOUR_API_KEY",
                        Accept: "application/json",
                    },
                    body: JSON.stringify({
                        customer: customerData,
                        items: books.map((book) => ({
                            product_id: book.id,
                            name: book.name,
                            quantity: book.quantity,
                            price: book.price,
                        })),
                        user_id: localStorage.getItem("user")
                            ? JSON.parse(localStorage.getItem("user") as string)
                                  .id
                            : undefined,
                    }),
                }
            );

            const data = await response.json();
            // console.log(data);
            // if (data) console.log(data.paymentUrl);

            if (!response.ok) {
                throw new Error(data.message || "فشل في إنشاء طلب الدفع");
            }

            // Save payment reference locally if needed
            localStorage.setItem(
                "paymentReference",
                JSON.stringify({
                    invoice: data.invoice_id,
                    order: data.order_id,
                })
            );

            // Redirect to Fawry payment page
            window.location.href = data.payment_url;
        } catch (err) {
            setError(err instanceof Error ? err.message : "حدث خطأ غير متوقع");
            setIsProcessing(false);
        }
    };

    const totalPrice = books.reduce(
        (sum, book) => sum + book.price * (book.quantity || 1),
        0
    );

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto" dir="rtl">
            <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                {/* Background overlay */}
                <div
                    className="fixed inset-0 transition-opacity"
                    aria-hidden="true"
                >
                    <div className="absolute inset-0 bg-gray-900 bg-opacity-75"></div>
                </div>

                {/* Modal container */}
                <div className="inline-block align-bottom bg-white rounded-lg text-right overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="flex justify-between items-start">
                            <h3 className="text-2xl font-bold text-gray-900">
                                إتمام عملية الشراء
                            </h3>
                            <button
                                onClick={onClose}
                                className="text-gray-400 hover:text-gray-500 focus:outline-none"
                            >
                                <X className="h-6 w-6" />
                            </button>
                        </div>

                        {error && (
                            <div className="mt-4 p-3 bg-red-50 text-red-700 rounded-md text-sm">
                                {error}
                            </div>
                        )}

                        {success && (
                            <div className="mt-4 p-3 bg-green-50 text-green-700 rounded-md text-sm">
                                {success}
                            </div>
                        )}

                        <div className="mt-6 space-y-6">
                            {/* Customer Information Section */}
                            <div className="border-b pb-6">
                                <h4 className="text-lg font-medium text-gray-900 mb-4">
                                    معلومات العميل
                                </h4>
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label
                                            htmlFor="first_name"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            الاسم الأول
                                        </label>
                                        <input
                                            type="text"
                                            name="first_name"
                                            id="first_name"
                                            value={customerData.first_name}
                                            onChange={handleInputChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="last_name"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            اسم العائلة
                                        </label>
                                        <input
                                            type="text"
                                            name="last_name"
                                            id="last_name"
                                            value={customerData.last_name}
                                            onChange={handleInputChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            البريد الإلكتروني
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            value={customerData.email}
                                            onChange={handleInputChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="phone"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            رقم الهاتف
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            id="phone"
                                            value={customerData.phone}
                                            onChange={handleInputChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                            required
                                        />
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label
                                            htmlFor="address"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            العنوان
                                        </label>
                                        <input
                                            type="text"
                                            name="address"
                                            id="address"
                                            value={customerData.address}
                                            onChange={handleInputChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Order Items Section */}
                            <div className="space-y-4">
                                <h4 className="text-lg font-medium text-gray-900">
                                    تفاصيل الطلب
                                </h4>
                                {books.map((book) => (
                                    <div
                                        key={book.id}
                                        className="flex justify-between items-center border-b pb-4"
                                    >
                                        <div className="flex items-center gap-3">
                                            <img
                                                src={`https://tafra.learnock.com/storage/${book.image}`}
                                                alt={book.name}
                                                className="w-16 h-16 object-cover rounded"
                                            />
                                            <div>
                                                <h4 className="font-medium text-gray-900">
                                                    {book.name}
                                                </h4>
                                                <p className="text-gray-600">
                                                    {book.price} ج.م
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <button
                                                onClick={() =>
                                                    decreaseQuantity(
                                                        String(book.id)
                                                    )
                                                }
                                                className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100"
                                                disabled={book.quantity <= 1}
                                            >
                                                -
                                            </button>
                                            <span className="w-8 text-center">
                                                {book.quantity}
                                            </span>
                                            <button
                                                onClick={() =>
                                                    increaseQuantity(
                                                        String(book.id)
                                                    )
                                                }
                                                className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100"
                                            >
                                                +
                                            </button>
                                            <button
                                                onClick={() =>
                                                    removeBook(String(book.id))
                                                }
                                                className="text-red-500 hover:text-red-700 p-1"
                                            >
                                                <X className="h-4 w-4" />
                                            </button>
                                        </div>
                                    </div>
                                ))}

                                <div className="pt-4 border-t text-black!">
                                    <div className="flex justify-between items-center text-lg font-bold">
                                        <span>المجموع:</span>
                                        <span>{totalPrice} ج.م</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6">
                                <button
                                    onClick={handleCheckout}
                                    disabled={
                                        isProcessing || books.length === 0
                                    }
                                    className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                                        isProcessing
                                            ? "bg-blue-400"
                                            : "bg-blue-600 hover:bg-blue-700"
                                    } ${
                                        books.length === 0
                                            ? "opacity-50 cursor-not-allowed"
                                            : ""
                                    }`}
                                >
                                    {isProcessing ? (
                                        <>
                                            <svg
                                                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <circle
                                                    className="opacity-25"
                                                    cx="12"
                                                    cy="12"
                                                    r="10"
                                                    stroke="currentColor"
                                                    strokeWidth="4"
                                                ></circle>
                                                <path
                                                    className="opacity-75"
                                                    fill="currentColor"
                                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                ></path>
                                            </svg>
                                            جاري التوجيه إلى فوري...
                                        </>
                                    ) : (
                                        "الدفع عبر فوري"
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
