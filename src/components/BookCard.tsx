import React from "react";
import { Star, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface Book {
    image?: string;
    id: string;
    title: string;
    price: number;
    originalPrice: number;
    cover: string;
    category: string;
    isbn13: string;
}

interface BookCardProps {
    book: Book;
    onAddToCart: (book: Book) => void;
    onRemoveFromCart: (book: Book) => void;
    inCart: boolean;
}

const BookCard: React.FC<BookCardProps> = ({
    book,
    onAddToCart,
    inCart,
    onRemoveFromCart,
}) => {
    const discount = Math.round(
        ((book.originalPrice - book.price) / book.originalPrice) * 100
    );

    return (
        <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden flex flex-col">
            <div className="relative">
                <img
                    src={book.cover}
                    alt={book.title}
                    className="w-full h-64 object-cover"
                />
            </div>

            <div className="p-4 flex flex-col grow">
                <Link
                    className=" text-lg mb-2 text-[#1B1B1B] line-clamp-2 grow"
                    to={`/store/${book.isbn13}`}
                >
                    {book.title}
                </Link>

                <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                        <span className="text-md font-bold text-[#096D71]">
                            {book.price.toFixed(2)} EGP
                        </span>
                        {discount > 0 && (
                            <span className="text-sm text-secound line-through">
                                {book.originalPrice.toFixed(2)} EGP
                            </span>
                        )}
                    </div>
                </div>
                <div className="flex items-center justify-between gap-3 mb-2">
                    <span className="text-sm text-[#777]">
                        رمز المنتج: {book.isbn13}
                    </span>
                    <span className="text-sm text-[#777]">
                        التصنيف: {book.category || "Uncategorized"}
                    </span>
                </div>
                {!inCart ? (
                    <Button
                        onClick={() => onAddToCart(book)}
                        className="bg-[#096D71] hover:bg-secound text-white w-full rounded-full"
                        size="sm"
                    >
                        أضف الي السلة
                    </Button>
                ) : (
                    <Button
                        onClick={() => onRemoveFromCart(book)}
                        className="bg-red-500 hover:bg-secound text-white w-full rounded-full"
                        size="sm"
                    >
                        الازالة من السلة
                    </Button>
                )}
            </div>
        </div>
    );
};

export default BookCard;
