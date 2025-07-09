<template>
  <div class="banner1"></div>
  <div class="top">
    <h1 class="text-center text-primary title h1 fw-bold" data-aos="fade-up">
      TROIS PUISSANCES TOP AFRIQUE
    </h1>
  </div>
  <div class="container top">
    <div class="row">
      <div class="input-group col-md-12 my-4" data-aos="fade-up">
        <span class="input-group-text s2">
          <img src="/src/assets/icons/s2.png" alt="Icon" style="width: 20px; height: 20px" />
        </span>
        <input type="search" placeholder="Recherche ..." class="form-control input1" @input="searchWine" />
      </div>
    </div>
  </div>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-4" data-aos="fade-up" data-aos-duration="1200">
        <div class="bg-light p-4 mb-2">
          <h3 class="title text-primary">Producteur</h3>
          <div class="input-group">
            <input type="search" placeholder="Recherche dans 1739 producteurs" class="form-control input1" />
            <span class="input-group-text s2">
              <img src="/src/assets/icons/s2.png" alt="Icon" style="width: 20px; height: 20px" />
            </span>
          </div>
        </div>
        <div class="bg-light p-4 mb-2">
          <h3 class="title text-primary">Pays</h3>
          <div class="input-group">
            <input type="search" placeholder="Recherche dans 32 pays" class="form-control input1" />
            <span class="input-group-text s2">
              <img src="/src/assets/icons/s2.png" alt="Icon" style="width: 20px; height: 20px" />
            </span>
          </div>
          <div class="my-4">
            <div class="row my-2">
              <div v-for="country in countries" :key="country"
                class="col-md-6 bg-white p-3 pe-5 d-flex justify-content-start align-items-center">
                <small class="mx-2"><i class="fa fa-square text-primary" aria-hidden="true"></i></small>
                <small>{{ country.name }}</small>
              </div>
              <div class="mx-2"></div>
            </div>
            <!-- <div class="bg-white p-3 pe-5 d-flex justify-content-start align-items-center">
                <small class="mx-2"><i class="fa fa-square text-primary" aria-hidden="true"></i></small>
                <small>Nigéria</small>
              </div>
            </div>
            <div class="d-flex justify-content-start my-2">
              <div class="bg-white p-3 pe-5 d-flex justify-content-start align-items-center">
                <small class="mx-2"><i class="fa fa-square text-primary" aria-hidden="true"></i></small>
                <small>Cote d'ivoire</small>
              </div>
              <div class="mx-2"></div>
              <div class="bg-white p-3 pe-5 d-flex justify-content-start align-items-center">
                <small class="mx-2"><i class="fa fa-square text-primary" aria-hidden="true"></i></small>
                <small>Egypte</small>
              </div>
            </div>
            <div class="d-flex justify-content-start mt-2">
              <div class="bg-white p-3 pe-5 d-flex justify-content-start align-items-center">
                <small class="mx-2"><i class="fa fa-square text-primary" aria-hidden="true"></i></small>
                <small>Cape vert</small>
              </div>
            </div> -->
          </div>
        </div>
        <div class="bg-light p-4 mb-2">
          <h3 class="title text-primary">Région</h3>
          <div class="input-group">
            <input type="search" placeholder="Recherche dans 1739 régions" class="form-control input1" />
            <span class="input-group-text s2">
              <img src="/src/assets/icons/s2.png" alt="Icon" style="width: 20px; height: 20px" />
            </span>
          </div>
        </div>
        <div class="bg-light p-4 mb-2">
          <h3 class="title text-primary">Appellation</h3>
          <div class="input-group">
            <input type="search" placeholder="Recherche ..." class="form-control input1" />
            <span class="input-group-text s2">
              <img src="/src/assets/icons/s2.png" alt="Icon" style="width: 20px; height: 20px" />
            </span>
          </div>
        </div>
        <div class="bg-light p-4 mb-2">
          <h3 class="title text-primary">Raisin</h3>

          <div class="input-group">
            <input type="search" placeholder="Recherche ..." class="form-control input1" />
            <span class="input-group-text s2">
              <img src="/src/assets/icons/s2.png" alt="Icon" style="width: 20px; height: 20px" />
            </span>
          </div>
          <div class="my-4">
            <div class="row my-2">
              <div v-for="grape in grapes" :key="grape"
                class="col-md-6 bg-white p-3 pe-5 d-flex justify-content-start align-items-center">
                <small class="mx-2"><i class="fa fa-square text-primary" aria-hidden="true"></i></small>
                <small>{{ grape.name }}</small>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-light p-4 mb-2">
          <h3 class="title text-primary">Couleur</h3>
          <div class="my-4">
            <div class="row my-2">
              <div v-for="color in colors" :key="color"
                class="col-md-6 bg-white p-3 pe-5 d-flex justify-content-start align-items-center">
                <small class="mx-2"><i class="fa fa-square text-primary" aria-hidden="true"></i></small>
                <small>{{ color.name }}</small>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-light p-4 mb-2">
          <h3 class="title text-primary">Type d'avis</h3>
          <div class="my-4">
            <div class="d-flex justify-content-start my-2">
              <div class="bg-white p-3 pe-5 d-flex justify-content-start align-items-center">
                <small class="mx-2"><i class="fa fa-square text-primary" aria-hidden="true"></i></small>
                <small>Value Wine (2372)</small>
              </div>
              <div class="mx-2"></div>
              <div class="bg-white p-3 pe-5 d-flex justify-content-start align-items-center">
                <small class="mx-2"><i class="fa fa-square text-primary" aria-hidden="true"></i></small>
                <small>Fine Wine (859)</small>
              </div>
            </div>
            <div class="d-flex justify-content-start my-2">
              <div class="bg-white p-3 pe-5 d-flex justify-content-start align-items-center">
                <small class="mx-2"><i class="fa fa-square text-primary" aria-hidden="true"></i></small>
                <small>Panel Testing (897)</small>
              </div>
              <div class="mx-2"></div>
              <div class="bg-white p-3 pe-5 d-flex justify-content-start align-items-center">
                <small class="mx-2"><i class="fa fa-square text-primary" aria-hidden="true"></i></small>
                <small>Single Testing (553)</small>
              </div>
            </div>
          </div>
        </div>
        <div class="my-4">
          <button class="btn btn-lg btn-primary">REINITIALISER LES FILTRES</button>
        </div>
      </div>
      <div class="col-md-8 brd-left" data-aos="fade-up" data-aos-duration="1500">
        <div>
          <h2 class="text-primary title fw-bold">TOP AFRIQUE</h2>
          <div class="d-flex justify-content-between align-item-center">
            <p>Affichage de <strong>{{ wines.length }}</strong> résultats de vins</p>
            <!-- <p class="text-primary">
              Commandé par : Date de mise a jour : Le plus récent en premier
            </p> -->
          </div>
        </div>
        <div class="my-4">
          <div v-for="wine in wines" :key="wine" class="bg-light brd-leftes mb-4">
            <div class="row">
              <div class="col-md-7">
                <div class="row p-4">
                  <div class="col-md-4 d-flex justify-content-center">
                    <img src="/src/assets/images/product/1.png" class="img-fluid img-prod" alt="" />
                  </div>
                  <div class="col-md-8 py-2">
                    <h3 class="text-primary title">{{ wine.name }}</h3>
                    <p class="text-justify">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat eum fugit ut
                      molestiae excepturi, omnis impedit unde itaque fugiat ullam maxime nam, id quo
                      nobis.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-5 brd-white px-4 py-2">
                <div class="d-flex justify-content-between align-item-center">
                  <h5>
                    <strong>{{ wine.price }} Euro</strong>
                  </h5>
                  <div class="check-rond">
                    <h3><i :class="wine.isAvailable ? 'fa fa-check-circle text-primary' : 'fa fa-check-circle'"
                        aria-hidden="true"></i></h3>
                  </div>
                </div>
                <div class="my-4">
                  <p>
                    <i>{{ wine.code }}</i> <br />
                    {{ new Date(wine.updatedAt).toLocaleString() }}
                  </p>
                </div>
                <div class="d-flex justify-content-end align-item-center">
                  <button class="btn btn-primary btn-sm mx-2">{{ wine.wineType }}</button>
                  <button class="btn btn-primary btn-sm mx-2">{{ wine.spelling }}</button>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="bg-light brd-leftes mb-4">
            <div class="row">
              <div class="col-md-7">
                <div class="row p-4">
                  <div class="col-md-4 d-flex justify-content-center">
                    <img src="/src/assets/images/product/2.png" class="img-fluid img-prod" alt="" />
                  </div>
                  <div class="col-md-8 py-2">
                    <h3 class="text-primary title">Rawson's Retreat</h3>
                    <p class="text-justify">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat eum fugit ut
                      molestiae excepturi, omnis impedit unde itaque fugiat ullam maxime nam, id quo
                      nobis.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-5 brd-white px-4 py-2">
                <div class="d-flex justify-content-between align-item-center">
                  <p>
                    Johanesbourg, Afrique du sud <br />
                    2023
                  </p>
                  <div class="check-rond">
                    <h3><i class="fa fa-check-circle text-primary" aria-hidden="true"></i></h3>
                  </div>
                </div>
                <div class="my-4">
                  <p>
                    La note de dégustation: <br />
                    30 juin 2024
                  </p>
                </div>
                <div class="d-flex justify-content-between align-item-center">
                  <button class="btn btn-primary btn-sm mx-2">VINS</button>
                  <button class="btn btn-primary btn-sm mx-2">REMARQUES</button>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-light brd-leftes mb-4">
            <div class="row">
              <div class="col-md-7">
                <div class="row p-4">
                  <div class="col-md-4 d-flex justify-content-center">
                    <img src="/src/assets/images/product/3.png" class="img-fluid img-prod" alt="" />
                  </div>
                  <div class="col-md-8 py-2">
                    <h3 class="text-primary title">Rawson's Retreat</h3>
                    <p class="text-justify">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat eum fugit ut
                      molestiae excepturi, omnis impedit unde itaque fugiat ullam maxime nam, id quo
                      nobis.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-5 brd-white px-4 py-2">
                <div class="d-flex justify-content-between align-item-center">
                  <p>
                    Johanesbourg, Afrique du sud <br />
                    2023
                  </p>
                  <div class="check-rond">
                    <h3><i class="fa fa-check-circle text-primary" aria-hidden="true"></i></h3>
                  </div>
                </div>
                <div class="my-4">
                  <p>
                    La note de dégustation: <br />
                    30 juin 2024
                  </p>
                </div>
                <div class="d-flex justify-content-between align-item-center">
                  <button class="btn btn-primary btn-sm mx-2">VINS</button>
                  <button class="btn btn-primary btn-sm mx-2">REMARQUES</button>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-light brd-leftes mb-4">
            <div class="row">
              <div class="col-md-7">
                <div class="row p-4">
                  <div class="col-md-4 d-flex justify-content-center">
                    <img src="/src/assets/images/product/1.png" class="img-fluid img-prod" alt="" />
                  </div>
                  <div class="col-md-8 py-2">
                    <h3 class="text-primary title">Rawson's Retreat</h3>
                    <p class="text-justify">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat eum fugit ut
                      molestiae excepturi, omnis impedit unde itaque fugiat ullam maxime nam, id quo
                      nobis.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-5 brd-white px-4 py-2">
                <div class="d-flex justify-content-between align-item-center">
                  <p>
                    Johanesbourg, Afrique du sud <br />
                    2023
                  </p>
                  <div class="check-rond">
                    <h3><i class="fa fa-check-circle text-primary" aria-hidden="true"></i></h3>
                  </div>
                </div>
                <div class="my-4">
                  <p>
                    La note de dégustation: <br />
                    30 juin 2024
                  </p>
                </div>
                <div class="d-flex justify-content-between align-item-center">
                  <button class="btn btn-primary btn-sm mx-2">VINS</button>
                  <button class="btn btn-primary btn-sm mx-2">REMARQUES</button>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-light brd-leftes mb-4">
            <div class="row">
              <div class="col-md-7">
                <div class="row p-4">
                  <div class="col-md-4 d-flex justify-content-center">
                    <img src="/src/assets/images/product/2.png" class="img-fluid img-prod" alt="" />
                  </div>
                  <div class="col-md-8 py-2">
                    <h3 class="text-primary title">Rawson's Retreat</h3>
                    <p class="text-justify">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat eum fugit ut
                      molestiae excepturi, omnis impedit unde itaque fugiat ullam maxime nam, id quo
                      nobis.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-5 brd-white px-4 py-2">
                <div class="d-flex justify-content-between align-item-center">
                  <p>
                    Johanesbourg, Afrique du sud <br />
                    2023
                  </p>
                  <div class="check-rond">
                    <h3><i class="fa fa-check-circle text-primary" aria-hidden="true"></i></h3>
                  </div>
                </div>
                <div class="my-4">
                  <p>
                    La note de dégustation: <br />
                    30 juin 2024
                  </p>
                </div>
                <div class="d-flex justify-content-between align-item-center">
                  <button class="btn btn-primary btn-sm mx-2">VINS</button>
                  <button class="btn btn-primary btn-sm mx-2">REMARQUES</button>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-light brd-leftes mb-4">
            <div class="row">
              <div class="col-md-7">
                <div class="row p-4">
                  <div class="col-md-4 d-flex justify-content-center">
                    <img src="/src/assets/images/product/3.png" class="img-fluid img-prod" alt="" />
                  </div>
                  <div class="col-md-8 py-2">
                    <h3 class="text-primary title">Rawson's Retreat</h3>
                    <p class="text-justify">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat eum fugit ut
                      molestiae excepturi, omnis impedit unde itaque fugiat ullam maxime nam, id quo
                      nobis.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-5 brd-white px-4 py-2">
                <div class="d-flex justify-content-between align-item-center">
                  <p>
                    Johanesbourg, Afrique du sud <br />
                    2023
                  </p>
                  <div class="check-rond">
                    <h3><i class="fa fa-check-circle text-primary" aria-hidden="true"></i></h3>
                  </div>
                </div>
                <div class="my-4">
                  <p>
                    La note de dégustation: <br />
                    30 juin 2024
                  </p>
                </div>
                <div class="d-flex justify-content-between align-item-center">
                  <button class="btn btn-primary btn-sm mx-2">VINS</button>
                  <button class="btn btn-primary btn-sm mx-2">REMARQUES</button>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-light brd-leftes mb-4">
            <div class="row">
              <div class="col-md-7">
                <div class="row p-4">
                  <div class="col-md-4 d-flex justify-content-center">
                    <img src="/src/assets/images/product/1.png" class="img-fluid img-prod" alt="" />
                  </div>
                  <div class="col-md-8 py-2">
                    <h3 class="text-primary title">Rawson's Retreat</h3>
                    <p class="text-justify">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat eum fugit ut
                      molestiae excepturi, omnis impedit unde itaque fugiat ullam maxime nam, id quo
                      nobis.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-5 brd-white px-4 py-2">
                <div class="d-flex justify-content-between align-item-center">
                  <p>
                    Johanesbourg, Afrique du sud <br />
                    2023
                  </p>
                  <div class="check-rond">
                    <h3><i class="fa fa-check-circle text-primary" aria-hidden="true"></i></h3>
                  </div>
                </div>
                <div class="my-4">
                  <p>
                    La note de dégustation: <br />
                    30 juin 2024
                  </p>
                </div>
                <div class="d-flex justify-content-between align-item-center">
                  <button class="btn btn-primary btn-sm mx-2">VINS</button>
                  <button class="btn btn-primary btn-sm mx-2">REMARQUES</button>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-light brd-leftes mb-4">
            <div class="row">
              <div class="col-md-7">
                <div class="row p-4">
                  <div class="col-md-4 d-flex justify-content-center">
                    <img src="/src/assets/images/product/2.png" class="img-fluid img-prod" alt="" />
                  </div>
                  <div class="col-md-8 py-2">
                    <h3 class="text-primary title">Rawson's Retreat</h3>
                    <p class="text-justify">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat eum fugit ut
                      molestiae excepturi, omnis impedit unde itaque fugiat ullam maxime nam, id quo
                      nobis.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-5 brd-white px-4 py-2">
                <div class="d-flex justify-content-between align-item-center">
                  <p>
                    Johanesbourg, Afrique du sud <br />
                    2023
                  </p>
                  <div class="check-rond">
                    <h3><i class="fa fa-check-circle text-primary" aria-hidden="true"></i></h3>
                  </div>
                </div>
                <div class="my-4">
                  <p>
                    La note de dégustation: <br />
                    30 juin 2024
                  </p>
                </div>
                <div class="d-flex justify-content-between align-item-center">
                  <button class="btn btn-primary btn-sm mx-2">VINS</button>
                  <button class="btn btn-primary btn-sm mx-2">REMARQUES</button>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-light brd-leftes mb-4">
            <div class="row">
              <div class="col-md-7">
                <div class="row p-4">
                  <div class="col-md-4 d-flex justify-content-center">
                    <img src="/src/assets/images/product/3.png" class="img-fluid img-prod" alt="" />
                  </div>
                  <div class="col-md-8 py-2">
                    <h3 class="text-primary title">Rawson's Retreat</h3>
                    <p class="text-justify">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat eum fugit ut
                      molestiae excepturi, omnis impedit unde itaque fugiat ullam maxime nam, id quo
                      nobis.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-5 brd-white px-4 py-2">
                <div class="d-flex justify-content-between align-item-center">
                  <p>
                    Johanesbourg, Afrique du sud <br />
                    2023
                  </p>
                  <div class="check-rond">
                    <h3><i class="fa fa-check-circle text-primary" aria-hidden="true"></i></h3>
                  </div>
                </div>
                <div class="my-4">
                  <p>
                    La note de dégustation: <br />
                    30 juin 2024
                  </p>
                </div>
                <div class="d-flex justify-content-between align-item-center">
                  <button class="btn btn-primary btn-sm mx-2">VINS</button>
                  <button class="btn btn-primary btn-sm mx-2">REMARQUES</button>
                </div>
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import wineService from '@/services/wineService';

const wines = ref<any>([])
const colors = ref<any>([])
const producteurs = ref<any>([])
const grapes = ref<any>([])
const countries = ref<any>([])

const getListWine = () => {
  wineService.listWines().then(res => {
    console.log(res.data)
    wines.value = res.data
  })
}

const searchWine = (e: any) => {
  let data = e.target.value
  console.log(data)
  wineService.searchWine(data).then(res => {
    wines.value = res.data
  })
}

const getColors = () => {
  wineService.listCouleur().then(res => {
    console.log(res.data)
    colors.value = res.data
  })
}


const getProducteur = () => {
  wineService.listProducteur().then(res => {
    console.log(res.data)
    producteurs.value = res.data
  })
}


const getGrapes = () => {
  wineService.listGrapes().then(res => {
    console.log(res.data)
    grapes.value = res.data
  })
}

const getCountries = () => {
  wineService.listCountries().then(res => {
    console.log(res.data)
    countries.value = res.data
  })
}

onMounted(() => {
  getListWine();
  getColors();
  getProducteur();
  getGrapes();
  getCountries();
});
</script>

<style></style>