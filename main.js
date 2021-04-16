//массив, который содержит заметки и передает их в хранилище
var list = [];

/*условие при котором проверяется наличие ключа save_notes в хранилище
т.е, если мы уже что то сохраняли в LS, то сразу отображаем это */
if (localStorage.getItem('save_notes')!=undefined) {
list = JSON.parse(localStorage.getItem('save_notes'));
document.getElementById('all_notes').innerHTML = list;

}

function add_note() {
    
//получаем теги ввода данных//
var textarea = document.querySelector("textarea");
var date = document.querySelector("input");

//блок в котором содержится содержимое заметки и добавляем потом его внутрь section//
var note = document.createElement("div");
note.className = "note";
note.setAttribute('id', 'note');

//Теперь создаем элементы в которых содержиться введенная информация
var text_of_note = document.createElement("p");
text_of_note.className = "text_of_note";

var date_of_note = document.createElement("p");
date_of_note.className = "date_of_note";

//И добавляем туда текст
var text_for_text_of_note = document.createTextNode(textarea.value);
text_of_note.appendChild(text_for_text_of_note);

var date_for_date_of_note = document.createTextNode(date.value);
date_of_note.appendChild(date_for_date_of_note);       

//Добавляем полученное в note//
note.appendChild(text_of_note);
note.appendChild(date_of_note);

//Процесс сохранения записей
//получаем div note с дочернимим тегами и добавляем в список 
var html = note.outerHTML;
list.push(html);

//список конвертируем в строку и отправляем в localStorage
var list_to_string = JSON.stringify(list);
localStorage.setItem('save_notes', list_to_string);
list = JSON.parse(localStorage.getItem('save_notes'));
//в section all_notes добавляем сохранненый контент
document.getElementById('all_notes').innerHTML = list;

}

function clear_all(){
document.getElementById('all_notes').innerHTML = '';
if (localStorage.getItem('save_notes')!=undefined){
    localStorage.clear();
    list = [];
}
}