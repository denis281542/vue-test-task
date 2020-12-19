<template>
  <Autocomplete />
</template>

<script>
import Autocomplete from '@/components/Autocomplete'

export default {
  data() {
    return {
      
    }
  },
  methods: {
    filterStates() {
      this.filteredStates = this.states.filter(state => {
        return state.toLowerCase().startsWith(this.state.toLowerCase())
      })
    }
  },
  components: {
    Autocomplete
  }
}
</script>

<style lang="stylus" scoped>

</style>
