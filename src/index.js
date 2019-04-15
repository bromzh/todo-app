function main() {
    console.log('Todo app');

    // Put your code below

    //Создание элементов в списке

    let doList = document.getElementById('doList');                //Записываем в переменную содержимое списка
    let doListArray = [];                                                  //Создаем массив
    let doListArrayCounter = 0;                                            //Выставляем значение счетчика на 0

    document.getElementById('addInput').onclick = addToList;       //При клике на кнопку добавить вызывается функция добавления строки в список дел

    function addToList() {
        let inputText = document.getElementById('input').value;    //Создаем переменную и записываем туда содержимое строки ввода
        doListArray.push(inputText);                                       //Добавляем в массив содержимое перемнной inputText

        let newToDoLi = document.createElement(`li`);              //Назначаем переменную для создания строк
        newToDoLi.id = `line${doListArrayCounter}`;

        newToDoLi.innerHTML = `<input id="checkBox${doListArrayCounter}" type="checkbox">
            ${doListArray[doListArrayCounter]}`;                           //Создаем чекбокс и записываем в переменную строки содержимое элемента массива

        const button = document.createElement(`button`);

        button.addEventListener(`click`, () => {                //Удаление элементов из списка вариант 1
            newToDoLi.remove();
        });
        button.innerText = `x`;
        newToDoLi.appendChild(button);


        doList.appendChild(newToDoLi);                                     //Добавляем в список строку с содержимым массива

        doListArrayCounter++;                                              //Увеличиваем счетчик массива на 1 для следующей записи


        /*console.log(doListArray);*/


    }

    //Удаление элементов из списка вариант 2
    /*const button = document.createElement(`button`);
    button.addEventListener(`click`, () => {
        doList.removeChild(newToDoLi);
    });*/

}

main();

