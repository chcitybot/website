<script lang="ts" setup></script>

<template>
  <footer
    class="bg-white border-t border-gray-200"
    aria-labelledby="footer-heading"
  >
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="mx-auto max-w-7xl px-6 py-8">
      <div class="xl:grid xl:grid-cols-2 xl:gap-8">
        <div class="space-y-8">
          <!-- <svgLogo class="h-20 w-20" /> -->
          <img class="h-20 m-2" src="/img/citybot_logo.png" alt="" />
          <p class="text-sm leading-6 text-gray-600">
            {{ $t("footer_slogan") }}
            <svgSwissFlag class="h-5 w-5 inline-block ml-1" />
          </p>
          <!-- <div class="flex space-x-6">
                        <a href="#" class="text-gray-400 hover:text-gray-500">
                            <span class="sr-only">Facebook</span>
                            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fill-rule="evenodd"
                                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                    clip-rule="evenodd" />
                            </svg>
                        </a>
                        <a href="#" class="text-yellow-500 hover:text-gray-500">
                            <span class="sr-only">the team is on fire</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                                class="w-4 h-4">
                                <path fill-rule="evenodd"
                                    d="M8.074.945A4.993 4.993 0 0 0 6 5v.032c.004.6.114 1.176.311 1.709.16.428-.204.91-.61.7a5.023 5.023 0 0 1-1.868-1.677c-.202-.304-.648-.363-.848-.058a6 6 0 1 0 8.017-1.901l-.004-.007a4.98 4.98 0 0 1-2.18-2.574c-.116-.31-.477-.472-.744-.28Zm.78 6.178a3.001 3.001 0 1 1-3.473 4.341c-.205-.365.215-.694.62-.59a4.008 4.008 0 0 0 1.873.03c.288-.065.413-.386.321-.666A3.997 3.997 0 0 1 8 8.999c0-.585.126-1.14.351-1.641a.42.42 0 0 1 .503-.235Z"
                                    clip-rule="evenodd" />
                            </svg>

                        </a>
                        <a href="#" class="text-gray-400 hover:text-blue-4      00">
                            <span class="sr-only">X</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                                class="w-4 h-4">
                                <path
                                    d="M2.75 2a.75.75 0 0 0-.75.75v10.5a.75.75 0 0 0 1.5 0v-2.624l.33-.083A6.044 6.044 0 0 1 8 11c1.29.645 2.77.807 4.17.457l1.48-.37a.462.462 0 0 0 .35-.448V3.56a.438.438 0 0 0-.544-.425l-1.287.322C10.77 3.808 9.291 3.646 8 3a6.045 6.045 0 0 0-4.17-.457l-.34.085A.75.75 0 0 0 2.75 2Z" />
                            </svg>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-gray-500">
                            <span class="sr-only">GitHub</span>
                            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fill-rule="evenodd"
                                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                    clip-rule="evenodd" />
                            </svg>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-gray-500">
                            <span class="sr-only">YouTube</span>
                            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fill-rule="evenodd"
                                    d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                                    clip-rule="evenodd" />
                            </svg>
                        </a>
                    </div> -->
        </div>
        <div class="grid grid-cols-1 gap-4 justify-between mt-4">
          <div class="footer-block-two">
            <p class="paragraph-4">
              CityBot GmbH<br />Berninaplatz 1<br />8050 Zürich
            </p>
          </div>
          <div class="footer-block-two">
            <a href="mailto:contact.citybot@gmail.com" class="w-inline-block">
              <p class="paragraph-4">contact.citybot@gmail.com<br /></p>
            </a>
          </div>
          <div class="flex flex-col">
            <NuxtLink :to="'/privacy'" class="footer-link-two"
              >Datenschutz</NuxtLink
            >
          </div>
        </div>
        <!-- <div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                    <div class="md:grid md:grid-cols-2 md:gap-8">
                        <div>
                            <h3 class="text-sm font-semibold leading-6 text-gray-900">Solutions</h3>
                            <ul role="list" class="mt-6 space-y-4">
                                <li>
                                    <a href="#"
                                        class="text-sm leading-6 text-gray-600 hover:text-gray-900">Marketing</a>
                                </li>
                                <li>
                                    <a href="#"
                                        class="text-sm leading-6 text-gray-600 hover:text-gray-900">Analytics</a>
                                </li>
                                <li>
                                    <a href="#" class="text-sm leading-6 text-gray-600 hover:text-gray-900">Commerce</a>
                                </li>
                                <li>
                                    <a href="#" class="text-sm leading-6 text-gray-600 hover:text-gray-900">Insights</a>
                                </li>
                            </ul>
                        </div>
                        <div class="mt-10 md:mt-0">
                            <h3 class="text-sm font-semibold leading-6 text-gray-900">Support</h3>
                            <ul role="list" class="mt-6 space-y-4">
                                <li>
                                    <a href="#" class="text-sm leading-6 text-gray-600 hover:text-gray-900">Pricing</a>
                                </li>
                                <li>
                                    <a href="#"
                                        class="text-sm leading-6 text-gray-600 hover:text-gray-900">Documentation</a>
                                </li>
                                <li>
                                    <a href="#" class="text-sm leading-6 text-gray-600 hover:text-gray-900">Guides</a>
                                </li>
                                <li>
                                    <a href="#" class="text-sm leading-6 text-gray-600 hover:text-gray-900">API
                                        Status</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="md:grid md:grid-cols-2 md:gap-8">
                        <div>
                            <h3 class="text-sm font-semibold leading-6 text-gray-900">Company</h3>
                            <ul role="list" class="mt-6 space-y-4">
                                <li>
                                    <a href="#" class="text-sm leading-6 text-gray-600 hover:text-gray-900">About</a>
                                </li>
                                <li>
                                    <a href="#" class="text-sm leading-6 text-gray-600 hover:text-gray-900">Blog</a>
                                </li>
                                <li>
                                    <a href="#" class="text-sm leading-6 text-gray-600 hover:text-gray-900">Jobs</a>
                                </li>
                                <li>
                                    <a href="#" class="text-sm leading-6 text-gray-600 hover:text-gray-900">Press</a>
                                </li>
                                <li>
                                    <a href="#" class="text-sm leading-6 text-gray-600 hover:text-gray-900">Partners</a>
                                </li>
                            </ul>
                        </div>
                        <div class="mt-10 md:mt-0">
                            <h3 class="text-sm font-semibold leading-6 text-gray-900">Legal</h3>
                            <ul role="list" class="mt-6 space-y-4">
                                <li>
                                    <a href="#" class="text-sm leading-6 text-gray-600 hover:text-gray-900">Claim</a>
                                </li>
                                <li>
                                    <a href="#" class="text-sm leading-6 text-gray-600 hover:text-gray-900">Privacy</a>
                                </li>
                                <li>
                                    <a href="#" class="text-sm leading-6 text-gray-600 hover:text-gray-900">Terms</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>-->
      </div>
      <div class="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
        <p class="text-xs leading-5 text-gray-500">
          &copy; {{ new Date().getFullYear() }} CityBot GmbH, Inc. All rights
          reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
