import React from 'react'

export default function PopularCategories() {
    const items = [
      { name: "Phone (iOS)", count: "74 Items", img: "https://images.unsplash.com/photo-1510557880182-3a935dc6c6f8?w=80&h=80&fit=crop" },
      { name: "Android", count: "35 Items", img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=80&h=80&fit=crop" },
      { name: "5G Support", count: "12 Items", img: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=80&h=80&fit=crop" },
      { name: "Apple Tablets", count: "22 Items", img: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=80&h=80&fit=crop" },
      { name: "Smartphone Chargers", count: "33 Items", img: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=80&h=80&fit=crop" },
      { name: "Gaming", count: "9 Items", img: "https://images.unsplash.com/photo-1605902711622-cfb43c4437b1?w=80&h=80&fit=crop" },
      { name: "Xiaomi", count: "52 Items", img: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=80&h=80&fit=crop" },
      { name: "Accessories", count: "29 Items", img: "https://images.unsplash.com/photo-1585386959984-a415522316e5?w=80&h=80&fit=crop" },
      { name: "Samsung Tablets", count: "26 Items", img: "https://images.unsplash.com/photo-1587825140400-38d5e1b4e7a1?w=80&h=80&fit=crop" },
      { name: "eReader", count: "5 Items", img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=80&h=80&fit=crop" },
    ];
  
    return (
      <section className="bg-white rounded-md p-4 md:p-6 max-w-7xl mx-auto mt-2 px-4 md:px-6">
        <h2 className="font-bold text-xs md:text-sm uppercase mb-4 md:mb-5 tracking-wide text-gray-800">
          Popular Categories
        </h2>
  
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
          {items.map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-between bg-white rounded-lg px-2 md:px-3 py-2 md:py-3 shadow-sm"
            >
              <div className="min-w-0">
                <div className="text-xs md:text-sm font-semibold text-gray-900 leading-tight truncate">
                  {item.name}
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  {item.count}
                </div>
              </div>
  
              <img
                src={item.img}
                alt={item.name}
                className="w-8 h-8 md:w-10 md:h-10 object-contain flex-shrink-0 ml-2"
              />
            </div>
          ))}
        </div>
      </section>
    );
  }
  
