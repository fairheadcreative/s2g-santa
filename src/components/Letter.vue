<template>
  <form
    :class="$style.letter"
    @submit.prevent="sendDebounced"
  >
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
            <div
              :key="sticker.url"
              :class="$style.stickerWrapper"
            >
              <img
                :src="sticker.url"
                alt="Sticker"
                :width="sticker.width"
                :height="sticker.height"
              >
            </div>
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
          My parent's email is
          <!-- "search" name is a hack for Safari to hide their additional input controls -->
          <AdaptiveInput
            ref="email"
            v-model="parentsEmailProxy"
            placeholder="email@email.com"
            type="email"
            is-required
            autocomplete="off"
            name="search"
          />
        </div>
        <SendButton
          :class="$style.sendButton"
          @click="send"
        />
      </div>
    </div>
  </form>
</template>

<script>
import { debounce } from 'lodash';
import AdaptiveInput from '@/components/AdaptiveInput';
import AdaptiveSelect from '@/components/AdaptiveSelect';
import AdaptiveTextarea from '@/components/AdaptiveTextarea';
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
    send: null,
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
  created() {
    // Form calls send function 2 times if it's valid for some reason
    this.sendDebounced = debounce(this.send, 0, { trailing: false });
  },
  methods: {
    send() {
      if (this.$refs.email.$refs.input.validity.valid) {
        this.$emit('send');
      }
    },
  },
};
</script>

<style lang="scss" module>
.letter {
  position: relative;
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
  padding: 40px 30px 30px;
  color: #6e695e;

  @media screen and (max-width: 909px) {
    padding: 25px 20px 20px;
  }

  .header {
    display: flex;

    .text {
      flex-shrink: 1;
      min-width: 0;
    }

    .sticker {
      margin-top: -30px;
      margin-right: -10px;
      margin-left: 10px;

      .stickerWrapper {
        position: relative;
        display: inline-flex;

        &::after {
          position: absolute;
          top: -10px;
          left: -10px;
          display: block;
          width: 110px;
          height: 108px;
          content: '';
          background-image: url('~@/assets/images/sticker-express.png');
          background-size: contain;
          opacity: 0.6;
          animation: sticker-express-appear 0.4s forwards ease-in;

          @media screen and (max-width: 909px) {
            top: -5px;
            left: -5px;
            width: 60px;
            height: 58px;
          }
        }
      }

      @media screen and (max-width: 909px) {
        margin-top: -10px;
        margin-right: -10px;

        img {
          max-width: 80px;
          height: auto;
        }
      }
    }
  }

  .p {
    font-size: 22px;
    line-height: 28px;

    &:not(:first-child) {
      margin-top: 20px;
    }

    @media screen and (max-width: 909px) {
      font-size: 18px;
      line-height: 25px;
    }
  }

  .emailSection {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 100%;

    @media screen and (max-width: 909px) {
      flex-direction: column;
      align-items: flex-start;
    }

    > div:first-child {
      flex-shrink: 1;
      min-width: 0;
      max-width: 100%;
    }
  }

  .sendButton {
    flex-shrink: 0;
    margin-left: 10px;

    @media screen and (max-width: 909px) {
      align-self: flex-end;
      margin-top: 5px;
      margin-left: 0;
    }
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

@keyframes sticker-express-appear {

  from {
    opacity: 0;
    transform: scale(1.2);
  }

  to {
    transform: scale(1);
  }
}
</style>
