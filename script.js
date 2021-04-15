var laskutoimitus = "";

function Nappi(valinta) {

	if(valinta === "c") {
		document.laskin.naytto.value = "0";
		laskutoimitus = "";
    document.getElementById('zero').disabled = false;
    document.getElementById('one').disabled = false;
    document.getElementById('two').disabled = false;
    document.getElementById('three').disabled = false;
    document.getElementById('four').disabled = false;
    document.getElementById('five').disabled = false;
    document.getElementById('six').disabled = false;
    document.getElementById('seven').disabled = false;
    document.getElementById('eight').disabled = false;
    document.getElementById('nine').disabled = false;
    document.getElementById('desimaali').disabled = false;
	} else if(valinta === "=") {
		document.laskin.naytto.value = eval(laskutoimitus);
    document.getElementById('zero').disabled = true;
    document.getElementById('one').disabled = true;
    document.getElementById('two').disabled = true;
    document.getElementById('three').disabled = true;
    document.getElementById('four').disabled = true;
    document.getElementById('five').disabled = true;
    document.getElementById('six').disabled = true;
    document.getElementById('seven').disabled = true;
    document.getElementById('eight').disabled = true;
    document.getElementById('nine').disabled = true;
    document.getElementById('desimaali').disabled = true;
  } else {
		laskutoimitus = laskutoimitus + valinta;

		if(isNaN(laskutoimitus.charAt(0))) {
			document.laskin.naytto.value = "Virhe!";
    } else {
  			document.laskin.naytto.value = laskutoimitus;
        document.getElementById('zero').disabled = false;
        document.getElementById('one').disabled = false;
        document.getElementById('two').disabled = false;
        document.getElementById('three').disabled = false;
        document.getElementById('four').disabled = false;
        document.getElementById('five').disabled = false;
        document.getElementById('six').disabled = false;
        document.getElementById('seven').disabled = false;
        document.getElementById('eight').disabled = false;
        document.getElementById('nine').disabled = false;
        document.getElementById('desimaali').disabled = false;
      }
    }
}
