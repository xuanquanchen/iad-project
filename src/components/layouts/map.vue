<template>

  <!--加入查询地址-->
  <div style="display: flex; width: calc(100% - 20px); margin: 10px 20px;">
    <el-input style="margin-right: 10px;" v-model="inputAddress" placeholder="请输入查询地址(城市名+地名)"
      @keyup.enter="search"></el-input>
    <el-button style="margin: 0;" @click="search">查询</el-button>
  </div>
  <!--地图组件-->
  <div id="map" style="width: 100%; height: 100%;">
    <Map ak='7u8EaeqYHtKmZtrSPDkBc0hwD8pMf3Lh' :minZoom="3" mapType="BMAP_NORMAL_MAP"
      :enableDragging="mapSetting.enableDragging" :enableInertialDragging="mapSetting.enableInertialDragging"
      :enableScrollWheelZoom="mapSetting.enableScrollWheelZoom" :enableContinuousZoom="mapSetting.enableContinuousZoom"
      :enableDoubleClickZoom="mapSetting.enableDoubleClickZoom" :enableKeyboard="mapSetting.enableKeyboard"
      :enablePinchToZoom="mapSetting.enablePinchToZoom" :enableTraffic="mapSetting.enableTraffic" ref="map"
      @initd="browserLocationGetter" :center="isSearch ? point : location.point">
      <CityList>

      </CityList>
      <!--城市选择-->

      <!--比例尺-->
      <Scale />
      <!--定位标注-->
      <template v-if="!isSearch && !browserLocationIsLoading">
        <Marker :position="location.point"></Marker>
        <Circle stroke-style="solid" strokeColor="#0099ff" :strokeOpacity="0.8" fillColor="#0099ff" :fillOpacity="0.5"
          :center="location.point" :radius="location.accuracy" />
      </template>
      <!--定位点-->
      <template v-if="isSearch && !addressGeocoderIsLoading && !isEmpty">
        <Marker :position="point"></Marker>
      </template>
    </Map>
  </div>
  <!--地址查询结果-->
  <div class="state" v-if="!browserLocationIsLoading && !isError">
    <h5>定位:</h5>
    <span>
      位置 - {{ location.address?.province }}-{{ location.address?.city }}-{{ location.address?.district }}-{{
          location.address?.street
      }}
    </span>
    <span>纬度 - {{ location.point?.lat }}</span>
    <span>经度 - {{ location.point?.lng }}</span>
    <br />
    <span>定位精度 - {{ location.accuracy }}m</span>
  </div>
  <div class="state" v-else-if="isError">定位出错：{{ status }}</div>
  <div class="state" v-else>定位中...</div>
  <!--button v-if="!browserLocationIsLoading" @click="isSearch = false && browserLocationGetter()">重新获取<button-->
  <el-row :gutter="20" v-if="!browserLocationIsLoading && !isError">
    <el-col :span="12"> <el-button v-if="!browserLocationIsLoading" plain
        @click="(isSearch = false && browserLocationGetter())">重新获取
      </el-button></el-col>
    <el-col :span="12">
      <el-button v-model="mapSetting.enableTraffic"
        @click="mapSetting.enableTraffic = !mapSetting.enableTraffic">显示/隐藏交通路况</el-button>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { locale } from 'dayjs';
import { ref, watch } from 'vue'
import { ElMessage } from 'element-plus'
import { Map, Scale, CityList, useBrowserLocation, Marker, Circle, useAddressGeocoder } from 'vue3-baidu-map-gl'


/** map setting */
const mapSetting = ref({
  enableDragging: true,
  enableInertialDragging: true,
  enableScrollWheelZoom: true,
  enableContinuousZoom: true,
  enableResizeOnCenter: true,
  enableDoubleClickZoom: true,
  enableKeyboard: true,
  enablePinchToZoom: true,
  enableAutoResize: true,
  enableTraffic: false,
})

/** fetch position */
const map = ref()
const { get: browserLocationGetter, location, isLoading: browserLocationIsLoading, isError, status } = useBrowserLocation(null, () => {
  map.value.resetCenter()
})

/** fetch city */
let city = '北京市'
watch(location, (n) => {
  city = n.address.country + n.address.province + n.address.city
})

/** address input */
const inputAddress = ref('')
const { get: addressGeocoderGetter, point, isLoading: addressGeocoderIsLoading, isEmpty } = useAddressGeocoder(() => {
  map.value.resetCenter()
})

/** address search */
const isSearch = ref(false)
function search() {
  if (inputAddress.value === '') {
    ElMessage.error('地址输入为空！')
  } else {
    addressGeocoderGetter(inputAddress.value, /.*市/.exec(inputAddress.value)?.[0] ?? city)
    isSearch.value = true
  }
}


</script>
