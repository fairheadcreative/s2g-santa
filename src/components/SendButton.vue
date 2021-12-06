<template>
  <button
    type="submit"
    :class="$style.button"
  >
    <span :class="$style.background" />
    <span class="srOnly">Send</span>
  </button>
</template>

<script>
export default {
};
</script>

<style lang="scss" module>
.button {
  @include reset;
  position: relative;
  display: inline-block;
  width: 120px;
  height: 50px;
  cursor: pointer;
  border-radius: 4px;

  @media screen and (max-width: 909px) {
    width: 84px;
    height: 35px;
  }

  &:focus {
    outline: none;
  }

  &:hover {

    .background {
      background-position-y: 68px;

      @media screen and (max-width: 909px) {
        background-position-y: 47.6px;
      }
    }
  }

  &:active {
    transform: translateY(3px);
  }
}

.background {
  position: absolute;
  top: -3px;
  left: -11px;
  width: 143px;
  height: 68px;
  pointer-events: none;
  background-image: url('~@/assets/images/send-button.png');
  background-size: 143px 136px;

  @media screen and (max-width: 909px) {
    top: -2px;
    left: -8px;
    width: 100px;
    height: 47.6px;
    background-size: 100px 95.2px;
  }
}
</style>
