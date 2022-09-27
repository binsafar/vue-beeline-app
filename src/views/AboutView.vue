<template>
  <main>
    <h1> hello world</h1>
    <!--    <button @click="this.getAll()">increment</button>-->
    <button @click="commit('getAll')">increment</button>

    <div v-for="post in state.count" style="display: flex">
      <p>{{ post.id }}</p>
      <p>{{ post.body }}</p>
    </div>
  </main>
</template>

<!--<script>-->
<!--import {mapMutations, mapState} from "vuex";-->

<!--export default {-->
<!--  computed: mapState([-->
<!--    'count'-->
<!--  ]),-->
<!--  methods: {-->
<!--    ...mapMutations([-->
<!--      'getAll',-->
<!--    ])-->
<!--  }-->
<!--}-->
<!--</script>-->
<script setup>
import {useStore} from "vuex";

const store = useStore();
const {commit, dispatch, state} = store;
</script>