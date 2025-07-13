import React, { Fragment, useEffect, useState } from "react";
import { BookOpen, ShoppingCart, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import PaymentModal from "./PaymentModel";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import { useBooks } from "@/context/addToCart";
import { useAuth } from "@/context/AuthContext";


interface HeaderProps {
    cartItemsCount?: number;
    fixed?: boolean;
    active?: string;
}

const Header: React.FC<HeaderProps> = ({
    cartItemsCount,
    fixed = true,
    active = "/",
}) => {
const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { books, removeBook } = useBooks();
    const { user } = useAuth();
    // Check if the user is logged in
    const isLoggedIn = !!user;
    // Set the initial state based on scroll position
    

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const handlePaymentSuccess = (paymentData: any) => {
        console.log('تم الدفع بنجاح:', paymentData);
        // Handle successful payment (redirect, show confirmation, etc.)
        setIsPaymentModalOpen(false);
    };

    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    });


    return (
        <header
            className={`${
                scrolled && fixed
                    ? "shadow-md bg-white text-black"
                    : !scrolled && fixed
                    ? "bg-transparent text-white"
                    : ""
            } ${
                fixed
                    ? "lg:py-2 fixed top-0 z-50"
                    : "lg:py-10 bg-[#096D71] text-white relative z-50"
            } transition-all duration-300 w-full`}
        >
            <div className="container lg:block hidden mx-auto px-4">
                <div className="flex items-center justify-between">
                    {/* Right Navigation */}
                    <nav className="flex items-center gap-20">
                        <DropdownMenu dir="rtl">
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="relative"
                                >
                                    <ShoppingCart className="!size-6 text-secound" />
                                    {cartItemsCount > 0 ||
                                        (books.length > 0 && (
                                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                                {cartItemsCount || books.length}
                                            </span>
                                        ))}
                                </Button>
                            </DropdownMenuTrigger>
                          <DropdownMenuContent className="ms-6 min-w-96">
  <DropdownMenuLabel className="text-2xl font-bold">
    العربة
  </DropdownMenuLabel>
  <DropdownMenuSeparator />
  {books.length > 0 ? (
    <>
      {books.map((book) => (
        <DropdownMenuItem 
          key={book.id} 
          className="justify-between gap-2"
        >
          <div className="flex items-center gap-2">
            <img
              src={`https://tafra.learnock.com/storage/${book.image}`}
              alt={book.name}
              className="w-16"
            />
            <div>
              <h4 className="text-md font-bold">
                {book.name}
              </h4>
              <p>{book.price} EGP</p>
            </div>
          </div>
          <Button
            onClick={() => removeBook(book.id)}
            className="bg-red-500 hover:bg-secound text-white w-fit rounded-sm text-sm"
            size="sm"
          >
            ازالة
          </Button>
        </DropdownMenuItem>
      ))}
      <DropdownMenuSeparator />
      <DropdownMenuItem className="p-0">
        <Button
          onClick={() => setIsPaymentModalOpen(true)}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-2"
        >
          شراء الكل ({books.length})
        </Button>
        
      </DropdownMenuItem>
    </>
  ) : (
    <DropdownMenuItem className="text-center font-bold block">
      العربة فارغة
    </DropdownMenuItem>
  )}
</DropdownMenuContent>
                        </DropdownMenu>

                        <Link
                            to="/"
                            className={`${
                                active === "/" && "text-secound"
                            } font-700 hover:text-secound font-medium`}
                        >
                            الرئيسية
                        </Link>
                        <Link
                            to="/events"
                            className={`${
                                active === "events" && "text-secound"
                            } font-700 hover:text-secound font-medium`}
                        >
                            الفاعليات
                        </Link>
                        
                        <Link
                            to="/store"
                            className={`${
                                active === "store" && "text-secound"
                            } font-700 hover:text-secound font-medium`}
                        >
                            المتجر
                        </Link>
                    </nav>

                    {/* Centered Logo */}
                    <div
                        // className={`${
                        //     fixed
                        //         ? "translate-x-[40%]"
                        //         : "absolute translate-x-[-25%] top-[-10px] left-[50%]"
                        // } flex items-center gap-2 rounded-full overflow-hidden aspect-square translate-y-[-10px] w-40`}
                        className={`${
                            fixed
                                ? "translate-x-[40%]"
                                : "absolute translate-x-[-25%] left-[50%]"
                        } flex items-center gap-2 overflow-hidden aspect-square w-24 bg-white p-1.5 rounded-full`}
                    >
                        <img
                            src="/assets/images/logo-1.jpg"
                            className="w-full h-full "
                        />
                    </div>

                    {/* Left Navigation & Icons */}
                    <div className="flex items-center gap-4">
                        <nav className="flex items-center gap-20 ml-6">
                            <Link
                                to="/releases"
                                className={`${
                                    active === "releases" && "text-secound"
                                } font-700 hover:text-secound font-medium`}
                            >
                                إصدارات
                            </Link>
                            <Link
                                to="/contact"
                                className={`${
                                    active === "contact" && "text-secound"
                                } font-700 hover:text-secound font-medium`}
                            >
                                اتصل بنا
                            </Link>
                            {
                            isLoggedIn && (
                                <Link
                                to="/profile"
                                className={`${
                                    active === "profile" && "text-secound"
                                } font-700 hover:text-secound font-medium`}
                            >
                                حسابي
                            </Link>
                            ) 
                        }
                            
                        </nav>

                        <div className="flex items-center gap-2">
                            <Button
                                variant="ghost"
                                size="sm"
                                className="relative"
                            >
                                <Search className="!size-6" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container lg:hidden flex items-center justify-between">
                <div
                    className="rounded-full aspect-square w-20 bg-white p-4"
                    style={{
                        overflow: "hidden",
                        padding: "10px",
                        margin: "10px",
                    }}
                >
                    <img
                        src="/assets/images/logo-1.jpg"
                        className="w-full h-full translate-y-2"
                    />
                </div>
                <div className="flex gap-6">
                    {/* <div className="tp-header-action-item d-flex tp-header-action-item-search">
                        <button
                            type="button"
                            className="tp-header-action-btn tp-search-open-btn"
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10.5 10H14.5M12.5 8V12M3.71 5.4H18.924C20.302 5.4 21.297 6.67 20.919 7.948L19.265 13.548C19.01 14.408 18.196 15 17.27 15H8.112C7.185 15 6.37 14.407 6.116 13.548L3.71 5.4ZM3.71 5.4L3 3M16.5 21C16.8978 21 17.2794 20.842 17.5607 20.5607C17.842 20.2794 18 19.8978 18 19.5C18 19.1022 17.842 18.7206 17.5607 18.4393C17.2794 18.158 16.8978 18 16.5 18C16.1022 18 15.7206 18.158 15.4393 18.4393C15.158 18.7206 15 19.1022 15 19.5C15 19.8978 15.158 20.2794 15.4393 20.5607C15.7206 20.842 16.1022 21 16.5 21ZM8.5 21C8.89782 21 9.27936 20.842 9.56066 20.5607C9.84196 20.2794 10 19.8978 10 19.5C10 19.1022 9.84196 18.7206 9.56066 18.4393C9.27936 18.158 8.89782 18 8.5 18C8.10218 18 7.72064 18.158 7.43934 18.4393C7.15804 18.7206 7 19.1022 7 19.5C7 19.8978 7.15804 20.2794 7.43934 20.5607C7.72064 20.842 8.10218 21 8.5 21Z"
                                    stroke="#B89632"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </div> */}
                    <DropdownMenu dir="rtl">
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="ghost"
                                size="sm"
                                className="relative p-0"
                            >
                                <ShoppingCart className="!size-6 text-secound" />
                                {cartItemsCount > 0 ||
                                    (books.length > 0 && (
                                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                            {cartItemsCount || books.length}
                                        </span>
                                    ))}
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="me-6 min-w-64">
                            <DropdownMenuLabel className="text-2xl font-bold">
                                العربة
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            {books.length > 0 ? (
                                books.map((book) => (
                                    <Fragment key={book.id}>
                                        <DropdownMenuItem className=" justify-between gap-2 flex-col items-start">
                                            <div className="flex items-center gap-2">
                                                <img
                                                    src={`https://tafra.learnock.com/storage/${book.image}`}
                                                    alt={book.name}
                                                    className="w-16"
                                                />
                                                <div>
                                                    <h4 className="text-md font-bold">
                                                        {book.name}
                                                    </h4>
                                                    <p>{book.price} EGP</p>
                                                </div>
                                            </div>

                                            <Button
                                                onClick={() =>
                                                    removeBook(book.id)
                                                }
                                                className="bg-red-500 hover:bg-secound text-white w-fit rounded-sm text-sm"
                                                size="sm"
                                            >
                                                ازالة{" "}
                                            </Button>
                                        </DropdownMenuItem>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem className="text-right">
                                            <Button
                                               onClick={() =>
                                                    window.location.href = "/store"}
                                                className="w-full text-center"
                                            >
                                                شراء
                                            </Button>
                                        </DropdownMenuItem>
                                    </Fragment>
                                ))
                            ) : (
                                <DropdownMenuItem className="text-center font-bold block">
                                    العربة فارغة
                                </DropdownMenuItem>
                            )}

                        </DropdownMenuContent>
                    </DropdownMenu>

                    <div className="tp-header-action-item d-flex m-0 tp-header-action-item-search">
                        <button
                            type="button"
                            className="tp-header-action-btn tp-search-open-btn h-full"
                        >
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    style={{ stroke: "#b89632" }}
                                />
                                <path
                                    d="M18.9999 19L14.6499 14.65"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    style={{ stroke: "#b89632" }}
                                />
                            </svg>
                        </button>
                    </div>

                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <button
                                type="button"
                                className="tp-header-action-btn tp-search-open-btn h-full"
                            >
                                <svg
                                    width="24px"
                                    height="24px"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M4 18L20 18"
                                        stroke="#B89632"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M4 12L20 12"
                                        stroke="#B89632"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M4 6L20 6"
                                        stroke="#B89632"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="text-right">
                            <DropdownMenuItem>
                                <Link to="/" className="w-full">
                                    الرئيسية
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link to="/events" className="w-full">
                                    الفاعليات
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link to="/store" className="w-full">
                                    المتجر
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <Link to="/releases" className="w-full">
                                    إصدارات
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link to="/contact" className="w-full">
                                    اتصل بنا
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
          <PaymentModal
                isOpen={isPaymentModalOpen}
                onClose={() => setIsPaymentModalOpen(false)}
                books={books || []} // Ensure books is always an array
            />
        </header>
    );
};

export default Header;
