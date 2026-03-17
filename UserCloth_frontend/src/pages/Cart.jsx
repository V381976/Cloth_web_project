import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeCartAsync,
  getCartitem,
  updateCartQty
} from "../reduxStore/AllFeatureSlice/CartSlice";

function Cart() {

  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { cartItems = [] } = useSelector((state) => state.cart);

  useEffect(() => {

    if (user) {
      dispatch(getCartitem());
    }

  }, [dispatch, user]);

  const removeItem = (id) => {
    dispatch(removeCartAsync(id));
  };

  // Total MRP
  const totalMRP = cartItems.reduce(
    (acc, item) => acc + (item.product?.price || 0) * item.quantity,
    0
  );

  // Total Selling Price
  const totalSelling = cartItems.reduce(
    (acc, item) => acc + (item.product?.selling_price || 0) * item.quantity,
    0
  );

  const totalDiscount = totalMRP - totalSelling;

  return (

    <div className="max-w-6xl mx-auto py-10">

      <h2 className="text-3xl font-bold mb-6">
        Shopping Cart
      </h2>

      {cartItems.length === 0 ? (

        <p>Cart is empty</p>

      ) : (

        cartItems.map((item) => (

          <div
            key={item._id}
            className="flex justify-between items-center border p-4 mb-4 rounded-lg"
          >

            <div className="flex items-center gap-4">

              <img
                src={item.product?.image?.[0]}
                alt={item.product?.title}
                className="w-20"
              />

              <div>

                <h3 className="font-bold">
                  {item.product?.title}
                </h3>

                {/* Price Section */}

                <div className="flex items-center gap-2">

                  <span className="text-red-500 font-semibold">
                    ₹{item.product?.selling_price}
                  </span>

                  <span className="text-gray-400 line-through text-sm">
                    ₹{item.product?.price}
                  </span>

                  <span className="text-green-600 text-sm">
                    {item.product?.discountPercentage}% OFF
                  </span>

                </div>

              </div>

            </div>

            {/* Quantity */}

            <div className="flex items-center gap-2">

              <button
                onClick={() =>
                  dispatch(updateCartQty({
                    id: item._id,
                    quantity: item.quantity - 1
                  }))
                }
                className="px-2 bg-gray-300 rounded"
              >
                -
              </button>

              <span>{item.quantity}</span>

              <button
                onClick={() =>
                  dispatch(updateCartQty({
                    id: item._id,
                    quantity: item.quantity + 1
                  }))
                }
                className="px-2 bg-gray-300 rounded"
              >
                +
              </button>

            </div>

            {/* Remove */}

            <button
              onClick={() => removeItem(item._id)}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Remove
            </button>

          </div>

        ))

      )}

      {/* Price Summary */}

      {cartItems.length > 0 && (

        <div className="mt-10 border-t pt-6 space-y-2 text-lg">

          <p>
            Total MRP: <span className="font-semibold">₹{totalMRP}</span>
          </p>

          <p className="text-green-600">
            You Saved: ₹{totalDiscount}
          </p>

          <p className="text-2xl font-bold">
            Total: ₹{totalSelling}
          </p>

        </div>

      )}

    </div>

  );

}

export default Cart;