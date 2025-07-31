# Frontend Mentor - Tip calculator app solution


Це виконання домашнього завдання по [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX).


## Table of contents

- [Frontend Mentor - Tip calculator app solution](#frontend-mentor---tip-calculator-app-solution)
  - [Table of contents](#table-of-contents)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)


### Screenshot

![](../design/desktop-design-completed.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

Роботу почав з каркасу макету у Figma. Спочатку HTML, потім додав стилі і обробку подій Javascript

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- JavaScript
- Regex


### What I learned

В цій роботі дізнався про важливі деталі,  які виникають при обробці форм. А саме:

1. Для того, щоб дозволити введення тільки цифр і деяких інших символів (наприклад, крапка) потрібне поле вводу `input type="text"`, оскільки поле `input ttype="number"` одразу після введення крапки робить `submit`  форми. Далі можна використовувати регулярні вирази. наприклад:
```js
    value = value.replace(/[^\d.]+/g, "");
```
2. Можна використовувати можливості кастомної валідації, наприклад, для зміни стилю:

```css
input:invalid {
    border-color: var(--color-invalid);
}
```
```js
element.setCustomValidity("Can't be zero");
```
Повідомлення не відображається, але поле отримує псевдоклас `:invalid`. Стандартне для браузера повідомлення про помилку можна відобразити за допомогою метода `reportValidity("Повідомлення про помилку")`.

3. При виконанні роботи потрібно було очищати поля вводу форми. Це можна зробити стандартним методом форми `form.reset()`. Але несподівано виникла помилка, яка призводила до того, що форма не очищалась. В консолі відображалась помилка `form.reset() s not a function`. Так я дізнався, що це відбувалось через конфлікт імен. Виявилось, що я надав для кнопки `id=reset`, і коли викликав `form.reset()`, то браузер думав, що я хочу отримати доступ до елемента `<buton>` і вже в нього викликати метод `reset()`:
```html
<button type="reset" class="reset disabled" id="resetButton" disabled>Reset</button>


Також варто було б додати логіку для обмеження максимальних сум і відсотків.
