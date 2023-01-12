<template>
   <div class="start-page-container content-container">
      <h1>jAson</h1>
      <div class="title">开始使用</div>
      <div class="select-item button-primary" @click="addParam">
         <el-icon>
            <DocumentAdd />
         </el-icon>
         <span>创建配置文件</span>
      </div>
      <div class="select-item button-primary">
         <el-icon><FolderOpened /></el-icon>
         <span>打开配置文件</span>
      </div>
   </div>
</template>

<script setup lang="ts">
   import { useRouter } from 'vue-router' 
   const router = useRouter()

   const addParam = () =>{
      router.push({
         path: '/operation-board',
         query: {
            tab: 222
         }
      })


   }
</script>

<style scoped lang="scss">

   .start-page-container{
      overflow: hidden;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .title{
         font-size: 36px;
         font-weight: 100;
         margin-bottom: 10px;
      }

      .select-item{
         margin-top: 20px;
         padding: 10px 18px;
         border-radius: 6px;
         display: flex;
         align-items: center;
         cursor: pointer;
         font-weight: lighter;

         .el-icon{
            margin-right: 4px;
            font-size: 17px;
         }
      }
   }
     
</style>
