<template>
  <select id="select-example" v-model="selectedValue" @change="emitChange">
    <option v-for="option in options" :key="option.documentId" :value="option.documentId">
      {{ option.label }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'SelectInput',
  props: {
    options: {
      type: Array,
      required: true,
      default: () => [],
    },
    defaultValue: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      selectedValue: this.defaultValue, // Set initial value from the defaultValue prop
    };
  },
  methods: {
    emitChange() {
      // Emit the selected value as an argument
      this.$emit('changeValue', this.selectedValue);
    },
  },
};
</script>

<style scoped>
#select-example {
  width: 100%;
  margin-bottom: 30px;
  padding: 5px;
  font-size: 16px;
}
</style>
