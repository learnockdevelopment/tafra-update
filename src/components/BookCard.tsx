import React from "react";
import { Star, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface Book {
    image?: string;
    id: number;
    name: string;
    price: number;
    final_price: number;
    cover: string;
    category: string;
    sku: string;
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
        ((book.price - book.final_price) / book.price) * 100
    );

    return (
        <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden flex flex-col">
            <div className="relative">
                <img
                    src={`https://tafra.learnock.com/storage/${book.cover}`}
                    alt={book.name}
                    className="w-full h-64 object-cover"
                />
            </div>

            <div className="p-4 flex flex-col grow">
                <Link
                    className=" text-lg mb-2 text-[#1B1B1B] line-clamp-2 grow"
                    to={`/store/${book.id}`}
                >
                    {book.name}
                </Link>

                <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                        <span className="text-md font-bold text-[#096D71]">
                            {book.final_price.toFixed(2)} EGP
                        </span>
                        {book.price && discount > 0 && (
                            <span className="text-sm text-secound line-through">
                                {Number(book.price)?.toFixed(2)} EGP
                            </span>
                        )}
                    </div>
                </div>
                <div className="flex items-center justify-between gap-3 mb-2">
                    <span className="text-sm text-[#777]">
                        رمز المنتج: {book.sku}
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
