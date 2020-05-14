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
  </div>
</template>

<script>
export default {
  name: "App",
  data: function() {
    return {
      keyDown: [],
      keyPress: [],
      keyUp: []
    };
  },
  methods: {
    onKeyDown: function(e) {
      console.log(e);
      if (e.key === "Backspace") {
        this.keyDown.pop();
        return;
      }
      this.keyDown.push(e.code);
    },
    onKeyPress: function(e) {
      console.log(e);
      if (e.key === "Backspace") {
        this.keyPress.pop();
        return;
      }
      this.keyPress.push(e.code);
    },
    onKeyUp: function(e) {
      console.log(e);
      if (e.key === "Backspace") {
        this.keyUp.pop();
        return;
      }
      this.keyUp.push(e.code);
    }
  }
};
</script>
