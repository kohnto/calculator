<template>
  <div>
      <!-- <calc-text v-if="this.calc_element.id == 'calc_title' || this.calc_element.id == 'calc_amount'" :text_element="this.calc_element"></calc-text> -->
      <calc-button  :button_text="this.calc_element"></calc-button>
  </div>
</template>

<script>

export default {
  
    props:[
        'calc_element'
    ],
    data() {
        return {
        }
    }
}
</script>

<style>

</style>