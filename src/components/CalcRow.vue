<template>
  <div class="buttonsRow">
    <button
      v-for="view in this.calcRow.views"
      :key="view.index"
      @click="$emit('button-press',view)">
      {{ view.properties.find(property => property.name == 'text').value }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'CalcGridRow',
  props:[
    'calcRow'
  ]
}
</script>

<style>
  button {
    padding: 20px;
    border-radius: 7px;
    width: 100%;
    font-size:18px;
    background-color: #ffffff;
    color:#1d3557
  }
  div.buttonsRow {
    display: flex;
  }

</style>