function gestionarFicheroXML(xmlDoc){
	let capaVacia = document.querySelector("#ficheroXML")
	let res = xmlDoc.querySelectorAll("respuesta")
	for(let i=0; i<res.length; i++)
	{
		capaVacia.innerHTML = capaVacia.innerHTML + "<p>" + res[i].textContent + "</p>"
	}
}

loadDocA("../Xml.xml","xml");