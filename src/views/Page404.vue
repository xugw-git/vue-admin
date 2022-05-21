<template>
  <div class="container">
    <div class="inner-container">
      <div class="box">404</div>
      <el-button @click="linkHome" style="margin-top: 20px" type="info" size="small" icon="el-icon-s-home" plain round>
        回到首页</el-button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Page404',
  methods: {
    linkHome() {
      this.$router.push({ name: 'home' })
    }
  }
}
</script>

<style scoped>
.container {
  position: relative;
  height: 100vh;
  background: #eee
}

.inner-container {
  color: #fff;
  background: rgba(0, 0, 0, 0.1);
  padding: 20px 0px;
  text-align: center;
  border: 10px;
  border-radius: 2%;
  box-shadow: 0 0 20px #fff;
  width: 360px;
  height: 300px;
  position: absolute;
  top: calc(50vh - 240px);
  left: calc(50vw - 180px);
}

.box {
  color: #fff;
  font-size: 12em;
  font-weight: bold;
  font-family: Helvetica;
  text-shadow:
    0 1px 0 #ccc,
    0 2px 0 #c9c9c9,
    0 3px 0 #bbb,
    0 4px 0 #b9b9b9,
    0 5px 0 #aaa,
    0 6px 1px rgba(0, 0, 0, .1),
    0 0 5px rgba(0, 0, 0, .1),
    0 1px 3px rgba(0, 0, 0, .3),
    0 3px 5px rgba(0, 0, 0, .2),
    0 5px 10px rgba(0, 0, 0, .25),
    0 10px 10px rgba(0, 0, 0, .2),
    0 20px 20px rgba(0, 0, 0, .15);
}
</style>
