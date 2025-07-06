
import React from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

interface FilterSidebarProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  priceRange: [number, number];
  onPriceRangeChange: (range: [number, number]) => void;
  showInStockOnly: boolean;
  onStockFilterChange: (inStockOnly: boolean) => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
  showInStockOnly,
  onStockFilterChange,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md h-fit">
      <h3 className="text-lg font-bold mb-4 text-gray-800">تصفية النتائج</h3>
      
      {/* Categories */}
      <div className="mb-6">
        <h4 className="font-semibold mb-3 text-gray-700">التصنيفات</h4>
        <div className="space-y-2">
          <Button
            variant={selectedCategory === '' ? 'default' : 'ghost'}
            className="w-full justify-start text-right"
            onClick={() => onCategoryChange('')}
          >
            جميع الكتب
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'ghost'}
              className="w-full justify-start text-right"
              onClick={() => onCategoryChange(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
      
      <Separator className="my-4" />
      
      {/* Stock Filter */}
      <div className="mb-6">
        <h4 className="font-semibold mb-3 text-gray-700">التوفر</h4>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={showInStockOnly}
            onChange={(e) => onStockFilterChange(e.target.checked)}
            className="rounded"
          />
          <span className="text-sm">المتوفر فقط</span>
        </label>
      </div>
      
      <Separator className="my-4" />
      
      {/* Clear Filters */}
      <Button
        variant="outline"
        className="w-full"
        onClick={() => {
          onCategoryChange('');
          onStockFilterChange(false);
        }}
      >
        مسح جميع الفلاتر
      </Button>
    </div>
  );
};

export default FilterSidebar;
