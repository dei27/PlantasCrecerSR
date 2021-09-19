const app = Vue.createApp({
    data(){
        return{
            title:'hola',
            Menu:false
        }
    },
    methods:{
        MostrarMenu(){
            this.Menu=!this.Menu
        }
    }

})

app.mount("#container")