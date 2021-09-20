<template>
    <div class="grid py-10">
        <h1>products</h1>
        <ProductCard />
    </div>
</template>

<script>
import ProductCard from "../components/ProductCard";
export default ({
    name: 'Products',
    components: {
        ProductCard,
    },
})
</script>