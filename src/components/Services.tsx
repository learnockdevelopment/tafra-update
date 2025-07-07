const Services = () => {
    return (
        <div style={{ paddingBlock: "60px" }}>
            <h2
                style={{
                    fontSize: "40px",
                    color: "#096d71",
                    marginBottom: "10px",
                }}
                className="text-center font-bold"
            >
                خدماتنا
            </h2>
            <section
                style={{
                    backgroundImage: "url(/assets/images/bg-services.jpg)",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    padding: "60px",
                }}
                className="relative"
            >
                <div className="h-full w-full bg-[#1B1B1B] opacity-50 absolute top-0 left-0 z-[2]"></div>
                <div className="container flex justify-center flex-wrap lg:w-1/2 w-full mx-auto lg:gap-auto gap-x-[100px] gap-y-[50px] relative z-[3]">
                    <div
                        className="p-5 flex justify-center items-center text-center"
                        style={{
                            border: "1px solid #ffbe00",
                            color: "#ffffff",
                            fontSize: "24px",
                            width: "180px",
                            height: "180px",
                            lineHeight: "1.2",
                            borderRadius: "20px",
                        }}
                    >
                        مشاركات ومعارض
                    </div>
                    <div
                        className="p-5 flex justify-center items-center text-center"
                        style={{
                            border: "1px solid #ffbe00",
                            color: "#ffffff",
                            fontSize: "24px",
                            width: "180px",
                            height: "180px",
                            lineHeight: "1.2",
                            borderRadius: "20px",
                        }}
                    >
                        مؤلفين والكتاب
                    </div>
                    <div
                        className="p-5 flex justify-center items-center text-center"
                        style={{
                            border: "1px solid #ffbe00",
                            color: "#ffffff",
                            fontSize: "24px",
                            width: "180px",
                            height: "180px",
                            lineHeight: "1.2",
                            borderRadius: "20px",
                        }}
                    >
                        إصدار في مختلف المجالات
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
