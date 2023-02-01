function sendEmail(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let concern = document.getElementById("concern").value;

    Email.send({
        SecureToken : "2bc0d7fc-557b-42a1-9092-f8ea62f08298", /* Secure token */
        To : 'paulanjelozzz@gmail.com',
        From :'paulanjelozzz@gmail.com',
        Subject : "Someone wants to work with you!",
        Body : "Name: " + name + "<br/> User Email: " + email + "<br/> Message: " + concern
    }).then(
        message => alert(message)
    );
}

