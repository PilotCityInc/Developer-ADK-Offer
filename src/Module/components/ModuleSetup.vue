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
            v-model="programDoc.data.adks[index].offer[0].internshipProject1"
            dense
            label="Your task will be to further prototype and pilot your carry-over project and/or complete assigned tasks & projects (Recommended)"
          ></v-checkbox>
        </validation-provider>
        <validation-provider>
          <v-checkbox
            v-model="programDoc.data.adks[index].offer[0].internshipProject2"
            dense
            label="Your task will be to further prototype and pilot your carry-over project (Recommended)"
          ></v-checkbox>
        </validation-provider>
        <validation-provider>
          <v-checkbox
            v-model="programDoc.data.adks[index].offer[0].internshipProject3"
            dense
            label="Your task will be to further prototype, pilot and/or productize your carry-over project"
          ></v-checkbox>
        </validation-provider>
        <!-- BREAK -->
        <div class="module-setup__question-title">Is a driver's license or car required?</div>

        <validation-provider>
          <v-radio-group v-model="programDoc.data.adks[index].offer[0].licenseRequirement">
            <v-radio label="No (Recommended)"></v-radio>
            <v-radio label="Yes"></v-radio>
          </v-radio-group>
        </validation-provider>

        <!-- BREAK -->
        <div class="module-setup__question-title">Who will be the employer-of-record?</div>

        <v-radio-group v-model="programDoc.data.adks[index].offer[0].employerRecord">
          <v-radio label="My organization"></v-radio>
          <v-radio label="PilotCity (20% admin fee from total budget)"></v-radio>
        </v-radio-group>
        <!-- BREAK -->
        <div class="module-setup__question-title">What position titles can you offer?</div>
        <v-checkbox
          v-model="programDoc.data.adks[index].offer[0].intern"
          dense
          label="Intern (Recommended)"
        ></v-checkbox>
        <v-checkbox
          v-model="programDoc.data.adks[index].offer[0].fellow"
          dense
          label="Fellow (Recommended)"
        ></v-checkbox>

        <v-checkbox
          v-model="programDoc.data.adks[index].offer[0].eir"
          dense
          label="Entrepreneur-in-Residence"
        ></v-checkbox>

        <v-checkbox
          v-model="programDoc.data.adks[index].offer[0].apprentice"
          dense
          label="Apprentice"
        ></v-checkbox>
        <v-checkbox
          v-model="programDoc.data.adks[index].offer[0].preApprentice"
          dense
          label="Pre-Apprentice"
        ></v-checkbox>
        <v-checkbox
          v-model="programDoc.data.adks[index].offer[0].preInternship"
          dense
          label="Pre-Internship"
        ></v-checkbox>

        <!-- BREAK -->
        <div class="module-setup__question-title">
          Is there possibility of continuation or re-hire?
        </div>

        <v-radio-group v-model="programDoc.data.adks[index].offer[0].continuation">
          <v-radio label="Yes (Recommended)"></v-radio>
          <v-radio label="No"></v-radio>
        </v-radio-group>
        <!-- BREAK -->

        <div class="module-setup__question-title">
          What compensation arrangements can you offer?
        </div>
        <v-checkbox
          v-model="programDoc.data.adks[index].offer[0].compensation1"
          dense
          label="$250 Stipend (+20% PilotCity admin)"
        ></v-checkbox>
        <v-checkbox
          v-model="programDoc.data.adks[index].offer[0].compensation2"
          dense
          label="$350 Stipend (+20% PilotCity admin)"
        ></v-checkbox>
        <v-checkbox
          v-model="programDoc.data.adks[index].offer[0].compensation3"
          dense
          label="$500 Stipend (+20% PilotCity admin)"
        ></v-checkbox>
        <v-checkbox
          v-model="programDoc.data.adks[index].offer[0].compensation4"
          dense
          label="$595 Stipend (+20% PilotCity admin, Recommended)"
        ></v-checkbox>
        <v-checkbox
          v-model="programDoc.data.adks[index].offer[0].compensation5"
          dense
          label="W2 Employee (Minimum wage or more)"
        ></v-checkbox>
        <v-checkbox
          v-model="programDoc.data.adks[index].offer[0].compensation6"
          dense
          label="Unpaid ($0)"
        ></v-checkbox>
        <!-- BREAK -->
        <div class="module-setup__question-title">
          What is the minimum & maximum compensation budget?
        </div>
        <v-row class="d-flex mt-3">
          <v-select
            v-model="programDoc.data.adks[index].offer[0].minimumBudget"
            :items="minBudget"
            label="Minimum"
            outlined
          ></v-select>
          <div class="ml-3 mr-3"></div>
          <v-select
            v-model="programDoc.data.adks[index].offer[0].maximumBudget"
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
            <v-dialog
              ref="dialog"
              v-model="modal1"
              :return-value.sync="date1"
              persistent
              width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="programDoc.data.adks[index].offer[0].internshipStart"
                  outlined
                  label="Start Date"
                  append-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="programDoc.data.adks[index].offer[0].internshipStart"
                scrollable
              >
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="modal1 = false"> Cancel </v-btn>
                <v-btn text color="primary" @click="modal1 = false"> OK </v-btn>
              </v-date-picker>
            </v-dialog>
          </v-col>

          <v-col class="mt-3">
            <v-dialog
              ref="dialog"
              v-model="modal2"
              :return-value.sync="date2"
              persistent
              width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="programDoc.data.adks[index].offer[0].internshipEnd"
                  outlined
                  label="End Date"
                  append-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="programDoc.data.adks[index].offer[0].internshipEnd"
                scrollable
              >
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="modal2 = false"> Cancel </v-btn>
                <v-btn text color="primary" @click="modal2 = false"> OK </v-btn>
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
            v-model="programDoc.data.adks[index].offer[0].daysPerWeek"
            :items="daysPerWeek"
            label="Days per week?"
            outlined
          ></v-select>
          <div class="ml-3 mr-3"></div>
          <v-select
            v-model="programDoc.data.adks[index].offer[0].hoursPerDay"
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
                v-model="programDoc.data.adks[index].offer[0].acceptanceDeadline"
                outlined
                label="Acceptance deadline"
                append-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="programDoc.data.adks[index].offer[0].acceptanceDeadline"
              scrollable
            >
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

        <div center class="module-setup__save-button">
          <v-btn
            center
            class="mt-12"
            x-large
            outlined
            depressed
            :loading="loading"
            @click="process()"
            >Save</v-btn
          >
        </div>
        <v-alert v-if="success || error" :type="success ? 'success' : 'error'">{{
          message
        }}</v-alert>
      </div>
    </v-container>
  </ValidationObserver>
</template>

<script lang="ts">
import { defineComponent, ref, computed, PropType, toRefs, reactive } from '@vue/composition-api';
import { createLoader, getModAdk } from 'pcv4lib/src';
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
      return obj.name === 'offer';
    });
    const initOfferSetup = {
      offer: [
        {
          internshipProject1: false,
          internshipProject2: true,
          internshipProject3: false,
          licenseRequirement: 1,
          employerRecord: 1,
          intern: true,
          fellow: true,
          eir: false,
          apprentice: false,
          preApprentice: false,
          preInternship: false,
          continuation: 1,
          compensation1: false,
          compensation2: false,
          compensation3: false,
          compensation4: true,
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

    const setup = reactive({
      minBudget,
      maxBudget,
      daysPerWeek,
      hoursPerDay
    });

    const date = ref('');
    const modal = ref('');
    const date1 = ref('');
    const modal1 = ref('');
    const date2 = ref('');
    const modal2 = ref('');

    programDoc.value.data.adks[index] = {
      ...initOfferSetup,
      ...programDoc.value.data.adks[index]
    };
    // Handle Save

    function populate() {
      programDoc.value.data.adks[index].offer.push(initOfferSetup.offer[0]);
    }
    console.log(programDoc.value.data.adks[index].offer[0].hoursPerDay);

    return {
      ...toRefs(setup),
      programDoc,
      index,
      populate,
      ...createLoader(programDoc.value.save, 'Saved Successfully', 'Could not save at this time'),
      date,
      modal,
      date1,
      modal1,
      date2,
      modal2
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
  &__save-button {
    display: flex;

    justify-content: center;
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
