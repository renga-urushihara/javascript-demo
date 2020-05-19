<template>
  <div id="app">
    <div>
      <h3>"input"</h3>
      <input id="hoge" v-model="text" @input="onInput"/>
      <p>text: {{ this.text }}</p>
      <p>input: {{ this.input }}</p>
      <p>type: {{ this.type }}</p>
      <p>{{ change }}</p>
    </div>
  </div>
</template>

<script>
import autocomplete from "autocompleter";

const inputTypes = {
  UNCONVERTED_STATE: "insertCompositionText",
  CONVERETED_STATE: "insertFromComposition",
  DELETE_UNCONVERTED: "deleteCompositionText",
  DELETE_CONVERTED: "deleteContentBackward",
};

export default {
  name: "App",
  data: function() {
    return {
      text: "",
      input: {},
      type: "",
      change: 0,
    };
  },
  mounted: function() {
    f();
  },
  methods: {
    onInput: function(e) {
      console.log(e);
      this.input = e;
      this.text = e.target.value;
      switch (e.inputType) {
        case inputTypes.UNCONVERTED_STATE: {
          break;
        }
        case inputTypes.CONVERETED_STATE: {
          break;
        }
        case inputTypes.DELETE_UNCONVERTED: {
          break;
        }
        case inputTypes.DELETE_CONVERTED: {
          break;
        }
        default:
      }
      this.type = e.inputType;
    }
  },
  watch: {
    "text": {
      deep: true,
      handler: function() {
        this.change = this.change + 1;
      }
    }
  }
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
