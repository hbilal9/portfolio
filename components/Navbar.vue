<script setup>
import { ref } from 'vue'
import { mdiGithub, mdiInstagram, mdiTwitter, mdiLinkedin } from '@mdi/js';

const socialLinks = ref([
  {
    name:"GitHub",
    link : "https://skyive.com/"
  },
  {
    name:"Instagram",
    link : "https://skyive.com/"
  },
  {
    name:"Twitter",
    link : "https://skyive.com/"
  },
  {
    name:"LinkedIn",
    link : "https://skyive.com/"
  }
]);

const activeLink = ref("about-link");
const navLinks = ref([
  {
    id:1,
    name:"About",
    linkId: "about-link",
    sectionId : 'about'
  },

  {
    id:2,
    name:"Experience",
    linkId: "experience-link",
    sectionId : 'experience'
  },

  {
    id:3,
    name:"Projects",
    linkId: "project-link",
    sectionId : 'projects'
  },
]);

function activeTheLink(payload){
  activeLink.value = payload;
}

function isSectionInViewport(sectionId) {
    const targetDiv = document.getElementById(sectionId);
    if (!targetDiv) return false;
      const rect = targetDiv.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      
      // Calculate the center of the div
      const divCenter = rect.top + rect.height / 2;

      return divCenter >= 0 && divCenter <= windowHeight;

}

function handleTheScroll(){
    for (let item of navLinks.value) {
        if (isSectionInViewport(item.sectionId)) {
          activeLink.value = item.linkId;
          break;
        }
      }
}

onMounted(() => {
      window.addEventListener('scroll', handleTheScroll);
  });

onBeforeUnmount(() => {
      window.removeEventListener('scroll', handleTheScroll);
  });

</script>

<template>
    <!-- Header and Navbar -->
      <div
        class="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-16"
      >
        <div>
          <div class="">
            <div class="h-48 w-48 sm:h-56 sm:w-56 overflow-hidden rounded-full border-8 border-secondary-200 shadow-xl">
                <img src="/images/user2.png" class="h-full w-full object-cover  rounded-full" alt="author" />
            </div>  
          </div>
          <h1 class="mt-3 text-4xl font-bold tracking-tight text-secondary-200 sm:text-5xl">
            <NuxtLink to="/">
                HBilal Khan
            </NuxtLink>
          </h1>
          <h2 class="mt-3 text-lg font-medium tracking-tight text-secondary-200 sm:text-xl">
            Full Stack Developer
          </h2>

          <p class="mt-4 max-w-xs leading-normal">
            Adaptable developer proficient in front-end and back-end development.
          </p>


          <nav class="hidden lg:block" aria-label="In-page jump links">
            <ul class="mt-10 w-max">
              <li>
                <NuxtLink 
                  class="group flex items-center py-3"
                  @click="activeTheLink(navLinks[0].linkId)"
                  :class="{'active' : activeLink === navLinks[0].linkId}"
                  to="#about"
                  :id="navLinks[0].linkId"
                >
                    <span
                        class="nav-indicator mr-4 h-px w-8 bg-secondary-600 transition-all group-hover:w-16 group-hover:bg-secondary-200 group-focus-visible:w-16 group-focus-visible:bg-secondary-200 motion-reduce:transition-none"
                    >
                    </span>

                    <span
                        class="nav-text text-xs font-bold uppercase tracking-widest text-secondary-500 group-hover:text-secondary-200 group-focus-visible:text-secondary-200"
                    >  
                      {{ navLinks[0].name }}
                    </span>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink 
                  class="group flex items-center py-3"
                  @click="activeTheLink(navLinks[1].linkId)"
                  :class="{'active' : activeLink === navLinks[1].linkId}"
                  to="#experience"
                  :id="navLinks[1].linkId" 
                >
                    <span
                        class="nav-indicator mr-4 h-px w-8 bg-secondary-600 transition-all group-hover:w-16 group-hover:bg-secondary-200 group-focus-visible:w-16 group-focus-visible:bg-secondary-200 motion-reduce:transition-none"
                    >
                    </span>
                    <span
                        class="nav-text text-xs font-bold uppercase tracking-widest text-secondary-500 group-hover:text-secondary-200 group-focus-visible:text-secondary-200"
                    >
                        {{ navLinks[1].name }}
                    </span>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink 
                  class="group flex items-center py-3" 
                  @click="activeTheLink(navLinks[2].linkId)"
                  :class="{'active' : activeLink === navLinks[2].linkId}"
                  to="#projects"
                  :id="navLinks[2].linkId"
                >
                    <span
                        class="nav-indicator mr-4 h-px w-8 bg-secondary-600 transition-all group-hover:w-16 group-hover:bg-secondary-200 group-focus-visible:w-16 group-focus-visible:bg-secondary-200 motion-reduce:transition-none"
                    >
                    </span>
                    <span
                        class="nav-text text-xs font-bold uppercase tracking-widest text-secondary-500 group-hover:text-secondary-200 group-focus-visible:text-secondary-200"
                    >
                        {{ navLinks[2].name }}
                    </span>
                </NuxtLink>
              </li>
            </ul>
          </nav>
        </div>
        <ul class="ml-1 mt-8 flex items-center">
          <li class="mr-5 text-xs">
            <NuxtLink class="block hover:text-secondary-200"
              :to="socialLinks[0].link"
              target="_blank"
              rel="noreferrer"
            >
                <span class="sr-only">{{socialLinks[0].name}}</span>
                <svg-icon type="mdi" :path="mdiGithub" size="2rem"></svg-icon>
            </NuxtLink>
          </li>
          <li class="mr-5 text-xs">
            <NuxtLink class="block hover:text-secondary-200"
              :to="socialLinks[1].link"
              target="_blank"
              rel="noreferrer"
            >
                <span class="sr-only">Instagram</span>
                <svg-icon type="mdi" :path="mdiInstagram" size="2rem"></svg-icon>

            </NuxtLink>
          </li>
          <li class="mr-5 text-xs">
            <NuxtLink
              class="block hover:text-secondary-200"
              :to="socialLinks[2].link"
              target="_blank"
              rel="noreferrer"
            >
                <span class="sr-only">Twitter</span>
                <svg-icon type="mdi" :path="mdiTwitter" size="2rem"></svg-icon>

            </NuxtLink>
          </li>
          <li class="mr-5 text-xs">
            <NuxtLink
              class="block hover:text-secondary-200"
              :to="socialLinks[3].link"
              target="_blank"
              rel="noreferrer"
            >
                <span class="sr-only">LinkedIn</span>
                <svg-icon type="mdi" :path="mdiLinkedin" size="2rem"></svg-icon>
              </NuxtLink>
          </li>
        </ul>
      </div>
</template>