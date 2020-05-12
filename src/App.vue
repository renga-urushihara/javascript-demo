<template>
  <div id="app">
    <input id="email" />
  </div>
</template>

<script>
import autocomplete from "autocompleter";

export default {
  name: "App",
  mounted: function() {
    var countries = [
      { label: "gmail.com", value: "" },
      { label: "ezweb.ne.jp", value: "" }
    ];

    var input = document.getElementById("email");

    autocomplete({
      input: input,
      fetch: function(text, update) {
        text = text.toLowerCase();
        const atMarkIdx = text.indexOf('@');
        if (atMarkIdx == -1) {
          return;
        }
        const domain = text.slice(atMarkIdx + 1);
        var suggestions = countries.filter(n =>
          n.label.toLowerCase().startsWith(domain)
        );
        update(suggestions);
      },
      onSelect: function(item) {
        const atMarkIdx = input.value.indexOf('@');
        input.value = input.value.slice(0, atMarkIdx + 1) + item.label;
      }
    });
  }
};
</script>
