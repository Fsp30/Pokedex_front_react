import axios from "axios";
import dotenv from 'dotenv';

dotenv.config()
const API_URL = process.env.URL_BACK_END


export const api = (
        axios.create({
                baseURL: API_URL,
                headers:{ "Content-Type": "application/json"}
        })
)