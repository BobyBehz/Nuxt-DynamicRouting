<template>
    <div class="container">
        <ul class="flex flex-wrap list-none p-0 w-full">
            <CountryCard v-if="likedCountries.length" :countries="likedCountries" />
            <div v-else>your favorite list is empty.</div>
        </ul>
        <ul class="flex flex-wrap list-none p-0 w-full mt-10 border-t border-yellow-400 pt-10">
            <CountryCard v-if="likedCountriesNeighbours.length" :countries="likedCountriesNeighbours" />
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCountryStore } from '@/stores/countrtStore.js'
const store = useCountryStore()

const likedCountries = ref([])
const likedCountriesNeighbours = ref([])

const getLikedCountries = async (codes) => {
    const url = `https://restcountries.com/v3.1/alpha?codes=${codes}`;
    const response = await fetch(url);
    likedCountries.value = await response.json()
}
const getLikedCountriesBorders = async (borders) => {
    const url = `https://restcountries.com/v3.1/alpha?codes=${borders.flat()}`;
    const response = await fetch(url);
    likedCountriesNeighbours.value = await response.json()
}
watch(store.likedCountriesCodes, () => {
    getLikedCountries(store.likedCountriesCodes)
    getLikedCountriesBorders(store.likedCountriesBorders)
}, { immediate: true })

</script>

<style scoped></style>