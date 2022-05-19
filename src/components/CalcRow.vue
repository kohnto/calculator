<template>
    <div>
     <calc-button v-for="element in this.calc_row.views" :key="element.index" :button_text= "element"></calc-button>   
    </div>
</template>

<script>
import CalcButton from './CalcButton.vue'

export default {
  components: { CalcButton },
  
    props:[
        'calc_row'
    ],
  data() {
    return {
    }
    }
}
</script>

<style>

</style>