function check()
{
	var password=document.getElementById('pwd').value.toString();
	var confirmpass=document.getElementById('rpwd').value.toString();
	if (password.localeCompare(confirmpass) == 0) 
	{
            document.getElementById('msg').style.color = 'white';
            document.getElementById('msg').innerHTML = "Passwords Match";
    }
    else 
    {
            document.getElementById('msg').style.color = 'white';
            document.getElementById('msg').innerHTML = "Passwords do not match!";
    }
}

function checkEmail() 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById('mail').value))
  {
  	document.getElementById('mail_name').innerHTML='valid ';
    return (true)
  }
    document.getElementById('mail_name').innerHTML='invalid E-mail format';
    return (false)
}


