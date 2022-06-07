<script setup>
    import { computed, onMounted, onUpdated } from 'vue'
    import { useRoute } from 'vue-router'

    import { useStarshipStore } from '../store/starship'
    import Container from '../components/Container.vue'
    import Loader from '../components/Loader.vue'
    import Table from '../components/Table.vue'
    import TableItem from '../components/TableItem.vue'
    import Pagination from '../components/Pagination.vue'
    import Title from '../components/Title.vue'
    import LabelText from '../components/LabelText.vue'
    import Modal from '../components/Modal.vue'
    import { useDisclose } from '../hooks/useDisclose'

    const store = useStarshipStore()
    const route = useRoute()

    const getStarships = computed(() => {
        return store.getStarships
    })

    const getStarship = computed(() => {
        return store.getStarship
    })

    const { handleOpen, isOpen } = useDisclose()

    const viewDetails = (url) => {
        store.fetchStarship(url)
        handleOpen()
    }

    onMounted(() => {
        store.fetchStarships(route.query.page)
    })

    onUpdated(() => {
        !isOpen.value && store.fetchStarships(route.query.page)
    })
</script>

<template>
    <Container>
        <Title title="Starships"/>
        <Table v-if="!store.isLoading">
            <TableItem v-for="(value, key) in getStarships" :key="(key)" @click="viewDetails(value.url)">
                <div class="flex flex-col">
                    <span class="font-bold text-lg">{{value.name}}</span>
                    <span class="text-xs">Length: {{value.length}}</span>
                </div>
            </TableItem>
            <Pagination :next="store.nextUrl" :previous="store.prevUrl"/>
        </Table>
        <Loader v-if="store.isLoading"/>
    </Container>
    <Modal v-if="!store.isFormLoading" :title="getStarship.name">
        <div class="flex flex-col gap-5">
            <LabelText label="Model:" :text="getStarship.model"/>
            <LabelText label="Manufacturer:" :text="getStarship.manufacturer"/>
            <LabelText label="Starship Class:" :text="getStarship.starship_class"/>
            <div class="grid grid-cols-3 gap-5">
                <LabelText label="Hyperdrive Rating:" :text="getStarship.hyperdrive_rating"/>
                <LabelText label="Max Atmosphering Speed:" :text="getStarship.max_atmosphering_speed"/>
                <LabelText label="MGLT:" :text="getStarship.MGLT"/>
            </div>
            <div class="grid grid-cols-3 gap-5">
                <LabelText label="Length:" :text="getStarship.length"/>
                <LabelText label="Passengers:" :text="getStarship.passengers"/>
                <LabelText label="Crew:" :text="getStarship.crew"/>
            </div>
            <div class="grid grid-cols-3 gap-5">
                <LabelText label="Cost In Credits:" :text="getStarship.cost_in_credits"/>
                <LabelText label="Consumables:" :text="getStarship.consumables"/>
                <LabelText label="Cargo Capacity:" :text="getStarship.cargo_capacity"/>
            </div>
        </div>
    </Modal>
</template>