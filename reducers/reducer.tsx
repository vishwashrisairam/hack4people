const initState = {
    user:{},
    isAuth:false,
    loading:false,
    store :[]
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
                loading:action.payload
            }
        case "SET_LOADING":
            return {
                ...state,
                loading:action.payload
            }
        case "SET_STORE":
            return {
                ...state,
                store:action.payload
            }
        case "SET_USER_DETAILS":
            return {
                ...state,
                user:action.payload
            }
        case "UPDATE_POINTS":
            return{
                ...state,
                user:{
                    
                    Points:action.payload
                }
            }
    }
    return state
}