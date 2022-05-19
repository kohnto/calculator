<template>
  <div>
      <button> {{button_text.properties[0].value}}</button>
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