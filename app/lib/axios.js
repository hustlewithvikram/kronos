import axios from "axios";

// Create a base axios instance
const axiosClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000/api",
    headers: {
        "Content-Type": "application/json",
    },
});

// GET request wrapper
export const axiosGet = async (endpoint, params = {}) => {
    try {
        const response = await axiosClient.get(endpoint, { params });
        return response.data;
    } catch (err) {
        console.error("axiosGet error:", err.response?.data || err.message);
        throw err;
    }
};

// POST request wrapper
export const axiosPost = async (endpoint, payload = {}) => {
    try {
        const response = await axiosClient.post(endpoint, payload);
        return response.data;
    } catch (err) {
        console.error("axiosPost error:", err.response?.data || err.message);
        throw err;
    }
};

export default axiosClient;
