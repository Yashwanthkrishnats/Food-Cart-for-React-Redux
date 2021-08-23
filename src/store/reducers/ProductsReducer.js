const initState = {
    products: [
        {id: 1, name: 'Milk', image: '11.jpg', price: 40, discount: 0, discountPrice: 40-0/100*40 , quantity: 3},
        {id: 2, name: 'Bread', image: '22.jpg', price: 1.10, discount: 5, discountPrice: 1.10  - 5 / 100 * 1.10, quantity: 1},
        {id: 3, name: 'Cheese', image: '33.jpg', price: 30, discount: 25, discountPrice: 30  - 5 / 100 * 150, quantity: 1},
        {id: 4, name: 'Soap', image: '44.jpg', price: 60, discount: 4, discountPrice: 60  - 4 / 100 * 60, quantity: 1},
        {id: 5, name: 'Butter', image: '55.jpg', price: 25, discount: 0, discountPrice: 25  - 0 / 100 * 25, quantity: 1},

    ],
    product: {}
}
const ProductsReducer = (state = initState, action) => {
    switch(action.type){
        case "PRODUCT": 
        return {...state, product: state.products.find(product => product.id === parseInt(action.id))}
        default: 
        return state;
    }
}
export default ProductsReducer;