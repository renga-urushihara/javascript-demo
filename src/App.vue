<template>
  <div id="app">
    <div>
      <h3>"input"</h3>
      <input @input="onInput" />
      <p>inputType: {{ this.inputType }}</p>
      <p>isComposing: {{ this.isComposing }}</p>
      <p>data: {{ this.data }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function() {
    return {
      inputType:"",
      isComposing: "",
      data: "",
    };
  },
  methods: {
    onInput: function(e) {
      this.inputType = e.inputType ? e.inputType : "notype";
      this.isComposing = e.isComposing;
      this.data = e.data;
    }
  }
};
</script>

<style scoped>
  input {
    font-size: 16px;
  }
</style>