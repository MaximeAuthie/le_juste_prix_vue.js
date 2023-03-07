<template>
  <div id="container">
    <h1>Bienvenue au juste prix !</h1>
    <price-form
      :disabled="isDisabled"
      :error="showError"
      @try-click="verifyInputButton"
      @retry-click="retry"
    ></price-form>
  </div>
  <div-indication
    v-for="aTry in tryList"
    :key="aTry.id"
    :classMore="more"
    :classLess="less"
    :classSuccess="success"
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
      success: false,
      more: false,
      less: false,
      tryCounter: 0,
      message: "",
      tryList: [],
    };
  },

  methods: {
    detectError() {
      this.showError = !this.showError;
    },

    verifyInputButton(input) {
      if (isNaN(input)) {
        this.showError = true;
      } else if (input < 0 || input > 1000) {
        this.showError = true;
      } else {
        this.showError = false;
        this.verifyTry(input);
      }
    },

    verifyTry(number) {
      if (number < this.targetNumber && number > 0) {
        this.tryCounter += 1;
        this.message = "Essai " + this.tryCounter + " (" + number + ") : C'est plus!";
        this.more = true;
        this.less = false;
        this.success = false;
      } else if (number > this.targetNumber && number < 1000) {
        this.tryCounter += 1;
        this.message = "Essai " + this.tryCounter + " (" + number + ") : C'est moins!";
        this.less = true;
        this.more = false;
        this.success = false;
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
        this.less = false;
        this.more = false;
        this.success = true;
        this.isDisabled = true;
      }
      const tryObject = {
        id: this.tryCounter,
        number: number,
        message: this.message,
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
