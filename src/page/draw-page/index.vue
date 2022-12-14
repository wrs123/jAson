<script setup lang="ts">

  import { defineComponent, onMounted, inject } from "vue";
  import axios from 'axios'

  let echarts = inject("echarts");
  let jsonMap = {}

  onMounted(async () => {
    await getJson()
    initDrawCanvas()
  });

  const getJson = async() => {
    const res = await axios.get('./config.json')
    let json = res.data;
    console.log(json)
    jsonMap = json
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
          roam: 'scale',
          top: '1%',
          left: '7%',
          bottom: '1%',
          right: '20%',
          symbolSize: 7,
          label: {
            position: 'left',
            verticalAlign: 'middle',
            align: 'right',
            fontSize: 9
          },
          leaves: {
            label: {
              position: 'right',
              verticalAlign: 'middle',
              align: 'left'
            }
          },
          itemStyle: {
            shadowColor: 'rgba(0, 0, 0, 0.5)',
            shadowBlur: 10
          },
          emphasis: {
            focus: 'descendant'
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
