import { createContext, useReducer, useEffect } from "react";

export const globalContext = createContext();

const changeState = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_PRODUCT":
      return { ...state, basket: [...state.basket, payload] };
    case "REMOVE_PRODUCT":
      return {
        ...state,
        basket: state.basket.filter((p) => {
          return payload !== p.id;
        }),
      };
  }
};

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(changeState, {
    basket: [],
  });

  return (
    <globalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </globalContext.Provider>
  );
};
