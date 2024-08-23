<template>
  <div class="row">
    {{ user }}
  </div>
</template>
<script lang="ts">
import type { UserQuery } from '~types';

const result = await query<UserQuery>({ query: UserDocument });

export default defineComponent({
  name: 'Index',
  setup() {
    return {
      user: result?.user,
    };
  },
});
</script>
