import axios from "axios"

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key : 'ebae2f32e13e44ffbbdac998f4f8874d'
    }
})