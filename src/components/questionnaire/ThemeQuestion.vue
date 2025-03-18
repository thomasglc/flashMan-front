<template>
    <div class="theme-question">
        <div v-if="loadingThemes" class="loading-themes">
            Chargement des types de manœuvres...
        </div>
        <div v-else-if="themeError" class="error-message">
            {{ themeError }}
        </div>
        <template v-else>
            <div class="options">
                <button v-for="theme in themes" :key="theme.id" class="option-btn"
                    :class="{ 'selected': modelValue === theme.name }" @click="$emit('update:modelValue', theme.name)">
                    {{ theme.name }}
                </button>
            </div>
        </template>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { ThemeType } from '@/types/theme';
import { themeService } from '@/services/themeService';

const props = defineProps<{
    modelValue: string | null;
}>();

const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void;
}>();

const themes = ref<ThemeType[]>([]);
const loadingThemes = ref(true);
const themeError = ref<string | null>(null);

const fetchThemes = async () => {
    try {
        loadingThemes.value = true;
        themeError.value = null;
        themes.value = await themeService.getAll();
    } catch (e) {
        themeError.value = e instanceof Error
            ? e.message
            : 'Une erreur est survenue lors du chargement des types de manœuvres';
    } finally {
        loadingThemes.value = false;
    }
};

onMounted(() => {
    fetchThemes();
});
</script>

<style scoped>
.loading-themes,
.error-message {
    text-align: center;
    color: #4a5568;
    font-size: 1rem;
    margin: 2rem 0;
}

.error-message {
    color: #e53e3e;
}
</style>