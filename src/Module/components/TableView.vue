<template>
  <div class="table-view">
    <v-data-table
      :headers="header"
      :items="tableContents"
      sort-by="resource"
      :items-per-page="test"
      :hide-default-footer="test1"
    >
      <template v-slot:item.complete>
        <v-checkbox></v-checkbox>
      </template>
    </v-data-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, PropType, toRefs, reactive } from '@vue/composition-api';
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
    const programDoc = computed({
      get: () => props.value,
      set: newVal => {
        ctx.emit('input', newVal);
      }
    });
    const index = programDoc.value.data.adks.findIndex(function findOfferObj(obj) {
      return obj.name === 'offer';
    });

    const initOfferSetup = reactive({
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
    });

    // programDoc.value.data.adks[index] = {
    //   ...initOfferSetup,
    //   ...
    //   ...programDoc.value.data.adks[index]
    // };

    const test = 100;
    const test1 = true;

    const tableContents = [
      {
        terms: 'Internship Project',
        questionaries:
          'I acknowledge my task will be to further prototype and pilot your carry-over project and/or complete assigned tasks & projects; or will be to further prototype and pilot your carry-over project; or will be to further prototype, pilot and/or productize your carry-over project'
      },
      {
        terms: 'Drivers License / Car',
        questionaries: `I acknowledge a driver's license and/or car `
      },
      {
        terms: 'Employer-of-Record',
        questionaries: 'I acknowledge PilotCity will be the employer-of-record'
      },
      {
        terms: 'Employer-of-Record',
        questionaries: 'I acknowledge the employer will be the employer-of-record'
      },
      {
        terms: 'Position Title',
        questionaries:
          'I acknowledge my position title will be either: Intern, Fellow, Entrepreneur-in-Residence, Apprentice, Pre-Apprentice, or Pre-Internship'
      },
      {
        terms: 'Continuation Possibility',
        questionaries: 'I acknowledge there may be a continuation or re-hire possibility'
      },
      {
        terms: 'Compensation',
        questionaries:
          'I acknowledge the following compensation options: $250 Stipend, $350 Stipend, $500 Stipend, $595 Stipend, Minimum Wage, or Unpaid'
      },
      {
        terms: 'Start Date',
        questionaries: 'I acknowledge the start date will be: '
      },
      { terms: 'End Date', questionaries: 'I acknowledge the end date will be: 08/06/2021' },
      { terms: 'Days Per Week', questionaries: 'I acknowledge I will work up to: 5 Days Per Week' },
      { terms: 'Hours Per Day', questionaries: 'I acknowledge I will work up to: 8 Hours Per Day' }
    ];

    programDoc.value.data.adks[index] = {
      ...initOfferSetup,
      ...tableContents,
      ...programDoc.value.data.adks[index]
    };

    function populate() {
      programDoc.value.data.adks[index].offer.push(initOfferSetup.offer[0]);
      programDoc.value.data.adks[index].offer.push(tableContents);
    }

    // function populate() {
    //   programDoc.value.data.adks[index].research.push(initOfferSetup.offer[0]);
    // }

    return { programDoc, header: ref(HEADER), tableContents, populate, test, test1 };
  }
});
</script>

<style lang="scss">
.check-box {
  display: flex;
  margin-left: 100px;
}
</style>
