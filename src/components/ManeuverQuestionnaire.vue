<template>
    <div class="questionnaire" v-if="!isComplete">
        <QuestionStyles>
            <SlideTransition :is-reverse="isReverse">
                <div :key="currentStep" class="question-container">
                    <h2 class="question">{{ currentQuestion }}</h2>

                    <Question v-if="currentStep === 1" v-model="filters.themeType" @update:modelValue="selectTheme"
                        v-bind:choices="themeTypes" />

                    <Question v-if="currentStep === 2" v-model="filters.duration" @update:modelValue="selectDuration"
                        v-bind:choices="durations" :is-duration-question="true" />

                    <Question v-if="currentStep === 3" v-model="filters.people" @update:modelValue="selectPeopleCount"
                        v-bind:choices="peopleChoices" />


                    <div class="navigation">
                        <button v-if="currentStep > 1" class="nav-btn back" @click="previousStep">
                            <i class="fas fa-arrow-left"></i> Précédent
                        </button>
                    </div>
                </div>
            </SlideTransition>
        </QuestionStyles>
    </div>
</template>

<script setup lang="ts">
import type { ManeuverFilters } from '@/types/filters';
import { computed, ref } from 'vue';
import Question from './questionnaire/Question.vue';
import QuestionStyles from './questionnaire/QuestionStyles.vue';
import SlideTransition from './transitions/SlideTransition.vue';

const emit = defineEmits<{
    (e: 'complete', filters: ManeuverFilters): void;
}>();

const currentStep = ref(1);
const isComplete = ref(false);
const isReverse = ref(false);
const durations = ref<number[]>([5, 10, 20, 30]);
const peopleChoices = ref<number[]>([1, 2, 3, 4, 5]);
const themeTypes = ref<string[]>(["INC", "DIV", "SAP"]);

const filters = ref<ManeuverFilters>({
    themeType: null,
    duration: null,
    people: null
});

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

const nextStep = async () => {
    isReverse.value = false;
    if (currentStep.value < 3) {
        currentStep.value++;
    } else {
        isComplete.value = true;
        emit('complete', filters.value);
    }
};

const previousStep = () => {
    isReverse.value = true;
    currentStep.value--;
};

const handleSelect = async <T extends string | number | number>(value: T, key: keyof ManeuverFilters) => {
    (filters.value[key] as T) = value;
    await nextStep();
};

const selectTheme = (theme: string) => handleSelect(theme, 'themeType');
const selectDuration = (duration: number) => handleSelect(duration, 'duration');
const selectPeopleCount = (count: number) => handleSelect(count, 'people');
</script>

<style scoped>
.questionnaire {
    margin: 2rem auto;
    padding: 2rem;
    overflow: hidden;
}

.question-container {
    width: 100%;
}

.question {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    text-align: center;
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