<template>
    <div class="empty-state">
        <i class="fas fa-inbox"></i>
        <span>{{ message }}</span>
    </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
    message?: string;
}>(), {
    message: 'Aucun élément trouvé.'
});
</script>

<style scoped>
.empty-state {
    text-align: center;
    padding: 2rem;
    color: #666;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
}

.empty-state i {
    font-size: 2rem;
    color: #999;
}
</style>