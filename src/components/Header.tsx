import React, { useEffect, useState } from "react";
import { BookOpen, ShoppingCart, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

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
    const [scrolled, setScrolled] = useState(false);

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
                    ? "fixed top-0 z-50"
                    : "py-6 bg-[#096D71] text-white relative z-50"
            } transition-all duration-300 w-full`}
        >
            <div className="container lg:block hidden mx-auto px-4">
                <div className="flex items-center justify-between">
                    {/* Right Navigation */}
                    <nav className="flex items-center gap-20">
                        <Button variant="ghost" size="sm" className="relative">
                            <ShoppingCart className="!size-6 text-secound" />
                            {cartItemsCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                    {cartItemsCount}
                                </span>
                            )}
                        </Button>
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
                        className={`${
                            fixed
                                ? "translate-x-[40%]"
                                : "absolute translate-x-[-25%] top-[-10px] left-[50%]"
                        } flex items-center gap-2 rounded-full overflow-hidden aspect-square translate-y-[-10px] w-40`}
                    >
                        <img
                            src="/assets/images/logo.jpg"
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
                    className="rounded-full"
                    style={{
                        width: "100px",
                        height: "100px",
                        backgroundColor: "white",
                        overflow: "hidden",
                        padding: "10px",
                        margin: "10px",
                    }}
                >
                    <img
                        src="/assets/images/logo.jpg"
                        className="w-full h-full scale-150 translate-y-2"
                    />
                </div>
                <div className="flex gap-6">
                    <div className="tp-header-action-item d-flex tp-header-action-item-search">
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
                    </div>
                    <div className="tp-header-action-item d-flex m-0 tp-header-action-item-search">
                        <button
                            type="button"
                            className="tp-header-action-btn tp-search-open-btn"
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
                                className="tp-header-action-btn tp-search-open-btn"
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
        </header>
    );
};

export default Header;
