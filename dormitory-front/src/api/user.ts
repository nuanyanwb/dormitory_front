import request from "../plugins/request";
import {getCurrentUserState, setCurrentUserState} from "../states/user";
import {showNotify} from "vant/es";

export const getCurrentUser = async () => {
    // const currentUser = getCurrentUserState();
    // if (currentUser){
    //   return currentUser
    // }
    const res = await request.get('/user/current');
    if ('200' !== res.code) {
        return null;
    } else {
        setCurrentUserState(res.data);
        return res.data;
    }
}