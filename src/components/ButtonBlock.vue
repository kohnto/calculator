<template>
  <div>
      <v-btn> {{button_text}}</v-btn>

      
  </div>
</template>

<script>
export default {
    props:[
        'button_text'
    ],
    data() {
        return {
            button_text:this.button_text
        }
    }
}
</script>

<style>

</style>