<template>
  <div class="hello">
    <el-button @click="query">查询</el-button>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  created() {
  },
  methods: {
    query() {
      const params = {

      }
      this.$service.post('/yangzp/api/sysmenu/queryMenuList', { ...params }).then(res => {
        this.$message({
          message: 'success!',
          grouping: true,
          type: 'success',
        })
        console.log(res.data);
      }).catch(function (error) {
        console.log(error);
      });
    }
  },
}
</script>

