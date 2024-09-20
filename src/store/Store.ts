import { create } from "zustand";
import { persist } from "zustand/middleware";

interface storeState {
  cart: number;
  cartArray: any[];
  addToCart: (item: {}) => void;
  clearCart: () => void;
  incrementCart: () => void;
  removeFromCart: (item: number) => void;
  isLoggedIn: boolean;
  setIsLoggedIn: (val:boolean) => void

}

const Store = create<storeState>()(
  persist(
    (set) => ({
      cart: 0,
      isLoggedIn:false,
      setIsLoggedIn: (val:boolean) => set(()=> ({isLoggedIn:val})),
      cartArray: [],
      addToCart: (item: {}) =>
        set((state) => ({ cartArray: [...state.cartArray, item] })),
      clearCart: () => set({ cart: 0, cartArray: [] }),
      incrementCart: () => set((state) => ({ cart: state.cart + 1 })),
      removeFromCart: (itemId: number) =>
        set((state) => ({
          cartArray: state.cartArray.filter((item) => item.id !== itemId),
        })),
    }),
    
    { name: "store" }
  )
);

export default Store;
