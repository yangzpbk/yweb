const comPrefix = process.env.VUE_APP_YANGZP_API_PREFIX; // 服务前缀 -- 本地开发

const yangzpApi = {
    file: {
        upLoadFile: comPrefix + '/yangzp/api/fileoper/upLoadFile',
        UploadBigFileView: comPrefix + '/yangzp/api/fileoper/UploadBigFileView',
    }
};

export default yangzpApi;