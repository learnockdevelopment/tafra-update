import { useState, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

type FormData = {
  email: string;
  password: string;
};

export default function Login() {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  });
  const { login, isLoading, error } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    try {
      await login({
        email: formData.email,
        password: formData.password
      });
      console.log('Login successful');
      // navigate('/'); // Redirect to home after successful login
    } catch (err) {
      // Error is already handled by AuthContext
      console.error('Login error:', err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-indigo-50 to-blue-100">
      {/* Decorative Book Side */}
      <div className="w-full md:w-1/2 bg-gradient-to-br from-blue-600 to-indigo-800 flex items-center justify-center p-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-48 bg-white rounded-lg transform rotate-12"></div>
          <div className="absolute top-40 right-40 w-32 h-48 bg-white rounded-lg transform -rotate-6"></div>
          <div className="absolute bottom-20 left-1/2 w-32 h-48 bg-white rounded-lg transform rotate-3"></div>
        </div>
        
        <div className="relative z-10 max-w-md text-right text-white">
          <h2 className="text-4xl font-bold mb-4">مرحبًا بعودتك</h2>
          <p className="text-xl mb-8">آلاف الكتب تنتظرك في مكتبتنا</p>
          
          <div className="flex justify-end">
            <div className="relative">
              <div className="w-20 h-28 bg-yellow-300 rounded-lg absolute -right-3 -top-3 transform rotate-6 shadow-lg"></div>
              <div className="w-20 h-28 bg-pink-300 rounded-lg absolute -right-1 -top-4 transform -rotate-6 shadow-lg"></div>
              <div className="w-20 h-28 bg-white rounded-lg relative shadow-lg flex items-center justify-center">
                <span className="text-gray-800 text-xs font-bold">مكتبتنا</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Form Side */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
          <div className="text-right mb-8">
            <h1 className="text-3xl font-bold text-gray-800">تسجيل الدخول</h1>
            <p className="text-gray-600 mt-2">أدخل بياناتك للوصول إلى حسابك</p>
          </div>
          
          {error && (
            <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-lg text-right border border-red-200">
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
              />
            </div>
            
            <div className="flex items-center justify-between text-right">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded ml-2"
                />
                <label htmlFor="remember" className="text-gray-600">تذكرني</label>
              </div>
              <Link to="/forgot-password" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                نسيت كلمة المرور؟
              </Link>
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
                  جاري تسجيل الدخول...
                </>
              ) : 'تسجيل الدخول'}
            </button>
          </form>
          
          <div className="mt-8 pt-6 border-t border-gray-200 text-center text-gray-600">
            <p>ليس لديك حساب؟{' '}
              <Link to="/signup" className="text-blue-600 hover:text-blue-800 font-medium">
                إنشاء حساب جديد
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}