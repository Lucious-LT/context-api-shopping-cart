import { createContext } from 'react';
import faker from "faker";
import { cartReducer, productReducer } from './Reducers';
import React, { useContext, useReducer } from 'react';




const Cart = createContext();

faker.seed(99);

const Context = ({ children }) => {
    const products = [...Array(20)].map(()=>({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
       image: `https://picsum.photos/200/300?random=${faker.datatype.number()}`,
        inStock: faker.random.arrayElement([0, 0, 5, 7, 9, 11]),
        fastDelivery: faker.datatype.boolean(),
        ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
    }));
    // console.log(products)

    const [state, dispatch] = useReducer(cartReducer,{
        products: products, 
        cart: []
    
    })

      const [productState, productdispatch] = useReducer(productReducer,{
       byStock:false,
         byFastDelivery:false,
            byRating:0,
            searchQuery:"",
    
    })
 

  return  <Cart.Provider value={{state, dispatch, productState, productdispatch}} >
    {children}
    </Cart.Provider>
  
}

export default Context;

export const CartState = () => {
    return useContext(Cart);
}