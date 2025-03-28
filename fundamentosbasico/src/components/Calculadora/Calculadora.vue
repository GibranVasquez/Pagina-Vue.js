<script>
export default {
    data() {
        return {
            valorA: 0,
            valorB: 0,
            resultadoFinal: 0
        };
    },
    methods: {
        suma() {
            this.resultadoFinal = parseFloat(this.valorA) + parseFloat(this.valorB);
        },
        resta() {
            this.resultadoFinal = parseFloat(this.valorA) - parseFloat(this.valorB);
        },
        multiplicacion() {
            this.resultadoFinal = parseFloat(this.valorA) * parseFloat(this.valorB);
        },
        division() {
            this.resultadoFinal = this.valorB != 0 ? parseFloat(this.valorA) / parseFloat(this.valorB) : "Error";
        }
    }
};
</script>

<template>
    <div class="container">
        <div class="calculator">
            <h1>Casio FX-991SP CW</h1>
            <input type="number" v-model="valorA" placeholder="Número 1">
            <input type="number" v-model="valorB" placeholder="Número 2">
            
            <div class="buttons">
                <button class="blue" @click="suma">+</button>
                <button class="red" @click="resta">-</button>
                <button class="yellow" @click="multiplicacion">×</button>
                <button class="green" @click="division">÷</button>
            </div>
            
            <h2>Resultado: <span>{{ resultadoFinal }}</span></h2>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #2a2d43;
}

.calculator {
    background: #1a1d30;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    text-align: center;
    width: 300px;
    color: white;
    border: 2px solid #3b4cca;
}

h1 {
    font-size: 1.5rem;
    margin-bottom: 15px;
    color: #3b4cca;
}

input {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #3b4cca;
    border-radius: 5px;
    font-size: 1rem;
    background: #23263a;
    color: white;
    text-align: center;
}

.buttons {
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
}

button {
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    transition: 0.2s;
    color: white;
    width: 50px;
}

.blue { background: #3b4cca; }
.blue:hover { background: #2a38a0; }

.red { background: #d32f2f; }
.red:hover { background: #a62828; }

.yellow { background: #fbc02d; color: black; }
.yellow:hover { background: #c79100; }

.green { background: #388e3c; }
.green:hover { background: #2e7030; }

h2 {
    margin-top: 15px;
    font-size: 1.2rem;
}

span {
    font-weight: bold;
    color: #fbc02d;
}
</style>
