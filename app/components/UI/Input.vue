<template>
	<input
		class="input"
		:type="type"
		:value="modelValue"
		:placeholder="placeholder"
		:name="name"
		:autocomplete="autocomplete"
		@input="onInput"
		@keydown.enter="emit('enter')"
	/>
</template>

<script lang="ts" setup>
withDefaults(
	defineProps<{
		modelValue?: string;
		type?: string;
		placeholder?: string;
		name?: string;
		autocomplete?: string;
	}>(),
	{
		modelValue: "",
		type: "text",
		placeholder: "",
		name: undefined,
		autocomplete: "off",
	},
);

const emit = defineEmits<{
	"update:modelValue": [value: string];
	enter: [];
}>();

function onInput(event: Event) {
	emit("update:modelValue", (event.target as HTMLInputElement).value);
}
</script>

<style lang="scss" scoped>
.input {
	width: 100%;
	border: 1px solid $color-line;
	background: rgba($color-text, 0.03);
	color: $color-text;
	border-radius: $radius-pill;
	padding: 1.1rem 1.25rem;
	font-family: $font-display;
	font-size: 1.2rem;
	font-weight: $font-weight-semibold;
	letter-spacing: -0.02em;
	outline: none;
	transition: border-color $ease-default;
}

.input::placeholder {
	color: rgba($color-text, 0.35);
	font-weight: $font-weight-medium;
}

.input:focus {
	border-color: rgba($color-accent, 0.45);
}

.input:focus-visible {
	outline: 2px solid $color-accent;
	outline-offset: 3px;
}
</style>
