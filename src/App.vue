<template>
  <el-config-provider namespace="ep">
    <BaseHeader />

    <div style="display: flex">
      <div style="overflow: auto;width: 100%;height: calc(100vh - 56px);">
        <div id="container">
          <HelloWorld msg="Master Xuanquan." />
        </div>
        <!--<baiduMap />-->
    </div>
    </div>
  </el-config-provider>
</template>

<style>
html, body {
  overflow: hidden;
}
#app {
  text-align: center;
  color: var(--ep-text-color-primary);
}
#container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 60px;
}
.element-plus-logo {
  width: 50%;
}
</style>
