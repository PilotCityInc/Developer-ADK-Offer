<template>
  <div>
    <v-data-table
      :headers="header"
      :items="items"
      sort-by="resource"
      items-per-page="100"
      hide-default-footer="true"
    >
      <template v-slot:item.edit>
        <v-btn depressed color="#E0E0E0" :ripple="false">Edit</v-btn>
      </template>

      <template v-slot:item.click>
        <v-btn outlined depressed x-small :ripple="false">Update</v-btn>
      </template>

      <template v-slot:item.progress>
        <v-progress-linear color="green" value="90"></v-progress-linear>
      </template>

      <template v-slot:item.status>
        <v-icon color="green" dark>mdi-checkbox-marked-circle</v-icon>

        <!-- <v-icon color="orange" dark>mdi-alert-circle</v-icon> -->
        <!-- <v-icon color="grey" dark>mdi-close-circle</v-icon> -->
      </template>

      <template v-slot:item.type>
        <!-- <v-chip color="red darken-4" dark small label disabled>Activity</v-chip> -->
        <v-chip color="purple darken-4" dark outlined small disabled>Deliverable</v-chip>
        <!-- <v-chip color="orange darken-4" dark small label disabled>Tool</v-chip> -->
      </template>

      <template v-slot:item.group>
        <v-chip color="blue darken-4" dark x-small label disabled>Research</v-chip>
      </template>
    </v-data-table>
  </div>
</template>

<script lang="ts">
import { ref } from '@vue/composition-api';
import { items, HEADER } from './const';

export default {
  name: 'TableView',
  setup() {
    return { header: ref(HEADER), items };
  }
};
</script>
