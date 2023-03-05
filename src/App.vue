<template>
<div id="container">
        <h1>Bienvenue au juste prix !</h1>
        <form>
            <input :class="{badInput: showError}" v-model="choosenNumber" id="price" placeholder="Devinez le prix! (entre 1 et 1000€)" autofocus> //! mettre la classe bad-imput si event bad-input
            <p v-if="showError===true" @bad-input="detectError" id="error">Veuillez saisir un nombre entre 1 et 1000.</p>
            <div>
                <button @click="verifyInput" type="button" id='tester'> //! Voir comment récupérer la valeur de l'input dans les param de la fonction
                    <span>Tester</span>
                </button>
                <button type="button" id="recommencer">
                    <span>Recommencer</span>
                </button>
            </div>
        </form>
    </div>
    <div id="instructions" :class="{class1: selectCard1}">
        <!--Sert à insérer les div de classes "instructions-more", "instructions-less" ou "instructions-success" en fonction du prix saisi par l'utilisateur-->
    </div>
</template>

<script>
  export default {
    data() {
      return {
        showError: false,
        randomNumber: Math.floor(Math.random()*1000),
        isImputDisable: false,
        isButtonDisable: false,
      }
    },
    methods: {
      detectError() {
        this.showError = !this.showError;
      },
      verifyInput(input) {
        if (isNaN(input)) {
          this.showError=true;
        } else {
          this.showError=false;
          this.$refs.Indication.verifyTry();
        }
      },
    }
  }
</script>

<style>

</style>
