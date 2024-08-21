<template>
  <q-toggle
    v-model="value"
    size="xl"
    :icon="themeIcon"
    :color="textColor"
    @click="toggleDark()"
  />
</template>
<script setup lang="ts">
const value = ref(false);

function toggleDark() {
  //TODO:  implement dark mode
  value.value = !value.value;
}
</script>
