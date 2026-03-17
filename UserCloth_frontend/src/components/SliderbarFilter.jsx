import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchCategory } from "../reduxStore/AllFeatureSlice/CategorySlice";
function SidebarFilter({
  gender ,
  search,
  setSearch,
  sort,
  setSort,
  category,
  setcategory,
  priceRange,
  setPriceRange
}) {
const dispatch = useDispatch();

const { items: categories } = useSelector((state) => state.categories);
useEffect(() => {
  dispatch(FetchCategory(gender));
}, [dispatch ,gender]);

return(

<div className="w-64 bg-white shadow rounded-lg p-4 space-y-6">

<h2 className="font-bold text-lg">Filters</h2>

{/* SEARCH */}

<div>

<p className="text-sm font-semibold mb-1">Search</p>

<input
type="text"
placeholder="Search product..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
className="border w-full px-3 py-2 rounded"
/>

</div>


{/* category FILTER */}

<div>

<p className="text-sm font-semibold mb-2">category</p>

<select
value={category}
onChange={(e)=>setcategory(e.target.value)}
className="border w-full px-3 py-2 rounded"
>

<option value="">All Categories</option>

{categories.map((cat)=>(
<option key={cat._id} value={cat._id}>
{cat.name}
</option>
))}

</select>

</div>


{/* PRICE RANGE */}

<div>

<p className="text-sm font-semibold mb-2">Price</p>

<select
value={priceRange}
onChange={(e)=>setPriceRange(e.target.value)}
className="border w-full px-3 py-2 rounded"
>

<option value="">All Prices</option>
<option value="100-1000">₹100 - ₹1000</option>
<option value="1000-2000">₹1000 - ₹2000</option>
<option value="2000-5000">₹2000 - ₹5000</option>

</select>

</div>


{/* SORTING */}

<div>

<p className="text-sm font-semibold mb-1">Sort By</p>

<select
value={sort}
onChange={(e)=>setSort(e.target.value)}
className="border w-full px-3 py-2 rounded"
>

<option value="">Default</option>
<option value="low">Price Low → High</option>
<option value="high">Price High → Low</option>

</select>

</div>

</div>

)

}

export default SidebarFilter;