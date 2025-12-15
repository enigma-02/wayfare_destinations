// =================================================================
// TRAVEL DATA: Contains all category itineraries
// =================================================================
const travelData = {
    // Devotional data 
    devotional: [
        // 1. VARANASI, INDIA
        { name: "Varanasi", itinerary: [
            ["1", "Morning Boat Ride & Kashi Vishwanath Temple (Jyotirlinga)", "Local Street Food near Dashashamedh Ghat", "Witnessing the spectacular Ganga Aarti Ceremony"],
            ["2", "Visit to Sarnath (Buddhist Pilgrimage Site)", "Brown Bread Bakery (Rooftop cafe)", "Classical Music and Dance performance at a Ghat"],
            ["3", "Manikarnika Ghat (Observing life cycle rituals) & Alamgir Mosque", "Pehalwan Lassi / Local Thali", "Evening Stroll and street shopping near Godowlia"],
            ["4", "Exploration of Ramnagar Fort (Museum & Temple)", "Pizzeria Vaatika (Overlooking Assi Ghat)", "Visit to the Bharat Mata Temple (Marble relief map of India)"],
            ["5", "Assi Ghat for Morning Aarti & Ganges Yoga session", "Aroma Restaurant (Near Dashashamedh)", "Departure planning and quiet reflection at a small temple"]
        ]},
        // 2. AMRITSAR, INDIA
        { name: "Amritsar", itinerary: [
            ["1", "Golden Temple (Harmandir Sahib) - Morning Visit", "Langar at Golden Temple (Communal Kitchen)", "Palki Sahib Ceremony (Evening ritual at the Golden Temple)"],
            ["2", "Jallianwala Bagh Memorial", "Bhai Kulwant Singh Kulcha Wale", "Wagah Border Ceremony (Flag Lowering Ceremony)"],
            ["3", "Partition Museum (Deep historical context)", "Kesar Da Dhaba (Authentic Punjabi food)", "Heritage Walk in the old city (Sikh history)"],
            ["4", "Gobindgarh Fort (History Museum and cultural shows)", "Makhan Fish & Chicken Corner", "Shopping for traditional Juttis and Phulkaris"],
            ["5", "Ram Tirath Temple (Birthplace of Lava and Kusha)", "Local sweets and Jalebi tasting", "Final quiet evening walk around the Golden Temple complex"]
        ]},
        // 3. KYOTO, JAPAN (Devotional/Reflection)
        { name: "Kyoto", itinerary: [
            ["1", "Fushimi Inari Shrine (Thousands of Torii Gates)", "Nishiki Market (Street food tasting)", "Kiyomizu-dera Temple (Evening views over the city)"],
            ["2", "Kinkaku-ji (The Golden Pavilion)", "Local Udon/Ramen Shop near temple", "Zen meditation session at a Rinzai temple"],
            ["3", "Ryoan-ji Temple (Famous Zen Rock Garden)", "Shoujin Ryori (Vegetarian Buddhist Cuisine)", "Arashiyama Bamboo Grove Walk and Tenryu-ji Temple"],
            ["4", "Daitoku-ji Temple Complex (Sub-temples and gardens)", "A local Tea House experience", "Gion District (Searching for Geiko/Maiko)"],
            ["5", "Nanzen-ji Temple (Main Zen temple grounds)", "Kyoto Station Food Court (Variety)", "Visit to Yasaka Shrine"]
        ]},
        // 4. THE VATICAN CITY, ITALY (Abroad)
        { name: "The Vatican City", itinerary: [
            ["1", "St. Peter's Basilica (Climbing the Dome)", "Lunch near Castel Sant'Angelo", "Evening stroll across Ponte Sant'Angelo"],
            ["2", "Vatican Museums & Sistine Chapel", "Vatican Canteen or local Trattoria", "Trastevere District (Charming Roman nightlife)"],
            ["3", "Papal Audience (Wednesday) or St. Peter's Square visit", "Pizza al taglio (Takeaway pizza)", "Visit to the Basilica di Santa Maria Maggiore (Rome)"],
            ["4", "Vatican Gardens Tour (Pre-booked)", "Piazza Navona area restaurant", "Night viewing of the Colosseum (Rome)"],
            ["5", "Castel Sant'Angelo (Mausoleum)", "Gelateria in the Prati district", "Departure and reflection on the historical journey"]
        ]},
        // 5. TIRUPATI, INDIA
        { name: "Tirupati", itinerary: [
            ["1", "Tirumala Temple (Darshan of Lord Venkateswara)", "Temple Prasadam (Annamayya Bhavan)", "Temple premises (Observing rituals and architecture)"],
            ["2", "Padmavathi Ammavari Temple (Lower Tirupati)", "Andhra style Thali at a local hotel", "Srinivasa Mangapuram Temple"],
            ["3", "Kapila Theertham (Holy waterfall and temple)", "Tiffin center near bus stand", "Relaxation and local market exploration"],
            ["4", "Chandragiri Fort & Museum (Historical site)", "Restaurant near Chandragiri", "Evening prayers at a local Mutt"],
            ["5", "Akasa Ganga Teertham (Water body) & Papavinasam Dam", "Pulihora (Tamarind Rice) local specialty", "Departure/Travel to the next destination"]
        ]}
    ],
    
    // Solo data 
    solo: [
        { name: "Himachal Pradesh (Kasol)", itinerary: [
            ["1", "Arrival and Check-in (Hostel/Guesthouse)", "Local Israeli Cafe (Shoshana or Evergreen)", "Bonfire and Jam session at the hostel"],
            ["2", "Trek to Malana Village (Ancient Indian Democracy)", "Packed lunch/Dhaba stop en route", "Quiet reading or journaling by Parvati River"],
            ["3", "Tosh Village Exploration & Hot Springs", "Free Spirit Cafe (Tosh)", "Stargazing and reflection"],
            ["4", "Manikaran Sahib Gurudwara (Hot springs dip)", "Langar at Gurudwara", "Local shopping for woolens and handicrafts"],
            ["5", "Kasol Market & Souvenir Shopping", "The German Bakery", "Departure planning and final mountain view"]
        ]},
        { name: "Kyoto (Solo Focus)", itinerary: [
            ["1", "Arashiyama Bamboo Grove & Tenryu-ji Temple", "Solo lunch at a conveyor belt Sushi bar", "Philosopher's Path (Contemplative walk at dusk)"],
            ["2", "Sannenzaka & Ninenzaka Streets (Historic lanes)", "Traditional Obanzai Lunch", "Gion Corner performance (Geisha culture)"],
            ["3", "Kinkaku-ji (Golden Pavilion) & Ryoan-ji Temple (Zen Garden)", "Vegetarian Shoujin Ryori", "Evening stroll in Pontocho Alley (Dining)"],
            ["4", "Kyoto National Museum & Higashi Honganji Temple", "Ramen/Udon near Kyoto Station", "Public Bath (Sento) or quiet Tea Ceremony"],
            ["5", "Nishiki Market food exploration (Solo tasting tour)", "Street Food Lunch", "Visit to Fushimi Inari Shrine (Early morning/late evening)"]
        ]},
        { name: "Maldives (Solo Wellness)", itinerary: [
            ["1", "Arrival and check-in to overwater villa/resort", "Healthy resort buffet lunch", "Sunset Yoga/Meditation session"],
            ["2", "Private snorkeling/diving trip", "Fresh grilled seafood on the beach", "Spa treatment or personalized wellness consultation"],
            ["3", "Reading day on the deck / Sunbathing", "Room service lunch for privacy", "Bioluminescent plankton beach walk (if seasonal)"],
            ["4", "Kayaking or Paddleboarding around the island", "Cafe/Deli near the main pool", "Cocktails and quiet reflection by the sea"],
            ["5", "Morning swim and light breakfast", "Final resort brunch", "Departure from Male"]
        ]},
        { name: "Goa", itinerary: [
            ["1", "Anjuna/Vagator Beach exploration (North Goa)", "Thali at a local Goan shack", "Sunset view and market visit (Wednesday flea market)"],
            ["2", "Old Goa Churches (Basilica of Bom Jesus)", "Viva Panjim (Goan-Portuguese Cuisine)", "Ferry ride and Fontainhas Latin Quarter walk"],
            ["3", "Arambol Beach (Relaxation/Yoga)", "Cafe Junas or German Bakery", "Dusk session at a drumming circle or live music bar"],
            ["4", "Dudhsagar Waterfalls (Day trip)", "Packed lunch or restaurant near Mollem National Park", "Quiet dinner and reflection on the beach"],
            ["5", "Spice Plantation Tour", "The Black Sheep Bistro (Panjim)", "Souvenir shopping and departure"]
        ]},
        { name: "Iceland (Solo Road Trip)", itinerary: [
            ["1", "Arrival at Keflavik, Blue Lagoon visit", "Pakkhús Restaurant (Höfn)", "Aurora Borealis hunt (Northern Lights)"],
            ["2", "Golden Circle route (Geysir, Gullfoss, Þingvellir)", "Fridheimar Tomato Farm", "Relaxing at a local hot tub or swimming pool"],
            ["3", "South Coast waterfalls (Seljalandsfoss, Skógafoss)", "Roadside food truck (Fish & Chips)", "Reynisfjara Black Sand Beach sunset"],
            ["4", "Jökulsárlón Glacier Lagoon and Diamond Beach", "Gamlabúð Restaurant (Hofn)", "Photography session on the Diamond Beach"],
            ["5", "Reykjavik city exploration (Hallgrímskirkja Church)", "Bæjarins Beztu Pylsur (Hot dogs)", "Evening concert or bar visit in downtown Reykjavik"]
        ]}
    ],
    
    // Romantic data
    romantic: [
        // 1. SANTORINI, GREECE (Existing, Enhanced)
        { name: "Santorini", itinerary: [
            ["1", "Oia Village Walk & Check-in to caldera view suite", "Amoudi Bay Seafood Dinner", "Sunset viewing at Oia Castle (The classic spot)"],
            ["2", "Red Beach visit & Akrotiri archaeological site", "The Akrotiri Bistro (Local cuisine)", "Exclusive Wine Tasting Tour at a high-altitude winery"],
            ["3", "Day cruise on a catamaran (Caldera sailing)", "On-board Mediterranean Lunch", "Volcano Hot Springs dip & Thirasia Island visit"],
            ["4", "Imerovigli exploration (Skaros Rock hike)", "La Maison (Fine dining with sunset views)", "Private Candlelit Dinner on your terrace"],
            ["5", "Fira Town shopping & Cable Car ride", "Lucky’s Souvlakis (Casual treat)", "Starlight Cinema night (Outdoor movie experience)"]
        ]},
        
        // 2. UDAIPUR, INDIA
        { name: "Udaipur", itinerary: [
            ["1", "City Palace Tour & Check-in to lakeside hotel", "Ambrai Restaurant (View of Lake Pichola)", "Sunset Boat Ride on Lake Pichola"],
            ["2", "Jag Mandir Island Palace visit", "The Sunset Terrace (Lake Palace view)", "Bagore Ki Haveli (Traditional Rajasthani dance show)"],
            ["3", "Sajjangarh (Monsoon Palace) for panoramic views", "Udai Kothi rooftop restaurant", "Romantic dinner overlooking Fateh Sagar Lake"],
            ["4", "Vintage Car Museum & Shilpgram (Rural arts and crafts)", "Traditional Rajasthani Thali", "Couples spa session or quiet walk through the old city"],
            ["5", "Saheliyon Ki Bari (Garden of the Maidens)", "Cafe Edelweiss (Pastries and Coffee)", "Shopping for local handicrafts and jewelry"]
        ]},

        // 3. PARIS, FRANCE
        { name: "Paris", itinerary: [
            ["1", "Eiffel Tower visit (evening climb or viewpoint)", "Dinner near the Seine River (Bateaux Mouches)", "Evening stroll along the Pont Alexandre III"],
            ["2", "Louvre Museum (Focus on Venus de Milo and Mona Lisa)", "Cafe de Flore (Classic Parisian cafe)", "Picnic and wine at Champ de Mars (Eiffel Tower lawn)"],
            ["3", "Montmartre exploration & Sacré-Cœur Basilica", "Le Consulat (Charming bistrot)", "Artist portrait session in Place du Tertre"],
            ["4", "Château de Versailles (Day trip)", "La Petite Venise (Versailles grounds)", "Attend a cabaret show (e.g., Moulin Rouge)"],
            ["5", "Notre Dame area & Shakespeare and Company bookstore", "Laduree or Angelina (Patisseries)", "Lock-signing on a bridge (optional) and departure"]
        ]},

        // 4. BALI, INDONESIA (Ubud Focus)
        { name: "Bali (Ubud)", itinerary: [
            ["1", "Ubud Monkey Forest Sanctuary", "Naughty Nuri’s Warung (Ribs)", "Couples Balinese massage & spa treatment"],
            ["2", "Tegalalang Rice Terrace walk & Swing photos", "Sari Organic Restaurant (Rice field view)", "Sunset cocktail at a jungle bar or infinity pool"],
            ["3", "Tirta Empul Temple (Holy water purification ritual)", "Local Warung or cooking class lunch", "Traditional Kecak Dance performance"],
            ["4", "Campuhan Ridge Walk (Sunrise)", "Honeymoon Bakery", "Romantic flower bath experience at the villa"],
            ["5", "Ubud Art Market shopping", "Milk & Madu (Modern brunch)", "Final morning yoga session together"]
        ]},

        // 5. VENICE, ITALY
        { name: "Venice", itinerary: [
            ["1", "St. Mark's Square (Piazza San Marco) & Basilica", "Trattoria Alla Madonna (Classic Venetian seafood)", "Evening Gondola Ride with music"],
            ["2", "Doge's Palace and Bridge of Sighs", "Osteria alle Testiere", "Cicheti (Venetian tapas) bar crawl"],
            ["3", "Day trip to Murano (Glass blowing) and Burano (Colorful houses)", "Local restaurant on Burano Island", "Quiet dinner in the Cannaregio neighborhood"],
            ["4", "Rialto Bridge and Market exploration", "Pizza al Volo (Quick pizza)", "Attend a Vivaldi concert or opera"],
            ["5", "Peggy Guggenheim Collection (Art museum)", "A historic Caffè (e.g., Caffè Florian)", "Final walk and shared gelato by the Grand Canal"]
        ]}
    ],
    
    // Family data
    family: [
        // 1. ORLANDO, FLORIDA (Existing)
        { name: "Orlando, Florida", itinerary: [
            ["1", "Magic Kingdom Park", "Be Our Guest Restaurant", "Fireworks at Cinderella Castle"],
            ["2", "Universal Studios", "Leaky Cauldron (Harry Potter)", "CityWalk Fun"],
            ["3", "Disney’s Animal Kingdom", "Satu'li Canteen", "Pandora - World of Avatar"],
            ["4", "SeaWorld Orlando", "Sharks Underwater Grill", "Aquatica Water Park"],
            ["5", "NASA Kennedy Space Center", "Orbit Cafe", "Astronaut Encounter"]
        ]},
        
        // 2. KERALA, INDIA (Existing)
        { name: "Kerala", itinerary: [
            ["1", "Munnar Tea Gardens", "Sree Mahaveer Veg", "Tea Museum Visit"],
            ["2", "Alleppey Houseboat", "Traditional Sadhya Meal", "Backwater Sunset Cruise"],
            ["3", "Thekkady Wildlife", "Periyar Terrace", "Elephant Junction Safari"],
            ["4", "Kochi Fort Heritage", "Kashi Art Cafe", "Kathakali Performance"],
            ["5", "Varkala Beach", "Abba Restaurant", "Cliffside Relaxation"]
        ]},
        
        // 3. THE ALPS (NEW)
        { name: "The Alps", itinerary: [
            ["1", "Arrival & Scenic Gondola Ride", "Ristorante Pizzeria", "Sledding or Snowshoeing (seasonal)"],
            ["2", "Family-friendly Ski Lesson / Summer Hike", "Mountain Hut Lunch (Swiss/Austrian style)", "Hot Chocolate and Games at the chalet"],
            ["3", "Interlaken: Paragliding (for parents) / Adventure Park (kids)", "Riverside Picnic", "Scenic train ride or village walk"],
            ["4", "Local Cheese or Chocolate Factory Tour", "Farm-to-Table Restaurant", "Indoor Swimming Pool/Water Park access"],
            ["5", "Visit to a local animal sanctuary or petting zoo", "Farewell Dinner at a resort", "Souvenir shopping and departure"]
        ]},

        // 4. KYOTO, JAPAN (NEW)
        { name: "Kyoto", itinerary: [
            ["1", "Kiyomizu-dera Temple & Sannenzaka walk", "Lunch near temple (Udon/Soba)", "Interactive Samurai and Ninja Museum"],
            ["2", "Arashiyama Bamboo Grove & Monkey Park Iwatayama", "Takeaway Bento Box", "Traditional Japanese sweets (Wagashi) making class"],
            ["3", "Kyoto Railway Museum (hands-on exhibits)", "Kyoto Station Food Court (easy variety)", "Kyoto Aquarium visit"],
            ["4", "Fushimi Inari Shrine (Tori Gates walk)", "Local Okonomiyaki restaurant", "Exploring Nishiki Market for snacks/treats"],
            ["5", "Nijo Castle (Samurai history walk)", "Family Sushi Lunch", "Departure planning"]
        ]},

        // 5. MALDIVES (NEW)
        { name: "Maldives", itinerary: [
            ["1", "Arrival & check-in to Family Beach Villa", "Resort Kids' Club Buffet", "Sunset beach photo session"],
            ["2", "Guided Snorkeling / Glass-bottom Boat Tour", "Beach Grill BBQ Lunch", "Stingray or fish feeding activity"],
            ["3", "Kids' Club Activities (full day) / Parents' Spa time", "Pizza and Pasta night", "Family movie night on the beach"],
            ["4", "Sandbank Picnic Day Trip", "Pre-packed Gourmet Picnic", "Water sports (kayaking, paddle boating)"],
            ["5", "Morning Swim and Sandcastle Building", "Farewell Lunch/Brunch", "Departure"]
        ]}
    ],
    
    // Adventurous data (Placeholder added to prevent errors)
    adventurous: [
        // 1. LADAKH, INDIA
        { name: "Ladakh", itinerary: [
            ["1", "Arrival in Leh & Acclimatization Walk (Shanti Stupa)", "Tibetan Kitchen (Leh)", "Stargazing and quiet reflection"],
            ["2", "Leh to Nubra Valley via Khardungla Pass (Motorbiking)", "Roadside Dhaba on the Pass", "Camel Safari in Hunder Sand Dunes"],
            ["3", "Nubra Valley to Pangong Tso Lake", "Tented Camp Mess Hall", "Sunset viewing at the lake and bonfire"],
            ["4", "Pangong Tso to Leh (via Changla Pass)", "Local café in Karu", "Shopping for souvenirs and gear in Leh market"],
            ["5", "River Rafting on Zanskar or Indus River (Grade II/III)", "German Bakery", "Departure from Leh"]
        ]},
        
        // 2. RISHIKESH, INDIA
        { name: "Rishikesh", itinerary: [
            ["1", "White Water Rafting (Shivpuri to Rishikesh)", "Chotiwala (Traditional Indian)", "Attending the evening Ganga Aarti Ceremony"],
            ["2", "Bungee Jumping / Giant Swing / Flying Fox", "Mohan Chatti Jump Station Cafe", "Relaxation and self-discovery near the Ashram"],
            ["3", "Trek to Neer Garh Waterfall", "Beatles Cafe (Overlooking Ganga)", "Exploring Lakshman Jhula and Ram Jhula"],
            ["4", "Day trip to Rajaji National Park (Jungle Safari)", "Resort Lunch near Park Entrance", "Camping and Bonfire near the river"],
            ["5", "Morning Yoga/Meditation Class", "Devraj Coffee Corner", "Departure or local market exploration"]
        ]},

        // 3. THE ALPS, EUROPE (Summer/Winter focus)
        { name: "The Alps", itinerary: [
            ["1", "Cable Car Ascent and Glacier viewing", "Mountain Hut Lunch (Cheese Fondue)", "Apres-Ski or Mountain Spa relaxation"],
            ["2", "Full-day Skiing/Snowboarding (Winter) OR Via Ferrata (Summer)", "Packed lunch or slope-side restaurant", "Exploring the charming Alpine Village"],
            ["3", "Canyoning or White Water Rafting", "Riverside Grill/Bistro", "Local wine tasting or pub visit"],
            ["4", "Mountain Biking/Hut-to-Hut Hiking", "High-altitude picnic lunch", "Stargazing and quiet night"],
            ["5", "Scenic Cogwheel Railway Journey", "Departure Lunch", "Souvenir shopping for Swiss/Austrian chocolate"]
        ]},

        // 4. MALDIVES (Water Sports Focus)
        { name: "Maldives (Water Sports)", itinerary: [
            ["1", "Arrival and House Reef Snorkeling Orientation", "Resort Beach Grill", "Sunset Dolphin Cruise"],
            ["2", "PADI Discover Scuba Dive (or guided snorkeling)", "Seafood Buffet Lunch", "Underwater Photography Workshop"],
            ["3", "Jet Ski Safari to a Sandbank & Parasailing", "Sandbank Picnic Lunch", "Relaxing on the Water Villa deck"],
            ["4", "Morning Big Game Fishing Trip", "Catch-of-the-Day Preparation Dinner", "Sunset Yoga session"],
            ["5", "Wakeboarding or Windsurfing Lesson", "Final Brunch", "Departure"]
        ]},

        // 5. QUEENSTOWN, NEW ZEALAND
        { name: "Queenstown", itinerary: [
            ["1", "AJ Hackett Kawarau Bridge Bungee Jump", "Fergburger (Iconic Queenstown Burger)", "Dinner and drinks at a lakefront bar"],
            ["2", "Shotover Jet Boat Ride & Canyon Swing", "Vudu Cafe (Healthy brunch)", "Skyline Gondola & Luge rides"],
            ["3", "Full-day trip to Milford Sound (Cruise)", "Lunch on the Milford Sound cruise", "Evening relaxation"],
            ["4", "White Water Rafting on Shotover River", "Winnies Gourmet Pizza Bar", "Exploring Arrowtown (Historic Gold Mining Town)"],
            ["5", "Ben Lomond Track (Half-day hike)", "Local Pub Lunch", "Departure/Souvenir shopping"]
        ]}
    ],
};

// =================================================================
// THEME SWITCHING LOGIC
// =================================================================
function setTheme(category) {
    const root = document.documentElement.style;
    let primaryColor, secondaryColor, backgroundGradient;

    switch (category) {
        case 'devotional':
            // DARK & ORANGE THEME
            primaryColor = '#ff9100'; // Bright Orange
            secondaryColor = '#e65100'; // Deep Orange
            backgroundGradient = 'radial-gradient(circle at top right, #331a00 0%, #000000 100%)';
            break;
        case 'romantic':
            // DARK & RED THEME
            primaryColor = '#ff3333'; // Bright Red
            secondaryColor = '#8b0000'; // Dark Red
            backgroundGradient = 'radial-gradient(circle at top right, #5c0000 0%, #000000 100%)';
            break;
        case 'solo':
            // DARK & BLUE THEME
            primaryColor = '#4a90e2'; // Bright Blue
            secondaryColor = '#2d689b'; // Darker Blue
            backgroundGradient = 'radial-gradient(circle at top right, #0a1f44 0%, #000000 100%)';
            break;
        case 'adventurous':
            // DARK & BROWN COMBO
            primaryColor = '#a0522d'; // Siennna Brown
            secondaryColor = '#8b4513'; // Saddle Brown
            backgroundGradient = 'radial-gradient(circle at top right, #382414 0%, #000000 100%)';
            break;
        case 'family':
            // DARK & PURPLE THEME
            primaryColor = '#8a2be2'; // Blue Violet/Purple
            secondaryColor = '#6a1b9a'; // Deep Purple
            backgroundGradient = 'radial-gradient(circle at top right, #2c004c 0%, #000000 100%)';
            break;
        default:
            // Fallback to Devotional theme
            primaryColor = '#ff9100'; 
            secondaryColor = '#e65100'; 
            backgroundGradient = 'radial-gradient(circle at top right, #331a00 0%, #000000 100%)';
            break;
    }

    root.setProperty('--primary-color', primaryColor);
    root.setProperty('--secondary-color', secondaryColor);
    root.setProperty('--background-gradient', backgroundGradient);
}

// =================================================================
// CATEGORY AND CONTENT LOADING FUNCTION (Consolidated and Corrected)
// =================================================================
function showCategory(cat) {
    // 1. Set the theme first
    setTheme(cat); 

    // 2. Update active tab button
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    
    // Check if event object is available and try to set the active class
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    } else {
        // Fallback for window.onload call: find the correct button and set active class
        const targetButton = document.querySelector(`.tab-btn[onclick*="'${cat}'"]`);
        if (targetButton) {
            targetButton.classList.add('active');
        }
    }

    // 3. Load destination buttons
    const selector = document.getElementById('destination-selector');
    selector.innerHTML = ""; // Clear
    document.getElementById('itinerary-card').classList.add('hidden');

    if(travelData[cat]) {
        travelData[cat].forEach(dest => {
            const btn = document.createElement('button');
            btn.className = "dest-btn";
            btn.innerText = dest.name;
            btn.onclick = () => showItinerary(dest);
            selector.appendChild(btn);
        });
    }
}

// =================================================================
// ITINERARY TABLE LOADING FUNCTION
// =================================================================
function showItinerary(dest) {
    const card = document.getElementById('itinerary-card');
    const title = document.getElementById('itinerary-title');
    const body = document.getElementById('planner-body');

    title.innerText = `${dest.name} 5-Day Plan`;
    body.innerHTML = "";

    dest.itinerary.forEach(day => {
        const row = `<tr>
            <td>Day ${day[0]}</td>
            <td>${day[1]}</td>
            <td>${day[2]}</td>
            <td>${day[3]}</td>
        </tr>`;
        body.innerHTML += row;
    });

    card.classList.remove('hidden');
}


// =================================================================
// INITIAL PAGE LOAD (Corrected)
// =================================================================
window.onload = () => {
    // Manually trigger the initial load for the 'devotional' category
    // This calls showCategory and sets the initial Devotional (Dark & Orange) theme
    showCategory('devotional');
};