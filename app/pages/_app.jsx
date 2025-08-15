"use client";

import { Provider } from "react-redux";
import { Store } from "../ReduxStore/Store"; // make sure this matches your Store.js export

export default function ReduxProvider({ children }) {
  if (!Provider || !Store) {
    console.error(
      "Redux Provider or Store is undefined. Check your imports/exports."
    );
    return null;
  }
  return <Provider store={Store}>{children}</Provider>;
}
