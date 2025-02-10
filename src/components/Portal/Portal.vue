<template>
  <div
    id="portal"
    class="portal py-6 sm:py-12 lg:py-20 2xl:py-0 w-full flex flex-col items-center justify-start 2xl:justify-center min-h-screen bg-[#0A0118] text-white px-6"
  >
    <!-- Avatar y Nombre -->
    <div class="text-center mb-8 fade-in">
      <img
        src="/src/assets/icon.png"
        alt="Avatar"
        class="w-[100px] mx-auto scale-100 hover:scale-110 transition-transform duration-1000 ease-out hover:animate-pulse"
      />
      <h1 class="mt-4 mb-2 text-4xl font-bold">Goo Hub</h1>
      <p class="text-blue-goo">Agencia de Marketing Digital</p>
    </div>

    <!-- Enlaces -->
    <a
      v-for="(link, index) in links"
      :key="index"
      :href="link.url"
      target="_blank"
      :style="{
        '--hover-color': link.bgColor,
      }"
      class="block w-full max-w-md my-2 text-sm text-white hover:text-black text-center py-3 rounded-lg shadow-md hover:scale-105 transition-all duration-300"
      :class="{
        'bg-[rgba(255,255,255,0.2)] hover:bg-[var(--hover-color)]': true,
      }"
    >
      {{ link.text }}
    </a>

    <!-- Teléfonos -->
    <div class="w-full max-w-md flex mt-8 slide-up">
      <div
        class="relative overflow-visible mx-auto mb-4 inline-flex items-center justify-center gap-4 group"
      >
        <div
          class="absolute overflow-visible inset-0 duration-1000 opacity-60 transitiona-all bg-gradient-to-r from-[#9735ED] via-[#67F4B8] to-[#FCFC8B] rounded-full blur-lg filter group-hover:opacity-100 group-hover:duration-200"
        ></div>
        <a
          role="button"
          class="group relative inline-flex items-center justify-center text-base rounded-full bg-gray-900 hover:bg-[#3E2A4C] px-8 py-3 font-semibold text-white transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 hover:shadow-gray-600/30"
          title="Whatsapp"
          target="_blank"
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
import { ref } from "vue";
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

const links = ref([
  {
    text: "Sitio Web",
    bgColor: "#9735ED",
    url: "https://dev.goohub.digital",
  },
  {
    text: "Servicios",
    bgColor: "#FCFC8B",
    url: "https://dev.goohub.digital/servicios",
  },
  {
    text: "Portafolio",
    bgColor: "#67F4B8",
    url: "https://dev.goohub.digital/portafolio",
  },
  {
    text: "Contacto",
    bgColor: "#6EBBF9",
    url: "https://dev.goohub.digital/contacto",
  },
]);

const contacts = [{ text: "+57 350 227 2625", url: "tel:+573003303330" }];

const socialLinks = [
  {
    icon: faInstagram,
    url: "https://instagram.com/goohub.digital",
  },
  {
    icon: faFacebookF,
    url: "https://facebook.com/goohub.digital",
  },
  {
    icon: faLinkedin,
    url: "https://linkedin.com/company/goohub-digital",
  },
  {
    icon: faEnvelope,
    url: "mailto:info@goohub.digital",
  },
];

onMounted(() => {
  gsap.from(".fade-in", { opacity: 0, duration: 1, y: -20 });
  gsap.from(".slide-up", { opacity: 0, duration: 1, y: 20, stagger: 0.2 });
});

const getBgColor = (bgColor) => bgColor || "rgba(255,255,255,0.3)";
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
