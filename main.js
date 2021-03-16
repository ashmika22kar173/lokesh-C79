name_of_student=[];

function submit(){
var name1=document.getElementById("name=1").value;
var name2=document.getElementById("name=2").value;
var name3=document.getElementById("name=3").value;
var name4=document.getElementById("name=4").value;


name_of_student.push(name1);
name_of_student.push(name2);
name_of_student.push(name3);
name_of_student.push(name4);
console.log(name_of_student);

document.getElementById("lokesh").innerHTML=name_of_student;

document.getElementById("submit-button").style.display="none";
document.getElementById("sort-button").style.display="inline-block";
}
function sort(){
name_of_student.sort();
console.log(name_of_student);
document.getElementById("lokesh").innerHTML=name_of_student;

}