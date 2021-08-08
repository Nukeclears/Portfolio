<template>
    <div class="flex flex-col gap-16 lg:gap-36 bg-gray-100 dark:bg-gray-900 transition-colors duration-200" id="app">
        <div class="nav text-white"><router-link to="/">Home</router-link>|<router-link to="/about">test vue</router-link></div>
        <div class="flex flex-col gap-16 lg:gap-36 bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
            <div
                class="
                    bg-200% bg-right bg-gradient-to-r
                    from-gray-100
                    dark:from-gray-1000
                    dark:via-red-500
                    to-cyan-400
                    dark:to-pink-500
                    animate-gradient-x
                "
            >
                <div class="container mx-auto h-full font-display px-3 lg:px-0 pt-8 lg:pt-12 pb-4">
                    <div class="flex flex-col h-full justify-between gap-24 lg:gap-48">
                        <div class="flex justify-end">
                            <button
                                class="btn bg-gray-1000 dark:bg-white transition-colors duration-500"
                                id="darktoggle"
                                aria-label="toggle dark-mode"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-8 w-8 text-white dark:text-black block dark:hidden transition-colors duration-500"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                    />
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-8 w-8 text-white dark:text-black hidden dark:block transition-colors duration-500"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div class="flex flex-col lg:flex-row justify-between gap-12 lg:gap-0">
                            <div class="flex flex-col self-center animate-dropin w-72 lg:w-auto">
                                <div class="title_line"></div>
                                <div class="text-black dark:text-white uppercase">
                                    <h1 class="transition-colors duration-500 text-6xl lg:text-8xl font-black">thomas</h1>
                                    <h2 class="transition-colors duration-500 text-3xl lg:text-5xl font-thin">van deursen</h2>
                                </div>
                            </div>
                            <div class="flex flex-col self-center w-72 lg:w-full">
                                <div class="h-1"></div>
                                <p class="headline_tag">Fusce risus nisl</p>
                                <p class="headline_tag">Donec venenatis</p>
                                <p class="headline_tag">In consectetuer turpis</p>
                            </div>
                        </div>
                        <div class="flex justify-center pb-6">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-10 w-10 dark:text-white text-black animate-ping"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="px-7 lg:px-14">
                    <div class="flex flex-col gap-8 lg:gap-24">
                        <div class="container self-center">
                            <h2 class="section_title">Blocks</h2>
                        </div>
                        <div class="grid grid-cols-1 lg:grid-cols-3 grid-flow-row gap-12 lg:gap-24">
                            <router-link to="/block1">
                                <div class="block_item group border-red-500 dark:border-cyan-500"   >
                                    <div class="block_top bg-red-500 dark:bg-cyan-500">
                                        <div class="block_image group-hover:opacity-100">
                                            <!-- js image goes here -->
                                        </div>
                                    </div>
                                    <div class="block_bot bg-gray-100 dark:bg-gray-800">
                                        <p class="block_title text-red-500 dark:text-cyan-500">Etiam ut purus mattis</p>
                                        <p class="block_text dark:text-white text-black">
                                            Quisque id mi. Fusce commodo aliquam arcu. Praesent egestas neque eu enim. Praesent venenatis metus
                                            at tortor pulvinar varius.
                                        </p>
                                    </div>
                                </div>
                            </router-link>
                            <router-link to="/block2">
                                <div class="block_item group border-red-500 dark:border-cyan-500"   >
                                    <div class="block_top bg-red-500 dark:bg-cyan-500">
                                        <div class="block_image group-hover:opacity-100">
                                            <!-- js image goes here -->
                                        </div>
                                    </div>
                                    <div class="block_bot bg-gray-100 dark:bg-gray-800">
                                        <p class="block_title text-red-500 dark:text-cyan-500">Etiam ut purus mattis</p>
                                        <p class="block_text dark:text-white text-black">
                                            Quisque id mi. Fusce commodo aliquam arcu. Praesent egestas neque eu enim. Praesent venenatis metus
                                            at tortor pulvinar varius.
                                        </p>
                                    </div>
                                </div>
                            </router-link>
                            <router-link to="/block3">
                                <div class="block_item group border-red-500 dark:border-cyan-500"   >
                                    <div class="block_top bg-red-500 dark:bg-cyan-500">
                                        <div class="block_image group-hover:opacity-100">
                                            <!-- js image goes here -->
                                        </div>
                                    </div>
                                    <div class="block_bot bg-gray-100 dark:bg-gray-800">
                                        <p class="block_title text-red-500 dark:text-cyan-500">Etiam ut purus mattis</p>
                                        <p class="block_text dark:text-white text-black">
                                            Quisque id mi. Fusce commodo aliquam arcu. Praesent egestas neque eu enim. Praesent venenatis metus
                                            at tortor pulvinar varius.
                                        </p>
                                    </div>
                                </div>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
            <transition>
            <router-view/>
            </transition>
            <div>
                <div class="bg-gradient-to-r from-cyan-200 dark:from-red-500 to-cyan-400 dark:to-pink-400 bg-opacity-70">
                    <div class="px-7 lg:px14 bg-gray-1000 bg-opacity-10">
                        <div class="flex flex-col">
                            <div class="container self-center py-3">
                                <div class="flex justify-between">
                                    <div class="flex flex-col text-black dark:text-white">
                                        <div class="title_line"></div>
                                        <p
                                            class="
                                                text-xl
                                                lg:text-xl
                                                font-display font-black
                                                uppercase
                                                leading-none
                                                lg:-mb-1
                                                -mt-1
                                                lg:-mt-3
                                            "
                                        >
                                            thomas
                                        </p>
                                    </div>
                                    <div class="flex flex-col text-right text-black dark:text-white">
                                        <a href="#" class="text-sm lg:text-base font-display font-semibold"> mail@mail.com </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>