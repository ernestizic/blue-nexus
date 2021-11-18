import React, {createContext, useState} from 'react';
import data from "../data";

export const UserContext = createContext();

const UserContextProvider =(props)=> {
    const { customer } = data;

    const [users] = useState(customer);


    return (
        <UserContext.Provider value={{users}}> 
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;
