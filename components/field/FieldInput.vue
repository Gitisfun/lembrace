<template>
  <div class="input-wrapper">
    <label v-if="label" :for="id" class="input-label">{{ label }}</label>
    <input :id="id" :type="type" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" :placeholder="placeholder" :class="{ 'input-error': error }" class="input-element" />
    <p v-if="error" class="input-error-message">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue: string;
  label?: string;
  placeholder?: string;
  type?: string;
  id?: string;
  error?: string;
}>();

const id = props.id || `input-${Math.random().toString(36).substr(2, 9)}`;
</script>

<style scoped>
.input-wrapper {
  display: flex;
  flex-direction: column;
}

.input-label {
  margin-bottom: 0.5rem;
  font-weight: 600;
  font-size: 1rem;
  color: #333;
}

.input-element {
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.375rem;
  transition: border-color 0.3s ease;
}

.input-element:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.input-error {
  border-color: #e3342f;
}

.input-error-message {
  margin-top: 0.25rem;
  font-size: 0.875rem;
  color: #e3342f;
}
</style>
