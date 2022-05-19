<template>
  <div>
      <calc-grid v-if="calc_element.id == 'calc_row_grid_block'" calc_grid=calc_element></calc-grid>
      <calc-text v-else-if="calc_element.id == 'calc_title' || calc_element.id == 'calc_amount'" text_element=calc_element></calc-text>
      <calc-button v-else button_text=calc_element></calc-button>
  </div>
</template>

<script>
import CalcButton from './CalcButton.vue'
import CalcGrid from './CalcGrid.vue'
import CalcText from './CalcText.vue'
export default {
  components: { CalcGrid, CalcText, CalcButton },
    props:[
        'block_element'
    ],
    data() {
        return {
            calc_element:this.calc_element
        }
    }
}
</script>

<style>

</style>