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
    const saludar = document.getElementById("titleh2");
    const saludar2 = document.getElementById("titleh3");
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
        saludar.innerHTML="¡Buenos días! 🌻";
        saludar2.innerHTML=`Feliz ${day}`;
        document.getElementById('container').classList.add('dia')
    }
    else if(horas>=12 && horas<18){
        saludar.innerHTML="¡Buenas tardes! 🌼";
        saludar2.innerHTML=`Feliz ${day}`;
        document.getElementById('container').classList.add('tarde')
    }
    else{
        saludar.innerHTML="¡Buenas noches! 🌷";
        saludar2.innerHTML=`Feliz ${day}`;
        document.getElementById('container').classList.add('noche')
    }
})();

/*funcion para quitar y poner clases*/
function ani(){
    document.getElementById('img').classList.toggle('classname');
}

/*iniciar libreria*/
AOS.init();

// Set a same-site cookie for first-party contexts
document.cookie = 'cookie1=value1; SameSite=Lax';
// Set a cross-site cookie for third-party contexts
document.cookie = 'cookie2=value2; SameSite=None; Secure';

