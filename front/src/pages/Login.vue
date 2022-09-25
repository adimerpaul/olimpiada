<template>
  <q-layout view="lHh Lpr lFf" class="bg-grey-12">
    <q-header>
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
        <q-form @submit.prevent="login">
          <div class="row">
            <div class="col-1 col-sm-2"></div>
            <div class="col-10 col-sm-8">
              <q-card>
                <q-card-section class="q-pb-none q-pt-xs">
                  <div class="text-subtitle2 text-center">INGRESO AL ADMINISTRACION</div>
                </q-card-section>
                <q-card-section class="q-pt-none">
                  <div class="text-subtitle2 text-grey">EMAIL</div>
                  <q-input dense outlined type="email" v-model="email" required />
                  <div class="text-subtitle2 text-grey">PASSWORD</div>
                  <q-input dense outlined type="password" v-model="password" required />
                  <div class="text-subtitle2 text-grey"></div>
                  <br>

                  <q-btn color="primary" label="Ingresar" type="submit" icon="key" class="full-width"/>
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
import {globalStore} from "stores/global";
export default {
  name: `Login`,
  data() {
    return {
      user:{},
      email:'',
      password:'',
      store:globalStore(),

    }
  },
  created() {
    if (this.store.isLoggedIn){
      this.$router.push('/listado')
    }
  },
  computed: {

  },
  methods:{
    login(){
      this.$q.loading.show()
      this.$api.post('login', { email:this.email, password:this.password }).then((res) =>{
        console.log(res.data)
        this.$q.loading.hide()
        localStorage.setItem('tokenmi', res.data.token)
        this.store.isLoggedIn=true
        this.$api.defaults.headers.common['Authorization'] = 'Bearer '+res.data.token
        this.$router.push('/listado')
      }).catch(err => {
        this.$q.loading.hide();
        this.$q.notify({
          message:err.response.data.message,
          color:'red',
          icon:'error'
        })
      })
    },
  }
}
</script>
