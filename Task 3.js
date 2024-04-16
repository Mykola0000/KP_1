// Клас EquilateralTriangle
class EquilateralTriangle {
    constructor(equalSide) {
        this.equalSide = equalSide;
    }

    get EqualSide() {
        return this.equalSide;
    }
}

// Клас IsoscelesTriangle успадковується від EquilateralTriangle
class IsoscelesTriangle extends EquilateralTriangle {
    constructor(equalSide, base) {
        super(equalSide);
        this.base = base;
    }

    static CalculateArea(a, b) {
        return (b / 4) * Math.sqrt(4 * a * a - b * b);
    }
}

// Приклад створення та використання об'єктів класів
const equilateral = new EquilateralTriangle(5);
const isosceles = new IsoscelesTriangle(4, 6);

console.log(equilateral);
console.log(isosceles);
console.log(IsoscelesTriangle.CalculateArea(isosceles.equalSide, isosceles.base));
