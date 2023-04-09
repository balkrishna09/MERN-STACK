import { createContext, useState } from "react";
import {baseUrl} from '../baseUrl'

export const AppContext = createContext();


//provider
export default function AppContextProvider({children}){
    const [loading,setLoading]  = useState(false);
    const [post,setPost] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages , setTotalPages] = useState(null);

    //lets fill all the above data
    async function fetchBlog(page = 1){
        setLoading(true);
        // setPage(page);
        let url = `${baseUrl}?page=${page}`;
        try{
            const result = await fetch(url);
            const data = await result.json();
            setPage(data.page);
            setPost(data.posts);
            setTotalPages(data.totalPages);
        }
        catch(e){
            alert('error in fetching data');
            setPage(1);
            setPost([]);
            setTotalPages(null);

        }
        setLoading(false);

    }


    function handlePageChange(page){
        setPage(page);
        fetchBlog(page);
    }

    const value = {
        loading,
        setLoading,
        post,
        setPost,
        page,
        setPage,
        totalPages,
        setTotalPages,
        handlePageChange,
        fetchBlog
    };

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
    
}


