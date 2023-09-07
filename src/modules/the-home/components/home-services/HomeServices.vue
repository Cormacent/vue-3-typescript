<template >
    <section ref="HomeServices" class="home-services position-relative  d-block d-md-flex ">
        <div class="container row text-left mb-4 mb-md-0 mx-0 mx-md-auto">
            <div class="text-break col-12 col-md-4 d-flex flex-column" style="">
                <div class="my-auto  text-center text-md-start">
                    <p class="color-secondary font-weight-700 font-size-24 test-services">SERVICES</p>
                    <p class="color-black font-weight-700 font-size-44 text-services-desc">
                        Our top value categories for you
                    </p>
                </div>
            </div>
        </div>
        <div class="home-service-swiper d-none d-md-block">
            <div class="row">
                <div class="col-12 col-md-4">
                </div>
                <div class="col-12 col-md-8">
                    <swiper-container :slides-per-view="2" :space-between="21" :breakpoints="breakpoints"
                        :showsPagination="false">
                        <swiper-slide class="" v-for="index of 20 " :key="index">
                            <div class="swiper-content ">
                                <img src="@/assets/images/destination.png" alt="destination">
                                <div class="d-flex flex-column gap-4">
                                    <span class="color-bali font-weight-700 font-size-28 w-100">Best Tour Guide</span>
                                    <span class="color-light-font-size-18 font-weight-400">What looked like a small patch of
                                        purple
                                        grass,
                                        above five feet.</span>
                                </div>
                            </div>
                        </swiper-slide>

                    </swiper-container>
                </div>
            </div>
        </div>
        <div class="d-flex d-md-none justify-content-between container gap-4 flex-wrap flex-sm-nowrap">
            <div class="swiper-content p-4" v-for="index of 3" :key="index">
                <img src="@/assets/images/destination.png" alt="destination">
                <div class="d-flex flex-column gap-4">
                    <span class="color-bali font-weight-700 font-size-28 w-100">Best Tour Guide</span>
                    <span class="color-light-font-size-18 font-weight-400">What looked like a small patch of
                        purple
                        grass,
                        above five feet.</span>
                </div>
            </div>
        </div>
    </section>
</template>
<script lang="ts" src="./HomeServices.component.ts">
</script>
<style lang="scss">
.home-services {
    height: 571px;

    p {
        margin-bottom: 0;
    }

    overflow: hidden;

    .text-services {
        font-size: 23px;
        font-style: normal;
        line-height: 120%;
        letter-spacing: 4.6px;
        text-transform: uppercase;
    }

    .text-services-desc {
        font-style: normal;
        font-weight: 700;
        line-height: 120% !important;
    }

    .home-service-swiper {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        width: 100vw;


        .row {
            margin: 0;
        }

        swiper-container {
            height: 571px;

            swiper-slide {
                padding-top: 100px;
                padding-bottom: 100px;
                width: 350px !important;


                &.swiper-slide-active {
                    .swiper-content {
                        box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.10), 0px 41px 89px 0px rgba(0, 0, 0, 0.10);
                        border: none;
                    }
                }

            }
        }
    }

    .swiper-content {
        display: flex;
        align-items: center;
        flex-direction: column;
        align-items: center;
        border-radius: 32px;
        height: 443px;
        width: 350px;
        background: transparent;
        padding: 64px;
        gap: 64px;
        border: 1px solid var(--grey);

    }

    @media screen and (max-width: 767px) {
        .swiper-content {
            width: 100%;
            height: 100%;
            text-align: center;
        }
    }

}
</style>