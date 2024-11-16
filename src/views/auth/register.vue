<template>
  <div class="d-flex justify-content-between">
    <div class="my-5 mx-4 w-auth">
      <div class="text-center">
        <router-link to="/">
          <img src="/src/assets/images/logo/logo.png" class="img-logo" alt="" />
        </router-link>
      </div>
      <div class="my-5">
        <div class="my-5">
          <h3 class="title fw-bold">S'inscrire</h3>
          <small>
            Veuillez remplir tout les champs pour vous connecter a votre espace utilisateur.
          </small>
        </div>
        <div class="my-4">
          <select type="text" class="form-control input1">
            <option value="#" selected disabled>Selectionner le type de compte</option>
            <option value="#">Lorem, ipsum.</option>
            <option value="#">Lorem, ipsum.</option>
            <option value="#">Lorem, ipsum.</option>
          </select>
        </div>
        <div class="my-4">
          <input type="text" placeholder="Nom & prenoms" class="form-control input1" />
        </div>
        <div class="my-4">
          <input type="text" placeholder="Adresse enail" class="form-control input1" />
        </div>
        <div class="my-4">
          <input type="password" placeholder="Mot de passe" class="form-control input1" />
        </div>
        <div class="my-4">
          <input
            type="password"
            placeholder="Confirmer le mot de passe"
            class="form-control input1"
          />
        </div>
        <div class="my-5">
          <button class="btn btn-primary w-100">CREER LE COMPTE</button>
        </div>
        <div class="mt-5 text-center">
          <router-link to="/auth/login" class="a"
            ><small>J'ai déja de compte, se connecter.</small></router-link
          >
        </div>
      </div>
    </div>
    <div class="auth-banner"></div>
  </div>
</template>
  
  <script></script>