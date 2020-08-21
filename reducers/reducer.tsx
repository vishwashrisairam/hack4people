const initState = {
    user:{},
    isAuth:false,
    loading:true
}

export const reducer = (state=initState,action)=>{
    switch(action.type){
        case "LOGIN":
            return {
                ...state,
                isAuth:true,
            }
        case "LOGOUT":
            return {
                ...state,
                isAuth:false,
            }
        case "SET_LOADING":
            return {
                ...state,
                isAuth:action.payload
            }
    }
    return state
}