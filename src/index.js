function main() {
    console.log('Todo app');

    // Put your code below

    //New quests adds to araray and goes to list
    let doList, x, i;
    doList = document.getElementById('doList');
    x = [];
    i = 0;
    document.getElementById('addInput').onclick = addToList;

    function addToList() {
        let inputText = document.getElementById('input').value;
        x.push(inputText);
        doList.innerHTML += `<li>${x[i]}</li>`;
        i++;

        // console.log(x);
    }
}

main();
