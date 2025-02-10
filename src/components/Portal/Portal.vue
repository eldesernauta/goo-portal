<template>
  <div
    id="portal"
    class="portal py-6 sm:py-12 lg:py-20 2xl:py-0 w-full flex flex-col items-center justify-start 2xl:justify-center min-h-screen bg-[#0A0118] text-white px-6"
  >
    <!-- Avatar y Nombre -->
    <div class="text-center mb-8 fade-in">
      <img src="/src/assets/icon.png" alt="Avatar" class="w-[100px] mx-auto" />
      <h1 class="mt-4 mb-2 text-4xl font-bold">Goo Hub</h1>
      <p class="text-blue-goo">Agencia de Marketing Digital</p>
    </div>

    <!-- Enlaces -->
    <div class="w-full max-w-md flex flex-col gap-4 slide-up">
      <a
        v-for="(link, index) in links"
        :key="index"
        :href="link.url"
        target="_blank"
        class="block w-full bg-[rgba(255,255,255,0.3)] hover:bg-[#9735ED] text-black hover:text-white text-center py-3 rounded-lg font-semibold shadow-md hover:scale-105 transition-all duration-300"
      >
        {{ link.text }}
      </a>
    </div>

    <!-- Teléfonos -->
    <div class="w-full max-w-md flex mt-8 slide-up">
      <div
        class="relative overflow-visible mx-auto mb-4 inline-flex items-center justify-center gap-4 group"
      >
        <div
          class="absolute overflow-visible inset-0 duration-1000 opacity-60 transitiona-all bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 rounded-full blur-lg filter group-hover:opacity-100 group-hover:duration-200"
        ></div>
        <a
          role="button"
          class="group relative inline-flex items-center justify-center text-base rounded-full bg-gray-900 hover:bg-[#3E2A4C] px-8 py-3 font-semibold text-white transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 hover:shadow-gray-600/30"
          title="Whatsapp"
          href="#"
          >¡Hablemos!<svg
            aria-hidden="true"
            viewBox="0 0 10 10"
            height="10"
            width="10"
            fill="none"
            class="mt-0.5 ml-2 -mr-1 stroke-white stroke-2"
          >
            <path
              d="M0 5h7"
              class="transition opacity-0 group-hover:opacity-100"
            ></path>
            <path
              d="M1 1l4 4-4 4"
              class="transition group-hover:translate-x-[3px]"
            ></path>
          </svg>
        </a>
      </div>

      <!-- <button class="button mx-auto mb-4">¡Hablemos!</button> -->
    </div>

    <!-- Redes Sociales -->
    <div class="flex gap-8 fade-in">
      <a
        v-for="(social, index) in socialLinks"
        :key="index"
        :href="social.url"
        target="_blank"
        class="text-2xl text-blue-goo hover:text-green-goo transition-colors"
      >
        <font-awesome-icon
          :icon="social.icon"
          class="text-white hover:text-[#67F4B8] transition-colors duration-300"
        />
      </a>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import gsap from "gsap";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faFacebookF,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

// Agregar íconos a la librería
library.add(faEnvelope, faFacebookF, faLinkedin, faInstagram);

const links = [
  { text: "Sitio Web", url: "https://goohub.digital" },
  { text: "Servicios", url: "https://goohub.digital/servicios" },
  { text: "Portafolio", url: "https://goohub.digital/portafolio" },
  { text: "Contacto", url: "https://goohub.digital/contacto" },
];

const contacts = [{ text: "+57 350 227 2625", url: "tel:+573003303330" }];

const socialLinks = [
  { icon: faInstagram, url: "https://instagram.com/goohubdigital" },
  { icon: faFacebookF, url: "https://facebook.com/goohubdigital" },
  { icon: faLinkedin, url: "https://linkedin.com/company/goohubdigital" },
  { icon: faEnvelope, url: "mailto:info@goohub.digital" },
];

onMounted(() => {
  gsap.from(".fade-in", { opacity: 0, duration: 1, y: -20 });
  gsap.from(".slide-up", { opacity: 0, duration: 1, y: 20, stagger: 0.2 });
});
</script>

<style scoped>
.fade-in {
  opacity: 0;
  animation: fadeIn 1s forwards;
}

#portal {
  background-image: url("../../assets/bg.png");
  background-size: cover;
  background-position: top center;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
