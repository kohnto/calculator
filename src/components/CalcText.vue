<template>
  <div>
      <p>{{text_element.properties[0].value}}</p>
  </div>
</template>

<script>
export default {
    props: [
        'text_element'
    ],
  data() {
    return {
        text_element:this.text_element
    }
    }
}
</script>

<style>

</style>