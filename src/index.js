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
        newToDoLi.style.display = `block`;

        newToDoLi.innerHTML = `${doListArray[doListArrayCounter]}`;                           //Создаем чекбокс и записываем в переменную строки содержимое элемента массива

        //Зачеркивание отмеченных
        const checkBox = document.createElement(`input`);
        checkBox.id = `checkBox${doListArrayCounter}`;
        checkBox.type = `checkbox`;
        checkBox.addEventListener(`change`, function () {
                if (this.checked) {
                    newToDoLi.style.textDecoration = `line-through`;
                } else {
                    newToDoLi.style.textDecoration = `none`;
                }
            }
        );

        newToDoLi.insertBefore(checkBox, newToDoLi.firstChild);


        const removeCurrentButton = document.createElement(`button`); //Создание кнопки удаления

        removeCurrentButton.addEventListener(`click`, () => {                //Удаление элементов из списка вариант 1
            newToDoLi.remove();
        });
        removeCurrentButton.innerText = `x`;                               //Крестик на кнопке удаления
        newToDoLi.appendChild(removeCurrentButton);                        //Добавление кнопки удаления в строку


        doList.appendChild(newToDoLi);                                     //Добавляем в список строку с содержимым массива

        doListArrayCounter++;                                              //Увеличиваем счетчик массива на 1 для следующей записи


        /*console.log(doListArray);*/


    }

    /*Фильтр Активных*/

    const removeCheckedButton = document.getElementById(`showActive`);
    removeCheckedButton.addEventListener('click', () => {
        let counter = `0`;
        while (counter < doListArray.length) {

            let checkBox = document.getElementById(`checkBox${counter}`);
            let newToDoLi = document.getElementById(`line${counter}`);
            if (checkBox == null) {
            } else if (checkBox.checked) {

                newToDoLi.style.display = `none`;
            }
            if (checkBox == null) {
            } else if (checkBox.checked == false) {

                newToDoLi.style.display = `block`;
            }
            counter++;
        }
        ;

    });

    /*Фильтр Завершенные*/
    const showFinishedButton = document.getElementById(`showFinished`);
    showFinishedButton.addEventListener('click', () => {
            let counter = `0`;
            while (counter < doListArray.length) {

                let checkBox = document.getElementById(`checkBox${counter}`);
                let newToDoLi = document.getElementById(`line${counter}`);
                if (checkBox == null) {
                } else if (checkBox.checked == false) {

                    newToDoLi.style.display = `none`;
                }

                if (checkBox.checked == true) {

                    newToDoLi.style.display = `block`;
                }

                counter++;
            }
            ;

        }
    )
    ;

    //Сбросить фильтр

    const refreshFilterButton = document.getElementById(`refreshFilter`);
    refreshFilterButton.addEventListener('click', () => {
            let counter = `0`;
            while (counter < doListArray.length) {


                let newToDoLi = document.getElementById(`line${counter}`);
                newToDoLi.style.display = `block`;

                counter++;
            }
            ;

        }
    )
    ;
//Удаление элементов из списка вариант 2
    /*const button = document.createElement(`button`);
    button.addEventListener(`click`, () => {
        doList.removeChild(newToDoLi);
    });*/

}

main();

