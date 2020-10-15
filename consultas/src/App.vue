<template>
  <div id="app">
    
    <div class="container-fluid">
      <div class="row align-items-center">
          <div class="col-sm-2">
              <img src="./assets/images/logo.png" class="rounded my-3" alt="ViBe Saúde">
          </div>
          <div class="col-sm-7 ">
              <buscaEspecialidades />
          </div>
      </div>
      <div class="row">        
        <div class="col-sm-6">
          <listaMedicos />
        </div>
        <div class="col-sm-6 color1">
          <calendario />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from './components/shared/menu/Menu.vue';
import Busca from './components/busca/Busca.vue';
import Medicos from './components/medicos/Medicos.vue';
import Calendario from './components/calendario/Calendario.vue';

export default {
  components: {
    'navmenu': Menu,
    'listaMedicos': Medicos,
    'buscaEspecialidades': Busca,
    'calendario': Calendario,
  },
  data(){
    return {
      menuItens: [
        {
          name: "Médico",
          url: '/medico'
        },
        {
          name: "Especialidade",
          url: '/especialidade'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.logo{
  margin-left: auto;
  margin-right: auto;
  display: inline-block;
}
.color1{
  background-color: #dadada;
}
.color2{
  background-color: #8a8a8a;
}
.color3{
  background-color: #7a7a7a;
}
</style>