import { createStore } from 'vuex'
import { v4 as uuidv4 } from 'uuid'

export default createStore({
  state: {
    todos:[
      { id: 1, text: 'todo 1', completed: false },
      { id: 2, text: 'todo 2', completed: true },
      { id: 3, text: 'todo 3', completed: false },
      { id: 4, text: 'todo 4', completed: true },
      { id: 5, text: 'todo 5', completed: false },
    ]
  },
  getters: {
    pendingTodos(state) {
      return state.todos.filter(todo => !todo.completed)
    },
    allTodos(state) {
      return state.todos
    },
    completedTodos(state) {
      return state.todos.filter(todo => todo.completed)
    },
    getTodoByTab :( _, getters) => (tab) => {
      switch (tab) {
        case 'all': return getters.allTodos
        case 'pending': return getters.pendingTodos
        case 'completed': return getters.completedTodos
        
        
      }
    },

  },
  mutations: {
    toggleTodo(state, id) {
      const todo = state.todos.find(todo => todo.id === id)
      todo.completed = !todo.completed
    },
    createTodo(state, text) {
      state.todos.push({ id: Date.now(), text, completed: false })
    }
  },
  actions: {
  },
  modules: {
  }
})
