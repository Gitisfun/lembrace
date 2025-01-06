<template>
  <div class="checkbox-wrapper">
    <label class="checkbox-label">
      <input type="checkbox" :id="id" :value="value" :checked="isChecked" @change="updateValue" class="checkbox-input" />
      <span class="checkbox-custom"></span>
      <span class="checkbox-text"
        ><slot>{{ label }}</slot></span
      >
    </label>
  </div>
</template>

<script setup lang="ts">
// Define props
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    default: '',
  },
  value: {
    type: [String, Number, Boolean],
    required: true,
  },
  modelValue: {
    type: Array, // This array will hold the selected values
    required: true,
  },
});

// Emit events
const emit = defineEmits(['update:modelValue']);

// Computed property to check if this checkbox is selected
const isChecked = computed(() => props.modelValue.includes(props.value));

// Function to update the value when the checkbox changes
const updateValue = (event: Event) => {
  const isSelected = (event.target as HTMLInputElement).checked;
  let updatedValue;

  if (isSelected) {
    // Add the current value to the modelValue array
    updatedValue = [...props.modelValue, props.value];
  } else {
    // Remove the current value from the modelValue array
    updatedValue = props.modelValue.filter((item) => item !== props.value);
  }

  emit('update:modelValue', updatedValue);
};
</script>

<style scoped>
.checkbox-wrapper {
  display: flex;
  align-items: center;
}

.checkbox-label {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
}

.checkbox-input {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.checkbox-custom {
  width: 20px;
  height: 20px;
  background-color: #fff;
  border: 2px solid #ccc;
  border-radius: 4px;
  display: inline-block;
  position: relative;
  margin-right: 8px;
  transition: all 0.2s ease;
}

.checkbox-input:checked + .checkbox-custom {
  background-color: gold;
  border-color: gold;
}

.checkbox-input:checked + .checkbox-custom::after {
  content: '';
  position: absolute;
  left: 6px;
  top: 2px;
  width: 6px;
  height: 12px;
  border: solid #fff;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.checkbox-text {
  color: black;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
}
</style>
