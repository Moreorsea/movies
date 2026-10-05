<template>index.vue
<br />
<div>
  <pre>{{ data }}</pre>
</div>
</template>

<script lang="ts" setup>
const { data } = await useFetch("/api/health");
</script>