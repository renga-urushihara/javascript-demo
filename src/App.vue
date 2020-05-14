<template>
  <div id="app">
    <div>
      <h3>"keyDown"</h3>
      <input @keydown="onKeyDown" />
      <p>{{ this.keyDown }}</p>
    </div>
    <div>
      <h3>"keyPress"</h3>
      <input @keypress="onKeyPress" />
      <p>{{ this.keyPress }}</p>
    </div>
    <div>
      <h3>"keyUp"</h3>
      <input @keyup="onKeyUp" />
      <p>{{ this.keyUp }}</p>
    </div>
    <div>
      <h3>"input"</h3>
      <input @input="onInput" />
      <p>{{ this.input }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function() {
    return {
      keyDown: [],
      keyPress: [],
      keyUp: [],
      input: []
    };
  },
  methods: {
    onKeyDown: function(e) {
      console.log(e);
      if (e.key === "Backspace") {
        this.keyDown.pop();
        return;
      }
      this.keyDown.push(e.keyCode);
    },
    onKeyPress: function(e) {
      console.log(e);
      if (e.key === "Backspace") {
        this.keyPress.pop();
        return;
      }
      this.keyPress.push(e.keyCode);
    },
    onKeyUp: function(e) {
      console.log(e);
      if (e.key === "Backspace") {
        this.keyUp.pop();
        return;
      }
      this.keyUp.push(e.keyCode);
    },
    onInput: function(e) {
      console.log(e);
      if (e.key === "Backspace") {
        this.input.pop();
        return;
      }
      this.input.push(e.data);
    }
  }
};
</script>
