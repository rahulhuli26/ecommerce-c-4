

const SORT_PRODUCTS_ASC = "SORT_PRODUCTS_ASC";
const SORT_PRODUCTS_DSC = "SORT_PRODUCTS_DSC";
const FILTER_PRODUCTS_MEN = "FILTER_PRODUCTS_MEN";
const FILTER_PRODUCTS_WOMEN = "FILTER_PRODUCTS_WOMEN";
const FILTER_PRODUCTS_KIDS = "FILTER_PRODUCTS_KIDS";
const FILTER_PRODUCTS_HOMEDECORS = "FILTER_PRODUCTS_HOMEDECORS";
const GET_PRODUCTS_DATA = "GET_PRODUCTS_DATA";

const getProductsData = (value) => ({type: GET_PRODUCTS_DATA, payload: value});

const sortProductsAsc = (value) => ({type: SORT_PRODUCTS_ASC, payload: value });

const sortProductsDsc = (value) => ({type: SORT_PRODUCTS_DSC, payload: value });

const filterMens = (value) => ({type: FILTER_PRODUCTS_MEN, payload: value });

const filterWomens = (value) => ({type: FILTER_PRODUCTS_WOMEN, payload: value });

const filteKids = (value) => ({type: FILTER_PRODUCTS_KIDS, payload: value });

const filterHomeDecor = (value) => ({type: FILTER_PRODUCTS_HOMEDECORS, payload: value });


export {GET_PRODUCTS_DATA, SORT_PRODUCTS_ASC, SORT_PRODUCTS_DSC, FILTER_PRODUCTS_MEN, FILTER_PRODUCTS_WOMEN, FILTER_PRODUCTS_KIDS, FILTER_PRODUCTS_HOMEDECORS};

export { getProductsData, sortProductsAsc, sortProductsDsc, filterMens, filterWomens, filteKids, filterHomeDecor};


