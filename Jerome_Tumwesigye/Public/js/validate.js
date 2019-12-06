function formValidation() {
    var surname = document.getElementById("surname");
    var givenname = document.getElementById("givenname");


    if (surnameVal(surname)) {
        if (givennameVal(givenname)) {
        }
    }

    function surnameVal(surname) {
        var surnameLen = surname.value.length;
        if (surnameLen == 0) {
            alert("Sur Name should not be empty")
            surname.focus();
            surname.style.border = "2px solid red";
            return false;
        }
        return true;
    }

    function givennameVal(givenname){
        var givennameLen = givenname.value.length;
        if (givennameLen == 0){
            givenname.focus();
            givenname.style.border = "2px solid red";
        }
    }

}