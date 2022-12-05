
<template>
  <div id="home">
    <span class="deadline">{{ gettime }}</span>
  </div>
</template>
 
<script>
export default {
  name: "Home",
  data() {
    return {
      gettime: "", //当前时间
    };
  },
 
  methods: {
    getTime() {
    var _this = this;
      let yy = new Date().getFullYear();
      var mm =
        new Date().getMonth() > 9
          ? new Date().getMonth() + 1
          : new Date().getMonth() == 9
          ? new Date().getMonth() + 1
          : '0' + (new Date().getMonth() + 1);
      var dd = new Date().getDate() < 10 ? '0' + new Date().getDate() : new Date().getDate();
      let hh = new Date().getHours();
      let mf =
        new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes();
      let ss =
        new Date().getSeconds() < 10 ? '0' + new Date().getSeconds() : new Date().getSeconds();
      _this.gettime = yy + '-' + mm + '-' + dd + ' ' + hh + ':' + mf + ':' + ss;
    },
    currentTime() {
      setInterval(this.getTime, 1000);
    },
   
  },
  mounted() {
    this.currentTime();
  },
};
</script>
 
<style scoped>
</style>
 
 
 
 
 
 
 
​
