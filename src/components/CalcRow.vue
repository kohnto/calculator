<template>
    <div>
     <!-- <calc-button v-on="$listeners" v-for="element in this.calc_row.views" :key="element.index" :button_text= "element"></calc-button>    -->
      <button
        v-for="calc_button_element in this.calcRow.views"
        :key="calc_button_element.index"
        @click="buttonPressedHandler(calc_button_element)"
      >
        {{calc_button_element.properties.find(property => property.name == 'text').value}}
      </button>
    </div>
</template>

<script>
export default {
  name: 'CalcGridRow',
  props:[
    'calcRow'
  ],
  methods: {
    buttonPressedHandler(calc_button_element){
      this.$emit('button-press',calc_button_element);
    }
  }
}
</script>

<style>

</style>