import { defineStore } from "pinia";

export const useCountryStore = defineStore('country', {
    state: () => ({
        likedCountriesCodes: [],
        likedCountriesBorders: [],
    }),
    getters: {
        
    },
    actions: {
        likeTheCountry(country) {
            if (this.likedCountriesCodes.some((element) => element === country.ccn3)) {
                this.likedCountriesCodes.splice(this.likedCountriesCodes.indexOf(country.ccn3), 1)
                this.likedCountriesBorders.splice(this.likedCountriesBorders.indexOf(country.borders), 1)
            } else {
                this.likedCountriesCodes.push(country.ccn3)
                this.likedCountriesBorders.push(country.borders)
            }
        }
    },
})