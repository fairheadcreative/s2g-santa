<template>
  <header :class="$style.header">
    <h1 :class="$style.heading">
      <span class="srOnly">Email Santa!</span>
      <img
        src="@/assets/images/spinner-1.png"
        alt="Radiance"
        width="700"
        height="700"
        :class="$style.radiance"
      >
      <img
        src="@/assets/images/heading-1.png"
        alt="Logo"
        width="907"
        height="514"
        :class="$style.image"
      >
    </h1>
    <p :class="$style.lead">
      Just write your letter below, decorate it with a magic sticker, and send it straight to the North Pole!
    </p>
  </header>
</template>

<script>
export default {
};
</script>

<style lang="scss" module>
.header {
  margin-top: 20px;
}

.heading {
  position: relative;
  margin: 0;
}

.radiance {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center;
  animation: rotate-radiance 5s linear infinite;
}

.image {
  position: relative;
}

.lead {
  max-width: 550px;
  margin: -50px auto 40px;
  font-size: 22px;
  font-weight: 600;
  text-align: center;
  text-shadow: 0 1px 4px #02030352;
}

@keyframes rotate-radiance {

  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
</style>
