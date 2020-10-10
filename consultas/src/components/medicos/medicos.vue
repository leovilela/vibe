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
                <td v-if="medico.selecionado"><button type="button" class="btn btn-secondary">Selecionado</button></td>
                <td v-if="!medico.selecionado"><button type="button" class="btn btn-info">Selecionar</button></td>
              </tr>
            </tbody>
          </table>
    </div>
  
</template>

<script>
import { mapState } from "vuex";
import Medico from '../medico/Medico.vue'
export default {
    components:{
        'itemMedico': Medico
    },
    data() {
        return {
            medicos: [
                {
                    id: 5151,
                    unidade: 'Pirituba',
                    nome: 'Jackson do Pandeiro',
                    especialidade: 'Pediatra',
                    selecionado: false
                },
                {
                    id: 454,
                    unidade: 'Lapa',
                    nome: 'João Gilberto',
                    especialidade: 'Pediatra',
                    selecionado: true
                },
                {
                    id: 2222,
                    unidade: 'Osasco',
                    nome: 'Gilberto Gil',
                    especialidade: 'Pediatra',
                    selecionado: false
                },
                {
                    id: 5657,
                    unidade: 'Higienópolis',
                    nome: 'Caetano Veloso',
                    especialidade: 'Pediatra',
                    selecionado: false
                },
                {
                    id: 888,
                    unidade: 'Higienópolis',
                    nome: 'Chico Buarque',
                    especialidade: 'Clínico Geral',
                    selecionado: false
                },
                {
                    id: 8088,
                    unidade: 'Higienópolis',
                    nome: 'Cassia Eller',
                    especialidade: 'Psicólogo',
                    selecionado: false
                },
            ]
        } 
    },

    computed: {
        filtrarEspecialidade() {
            if(!this.busca) {
                return this.medicos
            }
            return this.medicos.filter(medico => medico.especialidade.toLowerCase().indexOf(this.busca.toLowerCase()) >= 0)
        },
        ...mapState({
            busca: state => state.busca.busca
        }),
    },
}
</script>

<style lang="scss" scoped></style>