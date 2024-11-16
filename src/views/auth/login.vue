<template>
  <div class="d-flex justify-content-between">
    <div class="top mx-4 w-auth">
      <div class="d-flex justify-content-start">
        <router-link to="/">
          <img src="/src/assets/images/logo/1.png" class="img-logo" alt="" />
        </router-link>
      </div>
      <div class="my-5">
        <div class="my-4">
          <h3 class="title">Se connecter</h3>
          <small>
            Veuillez remplir tout les champs pour vous connecter a votre espace utilisateur.
          </small>
        </div>
        <div class="my-4">
          <input type="text" placeholder="Adresse enail" class="form-control input1" />
        </div>
        <div class="my-4">
          <input type="password" placeholder="Mot de passe" class="form-control input1" />
          <div class="d-flex justify-content-end mt-3">
            <router-link class="a" to=""
              ><small class="text-right">Mot de passe oublié</small></router-link
            >
          </div>
        </div>
        <div class="my-4">
          <button class="btn btn-primary w-100">CONNEXION</button>
        </div>
        <div class="my-5 text-center">
          <router-link to="/auth/register" class="a"
            ><small>J'ai pas de compte? creer un.</small></router-link
          >
        </div>
        <!-- <div class="my-4">
          <button class="btn btn-outline-primary w-100">CREER UN COMPTE</button>
        </div> -->
      </div>
    </div>
    <div class="auth-banner"></div>
  </div>
</template>

<script></script>