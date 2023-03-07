<template>
  <div id="container">
    <h1>Bienvenue au juste prix !</h1>
    <form>
      <input
        :class="{ badInput: showError }"
        v-model="choosenNumber"
        :disabled="isDisable"
        @keyup="verifyInputKeyUp(choosenNumber)"
        id="price"
        placeholder="Devinez le prix! (entre 1 et 1000€)"
        autofocus
      />
      <p v-if="showError" id="error">Veuillez saisir un nombre entre 1 et 1000.</p>
      <div>
        <button
          @click="verifyInputButton(choosenNumber)"
          :disabled="isDisable"
          type="button"
          id="tester"
        >
          <span>Tester</span>
        </button>
        <button @click="retry" type="button" id="recommencer">
          <span>Recommencer</span>
        </button>
      </div>
    </form>
  </div>
  <div-indication
    v-for="aTry in tryList"
    :key="aTry.id"
    :class="{ instructionMore: more, instructionLess: less, instructionSuccess: success }"
    :messageDiv="aTry.message"
  ></div-indication>
  <!--Voir pour une couelur par div-->
  <!--Sert à insérer les div de classes "instructions-more", "instructions-less" ou "instructions-success" en fonction du prix saisi par l'utilisateur-->
</template>

<script>
export default {
  data() {
    return {
      showError: false,
      targetNumber: Math.floor(Math.random() * 1000),
      isDisable: false,
      choosenNumber: 0,
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
      } else {
        this.showError = false;
        this.verifyTry(input);
      }
    },

    verifyInputKeyUp(input) {
      if (isNaN(input)) {
        this.showError = true;
      } else {
        this.showError = false;
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
        this.isDisable = true;
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
