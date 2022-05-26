<template>
  <div class= "mainCalculator">
    <div>
      <CalculatorTitle/>
      <CalculatorScreen/>
      <div class = "calculatorGrid">
        <CalcGridRow 
          v-for="row in this.getCalcGrid.views" 
          :key="row.index"
          :calcRow="row" 
          @button-press="changeCalcScreen"/>
      </div>
    </div>
  </div>
</template>


<script>
import {findId, findByProperty,changeCalcScreen } from '@/utils/calculatorFunctions';
import buildingBlocks from '../../buildingBlocks';
import CalcGridRow from './CalcRow.vue';
import CalculatorScreen from './CalculatorScreen.vue';
import CalculatorTitle from './CalculatorTitle.vue';
import {mapMutations, mapGetters } from 'vuex';
export default {
  name: 'calculator',
  components: {
    CalcGridRow,
    CalculatorTitle,
    CalculatorScreen
  },
  data() {
    return {
        showingOnCalcScreen: 5,
        isStratedNewNumber: true,
        lastNumber: 0,
        lastOperation: '',
        is_the_first_time: true,
        numToDivideBy: 10,
        theNumberIsDouble:false
    }   
  },
  computed: {
    ...mapGetters['getShowingOnScreen',{calcGrid: 'getCalcGrid'}],
    calcTitleObj () {
      return findId(buildingBlocks, 'calc_title');
    },
    calcTitle (){
      return findByProperty(this.calcTitleObj, 'text').value;
    },
    calcAmountObj () {
      return findId(buildingBlocks, 'calc_amount');
    },
    calcAmount () {
      return findByProperty(this.calcAmountObj,'text').value;
    },
    calcGrid () {
      return findId(buildingBlocks, 'calc_row_grid_block');
    },
    getCalcGrid (){
      return this.calcGrid;
    },
  },
  methods:{
    ...mapMutations([
      'setCalcTitle',
      'setShowingOnScreen',
      'setCalcGrid'
    ]),
    changeCalcScreen(calc_button_element) {
      this.setShowingOnScreen({showingOnScreen: changeCalcScreen(calc_button_element)})
    }
  },
  beforeMount() {
    this.setCalcTitle({title:this.calcTitle});

    this.setShowingOnScreen({showingOnScreen: this.calcAmount});

    this.setCalcGrid({calcGrid: this.calcGrid});
  }
}

</script>

<style>
.mainCalculator {
  background-color:#457b9d;
  width: 600px;
  margin-left: 550px;
  margin-top: 50px;
  border-radius: 7px;
}
.calculatorGrid {
  background-color:#1d3557;
  padding: 5px;
  margin: 15px 0px;
  border-radius: 5px;
}
</style>

