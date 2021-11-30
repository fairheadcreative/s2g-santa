<template>
  <button
    type="button"
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

  &:focus {
    outline: none;
  }

  &:hover {

    .background {
      background-position-y: 68px;
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
}
</style>
