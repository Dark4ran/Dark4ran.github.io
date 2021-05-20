function gestionarFicheroXML(xmlDoc){
	let capaVacia = document.querySelector("#ficheroXML")
	let con = xmlDoc.querySelectorAll("mensaje")
	for(let i=0; i<con.length; i++)
	{
		capaVacia.innerHTML = capaVacia.innerHTML + "<p>" + con[i].textContent + "</p>"
	}
}

loadDocA("../Xml.xml","xml");