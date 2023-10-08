<template >
    <div>
        <h1>Lista de tareas de Thanos</h1>

        <!-- <h4>Tareas : {{ $store.state.todos.filter(todo => !todo.completed).length }}</h4> -->
        <h4>Todos: {{ all.length }}</h4>
        <h4>pendientes: {{ pending.length }}</h4>
        <h4>Completados: {{ completed.length }}</h4>

        <hr>
        <button 
            :class="{ active: currentTab === 'all' }"
            @click="currentTab = 'all'" >

            Todos
        </button>

        <button 
            :class="{ active: currentTab === 'pending' }"
            @click="currentTab = 'pending'">

            Pendientes
        </button>

        <button 
            :class="{ active: currentTab === 'completed' }"
            @click="currentTab = 'completed'">
        
            Completados
        </button>

        <div>
            <ul>
                <li :class="{ completed: todo.completed }" 
                v-for="todo in getTodoByTab" :key="todo.id"
                @dblclick="toggleTodo(todo.id)">
                    {{ todo.text }}
                </li>
            </ul>
        </div>
    </div>

    <button @click="isOpen = !isOpen">Crear Todo</button>

    <!-- modal -->

    <!-- 
        Formulario 
        <form @submit.prevent="addTodo">
            imput
            createTodo
    -->
    <Modal v-if="isOpen" title="Modal" @on:close="closeModal">
        <template #header>
            <h3>New Todo</h3>

        </template>
        <template #body>
            <div>
                <form @submit.prevent=" addTodo">
                    <input type="text" v-model="todo" @keyup.enter="addTodo">
                    <button type="submit" @click="addTodo">Add</button>
                </form>
            </div>
        </template>
    </Modal>

</template>
<script>
import { useStore } from 'vuex'
import { computed, ref } from 'vue'
import Modal from '@/components/Modal.vue';


export default {
    setup() {
        const isOpen = ref(false);
        const store = useStore();
        const pending = computed(() => {
            return store.getters['pendingTodos'];
        });
        const all = computed(() => {
            return store.getters['allTodos'];
        });
        const completed = computed(() => {
            return store.getters['completedTodos'];
        });
        const getTodoByTab = computed(() => {
            return store.getters['getTodoByTab'](currentTab.value);
        });
        const currentTab = ref('all');
        const toggleTodo = (id) => {
            store.commit('toggleTodo', id);
        };
        const todo = ref('');
        const addTodo = () => {
            store.commit('createTodo', todo.value);
            todo.value = '';
        };

        const closeModal = ()=>{
            isOpen.value = false;
        };
        const openModal = ()=>{
            isOpen.value = true;
        }

   
        return {
            pending,
            all,
            completed,
            currentTab,
            getTodoByTab,
            toggleTodo,

            addTodo,
            todo,

            isOpen,
            openModal,
            closeModal,

        };
    },
    components: { Modal }
}
</script>
<style lang="scss" scoped>
div {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

ul {
    list-style: none;
    width: 300px;
    text-align: center;
}

.active {
    background-color: #2c3e50;
    color: white;
}

.completed {
    text-decoration: line-through;
}

button {
    margin: 10px;

}
</style>