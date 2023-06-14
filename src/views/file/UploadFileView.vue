<!--
 * @Author: yangzp
 * @Description: 
 * @Date: 2023-05-22 15:58:25
 * @FilePath: \yweb\src\views\file\UploadFileView.vue
-->
<template>
    <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="6">
            <el-upload class="upload-demo" drag :http-request="uploadFile" multiple>
                <UploadFilled class="baseIcon" />
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                <div class="el-upload__tip" slot="tip">只能上传不超过5m的文件</div>
            </el-upload>
        </el-col>
    </el-row>
</template>

<script>
export default {
    data() {
        return {
            fileList: []
        };
    },
    methods: {
        uploadFile(content) {
            console.log(content);
            // 上传图片方法
            const params = new FormData()
            params.append('file', content.file)
            this.$service.post(this.yangzpApi.file.upLoadFile, params).then(res => {
                this.$message({
                    message: 'success!',
                    grouping: true,
                    type: 'success',
                })
                // console.log(res.data);
            }).catch(function (error) {
                console.log(error);
            });
        },
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        },
        handleExceed(files, fileList) {
            this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
        },
        beforeRemove(file, fileList) {
            return this.$confirm(`确定移除 ${file.name}？`);
        }
    }
}
</script>

<style lang="scss" scoped></style>