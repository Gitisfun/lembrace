<template>
  <div class="checkbox-wrapper">
    <label class="checkbox-label">
      <input type="checkbox" :id="id" :value="value" :checked="isChecked" @change="updateValue" class="checkbox-input" />
      <span class="checkbox-custom"></span>
      <span class="checkbox-text">
        <slot>{{ label }}</slot>
      </span>
    </label>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  id: {
    type: [String, Number],
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
    type: Array,
    required: true,
  },
});

const emit = defineEmits(['update:modelValue']);

const isChecked = computed(() => props.modelValue.includes(props.value));

const updateValue = (event: Event) => {
  const isSelected = (event.target as HTMLInputElement).checked;
  let updatedValue;

  if (isSelected) {
    updatedValue = [...props.modelValue, props.value];
  } else {
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
  width: 1.25rem;
  height: 1.25rem;
  background-color: #fff;
  border: 0.125rem solid #ccc;
  border-radius: 0.25rem;
  display: inline-block;
  position: relative;
  margin-right: 0.5rem;
  transition: all 0.2s ease;
}

.checkbox-input:checked + .checkbox-custom {
  background-color: gold;
  border-color: gold;
}

.checkbox-input:checked + .checkbox-custom::after {
  content: '';
  position: absolute;
  left: 0.375rem;
  top: 0.125rem;
  width: 0.375rem;
  height: 0.75rem;
  border: solid #fff;
  border-width: 0 0.125rem 0.125rem 0;
  transform: rotate(45deg);
}

.checkbox-text {
  color: black;
  font-family: Montserrat;
  font-size: 1rem;
}
</style>
