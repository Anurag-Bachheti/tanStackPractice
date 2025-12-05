// import { useEffect } from "react";
import { fetchPosts } from "../API/Api";
import { useQuery } from "@tanstack/react-query";

const FetchRQ = () => {


    const getPostsData = async () => {
        try {
            const res = await fetchPosts();
            if (res.status === 200) {
                return res.data
            }
            return []
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    // to fetch data from server, accepts 2 minimum arguments
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['posts'], // kindof useState
        queryFn: getPostsData, // kindof useEffect
        staleTime: 5000,
        // refetchInterval: 1000,
        // gcTime: 5000
    })

    if (isLoading) return <p>Loading...</p>
    if (isError) return <p>Something went wrong</p>

    return (
        <>
            <h1>FetchRQ</h1>
            <ul>
                {data?.map((currElem) => {
                    const { id, title, body } = currElem;
                    return (
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

export default FetchRQ;