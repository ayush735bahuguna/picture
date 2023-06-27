import { createContext, useState, useContext, useEffect } from "react";
export const Mycontext = createContext();

const Context = ({ children }) => {
    // const Acess_key = "l8Hn6MJ1ZibSI6uzBeSSd62hX9ZZJG9LEWacsl5SFrk";
    const Acess_key = "n8YwuKxfFBxmrdek6JSlvr9Zs2POVVOcy1f7msDwEPM";
    // const Secret_key = "BJULozEiNlTnG3EacGEi5B9N8iG0aZCRO_cxC8rC4-c";


    const [query, setquery] = useState("");
    const [Data, setData] = useState([]);
    const [pageno, setPageno] = useState(1);
    const [isloading, setIsLoading] = useState(true);
    const [orientation, setorientation] = useState("squarish");
    const [order_by, setorder_by] = useState("latest");


    const fetchApi = async () => {


        try {
            setIsLoading(true);
            var url = `https://api.unsplash.com/search/photos?client_id=${Acess_key}&query=${query}&per_page=10&page=${pageno}&orientation=${orientation}&order_by=${order_by} `;
            let data = await fetch(url);
            let parsedData = await data.json();
            setData(parsedData.results);

            setIsLoading(false);
            // console.log(url);
        }
        catch (err) {
            console.log(err.message + "error msg from fetch api");
        }
    }

    useEffect(() => {
        fetchApi();
        // eslint-disable-next-line
    }, [query, orientation, order_by]);


    return (
        <Mycontext.Provider value={{ Data, query, setquery, setData, pageno, setPageno, Acess_key, isloading, orientation, setorientation, setorder_by }}>
            {children}
        </Mycontext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(Mycontext);
}

export default Context
export { useGlobalContext }


