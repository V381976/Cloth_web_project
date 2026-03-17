import { useEffect, useRef } from "react";
import { gsap } from "gsap";

function Home() {

 const cardsRef = useRef([]);

 const categories = [

  {
   name: "Men",
   image: "https://images.unsplash.com/photo-1520975916090-3105956dac38"
  },

  {
   name: "Women",
   image: "https://images.unsplash.com/photo-1520975916090-3105956dac38"
  },

  {
   name: "Sarees",
   image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2"
  },

  {
   name: "Gowns",
   image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990"
  }

 ];

 useEffect(() => {

  gsap.from(cardsRef.current, {
   opacity: 0,
   y: 80,
   duration: 1,
   stagger: 0.6,
   ease: "power3.out"
  });

 }, []);

 return (

  <div className="min-h-screen bg-gray-100 p-10">

   {/* Hero Section */}

   <div className="text-center mb-12">

    <h1 className="text-5xl font-bold mb-4">
     Welcome To ClothStore
    </h1>

    <p className="text-gray-600">
     Discover the latest fashion trends
    </p>

   </div>


   {/* Category Cards */}

   <div className="grid grid-cols-4 gap-8">

    {categories.map((cat, index) => (

     <div
      key={index}
      ref={(el) => (cardsRef.current[index] = el)}
      className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition duration-300 cursor-pointer"
     >

      <img
       src={cat.image}
       className="h-60 w-full object-cover"
      />

      <div className="p-4 text-center">

       <h2 className="text-xl font-semibold">
        {cat.name}
       </h2>

      </div>

     </div>

    ))}

   </div>

  </div>

 );

}

export default Home;