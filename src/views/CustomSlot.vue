<template >
    <div>
        <h3>Aprendiendo Slot</h3>
        <button @click="isOpen = !isOpen">Abrir Modal</button>

        <Modal v-if="isOpen" title="Modal" @on:close="closeModal">
            <!-- <h2>Titulo del modal</h2>
            <p>Lorem ipsum dolor sit amet.</p>
            <button>Salir</button> -->

            <template v-slot:header>
                <h3>Titlulo del header</h3>
            </template>

            <template v-slot:footer>
                <div>
                    footer
                </div>
            </template>

            <template #body>
                <div>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <button @click="closeModal">close</button>
                </div>
            </template>

        </Modal>
    </div>
</template>
<script>
import {ref}from 'vue';
import Modal from '@/components/Modal.vue';
export default {



    components:{
        Modal
    },
    setup() {

        const isOpen = ref(false);

        const openModal = ()=>{
            isOpen.value = true;
        }
        const closeModal = ()=>{
            isOpen.value = false;
        }
        return {
            isOpen,
            openModal,
            closeModal
        }
    }

    
}
</script>
<style lang="">
    
</style>