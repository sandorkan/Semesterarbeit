$(document).ready(function(){
	Audit_Index.Init_Data();
	Audit_Index.Init_Page();
    
 });
 
 var Audit_Index = {
 	Audit_Data : null,
 	Init_Data : function()
    {
    	//alert("In init");
		var rohdaten = localStorage.getItem("audit_data");
       	 	
       	if(rohdaten)
       	{
       		//alert("in if: Daten sind im lokalen Speicher vorhanden");
       		this.Audit_Data	= JSON.parse(rohdaten);
       	}else
       	{	
       		//alert("in else: Daten werden erstmalig neu erstellt");

			this.Audit_Data = a.Audit_Data_0;
			this.Daten_Speichern();
		}
  	},
  	
  	Init_Page : function()
  	{
  		// Ausfüllen der Schutzziele
  		var cEl = document.getElementById("vertraulichkeit");
  		cEl.value = this.Audit_Data.Attribut_Gewichtung.C;
  		cEl.onblur = this.Setze_Attribut_Event;
  		
  		var iEl = document.getElementById("integrität");
  		iEl.value = this.Audit_Data.Attribut_Gewichtung.I;
  		iEl.onblur = this.Setze_Attribut_Event;
  		
  		var aEl = document.getElementById("verfügbarkeit");
  		aEl.value = this.Audit_Data.Attribut_Gewichtung.A;
  		aEl.onblur = this.Setze_Attribut_Event;
  		
  		// Ausfüllen der persönlichen Daten (falls vorhanden)
  		var firmaEl = document.getElementById("Firma");
  		firmaEl.value = this.Audit_Data.Personelle_Daten.Firma;
  		firmaEl.onblur = this.Setze_Persönliche_Daten_Event;
  		
  		var abteilungEl = document.getElementById("Abteilung");
  		abteilungEl.value = this.Audit_Data.Personelle_Daten.Abteilung;
  		abteilungEl.onblur = this.Setze_Persönliche_Daten_Event;
  		
  		var datumEl = document.getElementById("Datum");
  		datumEl.value = this.Audit_Data.Personelle_Daten.Datum;
  		datumEl.onblur = this.Setze_Persönliche_Daten_Event;
  		
  		var nameEl = document.getElementById("Name");
  		nameEl.value = this.Audit_Data.Personelle_Daten.Name;
  		nameEl.onblur = this.Setze_Persönliche_Daten_Event;
  	
  	},
  	
  	Setze_Persönliche_Daten_Event : function()
  	{
  		//alert(this.value);
  		Audit_Index.Audit_Data.Personelle_Daten[this.id] = this.value;
  		Audit_Index.Daten_Speichern();
  	},
  	
  	Setze_Attribut_Event : function()
  	{
  		var attr = this.title;
  		
  		var val = parseInt(this.value);
				
		if(isNaN(val) || (val < 1 || val > 10)){
			this.value = "";
			this.focus();
			alert("Bitte eine Nummer zwischen 1 und 10 eingeben");
		}else{
			Audit_Index.Audit_Data.Attribut_Gewichtung[attr] = val;
			Audit_Index.Daten_Speichern();
		}
  		
  		
  		
  	},
  	
  	// Speichert das Audit_Data Objekt in den localStorage
    Daten_Speichern : function()
    {
    	var json = JSON.stringify(Audit_Index.Audit_Data);
        localStorage.setItem("audit_data", json);
    },
 
 }