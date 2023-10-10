<script setup>
import {ref} from 'vue';
import { mdiArrowTopRight, mdiLinkVariant, mdiArrowRight, mdiStar, mdiTrayArrowDown   } from '@mdi/js';
const experiences = ref([
  {
    id:1,
    jobTitle: 'Full Stack Developer',
    position: 'Senior Engineer',
    companyName: 'Skyive',
    fromDate: "2022",
    toDate: "present",
    siteLink : 'https://skyive.com',
    technologies : ['Vue 3', 'Nuxt 3', 'Laravel', 'Javascript', 'TypeScript', 'Tailwind Css'],
    usefulLinks : [
        { name:'Pinia', link:'https://pinia.vuejs.org/' },
        { name:'Pinia', link:'https://pinia.vuejs.org/' },
        { name:'Pinia', link:'https://pinia.vuejs.org/' },
    ],
    description : "Skyive offers innovative digital business cards that serve as customizable and sustainable alternatives to traditional physical cards. These modern cards provide interactivity, cost-effectiveness, and global accessibility, facilitating seamless exchange of contact information."
  },
  {
    id:2,
    jobTitle: 'Full Stack Developer',
    position: 'Senior Engineer',
    companyName: 'Skyive',
    fromDate: "2022",
    toDate: "present",
    siteLink : 'https://skyive.com',
    technologies : ['Vue 3', 'Nuxt 3', 'Laravel', 'Javascript', 'TypeScript', 'Tailwind Css'],
    usefulLinks : [
        { name:'Pinia', link:'https://pinia.vuejs.org/' },
        { name:'Pinia', link:'https://pinia.vuejs.org/' },
        { name:'Pinia', link:'https://pinia.vuejs.org/' },
    ],
    description : "Skyive offers innovative digital business cards that serve as customizable and sustainable alternatives to traditional physical cards. These modern cards provide interactivity, cost-effectiveness, and global accessibility, facilitating seamless exchange of contact information."
  },
  {
    id:3,
    jobTitle: 'Full Stack Developer',
    position: 'Senior Engineer',
    companyName: 'Skyive',
    fromDate: "2020",
    toDate: "2021",
    siteLink : 'https://skyive.com',
    technologies : ['Vue 3', 'Nuxt 3', 'Laravel', 'Javascript', 'TypeScript', 'Tailwind Css'],
    usefulLinks : [
        { name:'Pinia', link:'https://pinia.vuejs.org/' },
        { name:'Pinia', link:'https://pinia.vuejs.org/' },
        { name:'Pinia', link:'https://pinia.vuejs.org/' },
    ],
    description : "Skyive offers innovative digital business cards that serve as customizable and sustainable alternatives to traditional physical cards. These modern cards provide interactivity, cost-effectiveness, and global accessibility, facilitating seamless exchange of contact information."
  },
  {
    id:4,
    jobTitle: 'Full Stack Developer',
    position: 'Senior Engineer',
    companyName: 'Skyive',
    fromDate: "2021",
    toDate: "2022",
    siteLink : 'https://skyive.com',
    technologies : ['Vue 3', 'Nuxt 3', 'Laravel', 'Javascript', 'TypeScript', 'Tailwind Css'],
    usefulLinks : [
        { name:'Pinia', link:'https://pinia.vuejs.org/' },
        { name:'Pinia', link:'https://pinia.vuejs.org/' },
        { name:'Pinia', link:'https://pinia.vuejs.org/' },
    ],
    description : "Skyive offers innovative digital business cards that serve as customizable and sustainable alternatives to traditional physical cards. These modern cards provide interactivity, cost-effectiveness, and global accessibility, facilitating seamless exchange of contact information."
  },
]);

</script>
<template>
    <div
          id="experience"
          class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
          aria-label="Work experience"
        >
          <div
            class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-secondary-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
          >
            <h2
              class="text-sm font-bold uppercase tracking-widest text-secondary-200 lg:sr-only"
            >
              Experience
            </h2>
          </div>

          <div>
            <ol class="group/list">

              <!-- My Experiences -->
              <li 
                v-for="experience in experiences"
                :key="experience.id"
                class="mb-12"
              >
                <div
                  class="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
                >
                  <div
                    class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-secondary-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"
                  >
                  </div>
                  <header class="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">{{experience.fromDate}} — {{experience.toDate}}</header>
                  <div class="z-10 sm:col-span-6">
                    <h3 class="font-medium leading-snug text-secondary-200">
                      
                      <div>
                        <NuxtLink
                          class="inline-flex items-baseline font-medium leading-tight text-secondary-200 hover:text-primary-300 focus-visible:text-primary-300 group/link text-base"
                          :to="experience.siteLink"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span
                            class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"
                          >
                          </span>
                            <span>{{experience.jobTitle}} .
                              <span class="inline-block">{{experience.companyName}}
                                <svg-icon 
                                  class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" 
                                  type="mdi" 
                                  :path="mdiArrowTopRight "
                                ></svg-icon>
                              </span>
                            </span
                        ></NuxtLink>
                      </div>
                      <div>
                        <div class="text-secondary-500">
                          {{experience.position}}
                        </div>
                      </div>
                    </h3>
                    <p class="mt-2 text-sm leading-normal">
                      {{experience.description}}
                    </p>
                    <ul class="mt-2 flex flex-wrap" aria-label="Related links">
                      <li
                        v-for="(usefulLink , index) in experience.usefulLinks"
                        :key="index" 
                        class="mr-4"
                      >
                        <NuxtLink
                          class="relative mt-2 inline-flex items-center text-sm font-medium text-secondary-300 hover:text-primary-300 focus-visible:text-primary-300"
                          :to="usefulLink.link"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <svg-icon class="mr-1 h-3 w-3" type="mdi" :path="mdiLinkVariant "></svg-icon>
                          <span>{{ usefulLink.name}}</span>
                        </NuxtLink>
                      </li>
                    </ul>
                    <ul
                      class="mt-2 flex flex-wrap"
                    >
                      <li 
                        v-for="(technology, index) in experience.technologies"
                        :key="index"
                        class="mr-1.5 mt-2"
                      >
                        <div
                          class="flex items-center rounded-full bg-primary-400/10 px-3 py-1 text-xs font-medium leading-5 text-primary-300"
                        >
                          {{technology}}
                        </div>
                      </li>
                    </ul>


                  </div>
                </div>
              </li>
            </ol>

            <!-- Resume show link -->
            <div class="mt-12">
              <NuxtLink
                class="inline-flex items-center leading-tight font-semibold text-secondary-200 group"
                to="/resume.pdf"
                target="_blank"
              >
                <span>
                  <span
                    class="border-b border-transparent pb-px transition group-hover:border-primary-300 motion-reduce:transition-none"
                  >
                    View Full
                  </span>
                  <span class="whitespace-nowrap">
                    <span
                      class="border-b border-transparent pb-px transition group-hover:border-primary-300 motion-reduce:transition-none"
                    >
                      Resume
                    </span>
                    <svg-icon 
                      class="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                      type="mdi" 
                      :path="mdiArrowRight"
                    ></svg-icon>
                  </span>
                </span>
              </NuxtLink>
            </div>
          </div>
        </div>
</template>