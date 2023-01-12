<template>
   <div class="operation-board-container content-container">
    <!-- <div class="top-bar">
      <span @click="routeBack" class="back-button button-primary">
        <el-icon><ArrowLeft /></el-icon>
        返回
      </span>
    </div> -->
    <div class="top-bar">
      <div class="button-item">
        保存
      </div>
      <div class="button-item">
        导出
      </div>
      <div class="button-item">
        导出工具
      </div>
    </div>
    <div class="slide-bar">

    </div>
    <DrawPage></DrawPage>
   </div>
</template>

<script setup lang="ts">
  import DrawPage from '../draw-page/index.vue'
  import { useRouter } from 'vue-router' 
  const router = useRouter()

  const routeBack = () => {
    router.back()
  }

</script>

<style scoped lang="scss">
  .operation-board-container{
    width: 100%;
    height: 100%;

    .top-bar{
      padding: 6px 12px;
      position: fixed;
      top: 25px;
      background: #434343;
      z-index: 2;
      left: 50vw;
      border-radius: 50px;
      flex-direction: row;
      display: flex;

      .button-item{
        padding: 3px 12px;
        border-radius: 40px;
        font-size: 12px;
        cursor: pointer;
        
        &:hover{
          background: #f2f2f2;
          color: #333;
        }
      }

      .back-button{
        padding: 6px 12px;
        font-size: 14px;
        font-weight: lighter;
        border-radius: 4px;
        display: inline-flex;
        align-items: center;
        transition: none;

        .el-icon{
          margin-right: 4px;
        }
      }
    } 
  }
</style>
