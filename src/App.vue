<template>
  <div>
    <calc-text :text_element="this.calc_text"></calc-text>
    <calc-text v-bind="this.calc_sum" :text_element="this.calc_sum.value"></calc-text>
    <calc-row v-for="row in this.calc_grid_rows" :key="row.index" :calc_row="row" @calc-button-press="changeSum"></calc-row>
  </div>
</template>


<script>
import input from '../input.json'
import CalcRow from './components/CalcRow.vue'
import CalcText from './components/CalcText.vue'
export default {
  components: { CalcText, CalcRow },
  data() {
    return {
        calc_text: input.views[0].views[0].properties[0].value,
        calc_sum: {value: input.views[1].views[0].properties[0].value},
        calc_grid_rows: input.views[2].views[0].views,
        temp_num_pressed: '',
        last_operation: '',
        is_the_first_time: true
    }
    },
    methods:{
      changeSum(button_value){
        switch(button_value) {
                case "0":
                  this.temp_num_pressed += button_value
                  break;
                case "1":
                  this.temp_num_pressed += button_value
                  break;
                case "2":
                  this.temp_num_pressed += button_value
                  break;
                case "3":
                  this.temp_num_pressed += button_value
                  break;
                case "4":
                  this.temp_num_pressed += button_value
                  break;
                case "5":
                  this.temp_num_pressed += button_value
                  break;
                case "6":
                  this.temp_num_pressed += button_value
                  break;
                case "7":
                  this.temp_num_pressed += button_value
                  break;
                case "8":
                  this.temp_num_pressed += button_value
                  break;
                case "9":
                  this.temp_num_pressed += button_value
                  break;
                case "DEL":
                  this.temp_num_pressed = ''
                  break;
                case ".":
                  if(this.temp_num_pressed == ''){
                    alert("wrong operation")
                  }
                  else{
                    this.temp_num_pressed += button_value
                  }
                  break;
                case "RESET":
                  this.temp_num_pressed = ''
                  this.calc_sum.value = '0'
                  this.is_the_first_time = true
                  break;
                default:
                  if(this.is_the_first_time){
                    this.is_the_first_time = false
                    this.last_operation = button_value
                  }
                  this.make_last_operation(button_value)
            }
      },
      make_last_operation(button_value){
        if(this.last_operation == '' || this.temp_num_pressed == ''){
          alert("wrong operation")
        }
        switch(this.last_operation){
          case "=":
            this.calc_sum.value = this.temp_num_pressed
            this.temp_num_pressed = '0'
            this.last_operation = ''
            this.is_the_first_time = true
            break;
          case "/":
            this.calc_sum.value = (parseInt(this.calc_sum.value, 10) / parseInt(this.temp_num_pressed, 10)).toString()
            this.temp_num_pressed = '0'
            this.last_operation = button_value
            break;
          case "+":
            this.calc_sum.value = (parseInt(this.calc_sum.value, 10) + parseInt(this.temp_num_pressed, 10)).toString()
            this.temp_num_pressed = '0'
            this.last_operation = button_value           
            break;
          case "-":            
            this.calc_sum.value = (parseInt(this.calc_sum.value, 10) - parseInt(this.temp_num_pressed, 10)).toString()
            this.temp_num_pressed = '0'
            this.last_operation = button_value
            break;
          case "x":
            this.calc_sum.value = (parseInt(this.calc_sum.value, 10) * parseInt(this.temp_num_pressed, 10)).toString()
            this.temp_num_pressed = '0'
            this.last_operation = button_value
            break;  
        }
        
      }

    }
}
</script>

<style>

</style>

