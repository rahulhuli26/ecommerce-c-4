import {getProductsData, sortProductsAsc, sortProductsDsc, filterMens, filterWomens, filteKids, filterHomeDecor} from "../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import {ProductCard} from "./ProductCard";
import {Grid} from "./Styled";
import React, { useEffect } from "react";


export const HomeDecor = () => {
    const dispatch = useDispatch();
    const {filterData} = useSelector((store) => (store));
    const {data} = useSelector((store) => (store));

    const getData = () => {
      fetch(`https://movie-fake-server.herokuapp.com/products`)
      .then((res) => (res.json()))
      .then((data) => {dispatch(getProductsData(data))});
    }

    useEffect(() => {
      getData();
      dispatch(filterHomeDecor());
      console.log(data);
    },  [])

    return (
        <>
        <h2>Home Decors</h2>
        <Grid data-testid="products-container">
        {filterData.map((e) => (
         <ProductCard id ={e.id}  title={e.title} price = {e.price} category={e.category} image = {e.image}/>
        ))}
      </Grid>
      </>
    )
}