<template>
  <div>
    <div class="q">
      <!-- main page q -->
      <div class="q__strong">
        How long until inheritance can be spent by the <span class="heir">Heir</span> ?
      </div>
      <!-- input value -->
      <div class="q__time">
        <input
          type="text"
          class="q__time__input"
          ref="q__time__input"
          maxlength="5"
          :value="timeValue"
          @input="numberChanged"
          @change="refreshNumber"
        >
        <div class="q__time__label">
          days
        </div>
      </div>
      <!-- text to clarify qs and input  -->
      <div class="q__light">
        To be measured from moment funding is confirmed.<br>
        &nbsp;&nbsp;&nbsp;Value of up to 388 days.
      </div>
      <!-- buttons to go to next pages -->
      <ArrowButton
        textContent="Complete with random keys"
        textColor="var(--bitcoin-orange, orange)"
        @click="onDoneButtonClick"
      />
      <ArrowButton
        textContent="Edit keys..."
        textColor="var(--bitcoin-orange, orange)"
        @click="onNextButtonClick"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'; // state
import ArrowButton from './../general/ArrowButton';

export default {
  name: 'InheritanceCreateStep1',
  components: {
    ArrowButton
  },
  data: () => ({
    timeValue: '365', // stores number to display
    lastTimer: null // stores timer id used for fixing numbers
  }),
  mounted () {
    // load default time value from vuex
    this.timeValue = this.getDelayIC;
  },
  computed: {
    ...mapGetters('inheritanceCreate', [
      'getDelayIC' // get delay from vuex of inheritance contract
    ])
  },
  methods: {
    ...mapActions('inheritanceCreate', [
      'updatePageStatusIC', // set page ready status to true/false (vuex)
      'changePageIC', // set selected page (vuex)
      'updateContractValuesIC' // set stored contract values (vuex)
    ]),
    // modifies input value to match only filtered values and
    // initiates a timer to fix nonsense values after delay
    numberChanged (event) {
      // change text input to allowed characters
      const newText = event.target.value;
      const filter = '0123456789.'; // only these characters allowed
      const filteredText = newText
        .split('')
        .filter(letter => filter.indexOf(letter) > -1)
        .join('');

      // check that value is below 1.06 years or 388 days (bip 68)
      const fixedNumber = parseFloat(filteredText) > 388 ? '388' : filteredText;

      // update values
      this.$refs.q__time__input.value = this.timeValue = fixedNumber;

      // let user type and do final checks after 3 sec delay of not typing
      // this way user's not interrupted if erasing all or mistyped
      // start by clearing out last timer and setting new timer
      clearTimeout(this.lastTimer);
      this.lastTimer = setTimeout(() => {
        this.refreshNumber();
      }, 3000);
    },
    // get rid of blank, non-numbers,
    refreshNumber () {
      // make sceck that value is non-0, not blank, and a real number
      // or reset to default number
      let inputValue = this.timeValue;
      if (
        parseFloat(inputValue) === 0 ||
        isNaN(inputValue) ||
        !inputValue
      ) {
        inputValue = this.getDelayIC;
      }

      // remove pointless zeros and decimal points w/o reason
      inputValue = parseFloat(inputValue).toString();

      // update view
      // div might not exist so wrapped in try
      try {
        this.$refs.q__time__input.value = inputValue;
      } catch (e) {}
      // update contract value
      this.updateContractValuesIC({ daysDelay: inputValue });
    },
    // next button event
    onNextButtonClick () {
      // convert to valid number & update vuex
      this.refreshNumber();
      // now change page to step 2
      this.changePageIC(2);
    },
    onDoneButtonClick () {
      // convert to valid number & update vuex
      this.refreshNumber();
      // now change page to step 2
      this.changePageIC(4);
    }
  }
};
</script>

<style scoped>
  .q {
    text-align: left;
    margin: 0 var(--s2);
  }
  .q__strong {
    display: block;
    font-size: var(--s3);
    color: var(--background, white);
    margin-right: var(--s3);
    margin-left: 5%;
    font-weight: bold;
  }
  .q__time {
    display: block;
    margin-top: var(--s4);
    margin-bottom: var(--s3);
    text-align: left;
    margin-left: 10%;
  }
  .q__time__input {
    font-size: var(--s3);
    height: var(--s4);
    width: calc(10 * var(--s));
    text-align: center;
    border: none;
    background-color: var(--background, white);
    color: var(--bitcoin-orange, orange);
    display: inline-block;
  }
  .q__time__label {
    font-size: var(--s3);
    color: var(--background, white);
    margin-left: var(--s1);
    display: inline-block;
    font-weight: bold;
  }
  .q__light {
    display: block;
    font-size: var(--s2);
    color: var(--background, white);
    margin-top: var(--s2);
    line-height: var(--s3);
    margin-left: 15%;
  }
  .heir {
    color: var(--color-heir, rgb(0, 134, 0));
    white-space: nowrap;
    font-weight: bold;
    text-shadow:
      calc(-0.1 * var(--s)) calc(-0.1 * var(--s)) calc(0.05 * var(--s)) var(--background, white),
      var(--s0-1)           calc(-0.1 * var(--s)) calc(0.05 * var(--s)) var(--background, white),
      calc(-0.1 * var(--s)) var(--s0-1)           calc(0.05 * var(--s)) var(--background, white),
      var(--s0-1)           var(--s0-1)           calc(0.05 * var(--s)) var(--background, white);
  }
</style>
