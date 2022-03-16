import React, { useReducer, createContext } from "react";
import Routes from "./Routes";
import { initialValues, reducer } from './reducer/clienteReducer';

export const Context = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialValues);

  return (  
    <Context.Provider value={{state, dispatch}}>
        <div className="App">
          <Routes />
        </div>
    </Context.Provider>
  );
}

export default App;
