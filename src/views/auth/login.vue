<script lang="ts" setup>
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth';

const email = ref<string>('');
const password = ref<string>('');
const authStore = useAuthStore();

const loading = ref<boolean>(false);
const error = ref<string>('');

const handleLogin = async () => {
  loading.value = true;
  error.value = '';
  try {
    await authStore.login({ email: email.value, password: password.value });
  } catch (err: any) {
    error.value = err;
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <div class="d-flex justify-content-between align-items-center">
    <div class="mx-4 w-auth">
      <div>
        <div class="d-flex justify-content-start">
          <router-link to="/">
            <img src="/src/assets/images/logo/1.png" class="img-logo" alt="" />
          </router-link>
        </div>
        <div class="my-5">
          <div class="my-4">
            <h3 class="title">Se connecter</h3>
            <small>Veuillez remplir tous les champs pour vous connecter à votre espace utilisateur.</small>
          </div>
          <div class="my-4">
            <input v-model="email" type="text" placeholder="Adresse email" class="form-control input1" />
          </div>
          <div class="my-4">
            <input v-model="password" type="password" placeholder="Mot de passe" class="form-control input1" />
            <div class="d-flex justify-content-end mt-3">
              <router-link class="a" to=""><small class="text-right">Mot de passe oublié</small></router-link>
            </div>
          </div>
          <div class="my-4">
            <button class="btn btn-primary w-100" @click="handleLogin" :disabled="loading">
              <span v-if="loading">Connexion...</span>
              <span v-else>CONNEXION</span>
            </button>
          </div>
          <div class="text-danger" v-if="error">{{ error }}</div>
          <div class="my-5 text-center">
            <router-link to="/auth/register" class="a"><small>Je n'ai pas de compte ? Créer un.</small></router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="auth-banner"></div>
  </div>
</template>
