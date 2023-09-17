<template>
  <q-layout view="lHh Lpr lFf" class="bg-grey-12">
    <q-header >
      <q-toolbar>
        <q-toolbar-title >
          <div class="row">
            <div class="col-2 col-sm-3 flex flex-center"><q-img src="uto.png" width="30px"/></div>
            <div class="col-7 col-sm-6 flex flex-center">
              <small style="white-space: normal;letter-spacing: -0.3px;line-height: 85%;" class="text-center text-subtitle2">
                V OLIMPIADA DE CIENCIA Y TECNOLOGÍA CONVOCATORIA GENERAL
              </small>
            </div>
            <div class="col-2 col-sm-3 flex flex-center"><q-img src="fni.png" width="30px"/></div>
            <div class="col-1 col-sm-1 flex flex-center"><q-btn @click="logout" label="" color="negative" icon="logout" dense/></div>
            
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
                <div v-for="d in props.row.grupo" :key="d.id"  style="width:80px;height:80px;display: block;" @click="descargar(d)"><q-img :src="url+'/../../imagenes/'+d.imagen"  /></div>
              </q-td>
            </template>
            <template v-slot:body-cell-categoria="props">
              <q-td key="categoria" :props="props">
                <div v-for="d in props.row.grupo" :key="d.id" >{{d.categoria}}</div>
              </q-td>
            </template>

          </q-table>
          <br>
          <div class="row">
            <div class="col-3"><q-select v-model="curso" :options="cursos" label="CURSO" dense outlined /></div>
            <div class="col-3"><q-select v-model="cat" :options="categoria" label="CATEGORIA" dense outlined /></div>
            <div class="col-3"><q-btn color="green" label="Buscar"  dense @click="getListado"/></div>
            <div class="col-3"><q-btn color="accent" label="EXCEL"  dense @click="excelFiltro"/></div>

          </div>
          <div>
            <q-table label="ESTUDIANTES" :rows="filtroEst" :columns="col" />

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
      filtroEst:[],
      columnas:[
        {label:'opcion',field:'opcion',name:'opcion'},
        {label:'CI',field:'cedula',name:'cedula'},
        {label:'NOMBRES',field:'nombres',name:'nombres'},
        {label:'APELLIDOS',field:'apellidos',name:''},
        {label:'EMAIL',field:'correo',name:'correo'},
        {label:'UNIDAD',field:'unidad',name:'unidad'},
        {label:'CURSO',field:'curso',name:'curso'},
        {label:'TUTOR',field:'tutor',name:'tutor'},
        {label:'CELULAR',field:'celular',name:'celular'},
        {label:'CAPTURA',field:'imagen',name:'imagen'},
        {label:'CATEGORIA',field:'categoria',name:'categoria'},
      ],
      col:[
        {label:'CI',field:'cedula',name:'cedula'},
        {label:'NOMBRES',field:'nombres',name:'nombres'},
        {label:'APELLIDOS',field:'apellidos',name:''},
        {label:'EMAIL',field:'correo',name:'correo'},
        {label:'UNIDAD',field:'unidad',name:'unidad'},
        {label:'CURSO',field:'curso',name:'curso'},
        {label:'TUTOR',field:'tutor',name:'tutor'},
        {label:'CELULAR',field:'celular',name:'celular'},
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
    getListado(){
      if(this.curso=='' || this.cat=='')
      return false  
      this.$api.post('listado',{'curso':this.curso,'categoria':this.cat}).then((res)=>{
        console.log(res.data)
        this.filtroEst=res.data
      })
    },
    logout(){
      this.$q.loading.show()
      this.$store.dispatch('login/logout')
        .then(() => {
          this.$q.loading.hide()
          this.$router.push('/login')
        })
    },
    print(alumno){
        var doc = new jsPDF('p','cm','letter')
        var img = new Image()
        var img2 = new Image()
        img.src = 'uto.png'
        img2.src = 'fni.png'
        doc.addImage(img, 'jpg', 0.5, 0.5, 2, 2)
        doc.addImage(img2, 'jpg', 18.5, 0.5, 2, 2)
        doc.setFont(undefined,'bold')
        doc.text(5, 1.5, 'VI OLIMPIADA DE CIENCIA Y TECNOLOGÍA  ')
        doc.text(3, 3, 'CI')
        doc.text(3, 4, 'ALUMNO')
        doc.text(3, 5, 'UNIDAD EDUCATIVA')
        doc.text(3, 6, 'CURSO')
        doc.text(3, 7, 'CELULAR')
        doc.text(3, 8, 'TUTOR')
        doc.text(3, 9, 'CATEGORIAS y FECHA')
        doc.setFont(undefined,'normal')
      // console.log(dat);
      doc.setFont("courier");
      doc.setFontSize(14);
        doc.text(10, 3, alumno.cedula)
        doc.text(10, 4, alumno.nombres+' '+alumno.apellidos)
        doc.text(10, 5, alumno.unidad)
        doc.text(10, 6, alumno.curso)
        doc.text(10, 7, alumno.celular+'')
        doc.text(10, 8, alumno.tutor)
        let y=0
        doc.setFontSize(10);

        alumno.grupo.forEach(r => {
          doc.text(10, 9+y, date.formatDate(r.fecha,'DD/MM/YYYY'))
          doc.text(15, 9+y, r.categoria)
          y++
        });
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
            { label: "CI", value: "cedula" }, // Top level data
            { label: "NOMBRES", value: "nombres" }, // Top level data
            { label: "APELLIDOS", value: "apellidos" }, // Top level data
            { label: "EMAIL", value: "correo" }, // Top level data
            { label: "UNIDAD", value: "unidad" }, // Top level data
            { label: "CURSO", value: "curso" }, // Top level data
            { label: "TUTOR", value: "tutor" }, // Top level data
            { label: "CELULAR", value: "celular" }, // Top level data
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
      let filtro=this.filtroEst

      let datacaja = [
        {
          sheet: "Estudiantes",
          columns: [
            { label: "", value: "" }, // Top level data
            { label: "CI", value: "cedula" }, // Top level data
            { label: "NOMBRES", value: "nombres" }, // Top level data
            { label: "APELLIDOS", value: "apellidos" }, // Top level data
            { label: "EMAIL", value: "correo" }, // Top level data
            { label: "UNIDAD", value: "unidad" }, // Top level data
            { label: "CURSO", value: "curso" }, // Top level data
            { label: "HORA", value: "hora" }, // Top level data
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
