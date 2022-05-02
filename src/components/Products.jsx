import React, { useEffect } from "react";
import { Select } from "./Styled";
import {Grid} from "./Styled"
import { useDispatch, useSelector } from "react-redux";
import {ProductCard} from "./ProductCard";

import {getProductsData, sortProductsAsc, sortProductsDsc, filterMens, filterWomens, filteKids, filterHomeDecor} from "../Redux/actions";

export const Products = () => {

   const dispatch = useDispatch();
   const {data} = useSelector((store) => (store));

  const getData = () => {
    fetch(`https://movie-fake-server.herokuapp.com/products`)
    .then((res) => (res.json()))
    .then((data) => {dispatch(getProductsData(data))});
  }

  useEffect(() => {
    // fetch ProductsData using redux-thunk on every mount
    getData();
    console.log(data);
  }, []);
  const handleSort = (e) => {
    const {value} = e.target;
    if(value === "asc"){
      dispatch(sortProductsAsc());
    }
    else if(value === "desc"){
      dispatch(sortProductsDsc());
    }
  };
  return (
    <>
      <h2>Products</h2>
      <Select data-testid="product-sort-order" onChange={handleSort}>
        <option>Sort by--</option>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </Select>
      <Grid data-testid="products-container">
        {data.map((e) => (
         <ProductCard id ={e.id}  title={e.title} brand = {e.brand} price = {e.price} category={e.category} image = {e.image}/>
        ))}
      </Grid>
    </>
  );
};
