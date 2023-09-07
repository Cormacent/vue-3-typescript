<template >
    <nav ref="navbar" class="c-navbar py-3 bg-white">
        <div class="container">
            <div class="d-flex align-items-center justify-content-between position-relative">
                <div class="d-none d-sm-block d-md-none">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="menu.11 1">
                            <path id="Vector"
                                d="M32.38 4H15.62C8.34 4 4 8.34 4 15.62V32.36C4 39.66 8.34 44 15.62 44H32.36C39.64 44 43.98 39.66 43.98 32.38V15.62C44 8.34 39.66 4 32.38 4ZM34 34.5H14C13.18 34.5 12.5 33.82 12.5 33C12.5 32.18 13.18 31.5 14 31.5H34C34.82 31.5 35.5 32.18 35.5 33C35.5 33.82 34.82 34.5 34 34.5ZM34 25.5H14C13.18 25.5 12.5 24.82 12.5 24C12.5 23.18 13.18 22.5 14 22.5H34C34.82 22.5 35.5 23.18 35.5 24C35.5 24.82 34.82 25.5 34 25.5ZM34 16.5H14C13.18 16.5 12.5 15.82 12.5 15C12.5 14.18 13.18 13.5 14 13.5H34C34.82 13.5 35.5 14.18 35.5 15C35.5 15.82 34.82 16.5 34 16.5Z"
                                fill="#5D50C6" />
                        </g>
                    </svg>
                </div>
                <div class="position-relative d-flex align-items-center gap-2 logo-header">
                    <img src="@/assets/logo.png" alt="logo" />
                    <span class="font-size-24 font-weight-900">Travlog</span>
                </div>
                <div class="d-md-flex d-none gap-5 ">
                    <a href="#">Home</a>
                    <a class="color-grey" href="#">Discover</a>
                    <a class="color-grey" href="#">Special Deals</a>
                    <a class="color-grey" href="#">Contact</a>
                </div>
                <div class="d-sm-flex d-none gap-2">
                    <button class="color-black">Log In</button>
                    <button class="bg-primary color-light rounded-pill btn-signup">Sign Up</button>
                </div>

                <div class="d-sm-none d-xs-block d-md-none">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="menu.11 1">
                            <path id="Vector"
                                d="M32.38 4H15.62C8.34 4 4 8.34 4 15.62V32.36C4 39.66 8.34 44 15.62 44H32.36C39.64 44 43.98 39.66 43.98 32.38V15.62C44 8.34 39.66 4 32.38 4ZM34 34.5H14C13.18 34.5 12.5 33.82 12.5 33C12.5 32.18 13.18 31.5 14 31.5H34C34.82 31.5 35.5 32.18 35.5 33C35.5 33.82 34.82 34.5 34 34.5ZM34 25.5H14C13.18 25.5 12.5 24.82 12.5 24C12.5 23.18 13.18 22.5 14 22.5H34C34.82 22.5 35.5 23.18 35.5 24C35.5 24.82 34.82 25.5 34 25.5ZM34 16.5H14C13.18 16.5 12.5 15.82 12.5 15C12.5 14.18 13.18 13.5 14 13.5H34C34.82 13.5 35.5 14.18 35.5 15C35.5 15.82 34.82 16.5 34 16.5Z"
                                fill="#5D50C6" />
                        </g>
                    </svg>
                </div>
            </div>
        </div>
    </nav>
</template>
<script lang="ts" src="./CNavbar.component">
</script>
<style lang="scss">
.c-navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;

    a {
        font-size: var(--font-size-14);
        color: var(--color-black);
        font-weight: var(--font-weight-700);

        &.router-link-exact-active {
            color: var(--color-grey);
        }
    }

    button {
        font-size: var(--font-size-14);
        font-weight: var(--font-weight-700);

    }



    @media screen and (min-width: 768px) {
        .logo-header {
            position: relative !important;
            transform: none;
            left: '';
            top: '';
        }
    }

    @media screen and (min-width: 576px) {
        button {
            padding: 16px 32px;

        }
    }

    @media screen and (min-width: 576px) and (max-width:768px) {

        .logo-header {
            position: absolute !important;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }
    }
}
</style>