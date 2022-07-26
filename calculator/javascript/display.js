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

    delete() {
        this.currentValue = this.currentValue.toString().slice(0,-1);
        this.printValue();
    }

    deleteAll() {
        this.currentValue = '';
        this.previousValue = '';
        this.operationType = undefined;
        this.printValue();
    }

    computar(type) {
        this.operationType !== 'igual' && this.calculate();
        this.operationType = type;
        this.previousValue = this.currentValue || this.previousValue;
        this.currentValue = '';
        this.printValue();
    }

    addNumber(number) {
        if(number === '.' && this.currentValue.includes('.')) return
        this.currentValue = this.currentValue.toString() + number.toString();
        this.printValue();
    }

    printValue() {
        this.displayCurrentValue.textContent = this.currentValue;
        this.displayPreviousValue.textContent = `${this.previousValue} ${this.signs[this.operationType] || ''}`;
    }

    calculate() {
        const previousValue = parseFloat(this.previousValue);
        const currentValue = parseFloat(this.currentValue);

        if( isNaN(currentValue)  || isNaN(previousValue) ) return
        this.currentValue = this.calculator[this.operationType](previousValue, currentValue);
    }
}