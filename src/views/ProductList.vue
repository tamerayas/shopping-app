<template>
  <Loader v-if="isLoading" />
  <div class="card-wrapper">
    <Card v-for="(item, index) in products" :key="index" :data="item" />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
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

<style lang="scss" scoped>
.card-wrapper {
  display: flex;
  flex-wrap: wrap;
  max-width: 700px;
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 20px;
  justify-content: center;
}

@media screen and (min-width: 768px) {
  .card-wrapper ::v-deep(.card:nth-child(2n)) {
    border-left: 0;
  }

  .card-wrapper ::v-deep(.card:nth-child(n + 3)) {
    border-top: 0;
  }
}
</style>