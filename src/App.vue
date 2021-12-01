<template>
  <link
    rel="preload"
    as="image"
    :href="$options.FINAL_HEADING_IMAGE"
  >
  <link
    rel="preload"
    as="image"
    :href="$options.FINAL_HEADING_SPINNER_IMAGE"
  >
  <div
    :class="$style.page"
    class="container"
  >
    <transition
      :enter-from-class="$style.pageEnterFrom"
      :enter-active-class="$style.pageEnterActive"
      :leeave-active-class="$style.pageLeaveActive"
      :leeave-to-class="$style.pageLeaveTo"
      mode="out-in"
    >
      <MainHeader
        v-if="stage === 1"
      />
      <FinalHeader
        v-else-if="stage === 2"
        :sticker="sticker"
      />
    </transition>

    <transition
      :enter-from-class="$style.pageEnterFrom"
      :enter-active-class="$style.pageEnterActive"
      :leeave-active-class="$style.pageLeaveActive"
      :leeave-to-class="$style.pageLeaveTo"
      mode="out-in"
    >
      <div
        v-if="stage === 1"
        :class="$style.contentLetter"
      >
        <TheLetter
          v-model:name="letterData.name"
          v-model:age="letterData.age"
          v-model:country="letterData.country"
          v-model:wishes="letterData.wishes"
          v-model:message="letterData.message"
          v-model:parents-email="letterData.parentsEmail"
          :age-options="$options.AGE_OPTIONS"
          :country-options="$options.COUNTRY_OPTIONS"
          :sticker="sticker"
          :class="$style.letter"
          @send="send"
        />
        <StickerSelector
          v-model="sticker"
          :stickers="$options.STICKERS"
          :class="$style.stickerSelector"
        />
      </div>
      <div
        v-else-if="stage === 2"
        :class="$style.contentText"
      >
        <p>In just a moment, he'll be able to check if you're on the naughty or nice list.</p>
        <p>Keep an eye on your emails as your parents might get a surprise from one of his elves!</p>
      </div>
    </transition>

    <footer :class="$style.footer">
      <a
        href="https://www.smtp2go.com/"
        target="_blank"
        :class="$style.logo"
      >
        <span class="srOnly">SMTP2GO</span>
      </a>
      and Santa, partners in delivery.
    </footer>
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader';
import FinalHeader from '@/components/FinalHeader';
import TheLetter from '@/components/Letter';
import StickerSelector from '@/components/StickerSelector';
import Sticker1 from '@/assets/images/sticker-1.png';
import Sticker2 from '@/assets/images/sticker-2.png';
import Sticker3 from '@/assets/images/sticker-3.png';
import Sticker4 from '@/assets/images/sticker-4.png';
import FinalHeadingImage from '@/assets/images/heading-2.png';
import FinalHeadingSpinnerImage from '@/assets/images/spinner-2.png';

export default {
  components: {
    MainHeader,
    FinalHeader,
    TheLetter,
    StickerSelector,
  },
  FINAL_HEADING_IMAGE: FinalHeadingImage,
  FINAL_HEADING_SPINNER_IMAGE: FinalHeadingSpinnerImage,
  AGE_OPTIONS: Array.from(new Array(99), (_, i) => i + 1),
  COUNTRY_OPTIONS: [
    'Afghanistan',
    'Åland Islands',
    'Albania',
    'Algeria',
    'American Samoa',
    'AndorrA',
    'Angola',
    'Anguilla',
    'Antarctica',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Aruba',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bermuda',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Bouvet Island',
    'Brazil',
    'British Indian Ocean Territory',
    'Brunei Darussalam',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Cayman Islands',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Christmas Island',
    'Cocos (Keeling) Islands',
    'Colombia',
    'Comoros',
    'Congo',
    'Congo, The Democratic Republic of the',
    'Cook Islands',
    'Costa Rica',
    "Cote D'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Falkland Islands (Malvinas)',
    'Faroe Islands',
    'Fiji',
    'Finland',
    'France',
    'French Guiana',
    'French Polynesia',
    'French Southern Territories',
    'Gabon',
    'Gambia',
    'Georgia',
    'Germany',
    'Ghana',
    'Gibraltar',
    'Greece',
    'Greenland',
    'Grenada',
    'Guadeloupe',
    'Guam',
    'Guatemala',
    'Guernsey',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Heard Island and Mcdonald Islands',
    'Holy See (Vatican City State)',
    'Honduras',
    'Hong Kong',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran, Islamic Republic Of',
    'Iraq',
    'Ireland',
    'Isle of Man',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jersey',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    "Korea, Democratic People'S Republic of",
    'Korea, Republic of',
    'Kuwait',
    'Kyrgyzstan',
    "Lao People'S Democratic Republic",
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libyan Arab Jamahiriya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macao',
    'Macedonia, The Former Yugoslav Republic of',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Martinique',
    'Mauritania',
    'Mauritius',
    'Mayotte',
    'Mexico',
    'Micronesia, Federated States of',
    'Moldova, Republic of',
    'Monaco',
    'Mongolia',
    'Montserrat',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'Netherlands Antilles',
    'New Caledonia',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Niue',
    'Norfolk Island',
    'Northern Mariana Islands',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Palestinian Territory, Occupied',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Pitcairn',
    'Poland',
    'Portugal',
    'Puerto Rico',
    'Qatar',
    'Reunion',
    'Romania',
    'Russian Federation',
    'RWANDA',
    'Saint Helena',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Pierre and Miquelon',
    'Saint Vincent and the Grenadines',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'South Georgia and the South Sandwich Islands',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Svalbard and Jan Mayen',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syrian Arab Republic',
    'Taiwan, Province of China',
    'Tajikistan',
    'Tanzania, United Republic of',
    'Thailand',
    'Timor-Leste',
    'Togo',
    'Tokelau',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Turks and Caicos Islands',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'United States Minor Outlying Islands',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Venezuela',
    'Viet Nam',
    'Virgin Islands, British',
    'Virgin Islands, U.S.',
    'Wallis and Futuna',
    'Western Sahara',
    'Yemen',
    'Zambia',
    'Zimbabwe',
  ],
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
  data() {
    return {
      stage: 1,
      letterData: {
        name: null,
        age: null,
        country: null,
        wishes: null,
        message: null,
        parentsEmail: null,
      },
      sticker: this.$options.STICKERS[1],
    };
  },
  methods: {
    send() {
      this.stage = 2;
    },
  },
};
</script>

<style lang="scss">
@import '~modern-normalize/modern-normalize.css';
@import '~@/assets/scss/fonts';

.srOnly {
  @include hide-accessible;
}

body {
  display: flex;
  align-items: stretch;
  min-height: 100vh;
  font-family: 'Urania', sans-serif;
  color: #fff;
  background: #3e6ebd url('~@/assets/images/background.jpg') no-repeat center top / 1300px 680px;

  input,
  button,
  select {
    font-family: 'Urania', sans-serif;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
}

/* stylelint-disable selector-max-id */
#smtp2go-app {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: hidden;
}
/* stylelint-enable */

.container {
  width: 100%;
  min-width: 910px;
  max-width: 1300px;
  margin: 0 auto;
}
</style>

<style lang="scss" module>
.page {
  flex-grow: 1;
}

.contentLetter {
  display: flex;
  align-items: flex-start;
  max-width: 1000px;
  padding: 0 50px;
  margin: 0 auto;
}

.letter {
  width: 70%;
  transform: rotate(-1deg);
}

.stickerSelector {
  flex-grow: 1;
  margin-top: 25px;
  margin-left: 25px;
}

.contentText {
  text-align: center;

  p {
    max-width: 550px;
    margin: 1em auto;
    font-size: 22px;
    color: #a9c4ed;
    text-shadow: 0 1px 4px #02030352;
  }
}

.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  margin-top: 20px;
  font-weight: 600;
  color: #84aadc;

  .logo {
    display: inline-block;
    width: 96px;
    height: 38px;
    margin-right: 2px;
    background-image: url('~@/assets/images/logo.png');
    background-repeat: no-repeat;
    background-size: contain;
  }
}

.pageEnterFrom {
  transform: scale(0);
}

.pageEnterActive {
  transition: transform 0.2s ease-in;
}

.pageLeaveActive {
  transition: transform 0.2s ease-in;
}

.pageLeaveTo {
  transform: scale(0);
}
</style>
