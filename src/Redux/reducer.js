import {GET_PRODUCTS_DATA, SORT_PRODUCTS_ASC, SORT_PRODUCTS_DSC, FILTER_PRODUCTS_MEN, FILTER_PRODUCTS_WOMEN, FILTER_PRODUCTS_KIDS, FILTER_PRODUCTS_HOMEDECORS} from "./actions";


const initState = {
  data: JSON.parse(localStorage.getItem("data")) || [],
  isLoading: false,
  isError: false,
  filterData: JSON.parse(localStorage.getItem("filterData")) || [],
  products: [],
};




export const reducer = (store = initState, { type, payload }) => {
 switch (type) {
      
       case (GET_PRODUCTS_DATA) : {
        localStorage.setItem("data", JSON.stringify([...payload]));
         return {...store, data: JSON.parse(localStorage.getItem("data"))};
       }

   case(SORT_PRODUCTS_ASC): {
     let sub = store.data;
     sub = sub.sort((a, b) => ((+a.price) - (+b.price)));
     return {...store, data: [...sub]};
   }
    
   case(SORT_PRODUCTS_DSC): {
    let sub1= store.data;
    sub1 = sub1.sort((a, b) => ((+b.price) - (+a.price)));
    return {...store, data: [...sub1]};

  }
  case (FILTER_PRODUCTS_MEN) :{
    let mens = store.data;
    mens = mens.filter((el) => (el.category === "men"));
    localStorage.setItem("filterData", JSON.stringify([...mens]));
    return {...store, filterData: JSON.parse(localStorage.getItem("filterData"))};

  }

  case (FILTER_PRODUCTS_WOMEN) :{
    let womens = store.data;
    womens = womens.filter((el) => (el.category === "women"));
    localStorage.setItem("filterData", JSON.stringify([...womens]));
    return {...store, filterData: JSON.parse(localStorage.getItem("filterData"))};

  }

  case (FILTER_PRODUCTS_KIDS) :{
    let kids = store.data;
    kids = kids.filter((el) => (el.category === "kids"));
    localStorage.setItem("filterData", JSON.stringify([...kids]));
    return {...store, filterData: JSON.parse(localStorage.getItem("filterData"))};

  }

  case (FILTER_PRODUCTS_HOMEDECORS) :{
    let homeDecors = store.data;
    homeDecors = homeDecors.filter((el) => (el.category === "homedecor"));
    localStorage.setItem("filterData", JSON.stringify([...homeDecors]));
    return {...store, filterData: JSON.parse(localStorage.getItem("filterData"))};

  }
  
  default: 
  return store;
   
 }
};

