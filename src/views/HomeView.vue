<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <li v-for="item in $store.state.cards" :key="item.id">
     <GameCard :title="item.name"/>
    </li>
  </div>
</template>

<script>
import GameCard from "../components/Card.vue"

export default {
  beforeCreate() {
    this.$store.dispatch('getGames');
  },
  name: 'HomeView',
  components: {
    GameCard,
  }
}
</script>