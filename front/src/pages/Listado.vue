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
        <div class="row">
          <div class="col-3"><q-btn label="Export EXCEL" color="teal" @click="exportTable"/></div>
          <div class="col-3"><q-btn label="ACTUALIZAR" color="green" @click="listStudent"/></div>

        </div>

        <div class="col-12">
          <q-table label="ESTUDIANTES" :rows="students" :columns="columnas">
            <template v-slot:body-cell-opcion="props">
                <q-td key="opcion"  :props="props">
                  <!--<q-btn icon="edit" dense color="yellow"/>-->
                </q-td>
            </template>
            <template v-slot:body-cell-imagen="props">
              <q-td key="imagen" :props="props" style="  display: flex; height: 80px; justify-content: center;" >
                <div v-if="props.row.imagen!=''" style="width:80px;height:80px;display: block;" @click="descargar(props.row)"><q-img :src="url+'/../../imagenes/'+props.row.imagen"  /></div>
              </q-td>
            </template>
          </q-table>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import {globalStore} from "stores/global";
import xlsx from "json-as-xlsx"

export default {
  name: `Listado`,
  data() {
    return {
      url:process.env.API,
      user:{},
      students:[],
      student:{},
      store:globalStore(),
      columnas:[
        {label:'opcion',field:'opcion',name:'opcion'},
        {label:'NOMBRES',field:'nombres',name:'nombres'},
        {label:'APELLIDOS',field:'apellidos',name:''},
        {label:'UNIDAD',field:'unidad',name:'unidad'},
        {label:'CURSO',field:'curso',name:'curso'},
        {label:'TUTOR',field:'tutor',name:'tutor'},
        {label:'CELULAR',field:'celular',name:'celular'},
        {label:'CAPTURA',field:'imagen',name:'imagen'},
        {label:'CATEGORIA',field:'categoria',name:'categoria'},
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
    descargar(archivo){
      var fileName=this.url+'/../../imagenes/'+archivo.imagen;
      window.open(fileName, 'Download');
    },
    listStudent(){
      this.$api.get('student').then((res) =>{
        console.log(res.data)
          this.students=res.data
      })

      },
    exportTable () {
      let datacaja = [
        {
          sheet: "Estudiantes",
          columns: [
            { label: "", value: "" }, // Top level data
            { label: "NOMBRES", value: "nombres" }, // Top level data
            { label: "APELLIDOS", value: "apellidos" }, // Top level data
            { label: "UNIDAD", value: "unidad" }, // Top level data
            { label: "CURSO", value: "curso" }, // Top level data
            { label: "CURSO", value: "hora" }, // Top level data
            { label: "TUTOR", value: "tutor" }, // Top level data
            { label: "CELULAR", value: "celular" }, // Top level data
            { label: "CATEGORIA", value: "categoria" }, // Top level data
          ],
          content: this.students
        },

      ]

      let settings = {
        fileName: "Olimpiadas", // Name of the resulting spreadsheet
        extraLength: 8, // A bigger number means that columns will be wider
        writeOptions: {}, // Style options from https://github.com/SheetJS/sheetjs#writing-options
      }

      xlsx(datacaja, settings) // Will download the excel file
    },

  }

}
</script>

<style scoped>

</style>
