<template>
  <div
    :class="$style.page"
    class="container"
  >
    <MainHeader />

    <div
      :class="$style.content"
    >
      <TheLetter
        v-if="sticker"
        v-model:name="letterData.name"
        v-model:age="letterData.age"
        v-model:country="letterData.country"
        v-model:wishes="letterData.wishes"
        v-model:message="letterData.message"
        v-model:parents-email="letterData.parentsEmail"
        :age-options="$options.AGE_OPTIONS"
        :country-options="$options.COUNTRY_OPTIONS"
        :sticker="sticker"
      />
      <StickerSelector
        v-model="sticker"
        :class="$style.stickerSelector"
      />
    </div>

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
import TheLetter from '@/components/Letter';
import StickerSelector from '@/components/StickerSelector';

export default {
  components: {
    MainHeader,
    TheLetter,
    StickerSelector,
  },
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
  data() {
    return {
      letterData: {
        name: null,
        age: null,
        country: null,
        wishes: null,
        message: null,
        parentsEmail: null,
      },
      sticker: null,
    };
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
}
/* stylelint-enable */

.container {
  max-width: 1300px;
  margin: 0 auto;
}
</style>

<style lang="scss" module>
.page {
  flex-grow: 1;
}

.content {
  display: flex;
  align-items: flex-start;
}

.stickerSelector {
  flex-grow: 1;
  margin-top: 25px;
  margin-left: 25px;
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
</style>
