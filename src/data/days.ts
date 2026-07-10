import type { Day } from "../types";

export const DAYS: Day[] = [
  {
    date: "2026-11-04", nice: "Tue, Nov 4", city: "Hanoi", route: ["Home", "HANOI"],
    note: 'Arrive around lunchtime. Tonight: <b>sleeper train/bus to Sapa, dep. late evening</b>. Keep bags packed light for the overnight ride.',
    blocks: [
      {
        time: "12PM–4PM", label: "In transit",
        transit: "✈️ Flight from Singapore to Hanoi — on the way. Rest up, today runs late.", items: [],
      },
      {
        time: "4PM–6PM", label: "Arrival",
        transit: "🛬 Land at Noi Bai Airport, immigration & SIM card, head into the city. Could take a while — the airport gets crowded around this time.",
        items: [
          { n: "Airport Bus 86 to Old Quarter", d: "Cheap, easy express bus straight to Hoan Kiem — a scenic first look at Hanoi.", thumb: "https://www.hanoilocaltour.com/wp-content/uploads/bus-86-hanoi.jpg",loc: "Noi Bai Airport Bus 86, Hanoi" },
          { n: "Grab car to hotel", d: "Fastest door-to-door option; book in the app, no haggling needed." },
          { n: "Check in to hotel", d: "Drop your bags and settle in before heading out for dinner." },
        ],
      },
      {
        time: "6PM–10PM", label: "First dinner in Hanoi",
        items: [
          { n: "Pho Thin Lo Duc", d: "Legendary stir-fried-beef pho — the perfect first meal in Vietnam.", loc: "Pho Thin Lo Duc, Hanoi" },
          { n: "Bun Cha Huong Lien", d: 'Smoky grilled-pork bun cha — the "Obama combo" spot.', loc: "Bun Cha Huong Lien, Hanoi" },
          { n: "Cha ca La Vong", d: "Turmeric fish sizzled with dill at your table — a Hanoi original.", loc: "Cha Ca La Vong, Hanoi" },
          { n: "Ta Hien Beer Street stalls", d: "Fresh bia hoi and grilled skewers on low plastic stools.", loc: "Ta Hien Beer Street, Hanoi" },
        ],
      },
      {
        time: "11PM–6AM (next day)", label: "Overnight to Sapa",
        items: [
          { n: "Sleeper Train to Sapa", d: "Overnight train to Lao Cai, then shuttle up the mountain — cabin bunks, rocks you to sleep.", loc: "Hanoi Railway Station" },
          { n: "Sleeper Bus to Sapa", d: "Direct overnight bus straight to Sapa town — flat reclining pods, no transfer needed.", loc: "My Dinh Bus Station, Hanoi" },
        ],
      },
    ],
  },
  {
    date: "2026-11-05", nice: "Wed, Nov 5", city: "Sapa", route: ["LAO CAI", "SAPA"],
    note: "Arrive early morning, then a winding shuttle up to Sapa. November is cool (10–18°C) and often misty — <b>bring layers</b>.",
    blocks: [
      {
        time: "6AM–8AM", label: "Arrival morning",
        transit: "🚆 Arrive Sapa (Lao Cai) — early hotel check-in, drop bags before heading out.",
        items: [
          { n: "Dai Nam Hotel Sapa", d: "Well-located Sapa town stay — ask for an early check-in after the overnight ride.", loc: "Dai Nam Hotel Sapa" },
          { n: "Hot pho breakfast in Sapa town", d: "Steaming bowl to warm up after the sleeper.", loc: "Sapa town center" },
          { n: "Banh mi & hot soy milk breakfast", d: "Quick street breakfast if you're eager to get moving.", loc: "Sapa town center" },
        ],
      },
      {
        time: "8AM–11AM", label: "Settle into Sapa",
        items: [
          { n: "Sapa Stone Church & main square", d: "The 1895 granite church is the heart of town life.", loc: "Sapa Stone Church" },
          { n: "Sapa Market", d: "Hmong and Dao traders, brocade textiles, mountain herbs.", loc: "Sapa Market" },
          { n: "Coffee with a valley view", d: "Fog rolling over Muong Hoa from a cliffside cafe terrace.", loc: "Muong Hoa Valley viewpoint cafe, Sapa" },
        ],
      },
      {
        time: "11AM–1PM", label: "Lunch",
        items: [
          { n: "Salmon hotpot lunch", d: "Sapa's mountain specialty — river salmon simmered at your table.", loc: "Salmon hotpot restaurant, Sapa" },
          { n: "Nha Hang Pho May", d: "Local favorite for a hearty bowl of pho, Sapa style.", loc: "Nha Hang Pho May, Sapa" },
        ],
      },
      {
        time: "1PM–5PM", label: "Gentle first afternoon",
        items: [
          { n: "Cat Cat Village walk", d: "Closest village to town — waterfalls, water wheels, Hmong houses.", loc: "Cat Cat Village, Sapa" },
          { n: "Sapa Lake stroll", d: "Calm lakeside loop right in the town center.", loc: "Sapa Lake" },
          { n: "Ham Rong Mountain gardens", d: "Stone steps to flower gardens and a view over Sapa's rooftops.", loc: "Ham Rong Mountain, Sapa" },
          { n: "Rong May Glass Bridge", d: "Cau Kinh Rong May — a glass-floored bridge suspended over the valley.", loc: "Rong May Glass Bridge, Sapa" },
        ],
      },
      {
        time: "5PM–7PM", label: "Dinner",
        items: [
          { n: "Viettrekking Cafe & Restaurant", d: "Cozy trekking-lodge spot for a warming dinner in town.", loc: "Viettrekking Cafe & Restaurant, Sapa" },
          { n: "Hotpot dinner to warm up", d: "November evenings drop below 12°C — hotpot weather.", loc: "Hotpot restaurant, Sapa" },
        ],
      },
      {
        time: "7PM–10PM", label: "Cozy evening",
        items: [
          { n: "Sapa Night Market", d: "Grilled skewers, sticky rice in bamboo, warm soy milk.", loc: "Sapa Night Market" },
          { n: "Herbal bath (Red Dao style)", d: "Traditional Dao medicinal soak — perfect after the night train.", loc: "Red Dao herbal bath, Sapa" },
          { n: "Grilled street food alley", d: "Corn, eggs, pork skewers over charcoal in the cold air.", loc: "Sapa town center" },
        ],
      },
    ],
  },
  {
    date: "2026-11-06", nice: "Thu, Nov 6", city: "Sapa", route: ["SAPA", "FANSIPAN"],
    note: "Big day. Go up <b>Fansipan early</b> — mornings give the best chance above the clouds before afternoon fog.",
    blocks: [
      {
        time: "6AM–8AM", label: "Misty sunrise breakfast",
        items: [
          { n: "Sunrise over Muong Hoa Valley", d: "Sea of clouds below the viewpoints on a lucky morning.", loc: "Muong Hoa Valley viewpoint, Sapa" },
          { n: "Early photos at O Quy Ho viewpoint", d: "One of Vietnam's four great mountain passes at first light.", loc: "O Quy Ho Pass viewpoint" },
        ],
      },
      {
        time: "8AM–11AM", label: "Roof of Indochina",
        items: [
          { n: "Fansipan cable car", d: "20-minute ride over the valley to Vietnam's highest peak (3,143 m).", loc: "Fansipan Cable Car Station, Sapa" },
          { n: "Summit pagodas & Giant Buddha", d: "Temple complex in the clouds near the summit.", loc: "Fansipan Summit, Sapa" },
          { n: "Muong Hoa funicular railway", d: "Charming vintage-style train from town to the cable car station.", loc: "Muong Hoa Funicular Railway, Sapa" },
        ],
      },
      {
        time: "11AM–1PM", label: "Lunch",
        items: [
          { n: "Lunch at a Ta Van homestay", d: "Home-cooked mountain food with valley views.", loc: "Ta Van Village, Sapa" },
          { n: "Viet Deli", d: "Easy Western-friendly lunch option if you need a break from mountain fare.", loc: "Viet Deli, Sapa" },
        ],
      },
      {
        time: "1PM–5PM", label: "Into the valley",
        items: [
          { n: "Trek Muong Hoa Valley", d: "The classic walk through layered rice terraces.", loc: "Muong Hoa Valley, Sapa" },
          { n: "Lao Chai & Ta Van villages", d: "Black Hmong and Giay villages along the valley floor.", loc: "Lao Chai Village, Sapa" },
          { n: "Ancient rock carvings field", d: "Mysterious centuries-old petroglyphs among the terraces.", loc: "Sapa Ancient Rock Field" },
        ],
      },
      {
        time: "5PM–7PM", label: "Dinner",
        items: [
          { n: "Thang co & apple wine tasting", d: "H'mong specialties for the adventurous — local corn & apple wine.", loc: "Sapa town center" },
          { n: "Sapa Sun Plaza dinner spot", d: "Well-located restaurant row near the town center.", loc: "Sapa Sun Plaza" },
        ],
      },
      {
        time: "7PM–10PM", label: "Night in the mountains",
        items: [
          { n: "Sapa Lake at night", d: "Lights reflecting on the water, cool mountain air.", loc: "Sapa Lake" },
          { n: "Live H'mong music evening", d: "Local folk performances at a town-center venue.", loc: "Sapa town center" },
        ],
      },
    ],
  },
  {
    date: "2026-11-07", nice: "Fri, Nov 7", city: "Sapa", route: ["SAPA", "LAO CAI"],
    note: "Last Sapa day. Tonight: <b>sleeper train or bus back to Hanoi</b> — shuttle down in the evening.",
    blocks: [
      {
        time: "6AM–8AM", label: "One last sunrise",
        items: [
          { n: "Final misty sunrise viewpoint", d: "Last chance for the cloud-sea over the valley.", loc: "Muong Hoa Valley viewpoint, Sapa" },
          { n: "Breakfast at a cliffside cafe", d: "Slow coffee, big view — no rush this morning.", loc: "Sapa town center" },
        ],
      },
      {
        time: "8AM–11AM", label: "Waterfalls & the pass",
        items: [
          { n: "Silver Waterfall (Thac Bac)", d: "100 m cascade on the O Quy Ho road, 15 min from town.", loc: "Silver Waterfall (Thac Bac), Sapa" },
          { n: "Love Waterfall & Golden Stream", d: "Short forest trek to a storybook waterfall.", loc: "Love Waterfall, Sapa" },
          { n: "Heaven's Gate, O Quy Ho Pass", d: "Sweeping top-of-the-pass panorama toward Lai Chau.", loc: "Heaven's Gate O Quy Ho Pass" },
        ],
      },
      {
        time: "11AM–1PM", label: "Lunch",
        items: [
          { n: "Early salmon hotpot dinner spot for lunch", d: "Eat well in Sapa — train snacks are slim, so make lunch count.", loc: "Salmon hotpot restaurant, Sapa" },
          { n: "Noodle stall near the market", d: "Quick, filling bowl before an afternoon of shopping.", loc: "Sapa Market" },
        ],
      },
      {
        time: "1PM–5PM", label: "Souvenirs & slow goodbye",
        items: [
          { n: "Brocade & Hmong craft shopping", d: "Indigo-dyed textiles and silver — buy direct from makers.", loc: "Sapa Market" },
          { n: "Last valley viewpoint coffee", d: "One more look at the terraces before heading down.", loc: "Muong Hoa Valley viewpoint cafe, Sapa" },
        ],
      },
      {
        time: "5PM–7PM", label: "Dinner before the ride down",
        transit: "🚐 Shuttle Sapa → Lao Cai in the evening ahead of the overnight departure.",
        items: [
          { n: "Dinner near Lao Cai station", d: "Simple rice or noodle spots if you go down early.", loc: "Lao Cai Railway Station" },
          { n: "Snacks & water for the ride", d: "Stock up at a mini-mart before boarding.", loc: "Lao Cai Railway Station" },
        ],
      },
      {
        time: "7PM–10PM", label: "Evening in transit",
        items: [
          { n: "Last-minute Lao Cai market browse", d: "Small stalls near the station for final souvenirs.", loc: "Lao Cai Market" },
        ],
      },
      {
        time: "11PM–6AM (next day)", label: "Overnight to Hanoi",
        items: [
          { n: "Sleeper Train to Hanoi", d: "Overnight train back down from Lao Cai — cabin bunks, arrive Hanoi at dawn.", loc: "Lao Cai Railway Station" },
          { n: "Sleeper Bus to Hanoi", d: "Direct overnight bus straight back to Hanoi — flat reclining pods.", loc: "Lao Cai Bus Station" },
        ],
      },
    ],
  },
  {
    date: "2026-11-08", nice: "Sat, Nov 8", city: "Hanoi", route: ["LAO CAI", "HANOI"],
    note: "Train or bus arrives Hanoi early morning. Hanoi is at its best at dawn — lean into the early start, nap later if needed.",
    blocks: [
      {
        time: "6AM–8AM", label: "Hanoi at dawn",
        transit: "🚆 Arrive back in Hanoi — early hotel check-in, drop bags before heading out.",
        items: [
          { n: "Muse Hotel", d: "Check in back in Hanoi after the overnight ride from Sapa.", loc: "Muse Hotel Hanoi" },
          { n: "Tai chi at Hoan Kiem Lake", d: "Join locals exercising around the lake at sunrise.", loc: "Hoan Kiem Lake, Hanoi" },
          { n: "Pho breakfast, dawn edition", d: "Pho tastes best at 6 AM on a tiny plastic stool.", loc: "Old Quarter, Hanoi" },
        ],
      },
      {
        time: "8AM–11AM", label: "Imperial Hanoi",
        items: [
          { n: "Temple of Literature", d: "Vietnam's first university (1070) — courtyards, stelae, bonsai.", loc: "Temple of Literature, Hanoi" },
          { n: "Ho Chi Minh Mausoleum complex", d: "Ba Dinh Square, the stilt house and One Pillar Pagoda.", loc: "Ho Chi Minh Mausoleum, Hanoi" },
          { n: "Imperial Citadel of Thang Long", d: "UNESCO site — a millennium of Vietnamese dynasties.", loc: "Imperial Citadel of Thang Long, Hanoi" },
        ],
      },
      {
        time: "11AM–1PM", label: "Lunch",
        items: [
          { n: "Bun cha lunch in the Old Quarter", d: "Charcoal-grilled pork patties with herbs and noodles.", loc: "Old Quarter, Hanoi" },
          { n: "Banh cuon lunch stop", d: "Silky steamed rice rolls made to order on a cloth drum.", loc: "Old Quarter, Hanoi" },
        ],
      },
      {
        time: "1PM–5PM", label: "Museums & silk",
        items: [
          { n: "Hoa Lo Prison Museum", d: 'Sobering, well-told history — the "Hanoi Hilton."', loc: "Hoa Lo Prison Museum, Hanoi" },
          { n: "Vietnamese Women's Museum", d: "One of Hanoi's best museums — often overlooked.", loc: "Vietnamese Women's Museum, Hanoi" },
          { n: "Hang Gai silk street", d: 'Tailors and silk shops on "Silk Street."', loc: "Hang Gai Street, Hanoi" },
        ],
      },
      {
        time: "5PM–7PM", label: "Dinner",
        items: [
          { n: "Street food crawl", d: "Banh cuon, nem chua ran, che desserts — graze street by street.", loc: "Old Quarter, Hanoi" },
          { n: "Ta Hien Beer Street dinner", d: "Fresh bia hoi on low stools in the busiest corner of the Old Quarter.", loc: "Ta Hien Beer Street, Hanoi" },
        ],
      },
      {
        time: "7PM–10PM", label: "Hanoi by night",
        items: [
          { n: "Thang Long Water Puppet Theatre", d: "A thousand-year-old art form — puppets dancing on water.", loc: "Thang Long Water Puppet Theatre, Hanoi" },
          { n: "Long Bien Bridge night walk", d: "Eiffel-era iron bridge over the Red River, trains and mopeds lit up.", loc: "Long Bien Bridge, Hanoi" },
        ],
      },
    ],
  },
  {
    date: "2026-11-09", nice: "Sun, Nov 9", city: "Hanoi", route: ["HANOI", "WEST LAKE"],
    note: "Weekend bonus: streets around Hoan Kiem become <b>pedestrian-only</b> — great evening atmosphere.",
    blocks: [
      {
        time: "6AM–8AM", label: "Market dawn breakfast",
        items: [
          { n: "Quang Ba flower market", d: "Wholesale flower market at its peak before sunrise.", loc: "Quang Ba Flower Market, Hanoi" },
          { n: "Egg coffee at Cafe Giang", d: "Birthplace of ca phe trung: whipped egg yolk over dark coffee.", loc: "Cafe Giang, Hanoi" },
        ],
      },
      {
        time: "8AM–11AM", label: "West Lake & beyond",
        items: [
          { n: "Tran Quoc Pagoda", d: "Hanoi's oldest pagoda on a West Lake islet — 1,500 years old.", loc: "Tran Quoc Pagoda, Hanoi" },
          { n: "West Lake loop by bike or scooter", d: "17 km of lakeside cafes, temples and villas.", loc: "West Lake, Hanoi" },
          { n: "Museum of Ethnology", d: "Vietnam's 54 ethnic groups, with full-size stilt houses outside.", loc: "Vietnam Museum of Ethnology, Hanoi" },
        ],
      },
      {
        time: "11AM–1PM", label: "Lunch",
        items: [
          { n: "Cha ca La Vong lunch", d: "Turmeric fish sizzled with dill at your table — a Hanoi original.", loc: "Cha Ca La Vong, Hanoi" },
          { n: "QiQi Hotpot", d: "Alternative lunch pick if you're craving hotpot over street food today.", loc: "QiQi Hotpot, Hanoi" },
        ],
      },
      {
        time: "1PM–5PM", label: "Classic afternoon",
        items: [
          { n: "Bat Trang ceramic village", d: "Half-day pottery village trip — throw your own bowl.", loc: "Bat Trang Ceramic Village, Hanoi" },
          { n: "St. Joseph's Cathedral quarter", d: "Neo-gothic cathedral, boutiques and lemon tea corners.", loc: "St. Joseph's Cathedral, Hanoi" },
          { n: "Note Coffee or hidden cafes", d: "Hanoi's cafe culture — sticky notes, courtyards, balconies.", loc: "Note Coffee, Hanoi" },
          { n: "Grand Mega World", d: "Large entertainment and shopping complex — a fun half-day detour.", loc: "Grand Mega World, Hanoi" },
          { n: "Bai Da Song Hong Rainbow Slide", d: "Colorful slide art along the Red River rocks — playful photo stop.", loc: "Bai Da Song Hong, Hanoi" },
        ],
      },
      {
        time: "5PM–7PM", label: "Dinner",
        items: [
          { n: "Maison Sen Buffet", d: "All-you-can-eat spread if you want variety on your last big night.", loc: "Maison Sen Buffet, Hanoi" },
          { n: "Katinat Coffee & light bites", d: "Popular Vietnamese coffee chain — reliable iced coffee and a spot to rest before dinner out.", loc: "Katinat Coffee, Hanoi" },
        ],
      },
      {
        time: "7PM–10PM", label: "Last big night",
        items: [
          { n: "Hoan Kiem walking street (weekend)", d: "Car-free streets, buskers and games around the lake.", loc: "Hoan Kiem Lake, Hanoi" },
          { n: "Train Street at passing time", d: "Feel the train squeeze past — check passing schedule with the cafe.", loc: "Hanoi Train Street" },
          { n: "Rooftop cocktails over the lake", d: "Skyline views of Hoan Kiem lit up at night.", loc: "Hoan Kiem Lake, Hanoi" },
          { n: "Che dessert tasting", d: "Sweet soups & jellies — Vietnam's dessert universe.", loc: "Old Quarter, Hanoi" },
          { n: "South Hanoi Train Street", d: "A quieter, less touristy stretch of train-side cafes south of downtown.", loc: "South Hanoi Train Street" },
        ],
      },
    ],
  },
  {
    date: "2026-11-10", nice: "Mon, Nov 10", city: "Hanoi", route: ["HANOI", "Home"],
    note: "Departure day. Keep the morning close to the hotel; airport is roughly 45 min away — leave with plenty of buffer before your flight.",
    blocks: [
      {
        time: "6AM–8AM", label: "Slow last breakfast",
        items: [
          { n: "One last egg coffee", d: "A farewell ca phe trung at a balcony cafe.", loc: "Old Quarter, Hanoi" },
          { n: "Final Hoan Kiem lake loop", d: "Say goodbye to the lake where the trip began.", loc: "Hoan Kiem Lake, Hanoi" },
          { n: "Dong Xuan Market breakfast stall", d: "Grab a quick bite while browsing the market's edges.", loc: "Dong Xuan Market, Hanoi" },
        ],
      },
      {
        time: "8AM–11AM", label: "Hotel check-out & last bites",
        transit: "Hotel Check-out — settle up and store bags if you're not heading straight to the airport.",
        items: [
          { n: "Dong Xuan Market souvenirs", d: "Coffee beans, dried fruit, conical hats — haggle happily.", loc: "Dong Xuan Market, Hanoi" },
          { n: "Banh Mi 25 farewell sandwich", d: "The classic last meal before the airport.", loc: "Banh Mi 25, Hanoi" },
          { n: "Lotte Mall West Lake (optional)", d: "Modern mall option for last-minute shopping in air-conditioned comfort.", loc: "Lotte Mall West Lake, Hanoi" },
        ],
      },
      {
        time: "11AM–3PM", label: "To the airport",
        transit: "🛫 Flight from Hanoi to Singapore — head to Noi Bai Airport (~45 min by Grab or Bus 86). Aim to arrive well ahead of an international flight.",
        items: [
          { n: "Airport pho or banh mi", d: "Decent last-chance Vietnamese food after security.", loc: "Noi Bai International Airport" },
        ],
      },
    ],
  },
];
