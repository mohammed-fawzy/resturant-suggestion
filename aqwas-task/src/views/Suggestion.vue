<template> 
     <section>
        <mainHeader />
        <div v-if="ifLocation">
          <div v-if="noData">
            <div class="suggestion-page-head">
              <p class="resturan-name"> {{resturantInfo.name}} </p>
              <p class="resturan-rate" v-if="resturantInfo.rating > 0"> <span class="rate-num">{{resturantInfo.rating}} </span>/ 10 - {{resturantInfo.cat}}</p>
              <p class="resturan-rate" v-else> لا يوجد تقييم</p>
              <div>
                <a :href="resturantInfo.link" target="_blank"><img src="@/assets/img/link.png" /> </a>
              </div>
            </div>
            <GmapMap
              :center="resturantCoordinates"
              :zoom="20"
              map-type-id="roadmap"
            >
            </GmapMap> 
            <button class="suggest-btn" @click="getResturantInfo()"> اقتراح أخر</button>
          </div>
          <div v-else>
            <p class="no-data"> يرجى الانتظار قليلا  <p/> 
          </div>
        </div>
        <div v-else>
          <p class="no-location"> عزيزى الزائر يجب السماح بالحصول على موقعك حتى يتم اقتراح مطعم مناسب لك  <p/> 
        </div>
     </section>
</template>

<script>
  import mainHeader from '../components/header.vue'
  import axios from 'axios'
  export default {
    name: 'Suggestion',
    components :{
      mainHeader
    },
    data() {
      return {
        ifLocation:false,
        noData:false,
        userCoordinates: {
          lat: '',
          lng: ''
        },
        resturantCoordinates: {
          lat: '',
          lng: ''
        },
        resturantInfo: {},
      }
    },
    created() {
     this.getLocation();
      this.getResturantInfo();
    },
    methods: {
      getLocation(){
          this.$getLocation()
          .then(coordinates => {
            this.userCoordinates.lat = coordinates.lat ;
            this.userCoordinates.lng = coordinates.lng ;
            this.ifLocation = true;
          });
      },
      getResturantInfo() {
        axios.get(`https://wainnakel.com/api/v1/GenerateFS.php?uid=${this.userCoordinates.lat},${this.userCoordinates.lng}`).then((response) => {
          if (response.status == 200) {
            this.resturantInfo = response.data ;
            this.resturantCoordinates.lat = this.resturantInfo.lat ;
            this.resturantCoordinates.lng = this.resturantInfo.lon ;
            this.noData = true;
          }
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .suggestion-page-head{
      display: flex;
      flex-flow: column;
      align-items: center;
      p{
        margin: 0;
      }
    .resturan-name{
      font-size:34px ;
      color: #2c8f8c;
    }
    .rate-num{
      font-size: 20px;
    }
  }
  .vue-map-container{
    width: 100%;
    height: 400px;
    position: absolute;
    bottom: 0;
  }
  .suggest-btn{
     font-family: 'Changa', sans-serif;
      font-weight: 400;
      background-color: rgba(43,99,100,0.5);
      color:#e0f2f2 ;
      text-align: center;
      padding: .375rem .75rem;
      font-size: 30px;
      line-height: 1.5;
      border-radius: .25rem;
      width: 200px;
      position: absolute;
      bottom: 25px;
      margin-left: auto;
      margin-right: auto;
      left: 0;
      right: 0;
  }
  .no-location, .no-data{
    font-size: 25px;
    text-align: center;
    margin-top: 130px;
    margin-bottom: 30px;
  }
</style>
