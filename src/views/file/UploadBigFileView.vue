<!--
 * @Author: yangzp
 * @Description: 
 * @Date: 2023-05-22 15:58:25
 * @FilePath: \yweb\src\views\file\UploadBigFileView.vue
-->
<template>
    <div>
        <el-row type="flex" class="row-bg" justify="center">
            <el-col :span="6">
                <el-upload class="upload-demo" drag :http-request="uploadBigFile" multiple>
                    <!-- <i class="el-icon-upload"></i> -->
                    <!-- <Edit style="width: 1em; height: 1em; margin-right: 8px" /> -->
                    <UploadFilled style="color:#409eff; width: 3em; height: 3em; margin-right: 8px" />
                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                    <div class="el-upload__tip" slot="tip">分片上传大文件</div>
                </el-upload>
            </el-col>
        </el-row>
    </div>
</template>

<script>

const CHUNK_SIZE = 20 * 1024 * 1024;// 定义分片大小为20M
export default {
    data() {
        return {
            fileList: []
        };
    },
    methods: {
        uploadBigFile(content) {
            console.log(content);
            const self = this;
            const file = content.file;
            const fileSize = file.size;
            const fileName = file.name;
            this.fileList = [{ 'docName': fileName }];
            if (fileSize <= CHUNK_SIZE) {
                /** 小文件，直接上传 */
                this.singleFileUpload(self, content, file);
            } else {
                /** 分片上传*/
                this.uploadBySpiltFile(self, content, fileName, fileSize);
            }
        },
        async uploadBySpiltFile(self, content, fileName, fileSize){

        },
        singleFileUpload(a,b,c){

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