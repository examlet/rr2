<script lang="ts" setup>
</script>

<template>
    <div class="bg-[#fff] pt-64px flex flex-col min-h-screen">
        <header class="fixed top-0 left-0 right-0 h-64px bg-[#fff] z-11">
            <div class="w-full h-full bg-[#fff] z-100 absolute border-b border-[#e7e8ec]">
                <div
                    class="flex flex-row justify-between items-center h-full | w-full my-0 mx-auto py-0 px-20px box-border relative lg:w-768px xl:w-1024px xl:px-32px"
                >
                    <div class="flex w-full lg:w-150px">
                        <NuxtLink to="/">
                            <img src="/img/logo.png" alt="Quick Sales" width="150px" height="30px" />
                        </NuxtLink>
                    </div>
                    <div class="flex justify-between w-full items-center">
                        <div class="flex flex-row items-center !hidden !lg:block">
                            <NuxtLink
                                to="#features"
                                class="ml-32px text-[#6d7885] hover:text-[#222] transition-colors duration-300"
                            >Возможности</NuxtLink>
                            <NuxtLink
                                href="#tariffs"
                                class="ml-32px text-[#6d7885] hover:text-[#222] transition-colors duration-300"
                            >Тарифы</NuxtLink>
                            <NuxtLink
                                href="#faq"
                                class="ml-32px text-[#6d7885] hover:text-[#222] transition-colors duration-300"
                            >FAQ</NuxtLink>
                        </div>
                        <div class="flex flex-row items-center !hidden !lg:block">
                            <button
                                class="w-250px h-36px border border-solid border-gray-500 border-opacity-40 rounded-md text-[#222] font-medium items-center"
                            >
                                <div class="i-carbon-cloud-logging mb-3px w-40px" />
                                <span>Перейти в кабинет</span>
                            </button>
                        </div>
                    </div>

                    <div class="flex lg:hidden items-center">
                        <div class="relative inline-block w-20px h-24px space-y-1 h-full">
                            <div class="block w-20px h-2px bg-[#333] rounded-4px -top-6px" />
                            <div class="block w-20px h-2px bg-[#333] rounded-4px" />
                            <div class="block w-20px h-2px bg-[#333] rounded-4px -bottom-6px" />
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <main class="flex-grow flex-shrink-0 basis-auto">
            <section class="pb-0">
                <div
                    class="w-full mx-auto py-0 px-20px box-border relative lg:w-768px xl:w-1024px xl:px-32px"
                >
                    <h1
                        class="mt-100px mb-20px lg:mb-100px fw-500 lg:fw-500 text-32px lg:text-64px leading-120% text-[#222222] text-left lg:text-center"
                    >
                        <span class="mr-20px">Все, что нужно для работы со своими клиентами</span>
                        <img src="img/vk.svg" alt="ВКонтакте" class="inline h-24px lg:h-48px" />
                        <div class="text-16px lg:text-36px">от запуска рекламы до сквозной аналитики</div>
                    </h1>  
                    <div
                        class="w-full lg:w-540px text-16px lg:text-20px leading-140% mb-30px"
                    >
                        <span>После регистрации начислим 500₽ на ваш счет, чтобы вы смогли протестировать сервис в течение 14 дней</span>
                    </div>
                    <div class="flex flex-row items-center">
                        <button
                            class="font-medium h-46px w-full md:w-250px rounded-sm transition-colors duration-300 text-[#222] hover:text-[#fff] bg-[#80eec0] hover:bg-[#00dc82] focus:bg-[#cceada] active:bg-[#bfe5d1]"
                        >Подключить сообщество</button>
                    </div>

                    <div
                        class="flex text-18px lg:text-20px flex-row items-center hover:cursor-poiner mt-60px animate-bounce-alt animate-count-1 animate-1s"
                    >
                        <div class="i-carbon-sort-descending w-40px" />
                        <span>Подробнее о сервисе</span>
                    </div>
                </div>
            </section>

            <section class="mt-100px">
                <div class="w-full mx-auto py-0 px-20px box-border relative lg:w-768px xl:w-1024px xl:px-32px hidden lg:block">
                    <div class="bg-[#f3f4f6] rounded-xl w-1024px h-350px p-40px">
                        <h1 class="text-28px text-[#222222] w-60%">
                            <span>
                                QuickSales — это CRM, мессенджер, посадочные страницы, рассылки, чат-боты и рекламный кабинет в одном сервисе.
                            </span>
                        </h1>
                    </div>
                </div>
            </section>

            <section class="mt-100px">
                
            </section>
        </main>
    </div>
</template>