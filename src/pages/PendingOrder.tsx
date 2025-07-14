import Header from "@/components/Header";
import { Link, useSearchParams } from "react-router-dom";

export default function PendingOrder() {
    // const [searchParams] = useSearchParams();
    return (
        <>
            <Header fixed={false} />

            <div className="container mx-auto px-4 py-8 text-center">
                <img
                    src="./Pending.gif"
                    alt="Pending"
                    className="w-32 mx-auto mb-6"
                />
                <h2 className="text-4xl mb-6">هذه العملية معلقة</h2>

                <div className="flex gap-4 justify-center w-fit mx-auto">
                    <Link
                        to="/"
                        className="btn hover:scale-95 transition-all duration-300 block w-fit mx-auto md:text-lg text-md"
                        style={{
                            backgroundColor: "#b89632",
                            color: "#fff",
                            padding: "12px 30px",
                            textDecoration: "none",
                            borderRadius: "20px",
                        }}
                    >
                        الرئيسية
                    </Link>
                    <Link
                        to="/store"
                        className="btn hover:scale-95 transition-all duration-300 block w-fit mx-auto md:text-lg text-md"
                        style={{
                            border: "2px solid #b89632",
                            color: "#b89632",
                            padding: "12px 40px",
                            textDecoration: "none",
                            borderRadius: "20px",
                        }}
                    >
                        المتجر
                    </Link>
                </div>

                {/* <h2 className="text-4xl">
                    Success Order {searchParams.get("order-id") || "---"}
                </h2>
                <h3 className="text-2xl">
                    Invoice id {searchParams.get("invoice-id") || "---"}
                </h3> */}
            </div>

            {/* <div
                className="container mx-auto px-4 py-8 text-left"
                style={{ direction: "ltr" }}
            >
                <h2 className="text-4xl">
                    Pending Order {searchParams.get("order-id") || "---"}
                </h2>
                <h3 className="text-2xl">
                    Invoice id {searchParams.get("invoice-id") || "---"}
                </h3>
            </div> */}
        </>
    );
}
