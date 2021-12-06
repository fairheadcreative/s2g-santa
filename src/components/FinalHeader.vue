<template>
  <header :class="$style.header">
    <img
      :src="sticker.url"
      :width="sticker.width"
      :height="sticker.height"
      :class="$style.sticker"
      alt="Sticker"
    >
    <h1 :class="$style.heading">
      <span class="srOnly">Email sent!</span>
      <img
        src="@/assets/images/spinner-2.png"
        alt="Radiance"
        width="600"
        height="600"
        :class="$style.radiance"
      >
      <img
        src="@/assets/images/heading-2.png"
        alt="Logo"
        width="598"
        height="244"
        :class="$style.image"
      >
    </h1>
    <p :class="$style.lead">
      Ho ho ho! Your email is on its way to Santa.
    </p>
  </header>
</template>

<script>
export default {
  props: {
    sticker: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style lang="scss" module>
.header {
  margin-top: 50px;
  text-align: center;
}

.sticker {
  position: relative;
  z-index: 1;
}

.heading {
  position: relative;
  margin: 0;
  margin-top: -40px;
}

.radiance {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center;
  animation: rotate-radiance 5s linear infinite;

  @media screen and (max-width: 909px) {
    width: 450px;
    height: 450px;
  }

  @media screen and (max-width: 600px) {
    width: 350px;
    height: 350px;
  }
}

.image {
  position: relative;
  max-width: 100%;
  height: auto;
}

.lead {
  position: relative;
  max-width: 550px;
  margin: -20px auto 40px;
  font-size: 22px;
  font-weight: 600;
  text-align: center;
  text-shadow: 0 1px 4px #02030352;

  @media screen and (max-width: 909px) {
    padding: 0 10px;
    margin-top: -30px;
    font-size: 18px;
  }
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
