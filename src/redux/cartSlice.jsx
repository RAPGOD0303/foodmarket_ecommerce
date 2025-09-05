import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name :'cart',
    initialState:{
        cart:[]
    },
    reducers:{
       addtoCart : (state, action)=>{
        // state.cart.push(action.payload)
        const product = action.payload;
        const existing = state.cart.find(item => item.id === product.id);
        if(existing){
            existing.qty = (existing.qty || 1) + (product.qty || 1);
        }
        else{
            state.cart.push({
                ...product,
                qty : product.qty ?? 1
            });
        }
       },

       removefromCart : (state, action)=>{
        state.cart = state.cart.filter(item => item.id !== action.payload)
       },

       incrementQty: (state, action) => {
      // payload: productId
      const item = state.cart.find(i => i.id === action.payload);
      if (item) item.qty = (item.qty || 1) + 1;
    },

    decrementQty: (state, action) => {
      // payload: productId
      const item = state.cart.find(i => i.id === action.payload);
      if (item && item.qty > 1) item.qty -= 1;
      // optionally remove if qty becomes 0
      // else if (item && item.qty <= 1) state.cart = state.cart.filter(i => i.id !== action.payload)
    },

   clearCart: (state) => {
      state.cart = [];
    }
    }
})

export default cartSlice.reducer;
export const {addtoCart, removefromCart, incrementQty, decrementQty, clearCart } = cartSlice.actions; 