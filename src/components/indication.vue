<template>
    <div id="instructions">
        <!--Sert à insérer les div de classes "instructions-more", "instructions-less" ou "instructions-success" en fonction du prix saisi par l'utilisateur-->
    </div>
</template>
<script>
    export default {
        data() {
            return {
            showError: false,
            choosenNumber: 0,
            success: false,
            more: false,
            less: false,
            choosenNumber: 0,
            tryCounter: 0,
            message:'',
            }
        },
        props: {
            targetNumber: {
                type: Number,
                required:true,
            }
        },
        emits: ["bad-input","success"],
        methods: {
            verify (number) {
                if (number < this.targetNumber && number > 0) {
                    this.tryCounter+= 1;
                    this.message = "Essai " + tryCounter + " (" + number +") : C'est plus!";
                    this.more=true;
                    this.less=false;
                    this.success=false;
                } else if (number > this.targetNumber && number < 1000) {
                    tryCounter += 1;
                    this.message = "Essai " + this.tryCounter + " (" + number +") : C'est moins!";
                    this.less=true;
                    this.more=false;
                    this.success=false;
                } else if (number < 0) {
                    this.$emit("bad-input");
                } else if (number > 1000) {
                    this.$emit("bad-input");
                } else {
                    tryNumner += 1;
                    this.message = "Essai " + this.tryCounter + " (" + number +") : Félications! Vous venez de trouver le Juste Prix!!!";
                    this.less=false;
                    this.more=false;
                    this.success=true;
                    this.$emit("success");
                }
            }
        }
    }
</script>