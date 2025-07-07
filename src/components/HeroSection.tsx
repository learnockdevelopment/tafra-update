import React from "react";
import { Link } from "react-router-dom";

const HeroSection: React.FC = () => {
    return (
        <section
            className="relative min-h-[95vh] lg:bg-contain bg-cover bg-[#24575c] bg-center flex items-center justify-center py-32"
            style={{
                backgroundImage: `url('assets/images/bg-hero.png')`,
                backgroundRepeat: "no-repeat",
            }}
        >
            {/* Dark overlay filter */}
            {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center text-center ">
                <div className="text-white">
                    <h1
                        style={{
                            fontWeight: 700,
                        }}
                        className="text-light md:text-4xl text-2xl md:mb-6 mb-2"
                    >
                        دار <span style={{ color: "#b89632" }}>طفرة</span> للنشر
                        والتوزيع
                    </h1>
                    <p
                        style={{
                            fontWeight: 600,
                            lineHeight: 1.4,
                        }}
                        className="text-light md:text-3xl text-xl md:mb-6 mb-2"
                    >
                        (عضو إتحاد الناشرين المصريين / عضو إتحاد الناشرين العرب)
                    </p>
                    <p
                        style={{
                            marginBottom: "30px",
                            lineHeight: 1.5,
                        }}
                        className="text-light md:text-lg text-md"
                    >
                        إيمانًا منا بمواهب وقدرات الشباب المصري والعربي ..
                        <br />
                        وبأهمية الكتاب والثقافة في صناعة نهضة المجتمع وتقدمه من
                        خلال تشجيع الإبداع وتنمية الفكر والوجدان <br />
                        قمنا بتأسيس دار طفرة للنشر والتوزيع لتكون نافذة ثقافية
                        جديدة ومختلفة .
                    </p>
                    <Link
                        to="/releases"
                        className="btn hover:scale-95 transition-all duration-300 block w-fit mx-auto md:text-lg text-md"
                        style={{
                            backgroundColor: "#b89632",
                            color: "#fff",
                            padding: "12px 40px",
                            textDecoration: "none",
                            borderRadius: "20px",
                        }}
                    >
                        اكتشف احدث اصداراتنا
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
