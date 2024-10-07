// JavaScript用ファイル
new Vue({
    el:'#app',
    data:{
        message:'こんにちわ、Vue.js',
        count:0
    },
    methods:{
        increment(){
            this.count++;
        }
    }
});