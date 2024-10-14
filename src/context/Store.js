import { createContext, useReducer, useContext } from 'react';
import storeReducer from './StoreReducer';

const initialState = { 
    // Your initial state values here
  };
const storeContext = createContext(initialState);

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(storeReducer, initialState);
  return (
    <storeContext.Provider value={{ state, dispatch }}>
      {children}
    </storeContext.Provider>
  );
};

export const useStore = () => {
    return useContext(storeContext)
}