import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from '../service/dummyData';
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer,
    },
    // dont worry about helps in caching

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware),

})

setupListeners(store.dispatch);