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
          v-if="modelValue.url !== $options.STICKERS[1].url"
          :class="$style.sticker"
          :style="{
            width: `${$options.STICKERS[1].width * 2 / 538 * 100}%`,
            top: '25%',
            left: '55%',
          }"
          @click="selectSticker($options.STICKERS[1])"
        >
          <span class="srOnly">Sticker 1</span>
          <span
            :class="$style.stickerImage"
            :style="{
              backgroundImage: `url(${$options.STICKERS[1].url})`,
              paddingTop: `${$options.STICKERS[1].height / $options.STICKERS[1].width * 100}%`,
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
          v-if="modelValue.url !== $options.STICKERS[2].url"
          :class="$style.sticker"
          :style="{
            width: `${$options.STICKERS[2].width * 2 / 538 * 100}%`,
            top: '31%',
            left: '3%',
          }"
          @click="selectSticker($options.STICKERS[2])"
        >
          <span class="srOnly">Sticker 2</span>
          <span
            :class="$style.stickerImage"
            :style="{
              backgroundImage: `url(${$options.STICKERS[2].url})`,
              paddingTop: `${$options.STICKERS[2].height / $options.STICKERS[2].width * 100}%`,
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
          v-if="modelValue.url !== $options.STICKERS[3].url"
          :class="$style.sticker"
          :style="{
            width: `${$options.STICKERS[3].width * 2 / 538 * 100}%`,
            top: '57%',
            left: '55%',
          }"
          @click="selectSticker($options.STICKERS[3])"
        >
          <span class="srOnly">Sticker 3</span>
          <span
            :class="$style.stickerImage"
            :style="{
              backgroundImage: `url(${$options.STICKERS[3].url})`,
              paddingTop: `${$options.STICKERS[3].height / $options.STICKERS[3].width * 100}%`,
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
          v-if="modelValue.url !== $options.STICKERS[4].url"
          :class="$style.sticker"
          :style="{
            width: `${$options.STICKERS[4].width * 2 / 538 * 100}%`,
            top: '62%',
            left: '-9%',
          }"
          @click="selectSticker($options.STICKERS[4])"
        >
          <span class="srOnly">Sticker 4</span>
          <span
            :class="$style.stickerImage"
            :style="{
              backgroundImage: `url(${$options.STICKERS[4].url})`,
              paddingTop: `${$options.STICKERS[4].height / $options.STICKERS[4].width * 100}%`,
            }"
          />
        </button>
      </transition>
    </div>
  </div>
</template>

<script>
import Sticker1 from '@/assets/images/sticker-1.png';
import Sticker2 from '@/assets/images/sticker-2.png';
import Sticker3 from '@/assets/images/sticker-3.png';
import Sticker4 from '@/assets/images/sticker-4.png';

export default {
  props: {
    modelValue: {
      type: Object,
      default: null,
    },
  },
  emits: {
    'update:modelValue': null,
  },
  STICKERS: {
    1: {
      url: Sticker1,
      width: 138,
      height: 135,
    },
    2: {
      url: Sticker2,
      width: 152,
      height: 123,
    },
    3: {
      url: Sticker3,
      width: 132,
      height: 163,
    },
    4: {
      url: Sticker4,
      width: 182,
      height: 157,
    },
  },
  created() {
    this.$emit('update:modelValue', this.$options.STICKERS[1]);
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
  padding-top: 155.39%;
  background-image: url('~@/assets/images/sticker-selector-background.png');
  background-repeat: no-repeat;
  background-size: contain;
}

.sticker {
  @include reset;
  position: absolute;
  display: inline-block;
  cursor: pointer;
  background: transparent;
  transition: transform 0.2s ease-in-out;

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
