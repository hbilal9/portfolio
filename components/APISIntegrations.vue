<script setup>
import {ref} from 'vue';
import { mdiArrowTopRight,   } from '@mdi/js';
const apisIntegrations = ref([
  {
    id:1,
    name: 'Strip is integrated for payment',
    image: '/images/project_images/issue_dashboard.jpg',
    siteLink : 'https://skyive.com',
    date: '2023'
  },
  {
    id:1,
    name: 'Creating a star rating Component',
    image: '/images/project_images/issue_dashboard.jpg',
    siteLink : 'https://skyive.com',
    date: '2020'
  },
]);
</script>

<template>
    <div
          id="api-integration"
          class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
          aria-label="Blog posts"
        >
          <div
            class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-secondary-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
          >
            <h2
              class="text-sm font-bold uppercase tracking-widest text-secondary-200 lg:sr-only"
            >
              Writing
            </h2>
          </div>
          <div>
            <ul class="group/list">


              <li
                v-for="(apiIntegration, index ) in apisIntegrations"
                :key="index"
                class="mb-12"
              >
                <div
                  class="group relative grid grid-cols-8 gap-4 transition-all sm:items-center sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
                >
                  <div
                    class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-secondary-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"
                  >
                  </div>
                  <img
                    alt="api image"
                    loading="lazy"
                    width="200"
                    height="48"
                    class="z-10 text-transparent col-span-2 rounded border-2 border-secondary-200/10 transition group-hover:border-secondary-200/30 sm:col-span-2"
                    :src="apiIntegration.image"
                  />
                  <div class="z-10 col-span-6">
                    <p class="-mt-1 text-sm font-semibold leading-6">{{apiIntegration.date}}</p>
                    <h3 class="-mt-1">
                      <a
                        class="inline-flex items-baseline font-medium leading-tight text-secondary-200 hover:text-primary-300 focus-visible:text-primary-300 group/link text-base"
                        href="https://upstatement.com/blog/integrating-algolia-search-with-wordpress-multisite/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span
                          class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"
                        >
                        </span>
                        <span>
                          {{apiIntegration.name}}
                          <span class="inline-block">
                            <svg-icon 
                              class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                              type="mdi" 
                              :path="mdiArrowTopRight"
                            ></svg-icon>
                          </span>
                        </span>
                      </a>
                    </h3>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
</template>