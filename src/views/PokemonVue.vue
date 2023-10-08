<template >
    <div>
        <h1 v-if="!pokemon && !errorMessage"> Buscando ... </h1>
        <h1 v-else-if="errorMessage">{{ errorMessage }}</h1>

        <template v-else>
            <div>
                <h3>{{ pokemon?.name }}</h3>
                <img :src="pokemon.sprites.front_default" :alt="pokemon.name">
                <br>
                <router-link :to="{name: 'pokemon-search'}">Regresar</router-link>
            </div>
        </template>
    </div>
</template>
<script>
import {onBeforeRouteLeave, useRoute} from 'vue-router'
import usePokemon from '@/composables/usePokemeon';
import {watch} from 'vue';
export default {
    setup(){
        const route = useRoute();

        const {pokemon, isLoading, errorMessage, searchPokemon} = usePokemon(route.params.id);

        //recibe dos callback el param y la logica de ese param
        watch(() => route.params.id, () => searchPokemon(route.params.id) )
 

        onBeforeRouteLeave(()=>{
            const answer = confirm('¿Seguro que desea regresar?');
            if (!answer) return false;
          
        })



        return {
            pokemon,
            isLoading,
            errorMessage
        }



    }
} 
</script>
<style lang="">
    
</style>