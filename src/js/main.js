import Vue from 'vue'
import App from '../vue/App'
import '../css/base'

function getText(){
    ajax('getblock?page=1',(data)=>{
      this.text = data;
    })
 }
const app = new Vue({
    el:"#app",
    template:"<App></App>",
    data:{

    },
    components:{
        App,
    }
})