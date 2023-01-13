import axios from "axios";

const apiFetch = axios.create({
    baseURL: "https://fortnite-api.com/v2/shop/br",
})

export default apiFetch;