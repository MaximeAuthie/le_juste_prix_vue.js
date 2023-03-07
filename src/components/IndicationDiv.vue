<template>
  <div id="instructions">{{ messageDiv }}</div>
</template>

<script>
export default {
  props: {
    messageDiv: {
      type: String,
      required: true,
    },
  },
  methods: {},
};
</script>
