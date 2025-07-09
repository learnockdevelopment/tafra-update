import { Link } from "react-router-dom";

const Events = () => {
    return (
        <footer
            style={{
                marginTop: 60,
                paddingTop: 60,
                paddingBottom: 120,
                backgroundColor: "#096d71",
            }}
        >
            <div className="container flex flex-col justify-center sm:items-center items-start">
                <div
                    className="rounded-full d-block"
                    style={{
                        width: 140,
                        height: 140,
                        backgroundColor: "white",
                        overflow: "hidden",
                        padding: 10,
                        marginBottom: 20,
                    }}
                >
                    <img
                        src="/assets/images/logo-1.jpg"
                        className="w-full h-full"
                    />
                </div>
                <a href="#" className="flex gap-2 items-center text-white">
                    <svg
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="24px"
                        height="24px"
                        viewBox="0 0 32 32"
                        enableBackground="new 0 0 32 32"
                        xmlSpace="preserve"
                    >
                        <g>
                            <path
                                fill="#ffffff"
                                d="M16-0.035C7.159-0.035-0.035,7.159-0.035,16S7.159,32.035,16,32.035S32.035,24.841,32.035,16
                          S24.841-0.035,16-0.035z M16,30.965C7.748,30.965,1.035,24.252,1.035,16S7.748,1.035,16,1.035S30.965,7.748,30.965,16
                          S24.252,30.965,16,30.965z"
                            />
                            <path
                                fill="#ffffff"
                                stroke="#ffffff"
                                d="M19.5,7h-2.668C13.652,7,13,8.737,13,11.345L13.002,13H11.5c-0.276,0-0.5,0.224-0.5,0.5v3
		c0,0.276,0.224,0.5,0.5,0.5H13v7.5c0,0.276,0.224,0.5,0.5,0.5h3.058c0.276,0,0.5-0.224,0.5-0.5L17.06,17h2.44
		c0.276,0,0.5-0.224,0.5-0.5v-3c0-0.276-0.224-0.5-0.5-0.5h-2.441l0.003-1.396c0-0.673,0-0.673,0.629-0.674L19.48,11
		c0.127,0.004,0.268-0.045,0.366-0.139S20,10.636,20,10.5v-3C20,7.224,19.776,7,19.5,7z M19,9.98l-1.289-0.05
		c-1.521,0-1.648,0.827-1.648,1.672l-0.004,1.896c0,0.133,0.052,0.26,0.146,0.354C16.298,13.947,16.425,14,16.558,14H19v2h-2.44
		c-0.276,0-0.5,0.224-0.5,0.5L16.058,24H14v-7.5c0-0.276-0.224-0.5-0.5-0.5H12v-2h1.503c0.133,0,0.26-0.053,0.354-0.147
		c0.094-0.094,0.146-0.221,0.146-0.354L14,11.344C14,9.079,14.424,8,16.832,8H19V9.98z"
                            />
                        </g>
                    </svg>
                    Tafra facebook
                </a>
                <ul
                    className="text-white flex sm:gap-20 gap-2 w-full justify-center sm:flex-row flex-col"
                    style={{
                        textAlign: "start",
                        listStyle: "none",
                        marginTop: 20,
                        paddingBottom: 60,
                        borderBottom: "1px solid #ffbe00",
                    }}
                >
                    <li>
                        <Link
                            to="/"
                            className="font-700 hover:text-secound font-medium"
                        >
                            الرئيسية
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/events"
                            className="font-700 hover:text-secound font-medium"
                        >
                            الفاعليات
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/store"
                            className="font-700 hover:text-secound font-medium"
                        >
                            المتجر
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/releases"
                            className="font-700 hover:text-secound font-medium"
                        >
                            إصدارات
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contact"
                            className="font-700 hover:text-secound font-medium"
                        >
                            اتصل بنا
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Events;
