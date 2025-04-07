<template>
    <div class="container">
        <div class="row mt-4">

            <div>
                <h4 class="text-center">Eventos Change</h4>
                <label class="input-group-text" for="">Ingresa tu nombre</label>
                <input class="form-control mt-2" type="text" id="nombre" @change="nombreE">
                <p>El nombre ingresado es:  <strong>{{ nombre }}</strong></p>
            </div>
            
            <div>

            </div>
            <h3 class="text-center">Evento de mousecenter y de mouseleave </h3>
            <div  style="color: #ffff; width: 8000px; height: 300px; background-color: black; text-align: center; padding: 15px; border-radius: 14px; " @mousecenter="mostarMensaje" @mouseleave="ocultarMensaje">
                <p>pase el mouse</p>
                <p>{{ mensaje }}</p>

            </div>

            <div class="text-center">
                <h4>Eventos Click</h4>
                <button @click="clic" class="btn btn-danger" type="button">Dale clic</button>
                <button @click="soyBtton" class="btn btn-warning mx-2" type="button">Dale clic 2</button>
            </div>
           
            
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            nombre:'',
            mensaje:'',
        }
    },
    methods:{
        clic(){
            alert("Gracias por darle clic")
        },
        soyBtton(){
            alert("soy un boton")
        },
        nombreE(event){
            this.nombre =event.target.value
        },
        mostarMensaje(){
            this.mensaje="El mouse esta dentro del rectangulo"
        },
        ocultarMensaje(){
            this.mensaje= "El mouse esta afuera del rectangulo"
        }
    }
}
</script>
<style>
    
</style>