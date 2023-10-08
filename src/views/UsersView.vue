<template >
    <div>
        <h3 v-if="isLoading">Espere porfavor...</h3>
        <h1 v-else>Usuarios </h1>
        <h5 v-if="errorMessage">{{errorMessage}}</h5>

        <div v-if="users.length > 0">
            <ul>
                <li v-for="user in users" :key="user.id">
                    <h4>{{ user.first_name }} {{ user.last_name }}</h4>
                    <h6>{{ user.email }}</h6>
                </li>
            </ul>
            <button @click="prevPage">Atras</button>
            <button @click="netPage">Siguiente</button>
            <span>{{currentPage}}</span>
        </div>


    </div>
</template>


<script >
import {ref} from 'vue';
import axios from 'axios';

const users= ref([]);
const isLoading = ref(true);
const currentPage = ref(1);
const errorMessage = ref(null);

export default {
    
    setup(){

        const getUsers = async (page = 1)=>{    
        if(page <= 0){
            page = 1;
        }
        isLoading.value = true;

        const {data} = await axios.get(`https://reqres.in/api/users?page=${page}`, {
            params:{
                page: {page}
            }
        })
        
        if(data.data.length >  0){
            users.value = data.data;
            currentPage.value = data.page;

        }else if(currentPage.value > 0){
            errorMessage.value = "No hay mas usuarios";
        }
        isLoading.value = false;

        }

        

        getUsers();


        return {
            users,
            isLoading,
            currentPage,
            errorMessage,
            netPage : ()=> getUsers(currentPage.value + 1),
            prevPage : ()=> getUsers(currentPage.value - 1),
        }

    }
}
</script>


<style lang="scss" scoped>

h2{
    text-align: center;
    width  : 100%;

}
$base-color: #036;
$even-background-color: #eee;
@for $i from 1 through 10 {
    ul{
        li:nth-child(#{$i}){
            background: if($i % 2 == 0, $even-background-color, $base-color);
            color: if($i % 2 == 0, $base-color, $even-background-color);
            
        }
        list-style: none;
    }
}
div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
}

button{
    width: 200px;
}
</style>