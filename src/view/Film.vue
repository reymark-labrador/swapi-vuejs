<script setup>
    import { computed, onMounted, onUpdated } from 'vue'
    import { useRoute } from 'vue-router'

    import { useFilmStore } from '../store/film'
    import Container from '../components/Container.vue'
    import Loader from '../components/Loader.vue'
    import Table from '../components/Table.vue'
    import TableItem from '../components/TableItem.vue'
    import Pagination from '../components/Pagination.vue'
    import Title from '../components/Title.vue'
    import LabelText from '../components/LabelText.vue'
    import Modal from '../components/Modal.vue'
    import { useDisclose } from '../hooks/useDisclose'

    const store = useFilmStore()
    const route = useRoute()

    const getFilms = computed(() => {
        return store.getFilms
    })

    const getFilm = computed(() => {
        return store.getFilm
    })

    const { handleOpen, isOpen } = useDisclose()

    const viewDetails = (url) => {
        store.fetchFilm(url)
        handleOpen()
    }

    onMounted(() => {
        store.fetchFilms(route.query.page)
    })

    onUpdated(() => {
        !isOpen.value && store.fetchFilms(route.query.page)
    })
</script>

<template>
    <Container>
        <Title title="Films"/>
        <Table v-if="!store.isLoading">
            <TableItem v-for="(value, key) in getFilms" :key="(key)" @click="viewDetails(value.url)">
                <div class="flex flex-col">
                    <span class="font-bold text-lg">{{value.title}}</span>
                    <span class="text-xs">{{value.release_date}}</span>
                </div>
            </TableItem>
            <Pagination :next="store.nextUrl" :previous="store.prevUrl"/>
        </Table>
        <Loader v-if="store.isLoading"/>
    </Container>
    <Modal v-if="!store.isFormLoading" :title="getFilm.title">
        <div class="flex flex-col gap-5">
            <span class="text-white">{{getFilm.opening_crawl}}</span>
            <LabelText label="Director:" :text="getFilm.director"/>
            <LabelText label="Producer:" :text="getFilm.producer"/>
            <LabelText label="Release Date:" :text="getFilm.release_date"/>
        </div>
    </Modal>
</template>
