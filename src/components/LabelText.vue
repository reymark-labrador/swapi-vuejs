<script setup>
    defineProps({
        label: String,
        text: String
    })
</script>

<template>
    <div class="flex flex-col">
        <span class="text-white ">{{label}}</span>
        <span class="text-white text-lg font-bold">{{text}}</span>
    </div>
</template>