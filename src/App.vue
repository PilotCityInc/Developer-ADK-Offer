<template>
  <v-app>
    <Module
      v-model="programDocStub"
      :student-doc="studentDoc"
      :user-type="userTypeStub"
      @inputStudentDoc="studentDoc = $event"
    />
  </v-app>
</template>

<script lang="ts">
// import ApolloExample from './components/ApolloExample.vue';
import { defineComponent, Ref, ref } from '@vue/composition-api';
import Module from './Module/Module.vue';
import MongoDoc from './Module/types';

export default defineComponent({
  name: 'App',

  components: {
    Module
  },
  setup() {
    const programDocStub: Ref<MongoDoc> = ref({
      data: {
        adks: [
          {
            offer: [
              {
                internshipProject1: true,
                internshipProject2: false,
                internshipProject3: false,
                licenseRequirement: 0,
                employerRecord: 0,
                intern: true,
                fellow: true,
                eir: false,
                apprentice: false,
                preApprentice: false,
                preInternship: false,
                continuation: true,
                compensation1: false,
                compensation2: false,
                compensation3: false,
                compensation4: true,
                compensation5: false,
                compensation6: false,
                minimumBudget: '$1,000',
                maximumBudget: '$5,000',
                internshipStart: '2021-06-21',
                internshipEnd: '2021-08-06',
                daysPerWeek: '5 Days (Recommended)',
                hoursPerDay: '7 Hours (Recommended)',
                acceptanceDeadline: '2021-06-11',
                required: false,
                roles: []
              }
            ],
            name: 'offer'
          }
        ]
      },
      update: () => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(true);
            // reject(new Error('REJECTED'));
          }, 3000);
        });
      },
      changeStream: {}
    });
    const studentDoc: Ref<MongoDoc> = ref({
      data: {
        adks: []
      },
      update: () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(true);
            // reject(new Error('REJECTED'));
          }, 3000);
        });
      },
      changeStream: {}
    });
    const userTypeStub = 'participant';
    if (userTypeStub === 'organizer') studentDoc.value = null;
    return {
      programDocStub,
      userTypeStub,
      studentDoc
    };
  }
});
</script>
