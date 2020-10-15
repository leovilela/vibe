<template>
    <div>
        <table class="table table-striped">
            <thead class="thead-dark">
              <tr>                
                <th scope="col">Data</th>
                <th scope="col">Horário</th>
                <th scope="col">Status</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody v-for="data in datas" :key="data.id">
              <tr>
                <th scope="row">{{data.data}}</th>                
                <td>{{data.horario}}</td>
                <td>{{data.status}}</td>
                             
                <td><button type="button" @click="agenda(data.id)" class="btn" :class="[data.status == 'Livre' ? 'btn-success' : 'btn-info' ]">
                    <span v-if="data.status != 'Livre'">Selecionado</span>
                    <span v-else>Selecionar</span>
                </button></td>
              </tr>
            </tbody>
          </table>
    </div>
  
</template>

<script>
import Vue from 'vue';
import Vuex from 'vuex';
import { mapState, mapActions, mapMutations } from "vuex";
Vue.use(Vuex);

export default {
    data() {
        return {
            datas: []
        } 
    },
   

    computed: {
        ...mapState({
            idMedico: state => state.calendario.calendario
        }),
    },

    watch: {
        async idMedico(val) { 
          try{
            if(!this.idMedico) {
                this.datas = [];
                return;
            }
            await this.$http.get(`http://localhost:3001/${this.idMedico}`)
                .then(response => {
                    this.datas = response.data;
                });
            } catch (err) {
                this.datas = [];
                console.warn(err)
            }
        }
    }

}
</script>

<style lang="scss" scoped></style>