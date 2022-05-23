<template>
  <div>
    <CalculatorTitle :title="this.calcTitle"/>
    <CalculatorScreen
      :showingOnScreen="this.showingOnCalcScreen"/>
    <CalcGridRow 
      v-for="row in this.calcGrid.views" 
      :key="row.index"
      :calcRow="row" 
      @button-press="changeCalcScreen"/>
  </div>
</template>


<script>

import buildingBlocks from '../../buildingBlocks';
import CalcGridRow from './CalcRow.vue';
import CalculatorScreen from './CalculatorScreen.vue';
import CalculatorTitle from './CalculatorTitle.vue';
export default {
    components: {
    CalcGridRow,
    CalculatorTitle,
    CalculatorScreen
},
    name: 'calculator',
    
    data() {
      return {
        showingOnCalcScreen: 0,
        isStratedNewNumber: true,
        lastNumber: 0,
        lastOperation: '',
        is_the_first_time: true,
        numToDivideBy: 10,
        theNumberIsDouble:false
      }   
    },
    computed: {
      calcTitleObj () {
        return this.findId(buildingBlocks, 'calc_title')
      },
      calcTitle () {
        return this.calcTitleObj.properties.find(property => property.name == 'text').value;
      },
      calcAmountObj () {
        return this.findId(buildingBlocks, 'calc_amount')
      },
      calcAmount () {
        return this.calcAmountObj.properties.find(property => property.name == 'text').value;
      },
      calcGrid () {
        return this.findId(buildingBlocks, 'calc_row_grid_block')
      }
    },
    methods:{
      changeCalcScreen(calc_button_element){
        let numberAction = calc_button_element.actions.find(action => action.type == 'number');
        let operatorAction = calc_button_element.actions.find(action => action.type == 'action');
        let charAction = calc_button_element.actions.find(action => action.type == 'char');
        let actionValue = numberAction !== undefined ? numberAction.value : ( operatorAction !== undefined ? operatorAction.value : charAction.value);
        if(numberAction !== undefined){//number
          
          if(this.theNumberIsDouble){ //double
            if(this.isStratedNewNumber){
              this.showingOnCalcScreen = actionValue / this.numToDivideBy;
              this.isStratedNewNumber = false;
            }
            else{
              this.showingOnCalcScreen =  this.showingOnCalcScreen + (actionValue / this.numToDivideBy);
            }
            this.numToDivideBy *= 10;
          }
          else{ //int
            if(this.isStratedNewNumber){
              this.showingOnCalcScreen = actionValue;
              this.isStratedNewNumber = false;
            }
            else{
              this.showingOnCalcScreen =  this.showingOnCalcScreen * 10 + actionValue;
            }
          }
        }
        else if(charAction != undefined){//char '.' 
          if(this.theNumberIsDouble){
            alert("wrong operation");
          }
          else{
            this.theNumberIsDouble = true
          }
        }
        else{//operator
          if(actionValue == 'reset'){//reset
            this.showingOnCalcScreen = 0;
            this.lastOperation = '';
            this.is_the_first_time = true;
            this.lastNumber = 0;
          }
          else if(actionValue == 'del'){//del
            this.showingOnCalcScreen = 0;
          }
          // else if(actionValue == 'sum'){//=
          //   this.showingOnCalcScreen = 
          // }
          else{
            if(!this.isStratedNewNumber){
              switch(this.lastOperation){
                //+
                case "plus":
                  this.showingOnCalcScreen = this.lastNumber + this.showingOnCalcScreen;
                  break;
                //-
                case "sub":
                  this.showingOnCalcScreen = this.lastNumber - this.showingOnCalcScreen;
                  break;
                //*
                case "mul":
                  this.showingOnCalcScreen = this.lastNumber * this.showingOnCalcScreen;
                  break;
                // /
                case "div":
                  this.showingOnCalcScreen = this.lastNumber / this.showingOnCalcScreen;
                  break;
              }
            }
            
            this.lastOperation = actionValue === 'sum' ? this.lastOperation : actionValue;
            this.lastNumber = actionValue === 'sum' ? this.lastNumber : this.showingOnCalcScreen;
          }
          this.numToDivideBy = 10;
          this.theNumberIsDouble = false;
          this.isStratedNewNumber = actionValue === 'sum' ? false : true;
        }
        
      },
      findId(buildingBlock, id){
        // generator
        let views = buildingBlock.views;
        if (views.length === 0) return null;
        for(let view of views){
          if (view.id === id) {
            return view;
          }
          let output = this.findId(view, id);
          if (output != null){
            return output;
          }
        }
        return null
      },
    }
}

</script>

<style>

</style>

