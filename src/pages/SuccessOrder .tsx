import Header from "@/components/Header";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

export default function SuccessOrder() {
    // const [searchParams] = useSearchParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getSuccess = async () => {
            setLoading(true);
            const paymentReference = JSON.parse(
                localStorage.getItem("paymentReference")
            );
            const userString = JSON.parse(localStorage.getItem("user"));
            try {
                const response = await fetch(
                    "https://tafra.learnock.com/api/payments/callback",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: "Bearer YOUR_API_KEY",
                            // Accept: "application/json",
                        },
                        body: JSON.stringify({
                            user_id: userString?.id,
                            invoiceId: String(paymentReference?.invoice),
                            order_id: paymentReference?.order,
                        }),
                    }
                );
                console.log(response);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        getSuccess();
    }, []);

    return (
        <>
            <Header fixed={false} />
            {loading ? (
                <div>
                    <img
                        src="./spinner.svg"
                        alt="spinner"
                        className="w-72 mx-auto mb-6"
                    />
                </div>
            ) : (
                <div className="container mx-auto px-4 py-8 text-center">
                    <img
                        src="./Success.gif"
                        alt="Success"
                        className="w-32 mx-auto mb-6"
                    />
                    <h2 className="text-4xl mb-6">تمت عملية الشراء بنجاح</h2>

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
            )}
        </>
    );
}
