<template>
  <div class="table-view">
    <v-data-table
      :headers="header"
      :items="tableContents"
      sort-by="resource"
      items-per-page="100"
      hide-default-footer="true"
    >
      <template v-slot:item.complete>
        <v-checkbox class="check-box"></v-checkbox>
      </template>
    </v-data-table>
  </div>
</template>

<script lang="ts">
import { ref } from '@vue/composition-api';
import { tableContents, HEADER } from './const';

export default {
  name: 'TableView',
  setup() {
    return { header: ref(HEADER), tableContents };
  }
};
</script>

<style lang="scss">
.check-box {
  display: flex;
  margin-left: 100px;
}
</style>
