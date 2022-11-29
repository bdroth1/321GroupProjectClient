function store(){
    var fullname = document.getElementById('fullname');
    var nameuser = document.getElementById('nameuser');
    var pwUser = document.getElementById('pwUser');

    localStorage.setItem('fullname', fullname.value);
    localStorage.setItem('nameuser', nameuser.value);
    localStorage.setItem('pwUser', pwUser.value);
    alert('Your account has been created');
}

function check(){
    var storedName = localStorage.getItem('nameuser');
    var storedPw = localStorage.getItem('pwUser');

    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');

    if(userName.value == storedName && userPw.value == storedPw){
        alert('You are logged in.');
        window.location.replace('./index.html');
    }else{
        alert('Error on login');
    }
}