<template>
  <div class="wrapper">
    <div class="wrapper-content">

      <section>
        <div class="container">
          <first-modal></first-modal>
          <second-modal></second-modal>
          <third-modal></third-modal>
        </div>
      </section>


    </div>
  </div>
</template>

<script>
import firstModal from '@/pages/FirstModal.vue'
import secondModal from '@/pages/SecondModal.vue'
import thirdModal from '@/pages/ThirdModal.vue'

export default {
  components: {thirdModal, firstModal, secondModal},
}
</script>
