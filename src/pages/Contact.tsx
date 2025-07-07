import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
    return (
        <>
            <Header fixed={false} active="contact" />
            <div
                style={{
                    backgroundImage: 'url("/assets/images/bg-contact.jpg")',
                }}
                className="h-[80vh] bg-canter relative"
            >
                <div className="absolute top-0 left-0 w-full h-full z-0 bg-black opacity-40"></div>

                <div className=" container relative z-40 text-white text-5xl lg:px-72 px-20 leading-snug h-full flex items-center before:w-[14%] before:h-full before:bg-secound before:absolute before:block before:mb-40">
                    <h1 className="md:w-3/4 w-full relative z-10 ps-6">
                        دار طفرة للنشر والتوزيع إحدى شركات مجموعة MRG
                    </h1>
                </div>
            </div>

            <div className="container flex py-20 justify-evenly gap-6 lg:flex-row flex-col">
                <div className="p-10 text-center flex flex-col gap-4 justify-center items-center shadow-lg border border-[#BED8D9] rounded-sm min-w-72">
                    <Mail className="text-secound size-16" />
                    <div className="text grow">
                        <h3 className="text-[#096D71] text-2xl font-bold mb-2">
                            البريد الالكتروني
                        </h3>
                        <p className="text-lg text-[#096D71]">
                            info@tafrabooks.com
                        </p>
                    </div>
                </div>

                <div className="p-10 text-center flex flex-col gap-4 justify-center items-center shadow-lg border border-[#BED8D9] rounded-sm min-w-72">
                    <Phone className="text-secound size-16" />
                    <div className="text grow">
                        <h3 className="text-[#096D71] text-2xl font-bold mb-2">
                            رقم الهاتف
                        </h3>
                        <p className="text-lg text-[#096D71]">
                            01277759680 <br /> 0223494194
                        </p>
                    </div>
                </div>

                <div className="p-10 text-center flex flex-col gap-4 justify-center items-center shadow-lg border border-[#BED8D9] rounded-sm min-w-72">
                    <MapPin className="text-secound size-16" />
                    <div className="text grow">
                        <h3 className="text-[#096D71] text-2xl font-bold mb-2">
                            العنوان
                        </h3>
                        <p className="text-lg text-[#096D71]">
                            82 ش مكرم عبيد – مدينة نصر
                        </p>
                    </div>
                </div>
            </div>

            <div className="container">
                <h2
                    style={{
                        fontSize: "40px",
                        color: "#096d71",
                        marginBottom: "10px",
                    }}
                    className="text-center font-bold"
                >
                    يسعدنا تواصلكم معنا
                </h2>

                <form
                    style={{
                        border: "1px solid #096d7154",
                        borderRadius: "20px",
                        display: "flex",
                        alignItems: "center",
                        boxShadow:
                            "0px 0px 14.5px 2px rgba(203, 203, 203, 0.25)",
                    }}
                    className="flex-col gap-4 *:w-full sm:p-10 p-4"
                >
                    <div className="flex sm:*:w-1/2 *:w-full w-full sm:flex-row flex-col gap-4">
                        <input
                            type="text"
                            className="text-[#FDFDFD] border border-[#096D7142] px-4 py-2 rounded"
                            placeholder="الاسم الاول"
                        />
                        <input
                            type="text"
                            className="text-[#FDFDFD] border border-[#096D7142] px-4 py-2 rounded"
                            placeholder="الاسم الاخير"
                        />
                    </div>
                    <input
                        type="email"
                        className="text-[#FDFDFD] border border-[#096D7142] px-4 py-2 rounded"
                        placeholder="البريد الالكتروني"
                    />

                    <textarea
                        className="text-[#FDFDFD] border border-[#096D7142] px-4 py-2 rounded"
                        rows={6}
                        placeholder="اكتب رسالتك..."
                    ></textarea>

                    <button
                        className="btn hover:scale-95 transition-all duration-300 block !w-fit mx-auto"
                        style={{
                            backgroundColor: "#b89632",
                            color: "#fff",
                            padding: "12px 140px",
                            textDecoration: "none",
                            borderRadius: "20px",
                        }}
                    >
                        ارسالِ
                    </button>
                </form>
            </div>
            <Footer />
        </>
    );
};

export default Contact;
