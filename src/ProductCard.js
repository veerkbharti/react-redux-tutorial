import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./counterSlice";

const ProductCard = () => {
  const { value } = useSelector((srff) => srff.user);
  const dispatch = useDispatch();

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src="https://img.lovepik.com/desgin_photo/45008/3537_list.jpg"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <div className="d-flex justify-content-between w-100">
          <button onClick={() => dispatch(decrement())}>-</button>
          <span>{value}</span>
          <button onClick={() => dispatch(increment())}>+</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
