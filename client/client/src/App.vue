<template>
  <h1 v-if="users.lenght===0">Buscando usuários...</h1>
  <h1 v-else>Usuários Encontrados</h1>
  <ul style="display: flex; justify-content: flex-start; flex-direction: column; text-align: left;" >
    <li v-for="(user, key) in users" :key="key">{{ user.fullName }}</li>
  </ul>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios'

export default {
  name: 'App',

  data() {
    return {
      users: []
    }
  },

  // components: {
  //   HelloWorld
  // },
  mounted() {
    axios({
      url: "http://localhost:4545/graphql",
      method: "post",
      data: {
        query: `
          query {
            users {
              _id
              fullName
            }
          }
        `
      }
    })
    .then( res => {
      console.log(res.data)
      this.users = res.data.data.users
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
