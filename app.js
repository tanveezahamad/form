function f1(){
    var a = document.getElementById("Name").value;
    var b = document.getElementById("Password").value;
    document.write("Name: " + a + "<br>Password: " + b);
    return false; // Prevent form submission
}