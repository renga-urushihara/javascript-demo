<template>
  <div id="app">
    <div>
      <h3>"input"</h3>
      <input @input="onInput" />
      <p>{{ this.inputType }}</p>
      <p>{{ this.isComposing }}</p>
      <p>{{ this.data }}</p>
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
      this.inputType = e.inputType;
      this.isComposing = e.isComposing;
      this.data = e.data;
    }
  }
};
</script>
