<template>
  <div id="container">
    <h1>Bienvenue au juste prix !</h1>
    <price-form
      :disabled="isDisabled"
      :error="showError"
      @try-click="verifyTry"
      @retry-click="retry"
    ></price-form>
  </div>
  <div-indication
    v-for="aTry in tryList"
    :key="aTry.id"
    :class="aTry.tryClass"
    :messageDiv="aTry.message"
  ></div-indication>
  <!--Sert à insérer les div de classes "instructions-more", "instructions-less" ou "instructions-success" en fonction du prix saisi par l'utilisateur-->
</template>

<script>
export default {
  data() {
    return {
      targetNumber: Math.floor(Math.random() * 1000),
      isDisabled: false,
      tryCounter: 0,
      message: "",
      showError: false,
      class: "",
      tryList: [],
    };
  },

  methods: {
    detectError() {
      this.showError = !this.showError;
    },

    verifyTry(number) {
      if (number < this.targetNumber && number >= 0) {
        this.tryCounter += 1;
        this.message = "Essai " + this.tryCounter + " (" + number + ") : C'est plus!";
        this.class = "instructionLess";
      } else if (number > this.targetNumber && number <= 1000) {
        this.tryCounter += 1;
        this.message = "Essai " + this.tryCounter + " (" + number + ") : C'est moins!";
        this.class = "instructionMore";
      } else if (number < 0) {
        this.showError = true;
      } else if (number > 1000) {
        this;
        this.showError = true;
      } else {
        this.tryCounter++;
        this.message =
          "Essai " +
          this.tryCounter +
          " (" +
          number +
          ") : Félications! Vous venez de trouver le Juste Prix!!!";
        this.class = "instructionSuccess";
        this.isDisabled = true;
      }
      const tryObject = {
        id: this.tryCounter,
        number: number,
        message: this.message,
        tryClass: this.class,
      };
      this.tryList.unshift(tryObject);
    },

    retry() {
      location.reload();
    },
  },
};
</script>

<style></style>
