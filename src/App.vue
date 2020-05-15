<template>
  <div id="app">
    <div>
      <h3>"input"</h3>
      <input @input="onInput" />
      <p>text: {{ this.text }}</p>
      <p>trackedText: {{ this.trackedText }}</p>
      <p>{{ this.debug }} </p>
    </div>
  </div>
</template>

<script>
const inputTypes = {
  UNCONVERTED_STATE: "insertCompositionText",
  CONVERETED_STATE: "insertFromComposition",
  DELETE_UNCONVERTED: "deleteCompositionText",
  DELETE_CONVERTED: "deleteContentBackward"
};

var wait = function(sec) {
  return function() {
    return new Promise(function(resolve/*, reject*/) {
      setTimeout(resolve, sec*1000)
    });
  }
};

export default {
  name: "App",
  data: function() {
    return {
      text: "",
      trackedText: "",
      debug: {}
    };
  },
  methods: {
    onInput: function(e) {
      try {
        switch (e.inputType) {
          case inputTypes.UNCONVERTED_STATE: {
            this.debug = e.data + " " + e.inputType + this.text;
            wait(1000);
            this.text = e.data;
            break;
          }
          case inputTypes.CONVERETED_STATE: {
            this.debug = e.data + " " + e.inputType + " " + this.text;
            this.trackedText = this.text;
            break;
          }
          case inputTypes.DELETE_UNCONVERTED: {
            this.text = e.data;
            break;
          }
          case inputTypes.DELETE_CONVERTED: {
            this.text = e.data;
            break;
          }
          default:
            this.text = e.inputType;
        }
      } catch {
        this.text = "error";
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