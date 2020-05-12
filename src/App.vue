<template>
  <div id="app">
    <input id="email" />
  </div>
</template>

<script>
import autocomplete from "autocompleter";

// const emailRegexp = /$/g;

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
        input.value = input.value + item.label;
      }
    });
  }
};
</script>
