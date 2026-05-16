import PopularCategories from "@/app/components/user components/Store/PopularCategories";
import TopPhonesBanner from "@/app/components/user components/Store/TopPhones&Tablets";
import Filters from "@/app/components/user components/Store/Filters";
import FilterDrawer from "@/app/components/user components/Store/FilterDrawer";

export default function ProductsLayout({ children }) {
  return (
    <div>
      <TopPhonesBanner />
      <PopularCategories />

      {/* Products & Filters */}
      <div className="max-w-7xl mx-auto rounded-md bg-white mt-3 px-4 md:px-0">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          <FilterDrawer>
            <Filters />
          </FilterDrawer>

          {/* Products */}
          <div className="flex-1 min-w-0">{children}</div>
        </div>
      </div>
    </div>
  );
}
