import {getProductsData, sortProductsAsc, sortProductsDsc, filterMens, filterWomens, filteKids, filterHomeDecor} from "../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import {ProductCard} from "./ProductCard";
import {Grid} from "./Styled";
import React, { useEffect } from "react";


export const Women = () => {
    const dispatch = useDispatch();
    const {filterData} = useSelector((store) => (store));

    useEffect(() => {
      dispatch(filterWomens());
    },  [])

    return (
        <>
        <h2>Womens</h2>
        <Grid data-testid="products-container">
        {filterData.map((e) => (
         <ProductCard id ={e.id} brand={e.brand}  title={e.title} price = {e.price} category={e.category} image = {e.image}/>
        ))}
      </Grid>
      </>
    )
}