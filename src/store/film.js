import { defineStore } from 'pinia'
import axios from "axios"

export const useFilmStore = defineStore("film",{
    state: () => ({
        films: [],
        film: {},
        next: null,
        previous: null,
        nextUrl: null,
        prevUrl: null,
        isLoading: true,
        isFormLoading: true
    }),
    getters: {
        getFilms(state) {
            return state.films
        },

        getFilm(state) {
            return state.film
        }
    },
    actions: {
        async fetchFilms(page = undefined) {
            this.isLoading = true;
            const data = await axios.get('https://swapi.dev/api/films')
            
            this.next = data.data.next
            this.previous = data.data.previous
            this.films = data.data.results.sort(sortByRelease)
            this.nextUrl = data.data.next != null ? '/films/' + GetSearchKeyFromUrl(data.data.next) : null
            this.prevUrl = data.data.previous != null ? '/films/' + GetSearchKeyFromUrl(data.data.previous) : null
            this.isLoading = false;
        },

        async fetchFilm(url) {
            this.isFormLoading = true;
            const data = await axios.get(url)
            
            this.film = data.data
            this.isFormLoading = false;
        }
    },
})

const sortByRelease = (a, b) => {
    const first = new Date(a.release_date)
    const second = new Date(b.release_date)

    return  second - first
}