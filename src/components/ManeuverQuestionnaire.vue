<template>
    <div class="questionnaire" v-if="!isComplete">
        <div class="question-container" :class="{ 'slide-enter': showQuestion }">
            <h2 class="question">{{ currentQuestion }}</h2>

            <!-- Question 1: Type de manœuvre -->
            <div v-if="currentStep === 1" class="options theme-options">
                <div v-if="loadingThemes" class="loading-themes">
                    Chargement des types de manœuvres...
                </div>
                <div v-else-if="themeError" class="error-message">
                    {{ themeError }}
                </div>
                <template v-else>
                    <button v-for="theme in themes" :key="theme.id" class="option-btn"
                        :class="{ 'selected': filters.themeType === theme.name }" @click="selectTheme(theme.name)">
                        {{ theme.name }}
                    </button>
                </template>
            </div>

            <!-- Question 2: Durée -->
            <div v-if="currentStep === 2" class="options duration-options">
                <button v-for="duration in durations" :key="duration" class="option-btn"
                    :class="{ 'selected': filters.duration === duration }"
                    @click="selectDuration(duration as Duration)">
                    {{ duration === 30 ? '30+ min' : duration + ' min' }}
                </button>
            </div>

            <!-- Question 3: Nombre de personnes -->
            <div v-if="currentStep === 3" class="options people-options">
                <button v-for="count in peopleCounts" :key="count" class="option-btn"
                    :class="{ 'selected': filters.peopleCount === (typeof count === 'string' ? 5 : count) }"
                    @click="selectPeopleCount(typeof count === 'string' ? 5 : count)">
                    {{ count }} {{ typeof count === 'number' && count === 1 ? 'personne' : 'personnes' }}
                </button>
            </div>

            <div class="navigation">
                <button v-if="currentStep > 1" class="nav-btn back" @click="previousStep">
                    <i class="fas fa-arrow-left"></i> Précédent
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import type { ManeuverFilters, Duration } from '@/types/filters';
import type { ThemeType } from '@/types/theme';
import { themeService } from '@/services/themeService';

const emit = defineEmits<{
    (e: 'complete', filters: ManeuverFilters): void;
}>();

const currentStep = ref(1);
const showQuestion = ref(true);
const isComplete = ref(false);
const themes = ref<ThemeType[]>([]);
const loadingThemes = ref(true);
const themeError = ref<string | null>(null);

const filters = ref<ManeuverFilters>({
    themeType: null,
    duration: null,
    peopleCount: null
});

const durations = [5, 10, 20, 30] as const;
const peopleCounts = [1, 2, 3, 4, '5+'] as const;

const currentQuestion = computed(() => {
    switch (currentStep.value) {
        case 1:
            return 'Quel type de manœuvre ?';
        case 2:
            return 'Quelle durée ?';
        case 3:
            return 'Combien de personnes ?';
        default:
            return '';
    }
});

const fetchThemes = async () => {
    try {
        loadingThemes.value = true;
        themeError.value = null;
        themes.value = await themeService.getAll();
    } catch (e) {
        themeError.value = e instanceof Error ? e.message : 'Une erreur est survenue lors du chargement des types de manœuvres';
    } finally {
        loadingThemes.value = false;
    }
};

onMounted(() => {
    fetchThemes();
});

const nextStep = async () => {
    if (currentStep.value < 3) {
        showQuestion.value = false;
        await new Promise(resolve => setTimeout(resolve, 300));
        currentStep.value++;
        showQuestion.value = true;
    } else {
        isComplete.value = true;
        emit('complete', filters.value);
    }
};

const previousStep = async () => {
    showQuestion.value = false;
    await new Promise(resolve => setTimeout(resolve, 300));
    currentStep.value--;
    showQuestion.value = true;
};

const selectTheme = async (theme: string) => {
    filters.value.themeType = theme;
    await nextStep();
};

const selectDuration = async (duration: Duration) => {
    filters.value.duration = duration;
    await nextStep();
};

const selectPeopleCount = async (count: number) => {
    filters.value.peopleCount = count;
    await nextStep();
};
</script>

<style scoped>
.questionnaire {
    max-width: 600px;
    margin: 2rem auto;
    padding: 2rem;
}

.question-container {
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.3s ease;
}

.question-container.slide-enter {
    opacity: 1;
    transform: translateY(0);
}

.question {
    font-size: 1.5rem;
    color: #2d3748;
    margin-bottom: 2rem;
    text-align: center;
}

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

.options {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    margin-bottom: 2rem;
}

.option-btn {
    padding: 0.75rem 1.5rem;
    border: 2px solid #e2e8f0;
    border-radius: 8px;
    background-color: white;
    color: #4a5568;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.2s ease;
}

.option-btn:hover {
    border-color: #4299e1;
    color: #4299e1;
}

.option-btn.selected {
    background-color: #4299e1;
    border-color: #4299e1;
    color: white;
}

.navigation {
    display: flex;
    justify-content: flex-start;
    margin-top: 2rem;
}

.nav-btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 6px;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.2s ease;
}

.nav-btn.back {
    background-color: #edf2f7;
    color: #4a5568;
}

.nav-btn:hover {
    opacity: 0.9;
}

.nav-btn i {
    font-size: 0.9rem;
}
</style>