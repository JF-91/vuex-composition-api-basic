<template>
  <div class="home">
    <h1>Reactive vs Ref</h1>
    <hr>
    <h2>{{ iroman.name }}</h2>
    <h2>{{ hulk.name }}</h2>
    <button @click="changeIronman">Ironman</button>
    <button @click="changeHulk">Hulk</button>
    <hr>
    <h3>Ironman is {{ ironamenIsAlive ? 'Alive' : 'Dead' }}</h3>
    <h3>Hulk is {{ hulkIsAlive ? 'Alive' : 'Dead' }}</h3>
    <hr>
    <button @click="changeStatus">Change Status</button>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'
 
export default {
  name: 'HomeView',


  setup(){  
    //ref funciona con mas elementos
    const iroman  = ref({name:'Tony', age:50});
    //solo funciona con objectos
    const hulk  = reactive({name:'Bruce', age:50});

    const ironamenIsAlive = reactive(false);
    const hulkIsAlive = ref(true);

    const changeStatus = ()=>{
  
     
      hulkIsAlive.value = !hulkIsAlive.value;
     
    }


    return {
      iroman,
      hulk,
      ironamenIsAlive,
      hulkIsAlive,
      changeIronman(){
        iroman.value.name = 'Tony Stark';
        iroman.value.age = 55;
      }, 
      changeHulk(){
        hulk.name = 'Bruce Banner';
        hulk.age = 54;
      },
      changeStatus,
    }
  }

}
</script>
