<template>
    <div class="container">
        <ul class="flex flex-wrap list-none p-0 w-full">
            <CountryCard :countries="countries" />
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const countries = ref([])

const getCountries = async (query) => {
    const url = query ? `https://restcountries.com/v3.1/name/${query}` : 'https://restcountries.com/v3.1/all'
    const response = await fetch(url);
    countries.value = await response.json();
}
getCountries()
</script>