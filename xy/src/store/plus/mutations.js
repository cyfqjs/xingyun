export default {
    handleclose(state) {
        state.flag = false;
    },
    handleopen(state, parms) {
        if (parms == 2) {
            var str = location.href;
            state.flag = true;
            state.linkto = str.split("/")[4];
        }
    },
    /*toggleAddPic: function() {
        let vm = this;
        if (vm.imgUrls.length >= 1) {
            vm.isPhoto = false;
        } else {
            vm.isPhoto = true;
        }
    },
  addPic: function(e) {
         console.log(this)
         let els = this.$refs.divGenres.querySelectorAll('input[type=file]')
         els[0].click()
         return false
     },
     onFileChange: function(e) {
         var files = e.target.files || e.dataTransfer.files;
         if (!files.length) return;
         this.createImage(files, e);
     },
     createImage: function(file, e) {
         let vm = this;
         lrz(file[0], {
             width: 480
         }).then(function(rst) {
             vm.imgUrls.push(rst.base64);
             return rst;
         }).always(function() {
             // 清空文件上传控件的值
             e.target.value = null;
         });
     },
     delImage: function(index) {
         let vm = this;
         vm.$vux.confirm.show({
             title: '确定删除该图片?',
             onConfirm() {
                 vm.imgUrls.splice(index, 1);
             }
         })

     },
     previewImage: function(url) {
         let vm = this;
         vm.isPreview = true;
         vm.previewImg = url;
     },
     closePreview: function() {
         let vm = this;
         vm.isPreview = false;
         vm.previewImg = "";
     },
     saveImage: function() {
         let vm = this;
         let urlArr = [],
             imgUrls = this.imgUrls;

         for (let i = 0; i < imgUrls.length; i++) {
             if (imgUrls[i].indexOf('file') == -1) {
                 urlArr.push(imgUrls[i].split(',')[1]);
             } else {
                 urlArr.push(imgUrls[i]);
             }
         }

         //数据传输操作
     } */
}