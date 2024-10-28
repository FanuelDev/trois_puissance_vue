<template>
  <div class="d-flex justify-content-between align-items-center container mt-4">
    <router-link to="/">
      <img src="/src/assets/images/logo/logo.png" class="img-logo" alt="" />
    </router-link>
    <div>
      <ul class="ul-header">
        <li><router-link to="" class="title mx-2">Magazine</router-link></li>
        <li><router-link to="actualite" class="title mx-2">Actualité</router-link></li>
        <li><router-link to="" class="title mx-2">Qui sommes-nous?</router-link></li>
        <li><router-link to="" class="btn btn-primary btn-tran">EN</router-link></li>
      </ul>
    </div>
  </div>
  <div class="bg-primary">
    <div class="container d-flex justify-content-between align-items-center">
      <ul class="ul-menu">
        <li><router-link to="primeur" class="title">Primeur</router-link></li>
        <li><router-link to="notes" class="title">Notes</router-link></li>
        <li><router-link to="topafrique" class="title">Top Afrique</router-link></li>
        <li><router-link to="explore" class="title">Explorez l'Art du vin</router-link></li>
        <li><router-link to="degustation" class="title">Dégustation</router-link></li>
        <li><router-link to="club" class="title">Club VIP</router-link></li>
        <li><router-link to="boutique" class="title">Boutique</router-link></li>
      </ul>
      <ul class="ul-menu">
        <li>
          <input type="text" placeholder="Recherche ..." class="forn-control input-search" />
        </li>
        <li>
          <router-link to="#">
            <img src="/src/assets/images/logo/icon.png" class="img-fluid img-user" alt="" />
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
</script>