<template>
    <slot></slot>
</template>

<style>
.options {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    margin-bottom: 2rem;
}

.option-btn {
    /* padding: 0.75rem 1.5rem;
    border: 2px solid #e2e8f0;
    border-radius: 8px;
    background-color: white;
    color: #4a5568; */
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
</style>