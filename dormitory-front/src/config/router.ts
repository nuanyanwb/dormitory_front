import Index from "../pages/Index.vue";
import Dormitory from "../pages/Dormitory.vue";
import User from "../pages/User.vue";
import Persion from "../pages/persion/Persion.vue";
import PersionInfo from "../pages/persion/PersionInfo.vue";
import SearchPage from "../pages/SearchPage.vue";
import UserEditPage from "../pages/UserEditPage.vue";
import SearchResultPage from "../pages/SearchResultPage.vue";
import Login from "../pages/Login.vue"
import AccountSafe from "../pages/safe/AccountSafe.vue";
import Notice from "../pages/notice/Notice.vue";
import MyDorm from "../pages/persion/MyDorm.vue";
import MyTags from "../pages/persion/MyTags.vue";
import Expectation from "../pages/expectation/Expectation.vue";

const routes = [

    { path: '/login', component: Login },
    { path: '/', component: Index },
    { path: '/dormitory', component: Dormitory },
    { path: '/user', component: User },
    { path: '/search', component: SearchPage },
    { path: '/user/edit', component: UserEditPage },
    { path: '/user/list', component: SearchResultPage },
    { path: '/persion',component: Persion },
    { path: '/persionInfo',component: PersionInfo },
    { path: '/accountSafe',component: AccountSafe },
    { path: '/notice',component: Notice },
    { path: '/myDorm',component: MyDorm },
    { path: '/myTags',component: MyTags },
    { path: '/expectation',component: Expectation },


]


export default routes