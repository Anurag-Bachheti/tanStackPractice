import axios from 'axios';

const Api = axios.create({
    baseURL: "https://my-json-server.typicode.com/typicode/demo",
})

export const fetchPosts = () => {
    console.log("FETCH FUNCTION CALLED");
    return Api.get("/posts");
}