
// var name =document.getElementById("name").value;
// var email =document.getElementById("email").value;
// var pass =document.getElementById("pass").value;

var arr1=[];

var data={

    name:name.value,
    email:email.value,
    pass:pass.value
    
}
if(localStorage.getItem("arr1")!=null){
    

    arr1=JSON.parse(localStorage.getItem("arr1"));
     console.log(arr1);
}


function signup(){

    var name =document.getElementById("name").value;
    var email =document.getElementById("email").value;
    var pass =document.getElementById("pass").value;


    const emailRegex = /^[\w.-]+@[\w.-]+\.(com)$/i;

    // Example usage:
    // const email = 'example@example.com';
    if (emailRegex.test(email)) {
    console.log('Valid email!');
    } 
    else {
    console.log('Invalid email!');
    }

    if(name==''||email==''||pass==''){
        document.getElementById("para").classList.replace("d-none","d-block");
    }
    else if(email.value==email){

        document.getElementById("para3").classList.replace("d-none","d-block");
    }
    else {
        document.getElementById("oki").classList.replace("d-none","d-block");
        window.location.href=`file:///D:/course%20front%20end%20assgiment/Smart%20Login/index.html`;

    }

    var data={

        name:name,
        email:email,
        pass:pass
        
    }
    console.log(data);
        
    arr1.push(data);
    localStorage.setItem('arr1',JSON.stringify(arr1));
    
} 



function login(){

    var email =document.getElementById("email").value;
    var pass =document.getElementById("pass").value;
    
    if(email==''|| pass==''){

        document.getElementById("para").classList.replace("d-none","d-block");
    }
    else{
        for(let i = 0 ;i<arr1.length;i++){
            if(arr1[i].email == email && arr1[i].pass== pass) {

                window.location.href=`file:///D:/course%20front%20end%20assgiment/Smart%20Login/index3.html`;
                localStorage.setItem("name",arr1[i].name);

          } 
          else if(arr1[i].email != email && arr1[i].pass != pass){
         
            document.getElementById("para2").classList.replace("d-none","d-block");
            
          }
          
      }
    }
}





function logout(){

    window.location.href=`file:///D:/course%20front%20end%20assgiment/Smart%20Login/index.html`;

}


