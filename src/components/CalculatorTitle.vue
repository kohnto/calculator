<template>
    <div class="title">{{getCalcTitle}}</div>
</template>

<script>
import { mapGetters } from 'vuex';
    export default {
        name: 'CalculatorTitle',
        computed: {
            ...mapGetters({calcTitle: 'getCalcTitle' }),
            getCalcTitle() {
                return this.calcTitle;
            }
        }
    }
</script>

<style>
    div.title {
        color:#ffffff;
        font-size: 25px
    }
</style>