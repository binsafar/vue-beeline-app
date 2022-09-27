import Vuex from 'vuex';
import axios from "axios";

const URL = "https://jsonplaceholder.typicode.com/";

const store = new Vuex.Store({
    state: {
        count: null
    },
    mutations: {
        getAll() {
            axios.get(URL + 'posts').then((res) => {
                this.state.count = res.data
            });
        }
    }
})

export default store;