<template>
  <div>
    <calc-row v-for="calc_row in calc_grid.views" :key="calc_row.id" calc_row= calc_row></calc-row>
  </div>
</template>

<script>
import CalcRow from './CalcRow.vue'
export default {
  components: { CalcRow },
    props:[
        'calc_grid'
    ],
  data() {
    return {
      calc_grid:this.calc_grid
    }
    }
}
</script>

<style>

</style>