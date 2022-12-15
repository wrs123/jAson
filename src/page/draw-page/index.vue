<script setup lang="ts">

  import { defineComponent, onMounted, inject } from "vue";
  import axios from 'axios'

  let echarts = inject("echarts");
  let jsonMap:Object = {}

  onMounted(async () => {
    await getJson()
    initDrawCanvas()
  });

  const getJson = async() => {
    const res = await axios.get('./config.json')
    jsonMap = res.data;
    console.log(jsonMap)
  }

  /**
   * 初始化绘图看板
  */
  const initDrawCanvas = () => {
   
    const chartBox = echarts.init(document.getElementById("draw-canvas")); // 主要
    chartBox.setOption(
    ({
      tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove'
      },
      series: [
        {
          type: 'tree',
          data: [jsonMap],
          roam: true,
          top: '1%',
          left: '7%',
          bottom: '1%',
          right: '20%',
          symbolSize: 7,
          symbol: 'none',
          label: {
            verticalAlign: 'middle',
            backgroundColor: '#fff',
            fontSize: 9,
            borderWidth: 1,
            borderColor: '#333',
            padding: [5, 10, 5, 10],
            borderRadius: 10,
          },
          leaves: {
            label: {
              verticalAlign: 'middle',
            }
          },
          itemStyle: {
            shadowColor: 'rgba(0, 0, 0, 0.5)',
            shadowBlur: 10
          },
          lineStyle: {

          },
          emphasis: {
            focus: 'none'
          },
          expandAndCollapse: true,
          animationDuration: 550,
          animationDurationUpdate: 750
        }
      ]
    })
  );
      // 根据页面大小自动响应图表大小
      window.addEventListener("resize", function () {
        chartBox.resize();
      });
  }
</script>

<template>
 <div class="draw-page-container">
  <div id="draw-canvas"></div>
 </div>
</template>

<style lang="scss">
  .draw-page-container{
    height: 100%;
    width: 100%;

    #draw-canvas{
      height: 100%;
      width: 100%;
    }
  }
</style>
