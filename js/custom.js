function changediv()
{
	txtarea = document.getElementById("txtarea");
	output = document.getElementById("output");
	if (txtarea.value=="")
	    output.innerHTML = '<span class="grey ital">Expect Output here<span>'
	else
	    output.innerHTML = txtarea.value
}
