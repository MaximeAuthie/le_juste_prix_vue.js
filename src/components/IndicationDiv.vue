<template>
  <div
    id="instructions"
    :class="{
      instructionMore: classMore,
      instructionLess: classLess,
      instructionSuccess: classSuccess,
    }"
  >
    {{ messageDiv }}
  </div>
</template>

<script>
export default {
  props: {
    messageDiv: {
      type: String,
      required: true,
    },
    classMore: {
      type: String,
      required: true,
    },
    classLess: {
      type: String,
      required: true,
    },
    classSuccess: {
      type: String,
      required: true,
    },
  },
  methods: {},
};
</script>
