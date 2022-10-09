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
                   <q-btn color="info" dense icon="print" @click="print(props.row)" />
                  
                </q-td>
            </template>
            <template v-slot:body-cell-imagen="props">
              <q-td key="imagen" :props="props" style="  display: flex; height: 80px; justify-content: center;" >
                <div v-if="props.row.imagen!=''" style="width:80px;height:80px;display: block;" @click="descargar(props.row)"><q-img :src="url+'/../../imagenes/'+props.row.imagen"  /></div>
              </q-td>
            </template>
          </q-table>
          <div class="row">
            <div class="col-3"><q-select v-model="curso" :options="cursos" label="CURSO" dense outlined /></div>
            <div class="col-3"><q-select v-model="cat" :options="categoria" label="CATEGORIA" dense outlined /></div>
            <div class="col-3"><q-btn color="accent" label="EXCEL"  dense @click="excelFiltro"/></div>

          </div>

        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import {globalStore} from "stores/global";
import xlsx from "json-as-xlsx"
import {date} from 'quasar'
import {jsPDF} from "jspdf";
export default {
  name: `Listado`,
  data() {
    return {
      curso:'',
      cat:'',
      cursos:[
        '1ro Secundaria',
        '2do Secundaria',
        '3ro Secundaria',
        '4to Secundaria',
        '5to Secundaria',
        '6to Secundaria',
      ],
      categoria:[
        'ASTRONOMÍA Y ASTROFÍSICA',
        'BIOLOGÍA',
        'FÍSICA',
        'GEOGRAFÍA',
        'MATEMÁTICA',
        'PROGRAMACIÓN Categoría A',
        'PROGRAMACIÓN Categoría B',
        'QUÍMICA',
        'ROBÓTICA',
      ],
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
    print(alumno){
        var doc = new jsPDF('p','cm','letter')
        var img = new Image()
        var img2 = new Image()
        img.src = 'uto.png'
        img2.src = 'fni.png'
        doc.addImage(img, 'jpg', 0.5, 0.5, 2, 2)
        doc.addImage(img2, 'jpg', 18.5, 0.5, 2, 2)
        doc.setFont(undefined,'bold')
        doc.text(5, 1.5, 'V OLIMPIADA DE CIENCIA Y TECNOLOGÍA  ')
        doc.text(3, 3, 'ALUMNO')
        doc.text(3, 4, 'UNIDAD EDUCATIVA')
        doc.text(3, 5, 'CURSO')
        doc.text(3, 6, 'CELULAR')
        doc.text(3, 7, 'TUTOR')
        doc.text(3, 8, 'CATEGORIA')
        doc.text(3, 9, 'FECHA')
        doc.setFont(undefined,'normal')
      // console.log(dat);
      doc.setFont("courier");
      doc.setFontSize(14);
        doc.text(10, 3, alumno.nombres+' '+alumno.apellidos)
        doc.text(10, 4, alumno.unidad)
        doc.text(10, 5, alumno.curso)
        doc.text(10, 6, alumno.celular+'')
        doc.text(10, 7, alumno.tutor)
        doc.text(10, 8, alumno.categoria)
        doc.text(10, 9, date.formatDate(alumno.created_at,'DD/MM/YYYY'))
      // var x=0,y=
      window.open(doc.output('bloburl'), '_blank');

    },
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
    excelFiltro () {
      let filtro=[]
      this.students.forEach(r=>{
        if(r.curso==this.curso && r.categoria==this.cat){
            filtro.push(r)
        }
      })
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
          content: filtro
        },

      ]

      let settings = {
        fileName: "Olimpiadas-"+this.curso+"-"+this.cat, // Name of the resulting spreadsheet
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
