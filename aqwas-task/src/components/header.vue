<template>
    <section class="main-header">
      <router-link to="/">
       وين ناكل ؟  
       </router-link>
       <img src="@/assets/img/fork.png" />
    </section>
</template>

<script>
  export default {
    name: 'mainHeader',
  }
</script>

<style scoped lang="scss">
  .main-header {
       height: 70px;
       background-color:#2b6364 ;
       display: flex;
       justify-content: center;
       align-items: center;
       a{
          color: #fff;
          text-decoration: none;
       }
       img {
          width: 30px;
          margin: 0 10px;
       }
  }
</style>
