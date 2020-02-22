<template>
  <div class="home">
      <img src="@/assets/img/fork.png" alt="fork">
      <p class="where-to-p">وين ناكل ؟</p>
      <router-link to="/Suggestion"> <button class="suggest-btn"> اقترح</button> </router-link>
     
  </div>
</template>

<script>

export default {
  name: 'Home',
}
</script>

<style scoped lang="scss">
  .home{
    background-color:#2b6364 ;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;
    img{
      width: 150px;
      height: auto;
    }
    .where-to-p{
      font-size: 40px;
    }
    .suggest-btn{
      font-family: 'Changa', sans-serif;
      font-weight: 400;
      background-color: #e0f2f2;
      color:#2c8f8c ;
      text-align: center;
      padding: .375rem .75rem;
      font-size: 30px;
      line-height: 1.5;
      border-radius: .25rem;
      width: 200px;
    }
  }
</style>