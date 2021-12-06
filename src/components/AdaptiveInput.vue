<template>
  <input
    ref="input"
    v-model="modelProxy"
    :type="type"
    :class="$style.input"
    :placeholder="placeholder"
    :style="{ width: `${inputWidth}px` }"
    :required="isRequired"
  >
  <teleport to="body">
    <div :class="$style.ghostWrapper">
      <span
        ref="ghost"
        :class="$style.ghost"
        v-text="inputContent"
      />
    </div>
  </teleport>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: String,
      default: null,
    },
    placeholder: {
      type: String,
      default: null,
    },
    type: {
      type: String,
      default: 'text',
    },
    isRequired: {
      type: Boolean,
      default: false,
    },
  },
  emits: {
    'update:modelValue': null,
  },
  data() {
    return {
      inputWidth: '',
    };
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
    inputContent() {
      this.$nextTick(this.updateInputSize);
    },
  },
  mounted() {
    this.updateInputSize();
  },
  methods: {
    updateInputSize() {
      this.inputWidth = this.$refs.ghost.clientWidth;
    },
  },
};
</script>

<style lang="scss" module>
@mixin input-style {
  padding: 0 5px;
  font-size: 22px;
  line-height: 26px;
}

.input {
  @include reset;
  @include input-style;
  color: #6e695e;
  background-color: rgba(191, 181, 161, 0.42);
  border-radius: 3px;

  &::placeholder {
    color: rgba(113, 102, 79, 0.54);
  }
}

.ghostWrapper {
  position: absolute;
  top: -9999px;
  left: -9999px;
  width: 1px;
  height: 1px;
  visibility: hidden;
}

.ghost {
  @include input-style;
  display: inline-block;
  white-space: nowrap;
}
</style>
