<template >
    <div>
        <nav>
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link> |
            <router-link to="/counter">Counter</router-link> |
            <router-link to="/users">Usuarios</router-link> |
            <router-link to="/pokemon-search">Buscar Pokemon</router-link> |
            <router-link to="/todo">Todo</router-link> |
            <router-link to="/slot">Slots</router-link>
        </nav>
        <slot></slot>

        <footer>
            <p>Footer</p>
        </footer>
    </div>
</template>
<script>
export default {
    name: 'LayoutDiv'
}
</script>
<style lang="">
    
</style>