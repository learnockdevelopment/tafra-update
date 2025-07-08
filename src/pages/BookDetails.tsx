import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import BookCard from "@/components/BookCard";
import { useBooks } from "@/context/addToCart";

export default function BookDetails() {
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);
    const { bookId } = useParams();
    const { addBook, books: cartBooks, removeBook } = useBooks();

    // Fetch books data
    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch(
                    `https://tafra.learnock.com/api/products/${bookId}`
                );
                const data = await response.json();
                setBook(data.data);
                console.log(data.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching books:", error);

                setLoading(false);
            }
        };

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });

        fetchBooks();
    }, [bookId]);
    const discount = 10;

    const [books, setBooks] = useState([]);

    // Fetch books data
    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch(
                    "https://tafra.learnock.com/api/products"
                );
                const data = await response.json();
                setBooks(data?.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching books:", error);

                setLoading(false);
            }
        };

        fetchBooks();
    }, []);
    return (
        <div>
            <Header fixed={false} active="store" />
            <div className="container py-10">
                <Breadcrumb className="mb-6">
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">احدث الكتب</BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbSeparator className="rotate-180" />
                        <BreadcrumbItem>
                            <BreadcrumbPage>{book?.name}</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                <div className="flex gap-2 items-center md:flex-row flex-col md:*:w-1/2 *:w-full">
                    <div className="flex gap-2">
                        <div className="w-1/4 flex flex-col gap-2">
                            <img
                                src={`https://tafra.learnock.com/storage/${book?.image}`}
                                alt="book image"
                                className="w-full grow"
                            />
                            <img
                                src={`https://tafra.learnock.com/storage/${book?.image}`}
                                alt="book image"
                                className="w-full grow"
                            />
                        </div>
                        <div className="w-3/4">
                            <img
                                src={`https://tafra.learnock.com/storage/${book?.image}`}
                                alt="book image"
                                className="w-80 h-80"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="text-3xl font-bold mb-2 text-[#1B1B1B] line-clamp-2 grow">
                            {book?.name}
                        </h2>

                        {/* <h2 className="text-xl font-bold mb-2 text-[#777] line-clamp-2 grow">
                            المؤلف: {book?.authors || book?.name}
                        </h2> */}

                        <div className="flex items-center justify-start gap-5 mb-2">
                            <span className="text-sm text-[#777]">
                                رمز المنتج: {book?.sku}
                            </span>
                            <span className="text-sm text-[#777]">
                                التصنيف:{" "}
                                {book?.category?.name || "Uncategorized"}
                            </span>
                        </div>

                        <div className="flex items-center justify-start gap-5 mb-2">
                            <span className="text-sm text-[gold] flex gap-0">
                                <Star className="fill-[gold]" />
                                <Star className="fill-[gold]" />
                                <Star className="fill-[gold]" />
                                <Star className="fill-[gold]" />
                                <Star className="fill-[gold]" />
                            </span>
                            {book?.average_rating ? (
                                <span className="text-sm text-[#777]">
                                    {book?.average_rating} (
                                    {book?.reviews?.length})
                                </span>
                            ) : (
                                <span className="text-sm text-[#777]">
                                    لا يوجد تقييم
                                </span>
                            )}
                            <Button
                                // onClick={() => onAddToCart(book)}
                                className="text-[#096D71] font-bold text-lg"
                                variant="ghost"
                            >
                                اكتب تقييم
                            </Button>
                        </div>

                        <div className="flex items-center justify-start gap-3 mb-2">
                            <div className="flex items-center gap-2">
                                <span className="text-2xl font-bold ">
                                    السعر:
                                </span>
                                <span className="text-2xl font-bold text-[#096D71]">
                                    {Number(
                                        book?.final_price?.replace("$", "")
                                    )?.toFixed(2)}{" "}
                                    EGP
                                </span>
                                {discount > 0 && (
                                    <span className="text-xl text-secound line-through">
                                        {Number(book?.price)?.toFixed(2) || 200}{" "}
                                        EGP
                                    </span>
                                )}
                            </div>
                        </div>

                        <Button
                            // onClick={() => onAddToCart(book)}
                            className="bg-[#096D71] hover:bg-secound text-white w-fit rounded-full px-20"
                            size="sm"
                        >
                            أضف الي السلة
                        </Button>
                    </div>
                </div>

                <div>
                    <h3 className="font-bold text-3xl text-center mt-40 mb-20 text-[#096D71]">
                        منتجات يمكن ان تعجبك ايضا
                    </h3>

                    <div className="flex flex-wrap justify-between xl:*:w-[23%] md:*:w-[48%] *:w-full gap-x-8 gap-y-16">
                        {books.slice(0, 4).map((book) => (
                            <BookCard
                                key={book.id}
                                book={{
                                    id: book.id,
                                    name: book.name,
                                    final_price:
                                        typeof book.final_price === "string"
                                            ? Number(book.final_price)
                                            : book.final_price,
                                    price: book.price,
                                    cover: book.image,
                                    category: book.category.name,
                                    sku: book.sku,
                                    image: book.image,
                                }}
                                onAddToCart={(book) => {
                                    addBook({
                                        id: book.id + "",
                                        name: book.name,
                                        final_price:
                                            typeof book.final_price === "string"
                                                ? Number(book.final_price)
                                                : book.final_price,
                                        price: book.price,
                                        cover: book.cover ?? book.image,
                                        category: book.category,
                                        sku: book.sku,
                                        image: book.image,
                                    });
                                }}
                                inCart={
                                    cartBooks.find(
                                        (b) => b.id === book.id + ""
                                    ) !== undefined
                                }
                                onRemoveFromCart={(book) => {
                                    removeBook(book.id + "");
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
