<template>
  <div class="table-view">
    <v-data-table
      v-model="programDoc.data.adks[index].offer"
      :headers="header"
      :items="tableContents"
      sort-by="resource"
      :items-per-page="100"
      :hide-default-footer="true"
    >
      <template v-slot:item.complete>
        <v-checkbox></v-checkbox>
      </template>
    </v-data-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, PropType } from '@vue/composition-api';
import { HEADER } from './const';
import MongoDoc from '../types';

export default defineComponent({
  name: 'TableView',
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
          licenseRequirement: 1,
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

    function populate() {
      programDoc.value.data.adks[index].offer.push(initOfferSetup.offer[0]);
    }

    let internshipProjectTerm1 = '';
    let internshipProjectTerm2 = '';
    let internshipProjectTerm3 = '';
    let driversLicenseTerm = '';
    let employerRecordTerm = '';
    let internTerm = '';
    let fellowTerm = '';
    let eirTerm = '';
    let apprenticeTerm = '';
    let preApprenticeTerm = '';
    let preInternshipTerm = '';
    let continuationPossibilityTerm = '';
    let compensation1Term = '';
    let compensation2Term = '';
    let compensation3Term = '';
    let compensation4Term = '';
    let compensation5Term = '';
    let compensation6Term = '';
    let internshipProjectTermMain = '';
    // const driversLicenseTermMain = '';
    // const employerRecordTermMain = '';
    // const eirTermMain = '';
    // const positionTitleMain = '';
    // const continuationPossibilityTermMain = '';
    // const compensationTermMain = '';
    // const startDateMain = '';
    // const endDateMain = '';
    // const daysPerWeekMain = '';
    // const hoursPerDayMain = '';

    if (programDoc.value.data.adks[index].offer[0].internshipProject1 === true) {
      internshipProjectTerm1 =
        'further prototype and pilot your carry-over project and/or complete assigned tasks & projects;';
    } else {
      internshipProjectTerm1 = '';
    }

    // console.log(programDoc.value.data.adks[index].offer.internshipProject1);

    if (programDoc.value.data.adks[index].offer[0].internshipProject2 === true) {
      internshipProjectTerm2 = 'or will be to further prototype and pilot your carry-over project;';
    } else {
      internshipProjectTerm2 = '';
    }

    if (programDoc.value.data.adks[index].offer[0].internshipProject3 === true) {
      internshipProjectTerm3 =
        'or will be to further prototype, pilot and/or productize your carry-over project';
    } else {
      internshipProjectTerm3 = '';
    }

    if (programDoc.value.data.adks[index].offer[0].licenseRequirement === 1) {
      driversLicenseTerm = 'I acknowledge a driving license and/or car is required';
    } else if (programDoc.value.data.adks[index].offer[0].licenseRequirement === 0) {
      driversLicenseTerm = 'I acknowledge a driving license and/or car is NOT required';
    } else {
      driversLicenseTerm = '';
    }

    if (programDoc.value.data.adks[index].offer[0].employerRecord === 1) {
      employerRecordTerm = 'the employer';
    } else {
      employerRecordTerm = 'PilotCity';
    }

    if (programDoc.value.data.adks[index].offer[0].intern === true) {
      internTerm = 'Intern,';
    } else {
      internTerm = '';
    }

    if (programDoc.value.data.adks[index].offer[0].fellow === true) {
      fellowTerm = 'Fellow,';
    } else {
      fellowTerm = '';
    }

    if (programDoc.value.data.adks[index].offer[0].eir === true) {
      eirTerm = 'Entreprenur in Residence,';
    } else {
      eirTerm = '';
    }

    if (programDoc.value.data.adks[index].offer[0].apprentice === true) {
      apprenticeTerm = 'Apprentice,';
    } else {
      apprenticeTerm = '';
    }

    if (programDoc.value.data.adks[index].offer[0].preApprentice === true) {
      preApprenticeTerm = 'Pre-Apprentice,';
    } else {
      preApprenticeTerm = '';
    }

    if (programDoc.value.data.adks[index].offer[0].preInternship === true) {
      preInternshipTerm = 'Pre-Internship';
    } else {
      preInternshipTerm = '';
    }

    if (programDoc.value.data.adks[index].offer[0].continuation === false) {
      continuationPossibilityTerm = 'will NOT';
    } else {
      continuationPossibilityTerm = 'may';
    }

    if (programDoc.value.data.adks[index].offer[0].compensation1 === true) {
      compensation1Term = '$250,';
    } else {
      compensation1Term = '';
    }
    if (programDoc.value.data.adks[index].offer[0].compensation2 === true) {
      compensation2Term = '$350,';
    } else {
      compensation2Term = '';
    }
    if (programDoc.value.data.adks[index].offer[0].compensation3 === true) {
      compensation3Term = '$500,';
    } else {
      compensation3Term = '';
    }
    if (programDoc.value.data.adks[index].offer[0].compensation4 === true) {
      compensation4Term = '$595,';
    } else {
      compensation4Term = '';
    }
    if (programDoc.value.data.adks[index].offer[0].compensation5 === true) {
      compensation5Term = 'W2 Employee,';
    } else {
      compensation5Term = '';
    }
    if (programDoc.value.data.adks[index].offer[0].compensation6 === true) {
      compensation6Term = 'Unpaid ($0)';
    } else {
      compensation6Term = '';
    }
    if (
      programDoc.value.data.adks[index].offer[0].internshipProject1 === false &&
      programDoc.value.data.adks[index].offer[0].internshipProject2 === false &&
      programDoc.value.data.adks[index].offer[0].internshipProject3 === false
    ) {
      internshipProjectTermMain = '';
    } else {
      internshipProjectTermMain = 'I acknowledge my task will be to ';
    }
    // if (programDoc.value.data.adks[offerData].offer.intern === '' && )

    // console.log();
    console.log(programDoc.value.data.adks[index].offer[0].internshipStart);
    console.log(programDoc.value.data.adks[index].offer[0].internshipEnd);
    // programDoc.value.data.adks[index] = {
    //   ...initOfferSetup
    // ...tableContents,
    // ...programDoc.value.data.adks[index]
    // };

    const tableContents = [
      {
        terms: 'Internship Project',
        questionaries: `${internshipProjectTermMain} ${internshipProjectTerm1} ${internshipProjectTerm2} ${internshipProjectTerm3}`
      },
      {
        terms: 'Drivers License / Car',
        questionaries: driversLicenseTerm
      },
      {
        terms: 'Employer-of-Record',
        questionaries: `I acknowledge ${employerRecordTerm} will be the employer-of-record`
      },
      {
        terms: 'Position Title',
        questionaries: `I acknowledge my position title will be either: ${internTerm} ${fellowTerm} ${eirTerm} ${apprenticeTerm} ${preApprenticeTerm} ${preInternshipTerm}`
      },
      {
        terms: 'Continuation Possibility',
        questionaries: `I acknowledge there ${continuationPossibilityTerm} be a continuation or re-hire possibility`
      },
      {
        terms: 'Compensation',
        questionaries: `I acknowledge the following compensation options: ${compensation1Term} ${compensation2Term} ${compensation3Term} ${compensation4Term} ${compensation5Term} ${compensation6Term}`
      },
      {
        terms: 'Start Date',
        questionaries: `I acknowledge the start date will be: ${programDoc.value.data.adks[index].offer[0].internshipStart}`
      },
      {
        terms: 'End Date',
        questionaries: `I acknowledge the end date will be: ${programDoc.value.data.adks[index].offer[0].internshipEnd}`
      },
      {
        terms: 'Days Per Week',
        questionaries: `I acknowledge I will work up to: ${programDoc.value.data.adks[index].offer[0].daysPerWeek} Per Week`
      },
      {
        terms: 'Hours Per Day',
        questionaries: `I acknowledge I will work up to: ${programDoc.value.data.adks[index].offer[0].hoursPerDay} Per Day`
      }
    ];

    return {
      programDoc,
      header: ref(HEADER),
      tableContents,
      index,
      populate
      // driversLicenseTerm,
    };
  }
});
</script>

<style lang="scss">
.check-box {
  display: flex;
  margin-left: 100px;
}
</style>
