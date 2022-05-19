<template>
  <div>
      <button @click="this.click_define"> {{this.button_value}}</button>
  </div>
</template>

<script>
export default {
    props:[
        'button_text'
    ],
    data() {
        return {
            button_value:this.button_text.properties[0].value
        }
    },
    methods:{
        click_define(event){
            this.$emit("calc-button-press",this.button_value);
        }
    }
}
</script>

<style>

</style>