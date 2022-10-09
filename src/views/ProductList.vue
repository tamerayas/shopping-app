<template>
  <div>
    <Card v-for="(item, index) in products.data" :key="index" :data="item" />
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import { mapActions, mapMutations, mapState } from "vuex";
export default {
  name: "ProductList",
  components: {
    Card,
  },
  created() {
    this.setIsLoading(true);
    this.fetchProducts();
  },
  computed: {
    ...mapState({
      products: (store) => store.productStore.products,
      loading: (store) => store.productStore.isLoading,
    }),
  },
  methods: {
    ...mapActions({
      fetchProducts: "productStore/fetchProducts",
    }),
    ...mapMutations({
      setIsLoading: "productStore/setIsLoading",
    }),
  },
};
</script>

<style lang="scss">
</style>