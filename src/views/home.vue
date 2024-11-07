<template>
  <div class="banner">
    <div class="text-center">
      <h1 class="title fw-900 head text-white text-center" data-aos="fade-up">
        Explorez <br />
        l'univers infini du vin
      </h1>
      <button class="btn btn-primary btn-lg mt-4" data-aos="fade-up" data-aos-duration="1500">
        Lire plus
      </button>
    </div>
  </div>

  <section class="top container">
    <div class="row">
      <div class="col-md-6 p-4" data-aos="fade-up">
        <div class="extra">
          <img src="/src/assets/images/use/1.jpg" class="img img-fluid" alt="" />
          <div class="brd"></div>
        </div>
      </div>
      <div class="col-md-6 p-4" data-aos="fade-up" data-aos-duration="1500">
        <div class="extra1">
          <img src="/src/assets/images/use/2.jpg" class="img img-fluid" alt="" />
          <div class="brd"></div>
        </div>
        <div class="top">
          <h1 class="title text-primary h1 pt-5" data-aos="fade-up" data-aos-duration="2000">
            BIENVENUE CHEZ <br />
            TROIS PUISSANCE
          </h1>
          <p class="p text-justify" data-aos="fade-up" data-aos-duration="2500">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque eum accusamus aliquid
            voluptates? Sint ab deserunt autem omnis, tenetur accusantium animi labore, enim. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Vero, obcaecati?
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="mt-5 bg-light">
    <div class="container py-5">
      <div class="col-md-12">
        <swiper
          ref="swiperRef"
          :slides-per-view="3"
          :space-between="20"
          :loop="true"
          navigation
          pagination
          :autoplay="{ delay: 3000 }"
          class="mySwiper"
        >
          <swiper-slide>
            <div class="p-4 mx-5" data-aos="fade-up">
              <img src="/src/assets/images/carousel/1.jpg" class="img-fluid" alt="" />
              <h5 class="italic text-primary title mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nobis,
                perspiciatis asperiores quibusdam officiis aperiam recusandae, autem doloremque
                quaerat tempore laborum, totam porro ipsum soluta eaque blanditiis nam tenetur
                minus!
              </h5>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="p-4 mx-5" data-aos="fade-up">
              <img src="/src/assets/images/carousel/2.jpg" class="img-fluid" alt="" />
              <h5 class="italic text-primary title mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nobis,
                perspiciatis asperiores quibusdam officiis aperiam recusandae, autem doloremque
                quaerat tempore laborum, totam porro ipsum soluta eaque blanditiis nam tenetur
                minus!
              </h5>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="p-4 mx-5" data-aos="fade-up">
              <img src="/src/assets/images/carousel/3.jpg" class="img-fluid" alt="" />
              <h5 class="italic text-primary title mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nobis,
                perspiciatis asperiores quibusdam officiis aperiam recusandae, autem doloremque
                quaerat tempore laborum, totam porro ipsum soluta eaque blanditiis nam tenetur
                minus!
              </h5>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="p-4 mx-5" data-aos="fade-up">
              <img src="/src/assets/images/carousel/1.jpg" class="img-fluid" alt="" />
              <h5 class="italic text-primary title mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nobis,
                perspiciatis asperiores quibusdam officiis aperiam recusandae, autem doloremque
                quaerat tempore laborum, totam porro ipsum soluta eaque blanditiis nam tenetur
                minus!
              </h5>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="p-4 mx-5" data-aos="fade-up">
              <img src="/src/assets/images/carousel/2.jpg" class="img-fluid" alt="" />
              <h5 class="italic text-primary title mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nobis,
                perspiciatis asperiores quibusdam officiis aperiam recusandae, autem doloremque
                quaerat tempore laborum, totam porro ipsum soluta eaque blanditiis nam tenetur
                minus!
              </h5>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="p-4 mx-5" data-aos="fade-up">
              <img src="/src/assets/images/carousel/3.jpg" class="img-fluid" alt="" />
              <h5 class="italic text-primary title mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nobis,
                perspiciatis asperiores quibusdam officiis aperiam recusandae, autem doloremque
                quaerat tempore laborum, totam porro ipsum soluta eaque blanditiis nam tenetur
                minus!
              </h5>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="p-4 mx-5" data-aos="fade-up">
              <img src="/src/assets/images/carousel/1.jpg" class="img-fluid" alt="" />
              <h5 class="italic text-primary title mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nobis,
                perspiciatis asperiores quibusdam officiis aperiam recusandae, autem doloremque
                quaerat tempore laborum, totam porro ipsum soluta eaque blanditiis nam tenetur
                minus!
              </h5>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="p-4 mx-5" data-aos="fade-up">
              <img src="/src/assets/images/carousel/2.jpg" class="img-fluid" alt="" />
              <h5 class="italic text-primary title mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nobis,
                perspiciatis asperiores quibusdam officiis aperiam recusandae, autem doloremque
                quaerat tempore laborum, totam porro ipsum soluta eaque blanditiis nam tenetur
                minus!
              </h5>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="p-4 mx-5" data-aos="fade-up">
              <img src="/src/assets/images/carousel/3.jpg" class="img-fluid" alt="" />
              <h5 class="italic text-primary title mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nobis,
                perspiciatis asperiores quibusdam officiis aperiam recusandae, autem doloremque
                quaerat tempore laborum, totam porro ipsum soluta eaque blanditiis nam tenetur
                minus!
              </h5>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="p-4 mx-5" data-aos="fade-up">
              <img src="/src/assets/images/carousel/1.jpg" class="img-fluid" alt="" />
              <h5 class="italic text-primary title mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nobis,
                perspiciatis asperiores quibusdam officiis aperiam recusandae, autem doloremque
                quaerat tempore laborum, totam porro ipsum soluta eaque blanditiis nam tenetur
                minus!
              </h5>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="p-4 mx-5" data-aos="fade-up">
              <img src="/src/assets/images/carousel/2.jpg" class="img-fluid" alt="" />
              <h5 class="italic text-primary title mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nobis,
                perspiciatis asperiores quibusdam officiis aperiam recusandae, autem doloremque
                quaerat tempore laborum, totam porro ipsum soluta eaque blanditiis nam tenetur
                minus!
              </h5>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="p-4 mx-5" data-aos="fade-up">
              <img src="/src/assets/images/carousel/3.jpg" class="img-fluid" alt="" />
              <h5 class="italic text-primary title mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nobis,
                perspiciatis asperiores quibusdam officiis aperiam recusandae, autem doloremque
                quaerat tempore laborum, totam porro ipsum soluta eaque blanditiis nam tenetur
                minus!
              </h5>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>

  <section class="top container">
    <div class="row align-items-end">
      <div class="col-md-6" data-aos="fade-up">
        <img src="/src/assets/images/use/3.jpg" class="img-fluid img-boutique" alt="" />
      </div>
      <div class="col-md-5">
        <div class="py-5 w-half">
          <h1 class="text-primary title h1" data-aos="fade-up" data-aos-duration="1200">
            NOTRE <br />
            BOUTIQUE
          </h1>
          <p class="text-justify p" data-aos="fade-up" data-aos-duration="1500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam provident
            consequuntur quo placeat. Praesentium ullam quam aliquid obcaecati asperiores
            dignissimos, similique autem. Voluptates optio temporibus corrupti sed inventore atque
            aspernatur dolore, debitis consequuntur rerum sequi similique non id at quod nesciunt
            iusto repudiandae. Culpa, odio!
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
  
  <script lang="ts">
import { defineComponent } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css'

export default defineComponent({
  components: { Swiper, SwiperSlide }
})
</script>
  
  