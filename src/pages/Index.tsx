
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturedSections from '@/components/FeaturedSections';
import BookCard from '@/components/BookCard';
import FilterSidebar from '@/components/FilterSidebar';
import { toast } from '@/hooks/use-toast';
import Services from '@/components/Services';
import HomeEvents from '@/components/HomeEvents';
import Footer from '@/components/Footer';

interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  originalPrice: number;
  cover: string;
  description: string;
  category: string;
  rating: number;
  inStock: boolean;
}

const Index = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showInStockOnly, setShowInStockOnly] = useState(false);
  const [cartItems, setCartItems] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch books data
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('/books.json');
        const data = await response.json();
        setBooks(data);
        setFilteredBooks(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching books:', error);
        toast({
          title: "خطأ",
          description: "حدث خطأ في تحميل الكتب",
          variant: "destructive",
        });
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  // Filter books based on category and stock
  useEffect(() => {
    let filtered = books;

    // Category filter
    if (selectedCategory) {
      filtered = filtered.filter(book => book.category === selectedCategory);
    }

    // Stock filter
    if (showInStockOnly) {
      filtered = filtered.filter(book => book.inStock);
    }

    setFilteredBooks(filtered);
  }, [books, selectedCategory, showInStockOnly]);

  // Get unique categories
  const categories = [...new Set(books.map(book => book.category))];

  // Handle add to cart
  const handleAddToCart = (book: Book) => {
    setCartItems(prev => [...prev, book]);
    toast({
      title: "تمت الإضافة",
      description: `تم إضافة "${book.title}" إلى السلة`,
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600 mx-auto mb-4"></div>
          <p className="text-gray-600">جاري تحميل الكتب...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Header cartItemsCount={cartItems.length} />
      <HeroSection />
      <FeaturedSections />
      <Services />
      <HomeEvents />
      <Footer />
    </div>
  );
};

export default Index;
