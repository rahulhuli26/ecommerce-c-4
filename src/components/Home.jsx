import { useDispatch, useSelector } from "react-redux";
import {getProductsData, sortProductsAsc, sortProductsDsc, filterMens, filterWomens, filteKids, filterHomeDecor} from "../Redux/actions";
import React, { useEffect } from "react";

export const Home = () => {
    const dispatch = useDispatch();

    const getData = () => {
        fetch(`https://movie-fake-server.herokuapp.com/products`)
        .then((res) => (res.json()))
        .then((data) => {dispatch(getProductsData(data))});
      }
    
      useEffect(() => {
        // fetch ProductsData using redux-thunk on every mount
        getData();
      }, []);

    return (
        <h1>Home</h1>
    )
}