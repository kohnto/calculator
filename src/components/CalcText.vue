<template>
  <div>
      <p>{{this.text_element.views[0].properties[0].value}}</p>
  </div>
</template>

<script>
export default {
    props: [
        'text_element'
    ],
  data() {
    return {
        
    }
    }
}
</script>

<style>

</style>