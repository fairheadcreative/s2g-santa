<template>
  <div :class="$style.letter">
    <img
      src="@/assets/images/letter.png"
      :class="$style.background"
      width="1477"
      height="1164"
      alt="Letter background"
    >
    <div :class="$style.content">
      <div :class="$style.header">
        <div :class="$style.text">
          <div :class="$style.p">
            Dear Santa Claus,
          </div>
          <div :class="$style.p">
            My name is
            <AdaptiveInput
              v-model="nameProxy"
              placeholder="your name here"
            />
            and I'm
            <AdaptiveSelect
              v-model="ageProxy"
              placeholder="age"
              :options="ageOptions"
            />
            years old. I'm from
            <AdaptiveSelect
              v-model="countryProxy"
              placeholder="select your country"
              :options="countryOptions"
            />
          </div>
        </div>
        <div :class="$style.sticker">
          <transition
            :enter-from-class="$style.stickerEnterFrom"
            :enter-active-class="$style.stickerEnterActive"
            :enter-to-class="$style.stickerEnterTo"
            :leave-from-class="$style.stickerLeaveFrom"
            :leave-active-class="$style.stickerLeaveActive"
            :leave-to-class="$style.stickerLeaveTo"
            mode="out-in"
          >
            <img
              :key="sticker.url"
              :src="sticker.url"
              alt="Sticker"
              :width="sticker.width"
              :height="sticker.height"
            >
          </transition>
        </div>
      </div>
      <div :class="$style.p">
        For Christmas, I would like
        <AdaptiveTextarea
          v-model="wishesProxy"
          placeholder="list your presents here"
          :min-rows="3"
        />
      </div>
      <div :class="$style.p">
        I'd also just like to say
        <AdaptiveTextarea
          v-model="messageProxy"
          placeholder="write a personal message here"
        />
      </div>
      <div :class="[$style.p, $style.emailSection]">
        <div>
          My parents email is
          <AdaptiveInput
            v-model="parentsEmailProxy"
            placeholder="email@email.com"
          />
        </div>
        <SendButton :class="$style.sendButton" />
      </div>
    </div>
  </div>
</template>

<script>
import AdaptiveInput from '@/components/AdaptiveInput';
import AdaptiveSelect from '@/components/AdaptiveSelect';
import AdaptiveTextarea from '@/components/AdaptiveTextarea/AdaptiveTextarea';
import SendButton from '@/components/SendButton';

export default {
  components: {
    AdaptiveInput,
    AdaptiveSelect,
    AdaptiveTextarea,
    SendButton,
  },
  props: {
    name: {
      type: String,
      default: null,
    },
    age: {
      type: String,
      default: null,
    },
    country: {
      type: String,
      default: null,
    },
    wishes: {
      type: String,
      default: null,
    },
    message: {
      type: String,
      default: null,
    },
    parentsEmail: {
      type: String,
      default: null,
    },
    ageOptions: {
      type: Array,
      default: null,
    },
    countryOptions: {
      type: Array,
      default: null,
    },
    sticker: {
      type: Object,
      default: null,
    },
  },
  emits: {
    'update:name': null,
    'update:age': null,
    'update:country': null,
    'update:wishes': null,
    'update:message': null,
    'update:parentsEmail': null,
  },
  computed: {
    nameProxy: {
      get() {
        return this.name;
      },
      set(value) {
        this.$emit('update:name', value);
      },
    },
    ageProxy: {
      get() {
        return this.age;
      },
      set(value) {
        this.$emit('update:age', value);
      },
    },
    countryProxy: {
      get() {
        return this.country;
      },
      set(value) {
        this.$emit('update:country', value);
      },
    },
    wishesProxy: {
      get() {
        return this.wishes;
      },
      set(value) {
        this.$emit('update:wishes', value);
      },
    },
    messageProxy: {
      get() {
        return this.message;
      },
      set(value) {
        this.$emit('update:message', value);
      },
    },
    parentsEmailProxy: {
      get() {
        return this.parentsEmail;
      },
      set(value) {
        this.$emit('update:parentsEmail', value);
      },
    },
  },
};
</script>

<style lang="scss" module>
.letter {
  position: relative;
  width: 600px;
}

.background {
  position: absolute;
  top: -2.713%;
  right: -5.757%;
  bottom: -14.271%;
  left: -5.984%;
  width: 111.741%;
  height: 116.984%;
}

.content {
  position: relative;
  padding: 30px;
  padding-top: 40px;
  color: #6e695e;

  .header {
    display: flex;

    .sticker {
      margin-top: -30px;
      margin-right: -10px;
      margin-left: 10px;
    }
  }

  .p {
    font-size: 22px;
    line-height: 28px;

    &:not(:first-child) {
      margin-top: 20px;
    }
  }

  .emailSection {
    display: flex;
    align-items: flex-start;
  }

  .sendButton {
    margin-top: -13px;
    margin-left: 10px;
  }
}

.stickerEnterFrom {
  opacity: 0;
  transform: scale(1.1);
}

.stickerEnterActive {
  transition: opacity 0.2s ease-in-out,
    transform 0.4s ease-in-out;
}

.stickerEnterTo,
.stickerLeaveFrom {
  opacity: 1;
}

.stickerLeaveActive {
  transition: opacity 0.2s ease-in-out;
}

.stickerLeaveTo {
  opacity: 0;
}
</style>