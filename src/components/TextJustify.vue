<template>
  <q-btn-group push>
    <q-checkbox
      v-model="showLabelsLocal"
      @select="showLabelsLocal = !showLabelsLocal"
      label="Show Labels"
    />
    <q-btn
      v-for="position in justifyPositions"
      @click="select(position)"
      :icon="`format_align_${position}`"
      :key="position"
      :disable="position === selected"
      push
    >
      <div v-if="showLabelsLocal" class="text-white q-px-xs">
        {{ position }}
        <q-tooltip>justify {{ position }}</q-tooltip>
      </div>
    </q-btn>
  </q-btn-group>
</template>
<script lang="ts">
import type { Positions } from '../contracts';

const justifyPositions: Array<Positions> = ['left', 'center', 'right'];
const showLabelsLocal = ref<boolean>(false);
const selected = ref<string>('left');
export default defineComponent({
  name: 'TextJustify',
  setup(_, { emit }) {
    return {
      select(val: Positions) {
        selected.value = val;
        emit('justify', val);
      },
      selected,
      justifyPositions,
      showLabelsLocal,
    };
  },
});
</script>
