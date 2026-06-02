  function next(){
                let email=document.getElementById("emaili").value 
                let pass=document.getElementById("passi").value
                let uemail=localStorage.getItem("emailid")
                let upass=localStorage.getItem("pass")
                if(email=="" || pass==""){
                    alert("please fill all the the details")
                }
                else{
                    if(email==uemail &&  pass ==upass)
                {
                    alert("login Successfull")
                    window.location.href="dashboard.html"
                }
                else{
                    alert("please fill the correct details")
                }
                }

            }