<template>
    <div class="container">
        <div class="row mt-4">
            <div>
                <h4>Eventos Click</h4>
                <button @click="clic" class="btn btn-danger" type="button">Dale clic</button>
                <button @click="soyBtton" class="btn btn-warning mx-2" type="button">Dale clic 2</button>
            </div>
            <div>
                <h4>Eventos Change</h4>
                <label class="input-group-text" for="">Ingresa tu nombre</label>
                <input class="form-control mt-2" type="text" id="nombre" @change="nombreE">
                <p>El nombre ingresado es:  <strong>{{ nombre }}</strong></p>
            </div>
            
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            nombre:''
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
        }
    }
}
</script>
<style>
    
</style>