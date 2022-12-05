<template>
    <div ref="test" style="width:800px;height:300px;"></div>

</template>
  
<script>
import * as echart from 'echarts'
import { ref, onMounted } from 'vue'
export default {

    name: 'Echart1',
    setup() {
        let test = ref(null);//获取div元素，这里与vue2.x的写法不一样了
        let myChart = null;

        function pie() {
            myChart.setOption({
                graphic: {
                    elements: [
                        {
                            type: 'text',
                            left: 'center',
                            top: 'center',
                            style: {
                                text: 'Hello',
                                fontSize: 80,
                                fontWeight: 'bold',
                                lineDash: [0, 200],
                                lineDashOffset: 0,
                                fill: 'transparent',
                                stroke: '#67C23A',
                                lineWidth: 1,
                            },
                            keyframeAnimation: {
                                duration: 3000,
                                loop: true,
                                keyframes: [
                                    {
                                        percent: 0.7,
                                        style: {
                                            fill: 'transparent',
                                            lineDashOffset: 200,
                                            lineDash: [200, 0]
                                        }
                                    },
                                    {
                                        // Stop for a while.
                                        percent: 0.8,
                                        style: {
                                            fill: 'transparent'
                                        }
                                    },
                                    {
                                        percent: 1,
                                        style: {
                                            fill: '#67C23A'
                                        }
                                    }
                                ]
                            }
                        }
                    ]
                }
            })
        }


        onMounted(() => {
            myChart = echart.init(test.value);
            pie()
        })


        return {
            test//test变量必须要写，如果没写，就拿不到div元素
        }
    },

}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
  
  
  