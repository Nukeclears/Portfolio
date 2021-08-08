<template>
    <div>
        <div class="px-7 lg:px-14">
            <div class="flex flex-col gap-8 lg:gap-24">
                <div class="container self-center">
                    <h2 class="section_title">Information</h2>
                </div>
                <div class="container self-center">
                    <div class="flex flex-col lg:flex-row justify-center gap-12 lg:gap-24">
                        <div class="flex gap-4 -ml-4">
                            <div class="w-1 dark:bg-cyan-500 bg-red-500"></div>
                            <div class="flex flex-col text-base lg:text-lg gap-6 lg:w-96 dark:text-white text-black font-body">
                                <p>
                                    Ut a nisl id ante tempus hendrerit. Vivamus elementum semper nisi. Vestibulum purus quam, scelerisque
                                    ut, mollis sed, nonummy id, metus. Fusce ac felis sit amet ligula pharetra condimentum. Quisque id odio.
                                </p>
                                Vivamus laoreet. Morbi vestibulum volutpat enim. Maecenas malesuada. Praesent ac massa at ligula laoreet
                                iaculis. Cras id dui.
                                <p>
                                    Pellentesque posuere. Nunc interdum lacus sit amet orci. Suspendisse pulvinar, augue ac venenatis
                                    condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc. Phasellus viverra nulla ut
                                    metus varius laoreet. Nullam accumsan lorem in dui.
                                </p>
                            </div>
                        </div>
                        <div
                            class="
                                h-48
                                lg:h-auto
                                lg:w-full
                                bg-red-500
                                dark:bg-cyan-500
                                rounded-xl
                                transform
                                hover:scale-105
                                transition-transform
                                duration-200
                                border-2 border-red-500
                                dark:border-cyan-500
                            "
                        >
                            <div
                                class="
                                    info_image
                                    h-full
                                    w-full
                                    opacity-90
                                    lg:opacity-80
                                    hover:opacity-100
                                    transition-all
                                    duration-500
                                    rounded-xl
                                    cursor-pointer
                                "
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
