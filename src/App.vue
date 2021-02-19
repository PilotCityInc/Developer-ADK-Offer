<template>
  <v-app>
    <Module v-model="programDocStub" />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
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
        adks: []
      },
      save: () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(true);
            // reject(new Error('REJECTED'));
          }, 3000);
        });
      },
      changeStream: {}
    });
    return {
      programDocStub
    };
  }
});
</script>
