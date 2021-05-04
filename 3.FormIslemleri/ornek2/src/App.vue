<template>
  <div class="container ">
    <form v-if="!isPush">
      <div class="row ">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <Form v-model="userdata.fullName"></Form>
          <div class="form-group">
            <label for="email">mail</label>
            <input type="email"
                   id="email"
                   class="form-control"
                   v-model.lazy.trim="userdata.email">
          </div>
          <div class="form-group">
            <label for="password">Şifre</label>
            <input type="password"
                   id="password"
                   class="form-control"
                   v-model.lazy.trim="userdata.password">
          </div>
          <div class="row">
            <div class="col-md-12 form-group">
              <label>
                <input v-model="userdata.gender" type="radio" value="erkek"> Erkek
              </label>
              <label>
                <input v-model="userdata.gender" type="radio" value="kadin"> Kadın
              </label>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <button
                  @click.prevent="Push()"
                  class="btn btn-primary">Gönder!
              </button>
            </div>
          </div>


          <!-- Soru 2 -->
          <!-- Üye Ol formu, Submit EDİLMEDİĞİ SÜRECE ekranda gözükmelidir.-->
          <!-- Üye Bilgileri Ekranı ise form Submit EDİLDİKTEN SONRA ekranda gözükecektir -->

          <!-- Soru 3 -->
          <!-- Yukarıdaki uygulamayı düzenleyerek Tam Ad (Ad + Soyad) alanı için bir Form Kontrol Elemanı üretiniz -->
        </div>
      </div>
    </form>
    <hr>
    <div class="row" v-if="isPush">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-info">
          <div class="panel-heading">
            <h4>Girdiğiniz Bilgier</h4>
          </div>
          <div class="panel-body">
            <p>Tam Ad: {{ userdata.fullName }}</p>
            <p>E-mail: {{userdata.email}} </p>
            <p>Şifre: {{userdata.password}}</p>
            <p>Cinsiyet: {{userdata.gender}} </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Form from "./Form";
export default {
  components:{
    Form,
  },
  data() {
    return {
      userdata: {
        fullName:'omer faruk',
        email: '',
        password: '',
        gender: '',
      },
      isPush: false,

    }
  },
  methods:{
    Push(){
      this.isPush=true
    }
  }
}
</script>
