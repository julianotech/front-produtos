<template>
  <div class="row">
    <h1 class="fit" :class="justify">{{ justify }}</h1>
  </div>
  <div class="column">
    <input type="text" v-model="divName" @keyup.down="addDiv" class="col-12" />
    <input
      type="number"
      v-model="offsetLeft"
      @keyup.enter="addDiv"
      class="col-12"
    />
    <input type="text" v-model="color" @keyup.enter="addDiv" class="col-12" />

    <TextJustify @justify="justifyClass" />
  </div>
  <q-btn @click="addDiv">Add Div</q-btn>

  <q-btn @click="submit">Salvar</q-btn>
</template>
<script lang="ts">
import type { Positions, Justify } from '../contracts';
const divName = ref('onze');
const justify = ref<Justify>('text-left');
const offsetLeft = ref<string>('');
const color = ref('');
const form = reactive<HTMLDivElement[]>([]);

export default defineComponent({
  name: 'Index',
  setup() {
    return {
      divName,
      justify,
      offsetLeft,
      justifyClass(position: Positions) {
        justify.value = `text-${position}`;
      },
      offsetResult() {
        return Number(offsetLeft.value) + 'px';
      },
      color,
      addDiv() {
        const div = document.createElement('div');
        div.innerHTML = divName.value;
        div.classList.add('border');
        div.classList.add('text-center');
        document.body.appendChild(div);
        divName.value = '';
        form.push(div);
      },
      submit() {
        form.forEach(console.log);
      },
    };
  },
});
</script>

<style scoped>
.left {
  padding-top: v-bind(offsetResult());
  color: v-bind(color);
}
</style>
