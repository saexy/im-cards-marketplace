<template>
  <router-view />
</template>

<style lang="scss">
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css");
@import "vue-select/dist/vue-select.css";

:root {
  --primary: #ff7235;
  --primary-extra: #db632f;
  --secondary: #244932;
  --secondary-extra: #1d3b29;
  --light: rgb(245, 245, 245);
  --dark: rgb(27, 27, 27);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background-color: var(--light);
  color: var(--dark);
}

button,
textarea,
input {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  outline: none;
  color: var(--dark);

  &::placeholder {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
}

a {
  text-decoration: none;
}
</style>
