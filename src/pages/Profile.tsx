import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Header from "@/components/Header";
const ProfilePage = () => {
    const { user, updateUser, logout } = useAuth();
    const [editMode, setEditMode] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
    });
    const [imagePreview, setImagePreview] = useState("");
    const [orders, setOrders] = useState([]);

    // Initialize form data with user data
    useEffect(() => {
        if (user) {
            setFormData({
                name: user.name || "",
                email: user.email || "",
                phone: user.phone || "",
                address: user.address || "",
            });
            setImagePreview(user.image || "");
        }
    }, [user]);

    useEffect(() => {
        const getOrders = async () => {
            try {
                const response = await fetch(
                    "https://tafra.learnock.com/api/payments/my-orders",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: "Bearer YOUR_API_KEY",
                            // Accept: "application/json",
                        },
                        body: JSON.stringify({
                            user_id: user.id,
                        }),
                    }
                );
                const date = await response.json();
                setOrders(date?.orders);
            } catch (err) {
                console.error(err);
            }
        };
        getOrders();
    }, [user?.id]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (event) => {
                if (event.target?.result) {
                    setImagePreview(event.target.result as string);
                }
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        updateUser({
            ...formData,
            image: imagePreview,
        });
        setEditMode(false);
    };

    if (!user) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p>Please log in to view your profile</p>
            </div>
        );
    }

    const formatDate = (string) => {
        const date = new Date(string);
        return `${date.getDate()}-${
            date.getMonth() + 1
        }-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
    };

    return (
        <>
            {" "}
            <Header fixed={false} active="profile" />
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden mb-20">
                    <div className="bg-primary p-6 text-white">
                        <h1 className="text-2xl font-bold">Your Profile</h1>
                    </div>

                    <div className="p-6">
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="md:w-1/3 flex flex-col items-center">
                                <Avatar className="w-32 h-32 mb-4">
                                    <AvatarImage
                                        src={
                                            imagePreview ||
                                            "/default-avatar.png"
                                        }
                                    />
                                    <AvatarFallback>
                                        {user.name?.charAt(0).toUpperCase()}
                                    </AvatarFallback>
                                </Avatar>

                                {editMode && (
                                    <div className="mt-4 w-full">
                                        <Label
                                            htmlFor="image"
                                            className="block mb-2"
                                        >
                                            Change Profile Picture
                                        </Label>
                                        <Input
                                            id="image"
                                            type="file"
                                            accept="image/*"
                                            onChange={handleImageChange}
                                            className="w-full"
                                        />
                                    </div>
                                )}
                            </div>

                            <div className="md:w-2/3">
                                {editMode ? (
                                    <form onSubmit={handleSubmit}>
                                        <div className="grid gap-4">
                                            <div>
                                                <Label htmlFor="name">
                                                    Full Name
                                                </Label>
                                                <Input
                                                    id="name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </div>

                                            <div>
                                                <Label htmlFor="email">
                                                    Email
                                                </Label>
                                                <Input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    required
                                                    disabled // Email often shouldn't be changed
                                                />
                                            </div>

                                            <div>
                                                <Label htmlFor="phone">
                                                    Phone Number
                                                </Label>
                                                <Input
                                                    id="phone"
                                                    name="phone"
                                                    type="tel"
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                />
                                            </div>

                                            <div>
                                                <Label htmlFor="address">
                                                    Address
                                                </Label>
                                                <Input
                                                    id="address"
                                                    name="address"
                                                    value={formData.address}
                                                    onChange={handleInputChange}
                                                />
                                            </div>

                                            <div className="flex gap-2 mt-4">
                                                <Button
                                                    type="submit"
                                                    className="bg-primary"
                                                >
                                                    Save Changes
                                                </Button>
                                                <Button
                                                    type="button"
                                                    variant="outline"
                                                    onClick={() =>
                                                        setEditMode(false)
                                                    }
                                                >
                                                    Cancel
                                                </Button>
                                            </div>
                                        </div>
                                    </form>
                                ) : (
                                    <div className="space-y-4">
                                        <div>
                                            <h2 className="text-xl font-semibold">
                                                {user.name}
                                            </h2>
                                            <p className="text-gray-600">
                                                {user.role}
                                            </p>
                                        </div>

                                        <div className="space-y-2">
                                            <div>
                                                <span className="font-medium">
                                                    Email:
                                                </span>{" "}
                                                {user.email}
                                            </div>
                                            {user.phone && (
                                                <div>
                                                    <span className="font-medium">
                                                        Phone:
                                                    </span>{" "}
                                                    {user.phone}
                                                </div>
                                            )}
                                            {user.address && (
                                                <div>
                                                    <span className="font-medium">
                                                        Address:
                                                    </span>{" "}
                                                    {user.address}
                                                </div>
                                            )}
                                        </div>

                                        <div className="flex gap-2 mt-6">
                                            <Button
                                                onClick={() =>
                                                    setEditMode(true)
                                                }
                                            >
                                                Edit Profile
                                            </Button>
                                            <Button
                                                variant="outline"
                                                onClick={logout}
                                            >
                                                Log Out
                                            </Button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="bg-primary p-6 text-white">
                        <h1 className="text-2xl font-bold">عمليات الشراء</h1>
                    </div>

                    <div className="p-6">
                        {orders?.map((order, index) => (
                            <div
                                key={order?.id}
                                className="border-b border-b-[#b897328c] p-4 flex gap-4 items-start "
                            >
                                <div className="min-w-16 px-2 py-2 text-center bg-[#b89732] text-white text-3xl w-fit">
                                    {index + 1}
                                </div>
                                <div className="grow">
                                    <div className="flex gap-3 justify-between w-full mb-4">
                                        <div className="flex gap-3 items-center">
                                            <h3 className="text-lg font-bold">
                                                السعر:
                                            </h3>
                                            <span className="text-sm opacity-90 flex gap-1 flex-row-reverse">
                                                <span>
                                                    {order?.total_price ||
                                                        "---"}
                                                </span>
                                                <span>EGP</span>
                                            </span>
                                        </div>
                                        <div className="flex gap-3 items-center">
                                            <h3 className="text-lg font-bold">
                                                التاريخ:
                                            </h3>
                                            <span className="text-sm opacity-90">
                                                {formatDate(
                                                    order?.created_at
                                                ) || "---"}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex gap-3 justify-between w-full mb-4">
                                        <div className="flex gap-3 items-center">
                                            <h3 className="text-lg font-bold">
                                                الحالة:
                                            </h3>
                                            <span className="text-sm opacity-90">
                                                {order?.status === "active"
                                                    ? "مدفوع"
                                                    : order?.status ===
                                                      "pending"
                                                    ? "معلق"
                                                    : "---"}
                                            </span>
                                        </div>
                                        {order?.invoice_id && (
                                            <div className="flex gap-3 items-center">
                                                <h3 className="text-lg font-bold">
                                                    معرف الفاتورة:
                                                </h3>
                                                <span className="text-sm opacity-90">
                                                    {order?.invoice_id || "---"}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                    {order?.invoice_url &&
                                        order?.invoice_url !== "1" && (
                                            <div>
                                                <a
                                                    href={order?.invoice_url}
                                                    target="_blank"
                                                    className="btn hover:scale-95 transition-all duration-300 block w-fit mx-auto text-sm"
                                                    style={{
                                                        backgroundColor:
                                                            "#b89632",
                                                        color: "#fff",
                                                        padding: "4px 30px",
                                                        textDecoration: "none",
                                                        borderRadius: "12px",
                                                    }}
                                                >
                                                    فتح الفاتورة
                                                </a>
                                            </div>
                                        )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProfilePage;
