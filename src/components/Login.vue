<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col s12 m7">
          <div class="login card-panel #fce4ec pink lighten-5">
            <h3>Login</h3>
            <form>
              <div class="input-filed">
                <i class="material-icons prefix">email</i>
                <input type="text" id="email" v-model="email">
                <label for="email">Email</label>
              </div>
              <div class="input-filed">
                <i class="material-icons prefix">lock</i>
                <input type="password" id="password" v-model="password">
                <label for="email">Password</label>
              </div>
                <button v-on:click="login" class="btn btn-large #e57373 red lighten-2" >Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'login',
  data: function(){
    return {
      email:'',
      password:''
    };
  },
  methods:{
    login: function () {
  firebase.auth ()
          .signInWithEmailAndPassword (this.email +'@domian.xta', this.password)
          .then (user => { alert('Bienvenido(a)!! ^-^'); this. $router.push('/dashboard');
          },
          error => {alert (error .mensaje);
        });
   }
  }
};
</script>

<style lang="css">
h3 {text-align: center;}

</style>
