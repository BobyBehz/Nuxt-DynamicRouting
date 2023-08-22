<template>
    <div class="container">
        <div class="w-full text-center">
            <img class="w-[500px] aspect-[1.5] mx-auto mt-10" :src="countryInfo.image" alt="">
            <h2 class="text-lg font-semibold mt-3">{{ countryInfo.name }}</h2>
        </div>
        <div class="text-center mt-20">
            <h3 class="text-xl font-bold">Neighbour countries</h3>
            <ul class="flex flex-wrap list-none p-0 w-full">
                <CountryCard :countries="borderCountries" />
                <h3>{{ myCountry }}</h3>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const countryInfo = useRoute().params
const neighbours = useRoute().query.borders
const borderCountries = ref([])
const get = async () => {
    const url = `https://restcountries.com/v3.1/alpha?codes=${neighbours}`
    const response = await fetch(url);
    response.json().then(res => {
        borderCountries.value = res
    })
}
get()
</script>