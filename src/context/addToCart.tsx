import {
    createContext,
    useContext,
    useState,
    useEffect,
    ReactNode,
} from "react";
import { toast } from "@/hooks/use-toast";

interface Book {
    id: string;
    name: string;
    price: number;
    final_price: number;
    cover: string;
    category: string;
    sku: string;
    image: string;
    quantity?: number;
}

interface BooksContextType {
    books: Book[];
    addBook: (book: Book) => void;
    removeBook: (id: string) => void;
    increaseQuantity: (id: string) => void;
    decreaseQuantity: (id: string) => void;
    getBookQuantity: (id: string) => number;
}

const BooksContext = createContext<BooksContextType | undefined>(undefined);

export const BooksProvider = ({ children }: { children: ReactNode }) => {
    const [books, setBooks] = useState<Book[]>(() => {
        const savedBooks = localStorage.getItem("books");
        return savedBooks ? JSON.parse(savedBooks) : [];
    });

    useEffect(() => {
        localStorage.setItem("books", JSON.stringify(books));
    }, [books]);

    const addBook = (book: Book) => {
        setBooks(prevBooks => {
            const existingBook = prevBooks.find(b => String(b.id) === String(book.id));
            if (existingBook) {
                toast({
                    title: "تم تحديث الكمية",
                    description: `تم زيادة كمية "${book.name}" في السلة`,
                });
                return prevBooks.map(b => 
                    String(b.id) === String(book.id)
                        ? { ...b, quantity: (b.quantity || 1) + 1 }
                        : b
                );
            }
            toast({
                title: "تمت الإضافة",
                description: `تم إضافة "${book.name}" إلى السلة`,
            });
            return [...prevBooks, { ...book, quantity: 1 }];
        });
    };

    const removeBook = (id: string) => {
        setBooks(prevBooks => {
            const bookToRemove = prevBooks.find(b => String(b.id) === id);
            if (bookToRemove) {
                toast({
                    title: "تم الإزالة",
                    description: `تم إزالة "${bookToRemove.name}" من السلة`,
                });
            }
            return prevBooks.filter(book => String(book.id) !== id);
        });
    };

    const increaseQuantity = (id: string) => {
        setBooks(prevBooks =>
            prevBooks.map(book =>
                String(book.id) === id
                    ? { ...book, quantity: (book.quantity || 1) + 1 }
                    : book
            )
        );
    };

    const decreaseQuantity = (id: string) => {
        setBooks(prevBooks =>
            prevBooks.map(book =>
                String(book.id) === id
                    ? { 
                        ...book, 
                        quantity: Math.max(1, (book.quantity || 1) - 1) 
                      }
                    : book
            )
        );
    };

    const getBookQuantity = (id: string) => {
        const book = books.find(b => String(b.id) === id);
        return book?.quantity || 0;
    };

    return (
        <BooksContext.Provider 
            value={{ 
                books, 
                addBook, 
                removeBook,
                increaseQuantity,
                decreaseQuantity,
                getBookQuantity
            }}
        >
            {children}
        </BooksContext.Provider>
    );
};

export const useBooks = () => {
    const context = useContext(BooksContext);
    if (!context) {
        throw new Error("useBooks must be used within a BooksProvider");
    }
    return context;
};