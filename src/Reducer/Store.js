import { configureStore } from "@reduxjs/toolkit";

import UserDetails from "./Slice/UserDetails";

export const Store=configureStore(
    {
        reducer:{
            app:UserDetails,
        },
    }
)