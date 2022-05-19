<template>
    <div>
     <calc-element v-for="element in calc_row" :key="element.id" calc_element= element></calc-element>   
    </div>
</template>

<script>

export default {
  components: { CalcElement },
    props:[
        'calc_row'
    ],
  data() {
    return {
        calc_row:this.calc_row
    }
    }
}
</script>

<style>

</style>