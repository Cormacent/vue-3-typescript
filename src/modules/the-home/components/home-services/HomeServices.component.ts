import { Options, Vue } from "vue-class-component";
import { ref } from 'vue'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import { PaginationEvents } from "swiper/types/modules/pagination";
import { AutoplayEvents } from "swiper/types/modules/autoplay";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

@Options({
})
export default class HomeServices extends Vue {
    slides: any
   

    breakpoints: any = {
        767: {
            slidesPerView: 3,
        },
    }




}