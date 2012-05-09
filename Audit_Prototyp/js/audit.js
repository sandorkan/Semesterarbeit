$(document).ready(function(){
    Audit.Audit_Init();
    Audit.Create_List();
    Audit.Create_Links();
    $("#pk_list").accordion();
 });

// In dieser Variabel befinden sich die Felder und Methoden die es zur Auswertung des Audits braucht
var Audit = {
   	Audit_Data : null,
    
    // Speichert das Audit_Data Objekt in den localStorage
    Daten_Speichern : function()
    {
    	var json = JSON.stringify(Audit.Audit_Data);
        localStorage.setItem("audit_data", json);
    },
    
    // Audit_Auswerten.Hier wird der gesamte Berechnungsvorgang ausgeführt
    // Zuerst werden alles PKs berechnet, dannach die Sicherheitsaspekte und zum Schluss der gesamte Audit
    // Dazu werden die Helferfunktion PK_Resultat_Berechnen, Aspekt_Resultat_Berechnen und, Audit_Resultat_Berechnen verwendet 
    Audit_Auswerten : function() 
    {
    	var sa = Audit.Audit_Data.Sicherheitsaspekt;
    	
    	for(var saNr in sa)
    	{
    		var sicherheitsaspekt = sa[saNr];
    		
    		var pks = sicherheitsaspekt.Prüfungskriterium;
    		
    		for(var pkNr in pks)
    		{
    			var prüfungskriterium = pks[pkNr];
    			
    			// Berechnet Resultat jedes PKs dieses Sicherheitsaspektes
    			Audit.PK_Resultat_Berechnen(prüfungskriterium);
    		}
    		
    		//Berechnet das Resultat des Sicherheitsaspekts
    		Audit.Aspekt_Resultat_Berechnen(sicherheitsaspekt);
    	}
    	
    	// Berechnet das Gesamtresultat
    	Audit.Audit_Resultat_Berechnen(sa);
    
    },
    
   	// Erwartet als Argument das Prüfungskriterium das Bewertet wurde sowie die Bewertung
   	PK_Bewerten : function(pk, bewertung)
	{
		pk.PK_Bewertung = bewertung;
		//this.PK_Resultat_Berechnen(pk);
	},
        	
   	// Erwartet als Argument das Prüfungkriterium dessen Resultate berechnet werden sollen
   	PK_Resultat_Berechnen : function(pk)
	{
		pk.Attribut_Resultat.C = pk.Attribut_Konsequenz.C * pk.PK_Gewichtung * pk.PK_Bewertung;
		pk.Attribut_Resultat.I = pk.Attribut_Konsequenz.I * pk.PK_Gewichtung * pk.PK_Bewertung;
		pk.Attribut_Resultat.A = pk.Attribut_Konsequenz.A * pk.PK_Gewichtung * pk.PK_Bewertung;
	},
        		
    // Erwartet als Argument einen Sicherheitsapsekt und berechnet die Attribut-Erfüllung
    Aspekt_Resultat_Berechnen : function(sa)
    {
    	// Zuerst werden die Resultate zurückgesetzt, da diese sich sonst bei vermehrtem Einsatz kumulieren
    	sa.Max_Sum.C = 0;
        sa.Max_Sum.I = 0;
        sa.Max_Sum.A = 0;
        		
        sa.Aspekt_Resultat.C = 0;
        sa.Aspekt_Resultat.I = 0;
        sa.Aspekt_Resultat.A = 0;
    	
    	for(var pk_nr in sa.Prüfungskriterium) 
    	{
        	var pk = sa.Prüfungskriterium[pk_nr];
        	
        	if(pk.Relevant)
        	{
        		sa.Max_Sum.C += pk.Attribut_Konsequenz.C * pk.PK_Gewichtung;
        		sa.Max_Sum.I += pk.Attribut_Konsequenz.I * pk.PK_Gewichtung;
        		sa.Max_Sum.A += pk.Attribut_Konsequenz.A * pk.PK_Gewichtung;
        		
        		sa.Aspekt_Resultat.C += pk.Attribut_Resultat.C;
        		sa.Aspekt_Resultat.I += pk.Attribut_Resultat.I;
        		sa.Aspekt_Resultat.A += pk.Attribut_Resultat.A;
        	}
        }
        
        var ar = sa.Aspekt_Resultat;
        ar.Total = ar.C + ar.I + ar.A;
        
        var ms = sa.Max_Sum;
        ms.Total = ms.C + ms.I + ms.A;
        
        // Berechnung der eigentlichen Erfüllung des Sicherheitsaspektes
        sa.SA_Erfuellung.C = sa.Aspekt_Resultat.C / sa.Max_Sum.C;
        sa.SA_Erfuellung.I = sa.Aspekt_Resultat.I / sa.Max_Sum.I;
        sa.SA_Erfuellung.A = sa.Aspekt_Resultat.A / sa.Max_Sum.A;
        
        sa.SA_Erfuellung.Total = ar.Total / ms.Total;
        
    },
        
    // Erwartet als Aspekt alle Sicherheitsaspekte und berechnet die End-Bewertung des Audits
    Audit_Resultat_Berechnen : function(sicherheitsaspekte)
    {
    	var aud = Audit.Audit_Data;
    	
    	// Zuerst werden die Resultate zurückgesetzt, da diese sich sonst bei vermehrtem Einsatz kumulieren
		aud.Max_Sum.C	= 0;
    	aud.Max_Sum.I	= 0;
    	aud.Max_Sum.A	= 0;
    		
    	aud.Resultat.C = 0;
    	aud.Resultat.I = 0;
    	aud.Resultat.A	= 0;
    	
    	for(var i in sicherheitsaspekte)
    	{	
    		var sa = sicherheitsaspekte[i];
    		
    		aud.Max_Sum.C	+= sa.Max_Sum.C;
    		aud.Max_Sum.I	+= sa.Max_Sum.I;
    		aud.Max_Sum.A	+= sa.Max_Sum.A;
    		
    		aud.Resultat.C += sa.Aspekt_Resultat.C;
    		aud.Resultat.I += sa.Aspekt_Resultat.I;
    		aud.Resultat.A	+= sa.Aspekt_Resultat.A;
    	}
    	
    	aud.Erfuellung_Proz.C = aud.Resultat.C / aud.Max_Sum.C;
    	aud.Erfuellung_Proz.I = aud.Resultat.I / aud.Max_Sum.I;
    	aud.Erfuellung_Proz.A = aud.Resultat.A / aud.Max_Sum.A;
    	
    	var ms = aud.Max_Sum;
    	ms.Total = ms.C + ms.I + ms.A;
    	
    	var res = aud.Resultat;
    	res.Total = res.C + res.I + res.A;
    	
    	aud.Erfuellung.C = (aud.Resultat.C / aud.Max_Sum.C) * aud.Attribut_Gewichtung.C;
    	aud.Erfuellung.I = (aud.Resultat.I / aud.Max_Sum.I) * aud.Attribut_Gewichtung.I;
    	aud.Erfuellung.A = (aud.Resultat.A / aud.Max_Sum.A) * aud.Attribut_Gewichtung.A;
    	
    	var audit = aud.Erfuellung;
    	audit.Total = audit.C + audit.I + audit.A;
        
        aud.Erfuellung_Proz.Total = audit.Total / (aud.Attribut_Gewichtung.C+aud.Attribut_Gewichtung.I+aud.Attribut_Gewichtung.A);
       
    },
        	
    /* Diese Funktion wird zu Beginn des Programms aufgerufen. Befindet sich bereits ein "audit_data" Objekt
     * im local Storage wird es gelesen, geparsed und in der Audit_Data Variabel abgespeicher
     * Befindet es sich noch nicht im LocalStorage so wird ein Grundgerüst erstellt, als Audit_Data Variabel
     * zur Verfügung gestellt und als audit_data im localStorage abgespeichert
     */
	Audit_Init : function()
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
			Audit.Daten_Speichern();

        }
    },
    
    Audit_Reset : function()
    {
    	localStorage.removeItem("audit_data");
    	window.location.reload(false);
    },
    
    // In dieser Methode (2 for-Schleifen) wird die HTML Liste erstellt
    Create_List : function()
    {
    	var pk_list = document.getElementById("pk_list");
		
		var sa = this.Audit_Data.Sicherheitsaspekt;
		
		for(var i in sa)
		{
			sicherheitsaspekt = sa[i];
			
			var saNr = parseInt(i) + 1;
			saNr = saNr + "";
			
			sicherheitsaspekt.ID = "SA"+saNr;
			
			var h3 = document.createElement("h3");
			
			var erfC = Math.round(sicherheitsaspekt.SA_Erfuellung.C * 100);
			var erfI = Math.round(sicherheitsaspekt.SA_Erfuellung.I * 100);
			var erfA = Math.round(sicherheitsaspekt.SA_Erfuellung.A * 100);
			
			erfC += "%";
			erfI += "%";
			erfA += "%";
			
			if(sicherheitsaspekt.SA_Erfuellung.C == null){ erfC = "-";}
			if(sicherheitsaspekt.SA_Erfuellung.I == null){ erfI = "-";}
			if(sicherheitsaspekt.SA_Erfuellung.A == null){ erfA = "-";}
			
			h3.innerHTML = "<a href='#' + id="+ sicherheitsaspekt.ID +">" + sicherheitsaspekt.Name + " - C: " + erfC + ", I: " + erfI + ", A: " + erfA + "</a>";
			
			pk_list.appendChild(h3);
			
			var div = document.createElement("div");
			var table = document.createElement("table");
			
			for(var pk in sicherheitsaspekt.Prüfungskriterium)
			{
				prüfungskriterium = sicherheitsaspekt.Prüfungskriterium[pk];
				
				// Hier wird zuerst 1 hinzugezählt und die Nr dannach wieder in einen String geparsed
				// Dannach wird daraus ein PK-Referenz String erzeugt, der mit der PK-Nr im Audit_Data Objekt übereinstimmt
				// Dadurch weiss man, wenn eine Option ausgewählt wurde, welcher PK gemeint war
				//var saNr = parseInt(i) + 1;
				var pkNr = parseInt(pk) + 1;
				//saNr = saNr + "";
				pkNr = pkNr + "";
				var pkRef = "PK" + saNr + "." + pkNr;
				
				var tr = document.createElement("tr");
				
				var td1 = document.createElement("td");
				td1.innerHTML = prüfungskriterium.Name;
				
				var td2 = document.createElement("td");
				
				// dem select muss eine event-methode zugefügt werden
				var select = document.createElement("select");
				select.title = pkRef;
				select.id = pkRef;
				
				//hier werden die options des select elementes definiert. je nach pk-bewertung muss dabei eine spezifische option ausgewählt sein
				var nok = document.createElement("option");
				nok.innerHTML = "Nein";
				nok.setAttribute("value","Nein");
				
				var akz = document.createElement("option");
				akz.innerHTML = "Teilweise";
				akz.setAttribute("value","Teilweise");
				
				var ok = document.createElement("option");
				ok.innerHTML = "Ja";
				ok.setAttribute("value","Ja");
				
				var nrel = document.createElement("option");
				nrel.innerHTML = "Nicht relevant";
				nrel.setAttribute("value","nichtRelevant");
				
				if(prüfungskriterium.Relevant) {
					switch(prüfungskriterium.PK_Bewertung) {
						case 0:
  							nok.selected = true;
  						break;
						case 0.5:
  							akz.selected = true;
  						break;
						case 1:
  						 	ok.selected = true;
  						break;
					}
				}else {
					nrel.selected = true;
				}
				
				select.appendChild(nok);
				select.appendChild(akz);
				select.appendChild(ok);
				select.appendChild(nrel);
				
				select.onchange = this.OptionChosen_EventHandler;
				//$(select).change({this.OptionChosen_EventHandler);
				
				td2.appendChild(select);
				
				tr.appendChild(td1);
				tr.appendChild(td2);
				table.appendChild(tr);
			}
			
			div.appendChild(table);
			pk_list.appendChild(div);
			
		}
		
		// Das Fenster mit der Totalen-Auswertung wird upgedated
    	var totRes = document.getElementById("totalResult");
    	
    	var erfC = Math.round(Audit.Audit_Data.Erfuellung_Proz.C * 100);
    	var erfI = Math.round(Audit.Audit_Data.Erfuellung_Proz.I * 100);
    	var erfA = Math.round(Audit.Audit_Data.Erfuellung_Proz.A * 100);
    	
    	totRes.innerHTML = "Erfüllung Total: <br> C: "+ erfC +"% <br> I: "+ erfI +"% <br> A: "+ erfA +"% <br>";
		
		
    },
    
    OptionChosen_EventHandler : function(event)
    {
    	
    	var val = this.value;
		var id = this.id;
		
		//alert(this.id + " in onchange");
    	
    	sicherheitsaspekte = Audit.Audit_Data.Sicherheitsaspekt;
    	
    	for(var saNr in sicherheitsaspekte)
    	{
    		var sa = sicherheitsaspekte[saNr];
    		
    		for(var pkNr in sa.Prüfungskriterium)
    		{
    			var prüfungskriterium = sa.Prüfungskriterium[pkNr];
    			
    			if(prüfungskriterium.ID == id)
    			{
    				switch(val) {
    					case "Nein":
  						prüfungskriterium.PK_Bewertung = 0;
  						prüfungskriterium.Relevant = true;
  						break;
  						case "Teilweise":
  						prüfungskriterium.PK_Bewertung = 0.5;
  						prüfungskriterium.Relevant = true;
  						break;
  						case "Ja":
  						prüfungskriterium.PK_Bewertung = 1;
  						prüfungskriterium.Relevant = true;
  						break;
  						case "nichtRelevant":
  						prüfungskriterium.Relevant = false;
  						break;
    				}
    				
    				Audit.Audit_Auswerten();
    				saElement = document.getElementById(sa.ID);
    				var erfC = Math.round(sa.SA_Erfuellung.C * 100);
					var erfI = Math.round(sa.SA_Erfuellung.I * 100);
					var erfA = Math.round(sa.SA_Erfuellung.A * 100);
					
					//alert(erfC + " " + erfI + " " + erfA);
					
					if(isNaN(erfC)){ erfC = "-";} else{ erfC += "%";}
					if(isNaN(erfI)){ erfI = "-";} else{ erfI += "%";}
					if(isNaN(erfA)){ erfA = "-";} else{ erfA += "%";}
					
					saElement.innerHTML = sa.Name + " - C: " + erfC + ", I: " + erfI + ", A: " + erfA;
			
    			}
    		}
    	}      
    	
    	// Das Fenster mit der Totalen-Auswertung wird upgedated
    	var totRes = document.getElementById("totalResult")
    	
    	var erfC = Math.round(Audit.Audit_Data.Erfuellung_Proz.C * 100);
    	var erfI = Math.round(Audit.Audit_Data.Erfuellung_Proz.I * 100);
    	var erfA = Math.round(Audit.Audit_Data.Erfuellung_Proz.A * 100);
    	
    	totRes.innerHTML = "Erfüllung Total: <br> C: "+ erfC +"% <br> I: "+ erfI +"% <br> A: "+ erfA +"% <br>";
    	
    	Audit.Daten_Speichern();
    	
    },
    
    Create_Links : function ()
    {
    	//Fügt dem Formular den Auswerten- und den Reset-Button zu
		var form = document.getElementById("audit_form");
		
		var auswertenKnopf = document.createElement("a");
		auswertenKnopf.href = "audit_auswertung.html";
		auswertenKnopf.innerHTML = "Audit auswerten";
		auswertenKnopf.id = "auswertenKnopf";
		auswertenKnopf.setAttribute("class","link");
		auswertenKnopf.onclick = function(){
			Audit.Audit_Auswerten();
    		Audit.Daten_Speichern();
		}
		
		var resetKnopf = document.createElement("a");
		resetKnopf.href = "javascript:void(0)";
		resetKnopf.innerHTML = "Audit zurücksetzen";
		resetKnopf.id = "resetKnopf";
		resetKnopf.setAttribute("class","link");
		resetKnopf.onclick = Audit.Audit_Reset;
		
		var indexKnopf = document.createElement("a");
		indexKnopf.href = "index.html";
		indexKnopf.innerHTML = "Start-Seite";
		indexKnopf.id = "indexKnopf";
		indexKnopf.setAttribute("class","link");
		
		form.appendChild(auswertenKnopf);
		form.appendChild(resetKnopf);
		form.appendChild(indexKnopf);
		
		var backImg = document.getElementById("backArrow");
    	backImg.onclick = function()
    	{
       		window.open("index.html",'_self');
       	//window.open('url', 'window name', 'window settings')
    	}
    	
    	var forwardImg = document.getElementById("forwardArrow");
    	forwardImg.onclick = function()
    	{
    		Audit.Audit_Auswerten();
    		Audit.Daten_Speichern();
       		window.open("audit_auswertung.html",'_self');
       	//window.open('url', 'window name', 'window settings')
    	}
    
    }
}