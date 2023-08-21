<template>
    <div class="container">
        <div class="w-full text-center">
            <img class="w-[500px] aspect-[1.5] mx-auto mt-10" :src="countryInfo.image" alt="">
            <h2 class="text-lg font-semibold mt-3">{{ countryInfo.name }}</h2>
        </div>
        <div class="text-center mt-20">
            <h3 class="text-xl font-bold">Neighbour countries</h3>
            <ul class="flex flex-wrap list-none p-0 w-full">
                <CountryCard :countries="countries" />
            </ul>
        </div>
    </div>
</template>

<script setup>
const countryInfo = useRoute().params
console.log(countryInfo)
</script>
