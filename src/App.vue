<template>
  <div>
    <calc-text :text_element="this.calc.views[0]"></calc-text>
    <calc-text :text_element="this.calc.views[1]"></calc-text>
    <calc-row v-for="row in this.calc.views[2].views[0].views" :key="row.index" :calc_row="row"></calc-row>
  </div>
</template>


<script>
import input from '../input.json'
import CalcRow from './components/CalcRow.vue'
import CalcText from './components/CalcText.vue'
export default {
  components: { CalcText, CalcRow },
  
  
   props:[
        
    ],
  data() {
    return {
        calc: input

    }
    },
    methods:{
     
    }
}
</script>

<style>

</style>

