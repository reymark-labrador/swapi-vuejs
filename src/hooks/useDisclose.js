import { ref } from 'vue'

const isOpen = ref(false)

const handleOpen = () => {
    isOpen.value = true
}

const handleClose = () => {
    isOpen.value = false
}

export function useDisclose() {
  return {
    isOpen,
    handleOpen,
    handleClose
  }
}