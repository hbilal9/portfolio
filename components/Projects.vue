<script setup>
import {ref} from 'vue';
import { mdiArrowTopRight, mdiLinkVariant, mdiArrowRight, mdiStar, mdiTrayArrowDown   } from '@mdi/js';
const projects = ref([
  {
    id:1,
    name: 'Skyive',
    type: 'Site',
    image: '/images/project_images/issue_dashboard.jpg',
    siteLink : 'https://skyive.com',
    technologies : ['Vue 3', 'Nuxt 3', 'Laravel', 'Javascript', 'TypeScript', 'Tailwind Css'],
    starRating :{ total: '670', link:'https://pinia.vuejs.org/' },
    downloadedRating :{ total: '100K', link:'https://pinia.vuejs.org/' },
    description : "Skyive offers innovative digital business cards that serve as customizable and sustainable alternatives to traditional physical cards. These modern cards provide interactivity, cost-effectiveness, and global accessibility, facilitating seamless exchange of contact information."
  },
  {
    id:2,
    name: 'TableTag',
    type: 'Site',
    image: '/images/project_images/issue_dashboard.jpg',
    siteLink : 'https://skyive.com',
    technologies : ['Vue 3', 'Nuxt 3', 'Laravel', 'Javascript', 'TypeScript', 'Tailwind Css'],
    starRating :{ total: '670', link:'https://pinia.vuejs.org/' },
    downloadedRating :{ total: '100K', link:'https://pinia.vuejs.org/' },
    description : "Skyive offers innovative digital business cards that serve as customizable and sustainable alternatives to traditional physical cards. These modern cards provide interactivity, cost-effectiveness, and global accessibility, facilitating seamless exchange of contact information."
  },
  {
    id:3,
    name: 'Axlic',
    type: 'Site',
    image: '/images/project_images/issue_dashboard.jpg',
    siteLink : 'https://skyive.com',
    technologies : ['Vue 3', 'Nuxt 3', 'Laravel', 'Javascript', 'TypeScript', 'Tailwind Css'],
    starRating :{ total: '670', link:'https://pinia.vuejs.org/' },
    downloadedRating :{ total: '100K', link:'https://pinia.vuejs.org/' },
    description : "Skyive offers innovative digital business cards that serve as customizable and sustainable alternatives to traditional physical cards. These modern cards provide interactivity, cost-effectiveness, and global accessibility, facilitating seamless exchange of contact information."
  },
]);

</script>

<template>
    <div
          id="projects"
          class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        >
          <div
            class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-secondary-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
          >
            <h2
              class="text-sm font-bold uppercase tracking-widest text-secondary-200 lg:sr-only"
            >
              Projects
            </h2>
          </div>
          <div>
            <ul class="group/list">


              <li
                v-for="project in projects"
                :key="project.id"
                class="mb-12"
              >
                <div
                  class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
                >
                  <div
                    class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-secondary-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"
                  >
                  </div>

                  <div class="z-10 sm:order-2 sm:col-span-6">
                    <h3>
                      <NuxtLink
                        class="inline-flex items-baseline font-medium leading-tight text-secondary-200 hover:text-primary-300 focus-visible:text-primary-300 group/link text-base"
                        :to="project.siteLink"
                        target="_blank"
                        rel="noreferrer"
                      >

                        <span
                          class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"
                        ></span>
                          <span>
                            {{project.name}}
                            <span class="ml-px inline-block">
                              {{project.type}}
                              <svg-icon 
                                  class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                  type="mdi" 
                                  :path="mdiArrowTopRight "
                                ></svg-icon>
                            </span>
                          </span
                      ></NuxtLink>
                    </h3>
                    <p class="mt-2 text-sm leading-normal">
                      {{project.description}}
                    </p>
                    <NuxtLink
                      class="relative mt-2 inline-flex items-center text-sm font-medium text-secondary-300 hover:text-primary-300 focus-visible:text-primary-300"
                      :to="project.starRating.link"
                      target="_blank"
                      rel="noreferrer"
                      >
                      <svg-icon class="mr-1 h-4 w-4" type="mdi" :path="mdiStar "></svg-icon>
                      <span>{{project.starRating.total}}</span>
                    </NuxtLink>
                    <NuxtLink
                      class="relative mx-4 mt-2 inline-flex items-center text-sm font-medium text-secondary-300 hover:text-primary-300 focus-visible:text-primary-300"
                      :to="project.downloadedRating.link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg-icon class="mr-1 h-4 w-4" type="mdi" :path="mdiTrayArrowDown "></svg-icon>
                      <span>{{project.downloadedRating.total}}+ Installs</span>
                    </NuxtLink>
                    <ul
                      class="mt-2 flex flex-wrap"
                    >
                      <li 
                        v-for="(technology, index) in project.technologies"
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
                  <img
                    alt="project image"
                    loading="lazy"
                    width="200"
                    height="48"
                    class="rounded border-2 border-secondary-200/10 transition group-hover:border-secondary-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                    style="color: transparent"
                    :src="project.image"
                  />
                </div>
              </li>
            </ul>
            <div class="mt-12">
              <NuxtLink
                class="inline-flex items-center leading-tight font-semibold text-secondary-200 group"
                aria-label="View Full Project Archive"
                to="/archive"
              >
                <span>
                  <span
                    class="border-b border-transparent pb-px transition group-hover:border-primary-300 motion-reduce:transition-none"
                  >
                    View Full Project
                  </span>
                    <span class="whitespace-nowrap">
                      <span
                        class="border-b border-transparent pb-px transition group-hover:border-primary-300 motion-reduce:transition-none"
                      >
                        Archive
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