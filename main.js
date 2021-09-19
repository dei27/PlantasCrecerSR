// inicio de Vue3.js

const app = Vue.createApp({
    data(){
        return{
            title:'hola',
            Menu:false,
            saludo:'',
            fecha: new Date(),
        }
    },
    methods:{
        MostrarMenu(){
            this.Menu=!this.Menu
        },
        Saludo(){
            this.saludo=this.fecha
        }
    },
    created: function(){
        this.Saludo()
    }

})

app.mount("#container");

// funcion para el saludo sincronizado

(()=>{
    const saludar = document.getElementById("titleh1");
    let fecha = new Date();
    let horas = fecha.getHours();
    if (horas<12 && horas>0) {
        saludar.innerHTML="Buenos días"
    }
    else if(horas>=12 && horas<18){
        saludar.innerHTML="Buenas tardes"
    }
    else{
        saludar.innerHTML="Buenas noches"
    }
})();

