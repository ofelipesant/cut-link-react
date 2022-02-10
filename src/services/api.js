import axios from 'axios'

export const key = "5ebbbc529a52184b809a346d495018a601531897"

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers: {
        'Authorization': `Bearer ${key}`,
    }
})

export default api
