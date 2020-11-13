<template>
 <div class="block_page">
   <!-- first modal -->
   <button class="btn btnPrimary" @click="modalFirst = !modalFirst">Show first modal</button>
   <modals
       title="First modal"
       v-show="modalFirst"
       @close="modalFirst = false">
     <!-- body -->
     <div slot="body">
       <p> Text Text Text Text Text Text Text </p>
       <button class="btn btnPrimary" @click="modalFirst = !modalFirst">Well Done!</button>
     </div>
   </modals>
 </div>
</template>
<script>
import modals from '@/components/UI/Modal.vue'

export default {
components: {modals},
  data() {
    return {
      modalFirst: false,
    }
  },
}
</script>
<style lang="scss">
.block_page {
  display: flex;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>