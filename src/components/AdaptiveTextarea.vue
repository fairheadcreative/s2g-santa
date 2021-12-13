<template>
  <div
    :class="$style.wrapper"
  >
    <div
      :class="$style.centerBackground"
    />
    <!--suppress HtmlUnknownAttribute -->
    <textarea
      ref="textarea"
      v-model="modelProxy"
      :class="$style.textarea"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
import { debounce } from 'lodash';

export default {
  props: {
    placeholder: {
      type: String,
      default: null,
    },
    modelValue: {
      type: String,
      default: null,
    },
    minRows: {
      type: Number,
      default: 1,
    },
  },
  emits: {
    'update:modelValue': null,
  },
  computed: {
    modelProxy: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit('update:modelValue', value);
      },
    },
    inputContent() {
      return this.modelProxy || this.placeholder;
    },
  },
  watch: {
    modelValue() {
      this.$nextTick(this.updateTextareaHeight);
    },
  },
  created() {
    this.updateTextareaHeightDebounced = debounce(this.updateTextareaHeight, 200);
  },
  mounted() {
    this.updateTextareaHeight();
    window.addEventListener('resize', this.updateTextareaHeightDebounced);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateTextareaHeightDebounced);
  },
  methods: {
    updateTextareaHeight() {
      this.$refs.textarea.style.height = '1px';
      this.$refs.textarea.style.height = `${this.$refs.textarea.scrollHeight}px`;
    },
  },
};
</script>

<style lang="scss" module>
.wrapper {
  position: relative;
}

.centerBackground {
  position: absolute;
  top: 0;
  right: 5px;
  bottom: 0;
  left: 5px;
  background: url('~@/assets/images/textarea-line-center-segment.svg');

  @media screen and (max-width: 909px) {
    background: url('~@/assets/images/textarea-line-center-segment-mobile.svg');
  }
}

.textarea {
  $line-height: 28px;
  @include reset;
  position: relative;
  display: block;
  width: 100%;
  min-height: calc(#{$line-height} * v-bind('minRows'));
  padding: 0 5px;
  overflow: hidden;
  font-size: 22px;
  line-height: $line-height;
  color: #6e695e;
  resize: none;
  background: url('~@/assets/images/textarea-line-edge-left.svg') repeat-y,
    url('~@/assets/images/textarea-line-edge-right.svg') repeat-y right 0;

  @media screen and (max-width: 909px) {
    $line-height: 25px;
    min-height: calc(#{$line-height} * v-bind('minRows'));
    font-size: 18px;
    line-height: $line-height;
    background: url('~@/assets/images/textarea-line-edge-left-mobile.svg') repeat-y,
      url('~@/assets/images/textarea-line-edge-right-mobile.svg') repeat-y right 0;
  }

  &::placeholder {
    color: rgba(113, 102, 79, 0.54);
  }

  &:focus {
    outline: none;
  }
}
</style>
