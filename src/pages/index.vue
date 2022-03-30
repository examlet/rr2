<script lang="ts" setup>
const submenu_hidden = ref(true);
const changeSubmenu = () => submenu_hidden.value = !submenu_hidden.value;
const scrollIntoView = (el: string) => {
    document.getElementById(el).scrollIntoView()
    submenu_hidden.value = true;
};
</script>

<template>
    <div bg="[#ffffff]" flex flex-col min-h-screen>
        <header bg="[#ffffff]" fixed top-0 left-0 right-0 h-64px z-11>
            <div bg="[#ffffff]" border="b [#e7e8ec]" w-full h-full z-100 absolute>
                <div flex flex-row justify-between items-center h-full | w="full xl:1024px" p="x-20px lg:0" relative mx-auto>
                    <div flex w="full xl:200px">
                        <a cursor-pointer @click="scrollIntoView('start')">
                            <img src="/img/logo.png" alt="Quick Sales" width="150px" height="30px" />
                        </a>
                    </div>
                    <div hidden xl:flex justify-between w-full items-center>
                        <div flex flex-row items-center>
                            <a
                                cursor-pointer @click="scrollIntoView('features')"
                                text="[#6d7885] hover:[#222222]" ml-32px transition-colors duration-300
                            >Возможности</a>
                            <a
                                cursor-pointer @click="scrollIntoView('price')"
                                text="[#6d7885] hover:[#222222]" ml-32px transition-colors duration-300
                            >Стоимость</a>
                            <a
                                cursor-pointer @click="scrollIntoView('faq')"
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
                    <div flex xl:hidden items-center @click="changeSubmenu">
                        <div relative inline-block w-20px h-24px space-y-1 h-full>
                            <div bg="[#222222]" top="-6px" w-20px h-2px rounded-4px />
                            <div bg="[#222222]" w-20px h-2px rounded-4px />
                            <div bg="[#222222]" bottom="-6px" w-20px h-2px rounded-4px />
                        </div>
                    </div>
                </div>
            </div>
            <div 
                class="absolute block xl:hidden bg-[#fff] rounded top-64px shadow-lg w-full transition duration-300 -z-1" 
                :class="[submenu_hidden ? '-translate-y-120%' : '-translate-y-0']"
            >
                <div flex flex-col py-30px text-18px | w="full xl:1024px" p="x-20px lg:0" relative mx-auto>
                    <div h-28px>
                        <a
                            cursor-pointer @click="scrollIntoView('features')"
                            text="[#222222]" flex items-center justify-start
                        >
                            <div i-carbon-star-review />
                            <span ml-10px>Возможности для каждого</span>
                        </a>
                    </div>
                    <div h-28px mt-20px>
                        <a
                            cursor-pointer @click="scrollIntoView('price')"
                            text="[#222222]" flex items-center justify-start
                        >
                            <div i-carbon-calculator />
                            <span ml-10px>Расчитать стоимость</span>
                        </a>
                    </div>
                    <div h-28px mt-20px>
                        <a
                            cursor-pointer @click="scrollIntoView('faq')"
                            text="[#222222]" flex items-center justify-start
                        >
                            <div i-carbon-query />
                            <span ml-10px>Ответы на вопросы</span>
                        </a>
                    </div>
                    <div h-28px mt-20px>
                        <button
                        border="1 solid gray-500 opacity-40" text="[#222222]" rounded-md w-full h-36px font-medium items-center
                        >
                            <div i-carbon-cloud-logging mb-3px w-40px />
                            <span>Перейти в кабинет</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>

        <main flex="grow shrink-0" basis-auto>
            <section id="start" pt-164px>
                <div w="full xl:1024px" p="x-20px lg:0" relative mx-auto>
                    <h1 fw-500 leading="120%" text="[#222222] 30px xl:64px xl:center">
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
                    </h1>
                    <h2 text="[#222222] 14px xl:36px xl:center" mt-20px fw-500 leading="110%">
                        от запуска рекламы до сквозной аналитики
                    </h2>
                    <div text="14px xl:20px" mt-100px>
                        После перехода начислим 500₽ на ваш счет,
                        <br />чтобы вы смогли протестировать сервис
                    </div>
                    <div mt-20px>
                        <button
                            transition-colors duration-150 fw-500 h-46px rounded-sm w="full xl:250px" text="16px [#222222] hover:[#ffffff] focus:[#ffffff] active:[#ffffff]" bg="[#80eec0] hover:[#00dc82] focus:[#00dc82] active:[#00dc82]"
                        >Перейти в кабинет</button>
                    </div>
                    <div cursor-pointer text="14px xl:20px" mt-90px>
                        <a onclick="document.getElementById('about').scrollIntoView();">
                            <div i-carbon-sort-descending w-40px  />
                            <span>Подробнее о сервисе</span>
                        </a>
                    </div>
                </div>
            </section>

            <section id="about" pt="93px">
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

            <section id="features" pt="84px xl:94px" h-400px>
                <div w="full xl:1024px" p="x-20px lg:0" relative mx-auto>
                    <span text="24px [#222222]" fw500>
                        Возможности
                    </span>
                </div>
            </section>

            <section id="price" pt="84px xl:94px" h-400px>
                <div w="full xl:1024px" p="x-20px lg:0" relative mx-auto>
                    <span text="24px [#222222]" fw500>
                        Стоимость
                    </span>
                </div>
            </section>

            <section id="faq" pt="84px xl:94px" h-400px>
                <div w="full xl:1024px" p="x-20px lg:0" relative mx-auto>
                    <span text="24px [#222222]" fw500>
                        FAQ
                    </span>
                </div>
            </section>

            <section id="action" pt="84px xl:94px">
                <div w="full xl:1024px" p="x-20px lg:0" relative mx-auto>
                    <div grid grid-cols="1 xl:[1fr_1fr]" gap-20px>
                        <div flex flex-culumn items-start>
                            <h2 text="[#222222] 24px xl:36px" fw-500 my-20px>
                                <div mb-20px>
                                    Подключите свое первое<br />
                                    сообщество к нашему<br />
                                    сервису уже сейчас
                                </div>
                                <button
                                    transition-colors duration-150 fw-500 h-46px rounded-sm w="full xl:250px" text="16px [#222222] hover:[#ffffff] focus:[#ffffff] active:[#ffffff]" bg="[#80eec0] hover:[#00dc82] focus:[#00dc82] active:[#00dc82]"
                                >Перейти в кабинет</button>
                            </h2>
                        </div>
                        <div relative flex justify-center>
                            <img src="/img/action.svg" alt="Действие" width="auto" height="auto">
                        </div>
                    </div>
                </div>
            </section>
        </main>

        <footer pt="84px xl:94px">
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