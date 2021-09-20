import Vue from "vue";

new Vue({
    el: '#app',
    data: {
        brand: 'Vue brand',
        product: 'Socks',
        selectedVariant: 0,
        Link: '/Socks',
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
        sizes: ["Large", "Medium", "Small"],
        variants: [
            {
                variantId: 2234,
                variantColor: "green",
                variantImage: require('./images/socks-green.png'),
                variantSale: true,
                variantQuantity: 12,
            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantImage: require('./images/socks-blue.png'),
                variantSale: false,
                variantQuantity: 0,
            },
            {
                variantId: 2236,
                variantColor: "red",
                variantImage: require('./images/socks-blue.png'),
                variantSale: false,
                variantQuantity: 4,
            }
        ],
        cart: 0,
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateProduct(index) {
            this.selectedVariant = index
        }
    },
    computed: {
        title() {
            return this.brand + ' - ' + this.product
        },
        Image() {
            return this.variants[this.selectedVariant].variantImage
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity
        },
        onSale() {
            return this.variants[this.selectedVariant].variantSale
        }
    }
})