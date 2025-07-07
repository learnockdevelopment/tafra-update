const HomeEvents = () => {
    return (
        <section style={{ paddingBlock: 60 }} className="container">
            <h2
                style={{ color: "#096d71", marginBottom: 10 }}
                className="text-center font-bold md:text-4xl text-2xl"
            >
                أحدث فاعليات ومعارض الدار
            </h2>
            <p
                className="text-center md:text-2xl text-xl"
                style={{ color: "#777777", marginBottom: 20 }}
            >
                شاركت دار طفرة للنشر والتوزيع في العديد من الفاعليات والمعارض في
                داخل مصر وخارجها …..
            </p>
            <div className="flex justify-between flex-wrap mx-auto gap-x-0 gap-y-10">
                <div
                    className="md:p-4 p-1 lg:w-1/2 w-full"
                    style={{
                        fontSize: 24,
                        lineHeight: "1.2",
                        borderRadius: 20,
                    }}
                >
                    <div
                        style={{
                            borderRadius: 20,
                            overflow: "hidden",
                            marginBottom: 16,
                        }}
                    >
                        <img
                            src="/assets/images/events/1.jpg"
                            alt="Image Event"
                            className="w-full h-full"
                        />
                    </div>
                    <h3
                        style={{
                            color: "#1b1b1b",

                            fontWeight: 600,
                            marginBottom: 16,
                        }}
                        className="md:text-2xl text-lg"
                    >
                        معرض الرياض الدولي للكتاب 2024
                    </h3>
                    <p
                        className="md:text-lg text-base"
                        style={{ color: "#777777" }}
                    >
                        شاركت دار طفرة للنشر والتوزيع في العديد من الفاعليات
                        والمعارض في داخل مصر وخارجها …..
                    </p>
                </div>
                <div
                    className="md:p-4 p-1 lg:w-1/2 w-full"
                    style={{
                        fontSize: 24,
                        lineHeight: "1.2",
                        borderRadius: 20,
                    }}
                >
                    <div
                        style={{
                            borderRadius: 20,
                            overflow: "hidden",
                            marginBottom: 16,
                        }}
                    >
                        <img
                            src="/assets/images/events/2.jpg"
                            alt="Image Event"
                            className="w-full h-full"
                        />
                    </div>
                    <h3
                        style={{
                            color: "#1b1b1b",

                            fontWeight: 600,
                            marginBottom: 16,
                        }}
                        className="md:text-2xl text-lg"
                    >
                        معرض القاهرة الدولي للكتاب 2024
                    </h3>
                    <p
                        className="md:text-lg text-base"
                        style={{ color: "#777777" }}
                    >
                        من فعاليات دار طفرة للنشر والتوزيع إحدى شركات مجموعة MRG
                        في معرض القاهرة الدولي للكتاب
                    </p>
                </div>
                <div
                    className="md:p-4 p-1 lg:w-1/2 w-full"
                    style={{
                        fontSize: 24,
                        lineHeight: "1.2",
                        borderRadius: 20,
                    }}
                >
                    <div
                        style={{
                            borderRadius: 20,
                            overflow: "hidden",
                            marginBottom: 16,
                        }}
                    >
                        <img
                            src="/assets/images/events/3.jpg"
                            alt="Image Event"
                            className="w-full h-full"
                        />
                    </div>
                    <h3
                        style={{
                            color: "#1b1b1b",

                            fontWeight: 600,
                            marginBottom: 16,
                        }}
                        className="md:text-2xl text-lg"
                    >
                        مناقشة كتاب سنغافورة بناء الدولة وإعداد الإنسان والمجتمع
                    </h3>
                    <p
                        className="md:text-lg text-base"
                        style={{ color: "#777777" }}
                    >
                        بحضور سيادة السفير “دومينيك جوه” سفير دولة سنغافورة
                        بالقاهرة ووفد من السفارة السنغافورية تناول اللقاء أهم
                        النقاط والموضوعات التي دار حولها الكتاب بأهم التفاصيل عن
                        تجربة نجاح دولة سنغافورة.
                    </p>
                </div>
                <div
                    className="md:p-4 p-1 lg:w-1/2 w-full"
                    style={{
                        fontSize: 24,
                        lineHeight: "1.2",
                        borderRadius: 20,
                    }}
                >
                    <div
                        style={{
                            borderRadius: 20,
                            overflow: "hidden",
                            marginBottom: 16,
                        }}
                    >
                        <img
                            src="/assets/images/events/4.jpg"
                            alt="Image Event"
                            className="w-full h-full"
                        />
                    </div>
                    <h3
                        style={{
                            color: "#1b1b1b",

                            fontWeight: 600,
                            marginBottom: 16,
                        }}
                        className="md:text-2xl text-lg"
                    >
                        التربية الإعلامية وتضليل الجماهير
                    </h3>
                    <p
                        className="md:text-lg text-base"
                        style={{ color: "#777777" }}
                    >
                        مع الإعلامي اللامع د.جمال الشاعر أثناء استضافته في صالون
                        طفرة الثقافي في حوار لمناقشة موضوع (التربية الإعلامية
                        وتضليل الجماهير)
                    </p>
                </div>
            </div>
        </section>
    );
};
export default HomeEvents;
