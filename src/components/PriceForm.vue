<template>
  <form>
    <input
      :class="{ badInput: error }"
      v-model="choosenNumber"
      :disabled="disabled"
      @keyup="verifyInputKeyUp"
      id="price"
      placeholder="Devinez le prix! (entre 1 et 1000€)"
      autofocus
    />
    <p v-if="error" id="error">Veuillez saisir un nombre entre 1 et 1000.</p>
    <div>
      <button @click="eventTry" :disabled="disabled" type="button" id="tester">
        <span>Tester</span>
      </button>
      <button @click="eventRetry" type="button" id="recommencer">
        <span>Recommencer</span>
      </button>
    </div>
  </form>
</template>

<script>
export default {
  emits: ["try-click", "retry-click"],
  props: {
    disabled: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      choosenNumber: "",
      error: false,
    };
  },
  methods: {
    eventTry() {
      this.$emit("try-click", this.choosenNumber);
    },
    eventRetry() {
      this.$emit("retry-click");
    },
    verifyInputKeyUp() {
      if (isNaN(this.choosenNumber)) {
        this.error = true;
      } else if (this.choosenNumber < 0 || this.choosenNumber > 1000) {
        this.error = true;
      } else {
        this.error = false;
      }
    },
  },
};
</script>
