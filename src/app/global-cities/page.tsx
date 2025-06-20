export default function GlobalCitiesPage() {
  const cities = [
    // Eastern North America (Pennsylvania coverage)
    "New York", "Newark", "Jersey City", "Yonkers", "Paterson", "Elizabeth", "Bridgeport", "New Haven", "Stamford", "Hartford", "Waterbury", "Norwalk", "Danbury", "New Britain", "Bristol",
    "Boston", "Worcester", "Springfield", "Cambridge", "Lowell", "Brockton", "Lynn", "New Bedford", "Quincy", "Fall River", "Newton", "Lawrence", "Somerville", "Framingham", "Haverhill",
    "Philadelphia", "Pittsburgh", "Allentown", "Erie", "Reading", "Scranton", "Bethlehem", "Lancaster", "Harrisburg", "York", "Wilkes-Barre", "Chester", "Williamsport", "Easton", "Lebanon",
    "Baltimore", "Frederick", "Rockville", "Gaithersburg", "Bowie", "Hagerstown", "Annapolis", "College Park", "Salisbury", "Laurel", "Greenbelt", "Cumberland", "Westminster", "Eldersburg",
    "Washington DC", "Arlington", "Alexandria", "Silver Spring", "Bethesda", "Reston", "Fairfax", "Manassas", "Leesburg", "Herndon", "Centreville", "Dale City", "Burke", "Annandale",
    "Richmond", "Virginia Beach", "Norfolk", "Chesapeake", "Newport News", "Hampton", "Portsmouth", "Suffolk", "Roanoke", "Lynchburg", "Harrisonburg", "Charlottesville", "Danville", "Petersburg",
    "Charlotte", "Raleigh", "Greensboro", "Durham", "Winston-Salem", "Fayetteville", "Cary", "Wilmington", "High Point", "Concord", "Asheville", "Gastonia", "Jacksonville", "Greenville",
    "Columbia", "Charleston", "North Charleston", "Mount Pleasant", "Rock Hill", "Greenville", "Summerville", "Sumter", "Florence", "Spartanburg", "Myrtle Beach", "Aiken", "Anderson",
    "Atlanta", "Augusta", "Columbus", "Savannah", "Athens", "Macon", "Roswell", "Albany", "Johns Creek", "Warner Robins", "Alpharetta", "Marietta", "Valdosta", "Smyrna", "Dunwoody",
    "Jacksonville", "Miami", "Tampa", "Orlando", "St. Petersburg", "Hialeah", "Tallahassee", "Fort Lauderdale", "Port St. Lucie", "Cape Coral", "Pembroke Pines", "Hollywood", "Miramar",
    "Nashville", "Memphis", "Knoxville", "Chattanooga", "Clarksville", "Murfreesboro", "Franklin", "Jackson", "Johnson City", "Hendersonville", "Kingsport", "Smyrna", "Cleveland", "Brentwood",
    "Louisville", "Lexington", "Bowling Green", "Owensboro", "Covington", "Hopkinsville", "Richmond", "Florence", "Georgetown", "Henderson", "Elizabethtown", "Nicholasville", "Jeffersontown",
    "Birmingham", "Montgomery", "Huntsville", "Mobile", "Tuscaloosa", "Hoover", "Dothan", "Decatur", "Auburn", "Madison", "Florence", "Gadsden", "Vestavia Hills", "Prattville", "Phenix City",
    "New Orleans", "Baton Rouge", "Shreveport", "Lafayette", "Lake Charles", "Kenner", "Bossier City", "Monroe", "Alexandria", "Houma", "Marrero", "New Iberia", "Laplace", "Slidell",
    "Jackson", "Gulfport", "Southaven", "Hattiesburg", "Biloxi", "Meridian", "Tupelo", "Greenville", "Olive Branch", "Horn Lake", "Clinton", "Pearl", "Madison", "Ridgeland", "Starkville",
    "Little Rock", "Fort Smith", "Fayetteville", "Springdale", "Jonesboro", "North Little Rock", "Conway", "Rogers", "Pine Bluff", "Bentonville", "Hot Springs", "Benton", "Sherwood",
    "Detroit", "Grand Rapids", "Warren", "Sterling Heights", "Ann Arbor", "Lansing", "Flint", "Dearborn", "Livonia", "Troy", "Westland", "Farmington Hills", "Kalamazoo", "Wyoming", "Southfield",
    "Cleveland", "Cincinnati", "Columbus", "Toledo", "Akron", "Dayton", "Parma", "Canton", "Youngstown", "Lorain", "Hamilton", "Springfield", "Kettering", "Elyria", "Lakewood", "Newark",
    "Indianapolis", "Fort Wayne", "Evansville", "South Bend", "Carmel", "Bloomington", "Fishers", "Hammond", "Gary", "Muncie", "Lafayette", "Terre Haute", "Kokomo", "Anderson", "Greenwood",
    "Chicago", "Aurora", "Rockford", "Joliet", "Naperville", "Springfield", "Peoria", "Elgin", "Waukegan", "Cicero", "Champaign", "Bloomington", "Arlington Heights", "Evanston", "Schaumburg",
    "Milwaukee", "Madison", "Green Bay", "Kenosha", "Racine", "Appleton", "Waukesha", "Oshkosh", "Eau Claire", "Janesville", "West Allis", "La Crosse", "Sheboygan", "Wauwatosa", "Fond du Lac",
    "Des Moines", "Cedar Rapids", "Davenport", "Sioux City", "Iowa City", "Waterloo", "Council Bluffs", "Ames", "Dubuque", "West Des Moines", "Ankeny", "Cedar Falls", "Marion", "Bettendorf",
    "Kansas City", "Wichita", "Overland Park", "Kansas City KS", "Olathe", "Topeka", "Lawrence", "Shawnee", "Manhattan", "Lenexa", "Salina", "Hutchinson", "Leavenworth", "Leawood", "Derby",
    "St. Louis", "Kansas City MO", "Springfield", "Columbia", "Independence", "Lee's Summit", "O'Fallon", "St. Joseph", "St. Charles", "St. Peters", "Blue Springs", "Florissant", "Joplin",
    "Omaha", "Lincoln", "Bellevue", "Grand Island", "Kearney", "Fremont", "Hastings", "Norfolk", "North Platte", "Columbus", "Papillion", "La Vista", "Scottsbluff", "South Sioux City",
    "Oklahoma City", "Tulsa", "Norman", "Broken Arrow", "Lawton", "Edmond", "Moore", "Midwest City", "Enid", "Stillwater", "Muskogee", "Owasso", "Bartlesville", "Shawnee", "Yukon",
    "Dallas", "Houston", "San Antonio", "Austin", "Fort Worth", "El Paso", "Arlington", "Corpus Christi", "Plano", "Laredo", "Lubbock", "Irving", "Garland", "Amarillo", "Grand Prairie",
    "Shreveport", "Alexandria", "Monroe", "Bossier City", "Lake Charles", "Kenner", "Houma", "Marrero", "Laplace", "New Iberia", "Hammond", "Prairieville", "Central", "Slidell",
    
    // Canada (Pennsylvania coverage)
    "Toronto", "Mississauga", "Scarborough", "Brampton", "Hamilton", "London", "Markham", "Vaughan", "Kitchener", "Windsor", "Richmond Hill", "Oakville", "Burlington", "Greater Sudbury",
    "Montreal", "Quebec City", "Laval", "Gatineau", "Longueuil", "Sherbrooke", "Saguenay", "Levis", "Trois-Rivieres", "Terrebonne", "Jean-sur-Richelieu", "Repentigny", "Brossard", "Drummondville",
    "Ottawa", "Mississauga", "Brampton", "Hamilton", "Quebec City", "Surrey", "Laval", "Halifax", "London", "Markham", "Vaughan", "Gatineau", "Saskatoon", "Longueuil", "Kitchener",
    "Halifax", "Dartmouth", "Sydney", "Truro", "New Glasgow", "Glace Bay", "Kentville", "Antigonish", "Yarmouth", "Amherst", "Bridgewater", "Wolfville", "Digby", "Shelburne",
    "St. John's", "Mount Pearl", "Corner Brook", "Conception Bay South", "Grand Falls-Windsor", "Gander", "Carbonear", "Stephenville", "Bay Roberts", "Marystown", "Placentia", "Labrador City",
    "Fredericton", "Saint John", "Moncton", "Dieppe", "Miramichi", "Bathurst", "Edmundston", "Campbellton", "Oromocto", "Grand Falls", "Woodstock", "Sackville", "Caraquet", "Shediac",
    "Charlottetown", "Summerside", "Stratford", "Cornwall", "Montague", "Kensington", "Souris", "Alberton", "Tignish", "Georgetown", "O'Leary", "Borden-Carleton",
    
    // Mexico and Central America (Pennsylvania/Singapore coverage)
    "Mexico City", "Ecatepec", "Guadalajara", "Puebla", "Juarez", "Tijuana", "Leon", "Zapopan", "Monterrey", "Nezahualcoyotl", "Culiacan", "Chihuahua", "Merida", "San Luis Potosi",
    "Aguascalientes", "Hermosillo", "Saltillo", "Mexicali", "Guadalupe", "Acapulco", "Tlalnepantla", "Cancun", "Queretaro", "Chimalhuacan", "Torreon", "Morelia", "Reynosa", "Tlaquepaque",
    "Tuxtla Gutierrez", "Durango", "Toluca", "Ciudad Lopez Mateos", "Cuautitlan Izcalli", "Ciudad Apodaca", "Matamoros", "San Nicolas de los Garza", "Veracruz", "Xalapa", "Tonala",
    "Mazatlan", "Irapuato", "Nuevo Laredo", "Xico", "Villahermosa", "General Escobedo", "Celaya", "Cuernavaca", "Tepic", "Ixtapaluca", "Ciudad Victoria", "Ciudad Obregon", "Nicolas Romero",
    "Ensenada", "Coacalco de Berriozabal", "Santa Catarina", "Uruapan", "Gomez Palacio", "Los Mochis", "Pachuca", "Oaxaca", "Tehuacan", "Campeche", "La Paz", "Nogales", "Buenavista",
    
    // Caribbean (Pennsylvania coverage)
    "Havana", "Santiago de Cuba", "Camaguey", "Holguin", "Santa Clara", "Guantanamo", "Bayamo", "Las Tunas", "Cienfuegos", "Pinar del Rio", "Matanzas", "Ciego de Avila", "Sancti Spiritus",
    "Santo Domingo", "Santiago", "San Cristobal", "La Vega", "San Pedro de Macoris", "San Francisco de Macoris", "La Romana", "Puerto Plata", "San Juan de la Maguana", "Barahona",
    "San Juan", "Bayamon", "Carolina", "Ponce", "Caguas", "Guaynabo", "Arecibo", "Toa Baja", "Mayaguez", "Trujillo Alto", "Toa Alta", "Aguadilla", "Vega Baja", "Humacao", "Rio Grande",
    "Port-au-Prince", "Carrefour", "Delmas", "Cap-Haitien", "Petion-Ville", "Gonaives", "Saint-Marc", "Les Cayes", "Verrettes", "Petit-Goave", "Leogane", "Jacmel", "Limbe", "Jeremie",
    "Kingston", "Montego Bay", "Spanish Town", "Portmore", "Mandeville", "May Pen", "Old Harbour", "Linstead", "Half Way Tree", "Savanna-la-Mar", "Port Antonio", "Saint Ann's Bay",
    "Nassau", "Freeport", "West End", "Coopers Town", "Marsh Harbour", "George Town", "Arthur's Town", "Cockburn Town", "Clarence Town", "Colonel Hill", "Dunmore Town", "Governor's Harbour",
    "Bridgetown", "Speightstown", "Oistins", "Bathsheba", "Holetown", "The Crane", "Crab Hill", "Blackmans", "Hillaby", "Greenland", "Belleplaine",
    "Port of Spain", "San Fernando", "Chaguanas", "Arima", "Point Fortin", "Tunapuna", "Scarborough", "Diego Martin", "Sangre Grande", "Rio Claro", "Princes Town", "Siparia", "Couva",
    
    // Central America
    "Guatemala City", "Mixco", "Villa Nueva", "Quetzaltenango", "San Miguel Petapa", "Escuintla", "Santa Catarina Pinula", "Soyapango", "San Juan Sacatepequez", "Huehuetenango", "Mazatenango",
    "San Salvador", "Soyapango", "Santa Ana", "San Miguel", "Mejicanos", "Santa Tecla", "Apopa", "Delgado", "Sonsonate", "San Marcos", "Usulutan", "Cojutepeque", "Zacatecoluca", "Ilopango",
    "Tegucigalpa", "San Pedro Sula", "Choloma", "La Ceiba", "El Progreso", "Choluteca", "Comayagua", "Puerto Cortez", "La Lima", "Danli", "Siguatepeque", "Juticalpa", "Villanueva",
    "Managua", "Leon", "Masaya", "Tipitapa", "Chinandega", "Matagalpa", "Esteli", "Granada", "Ciudad Sandino", "Jinotega", "Nueva Guinea", "Juigalpa", "El Viejo", "Rivas", "Jinotepe",
    "San Jose", "San Francisco", "Limon", "San Jose", "Alajuela", "Cartago", "Heredia", "Puntarenas", "Liberia", "Paraiso", "San Carlos", "Quesada", "San Isidro", "Curridabat", "San Vicente",
    "Panama City", "San Miguelito", "Tocumen", "David", "Arraijan", "Colon", "Las Cumbres", "La Chorrera", "Pacora", "Santiago", "Chitre", "Vista Alegre", "Chilibre", "Nuevo Arraijan",
    "Belize City", "San Ignacio", "Belmopan", "Orange Walk", "Dangriga", "Corozal", "San Pedro", "Benque Viejo", "Punta Gorda", "Ladyville", "Independence", "Big Creek", "Placencia",
    
    // South America (Pennsylvania/Singapore coverage)
    "Bogota", "Medellin", "Cali", "Barranquilla", "Cartagena", "Cucuta", "Bucaramanga", "Ibague", "Soledad", "Soacha", "Villavicencio", "Santa Marta", "Pereira", "Bello", "Valledupar",
    "Monteria", "Pasto", "Manizales", "Neiva", "Palmira", "Armenia", "Popayan", "Buenaventura", "Floridablanca", "Sincelejo", "Itagui", "Envigado", "Tulua", "Dosquebradas", "Apartado",
    "Caracas", "Maracaibo", "Valencia", "Barquisimeto", "Maracay", "Petare", "Ciudad Guayana", "Barcelona", "Maturin", "San Cristobal", "Ciudad Bolivar", "Cumana", "Merida", "Cabimas",
    "Georgetown", "Linden", "New Amsterdam", "Anna Regina", "Bartica", "Corriverton", "Rose Hall", "Vreed-en-Hoop", "Fort Wellington", "Mahaica", "Parika", "Skeldon", "Charity", "Paradise",
    "Paramaribo", "Lelydorp", "Nieuw Nickerie", "Moengo", "Nieuw Amsterdam", "Marienburg", "Wageningen", "Albina", "Groningen", "Brownsweg", "Onverwacht", "Totness", "Commewijne",
    "Cayenne", "Saint-Laurent-du-Maroni", "Kourou", "Matoury", "Remire-Montjoly", "Macouria", "Maripasoula", "Apatou", "Grand-Santi", "Papaichton", "Saint-Georges", "Camopi", "Ouanary",
    "Lima", "Arequipa", "Callao", "Trujillo", "Chiclayo", "Iquitos", "Piura", "Cusco", "Huancayo", "Tacna", "Pucallpa", "Chimbote", "Ica", "Juliaca", "Ayacucho", "Cajamarca", "Chincha Alta",
    "Huanuco", "Sullana", "Tarapoto", "Puno", "Talara", "Huaraz", "Tumbes", "Jaen", "Ilo", "Barranca", "Moquegua", "Pisco", "Abancay", "Chulucanas", "Cerro de Pasco", "Puerto Maldonado",
    "Quito", "Guayaquil", "Cuenca", "Santo Domingo", "Machala", "Duran", "Manta", "Portoviejo", "Loja", "Ambato", "Esmeraldas", "Quevedo", "Riobamba", "Milagro", "Ibarra", "La Libertad",
    "Babahoyo", "Sangolqui", "Daule", "Latacunga", "Tulcan", "Chone", "Pasaje", "Santa Rosa", "Huaquillas", "El Carmen", "Montecristi", "Samborondon", "Salinas", "Azogues", "Vinces",
    "La Paz", "Santa Cruz", "Cochabamba", "Sucre", "Oruro", "Tarija", "Potosi", "Sacaba", "Quillacollo", "Montero", "Trinidad", "Warnes", "El Alto", "Yacuiba", "La Guardia", "Riberalta",
    "Viacha", "Tiquipaya", "Colcapirhua", "Vinto", "Guayaramerin", "Camiri", "Bermejo", "Tupiza", "Villazon", "Llallagua", "San Ignacio", "San Julian", "Huanuni", "Cotoca", "Puerto Suarez",
    "Santiago", "Puente Alto", "Antofagasta", "Vina del Mar", "Valparaiso", "Talcahuano", "San Bernardo", "Temuco", "Iquique", "Concepcion", "Rancagua", "La Serena", "Talca", "Coquimbo",
    "Arica", "Puerto Montt", "Chillan", "Los Angeles", "Calama", "Osorno", "Valdivia", "Copiapo", "La Pintana", "Quilpue", "Alto Hospicio", "Coronel", "San Antonio", "Punta Arenas",
    "Buenos Aires", "Cordoba", "Rosario", "Mendoza", "La Plata", "San Miguel de Tucuman", "Mar del Plata", "Salta", "Santa Fe", "San Juan", "Resistencia", "Santiago del Estero", "Corrientes",
    "Posadas", "San Salvador de Jujuy", "Bahia Blanca", "Parana", "Neuquen", "Formosa", "San Luis", "La Rioja", "Comodoro Rivadavia", "Concordia", "San Rafael", "Tandil", "Villa Mercedes",
    "San Nicolas", "Trelew", "Santa Rosa", "Venado Tuerto", "Zarate", "Pergamino", "Olavarria", "Junin", "Rafaela", "Necochea", "Rio Cuarto", "San Fernando del Valle de Catamarca",
    "Montevideo", "Salto", "Ciudad de la Costa", "Paysandu", "Las Piedras", "Rivera", "Maldonado", "Tacuarembo", "Melo", "Mercedes", "Artigas", "Minas", "San Jose", "Durazno", "Florida",
    "Barros Blancos", "Ciudad del Plata", "San Carlos", "Colonia del Sacramento", "Pando", "Treinta y Tres", "Rocha", "Fray Bentos", "Trinidad", "La Paz", "Canelones", "Carmelo", "Dolores",
    "Asuncion", "Ciudad del Este", "San Lorenzo", "Luque", "Capiata", "Lambare", "Fernando de la Mora", "Limpio", "Nemby", "Encarnacion", "Pedro Juan Caballero", "Villa Elisa", "Caaguazu",
    "Coronel Oviedo", "Hernandarias", "Presidente Franco", "Itaugua", "Mariano Roque Alonso", "Minga Guazu", "Villa Hayes", "San Antonio", "Caacupe", "Pilar", "Itaquyry", "Villarrica",
    "Sao Paulo", "Rio de Janeiro", "Brasilia", "Salvador", "Fortaleza", "Belo Horizonte", "Manaus", "Curitiba", "Recife", "Goiania", "Belem", "Porto Alegre", "Guarulhos", "Campinas",
    "Sao Luis", "Sao Goncalo", "Maceio", "Duque de Caxias", "Campo Grande", "Natal", "Teresina", "Sao Bernardo do Campo", "Nova Iguacu", "Joao Pessoa", "Osasco", "Santo Andre", "Jaboatao",
    "Sao Jose dos Campos", "Ribeirao Preto", "Uberlandia", "Sorocaba", "Contagem", "Aracaju", "Feira de Santana", "Cuiaba", "Joinville", "Aparecida de Goiania", "Londrina", "Juiz de Fora",
    "Ananindeua", "Porto Velho", "Serra", "Niteroi", "Belford Roxo", "Campos dos Goytacazes", "Vila Velha", "Florianopolis", "Caxias do Sul", "Macapa", "Moji das Cruzes", "Santos",
    "Betim", "Diadema", "Campina Grande", "Jundiai", "Olinda", "Carapicuiba", "Piracicaba", "Bauru", "Itaquaquecetuba", "Sao Vicente", "Canoas", "Maua", "Caucaia", "Vitoria",
    "Pelotas", "Ribeirao das Neves", "Vitoria da Conquista", "Uberaba", "Cascavel", "Guaruja", "Rio Branco", "Petropolis", "Taubate", "Limeira", "Santarem", "Praia Grande", "Caruaru",
    "Boa Vista", "Ponta Grossa", "Blumenau", "Franca", "Sao Jose do Rio Preto", "Paulista", "Itapevi", "Parnamirim", "Arapiraca", "Viamao", "Foz do Iguacu", "Maringa", "Anapolis",
    
    // Europe (Pennsylvania/Hyderabad/Singapore coverage)
    "London", "Birmingham", "Liverpool", "Sheffield", "Manchester", "Leeds", "Edinburgh", "Glasgow", "Cardiff", "Belfast", "Newcastle", "Brighton", "Hull", "Leicester", "Bradford",
    "Coventry", "Nottingham", "Stoke-on-Trent", "Southampton", "Derby", "Portsmouth", "Plymouth", "Reading", "Wolverhampton", "Bournemouth", "Sunderland", "Swansea", "Norwich", "Luton",
    "Dublin", "Cork", "Limerick", "Galway", "Waterford", "Drogheda", "Dundalk", "Swords", "Bray", "Navan", "Kilkenny", "Ennis", "Carlow", "Tralee", "Newbridge", "Naas", "Athlone",
    "Amsterdam", "Rotterdam", "The Hague", "Utrecht", "Eindhoven", "Tilburg", "Groningen", "Almere", "Breda", "Nijmegen", "Enschede", "Apeldoorn", "Haarlem", "Arnhem", "Zaanstad",
    "Brussels", "Antwerp", "Ghent", "Charleroi", "Liege", "Bruges", "Namur", "Leuven", "Mons", "Aalst", "Mechelen", "La Louviere", "Kortrijk", "Hasselt", "Ostend", "Tournai", "Genk",
    "Luxembourg", "Esch-sur-Alzette", "Differdange", "Dudelange", "Ettelbruck", "Diekirch", "Wiltz", "Echternach", "Rumelange", "Grevenmacher", "Bertrange", "Mamer", "Capellen", "Strassen",
    "Paris", "Marseille", "Lyon", "Toulouse", "Nice", "Nantes", "Strasbourg", "Montpellier", "Bordeaux", "Lille", "Rennes", "Reims", "Le Havre", "Saint-Etienne", "Toulon", "Grenoble",
    "Dijon", "Angers", "Villeurbanne", "Le Mans", "Aix-en-Provence", "Clermont-Ferrand", "Brest", "Limoges", "Tours", "Amiens", "Perpignan", "Metz", "Besancon", "Boulogne-Billancourt",
    "Orleans", "Mulhouse", "Rouen", "Saint-Denis", "Argenteuil", "Caen", "Nancy", "Montreuil", "Roubaix", "Tourcoing", "Nanterre", "Avignon", "Vitry-sur-Seine", "Creteil", "Dunkirk",
    "Berlin", "Hamburg", "Munich", "Cologne", "Frankfurt", "Stuttgart", "Dusseldorf", "Dortmund", "Essen", "Leipzig", "Bremen", "Dresden", "Hanover", "Nuremberg", "Duisburg", "Bochum",
    "Wuppertal", "Bielefeld", "Bonn", "Munster", "Karlsruhe", "Mannheim", "Augsburg", "Wiesbaden", "Gelsenkirchen", "Monchengladbach", "Braunschweig", "Chemnitz", "Kiel", "Aachen",
    "Halle", "Magdeburg", "Freiburg", "Krefeld", "Lubeck", "Oberhausen", "Erfurt", "Mainz", "Rostock", "Kassel", "Hagen", "Hamm", "Saarbrucken", "Mulheim", "Potsdam", "Ludwigshafen",
    "Zurich", "Geneva", "Basel", "Lausanne", "Bern", "Winterthur", "Lucerne", "St. Gallen", "Lugano", "Biel", "Thun", "Bellinzona", "Koniz", "La Chaux-de-Fonds", "Schaffhausen", "Fribourg",
    "Vienna", "Graz", "Linz", "Salzburg", "Innsbruck", "Klagenfurt", "Villach", "Wels", "Sankt Polten", "Dornbirn", "Wiener Neustadt", "Steyr", "Feldkirch", "Bregenz", "Leonding",
    "Rome", "Milan", "Naples", "Turin", "Palermo", "Genoa", "Bologna", "Florence", "Bari", "Catania", "Venice", "Verona", "Messina", "Padua", "Trieste", "Taranto", "Brescia", "Parma",
    "Prato", "Modena", "Reggio Calabria", "Reggio Emilia", "Perugia", "Ravenna", "Livorno", "Cagliari", "Foggia", "Rimini", "Salerno", "Ferrara", "Sassari", "Latina", "Giugliano",
    "Monza", "Syracuse", "Pescara", "Bergamo", "Forlì", "Trento", "Vicenza", "Terni", "Bolzano", "Novara", "Piacenza", "Ancona", "Andria", "Arezzo", "Udine", "Cesena", "Lecce",
    "Madrid", "Barcelona", "Valencia", "Seville", "Zaragoza", "Malaga", "Murcia", "Palma", "Las Palmas", "Bilbao", "Alicante", "Cordoba", "Valladolid", "Vigo", "Gijon", "Hospitalet",
    "A Coruna", "Granada", "Vitoria", "Elche", "Santa Cruz de Tenerife", "Badalona", "Oviedo", "Mostoles", "Cartagena", "Terrassa", "Jerez de la Frontera", "Sabadell", "Alcala de Henares",
    "Pamplona", "Fuenlabrada", "Almeria", "Leganes", "San Sebastian", "Santander", "Castellon", "Burgos", "Alcorcon", "Albacete", "Getafe", "Huelva", "Logrono", "Badajoz", "Salamanca",
    "Lisbon", "Porto", "Vila Nova de Gaia", "Amadora", "Braga", "Setubal", "Coimbra", "Queluz", "Funchal", "Cacém", "Vila Franca de Xira", "Almada", "Agualva-Cacém", "Viseu", "Guimaraes",
    "Odivelas", "Matosinhos", "Leiria", "Aveiro", "Maia", "Faro", "Seixal", "Evora", "Portimao", "Cascais", "Loures", "Oeiras", "Gondomar", "Ponta Delgada", "Sintra", "Vila Real",
    
    // Eastern Europe & Balkans
    "Warsaw", "Krakow", "Lodz", "Wroclaw", "Poznan", "Gdansk", "Szczecin", "Bydgoszcz", "Lublin", "Bialystok", "Katowice", "Gdynia", "Czestochowa", "Radom", "Torun", "Sosnowiec",
    "Prague", "Brno", "Ostrava", "Plzen", "Liberec", "Olomouc", "Usti nad Labem", "Ceske Budejovice", "Hradec Kralove", "Pardubice", "Zlin", "Havirov", "Kladno", "Most", "Opava",
    "Bratislava", "Kosice", "Presov", "Zilina", "Nitra", "Banska Bystrica", "Trnava", "Martin", "Trencin", "Poprad", "Presov", "Zvolen", "Povazska Bystrica", "Michalovce", "Spisska Nova Ves",
    "Budapest", "Debrecen", "Szeged", "Miskolc", "Pecs", "Gyor", "Nyiregyhaza", "Kecskemet", "Szekesfehervar", "Szombathely", "Szolnok", "Tatabanya", "Kaposvar", "Erd", "Veszprem",
    "Bucharest", "Cluj-Napoca", "Timisoara", "Iasi", "Constanta", "Craiova", "Brasov", "Galati", "Ploiesti", "Oradea", "Braila", "Arad", "Pitesti", "Sibiu", "Bacau", "Targu Mures",
    "Baia Mare", "Buzau", "Botosani", "Satu Mare", "Ramnicu Valcea", "Drobeta-Turnu Severin", "Suceava", "Focsani", "Piatra Neamt", "Targu Jiu", "Tulcea", "Resita", "Calarasi",
    "Sofia", "Plovdiv", "Varna", "Burgas", "Ruse", "Stara Zagora", "Pleven", "Sliven", "Dobrich", "Shumen", "Pernik", "Haskovo", "Pazardzhik", "Yambol", "Blagoevgrad", "Veliko Tarnovo",
    "Belgrade", "Novi Sad", "Nis", "Kragujevac", "Subotica", "Zrenjanin", "Pancevo", "Cacak", "Novi Pazar", "Kraljevo", "Smederevo", "Valjevo", "Leskovac", "Uzice", "Vranje", "Sabac",
    "Zagreb", "Split", "Rijeka", "Osijek", "Zadar", "Slavonski Brod", "Pula", "Karlovac", "Varazdin", "Dubrovnik", "Sibenik", "Sisak", "Velika Gorica", "Vinkovci", "Vukovar", "Kastela",
    "Ljubljana", "Maribor", "Celje", "Kranj", "Velenje", "Koper", "Novo Mesto", "Ptuj", "Kamnik", "Trbovlje", "Nova Gorica", "Jesenice", "Domzale", "Skofja Loka", "Murska Sobota",
    "Sarajevo", "Banja Luka", "Tuzla", "Zenica", "Mostar", "Bihac", "Bijeljina", "Prijedor", "Trebinje", "Doboj", "Cazin", "Velika Kladusa", "Visoko", "Gorazde", "Konjic", "Gracanica",
    "Podgorica", "Niksic", "Pljevlja", "Bijelo Polje", "Cetinje", "Bar", "Herceg Novi", "Berane", "Budva", "Ulcinj", "Tivat", "Rozaje", "Kotor", "Danilovgrad", "Mojkovac", "Plav",
    "Skopje", "Bitola", "Kumanovo", "Prilep", "Tetovo", "Veles", "Ohrid", "Gostivar", "Strumica", "Kavadarci", "Kocani", "Kicevo", "Struga", "Radovis", "Gevgelija", "Debar",
    "Tirana", "Durres", "Vlore", "Elbasan", "Shkoder", "Kamez", "Fier", "Korce", "Berat", "Lushnje", "Kavaje", "Pogradec", "Gjirokaster", "Sarande", "Lezhe", "Kucove", "Kruje",
    "Athens", "Thessaloniki", "Patras", "Heraklion", "Larissa", "Volos", "Rhodes", "Ioannina", "Chania", "Chalcis", "Katerini", "Kalamata", "Serres", "Lamia", "Alexandroupoli", "Kozani",
    "Nicosia", "Limassol", "Larnaca", "Famagusta", "Paphos", "Kyrenia", "Morphou", "Paralimni", "Aradippou", "Strovolos", "Lakatamia", "Geri", "Aglandjia", "Agios Dometios", "Latsia",
    
    // Turkey & Caucasus (Hyderabad coverage)
    "Istanbul", "Ankara", "Izmir", "Bursa", "Adana", "Gaziantep", "Konya", "Antalya", "Kayseri", "Mersin", "Eskisehir", "Diyarbakir", "Samsun", "Denizli", "Sanliurfa", "Adapazari",
    "Malatya", "Kahramanmaras", "Erzurum", "Van", "Batman", "Elazig", "Gebze", "Manisa", "Kocaeli", "Sakarya", "Hatay", "Balikesir", "Tarsus", "Kutahya", "Trabzon", "Corlu",
    "Tbilisi", "Batumi", "Kutaisi", "Rustavi", "Gori", "Zugdidi", "Poti", "Khashuri", "Samtredia", "Senaki", "Zestafoni", "Marneuli", "Telavi", "Akhaltsikhe", "Kobuleti", "Ozurgeti",
    "Yerevan", "Gyumri", "Vanadzor", "Vagharshapat", "Hrazdan", "Abovyan", "Kapan", "Armavir", "Artashat", "Ijevan", "Gavar", "Goris", "Charentsavan", "Sevan", "Dilijan", "Sisian",
    "Baku", "Ganja", "Sumqayit", "Mingachevir", "Shirvan", "Nakhchivan", "Shaki", "Yevlakh", "Khankendi", "Barda", "Lankaran", "Quba", "Shamakhi", "Aghjabadi", "Jalilabad", "Imishli",
    
    // Russia & Central Asia
    "Moscow", "St. Petersburg", "Novosibirsk", "Yekaterinburg", "Nizhny Novgorod", "Kazan", "Chelyabinsk", "Omsk", "Samara", "Rostov-on-Don", "Ufa", "Krasnoyarsk", "Voronezh", "Perm",
    "Volgograd", "Krasnodar", "Saratov", "Tyumen", "Tolyatti", "Izhevsk", "Barnaul", "Ulyanovsk", "Irkutsk", "Khabarovsk", "Yaroslavl", "Vladivostok", "Makhachkala", "Tomsk", "Orenburg",
    "Kemerovo", "Novokuznetsk", "Ryazan", "Astrakhan", "Penza", "Lipetsk", "Kirov", "Cheboksary", "Kaliningrad", "Bryansk", "Kursk", "Ivanovo", "Magnitogorsk", "Ulan-Ude", "Tver",
    "Stavropol", "Belgorod", "Arkhangelsk", "Vladimir", "Sochi", "Kurgan", "Smolensk", "Kaluga", "Chita", "Oryol", "Volzhsky", "Cherepovets", "Vladikavkaz", "Murmansk", "Surgut",
    "Vologda", "Tambov", "Saransk", "Taganrog", "Naberezhnye Chelny", "Komsomolsk-on-Amur", "Kostroma", "Petrozavodsk", "Nizhny Tagil", "Bratsk", "Dzerzhinsk", "Shakhty", "Nalchik",
    "Minsk", "Gomel", "Mogilev", "Vitebsk", "Grodno", "Brest", "Bobruisk", "Baranovichi", "Borisov", "Pinsk", "Orsha", "Mozyr", "Novopolotsk", "Soligorsk", "Lida", "Molodechno",
    "Kyiv", "Kharkiv", "Odesa", "Dnipro", "Donetsk", "Zaporizhzhia", "Lviv", "Kryvyi Rih", "Mykolaiv", "Mariupol", "Luhansk", "Vinnytsia", "Makiivka", "Simferopol", "Kherson",
    "Poltava", "Chernihiv", "Cherkasy", "Sumy", "Zhytomyr", "Horlivka", "Rivne", "Kropyvnytskyi", "Ivano-Frankivsk", "Ternopil", "Lutsk", "Bila Tserkva", "Kramatorsk", "Melitopol",
    "Chisinau", "Tiraspol", "Balti", "Bender", "Comrat", "Ungheni", "Cahul", "Soroca", "Orhei", "Ciadar-Lunga", "Straseni", "Causeni", "Drochia", "Edinet", "Dubasari", "Criuleni",
    
    // Central Asia
    "Almaty", "Nur-Sultan", "Shymkent", "Karaganda", "Aktobe", "Taraz", "Pavlodar", "Ust-Kamenogorsk", "Semey", "Atyrau", "Kostanay", "Kyzylorda", "Uralsk", "Petropavl", "Aktau",
    "Temirtau", "Turkistan", "Kokshetau", "Taldykorgan", "Ekibastuz", "Rudny", "Zhezkazgan", "Balkhash", "Kentau", "Ridder", "Kaskelen", "Talgar", "Kapshagay", "Arys", "Saran",
    "Tashkent", "Samarkand", "Namangan", "Andijan", "Nukus", "Fergana", "Bukhara", "Qarshi", "Kokand", "Margilan", "Angren", "Jizzakh", "Chirchiq", "Termez", "Navoiy", "Urgench",
    "Guliston", "Olmaliq", "Bekabad", "Shahrisabz", "Kattakurgan", "Mubarek", "Khojeyli", "Khiva", "Kasansay", "Yangiyer", "Zarafshan", "Uchkuduk", "Guzar", "Kogon", "Asaka",
    "Bishkek", "Osh", "Jalal-Abad", "Karakol", "Tokmok", "Kara-Balta", "Kant", "Naryn", "Uzgen", "Balykchy", "Talas", "Kara-Suu", "Isfana", "Batken", "Tash-Komur", "Kyzyl-Kiya",
    "Dushanbe", "Khujand", "Bokhtar", "Kulob", "Khorugh", "Istaravshan", "Vahdat", "Konibodom", "Isfara", "Panjakent", "Tursunzoda", "Sarband", "Kairakkum", "Somoniyon", "Danghara",
    "Ashgabat", "Turkmenbashi", "Dashoguz", "Mary", "Bayramaly", "Balkanabat", "Serdar", "Tejen", "Anau", "Atamurat", "Khazar", "Gumdag", "Bereket", "Koneurgench", "Kaka", "Akdepe",
    
    // Middle East & North Africa (Hyderabad coverage)
    "Cairo", "Alexandria", "Giza", "Shubra El-Kheima", "Port Said", "Suez", "Luxor", "El-Mahalla El-Kubra", "Asyut", "Mansoura", "Tanta", "Fayoum", "Zagazig", "Ismailia", "Aswan",
    "Damanhur", "Minya", "Beni Suef", "Qena", "Sohag", "Hurghada", "6th of October City", "Shibin El Kom", "Banha", "Kafr el-Sheikh", "Arish", "Mallawi", "10th of Ramadan City",
    "Tripoli", "Benghazi", "Misrata", "Zawiya", "Bayda", "Gharyan", "Tobruk", "Ajdabiya", "Zliten", "Derna", "Sabha", "Khoms", "Sabratha", "Sirte", "Zuwara", "Kufra", "Marj", "Tarhuna",
    "Tunis", "Sfax", "Sousse", "Kairouan", "Bizerte", "Gabes", "Ariana", "Gafsa", "Monastir", "Ben Arous", "Kasserine", "Medenine", "Nabeul", "Tataouine", "Beja", "Jendouba", "Mahdia",
    "Algiers", "Oran", "Constantine", "Annaba", "Blida", "Batna", "Djelfa", "Setif", "Sidi Bel Abbes", "Biskra", "Tebessa", "El Oued", "Skikda", "Tiaret", "Bejaia", "Tlemcen", "Bechar",
    "Mostaganem", "El Eulma", "Medea", "Tizi Ouzou", "Ech-Cheliff", "Bordj Bou Arreridj", "Relizane", "Laghouat", "Msila", "Jijel", "Khenchela", "Ain Beida", "Oum El Bouaghi",
    "Casablanca", "Rabat", "Fez", "Marrakesh", "Agadir", "Tangier", "Meknes", "Oujda", "Kenitra", "Tetouan", "Safi", "El Jadida", "Beni Mellal", "Nador", "Khouribga", "Taza", "Settat",
    "Jerusalem", "Tel Aviv", "Haifa", "Rishon LeZion", "Petah Tikva", "Ashdod", "Netanya", "Beer Sheva", "Holon", "Bnei Brak", "Rehovot", "Bat Yam", "Ramat Gan", "Ashkelon", "Herzliya",
    "Kfar Saba", "Hadera", "Modiin", "Nazareth", "Ramla", "Lod", "Raanana", "Nahariya", "Givatayim", "Hod HaSharon", "Kiryat Ata", "Umm al-Fahm", "Eilat", "Rosh HaAyin", "Nesher",
    "Amman", "Zarqa", "Irbid", "Russeifa", "Quwaysimah", "Wadi as-Ser", "Tila al-Ali", "Khuraybat as-Suq", "Aqaba", "As-Salt", "Ar Ramtha", "Madaba", "Al-Baq'a", "Sahab", "Ain al-Basha",
    "Beirut", "Tripoli", "Sidon", "Tyre", "Byblos", "Jounieh", "Zahlé", "Baalbek", "Bourj Hammoud", "Nabatieh", "Batroun", "Zgharta", "Jbeil", "Aley", "Bhamdoun", "Bikfaya", "Antelias",
    "Damascus", "Aleppo", "Homs", "Latakia", "Hama", "Deir ez-Zor", "Raqqa", "Al-Hasakah", "Qamishli", "Tartus", "Douma", "Daraa", "As-Suwayda", "Safita", "Jableh", "Baniyas", "Idlib",
    "Baghdad", "Basra", "Mosul", "Erbil", "Najaf", "Kirkuk", "Sulaymaniyah", "Karbala", "Nasiriyah", "Amara", "Hillah", "Diwaniyah", "Ramadi", "Kut", "Ba'qubah", "Samawah", "Tikrit",
    "Tehran", "Mashhad", "Isfahan", "Karaj", "Shiraz", "Tabriz", "Ahvaz", "Qom", "Kermanshah", "Orumiyeh", "Zahedan", "Rasht", "Kerman", "Hamadan", "Arak", "Yazd", "Qazvin", "Zanjan",
    "Ardabil", "Bandar Abbas", "Eslamshahr", "Sanandaj", "Khorramabad", "Borujerd", "Abadan", "Kashan", "Sari", "Gorgan", "Najafabad", "Sabzevar", "Khomeini Shahr", "Amol", "Birjand",
    
    // Arabian Peninsula (Hyderabad coverage)
    "Riyadh", "Jeddah", "Mecca", "Medina", "Dammam", "Khobar", "Dhahran", "Jubail", "Tabuk", "Buraidah", "Khamis Mushait", "Ha'il", "Hafar al-Batin", "Najran", "Yanbu", "Al-Mubarraz",
    "Abha", "Arar", "Sakakah", "Jizan", "Al-Kharj", "Al-Qatif", "Al-Hofuf", "Unaizah", "Al-Jubail", "Al-Taif", "Al-Bahah", "Ras Tanura", "Bisha", "Sharurah", "Al-Qurayyat", "Al-Rass",
    "Kuwait City", "Hawalli", "Salmiya", "Farwaniya", "Fahaheel", "Abu Halifa", "Ahmadi", "Jahra", "Mangaf", "Mahboula", "Fintas", "Sabah Al-Salem", "Salmiya", "Salwa", "Messila",
    "Doha", "Al Rayyan", "Al Wakrah", "Al Khor", "Al Shamal", "Mesaieed", "Dukhan", "Al Wukair", "Al Shahaniya", "Lusail", "Al Daayen", "Umm Salal", "Al Kharrara", "Al Ghuwairiya",
    "Manama", "Muharraq", "Riffa", "Hamad Town", "A'ali", "Isa Town", "Sitra", "Budaiya", "Jidhafs", "Sanabis", "Tubli", "Durrat Al Bahrain", "Amwaj Islands", "Diyar Al Muharraq",
    "Dubai", "Abu Dhabi", "Sharjah", "Al Ain", "Ajman", "Ras Al Khaimah", "Fujairah", "Umm Al Quwain", "Khor Fakkan", "Kalba", "Jebel Ali", "Madinat Zayed", "Ruwais", "Liwa", "Dhaid",
    "Muscat", "Salalah", "Sohar", "Nizwa", "Sur", "Ibri", "Barka", "Rustaq", "Buraimi", "Saham", "Bahla", "Khasab", "Ibra", "Suwayq", "Khabura", "Shinas", "Izki", "Adam", "Yanqul",
    "Sana'a", "Aden", "Taiz", "Hudaydah", "Mukalla", "Ibb", "Dhamar", "Amran", "Sayyan", "Zabid", "Bajil", "Hajjah", "Sadah", "Marib", "Al Bayda", "Ataq", "Zinjibar", "Lahij", "Abs",
    
    // South Asia (Hyderabad coverage)
    "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Kolkata", "Pune", "Ahmedabad", "Surat", "Jaipur", "Lucknow", "Kanpur", "Nagpur", "Indore", "Bhopal", "Visakhapatnam",
    "Patna", "Vadodara", "Ghaziabad", "Ludhiana", "Agra", "Nashik", "Ranchi", "Faridabad", "Meerut", "Rajkot", "Varanasi", "Srinagar", "Aurangabad", "Dhanbad", "Amritsar",
    "Allahabad", "Jabalpur", "Vijayawada", "Gwalior", "Jodhpur", "Madurai", "Raipur", "Kota", "Chandigarh", "Guwahati", "Coimbatore", "Trivandrum", "Mysore", "Bareilly",
    "Gurgaon", "Noida", "Thane", "Kochi", "Kozhikode", "Mangalore", "Bhubaneswar", "Salem", "Tiruchirappalli", "Tiruppur", "Guntur", "Warangal", "Hubli", "Belgaum",
    "Karachi", "Lahore", "Islamabad", "Rawalpindi", "Faisalabad", "Multan", "Peshawar", "Quetta", "Sialkot", "Gujranwala", "Hyderabad Pakistan", "Sargodha", "Bahawalpur", "Sukkur",
    "Kathmandu", "Pokhara", "Lalitpur", "Bharatpur", "Biratnagar", "Birgunj", "Dharan", "Hetauda", "Janakpur", "Butwal", "Nepalgunj", "Dhangadhi", "Tulsipur", "Kalaiya",
    "Dhaka", "Chittagong", "Khulna", "Rajshahi", "Sylhet", "Rangpur", "Barisal", "Comilla", "Mymensingh", "Gazipur", "Narayanganj", "Tongi", "Cox's Bazar", "Bogra",
    "Colombo", "Kandy", "Galle", "Jaffna", "Negombo", "Ratnapura", "Anuradhapura", "Matara", "Batticaloa", "Kurunegala", "Trincomalee", "Badulla", "Kalutara", "Vavuniya",
    
    // East & Southeast Asia (Singapore coverage)
    "Singapore", "Kuala Lumpur", "Johor Bahru", "George Town", "Ipoh", "Kuching", "Kota Kinabalu", "Petaling Jaya", "Shah Alam", "Seremban", "Malacca", "Alor Setar", "Miri", "Sandakan",
    "Bangkok", "Chiang Mai", "Phuket", "Pattaya", "Hat Yai", "Nakhon Ratchasima", "Udon Thani", "Khon Kaen", "Nakhon Si Thammarat", "Surat Thani", "Chiang Rai", "Rayong", "Lampang",
    "Jakarta", "Surabaya", "Bandung", "Medan", "Semarang", "Palembang", "Makassar", "Depok", "Tangerang", "Bekasi", "Bogor", "Batam", "Pekanbaru", "Bandar Lampung", "Malang",
    "Manila", "Quezon City", "Davao", "Cebu", "Zamboanga", "Antipolo", "Taguig", "Pasig", "Cagayan de Oro", "Paranaque", "Dasmarinas", "Valenzuela", "Caloocan", "Las Pinas", "Makati",
    "Ho Chi Minh City", "Hanoi", "Da Nang", "Haiphong", "Can Tho", "Nha Trang", "Hue", "Vung Tau", "Buon Ma Thuot", "Long Xuyen", "Rach Gia", "Cam Ranh", "Thai Nguyen", "Bien Hoa",
    "Phnom Penh", "Siem Reap", "Battambang", "Sihanoukville", "Poipet", "Kampong Cham", "Ta Khmau", "Pursat", "Kampong Speu", "Kampong Chhnang", "Prey Veng", "Svay Rieng", "Kratie",
    "Yangon", "Mandalay", "Naypyidaw", "Mawlamyine", "Bago", "Pathein", "Monywa", "Meiktila", "Myitkyina", "Taunggyi", "Sittwe", "Lashio", "Pyay", "Magway", "Hinthada",
    "Hong Kong", "Kowloon", "Tsuen Wan", "Yuen Long", "Tuen Mun", "Tai Po", "Sha Tin", "Fanling", "Sheung Shui", "Tin Shui Wai", "Tseung Kwan O", "Ma On Shan", "Tsing Yi", "Tung Chung",
    "Tokyo", "Osaka", "Nagoya", "Yokohama", "Kobe", "Kyoto", "Fukuoka", "Sapporo", "Sendai", "Hiroshima", "Kitakyushu", "Chiba", "Kawasaki", "Saitama", "Niigata", "Hamamatsu",
    "Seoul", "Busan", "Incheon", "Daegu", "Daejeon", "Gwangju", "Suwon", "Ulsan", "Changwon", "Goyang", "Yongin", "Seongnam", "Bucheon", "Ansan", "Cheongju", "Jeonju",
    "Beijing", "Shanghai", "Guangzhou", "Shenzhen", "Chengdu", "Tianjin", "Wuhan", "Dongguan", "Chongqing", "Nanjing", "Xi'an", "Hangzhou", "Shenyang", "Harbin", "Suzhou", "Qingdao",
    "Taipei", "Kaohsiung", "Taichung", "Tainan", "Hsinchu", "Keelung", "Taoyuan", "Chiayi", "Changhua", "Pingtung", "Yunlin", "Hualien", "Taitung", "Yilan", "Miaoli", "Nantou",
    
    // Africa (Pennsylvania/Singapore coverage)
    "Cairo", "Lagos", "Kinshasa", "Luanda", "Casablanca", "Nairobi", "Addis Ababa", "Johannesburg", "Dar es Salaam", "Khartoum", "Algiers", "Accra", "Kampala", "Maputo", "Lusaka",
    "Dakar", "Tunis", "Conakry", "Bamako", "Harare", "Antananarivo", "Kigali", "Douala", "Yaoundé", "Freetown", "Monrovia", "Abidjan", "Ouagadougou", "Niamey", "N'Djamena",
    
    // Oceania (Singapore coverage)
    "Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide", "Gold Coast", "Newcastle", "Canberra", "Wollongong", "Hobart", "Darwin", "Townsville", "Cairns", "Toowoomba", "Ballarat",
    "Auckland", "Wellington", "Christchurch", "Hamilton", "Dunedin", "Tauranga", "Napier", "Palmerston North", "Nelson", "Rotorua", "New Plymouth", "Whangarei", "Invercargill", "Gisborne"
  ];

  return (
    <div className="container-custom py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">
          <span className="text-gradient-primary">Cities with Low Latency</span>
        </h1>
        
        <p className="text-foreground-secondary text-center mb-12">
          The following cities typically experience less than 100ms latency to at least one of our data centers 
          in Pennsylvania, Hyderabad, or Singapore.
        </p>

        <div className="glass-effect rounded-lg p-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {cities.sort().map((city, index) => (
              <div key={index} className="text-sm text-foreground-secondary hover:text-foreground transition-colors">
                {city}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}