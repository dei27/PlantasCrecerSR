// inicio de Vue3.js

const app = Vue.createApp({
    data(){
        return{
            title:'hola',
            Menu:false,
            saludo:'',
            fecha: new Date(),
            background:['dia','tarde','noche']
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
    const saludar = document.getElementById("titleh2");
    let fecha = new Date();
    let day=fecha.getDay();
    let horas = fecha.getHours();
    switch (day) {
        case 1:
            day="lunes"
            break;
        case 2:
            day="martes"
            break;
        case 3:
            day="miércoles"
            break;
        case 4:
            day="jueves"
            break;
        case 5:
            day="viernes"
            break;
        case 6:
            day="sábado"
            break;
        default:
            day="domingo"
            break;
    }
    if (horas<12 && horas>=0) {
        saludar.innerHTML=`¡Buenos días, feliz ${day}! 🌻`
    }
    else if(horas>=12 && horas<18){
        saludar.innerHTML=`¡Buenas tardes, feliz ${day}! 🌼`
    }
    else{
        saludar.innerHTML=`¡Buenas noches, feliz ${day}! 🌷`
    }
})();

function ani(){
    document.getElementById('img').classList.toggle('classname');
}

AOS.init();

