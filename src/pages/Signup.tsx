// src/pages/Signup.tsx
import { useState, FormEvent, ChangeEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

type FormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  image: File | null;
  address: string;
};

export default function Signup() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    image: null,
    address: '',
  });
  const { signUp, isLoading, error } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({
        ...prev,
        image: e.target.files![0]
      }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert('كلمات المرور غير متطابقة');
      return;
    }
    
    try {
      await signUp({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        image: formData.image,
        address: formData.address,
        role: 'user' // Default role
      });
      navigate('/');
    } catch (err) {
      console.error('Signup error:', err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-indigo-50 to-blue-100">
      {/* Decorative Book Side */}
      <div className="w-full md:w-1/2 bg-gradient-to-br from-gray-800 to-gray-950 flex items-center justify-center p-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-48 bg-white rounded-lg transform rotate-12"></div>
          <div className="absolute top-40 right-40 w-32 h-48 bg-white rounded-lg transform -rotate-6"></div>
          <div className="absolute bottom-20 left-1/2 w-32 h-48 bg-white rounded-lg transform rotate-3"></div>
        </div>
        
        <div className="relative z-10 max-w-md text-right text-white">
          <h2 className="text-4xl font-bold mb-4">انضم إلى مكتبتنا</h2>
          <p className="text-xl mb-8">ابدأ رحلتك مع آلاف الكتب</p>
          
          <div className="flex justify-center">
            <img src='../../public/assets/images/logo-1.png' alt="مكتبتنا" />
          </div>
        </div>
      </div>

      {/* Form Side */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
          <div className="text-right mb-8">
            <h1 className="text-3xl font-bold text-gray-800">إنشاء حساب</h1>
            <p className="text-gray-600 mt-2">املأ النموذج لإنشاء حساب جديد</p>
          </div>
          
          {error && (
            <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-lg text-right border border-red-200">
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2 text-right">
              <label htmlFor="name" className="block text-gray-700 font-medium">الاسم الكامل</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="أدخل اسمك الكامل"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
              />
            </div>
            
            <div className="space-y-2 text-right">
              <label htmlFor="email" className="block text-gray-700 font-medium">البريد الإلكتروني</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="example@email.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
              />
            </div>
            
            <div className="space-y-2 text-right">
              <label htmlFor="password" className="block text-gray-700 font-medium">كلمة المرور</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="••••••••"
                minLength={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
              />
              <p className="text-xs text-gray-500 mt-1">يجب أن تحتوي كلمة المرور على 6 أحرف على الأقل</p>
            </div>
            
            <div className="space-y-2 text-right">
              <label htmlFor="confirmPassword" className="block text-gray-700 font-medium">تأكيد كلمة المرور</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                placeholder="••••••••"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
              />
            </div>

            <div className="space-y-2 text-right">
              <label htmlFor="address" className="block text-gray-700 font-medium">العنوان (اختياري)</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="أدخل عنوانك"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
              />
            </div>

            <div className="space-y-2 text-right">
              <label htmlFor="image" className="block text-gray-700 font-medium">صورة الملف الشخصي (اختياري)</label>
              <input
                type="file"
                id="image"
                name="image"
                onChange={handleImageChange}
                accept="image/*"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
              />
            </div>
            
            <div className="flex items-center text-right">
              <input
                type="checkbox"
                id="terms"
                required
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded ml-2"
              />
              <label htmlFor="terms" className="text-gray-600 text-sm">
                أوافق على <Link to="/terms" className="text-blue-600 hover:text-blue-800">الشروط والأحكام</Link>
              </label>
            </div>
            
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 px-4 rounded-lg text-white font-medium ${isLoading ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'} transition duration-200 flex items-center justify-center`}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  جاري إنشاء الحساب...
                </>
              ) : 'إنشاء حساب'}
            </button>
          </form>
          
          <div className="mt-8 pt-6 border-t border-gray-200 text-center text-gray-600">
            <p>لديك حساب بالفعل؟{' '}
              <Link to="/login" className="text-blue-600 hover:text-blue-800 font-medium">
                تسجيل الدخول
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}