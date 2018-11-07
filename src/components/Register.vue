<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col s12 m8 offset-m2">
          <div class="login card-panel #e0f2f1 teal lighten-5">
            <h3>Register</h3>
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
                <button v-on:click= "register" class="btn btn-large #69f0ae green accent-2" >Resgister</button>
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
  name: 'register',
  data: function(){
    return {
      email:'',
      password:''
    };
  },
  methods:{
    register: function(e){
      firebase.auth().createUserWithEmailAndPassword(this.email +'@domian.xta', this.password)
       .then(
         user => {
          alert(`Account created for ${user.email}`);
          this.$router.push('/dashboard');
        },
        err => {
           alert(err.message);
        }
      );

      e.preventDefault();
    }
  }
};
</script>

<style lang="css">
h3 {text-align: center;}

</style>
