<template>
  <v-container class="module-default pa-0">
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
      class="mt-3"
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
        <Table
          v-model="programDoc"
          :value="value"
          :student-doc="studentDoc"
          :user-type="userType"
          class="module-default__table-view"
          @acceptButtonState-to-emit="acceptButtonState"
        ></Table>
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

      <div class="module-default__second-statement mt-10">Deadline</div>
      <div class="module-default__countdown">
        <iframe
          width="350"
          height="119"
          src="https://w2.countingdownto.com/3451554"
          frameborder="0"
        ></iframe>
      </div>
      <div class="module-default__row__buttons">
        <div v-show="setUpOffer">
          <v-dialog v-model="declineOffer" persistent max-width="400px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                :disabled="userType === 'stakeholder'"
                v-bind="attrs"
                x-large
                color="grey"
                rounded
                depressed
                :ripple="false"
                outlined
                class="ml-3 mr-3"
                v-on="on"
                >Decline Offer</v-btn
              >
            </template>
            <v-card>
              <v-card-title class="d-flex flex-column">
                <div class="overline font-weight-bold">
                  Are you sure you want to decline the <br />
                  internship offer?
                </div>
              </v-card-title>

              <v-divider></v-divider>

              <v-container class="d-flex justify-center">
                <div class="d-flex flex-row justify-center mt-3 mb-5">
                  <v-btn
                    class="ma-2"
                    color="red"
                    dark
                    x-large
                    rounded
                    depressed
                    @click="declineOffer = false"
                    >Cancel</v-btn
                  >

                  <v-btn
                    class="ma-2"
                    x-large
                    dark
                    color="green"
                    rounded
                    depressed
                    @click="changeThanks"
                    >Decline Offer</v-btn
                  >
                </div>
              </v-container>
            </v-card>
          </v-dialog>
          <v-btn
            color="#ae90b0"
            class="module-default__row__buttons-accept white--text"
            x-large
            rounded
            depressed
            :disabled="userType === 'stakeholder' || !allTermsChecked"
            :loading="loading"
            @click="process"
            >Accept</v-btn
          >
        </div>
        <v-alert
          v-if="success || error"
          dense
          class="mt-3 white--text presets__alert"
          :color="success ? 'green' : 'red'"
          >{{ message }}</v-alert
        >
        <div v-show="declinedOffer">
          <div class="module-default__statement1 headline font-weight-bold mt-6 justify-center">
            Thank you for participating. <br />
          </div>
          <div
            class="module-default__statement2 headline font-weight-medium justify-center mt-6 ml-12 mr-12"
          >
            We will deliver your program results soon.
          </div>
        </div>

        <!-- ENTER CONTENT HERE -->
        <!-- DESIGN YOUR ACTIVITY HERE / COMMENT OUT WHEN YOU'VE STARTED DESIGNING -->
        <!-- <div class="module-default__none">Design your activity here</div> -->
      </div>
    </div>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref, computed, PropType, reactive, toRefs } from '@vue/composition-api';
import { getModAdk, loading } from 'pcv4lib/src';
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
    },
    studentDoc: {
      required: true,
      type: Object as PropType<MongoDoc>
    },
    userType: {
      required: true,
      type: String
      // participant: '',
      // organizer: '',
      // stakeholder: ''
    }
  },

  setup(props, ctx) {
    const programDoc = computed({
      get: () => props.value,
      set: newVal => {
        ctx.emit('input', newVal);
      }
    });

    const index = programDoc.value.data.adks.findIndex(function findOfferObj(obj) {
      return obj.name === 'offer';
    });

    const { adkData, adkIndex } = getModAdk(
      props,
      ctx.emit,
      'offer',
      {
        offerDetails: programDoc.value.data.adks[index].offer
      },
      'studentDoc',
      'inputStudentDoc'
    );

    const state = reactive({
      ...adkData.value,
      offerStatus: false
    });

    const allTermsChecked = ref(false);
    const setUpOffer = ref(true);
    const declineOffer = ref(false);
    const declinedOffer = ref(false);

    function acceptButtonState(payload: any) {
      allTermsChecked.value = payload.state;
    }

    function populate() {
      setUpOffer.value = false;
      state.offerStatus = true;
      adkData.value = {
        ...adkData.value,
        offerStatus: state.offerStatus
      };
      return props.studentDoc.update(() => ({
        isComplete: true,
        adkIndex
      }));
    }

    function changeThanks() {
      setUpOffer.value = false;
      declinedOffer.value = true;
      declineOffer.value = false;
      state.offerStatus = false;
      adkData.value = {
        ...adkData.value,
        offerStatus: state.offerStatus
      };
      return props.studentDoc.update(() => ({
        isComplete: true,
        adkIndex
      }));
    }

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
      declinedOffer,
      allTermsChecked,
      declineOffer,
      setUpOffer,
      populate,
      ...toRefs(state),
      adkData,
      changeThanks,
      adkIndex,
      acceptButtonState,
      ...loading(populate, 'Success', 'Try again later')
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
    // margin-bottom: none !important;
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
