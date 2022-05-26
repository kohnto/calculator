<template>
    <div class = "calcScreen">
        {{getShowingOnScreen}}
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
    export default {
        name: 'CalculatorScreen',
        computed: {
            ...mapGetters({ShowingOnScreen: 'getShowingOnScreen'}),
            getShowingOnScreen() {
                return this.ShowingOnScreen;
            }
        }
    }
    
</script>

<style>
    div.calcScreen {
        color: #ffffff;
        background-color: #1d3557;
        margin: 15px 0px;
        padding: 4px;
        font-size: 30px;
        border-radius: 5px;
        text-align: right;
    }

</style>