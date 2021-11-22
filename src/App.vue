<template>
  <router-view />
</template>

<script>
export default {};
</script>

<style lang="scss">
@import '~modern-normalize/modern-normalize.css';
@import '~@/assets/scss/fonts';

body {
  display: flex;
  align-items: stretch;
  min-height: 100vh;
  font-family: 'Urania', sans-serif;

  input,
  button,
  select {
    font-family: 'Urania', sans-serif;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
}

/* stylelint-disable selector-max-id */
#smtp2go-app {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
/* stylelint-enable */

</style>
