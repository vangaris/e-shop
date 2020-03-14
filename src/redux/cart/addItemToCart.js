export const addItemToCart = (cartItems, CartItemToAdd) => {

    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === CartItemToAdd.id
    )

    if (existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === CartItemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
    }

    return [...cartItems, { ...CartItemToAdd, quantity: 1 }]
}