import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  listProducts: [],
  total: 0,
};
// tạo nơi chứa các state toàn cục cho cart
const cartSlice = createSlice({
  name: "cartSlice",
  initialState: initialState,
  reducers: {
    // run start
    RUN_START(state, actions) {
      // state.listProducts = actions.payload;
    },
    // thêm dữ liệu
    ADD_CART(state, actions) {
      // const { data, id } = actions.payload;
      // if (state.listProducts.length === 0) {
      //   state.listProducts.push(data);
      // } else {
      //   const temp = state.listProducts.find((item) => {
      //     if (item.product._id === id) {
      //       return item;
      //     }
      //   });
      //   if (temp) {
      //     temp.amount += data.amount;
      //   } else {
      //     state.listProducts.push(data);
      //   }
      // }
      // localStorage.setItem("products", JSON.stringify(state.listProducts));
    },

    // tăng số lượng sản phẩm
    COUTER_UP(state, actions) {
      // const temp = state.listProducts.find((item) => {
      //   if (item.product._id === actions.payload) {
      //     return item;
      //   }
      // });
      // if (temp) {
      //   temp.amount += 1;
      // }
      // localStorage.setItem("products", JSON.stringify(state.listProducts));
    },
    // giảm số lượng sản phẩm
    COUTER_DOWN(state, actions) {
      // const temp = state.listProducts.find((item) => {
      //   if (item.product._id === actions.payload) {
      //     return item;
      //   }
      // });
      // if (temp) {
      //   temp.amount -= 1;
      //   if (temp.amount === 0) {
      //     state.listProducts.map((item, i) => {
      //       if (item.product._id === actions.payload) {
      //         state.listProducts.splice(i, 1);
      //       }
      //     });
      //   }
      // }
      // localStorage.setItem("products", JSON.stringify(state.listProducts));
    },

    // xóa dữ liệu
    DELET_PRODUCT(state, actions) {
      // state.listProducts.map((item, i) => {
      //   if (item.product._id === actions.payload) {
      //     state.listProducts.splice(i, 1);
      //   }
      // });
      // localStorage.setItem("products", JSON.stringify(state.listProducts));
    },

    // UPDATE_TOTAL
    UPDATE_TOTAL(state, actions) {
      state.total = actions.payload;
    },
  },
});
export const cartAction = cartSlice.actions;
export default cartSlice.reducer;
