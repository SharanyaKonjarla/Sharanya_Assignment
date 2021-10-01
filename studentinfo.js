const studentdetails = []; //creating an array
const viewelement = document.querySelector("#student-list-ul"); //id is taken from html file
document
  .querySelector("#add_button")
  .addEventListener("click", viewinformation);
document
  .querySelector("#add_button")
  .addEventListener("click", viewinformation);
function keypressTodoTextHandler(e) {
  if (e.keyCode == 13) {
    viewinformation();
  }
}
//to add event listener to add button and declaring a function to that.
function viewinformation() {
  let studentname = document.querySelector("#Student_name").value;
  let studentnumber = document.querySelector("#Student_phonenumber").value;
  let studentmail = document.querySelector("#Student_mailid").value;
  console.log(studentname);
  console.log(studentnumber);
  console.log(studentmail);

  if (studentname == "" || studentnumber == "" || studentmail == "") {
    return;
  } else {
    const studentObject = {
      
      name: studentname,
      number: studentnumber,
      mail: studentmail,
    };
    console.log(studentObject);
    studentdetails.unshift(studentObject);
    console.log(studentdetails);
    displayStudent();
  }
}

function displayStudent() {
  viewelement.innerHTML = "";
  document.querySelector("#Student_name").value = "";
  document.querySelector("#Student_phonenumber").value = "";
  document.querySelector("#student_mailid").value = "";
  //grab the text that is entered i.e the text entered in text box should be added and come down
  studentdetails.forEach((item) => {
    const student = document.createElement("li");
        student.innerHTML="name: "+item.name+",number: "+item.number+",mail: "+item.mail;
        viewelement.appendChild(student);
        console.log(studentdetails)
    })
}



