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
  margin-bottom: 1.5rem;
  font-family: Montserrat;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 0.25rem;
  padding-right: 1.5rem;
  padding-left: 1.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
}
select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" viewBox="0 0 16 16"><path d="M1.5 5.5l6 6 6-6"/></svg>') no-repeat right 0.75rem center;
  background-size: 1rem;
  padding: 0.5rem 2rem 0.5rem 1rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  cursor: pointer;
}

select:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 4px rgba(0, 123, 255, 0.5);
}
</style>
