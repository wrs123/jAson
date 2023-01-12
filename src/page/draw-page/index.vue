<script setup lang="ts">

  import { onMounted, inject, reactive } from "vue";
  import axios from 'axios'
import { Obj } from "_@sxzz_popperjs-es@2.11.7@@sxzz/popperjs-es";
import { keysOf } from "_element-plus@2.2.28@element-plus/es/utils";


  const echarts:any = inject("echarts");
  let jsonMap:Object = {}
  let menuObj:any = reactive({top: 0, left: 0, show: false})
  let menuList = reactive(['添加节点', '展开节点']) //操作菜单列表

  onMounted(async () => {
    await getJson()
    initDrawCanvas()
  });

  //获取本地json文件
  const getJson = async() => {
    const res = await axios.get('./config.json')
    jsonMap = analysisJsonMap(res.data);
  }

  //解析json文件为渲染可用格式
  function analysisJsonMap (_originalJson:Object){
    let _resJson:Object = {} 
    let _key : keyof Object;

    for(_key in _originalJson){
      const _value = _originalJson[_key]

      if(typeof _value == 'object'){

      }

      console.warn(_key, typeof _value)
    }


    return {}
  }


  /**
   * 初始化绘图看板
  */
  const initDrawCanvas = () => {
    
    const chartBox = echarts.init(document.getElementById("draw-canvas")); // 主要
    chartBox.on("contextmenu", treeNodeclick); //点击事件
    chartBox.setOption(
    ({
      tooltip: {
       show: false
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
          // expandAndCollapse: false,
          label: {
            verticalAlign: 'middle',
            backgroundColor: '#fff',
            fontSize: 14,
            borderWidth: 1,
            borderColor: '#333',
            padding: [8, 15],
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

  const treeNodeclick = (_param:any) => {
    console.warn(_param)
    /* true 代表点击的是圆点
       fasle 表示点击的是当前节点的文本
    */
    if(_param.event.target.culling === true){
      //点击元素为圆点则退出不响应，点击为label后继续响应
      return
    }

    menuObj.top = (_param.event.event.clientY+15)+'px'
    menuObj.left = (_param.event.event.clientX+15)+'px'
    menuObj.show = true

  }

//   {
//     "name": "tree",
//     "children": [
//         {
//             "name": "tree1",
//             "children": [
//                 {
//                     "name": "item1"
//                 }
//             ],
//             "collapsed": false
            
//         },
//         {
//             "name": "tree2",
//             "children": [
//                 {
//                     "name": "item12"
//                 }
//             ],
//             "collapsed": false
            
//         },
//         {
//             "name": "tree3",
//             "children": [
//                 {
//                     "name": "item13"
//                 }
//             ],
//             "collapsed": false
            
//         },
//         {
//             "name": "tree4",
//             "children": [
//                 {
//                     "name": "item4"
//                 }
//             ],
//             "collapsed": false
            
//         }
//     ]
    
// }
</script>

<template>
 <div class="draw-page-container">
  <div id="draw-canvas"></div>
  <div class="draw-menu-mask" v-show="menuObj.show" @click.stop="menuObj.show = false">
    <div class="draw-menu" >
      <span 
        v-for="(item, index) in menuList" 
        :key="index"
        @click.stop=""
      >{{item}}</span>
  
    </div>
  </div>
  
 </div>
</template>

<style lang="scss" scoped>
  .draw-page-container{
    height: 100%;
    width: 100%;
    background-size: 20px 20px;
    background-position: 50%;
    background-repeat: repeat;
    background-image: linear-gradient(90deg, rgb(255 255 255 / 4%) 3%, transparent 0), linear-gradient(1turn, rgb(255 255 255 / 4%) 3%, transparent 0);


    #draw-canvas{
      height: 100%;
      width: 100%;
    }

    .draw-menu-mask{
      width: 100vw;
      height: 100vh;
      z-index: 999;
      position: fixed;
      inset: 0;
      background: rgba(255,255,255,0);
      // backdrop-filter: blur(2px);

      .draw-menu{
        position: absolute;

        background: rgba(255,255,255,1);
        backdrop-filter: blur(5px);
        
        top: v-bind('menuObj.top');
        left: v-bind('menuObj.left');
        border-radius: 4px;
        border: 1px solid #f2f3f5;
        flex-direction: column;
        display: flex;

        span{
          cursor: pointer;
          padding: 4px 16px;
          transition: all .3s;
          font-size: 14px;
          color: #333;

          &:hover{
            background: rgba(0,0,0,.05);
          }
        }
      }
    }
   
  }
</style>
