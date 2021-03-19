<template>
  <ValidationObserver v-slot="{}" slim>
    <!--  TODO: make the inputs into actual components -->
    <v-container class="module-instruct">
      <div class="module-instruct__container">
        <div class="module-instruct__description">
          <div class="module-instruct__description-label">
            <span>Goal</span>
            <v-dialog v-model="tutorialDialog" width="516">
              <template #activator>
                <v-tooltip right>
                  <template #activator="{ on, attrs }">
                    <v-btn v-bind="attrs" icon v-on="on"
                      ><v-icon color="grey darken-2" @click="tutorialDialog = true"
                        >mdi-youtube</v-icon
                      ></v-btn
                    >
                  </template>
                  <span>Watch video overview</span>
                </v-tooltip>
              </template>
              <v-card dark class="login__dialog">
                <div>
                  <iframe
                    width="100%"
                    height="400"
                    src="https://www.youtube.com/embed/HnEdGFhizHg"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </v-card>
            </v-dialog>
          </div>

          <v-textarea
            v-model="goal"
            rows="3"
            outlined
            class=""
            rounded
            hide-details
            dense
            auto-grow
            disabled
          ></v-textarea>
        </div>
        <div class="module-instruct__instructions">
          <div class="module-instruct__description-label">
            <span>Instructions</span>

            <v-tooltip right>
              <template #activator="{ on, attrs }">
                <a
                  href="https://discord.gg/cHMbHTKNyY"
                  target="_blank"
                  style="text-decoration: none"
                >
                  <v-btn v-bind="attrs" icon v-on="on"
                    ><v-icon color="grey darken-2">mdi-face-agent</v-icon></v-btn
                  ></a
                >
              </template>
              <span>Ask questions & get advice</span>
            </v-tooltip>
          </div>
          <div
            v-for="(i, index) in boilerInstructions"
            :key="index"
            class="module-instruct__instructions-item"
          >
            <v-avatar
              size="35"
              color="white"
              class="module-instruct__instructions-av font-weight-bold"
            >
              {{ index + 1 }}
            </v-avatar>

            <validation-provider v-slot="{ errors }" slim rules="required">
              <v-textarea
                v-model="boilerInstructions[index]"
                rows="1"
                outlined
                hide-details
                dense
                rounded
                :error-messages="errors"
                class=""
                auto-grow
                disabled
              ></v-textarea>
            </validation-provider>
          </div>

          <!-- <div>
            <v-btn
              class="module-instruct__instructions-add font-weight-black text-body-1"
              depressed
              color="white"
              :disabled="invalid"
              :ripple="false"
              @click="populate()"
            >
              <v-icon class="module-instruct__instructions-add-icon"> mdi-plus </v-icon>
            </v-btn>
          </div> -->
        </div>
      </div>
    </v-container>
  </ValidationObserver>
</template>

<script lang="ts">
import { ref, defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'ModuleInstruct',

  setup() {
    // const programDoc = computed({
    //   get: () => props.value,
    //   set: newVal => {
    //     ctx.emit('input', newVal);
    //   }
    // });
    const boilerInstructions = ref([
      'Review each item',
      'Acknowledge and agree to each item',
      'Accept or decline offer'
    ]);
    const goal = ref(['To review, acknowledge & accept offer for internship']);
    // function populate() {
    //   boilerInstructions.value.push('');
    // }

    return { boilerInstructions, tutorialDialog: false, goal };
  }
});
</script>

<style lang="scss">
.module-instruct__instructions-av {
  margin-right: 3%;
}
</style>
