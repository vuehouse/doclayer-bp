<script setup lang="ts">
defineProps<{
  message?: string;
}>();
</script>

<template lang="html">
  <p>
    <slot />
    <!-- 
      Utility functions are available globally, imported automatically. 
      The whole list can be found in the documentation: https://doclayer.dev/docs/utils. 
    -->
    <span v-if="message" class="ml-1" v-html="utilSafeHTML(utilMDtoHTML(message))" />
  </p>
</template>
