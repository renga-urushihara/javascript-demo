<template>
  <div id="app">
    <div>
      <h3>"input"</h3>
      <input id="hoge" @input="onInput" />
      <p>type: {{ this.type }}</p>
      <p>count {{ change }}</p>
      <p>datas: {{ datas }}</p>
      f: {{data}}
    </div>
  </div>
</template>

<script>
import autocomplete from "autocompleter";

const inputTypes = {
  UNCONVERTED_STATE: "insertCompositionText",
  CONVERTED_STATE: "insertFromComposition",
  DELETE_UNCONVERTED: "deleteCompositionText",
  DELETE_CONVERTED: "deleteContentBackward",
};

export default {
  name: "App",
  data: function() {
    return {
      type: "",
      change: 0,
      data: "",
      datas: []
    };
  },
  mounted: function() {
    f();
  },
  methods: {
    onInput: function(e) {
      const inputType = e.inputType;
      switch (inputType) {
        case inputTypes.UNCONVERTED_STATE: {
          this.datas.push(e.data);
          break;
        }
        case inputTypes.CONVERTED_STATE: {
          const a = this.datas[-1];
          this.data = a;
          // this.datas.length = 0;
          break;
        }
        case inputTypes.DELETE_UNCONVERTED: {
          // this.datas.pop();
          break;
        }
        case inputTypes.DELETE_CONVERTED: {
          this.datas.pop();
          break;
        }
      }
      this.type = e.inputType;
    },
  },
  watch: {
    text: {
      deep: true,
      handler: function() {
        this.change = this.change + 1;
      },
    },
  },
};

var countries = [
  { label: "United Kingdom", value: "UK" },
  { label: "United States", value: "US" },
];

function f() {
  var input = document.getElementById("hoge");
  const evt = new InputEvent("input", { bubbles: true, cancelable: true });

  autocomplete({
    input: input,
    fetch: function(text, update) {
      text = text.toLowerCase();
      var suggestions = countries.filter((n) =>
        n.label.toLowerCase().startsWith(text)
      );
      update(suggestions);
    },
    onSelect: function(item) {
      input.value = item.label;
      input.dispatchEvent(evt);
      input.blur();
    },
  });
}
</script>

<style scoped>
input {
  font-size: 16px;
  -ms-ime-mode: disabled;
}
</style>
