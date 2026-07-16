// DESTINATIONS DATA 

const destinations = [
    // BEACH DESTINATIONS
    {
        id: 1,
        name: "Santorini",
        country: "Greece",
        category: "Beach",
        rating: 4.8,
        reviews: 2450,
        heroImage: "santorini-hero.jpg",
        gallery: ["santorini1.jpg", "santorini2.jpg", "santorini3.jpg", "santorini4.jpg"],
        description: "White-washed buildings with blue domes against the Aegean Sea.",
        fullDescription: "Santorini is a stunning volcanic island in the Aegean Sea, famous for its dramatic cliffs, white-washed buildings with blue domes, and breathtaking sunsets.",
        bestTime: "April to October",
        peakSeason: "July-August",
        weather: "Mediterranean climate with hot summers",
        language: "Greek",
        currency: "Euro (€)",
        timezone: "UTC+2",
        howToReach: { byAir: "Santorini International Airport (JTR)", bySea: "Ferry from Athens", localTransport: "Buses, ATVs" },
        costGuide: { budget: "€70-100/day", midRange: "€150-250/day", luxury: "€300+/day" },
        attractions: ["Oia Sunset", "Red Beach", "Akrotiri Ruins", "Wine Tasting"],
        food: ["Greek Moussaka", "Fava", "Fresh Seafood", "Greek Salad"],
        tips: ["Book accommodation early", "Rent ATV for exploration", "Visit in shoulder season"],
        nearby: ["Mykonos", "Crete", "Athens"],
        mapLink: "https://www.google.com/maps/search/Santorini+Greece"
    },
    {
        id: 2,
        name: "Bali",
        country: "Indonesia",
        category: "Beach",
        rating: 4.5,
        reviews: 3800,
        heroImage: "bali-hero.jpg",
        gallery: ["bali1.jpg", "bali2.jpg", "bali3.jpg", "bali4.jpg"],
        description: "Island of gods with stunning beaches, lush rice terraces, and spiritual culture.",
        fullDescription: "Bali is an Indonesian island known for its forested volcanic mountains, iconic rice paddies, beaches, and coral reefs.",
        bestTime: "April to October",
        weather: "Tropical climate with wet and dry seasons",
        language: "Bahasa Indonesia",
        currency: "Indonesian Rupiah (IDR)",
        timezone: "UTC+8",
        howToReach: { byAir: "Ngurah Rai International Airport (DPS)", localTransport: "Scooters, taxis" },
        costGuide: { budget: "$30-50/day", midRange: "$60-120/day", luxury: "$200+/day" },
        attractions: ["Ubud Monkey Forest", "Tanah Lot", "Rice Terraces", "Kuta Beach"],
        food: ["Nasi Goreng", "Sate", "Babi Guling", "Fresh Juice"],
        tips: ["Rent a scooter", "Respect temples", "Bargain at markets"],
        nearby: ["Lombok", "Java", "Komodo Island"],
        mapLink: "https://www.google.com/maps/search/Bali+Indonesia"
    },
    {
        id: 3,
        name: "Maldives",
        country: "Maldives",
        category: "Beach",
        rating: 4.9,
        reviews: 3200,
        heroImage: "maldives-hero.jpg",
        gallery: ["maldives1.jpg", "maldives2.jpg", "maldives3.jpg", "maldives4.jpg"],
        description: "Luxury overwater bungalows in paradise with turquoise waters and coral reefs.",
        fullDescription: "The Maldives is a tropical nation in the Indian Ocean composed of 26 ring-shaped atolls.",
        bestTime: "November to April",
        weather: "Tropical climate with warm temperatures year-round",
        language: "Dhivehi",
        currency: "Maldivian Rufiyaa (MVR)",
        timezone: "UTC+5",
        howToReach: { byAir: "Velana International Airport (MLE)", localTransport: "Speedboats, seaplanes" },
        costGuide: { budget: "$150-250/day", midRange: "$300-600/day", luxury: "$800+/day" },
        attractions: ["House Reef Snorkeling", "Diving", "Sunset Cruises", "Island Hopping"],
        food: ["Fresh Tuna", "Curries", "Coconut", "Local Sweets"],
        tips: ["Book resorts early", "Pack reef-safe sunscreen", "Bring enough cash"],
        nearby: ["Sri Lanka", "India"],
        mapLink: "https://www.google.com/maps/search/Maldives"
    },
    {
        id: 4,
        name: "Goa",
        country: "India",
        category: "Beach",
        rating: 4.4,
        reviews: 5600,
        heroImage: "goa-hero.jpg",
        gallery: ["goa1.jpg", "goa2.jpg", "goa3.jpg", "goa4.jpg"],
        description: "India's beach paradise with golden sands, vibrant nightlife, and Portuguese heritage.",
        fullDescription: "Goa is India's smallest state but has the biggest reputation for beaches, parties, and laid-back vibes.",
        bestTime: "November to February",
        weather: "Tropical monsoon climate with warm weather year-round",
        language: "Konkani, Hindi, English",
        currency: "Indian Rupee (₹)",
        timezone: "UTC+5:30",
        howToReach: { byAir: "Goa International Airport (GOI)", byTrain: "Railway from Mumbai", localTransport: "Taxis, bikes" },
        costGuide: { budget: "₹1500-2500/day", midRange: "₹3000-6000/day", luxury: "₹8000+/day" },
        attractions: ["Baga Beach", "Calangute Beach", "Dudhsagar Falls", "Old Goa Churches"],
        food: ["Goan Fish Curry", "Prawn Balchão", "Vindaloo", "Bebinca"],
        tips: ["Rent a bike for exploring", "Visit during New Year for parties", "Try water sports"],
        nearby: ["Mumbai", "Karnataka", "Gokarna"],
        mapLink: "https://www.google.com/maps/search/Goa+India"
    },
    {
        id: 5,
        name: "Kerala Backwaters",
        country: "India",
        category: "Beach",
        rating: 4.5,
        reviews: 4200,
        heroImage: "kerala-hero.jpg",
        gallery: ["kerala1.jpg", "kerala2.jpg", "kerala3.jpg", "kerala4.jpg"],
        description: "God's Own Country with serene backwaters, lush greenery, and delicious cuisine.",
        fullDescription: "Kerala is a tropical paradise in southwest India known for its backwaters, palm-fringed beaches, and lush hill stations.",
        bestTime: "September to March",
        weather: "Tropical monsoon climate",
        language: "Malayalam, Hindi, English",
        currency: "Indian Rupee (₹)",
        timezone: "UTC+5:30",
        howToReach: { byAir: "Cochin International Airport (COK)", localTransport: "Buses, taxis, houseboats" },
        costGuide: { budget: "₹1500-2500/day", midRange: "₹3000-6000/day", luxury: "₹8000+/day" },
        attractions: ["Alleppey Backwaters", "Munnar Hill Station", "Kumarakom", "Fort Kochi"],
        food: ["Appam", "Stew", "Fish Curry", "Puttu"],
        tips: ["Stay overnight on a houseboat", "Visit a tea plantation", "Try Kerala Sadhya"],
        nearby: ["Kochi", "Trivandrum", "Madurai"],
        mapLink: "https://www.google.com/maps/search/Kerala+Backwaters"
    },

    // ADVENTURE DESTINATIONS
    {
        id: 6,
        name: "Banff National Park",
        country: "Canada",
        category: "Adventure",
        rating: 4.7,
        reviews: 1850,
        heroImage: "banff-hero.jpg",
        gallery: ["banff1.jpg", "banff2.jpg", "banff3.jpg", "banff4.jpg"],
        description: "Jaw-dropping mountain scenery with turquoise lakes and abundant wildlife.",
        fullDescription: "Banff National Park is Canada's first national park and the world's third. It's a wonderland of turquoise lakes, soaring peaks, and abundant wildlife.",
        bestTime: "June to September",
        weather: "Mountain climate with warm summers and cold winters",
        language: "English",
        currency: "Canadian Dollar (CAD)",
        timezone: "UTC-7",
        howToReach: { byAir: "Calgary International Airport", localTransport: "Car rental, shuttle buses" },
        costGuide: { budget: "$80-120/day", midRange: "$150-250/day", luxury: "$350+/day" },
        attractions: ["Lake Louise", "Moraine Lake", "Icefields Parkway", "Sulphur Mountain"],
        food: ["Poutine", "Maple Syrup treats", "Wild Game", "Fresh Trout"],
        tips: ["Bring bear spray", "Book camping early", "Check weather conditions"],
        nearby: ["Jasper", "Calgary", "Vancouver"],
        mapLink: "https://www.google.com/maps/search/Banff+National+Park+Canada"
    },
    {
        id: 7,
        name: "Iceland",
        country: "Iceland",
        category: "Adventure",
        rating: 4.6,
        reviews: 2200,
        heroImage: "iceland-hero.jpg",
        gallery: ["iceland1.jpg", "iceland2.jpg", "iceland3.jpg", "iceland4.jpg"],
        description: "Land of fire and ice with volcanoes, glaciers, waterfalls, and northern lights.",
        fullDescription: "Iceland is a Nordic island nation defined by its dramatic landscape with volcanoes, geysers, hot springs, and lava fields.",
        bestTime: "June to August, September to March",
        weather: "Cold with mild summers and harsh winters",
        language: "Icelandic",
        currency: "Icelandic Króna (ISK)",
        timezone: "UTC+0",
        howToReach: { byAir: "Keflavík International Airport", localTransport: "Rental car, bus tours" },
        costGuide: { budget: "$150-200/day", midRange: "$250-400/day", luxury: "$500+/day" },
        attractions: ["Blue Lagoon", "Golden Circle", "Reynisfjara Beach", "Jökulsárlón"],
        food: ["Skyr", "Lamb Soup", "Hot Dogs", "Fermented Shark"],
        tips: ["Rent a 4x4", "Check road conditions", "Pack warm clothes"],
        nearby: ["Greenland", "Faroe Islands"],
        mapLink: "https://www.google.com/maps/search/Iceland"
    },
    {
        id: 8,
        name: "New Zealand",
        country: "New Zealand",
        category: "Adventure",
        rating: 4.8,
        reviews: 2800,
        heroImage: "new-zealand-hero.jpg",
        gallery: ["new-zealand1.jpg", "new-zealand2.jpg", "new-zealand3.jpg", "new-zealand4.jpg"],
        description: "Adventure capital with stunning landscapes from Lord of the Rings and beyond.",
        fullDescription: "New Zealand is a country in the southwestern Pacific Ocean consisting of two main islands. It's known for its stunning natural landscapes.",
        bestTime: "December to March",
        weather: "Temperate climate with warm summers and cool winters",
        language: "English, Māori",
        currency: "New Zealand Dollar (NZD)",
        timezone: "UTC+12",
        howToReach: { byAir: "Auckland, Wellington, Christchurch airports", localTransport: "Car rental, campervan" },
        costGuide: { budget: "$80-150/day", midRange: "$200-350/day", luxury: "$450+/day" },
        attractions: ["Milford Sound", "Queenstown", "Hobbiton", "Mount Cook"],
        food: ["Pavlova", "Lamb", "Kiwi Burger", "Māori Hāngi"],
        tips: ["Self-drive itinerary", "Book activities online", "Respect Māori culture"],
        nearby: ["Australia", "Fiji", "Tonga"],
        mapLink: "https://www.google.com/maps/search/New+Zealand"
    },
    {
        id: 9,
        name: "Swiss Alps",
        country: "Switzerland",
        category: "Adventure",
        rating: 4.8,
        reviews: 2900,
        heroImage: "swiss-alps-hero.jpg",
        gallery: ["swiss-alps1.jpg", "swiss-alps2.jpg", "swiss-alps3.jpg", "swiss-alps4.jpg"],
        description: "Snow-capped peaks, picturesque villages, and endless outdoor adventure opportunities.",
        fullDescription: "The Swiss Alps cover about 60% of Switzerland and offer some of the best mountain scenery in the world.",
        bestTime: "June to September, December to March",
        weather: "Alpine climate with cold winters and mild summers",
        language: "German, French, Italian",
        currency: "Swiss Franc (CHF)",
        timezone: "UTC+1",
        howToReach: { byAir: "Zurich, Geneva airports", byTrain: "Swiss Railway network", localTransport: "Trains, cable cars" },
        costGuide: { budget: "$150-250/day", midRange: "$300-500/day", luxury: "$600+/day" },
        attractions: ["Matterhorn", "Jungfraujoch", "Interlaken", "Lake Geneva"],
        food: ["Fondue", "Raclette", "Rösti", "Swiss Chocolate"],
        tips: ["Buy a travel pass", "Pack layers", "Book cable cars early"],
        nearby: ["Italy", "France", "Germany"],
        mapLink: "https://www.google.com/maps/search/Swiss+Alps"
    },
    {
        id: 10,
        name: "Rishikesh",
        country: "India",
        category: "Adventure",
        rating: 4.3,
        reviews: 3500,
        heroImage: "rishikesh-hero.jpg",
        gallery: ["rishikesh1.jpg", "rishikesh2.jpg", "rishikesh3.jpg", "rishikesh4.jpg"],
        description: "Yoga capital and river rafting paradise on the banks of the Ganges.",
        fullDescription: "Rishikesh is a spiritual hub in the foothills of the Himalayas, known for its yoga ashrams and adventure activities.",
        bestTime: "September to June",
        weather: "Pleasant weather with warm summers and cool winters",
        language: "Hindi, English",
        currency: "Indian Rupee (₹)",
        timezone: "UTC+5:30",
        howToReach: { byAir: "Dehradun Airport", byTrain: "Rishikesh Railway Station", localTransport: "Taxis, auto-rickshaws" },
        costGuide: { budget: "₹1000-2000/day", midRange: "₹2500-5000/day", luxury: "₹6000+/day" },
        attractions: ["Ganga Aarti", "River Rafting", "Laxman Jhula", "Ram Jhula"],
        food: ["Kachori", "Aloo Puri", "Chai"],
        tips: ["Try river rafting", "Attend evening Ganga Aarti", "Learn yoga"],
        nearby: ["Haridwar", "Dehradun", "Mussoorie"],
        mapLink: "https://www.google.com/maps/search/Rishikesh+India"
    },

    // CULTURAL DESTINATIONS
    {
        id: 11,
        name: "Machu Picchu",
        country: "Peru",
        category: "Cultural",
        rating: 4.9,
        reviews: 3500,
        heroImage: "machu-picchu-hero.jpg",
        gallery: ["machu-picchu1.jpg", "machu-picchu2.jpg", "machu-picchu3.jpg", "machu-picchu4.jpg"],
        description: "Ancient Incan city set high in the Andes Mountains. A wonder of the world.",
        fullDescription: "Machu Picchu is a 15th-century Inca citadel located in the Andes Mountains of Peru.",
        bestTime: "May to September",
        weather: "Cool with dry season and wet season",
        language: "Spanish, Quechua",
        currency: "Peruvian Sol (PEN)",
        timezone: "UTC-5",
        howToReach: { byAir: "Alejandro Velasco Astete Airport (Cusco)", byTrain: "Inca Rail to Aguas Calientes", localTransport: "Shuttle buses" },
        costGuide: { budget: "$50-80/day", midRange: "$120-250/day", luxury: "$400+/day" },
        attractions: ["Sun Gate", "Temple of the Sun", "Inca Bridge", "Huayna Picchu"],
        food: ["Ceviche", "Lomo Saltado", "Quinoa Soup", "Pisco Sour"],
        tips: ["Book tickets months ahead", "Acclimatize to altitude", "Bring rain gear"],
        nearby: ["Cusco", "Sacred Valley", "Amazon Rainforest"],
        mapLink: "https://www.google.com/maps/search/Machu+Picchu+Peru"
    },
    {
        id: 12,
        name: "Kyoto",
        country: "Japan",
        category: "Cultural",
        rating: 4.8,
        reviews: 3100,
        heroImage: "kyoto-hero.jpg",
        gallery: ["kyoto1.jpg", "kyoto2.jpg", "kyoto3.jpg", "kyoto4.jpg"],
        description: "Ancient capital of Japan with thousands of temples, shrines, and gardens.",
        fullDescription: "Kyoto is the former capital of Japan and is known for its classical Buddhist temples, Shinto shrines, and traditional wooden houses.",
        bestTime: "March to May, October to November",
        weather: "Four distinct seasons with hot summers and cold winters",
        language: "Japanese",
        currency: "Japanese Yen (JPY)",
        timezone: "UTC+9",
        howToReach: { byAir: "Kansai International Airport", byTrain: "Shinkansen from Tokyo", localTransport: "Buses, subway" },
        costGuide: { budget: "¥8,000-15,000/day", midRange: "¥20,000-40,000/day", luxury: "¥50,000+/day" },
        attractions: ["Fushimi Inari Shrine", "Kinkaku-ji", "Gion District", "Arashiyama Bamboo Grove"],
        food: ["Matcha Sweets", "Kaiseki", "Yudofu", "Sushi"],
        tips: ["Wake up early for photos", "Learn basic Japanese", "Respect temple customs"],
        nearby: ["Osaka", "Nara", "Tokyo"],
        mapLink: "https://www.google.com/maps/search/Kyoto+Japan"
    },
    {
        id: 13,
        name: "Jaipur",
        country: "India",
        category: "Cultural",
        rating: 4.4,
        reviews: 4800,
        heroImage: "jaipur-hero.jpg",
        gallery: ["jaipur1.jpg", "jaipur2.jpg", "jaipur3.jpg", "jaipur4.jpg"],
        description: "The Pink City with majestic forts, palaces, and vibrant bazaars.",
        fullDescription: "Jaipur is the capital of Rajasthan and is known as the Pink City for its distinctively colored buildings.",
        bestTime: "October to March",
        weather: "Hot summers and pleasant winters",
        language: "Hindi, English, Rajasthani",
        currency: "Indian Rupee (₹)",
        timezone: "UTC+5:30",
        howToReach: { byAir: "Jaipur International Airport (JAI)", byTrain: "Railway from Delhi", localTransport: "Auto-rickshaws, taxis" },
        costGuide: { budget: "₹1200-2500/day", midRange: "₹3000-6000/day", luxury: "₹8000+/day" },
        attractions: ["Amber Fort", "City Palace", "Hawa Mahal", "Jantar Mantar"],
        food: ["Dal Bati Churma", "Gatte Ki Sabzi", "Kachori", "Lassi"],
        tips: ["Visit Amber Fort early morning", "Shop at Johari Bazaar", "Try Rajasthani Thali"],
        nearby: ["Delhi", "Agra", "Jodhpur", "Udaipur"],
        mapLink: "https://www.google.com/maps/search/Jaipur+India"
    },
    {
        id: 14,
        name: "Varanasi",
        country: "India",
        category: "Cultural",
        rating: 4.3,
        reviews: 3900,
        heroImage: "varanasi-hero.jpg",
        gallery: ["varanasi1.jpg", "varanasi2.jpg", "varanasi3.jpg", "varanasi4.jpg"],
        description: "The spiritual heart of India with ancient ghats and eternal traditions.",
        fullDescription: "Varanasi is one of the oldest continuously inhabited cities in the world and is considered the spiritual capital of India.",
        bestTime: "October to March",
        weather: "Hot summers and pleasant winters",
        language: "Hindi, English",
        currency: "Indian Rupee (₹)",
        timezone: "UTC+5:30",
        howToReach: { byAir: "Lal Bahadur Shastri Airport (VNS)", byTrain: "Varanasi Junction", localTransport: "Auto-rickshaws, boats" },
        costGuide: { budget: "₹1000-2000/day", midRange: "₹2500-5000/day", luxury: "₹6000+/day" },
        attractions: ["Ganga Aarti", "Kashi Vishwanath Temple", "Dasashwamedh Ghat", "Sarnath"],
        food: ["Kachori Sabzi", "Malaiyo", "Tamatar Chaat", "Banarasi Paan"],
        tips: ["Attend Ganga Aarti", "Take a boat ride at sunrise", "Explore the ghats"],
        nearby: ["Allahabad", "Lucknow", "Khajuraho"],
        mapLink: "https://www.google.com/maps/search/Varanasi+India"
    },
    {
        id: 15,
        name: "Mysore",
        country: "India",
        category: "Cultural",
        rating: 4.5,
        reviews: 3200,
        heroImage: "mysore-hero.jpg",
        gallery: ["mysore1.jpg", "mysore2.jpg", "mysore3.jpg", "mysore4.jpg"],
        description: "City of palaces with the stunning Mysore Palace and rich royal heritage.",
        fullDescription: "Mysore is a city in Karnataka known for its royal heritage, magnificent palaces, and the famous Mysore Dasara festival.",
        bestTime: "October to March",
        weather: "Pleasant with moderate temperatures",
        language: "Kannada, Hindi, English",
        currency: "Indian Rupee (₹)",
        timezone: "UTC+5:30",
        howToReach: { byAir: "Kempegowda International Airport (Bangalore)", byTrain: "Mysore Junction", localTransport: "Auto-rickshaws, taxis" },
        costGuide: { budget: "₹1200-2500/day", midRange: "₹3000-6000/day", luxury: "₹8000+/day" },
        attractions: ["Mysore Palace", "Chamundeshwari Temple", "Brindavan Gardens", "Mysore Zoo"],
        food: ["Mysore Pak", "Dosa", "Idli", "Vada", "Sambhar"],
        tips: ["Visit Mysore Palace at night for illumination", "Buy Mysore silk sarees", "Visit during Dasara festival"],
        nearby: ["Bangalore", "Coorg", "Ooty", "Hampi"],
        mapLink: "https://www.google.com/maps/search/Mysore+India"
    },

    // CITY DESTINATIONS
    {
        id: 17,
        name: "Rio de Janeiro",
        country: "Brazil",
        category: "City",
        rating: 4.4,
        reviews: 2600,
        heroImage: "rio-hero.jpg",
        gallery: ["rio1.jpg", "rio2.jpg", "rio3.jpg", "rio4.jpg"],
        description: "Samba, sun, and stunning landscapes with Christ the Redeemer overlooking the city.",
        fullDescription: "Rio de Janeiro is Brazil's most iconic city, known for its beaches, carnival, and the Christ the Redeemer statue.",
        bestTime: "September to November, March to May",
        weather: "Tropical climate with warm temperatures year-round",
        language: "Portuguese",
        currency: "Brazilian Real (BRL)",
        timezone: "UTC-3",
        howToReach: { byAir: "Galeão International Airport (GIG)", localTransport: "Metro, buses, taxis" },
        costGuide: { budget: "R$100-200/day", midRange: "R$250-500/day", luxury: "R$700+/day" },
        attractions: ["Christ the Redeemer", "Sugarloaf Mountain", "Copacabana", "Ipanema"],
        food: ["Feijoada", "Pão de Queijo", "Brigadeiro", "Caipirinha"],
        tips: ["Stay safe in tourist areas", "Enjoy beach culture", "Learn Portuguese basics"],
        nearby: ["São Paulo", "Florianópolis", "Buzios"],
        mapLink: "https://www.google.com/maps/search/Rio+de+Janeiro+Brazil"
    },
    {
        id: 18,
        name: "Lisbon",
        country: "Portugal",
        category: "City",
        rating: 4.5,
        reviews: 2400,
        heroImage: "lisbon-hero.jpg",
        gallery: ["lisbon1.jpg", "lisbon2.jpg", "lisbon3.jpg", "lisbon4.jpg"],
        description: "Hillside charm with colorful trams, pastel buildings, and Atlantic views.",
        fullDescription: "Lisbon is Portugal's hilly, coastal capital city known for its pastel-colored buildings, iconic tram 28, and vibrant culture.",
        bestTime: "March to October",
        weather: "Mediterranean climate with hot summers",
        language: "Portuguese",
        currency: "Euro (€)",
        timezone: "UTC+0",
        howToReach: { byAir: "Humberto Delgado Airport (LIS)", byTrain: "Railway from Porto", localTransport: "Trams, metro" },
        costGuide: { budget: "€50-80/day", midRange: "€100-180/day", luxury: "€250+/day" },
        attractions: ["Belém Tower", "Jeronimos Monastery", "Alfama District", "Tram 28"],
        food: ["Pastel de Nata", "Bacalhau", "Sardinhas", "Port Wine"],
        tips: ["Buy a travel card", "Wear comfortable shoes", "Visit Sintra nearby"],
        nearby: ["Porto", "Sintra", "Cascais"],
        mapLink: "https://www.google.com/maps/search/Lisbon+Portugal"
    },
    {
        id: 19,
        name: "Mumbai",
        country: "India",
        category: "City",
        rating: 4.3,
        reviews: 5200,
        heroImage: "mumbai-hero.jpg",
        gallery: ["mumbai1.jpg", "mumbai2.jpg", "mumbai3.jpg", "mumbai4.jpg"],
        description: "The city of dreams with Bollywood, Marine Drive, and colonial architecture.",
        fullDescription: "Mumbai is India's financial and entertainment capital, known for its fast-paced life, iconic landmarks, and rich history.",
        bestTime: "October to March",
        weather: "Hot and humid with monsoon season",
        language: "Hindi, Marathi, English",
        currency: "Indian Rupee (₹)",
        timezone: "UTC+5:30",
        howToReach: { byAir: "Chhatrapati Shivaji Airport (BOM)", byTrain: "Mumbai Central", localTransport: "Local trains, taxis" },
        costGuide: { budget: "₹1500-3000/day", midRange: "₹3500-7000/day", luxury: "₹9000+/day" },
        attractions: ["Gateway of India", "Marine Drive", "Elephanta Caves", "Juhu Beach"],
        food: ["Vada Pav", "Pav Bhaji", "Bhel Puri", "Prawn Curry"],
        tips: ["Take a local train ride", "Watch sunset at Marine Drive", "Visit Elephanta Caves"],
        nearby: ["Pune", "Goa", "Lonavala"],
        mapLink: "https://www.google.com/maps/search/Mumbai+India"
    },
    {
        id: 20,
        name: "Delhi",
        country: "India",
        category: "City",
        rating: 4.2,
        reviews: 5600,
        heroImage: "delhi-hero.jpg",
        gallery: ["delhi1.jpg", "delhi2.jpg", "delhi3.jpg", "delhi4.jpg"],
        description: "Capital city with a thousand years of history, monuments, and incredible food.",
        fullDescription: "Delhi is the capital of India, a city that has been the seat of many empires and is a blend of ancient and modern.",
        bestTime: "October to March",
        weather: "Hot summers, pleasant winters",
        language: "Hindi, Punjabi, Urdu, English",
        currency: "Indian Rupee (₹)",
        timezone: "UTC+5:30",
        howToReach: { byAir: "Indira Gandhi International Airport (DEL)", byTrain: "New Delhi, Old Delhi", localTransport: "Metro, buses" },
        costGuide: { budget: "₹1500-3000/day", midRange: "₹3500-7000/day", luxury: "₹9000+/day" },
        attractions: ["Red Fort", "Qutub Minar", "India Gate", "Lotus Temple", "Humayun's Tomb"],
        food: ["Chole Bhature", "Butter Chicken", "Kebabs", "Jalebis", "Chaat"],
        tips: ["Take a rickshaw ride in Old Delhi", "Visit India Gate at night", "Try street food"],
        nearby: ["Agra", "Jaipur", "Chandigarh"],
        mapLink: "https://www.google.com/maps/search/Delhi+India"
    },
    {
        id: 21,
        name: "Agra",
        country: "India",
        category: "Cultural",
        rating: 4.5,
        reviews: 4500,
        heroImage: "agra-hero.jpg",
        gallery: ["agra1.jpg", "agra2.jpg", "agra3.jpg", "agra4.jpg"],
        description: "Home to the iconic Taj Mahal, a symbol of eternal love and beauty.",
        fullDescription: "Agra is a city in Uttar Pradesh, famous for the Taj Mahal, one of the seven wonders of the world.",
        bestTime: "October to March",
        weather: "Hot summers, pleasant winters",
        language: "Hindi, Urdu, English",
        currency: "Indian Rupee (₹)",
        timezone: "UTC+5:30",
        howToReach: { byAir: "Kheria Airport, Agra", byTrain: "Agra Cantonment", byRoad: "Buses from Delhi" },
        costGuide: { budget: "₹1200-2500/day", midRange: "₹3000-6000/day", luxury: "₹8000+/day" },
        attractions: ["Taj Mahal", "Agra Fort", "Fatehpur Sikri", "Itimad-ud-Daulah"],
        food: ["Petha", "Dalmoth", "Jalebi", "Kachori"],
        tips: ["Visit Taj Mahal at sunrise", "Explore Agra Fort", "Shop for marble handicrafts"],
        nearby: ["Delhi", "Jaipur", "Mathura"],
        mapLink: "https://www.google.com/maps/search/Agra+India"
    },
    {
        id: 22,
        name: "Hampi",
        country: "India",
        category: "Cultural",
        rating: 4.4,
        reviews: 2100,
        heroImage: "hampi-hero.jpg",
        gallery: ["hampi1.jpg", "hampi2.jpg", "hampi3.jpg", "hampi4.jpg"],
        description: "Ancient Vijayanagara ruins with stunning temples and boulder-strewn landscapes.",
        fullDescription: "Hampi is a UNESCO World Heritage site in Karnataka, known for its magnificent ruins of the Vijayanagara Empire.",
        bestTime: "October to March",
        weather: "Hot summers and pleasant winters",
        language: "Kannada, Hindi, English",
        currency: "Indian Rupee (₹)",
        timezone: "UTC+5:30",
        howToReach: { byAir: "Hubli Airport", byTrain: "Hospet Junction", localTransport: "Auto-rickshaws, bicycles" },
        costGuide: { budget: "₹1000-2000/day", midRange: "₹2500-5000/day", luxury: "₹6000+/day" },
        attractions: ["Vijaya Vittala Temple", "Virupaksha Temple", "Stone Chariot", "Hampi Bazaar"],
        food: ["Bisi Bele Bath", "Ragi Mudde", "Benne Dose"],
        tips: ["Watch the sunset from Matanga Hill", "Explore the ruins on bicycle", "Visit during the Hampi Festival"],
        nearby: ["Goa", "Bangalore", "Mysore"],
        mapLink: "https://www.google.com/maps/search/Hampi+Karnataka"
    }
];

// CREATE DESTINATION CARD FUNCTION
function createCard(dest) {
    const favorites = JSON.parse(localStorage.getItem('wanderVibe_favorites')) || [];
    const visited = JSON.parse(localStorage.getItem('wanderVibe_visited')) || [];
    const isFav = favorites.includes(dest.id);
    const isVisited = visited.includes(dest.id);

    return `
        <div class="destination-card fade-in" data-id="${dest.id}">
            <div class="card-image">
                <img src="assets/images/${dest.heroImage}" alt="${dest.name}" loading="lazy" 
                     onerror="this.style.display='none';this.parentElement.style.background='linear-gradient(135deg,#6C5CE7,#00B894)';">
                <div class="card-badges">
                    <span class="category-badge">${dest.category}</span>
                    ${isVisited ? '<span class="visited-badge">✅ Visited</span>' : ''}
                </div>
                <div class="card-actions">
                    <button class="fav-btn ${isFav ? 'active' : ''}" onclick="event.stopPropagation();toggleFavorite(${dest.id});" title="Save to favorites">
                        ${isFav ? '❤️' : '🤍'}
                    </button>
                </div>
            </div>
            <div class="card-body">
                <h3>${dest.name}</h3>
                <div class="country">📍 ${dest.country}</div>
                <div class="rating">⭐ ${dest.rating} <span>(${dest.reviews}+ reviews)</span></div>
                <div class="description">${dest.description}</div>
                <a href="destination.html?id=${dest.id}" class="view-btn">View Details →</a>
            </div>
        </div>
    `;
}

// TOGGLE FAVORITE
function toggleFavorite(id) {
    let favorites = JSON.parse(localStorage.getItem('wanderVibe_favorites')) || [];
    if (favorites.includes(id)) {
        favorites = favorites.filter(f => f !== id);
    } else {
        favorites.push(id);
    }
    localStorage.setItem('wanderVibe_favorites', JSON.stringify(favorites));
    
    // Refresh the current page
    if (window.location.pathname.includes('favorites.html')) {
        renderFavorites();
    } else if (window.location.pathname.includes('visited.html')) {
        renderVisited();
    } else {
        renderDestinations();
        renderFeatured();
    }
}

// RENDER FUNCTIONS
function renderDestinations() {
    const grid = document.getElementById('destination-grid');
    if (!grid) return;

    let filtered = destinations;

    // Check for category from URL (for quick categories)
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category');
    if (categoryParam) {
        filtered = filtered.filter(d => d.category === categoryParam);
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.category === categoryParam);
        });
    }

    grid.innerHTML = filtered.map(d => createCard(d)).join('');
    applyFadeIn();
}

function renderFeatured() {
    const grid = document.getElementById('featured-grid');
    if (!grid) return;
    const featured = destinations.slice(0, 6);
    grid.innerHTML = featured.map(d => createCard(d)).join('');
    applyFadeIn();
}

function renderFavorites() {
    const grid = document.getElementById('favorites-grid');
    const empty = document.getElementById('favorites-empty');
    if (!grid) return;

    const favorites = JSON.parse(localStorage.getItem('wanderVibe_favorites')) || [];
    if (favorites.length === 0) {
        grid.innerHTML = '';
        if (empty) empty.style.display = 'block';
        return;
    }
    if (empty) empty.style.display = 'none';

    const favDestinations = destinations.filter(d => favorites.includes(d.id));
    grid.innerHTML = favDestinations.map(d => createCard(d)).join('');
    applyFadeIn();
}

function renderVisited() {
    const grid = document.getElementById('visited-grid');
    const empty = document.getElementById('visited-empty');
    if (!grid) return;

    const visited = JSON.parse(localStorage.getItem('wanderVibe_visited')) || [];
    if (visited.length === 0) {
        grid.innerHTML = '';
        if (empty) empty.style.display = 'block';
        return;
    }
    if (empty) empty.style.display = 'none';

    const visitedDestinations = destinations.filter(d => visited.includes(d.id));
    grid.innerHTML = visitedDestinations.map(d => createCard(d)).join('');
    applyFadeIn();
}

function applyFadeIn() {
    setTimeout(() => {
        document.querySelectorAll('.fade-in').forEach(el => {
            el.classList.add('visible');
        });
    }, 100);
}

// FILTER BUTTONS
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        const category = this.dataset.category;
        const grid = document.getElementById('destination-grid');
        if (!grid) return;

        let filtered = destinations;
        if (category !== 'all') {
            filtered = filtered.filter(d => d.category === category);
        }
        grid.innerHTML = filtered.map(d => createCard(d)).join('');
        applyFadeIn();
    });
});

// SEARCH FUNCTIONALITY - Uses searchInput from main.js
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const query = this.value.trim();
            if (searchResults) {
                if (query.length > 0) {
                    const results = destinations.filter(d =>
                        d.name.toLowerCase().includes(query.toLowerCase()) ||
                        d.country.toLowerCase().includes(query.toLowerCase()) ||
                        d.category.toLowerCase().includes(query.toLowerCase())
                    );
                    if (results.length > 0) {
                        searchResults.innerHTML = results.slice(0, 10).map(d => `
                            <div class="search-result-item" onclick="window.location.href='destination.html?id=${d.id}'">
                                <div class="result-name">${d.name}</div>
                                <div class="result-country">${d.country} • ${d.category}</div>
                            </div>
                        `).join('');
                    } else {
                        searchResults.innerHTML = `
                            <div style="padding:20px;text-align:center;color:var(--text-light);">
                                🔍 No results for "${query}"<br>
                                <small>We're constantly adding new destinations!</small>
                            </div>
                        `;
                    }
                } else {
                    searchResults.innerHTML = '';
                }
            }

            // Also filter on destinations page
            const grid = document.getElementById('destination-grid');
            if (grid && window.location.pathname.includes('destinations.html')) {
                let filtered = destinations.filter(d =>
                    d.name.toLowerCase().includes(query.toLowerCase()) ||
                    d.country.toLowerCase().includes(query.toLowerCase()) ||
                    d.category.toLowerCase().includes(query.toLowerCase())
                );
                grid.innerHTML = filtered.map(d => createCard(d)).join('');
                applyFadeIn();
            }
        });
    }
});

// INIT
renderFeatured();
if (window.location.pathname.includes('destinations.html')) renderDestinations();
if (window.location.pathname.includes('favorites.html')) renderFavorites();
if (window.location.pathname.includes('visited.html')) renderVisited();

// Make functions globally accessible
window.toggleFavorite = toggleFavorite;
window.renderFavorites = renderFavorites;
window.renderVisited = renderVisited;
window.renderDestinations = renderDestinations;
window.renderFeatured = renderFeatured;
window.destinations = destinations;