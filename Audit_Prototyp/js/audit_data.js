a = {}

a.Audit_Data_0  = {
        	Attribut_Gewichtung: {C: 4, I : 3 , A: 2},
           
        	Sicherheitsaspekt: [
			// 1. Sicherheitsaspekt
        	{
				Name: "Organisatorische Sicherheit",
				
				//ID: "SA1",
				
           		Aspekt_Resultat : 
        		{
                	C : 0,
                    I : 0,
                    A : 0,
                 Total: 0
            	},
                    
                // Die maximal Summe der jeweiligen Attribute (nur relevante)
                Max_Sum:
                {
                	C : 0,
                	I : 0,
                	A : 0,
                Total : 0
                },
                    	
                // Beschreibt den Erfüllungsgrad der einzelnen Attribute
                // Ergibt sich aus Aspekt_Resultat / Max_Sum
                SA_Erfuellung:
                {
                	C : 0,
                	I : 0,
                	A : 0,
                Total : 0
                },
            	
            	// Prüfungskriterien
                Prüfungskriterium : [
                // 1. Prüfungskriterium Sicherheitsaspekt 1
                {
                	Name: "Die Sicherheitsrichtlinie wird vom Management unterstützt.",
                	
                	ID : "PK1.1",
                	
                	Relevant : true,
                            
                    Attribut_Konsequenz :
                    {
                    	C : 0.6,
                        I : 0.6,
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
        		// 2. Prüfungskriterium Sicherheitsaspekt 1
                {
                	Name: "Es werden externe Sicherheitsexperten damit beauftragt, kritische Bereiche der internen IT-Sicherheit zu überprüfen.",
                	
                	ID : "PK1.2",
                	
                    Relevant : true,
                            
                    Attribut_Konsequenz :
                    {
                    	C : 0.6,
                        I : 0.6,
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
            	// 3. Prüfungskriterium Sicherheitsaspekt 1
                {
                	Name: "Verstösse gegen die Sicherheitsrichtlinie werden geahndet.",
                    
                    ID : "PK1.3",
                    
                    Relevant : true,
                            
                    Attribut_Konsequenz :
                    {
                    	C : 0.6,
                        I : 0.6,
                        A : 0.6
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
				// 4. Prüfungskriterium Sicherheitsaspekt 1
                {
                	Name: "Es gibt Kontrollmechanismen für bestehende Sicherheitsvorgaben.",
                	
                	ID : "PK1.4",
                	
                    Relevant : true,
                            
                    Attribut_Konsequenz :
                    {
                    	C : 0.6,
                        I : 0.6,
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
				// 5. Prüfungskriterium Sicherheitsaspekt 1
                {
                	Name: "Die Sicherheitsrichtlinie wird regelmässig auf ihre Aktualität geprüft.",
                	
                	ID : "PK1.5",
                	
                    Relevant : true,
                            
                    Attribut_Konsequenz :
                    {
                    	C : 0.6,
                        I : 0.6,
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
                }
            ]
        	},
                
			// 2. Sicherheitsaspekt
            {
            	Name: "Awareness",
                Aspekt_Resultat : 
                	{
                    	C : 0,
                        I : 0,
                        A : 0,
                        Total: 0
                    },
                    
                // Die maximal Summe der jeweiligen Attribute (nur relevante)
                Max_Sum:
                	{
                    	C : 0,
                    	I : 0,
                    	A : 0,
                    	Total : 0
                    },
                    	
                // Beschreibt den Erfüllungsgrad der einzelnen Attribute
                // Ergibt sich aus Aspekt_Resultat / Max_Sum
                SA_Erfuellung:
                	{
                    	C : 0,
                    	I : 0,
                    	A : 0,
                    	Total : 0
                    },
                    
                // Prüfungskriterien
                Prüfungskriterium : [
                // 1. Prüfungskriterium Sicherheitsaspekt 2
                {
                	Name: "Mitarbeiter sind dazu verpflichtet, die Sicherheitsrichtlinie durch ihre Unterschrift zur Kenntnis zu nehmen.",
                            
                    ID : "PK2.1",
                    
                    Relevant : true,
                            
                    Attribut_Konsequenz :
                    {
                    	C : 0.6,
                        I : 0.6,
                        A : 0.6
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
                // 2. Prüfungskriterium Sicherheitsaspekt 2
                {
                	Name: "Die in der Sicherheitsrichtlinie definierten Richtlininien sind in der Firma bekannt.",
                    
                    ID : "PK2.2",
                    
                    Relevant : true,
                            
                    Attribut_Konsequenz :
                    {
                    	C : 0.6,
                        I : 0.3,
                        A : 0.3
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
                // 3. Prüfungskriterium Sicherheitsaspekt 2
                {
                	Name: "Die Mitarbeiter wissen, an wen sie sich bei Sicherheitsfragen wenden können.",
                            
                    ID : "PK2.3",
                    
                    Relevant : true,
                            
                    Attribut_Konsequenz :
                    {
                    	C : 0.3,
                        I : 0.3,
                        A : 0.3
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
                // 4. Prüfungskriterium Sicherheitsaspekt 2
                {
                	Name: "Das Bewusstsein der Mitarbeiter bezüglich IT-Security wird regelmässig geschult/trainiert.",
                    
                    ID : "PK2.4",
                    
                    Relevant : true,
                            
                    Attribut_Konsequenz :
                    {
                    	C : 0.6,
                        I : 0.6,
                        A : 0.6
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
            	// 5. Prüfungskriterium Sicherheitsaspekt 2
                {
                	Name: "Die Arbeitsplatzrechner werden bei Verlassen mit einem Kennwort gesichert.",
                    
                    ID : "PK2.5",
                    
                    Relevant : true,
                            
                    Attribut_Konsequenz :
                    {
                    	C : 0.6,
                        I : 0.6,
                        A : 0.3
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
                // 6. Prüfungskriterium Sicherheitsaspekt 2
                {
            	Name: "Mitarbeiter sind informiert, wann sich Handwerker, Servicetechniker und Reinigungspersonal im Haus befinden.",
                
                ID : "PK2.6",
                
                Relevant : true,
                            
                Attribut_Konsequenz :
                {
                    C : 0.6,
                    I : 0.3,
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
            }
        ]
        },
        
        	// 3. Sicherheitsaspekt
            {
            	Name: "Backup",
                Aspekt_Resultat : 
                	{
                    	C : 0,
                        I : 0,
                        A : 0,
                        Total: 0
                    },
                    
                // Die maximal Summe der jeweiligen Attribute (nur relevante)
                Max_Sum:
                	{
                    	C : 0,
                    	I : 0,
                    	A : 0,
                    	Total : 0
                    },
                    	
                // Beschreibt den Erfüllungsgrad der einzelnen Attribute
                // Ergibt sich aus Aspekt_Resultat / Max_Sum
                SA_Erfuellung:
                	{
                    	C : 0,
                    	I : 0,
                    	A : 0,
                    	Total : 0
                    },
                    
                // Prüfungskriterien
                Prüfungskriterium : [
                // 1. Prüfungskriterium Sicherheitsaspekt 3
                {
                	Name: "Es gibt eine klar definierte Backup-Strategie.",
                            
                    ID : "PK3.1",
                    
                    Relevant : true,
                            
                    Attribut_Konsequenz :
                    {
                    	C : 0,
                        I : 0,
                        A : 0.9
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
                // 2. Prüfungskriterium Sicherheitsaspekt 3
                {
                	Name: "Notebooks und nicht vernetzte Systeme werden regelmässig gesichert.",
                    
                    ID : "PK3.2",
                    
                    Relevant : true,
                            
                    Attribut_Konsequenz :
                    {
                    	C : 0,
                        I : 0,
                        A : 0.9
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
                // 3. Prüfungskriterium Sicherheitsaspekt 3
                {
                	Name: "Es wird eine regelmässige Rücksicherung der Daten geübt.",
                            
                    ID : "PK3.3",
                    
                    Relevant : true,
                            
                    Attribut_Konsequenz :
                    {
                    	C : 0,
                        I : 0,
                        A : 0.6
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
                // 4. Prüfungskriterium Sicherheitsaspekt 3
                {
                	Name: "Der Backup- und Rücksicherungsprozess ist dokumentiert.",
                    
                    ID : "PK3.4",
                    
                    Relevant : true,
                            
                    Attribut_Konsequenz :
                    {
                    	C : 0,
                        I : 0,
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
            	// 5. Prüfungskriterium Sicherheitsaspekt 3
                {
                	Name: "Die Backup-Bänder werden sicher ausserhalb des Büros gelagert.",
                    
                    ID : "PK3.5",
                    
                    Relevant : true,
                            
                    Attribut_Konsequenz :
                    {
                    	C : 0,
                        I : 0,
                        A : 0.9
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
        ]
        },
        
        	// 4. Sicherheitsaspekt
            {
            	Name: "Viren / Schadprogramme",
                Aspekt_Resultat : 
                	{
                    	C : 0,
                        I : 0,
                        A : 0,
                        Total: 0
                    },
                    
                // Die maximal Summe der jeweiligen Attribute (nur relevante)
                Max_Sum:
                	{
                    	C : 0,
                    	I : 0,
                    	A : 0,
                    	Total : 0
                    },
                    	
                // Beschreibt den Erfüllungsgrad der einzelnen Attribute
                // Ergibt sich aus Aspekt_Resultat / Max_Sum
                SA_Erfuellung:
                	{
                    	C : 0,
                    	I : 0,
                    	A : 0,
                    	Total : 0
                    },
                    
                // Prüfungskriterien
                Prüfungskriterium : [
                // 1. Prüfungskriterium Sicherheitsaspekt 4
                {
                	Name: "Es ist auf allen IT-Systemen ein Viren-Schutzprogramm installiert.",
                            
                    ID : "PK4.1",
                    
                    Relevant : true,
                            
                    Attribut_Konsequenz :
                    {
                    	C : 0.9,
                        I : 0.6,
                        A : 0.9
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
                // 2. Prüfungskriterium Sicherheitsaspekt 4
                {
                	Name: "Viren-Schutzprogramm-Updates können automatisiert durchgeführt werden.",
                    
                    ID : "PK4.2",
                    
                    Relevant : true,
                            
                    Attribut_Konsequenz :
                    {
                    	C : 0.9,
                        I : 0.6,
                        A : 0.9
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
                // 3. Prüfungskriterium Sicherheitsaspekt 4
                {
                	Name: "System-Updates (Betriebssysteme,Programme) können automatisiert durchgeführt werden.",
                            
                    ID : "PK4.3",
                    
                    Relevant : true,
                            
                    Attribut_Konsequenz :
                    {
                    	C : 0.6,
                        I : 0.6,
                        A : 0.6
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
                // 4. Prüfungskriterium Sicherheitsaspekt 4
                {
                	Name: "System- und Viren-Schutzprogramm-Updates werden regelmässig durchgeführt.",
                    
                    ID : "PK4.4",
                    
                    Relevant : true,
                            
                    Attribut_Konsequenz :
                    {
                    	C : 0.9,
                        I : 0.6,
                        A : 0.9
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
            	// 5. Prüfungskriterium Sicherheitsaspekt 4
                {
                	Name: "E-Mails werden zentral auf Viren/Schadprogramme überprüft.",
                    
                    ID : "PK4.5",
                    
                    Relevant : true,
                            
                    Attribut_Konsequenz :
                    {
                    	C : 0.9,
                        I : 0.6,
                        A : 0.9
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
        ]
        },
        
        	// 5. Sicherheitsaspekt
            {
            	Name: "Passwörter",
                Aspekt_Resultat : 
                	{
                    	C : 0,
                        I : 0,
                        A : 0,
                        Total: 0
                    },
                    
                // Die maximal Summe der jeweiligen Attribute (nur relevante)
                Max_Sum:
                	{
                    	C : 0,
                    	I : 0,
                    	A : 0,
                    	Total : 0
                    },
                    	
                // Beschreibt den Erfüllungsgrad der einzelnen Attribute
                // Ergibt sich aus Aspekt_Resultat / Max_Sum
                SA_Erfuellung:
                	{
                    	C : 0,
                    	I : 0,
                    	A : 0,
                    	Total : 0
                    },
                    
                // Prüfungskriterien
                Prüfungskriterium : [
                // 1. Prüfungskriterium Sicherheitsaspekt 5
                {
                	Name: "Benutzerpasswörter genügen den gängigen Sicherheitsanforderungen (Mind. 8 Zeichen, Gross- und Kleinbuchstaben, Mind. 1 Zahl, Sonderzeichen",
                            
                    ID : "PK5.1",
                    
                    Relevant : true,
                            
                    Attribut_Konsequenz :
                    {
                    	C : 0.6,
                        I : 0.6,
                        A : 0.3
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
                // 2. Prüfungskriterium Sicherheitsaspekt 5
                {
                	Name: "Passwörter müssen regelmässig geändert werden.",
                    
                    ID : "PK5.2",
                    
                    Relevant : true,
                            
                    Attribut_Konsequenz :
                    {
                    	C : 0.6,
                        I : 0.6,
                        A : 0.3
                    },
                            
                    PK_Gewichtung: 1,
                            
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
        
        	// 6. Sicherheitsaspekt
            {
            	Name: "Vernetzung / Internet-Anbindung",
                Aspekt_Resultat : 
                	{
                    	C : 0,
                        I : 0,
                        A : 0,
                        Total: 0
                    },
                    
                // Die maximal Summe der jeweiligen Attribute (nur relevante)
                Max_Sum:
                	{
                    	C : 0,
                    	I : 0,
                    	A : 0,
                    	Total : 0
                    },
                    	
                // Beschreibt den Erfüllungsgrad der einzelnen Attribute
                // Ergibt sich aus Aspekt_Resultat / Max_Sum
                SA_Erfuellung:
                	{
                    	C : 0,
                    	I : 0,
                    	A : 0,
                    	Total : 0
                    },
                    
                // Prüfungskriterien
                Prüfungskriterium : [
                // 1. Prüfungskriterium Sicherheitsaspekt 6
                {
                	Name: "Es gibt eine Firewall.",
                            
                    ID : "PK6.1",
                    
                    Relevant : true,
                            
                    Attribut_Konsequenz :
                    {
                    	C : 0.9,
                        I : 0.9,
                        A : 0.9
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
                // 2. Prüfungskriterium Sicherheitsaspekt 6
                {
                	Name: "Konfiguration und Funktionsfähigkeit der Firewall werden regelmässig überprüft.",
                    
                    ID : "PK6.2",
                    
                    Relevant : true,
                            
                    Attribut_Konsequenz :
                    {
                    	C : 0.6,
                        I : 0.6,
                        A : 0.6
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
                // 3. Prüfungskriterium Sicherheitsaspekt 6
                {
                	Name: "Es gibt ein Konzept, welche Daten nach aussen angeboten werden müssen.",
                            
                    ID : "PK6.3",
                    
                    Relevant : true,
                            
                    Attribut_Konsequenz :
                    {
                    	C : 0.6,
                        I : 0.6,
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
                }
        ]
        },
        
        	// 7. Sicherheitsaspekt
            {
            	Name: "Zugriff auf Daten",
                Aspekt_Resultat : 
                	{
                    	C : 0,
                        I : 0,
                        A : 0,
                        Total: 0
                    },
                    
                // Die maximal Summe der jeweiligen Attribute (nur relevante)
                Max_Sum:
                	{
                    	C : 0,
                    	I : 0,
                    	A : 0,
                    	Total : 0
                    },
                    	
                // Beschreibt den Erfüllungsgrad der einzelnen Attribute
                // Ergibt sich aus Aspekt_Resultat / Max_Sum
                SA_Erfuellung:
                	{
                    	C : 0,
                    	I : 0,
                    	A : 0,
                    	Total : 0
                    },
                    
                // Prüfungskriterien
                Prüfungskriterium : [
                // 1. Prüfungskriterium Sicherheitsaspekt 7
                {
                	Name: "Der Zugriff auf Daten ist nach dem Need-To-Know Prinzip geregelt.",
                            
                    ID : "PK7.1",
                    
                    Relevant : true,
                            
                    Attribut_Konsequenz :
                    {
                    	C : 0.9,
                        I : 0.6,
                        A : 0.3
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
                // 2. Prüfungskriterium Sicherheitsaspekt 7
                {
                	Name: "Zugriffsberechtigungen werden über Rollen und Profile verwaltet.",
                    
                    ID : "PK7.2",
                    
                    Relevant : true,
                            
                    Attribut_Konsequenz :
                    {
                    	C : 0.9,
                        I : 0.6,
                        A : 0.3
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
                // 3. Prüfungskriterium Sicherheitsaspekt 7
                {
                	Name: "Es gibt einen Prozess, der sicherstellt, dass vergebene Rechte nach Austritt eines Mitarbeiters entfernt werden.",
                            
                    ID : "PK7.3",
                    
                    Relevant : true,
                            
                    Attribut_Konsequenz :
                    {
                    	C : 0.6,
                        I : 0.6,
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
                // 4. Prüfungskriterium Sicherheitsaspekt 7
                {
                	Name: "Zusätzlich beantragte Rechte eines Mitarbeiters müssen von seinem Vorgesetzten genehmigt werden.",
                    
                    ID : "PK7.4",
                    
                    Relevant : true,
                            
                    Attribut_Konsequenz :
                    {
                    	C : 0.6,
                        I : 0.6,
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
            	// 5. Prüfungskriterium Sicherheitsaspekt 7
                {
                	Name: "Es ist klar definiert, welche Funktionen was für Rechte benötigt.",
                    
                    ID : "PK7.5",
                    
                    Relevant : true,
                            
                    Attribut_Konsequenz :
                    {
                    	C : 0.6,
                        I : 0.6,
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
            	// 6. Prüfungskriterium Sicherheitsaspekt 7
                {
                	Name: "Es gibt verschiedene Rollen und Profile für Administratoren.",
                    
                    ID : "PK7.6",
                    
                    Relevant : true,
                            
                    Attribut_Konsequenz :
                    {
                    	C : 0.6,
                        I : 0.6,
                        A : 0.6
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
            	// 7. Prüfungskriterium Sicherheitsaspekt 7
                {
                	Name: "Es ist bekannt und geregelt, welche Rechte und Privilegien Programme haben.",
                    
                    ID : "PK7.7",
                    
                    Relevant : true,
                            
                    Attribut_Konsequenz :
                    {
                    	C : 0.6,
                        I : 0.6,
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
                }
        ]
        },
        
        	// 8. Sicherheitsaspekt
            {
            	Name: "Infrastruktur",
                Aspekt_Resultat : 
                	{
                    	C : 0,
                        I : 0,
                        A : 0,
                        Total: 0
                    },
                    
                // Die maximal Summe der jeweiligen Attribute (nur relevante)
                Max_Sum:
                	{
                    	C : 0,
                    	I : 0,
                    	A : 0,
                    	Total : 0
                    },
                    	
                // Beschreibt den Erfüllungsgrad der einzelnen Attribute
                // Ergibt sich aus Aspekt_Resultat / Max_Sum
                SA_Erfuellung:
                	{
                    	C : 0,
                    	I : 0,
                    	A : 0,
                    	Total : 0
                    },
                    
                // Prüfungskriterien
                Prüfungskriterium : [
                // 1. Prüfungskriterium Sicherheitsaspekt 8
                {
                	Name: "Das Gebäude ist vor Einbrechern geschützt.",
                            
                    ID : "PK8.1",
                    
                    Relevant : true,
                            
                    Attribut_Konsequenz :
                    {
                    	C : 0.3,
                        I : 0,
                        A : 0.9
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
                // 2. Prüfungskriterium Sicherheitsaspekt 8
                {
                	Name: "Der Serverraum ist nur für Befugte betreterbar.",
                    
                    ID : "PK8.2",
                    
                    Relevant : true,
                            
                    Attribut_Konsequenz :
                    {
                    	C : 0.6,
                        I : 0,
                        A : 0.9
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
                // 3. Prüfungskriterium Sicherheitsaspekt 8
                {
                	Name: "Externe IT-Arbeiter werden nur beaufsichtigt im Serverraum gelassen.",
                            
                    ID : "PK8.3",
                    
                    Relevant : true,
                            
                    Attribut_Konsequenz :
                    {
                    	C : 0.6,
                        I : 0.6,
                        A : 0.3
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
                // 4. Prüfungskriterium Sicherheitsaspekt 8
                {
                	Name: "Kritische IT-Infrastruktur ist gegen Überhitzung geschützt.",
                    
                    ID : "PK8.4",
                    
                    Relevant : true,
                            
                    Attribut_Konsequenz :
                    {
                    	C : 0,
                        I : 0,
                        A : 0.9
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
            	// 5. Prüfungskriterium Sicherheitsaspekt 8
                {
                	Name: "Kritische IT-Infrastruktur ist gegen Feuer geschützt.",
                    
                    ID : "PK8.5",
                    
                    Relevant : true,
                            
                    Attribut_Konsequenz :
                    {
                    	C : 0,
                        I : 0,
                        A : 0.9
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
            	// 6. Prüfungskriterium Sicherheitsaspekt 8
                {
                	Name: "Kritische IT-Infrastruktur ist gegen Stromausfälle geschützt.",
                    
                    ID : "PK8.6",
                    
                    Relevant : true,
                            
                    Attribut_Konsequenz :
                    {
                    	C : 0,
                        I : 0,
                        A : 0.9
                    },
                            
                    PK_Gewichtung: 0.5,
                           
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
        	
        	// 9. Sicherheitsaspekt
            {
            	Name: "Notfallpläne (Es gibt Notfallpläne für..)",
                Aspekt_Resultat : 
                	{
                    	C : 0,
                        I : 0,
                        A : 0,
                        Total: 0
                    },
                    
                // Die maximal Summe der jeweiligen Attribute (nur relevante)
                Max_Sum:
                	{
                    	C : 0,
                    	I : 0,
                    	A : 0,
                    	Total : 0
                    },
                    	
                // Beschreibt den Erfüllungsgrad der einzelnen Attribute
                // Ergibt sich aus Aspekt_Resultat / Max_Sum
                SA_Erfuellung:
                	{
                    	C : 0,
                    	I : 0,
                    	A : 0,
                    	Total : 0
                    },
                    
                // Prüfungskriterien
                Prüfungskriterium : [
                // 1. Prüfungskriterium Sicherheitsaspekt 9
                {
                	Name: "Grippewelle, Ausfall vom Grossteil der Mitarbeiter.",
                            
                    ID : "PK9.1",
                    
                    Relevant : true,
                            
                    Attribut_Konsequenz :
                    {
                    	C : 0,
                        I : 0,
                        A : 0.9
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
                // 2. Prüfungskriterium Sicherheitsaspekt 9
                {
                	Name: "Ausfall von Lieferanten oder Dienstleistern.",
                    
                    ID : "PK9.2",
                    
                    Relevant : true,
                            
                    Attribut_Konsequenz :
                    {
                    	C : 0,
                        I : 0,
                        A : 0.9
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
                // 3. Prüfungskriterium Sicherheitsaspekt 9
                {
                	Name: "Ausfall des IT-Administrators.",
                            
                    ID : "PK9.3",
                    
                    Relevant : true,
                            
                    Attribut_Konsequenz :
                    {
                    	C : 0,
                        I : 0,
                        A : 0.9
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
                // 4. Prüfungskriterium Sicherheitsaspekt 9
                {
                	Name: "Virusbefall mehrerer / eines Grossteils der PC's.",
                    
                    ID : "PK9.4",
                    
                    Relevant : true,
                            
                    Attribut_Konsequenz :
                    {
                    	C : 0.9,
                        I : 0.3,
                        A : 0.9
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
            	// 5. Prüfungskriterium Sicherheitsaspekt 9
                {
                	Name: "Ausfall einer kritischen IT-Infrastruktur.",
                    
                    ID : "PK9.5",
                    
                    Relevant : true,
                            
                    Attribut_Konsequenz :
                    {
                    	C : 0,
                        I : 0,
                        A : 0.9
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
            	// 6. Prüfungskriterium Sicherheitsaspekt 9
                {
                	Name: "Die Notfallpläne sind allen involvierten Leuten bekannt.",
                    
                    ID : "PK9.6",
                    
                    Relevant : true,
                            
                    Attribut_Konsequenz :
                    {
                    	C : 0,
                        I : 0,
                        A : 0.9
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
            	// 7. Prüfungskriterium Sicherheitsaspekt 9
                {
                	Name: "Das Vorgehen der Notfallpläne wird regelmässig durchgespielt.",
                    
                    ID : "PK9.7",
                    
                    Relevant : true,
                            
                    Attribut_Konsequenz :
                    {
                    	C : 0,
                        I : 0,
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
                }
        ]
        },
        	
        	// 10. Sicherheitsaspekt
            {
            	Name: "Dokumentation / Stellvertreter",
                Aspekt_Resultat : 
                	{
                    	C : 0,
                        I : 0,
                        A : 0,
                        Total: 0
                    },
                    
                // Die maximal Summe der jeweiligen Attribute (nur relevante)
                Max_Sum:
                	{
                    	C : 0,
                    	I : 0,
                    	A : 0,
                    	Total : 0
                    },
                    	
                // Beschreibt den Erfüllungsgrad der einzelnen Attribute
                // Ergibt sich aus Aspekt_Resultat / Max_Sum
                SA_Erfuellung:
                	{
                    	C : 0,
                    	I : 0,
                    	A : 0,
                    	Total : 0
                    },
                    
                // Prüfungskriterien
                Prüfungskriterium : [
                // 1. Prüfungskriterium Sicherheitsaspekt 10
                {
                	Name: "Der IT-Administrator hat einen Stellvertreter.",
                            
                    ID : "PK10.1",
                    
                    Relevant : true,
                            
                    Attribut_Konsequenz :
                    {
                    	C : 0.3,
                        I : 0.3,
                        A : 0.9
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
                // 2. Prüfungskriterium Sicherheitsaspekt 10
                {
                	Name: "Die Administratoren-Passwörter sind sicher hinterlegt.",
                    
                    ID : "PK10.2",
                    
                    Relevant : true,
                            
                    Attribut_Konsequenz :
                    {
                    	C : 0.3,
                        I : 0.3,
                        A : 0.9
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
                // 3. Prüfungskriterium Sicherheitsaspekt 10
                {
                	Name: "Sämtliche IT-Systeme sind ausreichend dokumentiert (Installation, Bedienung, Behandlung von Fehlern).",
                            
                    ID : "PK10.3",
                    
                    Relevant : true,
                            
                    Attribut_Konsequenz :
                    {
                    	C : 0.3,
                        I : 0.3,
                        A : 0.6
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
                // 4. Prüfungskriterium Sicherheitsaspekt 10
                {
                	Name: "Es gibt ein Inventar sämtlicher IT-Systeme",
                    
                    ID : "PK10.4",
                    
                    Relevant : true,
                            
                    Attribut_Konsequenz :
                    {
                    	C : 0,
                        I : 0,
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
                }
        ]
        }
            ],     
            
			Max_Sum:
            {
            	C : 0,
            	I : 0,
            	A : 0,
            Total : 0
            },
            
            Resultat: 
            {
            	C:0,
            	I:0,
            	A:0,
            Total:0
            },
            
            Erfuellung:
            {
            	C:0,
            	I:0,
            	A:0,
            Total:0
            },
            
            // Die prozentual Komplett-Erfüllung
            Erfuellung_Proz:
            {
            	C:0,
            	I:0,
            	A:0,
            Total:0
            },
            
            Personelle_Daten:
            {
            	Firma:"",
            	Abteilung:"",
            	Datum:"",
            	Name:""
            }
        }