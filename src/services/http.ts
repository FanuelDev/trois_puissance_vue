import axios from 'axios';
import { useAuthStore } from '@/stores/auth';

const http = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});


http.interceptors.request.use(config => {
    const authStore = useAuthStore();
    if (authStore.token) {
        config.headers.Authorization = `Bearer ${authStore.token}`;
    }
    return config;
});


export default http;
