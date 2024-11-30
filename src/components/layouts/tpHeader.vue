<template>
  <div class="d-flex justify-content-between align-items-center container mt-4" id="top">
    <router-link to="/">
      <img src="/src/assets/images/logo/logo.png" class="img-logo" alt="" />
    </router-link>
    <div>
      <ul class="ul-header">
        <li><router-link to="" class="title mx-4">Magazine</router-link></li>
        <li><router-link to="actualite" class="title mx-4">Actualité</router-link></li>
        <li><router-link to="" class="title mx-4">Qui sommes-nous?</router-link></li>
        <li><router-link to="" class="btn btn-primary btn-tran">EN</router-link></li>
      </ul>
    </div>
  </div>
  <div class="bg-primary">
    <div class="container d-flex justify-content-between align-items-center">
      <ul class="ul-menu">
        <li><router-link to="primeur" class="title">Primeurs</router-link></li>
        <li><router-link to="notes" class="title">Notes</router-link></li>
        <li><router-link to="topafrique" class="title">Top Afrique</router-link></li>
        <li><router-link to="explore" class="title">Explorez l'Art du vin</router-link></li>
        <li><router-link to="degustation" class="title">Dégustation</router-link></li>
        <li><router-link to="club" class="title">Club VIP</router-link></li>
        <li><router-link to="boutique" class="title">Boutique</router-link></li>
      </ul>
      <ul class="ul-menu align-item-center">
        <li class="input-group">
          <span class="input-group-text">
            <img src="/src/assets/icons/s1.png" alt="Icon" style="width: 20px; height: 20px" />
          </span>
          <input type="text" placeholder="Recherche ..." class="forn-control input-search" />
        </li>
        <li>
          <router-link to="auth/login">
            <img src="/src/assets/images/logo/icon.png" class="img-fluid img-user" alt="" />
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script></script>
