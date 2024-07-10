function openForm() {
    document.getElementById("wrapper").style.display = "block";
   
  }
  let person = [ ];
  function closeForm() {
    document.getElementById("wrapper").style.display = "none";
    
  }
  
  function closeModal(event) {
    if (event.target === document.getElementById('wrapper') || event.target === document.getElementById('closeBtn')) {
        document.getElementById('wrapper').style.display = 'none';
    }
  }

  function deleteAll(){
    let ul=document.getElementById('contacts');
    ul.textContent="";
  }

  

  function add(){
    
    let cont=document.getElementById('contacts');
    

    let person={
      name:document.getElementById('firsName').value,
      lastName:document.getElementById('lastName').value,
      mail:document.getElementById('Email').value,
      homeAddress:document.getElementById('homeAddress').value,
      phoneNum:document.getElementById('phone').value

    };

    users.push(person);
    let li;
    let res="";
    for(let i=0;i<users.length;i++){

      li=document.createElement(li);
       res+=`<span class="pic"><img src="images/user.png" alt="user" title="user"></span>
        <span class="fname">${person[i].name}/span>
        <span class="lname">${person[i].lastNamename}/</span>
        <span class="mail">${person[i].mail}/</span>
        <span class="home">${person[i].homeAddress}/</span>
        <span class="phonenum"${person[i].phoneNum}/</span>
        <span class="btnDelet"><button class="btnD" type="button" onclick="deleteMe()">Delete</button></span>
        <span class="btnEdit"><button class="btnE" type="button" >edit</button></span>`
        li.innerHTML=res;
       cont.append(li);
      }
        
        console.log('adiel');

        
        //document.getElementById("wrapper").style.display = "none";

    }

  

  
/** 
 const users = [
      {
           name: "John Doe",
           email: "john@example.com",
           country: "USA"
       },
       {
           name: "Jane Smith",
           email: "jane@example.com",
           country: "Canada"
       },
       {
           name: "Sam Johnson",
           email: "sam@example.com",
           country: "UK"
       }
   ];
   function add1(){
   function showUsers() {
       let result = "";
       users.forEach(elem=>{
           result +=
           `<div class="user__data">
               <div class="user__name">${elem.name}</div>
               <div class="user__email">${elem.email}</div>
               <div class="user__country">${elem.country}</div>
           </div>
           `
       })
      console.log(result);
       // Display result in the resultContainer
       document.getElementById('resultContainer').innerHTML = result;


  }

}
*/

  