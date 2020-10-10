<template>
    <form>
        <input type="search" class="search" v-model="filtro" placeholder="Digite a especialidade do médico">
    </form>
</template>

<script>
import Vue from 'vue'
import { mapState, mapActions, mapMutations } from "vuex";
import Vuex from 'vuex';
import busca from '../../store/utils'

Vue.use(Vuex);
export default {
    data() {
        return {
            filtro: null
        }
    },
    watch: {
        filtro(val) { 
                this.buscaAction(val);            
            
        }
    },    
    methods: {
        ...mapActions({
            buscaAction: "busca/execBusca"
        })
    }
}
</script>

<style lang="scss" scoped>
    .search{
        display: inline-block;
        width: 100%;
        margin: 8px 0;
    }
</style>>

</style>