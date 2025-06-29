import { defineStore } from 'pinia';
import { ref } from 'vue';
import authService from '@/services/authService';
import router from '@/router';

interface User {
    id: number;
    name: string;
    email: string;
    // Tu peux ajouter les champs de l’utilisateur ici
}

export const useAuthStore = defineStore('auth', () => {
    const user = ref<User | null>(null);
    const token = ref<string>(localStorage.getItem('token') || '');

    const login = async (payload: { email: string; password: string; }) => {
        try {
            const response = await authService.login(payload);
            token.value = response.data.token;
            user.value = response.data.user;

            localStorage.setItem('token', token.value);
            router.push('/dashboard'); // Redirige vers le dashboard après connexion
        } catch (error: any) {
            throw error.response?.data?.message || 'Erreur de connexion';
        }
    };

    const logout = () => {
        token.value = '';
        user.value = null;
        localStorage.removeItem('token');
        router.push('/auth/login');
    };

    return { user, token, login, logout };
});
