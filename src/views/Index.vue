<template>
  <q-card class="row">
    <h1 class="left border fit" :class="justifyClass()">{{ justify }}</h1>
  </q-card>
  <div class="column">
    <input type="text" v-model="divName" @keyup.down="addDiv" class="col-12" />
    <input
      type="number"
      v-model="offsetLeft"
      @keyup.enter="addDiv"
      class="col-12"
    />
    <input type="text" v-model="color" @keyup.enter="addDiv" class="col-12" />

    <div class="q-gutter-sm">
      <q-radio
        v-model="justify"
        checked-icon="task_alt"
        unchecked-icon="panorama_fish_eye"
        val="left"
        label="Left"
      />
      <q-radio
        v-model="justify"
        checked-icon="task_alt"
        unchecked-icon="panorama_fish_eye"
        val="center"
        label="Center"
      />
      <q-radio
        v-model="justify"
        checked-icon="task_alt"
        unchecked-icon="panorama_fish_eye"
        val="right"
        label="Right"
      />
    </div>
  </div>
  <q-btn @click="addDiv">Add Div</q-btn>

  <q-btn @click="submit">Salvar</q-btn>
</template>
<script lang="ts">
type Positions = 'left' | 'center' | 'right';
const divName = ref('onze');
const justify = ref<Positions>('left');
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
      justifyClass() {
        return `text-${justify.value}`;
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
