<template>
  <div
    :class="$style.wrapper"
  >
    <div
      :class="$style.centerBackground"
      :style="centerBackgroundStyle"
    />
    <!--suppress HtmlUnknownAttribute -->
    <textarea
      ref="textarea"
      v-model="modelProxy"
      :class="$style.textarea"
      :placeholder="placeholder"
      :style="edgesBackgroundStyle"
    />
  </div>
</template>

<script>
import LineCenterSegmentSvg from './assets/images/line-center-segment.svg';
import LineEdgeLeftSvg from './assets/images/line-edge-left.svg';
import LineEdgeRightSvg from './assets/images/line-edge-right.svg';

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
  LINE_CENTER_SEGMENT_SVG: LineCenterSegmentSvg,
  LINE_EDGE_LEFT_SVG: LineEdgeLeftSvg,
  LINE_EDGE_RIGHT_SVG: LineEdgeRightSvg,
  computed: {
    modelProxy: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit('update:modelValue', value);
      },
    },
    centerBackgroundStyle() {
      return {
        background: `url(${this.$options.LINE_CENTER_SEGMENT_SVG})`,
      };
    },
    edgesBackgroundStyle() {
      return {
        background: `url(${this.$options.LINE_EDGE_LEFT_SVG}) repeat-y,\
        url(${this.$options.LINE_EDGE_RIGHT_SVG}) repeat-y right 0px`,
      };
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
  mounted() {
    this.updateTextareaHeight();
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

  &::placeholder {
    color: rgba(113, 102, 79, 0.54);
  }

  &:focus {
    outline: none;
  }
}
</style>
