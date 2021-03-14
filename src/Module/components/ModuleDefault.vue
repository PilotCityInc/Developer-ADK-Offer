<template>
  <v-container class="module-default pa-2">
    <div class="module-default__instructions">
      <v-expansion-panels v-model="showInstructions" class="module-default__instructions" flat>
        <v-expansion-panel>
          <v-expansion-panel-header
            v-show="showInstructions"
            hide-actions
            class="pa-0"
            @click="showInstructions = true"
          >
            <template v-slot="{ open }">
              <v-scroll-y-transition hide-on-leave>
                <div v-if="!open" class="d-flex flex-column justify-center">
                  <v-icon color="grey lighten-2" class="d-flex justify-center">
                    mdi-chevron-down
                  </v-icon>
                  <div color="grey lighten-2" class="module-default__collapse-title">
                    INSTRUCTIONS
                  </div>
                </div>
              </v-scroll-y-transition>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <Instruct readonly />
            <div @click="showInstructions = true">
              <div class="module-default__collapse-title">CLOSE</div>
              <!-- <div class="hr"/> OPTIONAL -->
              <v-icon color="grey lighten-2" class="d-flex justify-center"> mdi-chevron-up </v-icon>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
    <v-progress-linear
      class="module-default__collapse-divider"
      color="#dedede"
      height="2"
      value="100"
      buffer-value="100"
      stream
    />
    <div>
      <div class="module-default__overall-statement">
        <div class="module-default__secondary-statement">
          <span class="module-default__main-statement">Congrats!</span>
          You’ve won a position with your employer. Please review and agree to the following terms.
          Accept or decline thereafter.
        </div>
      </div>

      <div class="module-edit__container-table">
        <Table v-model="programDoc" class="module-default__table-view"></Table>
      </div>

      <!-- <div class="module-default__row">
        <div class="module-default__agreement">Internship Project</div>
        <div><v-checkbox></v-checkbox></div>
      </div>
      <div class="module-default__row">
        <div class="module-default__agreement">Driver's License and Car</div>
        <div><v-checkbox></v-checkbox></div>
      </div>
      <div class="module-default__row">
        <div class="module-default__agreement">Employer-of-Record</div>
        <div><v-checkbox></v-checkbox></div>
      </div>
      <div class="module-default__row">
        <div class="module-default__agreement">Position Title (options)</div>
        <div><v-checkbox></v-checkbox></div>
      </div>
      <div class="module-default__row">
        <div class="module-default__agreement">Continuation Possibility</div>
        <div><v-checkbox></v-checkbox></div>
      </div>
      <div class="module-default__row">
        <div class="module-default__agreement">Paid or Unpaid, Amount</div>
        <div><v-checkbox></v-checkbox></div>
      </div>
      <div class="module-default__row">
        <div class="module-default__agreement">Min and max hours</div>
        <div><v-checkbox></v-checkbox></div>
      </div>
      <div class="module-default__row">
        <div class="module-default__agreement">Start and end date of work</div>
        <div><v-checkbox></v-checkbox></div>
      </div> -->

      <div class="module-default__second-statement">Deadline</div>
      <div class="module-default__countdown">
        <iframe
          width="350"
          height="119"
          src="https://w2.countingdownto.com/3451554"
          frameborder="0"
        ></iframe>
      </div>

      <div class="module-default__row__buttons">
        <v-btn class="module-default__row__buttons-reject" outlined x-large depressed
          >Decline</v-btn
        >
        <v-btn color="green" class="module-default__row__buttons-accept" x-large dark depressed
          >Accept</v-btn
        >
      </div>

      <!-- ENTER CONTENT HERE -->
      <!-- DESIGN YOUR ACTIVITY HERE / COMMENT OUT WHEN YOU'VE STARTED DESIGNING -->
      <!-- <div class="module-default__none">Design your activity here</div> -->
    </div>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref, computed, PropType } from '@vue/composition-api';
import Instruct from './ModuleInstruct.vue';
import Table from './TableView.vue';
import MongoDoc from '../types';

export default defineComponent({
  name: 'ModuleDefault',
  components: {
    Instruct,
    Table
  },
  props: {
    value: {
      required: true,
      type: Object as PropType<MongoDoc>
    }
  },

  setup(props, ctx) {
    // props
    const programDoc = computed({
      get: () => props.value,
      set: newVal => {
        ctx.emit('input', newVal);
      }
    });

    // console.log(programDoc.value);

    const index = programDoc.value.data.adks.findIndex(function findOfferObj(obj) {
      return obj.name === 'offer';
    });

    const initOfferSetup = {
      name: 'offer',
      offer: [
        {
          internshipProject1: false,
          internshipProject2: false,
          internshipProject3: false,
          licenseRequirement: '',
          employerRecord: '',
          intern: false,
          fellow: false,
          eir: false,
          apprentice: false,
          preApprentice: false,
          preInternship: false,
          continuation: false,
          compensation1: false,
          compensation2: false,
          compensation3: false,
          compensation4: false,
          compensation5: false,
          compensation6: false,
          minimumBudget: '',
          maximumBudget: '',
          internshipStart: '',
          internshipEnd: '',
          daysPerWeek: '',
          hoursPerDay: '',
          acceptanceDeadline: '',
          required: false
        }
      ]
    };

    programDoc.value.data.adks[index] = {
      ...initOfferSetup,
      ...programDoc.value.data.adks[index]
    };

    // apollo: {},
    const setupInstructions = ref({
      description: '',
      instructions: ['', '', '']
    });
    const showInstructions = ref(true);
    return {
      setupInstructions,
      showInstructions,
      programDoc,
      index,
      initOfferSetup
    };
  }
});
</script>

<style lang="scss">
.module-default {
  &__row__buttons {
    // justify-content: center;
    text-align: center;
    &-accept {
      margin: 20px;
    }
    &-reject {
      margin: 20px;
    }
  }
  &__table-view {
    width: 100%;
    // padding-left: 10px;
    // padding-right: 10px;
    margin-bottom: 20px;
  }
  &__agreement {
    font-family: Raleway;
    font-size: 15px;
    font-weight: 700;
    margin-top: auto;
    margin-bottom: auto;
  }
  &__row {
    flex-direction: row;
    display: flex;
    width: 75%;
  }

  &__overall-statement {
    text-align: center;
    max-width: 85%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10%;
  }

  &__countdown {
    font-family: Raleway;
    font-size: 40px;
    font-weight: 900;
    text-align: center;
    // margin: 20px;
    margin-bottom: 5%;
  }

  &__main-statement {
    font-family: Raleway;
    font-size: 20px;
    font-weight: 900;
    text-align: center;
    // margin: 20px;
    color: #ae90b0;
  }
  &__secondary-statement {
    font-family: Raleway;
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    // margin-left: auto;
    // margin-right: auto;
    // max-width: 75%;
    margin-bottom: 10%;
  }

  &__second-statement {
    font-family: Raleway;
    font-size: 18px;
    font-weight: 800;
    text-align: center;
  }
  &__none {
    border-radius: 5px;
    // border: 1px solid #dedede;
    height: 100px;
    text-align: center;
    background-color: #dedede;
    font-weight: 700;
    color: #ffffff;
    font-size: 18px;
    padding-top: 35px;
  }

  &__collapse-divider {
    margin-top: 15px;
    // margin-bottom: 75px;
    margin-bottom: none !important;
    margin-right: none;
    margin-left: none;
    padding-right: none;
    padding-left: none;
    // width: 100%;
  }

  &__collapse-title {
    color: #dedede;
    text-align: center;
    text-transform: uppercase;
    font-weight: 900;
    letter-spacing: 1px;
    font-size: 13px;
    //  text-uppercase font-weight-bold text-subtitle-2 text-center
  }

  &__container {
    // width: 100%;
    // padding: none;
    // margin: none;
    margin-top: 0px;
    padding: 0px;
  }
  &__employer-title {
    font-size: 25px;
    font-weight: 700;
  }

  &__scope {
    font-size: 22px;
    font-weight: 800;
    text-align: center;
    max-width: 95%;
    margin: auto;
  }
  &__youtube {
    height: 400px;
    width: 95%;
    border-radius: 25px;
    // margin: 0px;
    background-color: #dedede;

    // text-align: center;
    // justify-content: center;
    // align-items: center;
    // padding-top: auto;
    // padding-bottom: auto;
  }
  &__about {
    font-size: 15px;
    font-weight: 700;
    text-align: center;
    max-width: 90%;
    margin: auto;
    line-height: 30px;
  }

  &__faq {
    font-size: 15px;
    font-weight: 700;
    text-align: center;
    max-width: 90%;
    margin: auto;
    line-height: 30px;
  }

  &__faq-chat {
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-bottom: 5%;
  }
  &__faq-chat-line {
    margin: 5px;
  }

  &__faq-avatar {
    margin: 5px;
  }

  &__faq-question {
    // text-align: left;
    font-family: 'Raleway';
    font-size: 16px;
    font-weight: 800;
    color: #404142;
  }

  &__faq-answer {
    text-align: left;
    font-family: 'Raleway';
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0px;
    color: white;
    font-style: italic;
  }

  &__faq-answer-dark {
    text-align: left;
    font-family: 'Raleway';
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0px;
    color: #404142;
    font-style: italic;
  }

  &__faq-answer-dark-highlight {
    text-align: left;
    font-family: 'Raleway';
    font-size: 13px;
    font-weight: 800;
    letter-spacing: 0px;
    color: #404142;
  }

  &__specs-title {
    font-weight: 800;
  }
}
</style>
