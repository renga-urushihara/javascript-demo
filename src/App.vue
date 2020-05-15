<template>
  <div id="app">
    <div>
      <h3>"input"</h3>
      <input @input="onInput" />
      <p>text: {{ this.text }}</p>
      <p>trackedText: {{ this.trackedText }}</p>
    </div>
  </div>
</template>

<script>
const inputTypes = {
  UNCONVERTED_STATE: "insertCompositionText",
  CONVERETED_STATE: "insertFromComposition",
  DELETE_UNCONVERTED: "deleteCompositionText",
  DELETE_CONVERTED: "deleteContentBackward"
}

export default {
  name: "App",
  data: function() {
    return {
      text: [],
      trackedText: []
    };
  },
  methods: {
    onInput: function(e) {
      switch(e.inputType) {
        case inputTypes.UNCONVERTED_STATE: {
          this.text.push(e.data);
          break;
        }
        case inputTypes.CONVERETED_STATE: {
          this.trackedText = this.text.join("");
          break;
        }
        case inputTypes.DELETE_UNCONVERTED: {
          this.text.pop();
          break;
        }
        case inputTypes.DELETE_CONVERTED: {
          this.text.pop();
          break
        }
      }
    }
  }
};
</script>

<style scoped>
  input {
    font-size: 16px;
  }
</style>