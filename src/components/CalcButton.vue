<template>
  <div>
      <button> {{this.button_text.properties[0].value}}</button>
  </div>
</template>

<script>
export default {
    props:[
        'button_text'
    ],
    data() {
        return {
        }
    },
    methods:{
        
    }
}
</script>

<style>

</style>