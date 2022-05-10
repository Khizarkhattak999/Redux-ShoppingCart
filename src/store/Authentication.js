import { useEffect } from "react";

const InitialState = {
    isLoggedin: false,
}

const AuthReducer = (state=InitialState, action) => {

    // useEffect(() => {
        // const storeduserinformation = localStorage.getItem('isLoggedIn')
        // if(storeduserinformation === '1'){
        //     state.isLoggedin = true;
        
        // }
    // }, [state.isLoggedin])

    if (action.type == 'Loginhandler') {

        // localStorage.setItem('isLoggedIn', '1');
        return {
        isLoggedin: true,
        }
    };

    if(action.type == 'Logouthandler') {
        // localStorage.removeItem('isLoggedIn')
        return {
        isLoggedin : false
        }
    };

    return state
}

export default AuthReducer