const add_btn = document.getElementById('add-btn');
const save_btn = document.getElementById('save-btn');
const table = document.getElementById('table-to-export');

const date_input = document.querySelector('input[type="date"]');
const test2 = document.querySelector('.test2');
const test3 = document.querySelector('.test3');
const test4 = document.querySelector('.test4');
const test5 = document.querySelector('.test5');
const test6 = document.querySelector('.test6');
const test7 = document.querySelector('.test7');
const test8 = document.querySelector('.test8');
const test9 = document.querySelector('.test9');
const test10 = document.querySelector('.test10');

var isValid = false;

loadFromLocalStorage();

save_btn.addEventListener('click', function () {
    addRow();
});

//add row to table
function addRow() {
        let row = table.insertRow(-1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);
        let cell6 = row.insertCell(5);
        let cell7 = row.insertCell(6);
        let cell8 = row.insertCell(7);
        let cell9 = row.insertCell(8);
        let cell10 = row.insertCell(9);

        cell1.innerHTML = date_input.value;
        cell2.innerHTML = test2.value;
        cell3.innerHTML = test3.value;
        cell4.innerHTML = test4.value;
        cell5.innerHTML = test5.value;
        cell6.innerHTML = test6.value;
        cell7.innerHTML = test7.value;
        cell8.innerHTML = test8.value;
        cell9.innerHTML = test9.value;
        cell10.innerHTML = test10.value;

        saveToLocalStorage();

        date_input.value = '';
        test2.value = '';
        test3.value = '';
        test4.value = '';
        test5.value = '';
        test6.value = '';
        test7.value = '';
        test8.value = '';
        test9.value = '';
        test10.value = '';
}

        

// export as excel file
function exportToExcel(type, fn, dl) {
    var elt = document.getElementById('table-to-export');
    var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
    return dl ?
        XLSX.write(wb, { bookType: type, bookSST: true, type: 'base64' }) :
        XLSX.writeFile(wb, fn || ('MySheetName.' + (type || 'xlsx')));
}

//save to local storage
function saveToLocalStorage() {
    var table = document.getElementById('table-to-export');
    var tableData = table.innerHTML;
    localStorage.setItem('tableData', tableData);
}

//load from local storage
function loadFromLocalStorage() {
    var tableData = localStorage.getItem('tableData');
    if (tableData) {
        document.getElementById('table-to-export').innerHTML = tableData;
    }
}