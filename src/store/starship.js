import { defineStore } from 'pinia'
import axios from "axios"

import { RemoveComma, GetSearchKeyFromUrl } from '../utils'

export const useStarshipStore = defineStore("starship",{
    state: () => ({
        starships: [],
        starship: {},
        next: null,
        previous: null,
        nextUrl: null,
        prevUrl: null,
        isLoading: true,
        isFormLoading: true
    }),
    getters: {
        getStarships(state) {
            return state.starships
        },

        getStarship(state) {
            return state.starship
        }
    },
    actions: {
        async fetchStarships(page = undefined) {
            this.isLoading = true;
            const query = page == undefined? '' : '?page=' + page
            const url = 'https://swapi.dev/api/starships/' + query
            const data = await axios.get(url)
            
            this.next = data.data.next
            this.previous = data.data.previous
            this.starships = data.data.results.sort(sortByLength)
            this.nextUrl = data.data.next != null ? '/starships/' + GetSearchKeyFromUrl(data.data.next) : null
            this.prevUrl = data.data.previous != null ? '/starships/' + GetSearchKeyFromUrl(data.data.previous) : null
            this.isLoading = false;
        },

        async fetchStarship(url) {
            this.isFormLoading = true;
            const data = await axios.get(url)
            
            this.starship = data.data
            this.isFormLoading = false;
        }
    },
})

const sortByLength = (a, b) => {
    const first = RemoveComma(a.length)
    const second = RemoveComma(b.length)
    return first - second
}