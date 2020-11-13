<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <img :src="product.img" :alt="product.title">
        <h1>{{product.title}}</h1>
        <p>{{product.description}}</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: null
    }
  },
  created() {
    // console.log({route: this.$route, id: this.$route.params.id})
    let id = this.$route.params.id
    this.product = this.$store.getters.getProduct(id)
  }
}
</script>