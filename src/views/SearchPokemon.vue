<template >
    <div>
        <h1>Buscar Pokemon:{{ pokemonId  }} </h1>
        <form @submit.prevent="onsubmit">
            <input type="number" placeholder="Numero" autofocus
            v-model="pokemonId"
            ref="txtSearchId">
        </form>
        <br>
        <span>Presione enter para buscar</span>
    </div>
</template>
<script>
import {ref, onActivated} from 'vue';
import axios from 'axios';
import {useRouter} from 'vue-router';

export default {
    
    setup(){
        const router = useRouter();
        const pokemonId = ref(1);

        const txtSearchId = ref();

        onActivated(()=>{
            txtSearchId.value.select();
        })

        return {
            pokemonId,
            txtSearchId,
            onsubmit: async ()=>{
                if(pokemonId.value <= 0){
                    pokemonId.value = 1;
                }
                router.push({name: 'pokemon-id', params: {id: pokemonId.value}});
            }
        }
    }
}
</script>
<style lang="">
    
</style>