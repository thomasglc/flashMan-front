<template>
    <div class="default-transition">
        <slot></slot>
    </div>
</template>

<style scoped>
.default-transition {
    transition: all 0.3s;
    animation: fade 0.9s;
}

@keyframes fade {
    0% {
        translate: 50px;
        opacity: 0;
    }
}

@media(max-width:800px) {
    @keyframes fade {
        0% {
            transform: translateY(50px);
            opacity: 0;
        }
    }
}
</style>