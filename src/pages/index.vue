<script lang="ts" setup>
</script>

<template>
    <div bg="[#ffffff]" flex flex-col min-h-screen>
        <header bg="[#ffffff]" fixed top-0 left-0 right-0 h-64px z-11>
            <div bg="[#ffffff]" border="b [#e7e8ec]" w-full h-full z-100 absolute>
                <div flex flex-row justify-between items-center h-full | w="full xl:1024px" p="x-20px lg:0" relative mx-auto>
                    <div flex w="full xl:200px">
                        <a cursor-pointer onclick="document.getElementById('start').scrollIntoView();">
                            <img src="/img/logo.png" alt="Quick Sales" width="150px" height="30px" />
                        </a>
                    </div>
                    <div hidden xl:flex justify-between w-full items-center>
                        <div flex flex-row items-center>
                            <a
                                cursor-pointer onclick="document.getElementById('features').scrollIntoView();"
                                text="[#6d7885] hover:[#222222]" ml-32px transition-colors duration-300
                            >Возможности</a>
                            <a
                                cursor-pointer onclick="document.getElementById('price').scrollIntoView();"
                                text="[#6d7885] hover:[#222222]" ml-32px transition-colors duration-300
                            >Стоимость</a>
                            <a
                                cursor-pointer onclick="document.getElementById('faq').scrollIntoView();"
                                text="[#6d7885] hover:[#222222]" ml-32px transition-colors duration-300
                            >FAQ</a>
                        </div>
                        <div flex flex-row items-center>
                            <button
                                border="1 solid gray-500 opacity-40" text="[#222222]" rounded-md w-250px h-36px font-medium items-center
                            >
                                <div i-carbon-cloud-logging mb-3px w-40px />
                                <span>Перейти в кабинет</span>
                            </button>
                        </div>
                    </div>

                    <div flex xl:hidden items-center>
                        <div relative inline-block w-20px h-24px space-y-1 h-full>
                            <div bg="[#222222]" top="-6px" w-20px h-2px rounded-4px />
                            <div bg="[#222222]" w-20px h-2px rounded-4px />
                            <div bg="[#222222]" bottom="-6px" w-20px h-2px rounded-4px />
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <main flex="grow shrink-0" basis-auto>
            <section id="start" pt="104px xl:164px">
                <div w="full xl:1024px" p="x-20px lg:0" relative mx-auto>
                    <h1 fw-500 leading-120% text="[#222222] 28px xl:64px xl:center">
                        <span>
                            Все, что нужно для
                            <br xl:hidden />работы
                            <br hidden xl:block />со своими лидами
                            <img
                                src="/img/vk.svg"
                                alt="ВКонтакте"
                                width="auto"
                                height="auto"
                                h="20px xl:48px"
                                inline
                            />
                            вконтакте
                        </span>
                        <h2 text="center [#222222] 18px xl:36px" fw-500 mt-20px leading-110%>
                            <span ml="-80px xl:0">от запуска рекламы</span>
                            <br class="lg:hidden" />
                            <span mr="-50px xl:0">до сквозной аналитики</span>
                        </h2>
                    </h1>
                    <div text="14px xl:20px" mt="40px xl:100px">
                        После перехода начислим 500₽ на ваш счет,
                        <br />чтобы вы смогли протестировать сервис
                    </div>
                    <div mt-20px>
                        <button
                            class="text-18px font-medium h-46px w-full md:w-410px rounded-sm transition-colors duration-150 text-[#222] hover:text-[#fff] bg-[#80eec0] hover:bg-[#00dc82] focus:bg-[#cceada] active:bg-[#bfe5d1]"
                        >Перейти в кабинет</button>
                    </div>

                    <div text="14px xl:20px" mt-90px>
                        <div i-carbon-sort-descending w-30px h-12px />
                        <span>Подробнее о сервисе</span>
                    </div>
                </div>
            </section>

            <section id="about" pt="63px xl:90px">
                <div 
                    class="relative w-full h-400px lg:h-350px mx-auto lg:w-768px xl:w-1024px lg:rounded-xl"
                    style="background: #f8f9fa url(/img/banner.png) 100% 100% no-repeat; background-size: 320px;"
                >
                    <div class="text-18px text-[#222222] pt-35px px-20px sm:p-35px sm:text-24px">
                        <span>
                        Quick Sales — это CRM-система, мессенджер,
                        <br class="hidden sm:block">
                        конструктор посадочных страниц, рассылок,
                         <br class="hidden sm:block">
                        чат-ботов и рекламный кабинет в одном месте
                        </span>
                     </div>
                </div>
            </section>

            <section id="features" pt="63px xl:90px" h-400px>
                <div w="full xl:1024px" p="x-20px lg:0" relative mx-auto>
                    <span text="24px [#222222]" fw500>
                        Возможности
                    </span>
                </div>
            </section>

            <section id="price" pt="63px xl:90px" h-400px>
                <div w="full xl:1024px" p="x-20px lg:0" relative mx-auto>
                    <span text="24px [#222222]" fw500>
                        Стоимость
                    </span>
                </div>
            </section>

            <section id="faq" pt="63px xl:90px" h-400px>
                <div w="full xl:1024px" p="x-20px lg:0" relative mx-auto>
                    <span text="24px [#222222]" fw500>
                        FAQ
                    </span>
                </div>
            </section>

            <section id="action" pt="63px xl:90px">
                <div class="w-full my-0 mx-auto py-0 px-20px box-border relative lg:w-768px xl:w-1024px xl:px-0px">
                    <div class="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-20px">
                        <div class="flex flex-culumn items-start">
                            <h2 class="text-[#222222] text-24px md:text-36px fw-500 mb-40px">
                                <div class="mb-20px">
                                    Подключите свое первое
                                    сообщество уже
                                    <br />
                                    сейчас
                                </div>
                                <button
                                class="text-16px font-medium h-46px w-full md:w-250px rounded-sm transition-colors duration-150 text-[#222] hover:text-[#fff] bg-[#80eec0] hover:bg-[#00dc82] focus:bg-[#cceada] active:bg-[#bfe5d1]"
                            >Перейти в кабинет</button>
                            </h2>
                            
                        </div>
                        <div class="relative flex justify-center">
                            <img src="/img/action.svg" alt="Действие">
                        </div>
                    </div>
                </div>
            </section>
        </main>

        <footer pt="63px xl:90px">
            <div bg="[#f8f9fa]" border="t [#e7e8ec]" h-full>
                <div w="full xl:1024px" p="x-20px lg:0" relative mx-auto>
                    <div grid grid-cols-3 text-center py-10px text-14px>
                        <div>© 2022 QuickSales</div>
                        <div>Правовая информация</div>
                        <div>Техническая поддержка</div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>