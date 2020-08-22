const initState = {
    user:{},
    isAuth:false,
    loading:false,
    store :[
        {
            itemId : '123',
            itemName:'Cool T-Shirt',
            points:500,
            imageUrl:'https://img.hollisterco.com/is/image/anf/KIC_323-2220-2707-228_prod1?$product-large-hol$',
            description:'Some random description'
        },
        {
            itemId : '124',
            itemName:'$50 Amazon gift card',
            points:750,
            imageUrl:'https://dundle.com/resources/images/products/340w/amazon-340w.png',
            description:'This is random as well'
        },
        {
            itemId : '125',
            itemName:'3 months Spotify subscription',
            points:2500,
            imageUrl:'https://www.hl.co.uk/__data/assets/image/0003/14520486/Spotify-294x215.jpg',
            description:'Random description'
        }
    ]
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
    }
    return state
}