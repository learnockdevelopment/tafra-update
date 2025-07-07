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

interface Book {
    id: number;
    title: string;
    price: string;
    originalPrice: number;
    cover: string;
    category: string;
    isbn13: string;
    image: string;
}

const Store = () => {
    const [books, setBooks] = useState<Book[]>([]);
    const [loading, setLoading] = useState(true);

    // Fetch books data
    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch(
                    "https://api.itbook.store/1.0/new"
                );
                const data = await response.json();
                setBooks(data?.books);
                console.log(data?.books);
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
                        fontSize: "40px",
                        color: "#096d71",
                        marginBottom: "10px",
                    }}
                    className="font-bold mt-16"
                >
                    ابحث عن كتاب
                </h2>

                <div className="flex gap-2 mb-10">
                    <div className="w-1/2 relative">
                        <input
                            placeholder="اسم الكتاب..."
                            className="px-4 py-3 border border-[#777] w-full rounded-md hover:outline-none"
                        />
                        <Search className="!size-6 absolute top-0 left-0 translate-x-[50%] translate-y-[50%] text-[#777]" />
                    </div>
                    <Select>
                        <SelectTrigger className="w-[280px] !px-4 !py-3 !h-auto rtl !text-[#777] !border-[#777]">
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
                        fontSize: "28px",
                        color: "#1B1B1B",
                        marginBottom: "10px",
                    }}
                    className="font-600 mt-20"
                >
                    احدث الكتب
                </h3>

                <div className="flex flex-wrap justify-between xl:*:w-[23%] md:*:w-[48%] *:w-full gap-x-8 gap-y-16">
                    {books.map((book) => (
                        <BookCard
                            book={{
                                id: book.isbn13,
                                title: book.title,
                                price: Number(book.price.replace("$", "")),
                                originalPrice: 200,
                                cover: book.image,
                                category: "",
                                isbn13: book.isbn13,
                            }}
                            onAddToCart={(book) => {
                                console.log(book);
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
