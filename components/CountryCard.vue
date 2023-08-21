<template>
    <li v-for="country in countries" :key="country.cca3" class="countries-item basis-1/4 text-center block">
        <div class="p-5">
            <Nuxt-Link class="link" :to="{
                name: 'name-image-borders-country',
                params: {
                    name: country.name.common,
                    image: country.flags.png,
                    borders: 'naniii',
                    country: country
                }
            }">
                <div class="rounded-xl border-2 border-orange-300">
                    <img class="flag" :src="country.flags.png" :alt="country.flags.alt">
                    <h2>{{ country.name.common }}</h2>
                </div>
            </Nuxt-Link>
        </div>
    </li>
</template>

<script setup>
const props = defineProps({
    countries: Object,
})

</script>

<style scoped>
.countries-item div {
    padding: 20px;
}
.countries-item div div {
    border-radius: 20px;
    border: 2px solid gold;
}
.countries-item div div:hover {
    transform: translateY(-8px);
    transition: all 300ms ease-in-out;
}
.link {
    text-decoration: none;
    color: black;
}
.flag {
width: 300px;
aspect-ratio: 1.5;
}
</style>