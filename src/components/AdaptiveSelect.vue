<template>
  <label :class="$style.wrapper">
    <span
      :class="[
        $style.label,
        {
          [$style.isPlaceholderValue]: isPlaceholderValueSelected,
        },
      ]"
      v-text="label"
    />
    <select
      v-model="modelProxy"
      :class="$style.select"
    >
      <option
        v-if="placeholder"
        :value="null"
        disabled
        v-text="placeholder"
      />
      <option
        v-for="option in normalizedOptions"
        :key="option.value"
        :value="option.value"
        v-text="option.label"
      />
    </select>
  </label>
</template>

<script>
import { isPlainObject } from 'lodash';

export default {
  props: {
    options: {
      type: Array,
      default: () => [],
    },
    modelValue: {
      type: null,
      default: null,
    },
    placeholder: {
      type: String,
      default: null,
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
    normalizedOptions() {
      return this.options.map((option) => {
        const isObjectOption = isPlainObject(option);

        return {
          label: isObjectOption ? option.label : option,
          value: isObjectOption ? option.value : option,
        };
      });
    },
    optionsMap() {
      return this.normalizedOptions.reduce((map, option) => ({
        ...map,
        [option.value]: option.label,
      }), {});
    },
    isPlaceholderValueSelected() {
      return this.modelProxy == null && this.label === this.placeholder;
    },
    label() {
      const optionLabel = this.optionsMap[this.modelProxy];
      if (optionLabel) {
        return optionLabel;
      }
      if (this.placeholder) {
        return this.placeholder;
      }

      return null;
    },
  },
};
</script>

<style lang="scss" module>
.wrapper {
  position: relative;
}

.label {
  display: inline-block;
  padding: 0 5px;
  font-size: 22px;
  line-height: 26px;
  color: #6e695e;
  background-color: rgba(191, 181, 161, 0.42);
  border-radius: 3px;

  @media screen and (max-width: 909px) {
    font-size: 18px;
    line-height: 23px;
  }

  &::after {
    position: relative;
    top: -3px;
    display: inline-block;
    width: 0;
    height: 0;
    margin-left: 5px;
    content: '';
    border-color: #6d675e transparent transparent;
    border-style: solid;
    border-width: 5px 5px 0;
  }

  &.isPlaceholderValue {
    color: rgba(113, 102, 79, 0.54);
  }
}

.select {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
}
</style>
