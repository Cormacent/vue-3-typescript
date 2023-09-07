import { Options, Vue } from "vue-class-component";
import HomeBanner from "./components/home-banner/HomeBanner.vue";
import HomeServices from "./components/home-services/HomeServices.vue";
@Options({
    components: {
        HomeBanner,
        HomeServices
    }
})
export default class TheHome extends Vue {

}