<template>
    <div class="card lg:card-side bordered">
        <figure>
            <img v-bind:src="Image" class="h-[34rem] object-cover">
        </figure>
        <div class="card-body">
            <h2 class="card-title text-4xl mb-5">{{ title }}</h2>
            <div class="flex flex-col h-full">
                <div class="flex flex-col gap-y-6 flex-1">
                    <div>
                        <p v-if="inStock > 10" class="badge badge-success">In stock</p>
                        <p v-else-if="inStock <= 10 && inStock > 0" class="badge badge-warning">
                            Almost out!</p>
                        <p v-else class="badge badge-error" :class="{ 'line-through': inStock <= 0 }">Out of stock</p>
                    </div>
                    <div class="flex gap-x-4">
                        <div v-for="(variant, index) in variants" :key="variant.variantId">
                            <div class="h-6 w-6 rounded-full border border-white" :style="{ backgroundColor: variant.variantColor }" @mouseover="updateProduct(index)"></div>
                        </div>
                    </div>
                    <ul class="list-inside">
                        <li v-for="size in sizes" :key="size">{{ size }}</li>
                    </ul>
                    <ul>
                        <li v-for="detail in details" :key="detail">{{ detail }}</li>
                    </ul>
                </div>
                <p v-if="onSale" class="alert alert-success">On sale!</p>
                <div class="card-actions">
                    <a>
                        <button v-on:click="addToCart" :disabled="inStock <= 0"
                            class="btn btn-primary">Add to Cart</button>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default ({
    name: 'ProductCard',
    props: {
        brand: String,
        product: String,
        selectedVariant: Number,
        Link: String,
        details: Array,
        sizes: Array,
        variants: Object,
        // variants: [
        //     {
        //         variantId: 2234,
        //         variantColor: "green",
        //         variantImage: require('../images/socks-green.png'),
        //         variantSale: true,
        //         variantQuantity: 12,
        //     },
        //     {
        //         variantId: 2235,
        //         variantColor: "blue",
        //         variantImage: require('../images/socks-blue.png'),
        //         variantSale: false,
        //         variantQuantity: 0,
        //     },
        //     {
        //         variantId: 2236,
        //         variantColor: "red",
        //         variantImage: require('../images/socks-blue.png'),
        //         variantSale: false,
        //         variantQuantity: 4,
        //     }
        // ],
        cart: Number,
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
</script>