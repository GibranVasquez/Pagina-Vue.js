<script>
export default {
    data() {
        return {
            display: '', 
            currentValue: 0,
            operator: null,
        }
    },
    methods: {
        agregarNumero(numero) {
            this.display += numero;
        },
        calcular() {
            try {
                this.currentValue = eval(this.display.replace(/%/g, '/100'));
                this.display = this.currentValue.toString();
            } catch (error) {
                this.display = 'Error'; 
            }            
        },
        limpiarDisplay() {
            this.display = '';
        },
        limpiarUltimaEntrada() {
            this.display = this.display.slice(0, -1);
        },
        eliminarNumero() {
            this.display = this.display.slice(0, -1);
        },
        agregarOperador(operador) {
            if (this.display && !['+', '-', '*', '/', '%'].includes(this.display[this.display.length - 1])) {
                this.display += operador === '%' ? '/100' : operador;
            }
        },
        agregarPunto() {
            if (!this.display.includes('.')) {
                this.display += '.';
            }
        },
        igual() {
            this.calcular();
        }
    },
}
</script>

<template>
    <div class="container d-flex justify-content-center mt-4" style="height: 470px;">
        <div class="card p-3 calculadora">
            <div class="card-body"> 
                <h3 class="text-center titulo">Casio fx-985</h3>
                <div class="mb-3">
                    <input type="text" class="form-control display" v-model="display" disabled>
                </div>
                <div class="botones">
                    <button class="btn especial" @click="limpiarDisplay">C</button>
                    <button class="btn especial" @click="limpiarUltimaEntrada">CE</button>
                    <button class="btn especial" @click="eliminarNumero">Supr</button>
                    <button class="btn operador" @click="agregarOperador('%')">%</button>
                    <button class="btn numero" @click="agregarNumero(7)">7</button>
                    <button class="btn numero" @click="agregarNumero(8)">8</button>
                    <button class="btn numero" @click="agregarNumero(9)">9</button>
                    <button class="btn operador" @click="agregarOperador('/')">/</button>
                    <button class="btn numero" @click="agregarNumero(4)">4</button>
                    <button class="btn numero" @click="agregarNumero(5)">5</button>
                    <button class="btn numero" @click="agregarNumero(6)">6</button>
                    <button class="btn operador" @click="agregarOperador('*')">x</button>
                    <button class="btn numero" @click="agregarNumero(1)">1</button>
                    <button class="btn numero" @click="agregarNumero(2)">2</button>
                    <button class="btn numero" @click="agregarNumero(3)">3</button>
                    <button class="btn operador" @click="agregarOperador('-')">-</button>
                    <button class="btn especial" @click="igual">=</button>
                    <button class="btn numero" @click="agregarNumero(0)">0</button>
                    <button class="btn especial" @click="agregarPunto">.</button>
                    <button class="btn operador" @click="agregarOperador('+')">+</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.calculadora {
    width: 320px;
    background: linear-gradient(145deg, #744242, #282828);
    border-radius: 15px;
    box-shadow: 5px 5px 10px #111, -5px -5px 10px #333;
}
.titulo {
    color: #00ffcc;
    font-weight: bold;
}
.display {
    background: black;
    color: #00ffcc;
    text-align: right;
    font-size: 1.5rem;
    padding: 10px;
    border-radius: 5px;
    border: none;
}
.botones {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
}
.btn {
    font-size: 1.2rem;
    padding: 10px;
    border-radius: 8px;
    transition: 0.3s;
}
.numero {
    background: #333;
    color: #00ffcc;
}
.numero:hover {
    background: #00ffcc;
    color: black;
}
.operador {
    background: #ff8800;
    color: white;
}
.operador:hover {
    background: #ff5500;
}
.especial {
    background: #ff0066;
    color: white;
}
.especial:hover {
    background: #cc0052;
}
</style>
