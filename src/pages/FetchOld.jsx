    import { useEffect, useState } from "react";
    import { fetchPosts } from "../API/Api";

    const FetchOld = () => {

        const[posts, setPosts] = useState([]);
        const[isLoading, setIsLoading] = useState(true);
        const[isError, setIsError] = useState(false);

        const getPostsData = async() => {

            try {
                const res = await fetchPosts();

                if(res.status === 200){
                    setPosts(res.data)
                    setIsLoading(false);
                }
                return []
            } catch (error) {
                console.log(error);
                setIsError(true);
            }finally{
                setIsLoading(false);
            }
        }

        useEffect(()=> {
            getPostsData()
        }, [])

        if(isLoading) return <p>Loading...</p>
        if(isError) return <p>Something went wrong</p>

        return (
            <>
                <h1>FetchOld</h1>
                <ul>
                    {posts?.map((currElem) => {
                        const{id, title, body} = currElem;
                        return(
                            <li key={currElem.id}>
                                <p>{currElem.title}</p>
                                <p>{currElem.body}</p>
                            </li>
                        )
                    })}
                </ul>
            </>
        )
    }

    export default FetchOld;