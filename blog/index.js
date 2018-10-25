function runForm() {
	var a = document.forms["myForm"]["postTitle"].value;
    var b= document .forms["myForm"]["content"].value;
    var c= document .forms["myForm"]["pic"].value;
    var d= document .forms["myForm"]["postCategory"].value;
    var e= document .forms["myForm"]["author"].value;

	 if ((a == "" || b =="" || c=="" && d=="" &&e=="")) {
        alert("text must be filled out");
        return false;
    }
}