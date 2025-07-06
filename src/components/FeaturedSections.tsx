
import React from 'react';

const FeaturedSections: React.FC = () => {
  return (
    <>
      <section className="container lg:p-5 p-2" style={{ marginTop: "80px" }}>
        <div
          style={{
            border: "1px solid #096d7154",
            padding: "40px",
            borderRadius: "20px",
            display: "flex",
            gap: "50px",
            alignItems: "center",
            boxShadow: '0px 0px 14.5px 2px rgba(203, 203, 203, 0.25)'
          }}
          className="lg:flex-row flex-col"
        >
          <div>
            <h2
              style={{
                color: "#096d71",
                marginBottom: "16px"
              }}
              className='font-bold md:text-4xl text-2xl'
            >
              أهداف الدار
            </h2>
            <p className="text-black md:text-xl text-bace" style={{ lineHeight: '40px' }}>
              – اطلاق المهارات الإبداعية ورعاية المواهب الأدبية
              الفريدة في مصر والعالم العربي وتشجيع جميع المهتمين من كل
              الأعمار للمشاركة.<br />
              – نشر الأعمال الأدبية الراقية ذات الجودة العالية والناتج
              المعرفي والثقافي الخلاق .<br />
              – تسليط الضوء على الرموز الأدبية والأعمال التراثية
              القديمة وتقديمها بطريقة تناسب الجيل الحالي ، والاحتفاء
              باللغة والثقافة والتاريخ المصري والعربي.<br />
              – نقل المعرفة والمساهمة في حركة الترجمة للكتب والإبداعات
              العلمية والفكرية من وإلى العربية .
            </p>
          </div>
          <div>
            <img
              src="/assets/images/goles.jpg"
              className="w-lg-auto w-75 mx-auto d-block"
            />
          </div>
        </div>
      </section>

      <section
        className="container lg:px-5 px-2 flex gap-5 lg:flex-row flex-col lg:justify-around justify-center"
        style={{paddingBlock: "60px", marginBottom: "80px"}}
      >
        <div
          style={{
                    border: "1px solid #096d7154",
                    padding: "40px",
                    borderRadius: "20px",
                    textAlign: "center",
                    boxShadow: "0px 0px 14.5px 2px rgba(203, 203, 203, 0.25)"
                  }}
                
          className="w-9/12 lg:w-3/12 mx-auto"
        >
          <h2
            style={{fontSize: "40px", color: "#096d71", marginBottom: "10px"}}
            className='font-bold'
          >
            رسالة الدار
          </h2>
          <p className="text-black">
            تقديم جميع خدمات النشر من إصدار وطباعة وتوزيع بجودة عالية
            وباستخدام أفضل تقنيات النشر
          </p>
        </div>

        <div
          style={{
                    border: "1px solid #096d7154",
                    padding: "40px",
                    borderRadius: "20px",
                    textAlign: "center",
                    boxShadow: "0px 0px 14.5px 2px rgba(203, 203, 203, 0.25)"
                }}
          className="w-9/12 lg:w-3/12 mx-auto"
        >
          <h2
            style={{fontSize: "40px", color: "#096d71", marginBottom: "10px"}}
            className='font-bold'
          >
            رؤية الدار
          </h2>
          <p className="text-black">
            أن تكون دار طفرة للنشر والتوزيع خطوة على طريق الثقافة
            والتنوير والتنمية والتطوير .. وأن تكون وسيط بين الكاتب
            الموهوب والقارئ الباحث عن المعرفة .
          </p>
        </div>
      </section>












        {/* /************************************ */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8 mb-16">
            <div className="lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="مكتبة عربية"
                className="rounded-lg shadow-lg w-full h-80 object-cover"
              />
            </div>
            <div className="lg:w-1/2 text-right">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                الأدب العربي الكلاسيكي
              </h3>
              <p className="text-gray-600 text-lg mb-6">
                اكتشف روائع الأدب العربي من أعمال نجيب محفوظ وطه حسين وأحمد شوقي.
                مجموعة منتقاة بعناية من أهم الأعمال التي شكلت الثقافة العربية عبر التاريخ.
              </p>
              <button className="bg-amber-600 text-white px-8 py-3 rounded-lg hover:bg-amber-700 transition-colors">
                استكشف المجموعة
              </button>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row-reverse items-center gap-8 mb-16">
            <div className="lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80"
                alt="كتب علمية"
                className="rounded-lg shadow-lg w-full h-80 object-cover"
              />
            </div>
            <div className="lg:w-1/2 text-right">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                الكتب العلمية والتقنية
              </h3>
              <p className="text-gray-600 text-lg mb-6">
                مواكب للتطور التقني والعلمي، نقدم لك أحدث الكتب في مجالات البرمجة والذكاء الاصطناعي
                والطب والهندسة مترجمة بدقة عالية ومراجعة من خبراء متخصصين.
              </p>
              <button className="bg-amber-600 text-white px-8 py-3 rounded-lg hover:bg-amber-700 transition-colors">
                تصفح الكتب العلمية
              </button>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2022&q=80"
                alt="كتب الأطفال"
                className="rounded-lg shadow-lg w-full h-80 object-cover"
              />
            </div>
            <div className="lg:w-1/2 text-right">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                عالم الأطفال الساحر
              </h3>
              <p className="text-gray-600 text-lg mb-6">
                نؤمن بأهمية القراءة في تنمية عقول الأطفال. مجموعة رائعة من القصص المصورة
                والحكايات التعليمية التي تجمع بين المتعة والفائدة لأطفالنا الأعزاء.
              </p>
              <button className="bg-amber-600 text-white px-8 py-3 rounded-lg hover:bg-amber-700 transition-colors">
                قصص الأطفال
              </button>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default FeaturedSections;
