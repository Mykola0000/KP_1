function TriangleArea(base = 5, height = 4) {
    // Обчислення площі трикутника
    var area = 0.5 * base * height;
    // Виведення результату у консоль
    console.log("Площа трикутника з основою", base, "та висотою", height, "дорівнює", area);
    // Повернення значення площі
    return area;
}

// Виклик функції зі значеннями за замовчуванням
TriangleArea();
