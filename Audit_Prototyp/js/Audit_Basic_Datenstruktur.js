var Audit_Data = {
Attribut_Gewichtung: {C: 4, I : 3 , A: 2},

Sicherheitsaspekt: [
	{
		Name: "Sicherheitsaspekt 1",
		
		Aspekt_Resultat : 
		{
			C : 0,
			I : 0,
			A : 0,
		 Total: 0
		},
			
		Max_Sum:
		{
			C : 0,
			I : 0,
			A : 0,
		Total : 0
		},
				
		SA_Erfuellung:
		{
			C : 0,
			I : 0,
			A : 0,
		Total : 0
		},
		
		Prüfungskriterium : [
		{
			Name: "Prüfungskriterium 1",
			
			ID : "PK1.1",
			
			Relevant : true,
					
			Attribut_Konsequenz :
			{
				C : 0.8,
				I : 0.4,
				A : 0.4
			},
					
			PK_Gewichtung: 1,
				  
			PK_Bewertung : 0,
					
			Attribut_Resultat : 
			{
				C : 0,
				I : 0,
				A : 0
			}                          
		},
		{
			Name: "Prüfungskriterium 2",
			
			ID : "PK1.2",
			
			Relevant : true,
					
			Attribut_Konsequenz :
			{
				C : 0,
				I : 0.5,
				A : 0
			},
					
			PK_Gewichtung: 1,
					
			PK_Bewertung : 0,
					
			Attribut_Resultat : 
			{
				C : 0,
				I : 0,
				A : 0
			}                            
		},
		{
			Name: "Prüfungskriterium 3",
					
			ID : "PK1.3",
			
			Relevant : true,
					
			Attribut_Konsequenz :
			{
				C : 0.6,
				I : 0.4,
				A : 0
			},
					
			PK_Gewichtung: 0.5,
					
			PK_Bewertung : 0,
					
			Attribut_Resultat : 
			{
				C : 0,
				I : 0,
				A : 0
			}                            
		},
		{
			Name: "Prüfungskriterium 4",
			
			ID : "PK1.4",
			
			Relevant : true,
					
			Attribut_Konsequenz :
			{
				C : 0,
				I : 0.4,
				A : 0.6
			},
					
			PK_Gewichtung: 0.5,
					
			PK_Bewertung : 0,
					
			Attribut_Resultat : 
			{
				C : 0,
				I : 0,
				A : 0
			}                            
		},
		{
			Name: "Prüfungskriterium 5",
			
			ID : "PK1.5",
			
			Relevant : true,
					
			Attribut_Konsequenz :
			{
				C : 0,
				I : 0.4,
				A : 0.6
			},
					
			PK_Gewichtung: 0.25,
					
			PK_Bewertung : 0,
					
			Attribut_Resultat : 
			{
				C : 0,
				I : 0,
				A : 0
			}                            
		}
	]
	},
	{
		Name: "Sicherheitsaspekt 2",
		Aspekt_Resultat : 
			{
				C : 0,
				I : 0,
				A : 0,
				Total: 0
			},
			
		Max_Sum:
			{
				C : 0,
				I : 0,
				A : 0,
				Total : 0
			},
				
		SA_Erfuellung:
			{
				C : 0,
				I : 0,
				A : 0,
				Total : 0
			},
		
		Prüfungskriterium : [
		{
			Name: "Prüfungskriterium 1",
			
			ID : "PK2.1",
			
			Relevant : true,
					
			Attribut_Konsequenz :
			{
				C : 0.7,
				I : 0,
				A : 0
			},
					
			PK_Gewichtung: 1,
					
			PK_Bewertung : 0,
					
			Attribut_Resultat : 
			{
				C : 0,
				I : 0,
				A : 0
			}                            
		},
		{
			Name: "Prüfungskriterium 2",
					
			ID : "PK2.2",
			
			Relevant : true,
					
			Attribut_Konsequenz :
			{
				C : 0,
				I : 0.8,
				A : 0.4
			},
					
			PK_Gewichtung: 0.5,
					
			PK_Bewertung : 0,
					
			Attribut_Resultat : 
			{
				C : 0,
				I : 0,
				A : 0
			}                            
		},
		{
			Name: "Prüfungskriterium 3",
			
			ID : "PK2.3",
			
			Relevant : true,
					
			Attribut_Konsequenz :
			{
				C : 0.4,
				I : 0.5,
				A : 0.5
			},
					
			PK_Gewichtung: 0.5,
					
			PK_Bewertung : 0,
					
			Attribut_Resultat : 
			{
				C : 0,
				I : 0,
				A : 0
			}                            
		},
		{
			Name: "Prüfungskriterium 4",
			
			ID : "PK2.4",
			
			Relevant : true,
					
			Attribut_Konsequenz :
			{
				C : 0,
				I : 0,
				A : 0.8
			},
					
			PK_Gewichtung: 0.25,
				   
			PK_Bewertung : 0,
					
			Attribut_Resultat : 
			{
				C : 0,
				I : 0,
				A : 0
			}                            
		},
		{
		Name: "Prüfungskriterium 5",
		
		ID : "PK2.5",
		
		Relevant : true,
					
		Attribut_Konsequenz :
		{
			C : 0,
			I : 0.6,
			A : 0.4
		},
					
		PK_Gewichtung: 0.25,
					
		PK_Bewertung : 0,
					
		Attribut_Resultat : 
		{
			C : 0,
			I : 0,
			A : 0
		}                            
	}
	]
	}
],     

// Max. erreichbare Punktzahl
Max_Sum:
{
	C : 0,
	I : 0,
	A : 0,
Total : 0
},

// Erreichte Punktzahl
Resultat: 
{
	C:0,
	I:0,
	A:0,
Total:0
},

// Endpunktzahl
Erfuellung:
{
	C:0,
	I:0,
	A:0,
Total:0
},

// Prozentuale Erfüllung
Erfuellung_Proz:
{
	C:0,
	I:0,
	A:0,
Total:0
}
}

