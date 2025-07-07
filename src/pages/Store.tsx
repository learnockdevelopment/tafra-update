import Header from "@/components/Header";
import { Search } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import BookCard from "@/components/BookCard";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import { useBooks } from "@/context/addToCart";

interface Book {
    id: number;
    name: string;
    final_price: string | number;
    price: number;
    cover: string;
    category: { name: string };
    sku: string;
    image?: string;
}

const Store = () => {
    const [books, setBooks] = useState<Book[]>([]);
    const [loading, setLoading] = useState(true);
    const { addBook, books: cartBooks, removeBook } = useBooks();

    // Fetch books data
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        const fetchBooks = async () => {
            // try {
            //     const response = await fetch(
            //         "https://api.itbook.store/1.0/new"
            //     );
            //     const data = await response.json();
            //     setBooks(data?.books);
            //     setLoading(false);
            // } catch (error) {
            //     console.error("Error fetching books:", error);

            //     setLoading(false);
            // }
            try {
                const response = await fetch(
                    "https://tafra.learnock.com/api/products"
                );
                const data = await response.json();
                setBooks(data.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching books:", error);

                setLoading(false);
            }
        };

        fetchBooks();
    }, []);

    return (
        <>
            <Header fixed={false} active="store" />
            <div className="container">
                <h2
                    style={{
                        color: "#096d71",
                        marginBottom: "10px",
                    }}
                    className="font-bold mt-16 md:text-4xl text-2xl"
                >
                    ابحث عن كتاب
                </h2>

                <div className="flex gap-2 mb-10 md:flex-row flex-col">
                    <div className="md:w-1/2 w-full relative">
                        <input
                            placeholder="اسم الكتاب..."
                            className="px-4 py-3 border border-[#777] w-full rounded-md hover:outline-none"
                        />
                        <Search className="!size-6 absolute top-0 left-0 translate-x-[50%] translate-y-[50%] text-[#777]" />
                    </div>
                    <Select>
                        <SelectTrigger className="md:w-[280px] w-full !px-4 !py-3 !h-auto rtl !text-[#777] !border-[#777]">
                            <SelectValue placeholder="المؤلف" />
                        </SelectTrigger>
                        <SelectContent className="rtl">
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <h3
                    style={{
                        color: "#1B1B1B",
                        marginBottom: "30px",
                    }}
                    className="font-600 mt-20 md:text-3xl text-xl"
                >
                    احدث الكتب
                </h3>

                <div className="flex flex-wrap xl:*:w-[23%] md:*:w-[48%] *:w-full gap-x-8 gap-y-16">
                    {books.map((book) => (
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
                                cartBooks.find((b) => b.id === book.id + "") !==
                                undefined
                            }
                            onRemoveFromCart={(book) => {
                                removeBook(book.id + "");
                            }}
                        />
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Store;
