<template>
  <ValidationObserver v-slot="{ invalid }" slim>
    <!--  TODO: make the inputs into actual components -->
    <v-container class="module-instruct">
      <div class="module-instruct__container">
        <div class="module-instruct__description">
          <div class="module-instruct__description-label">
            <span>Goal</span>
          </div>

          <v-textarea
            v-model="goal"
            row-height="3"
            rows="3"
            outlined
            class="font-weight-black text-body-1"
          ></v-textarea>
        </div>
        <div class="module-instruct__instructions">
          <div class="module-instruct__description-label">
            <span>Instructions</span>
          </div>
          <div
            v-for="(i, index) in offerInstructions"
            :key="index"
            class="module-instruct__instructions-item"
          >
            <v-avatar
              size="35"
              class="module-instruct__instructions-av font-weight-black text-caption d-none d-sm-flex"
            >
              {{ index + 1 }}
            </v-avatar>

            <validation-provider v-slot="{ errors }" slim rules="required">
              <v-textarea
                v-model="offerInstructions[index]"
                row-height="3"
                rows="1"
                outlined
                :error-messages="errors"
                class="font-weight-black text-body-1"
              ></v-textarea>
            </validation-provider>
          </div>

          <div>
            <v-btn
              class="module-instruct__instructions-add font-weight-black text-body-1"
              depressed
              :disabled="invalid"
              :ripple="false"
              @click="populate()"
            >
              <v-icon class="module-instruct__instructions-add-icon"> mdi-plus </v-icon>
            </v-btn>
          </div>
        </div>
      </div>
    </v-container>
  </ValidationObserver>
</template>

<script lang="ts">
import { ref,defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'ModuleInstruct',
  data: ()=>({
      offerInstructions:[''],
      goal:[''],
  }),
  methods:{
      populate(){
          this.offerInstructions.value.push('')
      }
  }
//   setup() {
//     const offerInstructions = ref(['']);
//     const goal = ref(['']);
//     function populate() {
//       offerInstructions.value.push('');
//     }
//     return { offerInstructions, populate, goal };
//   }
});
</script>

<style lang="scss">
.module-instruct__instructions-av {
  margin-right: 3%;
}
</style>
