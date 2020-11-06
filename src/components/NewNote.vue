<template>
  <div class="new-note">
    <label for="title-input">Title</label>
    <input v-model="note.title" type="text" id="title-input">
    <label for="important-input"></label>
    <select name="important" id="important-input" v-model="note.imp" @change="change">
      <option value="0" selected>Неважный</option>
      <option value="1">Обычный</option>
      <option value="2">Важный</option>
    </select>
    <label for="descr-input">Description</label>
    <textarea v-model="note.descr" id="descr-input"></textarea>
    <button class="btn btnPrimary" @click="addNote">New Note</button>
  </div>
</template>
<script>
export default {
  props: {
    note: {
      type: Object,
      required: true
    }
  },
  methods: {
    addNote() {
      this.$emit('addNote', this.note)
    },
    change(e) {
      console.log(e.target.value)
    }
  }
}
</script>
<style lang="scss" scoped>
.new-note {
  text-align: center;
}
.btn {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>