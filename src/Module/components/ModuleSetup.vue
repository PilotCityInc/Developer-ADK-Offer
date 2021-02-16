<template>
  <ValidationObserver v-slot="{}" slim>
    <v-container class="module-edit">
      <div class="module-edit__container">
        <!-- <v-divider class="presets__divider"></v-divider> -->
        <!-- <div class="module-setup__question-title">Ask question here for setup</div>
        <validation-provider v-slot="{ errors }" slim rules="required">
          <v-text-field
            v-model="example"
            :error-messages="errors"
            label="Example"
            outlined
          ></v-text-field>
        </validation-provider> -->
        <!-- BREAK -->
        <div class="module-setup__question-title">What will be their internship project?</div>
        <validation-provider>
          <v-checkbox
            v-model="programDoc.data.adks[index].internshipProject1"
            dense
            label="Your task will be to further prototype and pilot your carry-over project and/or complete assigned tasks & projects (Recommended)"
          ></v-checkbox>
        </validation-provider>
        <validation-provider>
          <v-checkbox
            v-model="programDoc.data.adks[index].internshipProject2"
            dense
            label="Your task will be to further prototype and pilot your carry-over project (Recommended)"
          ></v-checkbox>
        </validation-provider>
        <validation-provider>
          <v-checkbox
            v-model="programDoc.data.adks[index].internshipProject3"
            dense
            label="Your task will be to further prototype, pilot and/or productize your carry-over project"
          ></v-checkbox>
        </validation-provider>
        <!-- BREAK -->
        <div class="module-setup__question-title">Is a driver's license or car required?</div>

        <validation-provider>
          <v-radio-group v-model="programDoc.data.adks[index].licenseRequirement">
            <v-radio label="No (Recommended)"></v-radio>
            <v-radio label="Yes"></v-radio>
          </v-radio-group>
        </validation-provider>

        <!-- BREAK -->
        <div class="module-setup__question-title">Who will be the employer-of-record?</div>

        <v-radio-group v-model="programDoc.data.adks[index].employerRecord">
          <v-radio label="My organization"></v-radio>
          <v-radio label="PilotCity (20% admin fee from total budget)"></v-radio>
        </v-radio-group>
        <!-- BREAK -->
        <div class="module-setup__question-title">What position titles can you offer?</div>
        <v-checkbox
          v-model="programDoc.data.adks[index].intern"
          dense
          label="Intern (Recommended)"
        ></v-checkbox>
        <v-checkbox
          v-model="programDoc.data.adks[index].fellow"
          dense
          label="Fellow (Recommended)"
        ></v-checkbox>

        <v-checkbox
          v-model="programDoc.data.adks[index].eir"
          dense
          label="Entrepreneur-in-Residence"
        ></v-checkbox>

        <v-checkbox
          v-model="programDoc.data.adks[index].apprentice"
          dense
          label="Apprentice"
        ></v-checkbox>
        <v-checkbox
          v-model="programDoc.data.adks[index].preApprentice"
          dense
          label="Pre-Apprentice"
        ></v-checkbox>
        <v-checkbox
          v-model="programDoc.data.adks[index].preInternship"
          dense
          label="Pre-Internship"
        ></v-checkbox>

        <!-- BREAK -->
        <div class="module-setup__question-title">
          Is there possibility of continuation or re-hire?
        </div>

        <v-radio-group v-model="programDoc.data.adks[index].continuation">
          <v-radio label="Yes (Recommended)"></v-radio>
          <v-radio label="No"></v-radio>
        </v-radio-group>
        <!-- BREAK -->

        <div class="module-setup__question-title">
          What compensation arrangements can you offer?
        </div>
        <v-checkbox
          v-model="programDoc.data.adks[index].compensation1"
          dense
          label="$250 Stipend (+20% PilotCity admin)"
        ></v-checkbox>
        <v-checkbox
          v-model="programDoc.data.adks[index].compensation2"
          dense
          label="$350 Stipend (+20% PilotCity admin)"
        ></v-checkbox>
        <v-checkbox
          v-model="programDoc.data.adks[index].compensation3"
          dense
          label="$500 Stipend (+20% PilotCity admin)"
        ></v-checkbox>
        <v-checkbox
          v-model="programDoc.data.adks[index].compensation4"
          dense
          label="$595 Stipend (+20% PilotCity admin, Recommended)"
        ></v-checkbox>
        <v-checkbox
          v-model="programDoc.data.adks[index].compensation5"
          dense
          label="W2 Employee (Minimum wage or more)"
        ></v-checkbox>
        <v-checkbox
          v-model="programDoc.data.adks[index].compensation6"
          dense
          label="Unpaid ($0)"
        ></v-checkbox>
        <!-- BREAK -->
        <div class="module-setup__question-title">
          What is the minimum & maximum compensation budget?
        </div>
        <v-row class="d-flex mt-3">
          <v-select
            v-model="programDoc.data.adks[index].minimumBudget"
            :items="minBudget"
            label="Minimum"
            outlined
          ></v-select>
          <div class="ml-3 mr-3"></div>
          <v-select
            v-model="programDoc.data.adks[index].maximumBudget"
            :items="maxBudget"
            label="Maximum"
            outlined
          ></v-select>
        </v-row>
        <!-- BREAK -->
        <div class="module-setup__question-title">
          What is the Summer internship start & end date?
        </div>

        <v-row class="d-flex">
          <v-col class="mt-3">
            <v-dialog ref="dialog" width="290px">
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="programDoc.data.adks[index].internshipStart"
                  outlined
                  label="Start Date"
                  append-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="programDoc.data.adks[index].internshipStart" scrollable>
                <v-spacer></v-spacer>
                <v-btn
                  text
                  color="primary"
                  @click="programDoc.data.adks[index].internshipStart = false"
                >
                  Cancel
                </v-btn>
                <v-btn
                  text
                  color="primary"
                  @click="$refs.dialog.save(programDoc.data.adks[index].internshipStart)"
                >
                  OK
                </v-btn>
              </v-date-picker>
            </v-dialog>
          </v-col>

          <v-col class="mt-3">
            <v-dialog ref="dialog" width="290px">
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="programDoc.data.adks[index].internshipEnd"
                  outlined
                  label="End Date"
                  append-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="programDoc.data.adks[index].internshipEnd" scrollable>
                <v-spacer></v-spacer>
                <v-btn
                  text
                  color="primary"
                  @click="programDoc.data.adks[index].internshipEnd = false"
                >
                  Cancel
                </v-btn>
                <v-btn
                  text
                  color="primary"
                  @click="$refs.dialog.save(programDoc.data.adks[index].internshipEnd)"
                >
                  OK
                </v-btn>
              </v-date-picker>
            </v-dialog>
          </v-col>
        </v-row>

        <!-- <v-row class="mt-3">
          <v-col cols="12" sm="6">
            <v-date-picker v-model="workDates" range></v-date-picker>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="dateRangeText"
              label="Date range"
              prepend-icon="mdi-calendar"
              readonly
            ></v-text-field>
          </v-col>
        </v-row> -->

        <!-- BREAK -->

        <div class="module-setup__question-title">How many days & hours per week?</div>
        <v-row class="d-flex mt-3">
          <v-select
            v-model="programDoc.data.adks[index].daysPerWeek"
            :items="daysPerWeek"
            label="Days per week?"
            outlined
          ></v-select>
          <div class="ml-3 mr-3"></div>
          <v-select
            v-model="programDoc.data.adks[index].hoursPerDay"
            :items="hoursPerDay"
            label="Hours per day?"
            outlined
          ></v-select>
        </v-row>
        <!-- BREAK -->
        <div class="module-setup__question-title">
          When is the last date for students to accept their offers?
        </div>

        <v-col class="mt-3">
          <v-dialog ref="dialog" v-model="modal" :return-value.sync="date" persistent width="290px">
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="programDoc.data.adks[index].acceptanceDeadline"
                outlined
                label="Acceptance deadline"
                append-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="programDoc.data.adks[index].acceptanceDeadline" scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="modal = false"> Cancel </v-btn>
              <v-btn text color="primary" @click="$refs.dialog.save(date)"> OK </v-btn>
            </v-date-picker>
          </v-dialog>
        </v-col>

        <!-- BREAK -->

        <!-- BREAK -->

        <!-- BREAK -->

        <!-- BREAK -->

        <!-- NO SETUP NECESSARY / COMMENT OUT IF SETUP IS NECESSARY -->
        <!-- <div class="module-setup__none">No setup necessary</div> -->
        <!-- ENTER CONTENT HERE -->
      </div>
    </v-container>
  </ValidationObserver>
</template>

<script lang="ts">
import { defineComponent, ref, computed, PropType, toRefs, reactive } from '@vue/composition-api';
import MongoDoc from '../types';
import { minBudget, maxBudget, daysPerWeek, hoursPerDay } from './const';
// import gql from 'graphql-tag';

export default defineComponent({
  name: 'ModuleSetup',
  props: {
    value: {
      required: true,
      type: Object as PropType<MongoDoc>
    }
  },
  setup(props, ctx) {
    const programDoc = computed({
      get: () => props.value,
      set: newVal => {
        ctx.emit('input', newVal);
      }
    });

    const index = programDoc.value.data.adks.findIndex(function findOfferhObj(obj) {
      return obj.name === 'Offer';
    });
    const initOfferSetup = {
      offer: [
        {
          internshipProject1: '',
          internshipProject2: '',
          internshipProject3: '',
          licenseRequirement: '',
          employerRecord: '',
          intern: '',
          fellow: '',
          eir: '',
          apprentice: '',
          preApprentice: '',
          preInternship: '',
          continuation: '',
          compensation1: '',
          compensation2: '',
          compensation3: '',
          compensation4: '',
          compensation5: '',
          compensation6: '',
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

    const setup = reactive({
      minBudget,
      maxBudget,
      daysPerWeek,
      hoursPerDay
    });

    programDoc.value.data.adks[index] = {
      ...initOfferSetup,
      ...programDoc.value.data.adks[index]
    };
    // Handle Save
    const loading = ref(false);
    const errormsg = ref('');
    async function save() {
      loading.value = true;
      try {
        await programDoc.value.save();
        errormsg.value = '';
      } catch (err) {
        errormsg.value = 'Could not save';
      }
      loading.value = false;
    }

    function populate() {
      programDoc.value.data.adks[index].research.push(initOfferSetup.offer[0]);
    }

    return {
      ...toRefs(setup),
      populate,
      loading,
      save,
      errormsg,
      index,
      programDoc
    };
  }
});
</script>

<style lang="scss">
.module-setup {
  &__question-title {
    font-family: Raleway;
    font-size: 18px;
    font-weight: 700;
    line-height: 30px;
    // margin-top: 50px;
    margin-top: 35px;
  }
  &__buildscope {
    text-align: right;
    margin-bottom: 10px;
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
}
</style>
