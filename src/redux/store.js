import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from './сontactSlice'



export const store = configureStore ({
  reducer: {
    contacts: contactsReducer,
  }
});

