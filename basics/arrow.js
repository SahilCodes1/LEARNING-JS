console.log(this); // here in node environment we get no output for this as it has no context(scope)
                   //however in browser we get windows and a lot of output for this cmd

//function mine()
//{console.log(this);} //here we get some output because it has context

//node basics/arrow.jsmine()

function anything()
{username:"sahil"
    console.log(this.username); //when we try to get username by this, we get {}
}

const user = {
    username: "sahilsh",
    isloggedin: true,
              welcomemessage : function(){
                console.log(`${this.username}, welcome to the website`); //here we can get username as the func is in the obj
                console.log(this);  //here this gives us the obj
              }
}

user.welcomemessage()  //this call executes the func with first username
user.username= "yuvi"  //we change the username
user.welcomemessage()  //this call executes the func with changed username