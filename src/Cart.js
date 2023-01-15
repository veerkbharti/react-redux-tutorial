import React, { useState } from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  //   const [cart, setCart] = useState(5);
  // const pro=obj
  const { value } = useSelector((state) => state.cart);
  // console.log(count);
  return (
    <>
      <div>{value}</div>
      <div className="d-flex"></div>
    </>
  );
};

export default Cart;
