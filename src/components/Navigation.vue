<template>
    <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-800">
        <div class="container flex flex-wrap justify-between items-center mx-auto">
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">VueJS</span>

          
            <ul class="flex mt-4 flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                <li>
                    <router-link class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" to="/films"  v-slot="{ href, route, navigate, isActive, isExactActive }">
                        Films
                    </router-link>
                </li>
                <li>
                     <router-link  class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" to="/starships">Starships</router-link>
                </li>
                
            </ul>
           
        </div>
    </nav>
</template>