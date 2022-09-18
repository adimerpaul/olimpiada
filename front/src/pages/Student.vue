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
                <div class="text-subtitle2 text-grey">Tutor(Opcional)</div>
                <q-input dense outlined placeholder="Tutor(Opcional)" v-model="estudiante.tutor">
                  <template v-slot:prepend>
                    <q-icon name="cast_for_education"/>
                  </template>
                </q-input>
                <div class="text-subtitle2 text-grey">Celular</div>
                <q-input dense outlined placeholder="Celular" v-model="estudiante.celular">
                  <template v-slot:prepend>
                    <q-icon name="o_phone"/>
                  </template>
                </q-input>
                <div class="text-subtitle2 text-grey">Boleta de pago por inscripción</div>
                <q-input dense outlined type="file">
<!--                  <template v-slot:prepend>-->
<!--                    <q-icon name="home"/>-->
<!--                  </template>-->
                </q-input>
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
        'ALEMAN',
        'AMERICANO',
        'ANGLO AMERICANO',
        'ANICETO ARCE SECUNDARIAS',
        'ARRIETA',
        'DONATO VASQUEZ',
        'EVANGELICO FILADELFIA',
        'JHON FITZGERALD KENNEDY 3',
        'JUAN PABLO SECUNDARIA',
        'LA SALLE',
        'MARISCAL SUCRE SECUNDARIO',
        'NACIONES UNIDAS',
        'PANTALEON DALENCE 1',
        'REEKIE',
        'SAN IGNACIO DE LOYOLA',
        'SAN MIGUEL',
        'SIMON BOLIVAR SECUNDARIA',
      ],
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
          {label:'PROGRAMACIÓN Categoría A',value:'PROGRAMACIÓN Categoría A',fecha:'Día, Mes'},
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
    studentCreate(){
      if(this.estudiante.imagen==undefined)
      { this.estudiante.imagen=''}
      this.$q.dialog({
        title: 'Confirmación',
        message: '¿Está seguro de crear el estudiante?, una vez creado no podrá ser modificado y no podrá ser eliminado hasta el día del evento.<br> <div class="text-red"> A continuación se imprimirá el formulario de inscripción para que lo lleve el día del evento.</div>',
        html: true,
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.$q.loading.show()
        this.$api.post('student',this.estudiante)
        .then((response)=>{
          this.$q.loading.hide()
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
