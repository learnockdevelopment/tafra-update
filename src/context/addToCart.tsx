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
}

interface BooksContextType {
    books: Book[];
    addBook: (book: Book) => void;
    removeBook: (id: string) => void;
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
        const newBook: Book = book;
        setBooks([...books, newBook]);
        toast({
            title: "تمت الإضافة",
            description: `تم إضافة "${book.name}" إلى السلة`,
        });
    };

    const removeBook = (id: string) => {
        setBooks(books.filter((book) => String(book.id) !== id));
    };

    return (
        <BooksContext.Provider value={{ books, addBook, removeBook }}>
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
