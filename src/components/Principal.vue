<template>
  <div id="principal">
    <div class="row">
   <div class="col s12 m7">
     <div class="card">
       <div class="card-image">
         <img src="../assets/retener-empleados.png">
         <span class="card-title">CRUDEmployee</span>
       </div>
       <div class="card-content">
         <p> Welcome, this is a crud so you can manage the jobs of
            the employees of your company.
             Create an account and if you already
             have an account and have good use of this CRUD.</p>
       </div>
        <div class="card-action">
          <router-link to="/register" class="btn grey">Resgister</router-link>
           <router-link to="/login" class="btn ">Login</router-link>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
}
</script>

<style>
p{
  font-size: 20px;
   font-family: "Times New Roman", Times, serif;

}

</style>
