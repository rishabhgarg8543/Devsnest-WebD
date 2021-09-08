import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponents from "./ProductComponents";
import axios from "axios";
import {useEffect}  from "react";
import { setProducts } from "../actions/productAction";
export default function ProductListing() {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
         .catch((err) => {
        console.log("Error", err);
      });
    dispatch(setProducts(response.data));
   
  };
  useEffect(() => {
    fetchProducts();
  },[] );
  return (
    <div className="ui grid container">
      <ProductComponents />
    </div>
  );
}