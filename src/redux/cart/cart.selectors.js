import { createSelector } from 'reselect'

//input 
const selectCart = state => state.cart  // get all reducer and return a slice of it  'cart'

//next selector prop of state.cart
/**
  * CrateSelector
  *
  * @param {array} inputSelectors 
  * @param {function} selector return the value of this selector
  *     @param {any} outputOfSlectors
  *     @return {any} property 
  */
export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce((accumulatorQuantity, cartItem) => (
            accumulatorQuantity + cartItem.quantity
        ), 0)
)
