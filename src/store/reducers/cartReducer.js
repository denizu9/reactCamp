import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";
import { cartItems } from "../initialValues/cartItems";

const initialState = {
    cartItems : cartItems
}

export default function cartReducer(state = initialState, {type, payload}) {

    switch (type) {
        case ADD_TO_CART:
            let product = state.cartItems.find(cartItem => cartItem.product.id === payload.id)

            if (product) {
                product.quantity++;
                return {
                    ...state //spread operator -> referans değiştirmek için, bunu yapmamız gerekiyor, Java'da new'lemek gibi.
                }
            } else {
                return {
                    ...state, 
                    cartItems:[...state.cartItems, {quantity:1, product:payload}] 
                    //...state.cartItems -> array'in içindeki, objeleri ayırdık. Ve payload'u veriyoruz.

                    //spread operator, yukarıdaki initialState arrayinin objelerini ayırıyoruz, sonrasında cartItems'ı yeni bir array
                    // olarak döndürüyoruz.

                    // Array'in içine de koyuyoruz çünkü amaç yeni bir referans oluşturup, yeni bir array döndürmek böylece
                    //render edilmesini sağlamak.
                }
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cartItems:state.cartItems.filter(cartItem => cartItem.product.id !== payload.id)

                //Burada farklı olan id'leri filteliyoruz ve yeni oluşacak listeye almıyoruz.
            }
        default:
            return state;
    }
}