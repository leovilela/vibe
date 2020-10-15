<template>
    <div>
        <table class="table table-striped listaMedicos">
            <thead class="thead-dark">
              <tr>
                <th scope="col">#</th>                
                <th scope="col">Unidade</th>
                <th scope="col">Especialidade</th>
                <th scope="col">Medico</th>                
                <th></th>
              </tr>
            </thead>
            <tbody v-for="medico in filtrarEspecialidade" :key="medico.id">
              <tr>
                <th scope="row">{{medico.id}}</th>                
                <td>{{medico.unidade}}</td>
                <td>{{medico.especialidade}}</td>
                <td>{{medico.nome}}</td>                
                <td><button type="button" @click="selecionaCalendario(medico.id)" class="btn btn-secondary" :class="[selecionado != medico.id ? 'btn-secondary' : 'btn-info' ]">
                    <span v-if="selecionado == medico.id">Selecionado</span>
                    <span v-else>Selecionar</span>
                </button></td>
              </tr>
            </tbody>
          </table>
    </div>
  
</template>

<script>
import Vue from 'vue';
import Medico from '../medico/Medico.vue';

import Vuex from 'vuex';
import { mapState, mapActions, mapMutations } from "vuex";
Vue.use(Vuex);

export default {
    components:{
        'itemMedico': Medico
    },
    data() {
        return {
            medicos: [],
            selecionado: null
        } 
    },

    computed: {
        filtrarEspecialidade() {
            if(!this.busca) {
                return this.medicos
            }
            this.selecionado = null;
            return this.medicos.filter(medico => medico.especialidade.toLowerCase().indexOf(this.busca.toLowerCase()) >= 0)
        },
        ...mapState({
            busca: state => state.busca.busca
        }),
    },

    async created() {
        try{
            await this.$http.get('http://localhost:3001/medicos')
            .then(response => {
                this.medicos = response.data;
            });
        } catch (err) {
            console.warn(err)
        }

        
    },

    
         methods: {
             selecionaCalendario(id) {
                this.selecionado = id;
                this.execCalendario(id);
             },
            ...mapActions({
                execCalendario: 'calendario/execCalendario'
            })
        }

    
}
</script>

<style lang="scss" scoped></style>