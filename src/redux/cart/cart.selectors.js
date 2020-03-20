import { createSelector } from 'reselect'

//input 
const selectCart = state => state.cart  // get all reducer and return a slice of it  'cart'

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);


export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce((accumulatorQuantity, cartItem) => (
            accumulatorQuantity + cartItem.quantity
        ), 0)
)


export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce((accumulatorQuantity, cartItem) => (
            accumulatorQuantity + cartItem.quantity * cartItem.price
        ), 0)
)
