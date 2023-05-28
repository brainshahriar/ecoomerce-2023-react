import { createContext } from "react";

export const Context = createContext();

const Appcontext = ({children}) =>{
    return(
        <Context.Provider>
            {children}
        </Context.Provider>
    )
}

export default Appcontext;