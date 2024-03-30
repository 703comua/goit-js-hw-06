// Створи клас Storage, який створюватиме об'єкти для управління складом товарів. Клас очікує лише один аргумент — початковий масив товарів, який записується до створеного об'єкта в приватну властивість items.

// Оголоси наступні методи класу:

//     getItems() — повертає масив поточних товарів у приватній властивості items.
//     addItem(newItem) — приймає новий товар newItem і додає його до масиву товарів у приватну властивість items об'єкта.
//     removeItem(itemToRemove) — приймає рядок з назвою товару itemToRemove і видаляє його з масиву товарів у приватній властивості items об'єкта.


// Візьми код нижче з ініціалізацією екземпляра й викликами методів і встав його після оголошення класу для перевірки коректності роботи. У консоль будуть виведені результати їх роботи. Будь ласка, нічого там не змінюй.

class Storage {
  #items;
  constructor(products) {
    this.#items = products;
  }
  getItems() {
    return this.#items
  }
  addItem(newItem){
    this.#items.push(newItem);
  }
  removeItem(itemToRemove){
    for (let i = 0; i < this.#items.length; i++) { // пройтись по все элементам массива
      if (this.#items[i] === itemToRemove) { // если элемент массива является объектом, и у этого объекта поле value равняется 'b' и является строкой
        // https://ru.hexlet.io/qna/javascript/questions/kak-udalit-opredelennyy-element-iz-massiva-js
        this.#items.splice(i, 1); // удалить элемент из массива
      }
    }
  }
}

console.log('================='); 
console.log('>>> Task-2.js <<<'); 
console.log('================='); 

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

