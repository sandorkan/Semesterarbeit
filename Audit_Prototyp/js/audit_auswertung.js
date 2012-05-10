$(document).ready(function(){
	Audit_Auswertung.Auswertung_Init();
	
	canvas = document.getElementById("audit_canvas");
    context = canvas.getContext("2d");
    
    Audit_Auswertung.Zeichne_Rahmen();
    Audit_Auswertung.Zeichne_Säulen();
    Audit_Auswertung.Zeichne_Erfuellung();
    Audit_Auswertung.Zeichne_Text();
    Audit_Auswertung.Totale_Erfuellung();
    Audit_Auswertung.Create_Detail_Table();
    Audit_Auswertung.Set_Personal_Data();
 });

var Audit_Auswertung = {

	Audit_Data : null,
	
	Canvas : null,
	
	Context : null,
	
	Auswertung_Init : function() 
	{
		var rohdaten = localStorage.getItem("audit_data");
        
        if(rohdaten)
        {
        	//alert("in if: Daten sind im lokalen Speicher vorhanden");
        	this.Audit_Data	= JSON.parse(rohdaten);

        }else
        {
        	//alert("daten nicht vorhanden");
        }
        
        Canvas = document.getElementById("audit_canvas");
    	//Audit_Auswertung.Context = Canvas.getContext("2d");
        Audit_Auswertung.Setze_Zeichnungskonstanten(Canvas);
        
        var img = document.getElementById("backArrow");
        img.onclick = function()
        {
        	window.open("audit.html",'_self');
        	//window.open('url', 'window name', 'window settings')
        }
        
	},
	
	// in diese Variable werden Zeichnungskonstanten gesetzt
	C : {},
	
	Setze_Zeichnungskonstanten : function(canvas)
	{
		this.C.width = canvas.width;
		this.C.height = canvas.height;
		
		// steht für left Space (Abstand vom linken Rand) bzw right Space
		// sP steht für den Abstand zwischen den Säulen
		this.C.lS = 40;
		this.C.rS = 40;
		this.C.sP = 25;
		
		// Es wird auf beiden Seiten je 40 px Abstand gehalten
		// Zwischen den Säulen gibt es jeweils 25px Abstand
		this.C.horizontalDrawSpace = this.C.width-(2*this.C.lS)-(2*this.C.sP);
		
		// von oben her wird erstmals 50 px abstand gehalten
		this.C.verticalDrawSpace = this.C.height-75;
		
		var gewichtung = this.Audit_Data.Attribut_Gewichtung
		var ciaTot = gewichtung.C + gewichtung.A + gewichtung.I;
		
		this.C.cHorDrawingSpace = (gewichtung.C / ciaTot) * this.C.horizontalDrawSpace;
		this.C.iHorDrawingSpace = (gewichtung.I / ciaTot) * this.C.horizontalDrawSpace;
		this.C.aHorDrawingSpace = (gewichtung.A / ciaTot) * this.C.horizontalDrawSpace;
		
	},
	
	Zeichne_Rahmen : function()
	{
		var width = canvas.width;
		var height = canvas.height;
		
		context.moveTo(0, 0);
        context.lineTo(0, height);
        context.stroke();
		
		context.moveTo(0, height);
        context.lineTo(width, height);
        context.stroke();
		
		context.moveTo(width, height);
        context.lineTo(width, 0);
        context.stroke();
		
		context.moveTo(width, 0);
        context.lineTo(0, 0);
        context.stroke();
        
        context.moveTo(40,500);
		context.lineTo(40,450);
		context.stroke();
	},
	
	Zeichne_Säulen : function()
	{
		var w = this.C.width;
		var h = this.C.height;
		
		// steht für left Space (Abstand vom linken Rand) bzw right Space
		// sP steht für den Abstand zwischen den Säulen
		var lS = this.C.lS;
		var rS = this.C.rS;
		var sP = this.C.sP;
		
		// steht für drawing-height
		var dH = this.C.verticalDrawSpace;
		
		// steht für c-Width
		var cW = this.C.cHorDrawingSpace;
		var iW = this.C.iHorDrawingSpace;
		var aW = this.C.aHorDrawingSpace;
		
		// Zeichne Säule für C
		context.moveTo(lS, h);
        context.lineTo(lS, h-dH);
        context.stroke();
        
        context.moveTo(lS, h-dH);
        context.lineTo(lS+cW,h-dH );
        context.stroke();
        
        context.moveTo(lS+cW,h-dH);
        context.lineTo(lS+cW,h);
        context.stroke();
        
        // Zeichne Säule für I
        context.moveTo(lS+cW+sP, h);
        context.lineTo(lS+cW+sP, h-dH);
        context.stroke();
        
        context.moveTo(lS+cW+sP, h-dH);
        context.lineTo(lS+cW+sP+iW, h-dH);
        context.stroke();
        
        context.moveTo(lS+cW+sP+iW, h-dH);
        context.lineTo(lS+cW+sP+iW, h);
        context.stroke();
        
        // Zeichne Säule für A
        context.moveTo(lS+cW+sP+iW+sP, h);
        context.lineTo(lS+cW+sP+iW+sP, h-dH);
        context.stroke();
        
        context.moveTo(lS+cW+sP+iW+sP, h-dH);
        context.lineTo(lS+cW+sP+iW+sP+aW, h-dH);
        context.stroke();
        
        context.moveTo(lS+cW+sP+iW+sP+aW, h-dH);
        context.lineTo(lS+cW+sP+iW+sP+aW, h);
        context.stroke();
	},
	
	// Es wird jeweils der Prozentuale Anteil der Nicht-Erfüllung farbig ausgefüllt
	Zeichne_Erfuellung : function()
	{
		var nErfC = 1-this.Audit_Data.Erfuellung_Proz.C;
		var nErfI = 1-this.Audit_Data.Erfuellung_Proz.I;
		var nErfA = 1-this.Audit_Data.Erfuellung_Proz.A;
		
		var w = this.C.width;
		var h = this.C.height;
		
		// steht für left Space (Abstand vom linken Rand) bzw right Space
		// sP steht für den Abstand zwischen den Säulen
		var lS = this.C.lS;
		var rS = this.C.rS;
		var sP = this.C.sP;
		
		// steht für drawing-height
		var dH = this.C.verticalDrawSpace;
		
		// steht für c-Width
		var cW = this.C.cHorDrawingSpace;
		var iW = this.C.iHorDrawingSpace;
		var aW = this.C.aHorDrawingSpace;
		
		// Säule für C
		context.fillStyle = 'red';
		context.fillRect(rS+1, h-dH+1, cW-1.8, nErfC*dH);
		
		// Säule für I
		context.fillStyle = 'red';
		context.fillRect(rS+cW+sP+1, h-dH+1, iW-1.8, nErfI*dH);
		
		// Säule für A
		context.fillStyle = 'red';
		context.fillRect(rS+cW+sP+iW+sP+1, h-dH+1, aW-1.8, nErfA*dH);
	},
	
	Zeichne_Text : function()
	{
		var erfC = Math.round(this.Audit_Data.Erfuellung_Proz.C*100);
		var erfI = Math.round(this.Audit_Data.Erfuellung_Proz.I*100);
		var erfA = Math.round(this.Audit_Data.Erfuellung_Proz.A*100);
		
		var w = this.C.width;
		var h = this.C.height;
		
		// steht für left Space (Abstand vom linken Rand) bzw right Space
		// sP steht für den Abstand zwischen den Säulen
		var lS = this.C.lS;
		var rS = this.C.rS;
		var sP = this.C.sP;
		
		// steht für drawing-height
		var dH = this.C.verticalDrawSpace;
		
		// steht für c-Width
		var cW = this.C.cHorDrawingSpace;
		var iW = this.C.iHorDrawingSpace;
		var aW = this.C.aHorDrawingSpace;
		
		context.font = "bold 30pt Calibri";
		context.fillStyle = 'black';
		context.fillText("C: " + erfC + "%", lS, h-dH-15);
		context.fillText("I: " + erfI + "%", lS+cW+sP, h-dH-15);
		context.fillText("A: " + erfA + "%", lS+cW+sP+iW+sP, h-dH-15);
	},
	
	Totale_Erfuellung : function()
	{	
		var tErf = Math.round(this.Audit_Data.Erfuellung_Proz.Total*100);
		var total = document.getElementById("total");
		total.innerHTML = "Gesamt-Erfüllung: " + tErf + "%";
	},
	
	Create_Detail_Table : function()
	{
		var table = document.getElementById("detailTable");
		
		var saArray = Audit_Auswertung.Audit_Data.Sicherheitsaspekt;
		
		for(var i in saArray)
		{
			var sicherheitsaspekt = saArray[i];
			
			var trElement = document.createElement("tr")
			trElement.setAttribute("class", "tableData");
			
			var tdName = document.createElement("td");
			tdName.innerHTML = sicherheitsaspekt.Name;
			tdName.setAttribute("class", "tdName");
			
			trElement.appendChild(tdName);
			
			for(var j in sicherheitsaspekt.SA_Erfuellung)
			{
				var tdElement = document.createElement("td");
				var erfüllung = Math.round(sicherheitsaspekt.SA_Erfuellung[j]*100);
				tdElement.innerHTML = erfüllung + "%";
				
				trElement.appendChild(tdElement);
				//document.write(j + ": " +sicherheitsaspekt.SA_Erfuellung[j] + "<br>");
				//document.write(sicherheitsaspekt.SA_Erfuellung.j + "<br>");
			}
			
			table.appendChild(trElement);
		}
		
		// Anzeige der Gesamt-Erfüllug
		var trElement = document.createElement("tr")
		trElement.setAttribute("class", "totalData");
		
		var tdName = document.createElement("td");
		tdName.innerHTML = "Total";
		tdName.setAttribute("class", "tdName");
		
		trElement.appendChild(tdName);
		
		for(var i in Audit_Auswertung.Audit_Data.Erfuellung_Proz)
		{
				var tdElement = document.createElement("td");
				var erfüllung = Math.round(Audit_Auswertung.Audit_Data.Erfuellung_Proz[i]*100);
				tdElement.innerHTML = erfüllung + "%";
				
				trElement.appendChild(tdElement);
		}
		
		table.appendChild(trElement);
	},
	
	Set_Personal_Data : function()
	{
	// Ausfüllen der persönlichen Daten (falls vorhanden)
  		var firmaEl = document.getElementById("Firma");
  		firmaEl.innerHTML = this.Audit_Data.Personelle_Daten.Firma;
  		
  		var abteilungEl = document.getElementById("Abteilung");
  		abteilungEl.innerHTML = this.Audit_Data.Personelle_Daten.Abteilung;
  		
  		var datumEl = document.getElementById("Datum");
  		datumEl.innerHTML = this.Audit_Data.Personelle_Daten.Datum;
  		
  		var nameEl = document.getElementById("Name");
  		nameEl.innerHTML = this.Audit_Data.Personelle_Daten.Name;
	}
}