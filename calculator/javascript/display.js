class Display {
    constructor(displayPreviousValue, displayCurrentValue) {
        this.displayCurrentValue = displayCurrentValue;
        this.displayPreviousValue = displayPreviousValue;
        this.calculator = new Calculator();
        this.operationType = undefined;
        this.currentValue = '';
        this.previousValue = '';
        this.signs = {
            add: '+',
            divide: '/',
            multiply: 'x',
            subtract: '-', 
        }
    }

    borrar() {
        this.currentValue = this.currentValue.toString().slice(0,-1);
        this.printValue();
    }

    borrarTodo() {
        this.currentValue = '';
        this.previousValue = '';
        this.operationType = undefined;
        this.printValue();
    }

    computar(tipo) {
        this.operationType !== 'igual' && this.calcular();
        this.operationType = tipo;
        this.previousValue = this.currentValue || this.previousValue;
        this.currentValue = '';
        this.printValue();
    }

    agregarNumero(numero) {
        if(numero === '.' && this.currentValue.includes('.')) return
        this.currentValue = this.currentValue.toString() + numero.toString();
        this.printValue();
    }

    printValue() {
        this.displayCurrentValue.textContent = this.currentValue;
        this.displayPreviousValue.textContent = `${this.previousValue} ${this.signs[this.operationType] || ''}`;
    }

    calcular() {
        const previousValue = parseFloat(this.previousValue);
        const currentValue = parseFloat(this.currentValue);

        if( isNaN(currentValue)  || isNaN(previousValue) ) return
        this.currentValue = this.calculator[this.operationType](previousValue, currentValue);
    }
}