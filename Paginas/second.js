// inicio de Vue3.js

const app = Vue.createApp({
    data(){
        return{
            Menu:false,
            saludo:'',
            fecha: new Date(),
            bg1:'dia',
            bg2:'tarde',
            bg3:'noche'
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
    let fecha = new Date();
    let day=fecha.getDay();
    let horas = fecha.getHours();
    if (horas<12 && horas>=0) {
        document.getElementById('container').classList.add('dia')
    }
    else if(horas>=12 && horas<18){
        document.getElementById('container').classList.add('tarde')
    }
    else{
        document.getElementById('container').classList.add('noche')
    }
})();

/*funcion para quitar y poner clases*/
function ani(){
    document.getElementById('img').classList.toggle('classname');
}

/*iniciar libreria*/
AOS.init();

