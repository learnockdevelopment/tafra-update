import Header from "@/components/Header";
import { useSearchParams } from "react-router-dom";

export default function FailedOrder() {
    const [searchParams] = useSearchParams();
    return (
        <>
            <Header fixed={false} />
            <div
                className="container mx-auto px-4 py-8 text-left"
                style={{ direction: "ltr" }}
            >
                <h2 className="text-4xl">
                    Failed Order {searchParams.get("order-id") || "---"}
                </h2>
                <h3 className="text-2xl">
                    Invoice id {searchParams.get("invoice-id") || "---"}
                </h3>
            </div>
        </>
    );
}
