<template>
  <div>
    <div
      v-if="modelValue"
      :class="$style.selector"
    >
      <transition
        :enter-from-class="$style.stickerEnterFrom"
        :enter-active-class="$style.stickerEnterActive"
        :enter-to-class="$style.stickerEnterTo"
        :leave-from-class="$style.stickerLeaveFrom"
        :leave-active-class="$style.stickerLeaveActive"
        :leave-to-class="$style.stickerLeaveTo"
      >
        <button
          v-if="modelValue.url !== stickers[1].url"
          :class="$style.sticker"
          :style="{
            width: `${stickers[1].width * 2 / 538 * 100}%`,
            top: '30%',
            left: '5%',
          }"
          @click="selectSticker(stickers[1])"
        >
          <span class="srOnly">Sticker 1</span>
          <span
            :class="$style.stickerImage"
            :style="{
              backgroundImage: `url(${stickers[1].url})`,
              paddingTop: `${stickers[1].height / stickers[1].width * 100}%`,
            }"
          />
        </button>
      </transition>
      <transition
        :enter-from-class="$style.stickerEnterFrom"
        :enter-active-class="$style.stickerEnterActive"
        :enter-to-class="$style.stickerEnterTo"
        :leave-from-class="$style.stickerLeaveFrom"
        :leave-active-class="$style.stickerLeaveActive"
        :leave-to-class="$style.stickerLeaveTo"
      >
        <button
          v-if="modelValue.url !== stickers[2].url"
          :class="$style.sticker"
          :style="{
            width: `${stickers[2].width * 2 / 538 * 100}%`,
            top: '60%',
            left: '55%',
          }"
          @click="selectSticker(stickers[2])"
        >
          <span class="srOnly">Sticker 2</span>
          <span
            :class="$style.stickerImage"
            :style="{
              backgroundImage: `url(${stickers[2].url})`,
              paddingTop: `${stickers[2].height / stickers[2].width * 100}%`,
            }"
          />
        </button>
      </transition>
      <transition
        :enter-from-class="$style.stickerEnterFrom"
        :enter-active-class="$style.stickerEnterActive"
        :enter-to-class="$style.stickerEnterTo"
        :leave-from-class="$style.stickerLeaveFrom"
        :leave-active-class="$style.stickerLeaveActive"
        :leave-to-class="$style.stickerLeaveTo"
      >
        <button
          v-if="modelValue.url !== stickers[3].url"
          :class="$style.sticker"
          :style="{
            width: `${stickers[3].width * 2 / 538 * 100}%`,
            top: '60%',
            left: '-10%',
          }"
          @click="selectSticker(stickers[3])"
        >
          <span class="srOnly">Sticker 3</span>
          <span
            :class="$style.stickerImage"
            :style="{
              backgroundImage: `url(${stickers[3].url})`,
              paddingTop: `${stickers[3].height / stickers[3].width * 100}%`,
            }"
          />
        </button>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Object,
      default: null,
    },
    stickers: {
      type: Object,
      default: null,
    },
  },
  emits: {
    'update:modelValue': null,
  },
  methods: {
    selectSticker(sticker) {
      this.$emit('update:modelValue', sticker);
    },
  },
};
</script>

<style lang="scss" module>
.selector {
  position: relative;
  padding-top: 135.384%;
  background-image: url('~@/assets/images/sticker-selector-background.png');
  background-repeat: no-repeat;
  background-size: contain;

  @media screen and (max-width: 909px) {
    background-image: url('~@/assets/images/sticker-selector-background-mobile.png');
  }
}

.sticker {
  @include reset;
  position: absolute;
  display: inline-block;
  cursor: pointer;
  background: transparent;
  transition: transform 0.2s ease-in-out;

  @media screen and (max-width: 909px) {
    margin-top: -20px;
  }

  &:not(.stickerLeaveActive) {

    &:hover {
      transform: scale(1.1);
    }
  }
}

.stickerImage {
  display: inline-block;
  width: 100%;
  background-repeat: no-repeat;
  background-size: contain;
}

.stickerEnterFrom {
  opacity: 0;
  transform: scale(1.1);
}

.stickerEnterActive {
  transition: opacity 0.2s ease-in-out,
    transform 0.4s ease-in-out;
}

.stickerEnterTo {
  opacity: 1;
}

.stickerLeaveFrom {
  opacity: 1;
  transform: scale(1);
}

.stickerLeaveActive {
  transition: opacity 0.4s ease-in-out,
    transform 0.4s ease-in;
}

.stickerLeaveTo {
  opacity: 0;
  transform: scale(0);
}
</style>
