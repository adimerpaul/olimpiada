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
      <q-form @submit.prevent="studentCreate">
        <div class="row">
          <div class="col-1 col-sm-2"></div>
          <div class="col-10 col-sm-8">
            <q-card>
              <q-card-section class="q-pb-none q-pt-xs">
                <div class="text-subtitle2 text-center">Datos del estudiante</div>
              </q-card-section>
              <q-card-section class="q-pt-none">
                <div class="text-subtitle2 text-grey">Nombres</div>
                <q-input dense outlined placeholder="Nombre" v-model="estudiante.nombres" required>
                  <template v-slot:prepend>
                    <q-icon name="perm_identity"/>
                  </template>
                </q-input>
                <div class="text-subtitle2 text-grey">Apellidos</div>
                <q-input dense outlined placeholder="Apellido" v-model="estudiante.apellidos" required>
                  <template v-slot:prepend>
                    <q-icon name="o_group"/>
                  </template>
                </q-input>
                <div class="text-subtitle2 text-grey">Unidad Educativa</div>
                <q-select dense outlined placeholder="Unidad Educativa" :options="colegios" v-model="estudiante.unidad" required>
                  <template v-slot:prepend>
                    <q-icon name="o_school"/>
                  </template>
                </q-select>
                <div class="text-subtitle2 text-grey">Curso</div>
                <q-select dense outlined placeholder="Curso" :options="cursos" v-model="estudiante.curso" required>
                  <template v-slot:prepend>
                    <q-icon name="o_class"/>
                  </template>
                </q-select>
                <div class="text-subtitle2 text-grey">Categoria</div>
                <q-select dense outlined placeholder="Categoria" :options="categorias" v-model="estudiante.categoriaSelect" required>
                  <template v-slot:prepend>
                    <q-icon name="o_category"/>
                  </template>
                </q-select>
                <div class="text-red" v-if="estudiante.categoriaSelect!=null" v-html="estudiante.categoriaSelect.fecha"></div>
                <div class="text-subtitle2 text-grey">Tutor</div>
                <q-input dense outlined placeholder="Tutor" v-model="estudiante.tutor" required>
                  <template v-slot:prepend>
                    <q-icon name="cast_for_education"/>
                  </template>
                </q-input>
                <div class="text-subtitle2 text-grey">Celular</div>
                <q-input dense outlined placeholder="Celular" v-model="estudiante.celular" required>
                  <template v-slot:prepend>
                    <q-icon name="o_phone"/>
                  </template>
                </q-input>
                <div class="text-subtitle2 text-grey">Boleta de pago por inscripción</div>
                  <input dense outlined type="file" @change="getImage" >
<!--                  <template v-slot:prepend>-->
<!--                    <q-icon name="home"/>-->
<!--                  </template>-->
                <q-btn color="primary" label="Guardar" type="submit" icon="add_circle_outline" class="full-width"/>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-1 col-sm-2"></div>
        </div>
      </q-form>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: `Student`,
  data() {
    return {
      estudiante:{},
      cursos:[
        '1ro Secundaria',
        '2do Secundaria',
        '3ro Secundaria',
        '4to Secundaria',
        '5to Secundaria',
        '6to Secundaria',
      ],
      colegios:[
        'ADOLFO BALLIVIAN  1',                                     
        'ADVENTISTA ELENA G. DE WHITE',                  
        'ALCIRA CARDONA TORRICO 2',
        'ALEMAN',                                                     
        'AMERICANO',        
        'ANGLO AMERICANO',                                             
        'ANICETO ARCE SECUNDARIA',                            
        'ANTOFAGASTA',                   
        'ANTONIO JOSE DE SAINZ',                                       
        'ARRIETA',                              
        'BETHANIA',                                      
        'BOLIVIA',                                                     
        'BOLIVIA DE VINTO SECUNDARIA',                                 
        'CARMEN GUZMAN DE MIER 1',            
        'CATOLICO SAN FRANCISCO',                                      
        'COMIBOL ORURO 2',      
        'DONATO VASQUEZ',                                              
        'EJÉRCITO NACIONAL SECUNDARIO',
        'EVANGELICO  WILLIAM BOOTH',                                   
        'EVANGELICO FILADELFIA',
        'FERROVIARIA SECUNDARIA',
        'FRANCISCO FAJARDO 2',
        'GENOVEVA JIMENEZ',          
        'GUIDO VILLAGÓMEZ SECUNDARIO',                                 
        'HIJOS DEL SOL 2',
        'IGNACIO LEON 2',               
        'ILDEFONSO MURGUIA',
        'INSCO  SECUNDARIA',
        'JESUS DE NAZARETH SECUNDARIA',
        'JESUS-MARIA 2',   
        'JHON FITZGERALD KENNEDY 2 DON BOSCO',
        'JOHN FITZGERALD KENNEDY 3',
        'JORGE OBLITAS SECUNDARIA',                                    
        'JOSE MARIA SIERRA GALVARRO',
        'JUAN MISAEL SARACHO SECUNDARIA',              
        'JUAN PABLO SECUNDARIA',
        'JUANA AZURDUY DE PADILLA SECUNDARIA',                
        'LA KANTUTA 3',
        'LA SALLE',  
        'LA SALLE TARDE',   
        'LOS ANGELES DE NAZARIA IGNACIA',
        'LUIS MARIO CAREAGA 2',
        'MARCELO QUIROGA SANTA CRUZ',
        'MARCOS BELTRAN AVILA', 
        'MARIA QUIROZ SECUNDARIA',                      
        'MARISCAL SUCRE SECUNDARIO',   
        'NACIONAL MIXTO HUAJARA',
        'NACIONAL SAN JOSE',
        'NACIONES UNIDAS',   
        'NUESTRA SEÑORA DEL SOCAVON 2',
        'ORURO SECUNDARIA',                                            
        'OSCAR UNZAGA DE LA VEGA 2',
        'PANTALEON DALENCE I',               
        'PANTALEON DALENCE JIMENEZ',                 
        'REEKIE',                                                 
        'ROTARIA ORURO OTTAWA',
        'SAN IGNACIO DE LOYOLA 3',
        'SAN MIGUEL',                            
        'SANTA CLAUDINA THEVENET',
        'SANTA MARIA MAGDALENA POSTEL',                                
        'SEBASTIAN PAGADOR 2',
        'SIMÓN BOLÍVAR SECUNDARIA',                                    
        'UNION  BOLIVIA JAPON',
        'VIRGEN DEL MAR 3',
      ],
      imagen:'',
      archivo : null,

    }
  },
  computed: {
    categorias(){
      let $data=[]
      if (this.estudiante.curso == '1ro Secundaria') {
        $data=[
          {label:'FÍSICA',value:'FÍSICA',fecha:'Domingo 23 de octubre Hrs: 09:00 am'},
          {label:'MATEMÁTICA',value:'MATEMÁTICA',fecha:'<b>Etapa clasificatoria:</b> Viernes 28 de octubre Hrs: 15:00<br> <b>Etapa final</b> Jueves 03 de noviembre Hrs: 15:00'},
          {label:'QUÍMICA',value:'QUÍMICA',fecha:'<b>Etapa clasificatoria:</b> Viernes 14 de octubre Hrs: 14:30<br> <b>Etapa final</b> Viernes 21 de octubre Hrs: 14:30'},
          {label:'ROBÓTICA',value:'ROBÓTICA',fecha:'Viernes 4 de Noviembre Hrs 09:00 – 12:00'},
        ]
      }else if (this.estudiante.curso == '2do Secundaria') {
        $data=[
          {label:'FÍSICA',value:'FÍSICA',fecha:'Domingo 23 de octubre Hrs: 09:00 am'},
          {label:'MATEMÁTICA',value:'MATEMÁTICA',fecha:'<b>Etapa clasificatoria:</b> Viernes 28 de octubre Hrs: 15:00<br> <b>Etapa final</b> Jueves 03 de noviembre Hrs: 15:00'},
          {label:'QUÍMICA',value:'QUÍMICA',fecha:'<b>Etapa clasificatoria:</b> Viernes 14 de octubre Hrs: 14:30<br> <b>Etapa final</b> Viernes 21 de octubre Hrs: 14:30'},
          {label:'ROBÓTICA',value:'ROBÓTICA',fecha:'Viernes 4 de Noviembre Hrs 09:00 – 12:00'},
        ]
      }else if (this.estudiante.curso == '3ro Secundaria') {
        $data=[
          {label:'ASTRONOMÍA Y ASTROFÍSICA',value:'ASTRONOMÍA Y ASTROFÍSICA',fecha:'Domingo 16 de octubre Hrs: 14:00'},
          {label:'BIOLOGÍA',value:'BIOLOGÍA',fecha:'Jueves, 20 de octubre Hrs: 09:00 am'},
          {label:'FÍSICA',value:'FÍSICA',fecha:'Domingo 23 de octubre Hrs: 09:00 am'},
          {label:'GEOGRAFÍA',value:'GEOGRAFÍA',fecha:'Viernes 04 de noviembre Hrs: 09:00 am'},
          {label:'MATEMÁTICA',value:'MATEMÁTICA',fecha:'<b>Etapa clasificatoria:</b> Viernes 28 de octubre Hrs: 15:00<br> <b>Etapa final</b> Jueves 03 de noviembre Hrs: 15:00'},
          {label:'PROGRAMACIÓN Categoría A',value:'PROGRAMACIÓN Categoría A',fecha:'Día, Mes'},
          {label:'QUÍMICA',value:'QUÍMICA',fecha:'<b>Etapa clasificatoria:</b> Viernes 14 de octubre Hrs: 14:30<br> <b>Etapa final</b> Viernes 21 de octubre Hrs: 14:30'},
          {label:'ROBÓTICA',value:'ROBÓTICA',fecha:'Viernes 4 de Noviembre Hrs 09:00 – 12:00'},
        ]
      }else if (this.estudiante.curso == '4to Secundaria') {
        $data=[
          {label:'ASTRONOMÍA Y ASTROFÍSICA',value:'ASTRONOMÍA Y ASTROFÍSICA',fecha:'Domingo 16 de octubre Hrs: 14:00'},
          {label:'BIOLOGÍA',value:'BIOLOGÍA',fecha:'Jueves, 20 de octubre Hrs: 09:00 am'},
          {label:'FÍSICA',value:'FÍSICA',fecha:'Domingo 23 de octubre Hrs: 09:00 am'},
          {label:'GEOGRAFÍA',value:'GEOGRAFÍA',fecha:'Viernes 04 de noviembre Hrs: 09:00 am'},
          {label:'MATEMÁTICA',value:'MATEMÁTICA',fecha:'<b>Etapa clasificatoria:</b> Viernes 28 de octubre Hrs: 15:00<br> <b>Etapa final</b> Jueves 03 de noviembre Hrs: 15:00'},
          {label:'PROGRAMACIÓN Categoría A',value:'PROGRAMACIÓN Categoría A',fecha:'Día, Mes'},
          {label:'QUÍMICA',value:'QUÍMICA',fecha:'<b>Etapa clasificatoria:</b> Viernes 14 de octubre Hrs: 14:30<br> <b>Etapa final</b> Viernes 21 de octubre Hrs: 14:30'},
          {label:'ROBÓTICA',value:'ROBÓTICA',fecha:'Viernes 4 de Noviembre Hrs 09:00 – 12:00'},
        ]
      }else if (this.estudiante.curso == '5to Secundaria') {
        $data=[
          {label:'ASTRONOMÍA Y ASTROFÍSICA',value:'ASTRONOMÍA Y ASTROFÍSICA',fecha:'Domingo 16 de octubre Hrs: 14:00'},
          {label:'BIOLOGÍA',value:'BIOLOGÍA',fecha:'Jueves, 20 de octubre Hrs: 09:00 am'},
          {label:'FÍSICA',value:'FÍSICA',fecha:'Domingo 23 de octubre Hrs: 09:00 am'},
          {label:'GEOGRAFÍA',value:'GEOGRAFÍA',fecha:'Viernes 04 de noviembre Hrs: 09:00 am'},
          {label:'MATEMÁTICA',value:'MATEMÁTICA',fecha:'<b>Etapa clasificatoria:</b> Viernes 28 de octubre Hrs: 15:00<br> <b>Etapa final</b> Jueves 03 de noviembre Hrs: 15:00'},
          {label:'PROGRAMACIÓN Categoría A',value:'PROGRAMACIÓN Categoría A',fecha:'Día, Mes'},
          {label:'QUÍMICA',value:'QUÍMICA',fecha:'<b>Etapa clasificatoria:</b> Viernes 14 de octubre Hrs: 14:30<br> <b>Etapa final</b> Viernes 21 de octubre Hrs: 14:30'},
          {label:'ROBÓTICA',value:'ROBÓTICA',fecha:'Viernes 4 de Noviembre Hrs 09:00 – 12:00'},
        ]
      }else if (this.estudiante.curso == '6to Secundaria') {
        $data=[
          {label:'ASTRONOMÍA Y ASTROFÍSICA',value:'ASTRONOMÍA Y ASTROFÍSICA',fecha:'Domingo 16 de octubre Hrs: 14:00'},
          {label:'BIOLOGÍA',value:'BIOLOGÍA',fecha:'Jueves, 20 de octubre Hrs: 09:00 am'},
          {label:'FÍSICA',value:'FÍSICA',fecha:'Domingo 23 de octubre Hrs: 09:00 am'},
          {label:'GEOGRAFÍA',value:'GEOGRAFÍA',fecha:'Viernes 04 de noviembre Hrs: 09:00 am'},
          {label:'MATEMÁTICA',value:'MATEMÁTICA',fecha:'<b>Etapa clasificatoria:</b> Viernes 28 de octubre Hrs: 15:00<br> <b>Etapa final</b> Jueves 03 de noviembre Hrs: 15:00'},
          {label:'PROGRAMACIÓN Categoría B',value:'PROGRAMACIÓN Categoría B',fecha:'Día, Mes'},
          {label:'QUÍMICA',value:'QUÍMICA',fecha:'<b>Etapa clasificatoria:</b> Viernes 14 de octubre Hrs: 14:30<br> <b>Etapa final</b> Viernes 21 de octubre Hrs: 14:30'},
          {label:'ROBÓTICA',value:'ROBÓTICA',fecha:'Viernes 4 de Noviembre Hrs 09:00 – 12:00'},
        ]
      }else{
        $data=[
          {label:'ASTRONOMÍA Y ASTROFÍSICA',value:'ASTRONOMÍA Y ASTROFÍSICA',fecha:'Domingo 16 de octubre Hrs: 14:00'},
          {label:'BIOLOGÍA',value:'BIOLOGÍA',fecha:'Jueves, 20 de octubre Hrs: 09:00 am'},
          {label:'FÍSICA',value:'FÍSICA',fecha:'Domingo 23 de octubre Hrs: 09:00 am'},
          {label:'GEOGRAFÍA',value:'GEOGRAFÍA',fecha:'Viernes 04 de noviembre Hrs: 09:00 am'},
          {label:'MATEMÁTICA',value:'MATEMÁTICA',fecha:'<b>Etapa clasificatoria:</b> Viernes 28 de octubre Hrs: 15:00<br> <b>Etapa final</b> Jueves 03 de noviembre Hrs: 15:00'},
          {label:'PROGRAMACIÓN Categoría A',value:'PROGRAMACIÓN Categoría A',fecha:'Día, Mes'},
          {label:'PROGRAMACIÓN Categoría B',value:'PROGRAMACIÓN Categoría B',fecha:'Día, Mes'},
          {label:'QUÍMICA',value:'QUÍMICA',fecha:'<b>Etapa clasificatoria:</b> Viernes 14 de octubre Hrs: 14:30<br> <b>Etapa final</b> Viernes 21 de octubre Hrs: 14:30'},
          {label:'ROBÓTICA',value:'ROBÓTICA',fecha:'Viernes 4 de Noviembre Hrs 09:00 – 12:00'},
        ]
      }
      return $data
    }
  },
  methods:{
    getImage(event){
      this.imagen = event.target.files[0];
    },
    studentCreate(){
      if(this.imagen==null)
      { return false}


      this.$q.dialog({
        title: 'Confirmación',
        message: '¿Está seguro de crear el estudiante?, una vez creado no podrá ser modificado y no podrá ser eliminado hasta el día del evento.<br> <div class="text-red"> A continuación se imprimirá el formulario de inscripción para que lo lleve el día del evento.</div>',
        html: true,
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.$q.loading.show()
        var data = new  FormData();

        data.append('imagen', this.imagen);
        data.append('nombres', this.estudiante.nombres);
        data.append('apellidos', this.estudiante.apellidos);
        data.append('unidad', this.estudiante.unidad);//
        data.append('curso', this.estudiante.curso);//
        data.append('tutor', this.estudiante.tutor);
        data.append('celular', this.estudiante.celular);
        data.append('categoria', this.estudiante.categoriaSelect.value);
        this.$api.post('student',data)
        .then((response)=>{
          this.$q.loading.hide()
          this.imagen=null
          this.estudiante={}
          this.$q.notify({
            color: 'positive',
            textColor: 'white',
            icon: 'check_circle',
            message: 'Estudiante creado correctamente'
          })
          // this.$router.push('/estudiantes')
        })
        .catch((error)=>{
          this.$q.loading.hide()
          this.$q.notify({
            color: 'negative',
            textColor: 'white',
            icon: 'error',
            message: 'Error al crear el estudiante'
          })
        })
      }).onCancel(() => {
        this.$q.notify({
          color: 'red',
          textColor: 'white',
          icon: 'warning',
          message: 'Creación de estudiante cancelada'
        })
      })
      // this.$api.post('estudiante',this.estudiante).then((response)=>{
      //   console.log(response)
      // },(error)=>{
      //   console.log(error)
      // })
    }
  }
}
</script>
