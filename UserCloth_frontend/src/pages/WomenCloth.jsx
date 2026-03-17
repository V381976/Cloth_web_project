import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchwomenCloth } from "../reduxStore/AllFeatureSlice/ProductSlice";
import ProductCard from "../components/productCard";
import SidebarFilter from "../components/SliderbarFilter";
import ProductSkeletion from "../components/ProductSkeletion";
function WomenCloth() {

  const dispatch = useDispatch();
  const {items , status} = useSelector((state) => state.products);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [category, setcategory] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const products = items ;
  const loading = status === "loading" ;
  useEffect(() => {

    dispatch(fetchwomenCloth({ 
      page ,
      search,
      sort,
      category,
      priceRange
    }));

  }, [dispatch,page , search, sort, category, priceRange]);

  return (

    <div className="flex gap-6 p-6">

      {/* SIDEBAR */}
<div className="w-64 sticky top-6 h-fit">
      <SidebarFilter
      gender = "women"
        search={search}
        setSearch={setSearch}
        sort={sort}
        setSort={setSort}
        category={category}
        setcategory={setcategory}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
      />
</div>
      {/* PRODUCTS */}

      <div className="flex-1">

        <h1 className="text-2xl font-bold mb-6">
          Women Collection
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">

            {loading 
          ?Array(12).fill().map((_, i) =>(
            <ProductSkeletion key={i} />
          ))
          :products?.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}

        </div>
          <div className="flex justify-center mt-8">

         <button
         onClick={() => setPage(page + 1)}
         className="bg-black text-white px-6 py-2 rounded-lg"
         >
         
         Load More Products
         
         </button>
         
         </div>


      </div>

    </div>
  );
}

export default WomenCloth;