<template>
  <q-layout view="lHh Lpr lFf" class="bg-grey-12">
    <q-header >
      <q-toolbar>
        <q-toolbar-title >
          <div class="row">
            <div class="col-2 col-sm-3 flex flex-center"><q-img src="uto.png" width="30px"/></div>
            <div class="col-8 col-sm-6 flex flex-center">
              <small style="white-space: normal;letter-spacing: -0.3px;line-height: 85%;" class="text-center text-subtitle2">
                V OLIMPIADA DE CIENCIA Y TECNOLOGÍA CONVOCATORIA GENERAL
              </small>
            </div>
            <div class="col-2 col-sm-3 flex flex-center"><q-img src="fni.png" width="30px"/></div>
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <q-page class="q-pa-xs">
        <div class="text-h5 text-center">LISTADO DE ESTUDIANTES</div>
        <div class="col-12">
          <q-table label="ESTUDIANTES" :rows="students" :columns="columnas"/>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import {globalStore} from "stores/global";

export default {
  name: `Listado`,
  data() {
    return {
      user:{},
      students:[],
      student:{},
      store:globalStore(),
      columnas:[
        {label:'opcion',field:'opcion',name:'opcion'},
        {label:'nombres',field:'nombres',name:'nombres'},
        {label:'apellidos',field:'apellidos',name:''},
        {label:'unidad',field:'unidad',name:'unidad'},
        {label:'curso',field:'curso',name:'curso'},
        {label:'tutor',field:'tutor',name:'tutor'},
        {label:'celular',field:'celular',name:'celular'},
        {label:'imagen',field:'imagen',name:'imagen'},
        {label:'categoria',field:'categoria',name:'categoria'},
      ]
    }
  },
  mounted() {
    if (!this.store.isLoggedIn){
      this.$router.push('/')
    }
  },
  created() {
    this.listStudent()
  },
  methods:{
    listStudent(){
      this.$api.get('student').then((res) =>{
        console.log(res.data)
          this.students=res.data
      })

      }
  }

}
</script>

<style scoped>

</style>
