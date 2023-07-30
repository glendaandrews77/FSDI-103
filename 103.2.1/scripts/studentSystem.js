function register(){
    let studentName = prompt("Enter student name");

    document.write('<li  class="text">${studentName}</li>');
    document.getElementById("studentList") .innerHTML='<li class="text">${studentName}</li>';
}