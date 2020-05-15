<template>
  <div id="app">
    <div>
      <h3>"input"</h3>
      <input @input="onInput" />
      <p>text: {{ this.text }}</p>
      <p>trackedText: {{ this.trackedText }}</p>
      <p>{{ this.bufferedText }} </p>
      <p>d {{ this.debug }} </p>
      <p>a {{ this.a }} </p>
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

// var wait = function(sec) {
//   return function() {
//     return new Promise(function(resolve/*, reject*/) {
//       setTimeout(resolve, sec*1000)
//     });
//   }
// };

export default {
  name: "App",
  data: function() {
    return {
      text: "",
      bufferedText: [],
      trackedText: "",
      debug: [],
      a: ""
    };
  },
  methods: {
    
    onInput: function(e) {
      this.debug.push(e.inputType);
      try {
        switch (e.inputType) {
          case inputTypes.UNCONVERTED_STATE: {
            this.a = e.composed + " " + e.data; 
            this.text = e.data;
            break;
          }
          case inputTypes.CONVERETED_STATE: {
            this.trackedText = this.bufferedText.pop();
            break;
          }
          case inputTypes.DELETE_UNCONVERTED: {
            this.bufferedText.push(this.text);
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