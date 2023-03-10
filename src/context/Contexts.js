import { createContext, useContext, useEffect, useReducer } from "react";
import axios from 'axios';
import reducer from "./reducer";

const Appcontext = createContext();
const api = "https://api.pujakaitem.com/api/products";
const intialstate = {
    data: [],
    isLoading: true,
    singleproduct: {},
};

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, intialstate);
    const getdata = async (url) => {
        try {
            const datas = await axios.get(url);
            dispatch({
                type: "getproduct",
                payload: {
                    alldata: datas.data,
                }
            })
        }
        catch (error) {
            console.log(error);
        }
    }

    const getsingleproduct = async (url) => {
        try {
            const datasingle = await axios.get(url);
            dispatch({
                type: "getsingleproduct",
                payload: {
                    singledata: datasingle.data,
                },
            })
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getdata(api);
    })

    return (
        <Appcontext.Provider value={{ ...state, getsingleproduct }}>
            {children}
        </Appcontext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(Appcontext);
}
export { Appcontext, AppProvider, useGlobalContext };