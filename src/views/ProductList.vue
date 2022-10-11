<template>
  <Loader v-if="isLoading" />
  <Card v-for="(item, index) in products.data" :key="index" :data="item" />
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
import Card from "@/components/Card.vue";
import Loader from "@/components/Loader.vue";

export default {
  name: "ProductList",
  components: {
    Card,
    Loader,
  },
  created() {
    this.fetchProducts();
  },
  computed: {
    ...mapState({
      products: (store) => store.products.products,
      loading: (store) => store.products.isLoading,
      isLoading: (store) => store.products.isLoading,
    }),
  },
  methods: {
    ...mapActions({
      fetchProducts: "products/fetchProducts",
    }),
  },
};
</script>