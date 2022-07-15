<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>{{ obj.name }}</h2>
    <h3>{{ obj.age > 18 ? '成年' : '未成年' }}</h3>
    <!-- 双括号里边只能是表达式   不可以是语句 -->
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {},
  data(){
    return{
      msg:'msg展示到页面',
      obj:{
        name:'test',
        age:18,
      }
    }
  }

}
</script>

<style>

</style>
