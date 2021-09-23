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

/*crear galeria con ciclo*/
(() => {
    const buttons = document.getElementById("row");

    for (let i = 1; i < 91; i++) {
         buttons.innerHTML +=`<div class="col-sm-6 col-md-4 col-lg-3 item"><a href="/img/galeria/(${i}).jpeg"data-lightbox="photos"><img class="img-fluid" src="/img/galeria/(${i}).jpeg" alt=""flor para la venta"></a><div class="textImag"><a
         href="https://api.whatsapp.com/send?phone=50689696330&text=%C2%A1Hola,%20buenas!%20Me%20interesa%20un%20producto."
         target="blank"><img src="/img/iconos/whatsapp1.svg" alt="" class="footer__logo"></a> Imagen ${i}</div></div>`;
    }
})();

