import type { Day } from "../types";

export const DAYS: Day[] = [
  {
    date: "2026-11-04", nice: "Tue, Nov 4", city: "Hanoi", route: ["Home", "HANOI"],
    note: 'Arrive around lunchtime. Tonight: <b>sleeper train to Sapa (Lao Cai), dep. ~9:30 PM</b> from Hanoi Station. Keep bags packed light for the train.',
    blocks: [
      {
        time: "5AM–8AM", label: "In transit",
        transit: "✈️ Flight to Hanoi — on the way. Rest up, today runs late.", items: [],
      },
      {
        time: "8AM–12PM", label: "Arrival",
        transit: "🛬 Land at Noi Bai Airport, immigration & SIM card, head into the city (~45 min).",
        items: [
          { n: "Airport Bus 86 to Old Quarter", d: "Cheap, easy express bus straight to Hoan Kiem — a scenic first look at Hanoi." },
          { n: "Grab car to hotel", d: "Fastest door-to-door option; book in the app, no haggling needed." },
          { n: "Check in to hotel", d: "Drop your bags and settle in before heading out to explore." },
        ],
      },
      {
        time: "12PM–5PM", label: "First taste of Hanoi",
        items: [
          { n: "Pho Thin Lo Duc", d: "Legendary stir-fried-beef pho — the perfect first meal in Vietnam." },
          { n: "Hoan Kiem Lake loop", d: "Easy lakeside walk to shake off the flight; see Turtle Tower." },
          { n: "Ngoc Son Temple", d: "Small island temple over the red Huc Bridge on Hoan Kiem Lake." },
          { n: "Old Quarter first wander", d: "Get lost in the 36 guild streets — silk, tin, herbs, chaos." },
          { n: "Egg coffee at Cafe Giang", d: "Birthplace of ca phe trung: whipped egg yolk over dark coffee." },
        ],
      },
      {
        time: "5PM–10PM", label: "Dinner, then night train",
        transit: "🚆 Sleeper train to Lao Cai departs ~9:30 PM from Hanoi Station (Tran Quy Cap gate). Arrive 45 min early.",
        items: [
          { n: "Bun Cha Huong Lien", d: 'Smoky grilled-pork bun cha — the "Obama combo" spot.' },
          { n: "Train Street cafe (early evening)", d: "Coffee inches from the tracks in a lantern-lit alley." },
          { n: "Banh mi for the train", d: "Grab Banh Mi 25 to-go — best midnight snack on a sleeper." },
        ],
      },
    ],
  },
  {
    date: "2026-11-05", nice: "Wed, Nov 5", city: "Sapa", route: ["LAO CAI", "SAPA"],
    note: "Arrive Lao Cai ~6 AM, then a winding 1-hour shuttle up to Sapa. November is cool (10–18°C) and often misty — <b>bring layers</b>.",
    blocks: [
      {
        time: "5AM–8AM", label: "Arrival morning",
        transit: "🚆 Train arrives Lao Cai ~6 AM → shared van/shuttle up the mountain to Sapa town (~1 hr).",
        items: [
          { n: "Sunrise on the mountain road", d: "Grab a window seat — terraced valleys emerging from fog." },
          { n: "Hot pho breakfast in Sapa town", d: "Steaming bowl to warm up after the night train." },
        ],
      },
      {
        time: "8AM–12PM", label: "Settle into Sapa",
        items: [
          { n: "Early hotel check-in & shower", d: "Drop bags, freshen up — most hotels hold luggage if room isn't ready." },
          { n: "Sapa Stone Church & main square", d: "The 1895 granite church is the heart of town life." },
          { n: "Sapa Market", d: "Hmong and Dao traders, brocade textiles, mountain herbs." },
          { n: "Coffee with a valley view", d: "Fog rolling over Muong Hoa from a cliffside cafe terrace." },
          { n: "Dai Nam Hotel Sapa / Sapa Sun Plaza", d: "Check in for the night — both are solid, well-located Sapa town stays." },
        ],
      },
      {
        time: "12PM–5PM", label: "Gentle first afternoon",
        items: [
          { n: "Cat Cat Village walk", d: "Closest village to town — waterfalls, water wheels, Hmong houses." },
          { n: "Sapa Lake stroll", d: "Calm lakeside loop right in the town center." },
          { n: "Salmon hotpot lunch", d: "Sapa's mountain specialty — river salmon simmered at your table." },
          { n: "Ham Rong Mountain gardens", d: "Stone steps to flower gardens and a view over Sapa's rooftops." },
          { n: "Nha Hang Pho May", d: "Local favorite for a hearty bowl of pho, Sapa style." },
          { n: "Rong May Glass Bridge", d: "Cau Kinh Rong May — a glass-floored bridge suspended over the valley." },
        ],
      },
      {
        time: "5PM–10PM", label: "Cozy evening",
        items: [
          { n: "Sapa Night Market", d: "Grilled skewers, sticky rice in bamboo, warm soy milk." },
          { n: "Herbal bath (Red Dao style)", d: "Traditional Dao medicinal soak — perfect after the night train." },
          { n: "Grilled street food alley", d: "Corn, eggs, pork skewers over charcoal in the cold air." },
          { n: "Viettrekking Cafe & Restaurant", d: "Cozy trekking-lodge spot for a warming dinner in town." },
        ],
      },
    ],
  },
  {
    date: "2026-11-06", nice: "Thu, Nov 6", city: "Sapa", route: ["SAPA", "FANSIPAN"],
    note: "Big day. Go up <b>Fansipan early</b> — mornings give the best chance above the clouds before afternoon fog.",
    blocks: [
      {
        time: "5AM–8AM", label: "Misty sunrise",
        items: [
          { n: "Sunrise over Muong Hoa Valley", d: "Sea of clouds below the viewpoints on a lucky morning." },
          { n: "Banh mi & hot soy milk breakfast", d: "Quick street breakfast before the cable car." },
          { n: "Early photos at O Quy Ho viewpoint", d: "One of Vietnam's four great mountain passes at first light." },
        ],
      },
      {
        time: "8AM–12PM", label: "Roof of Indochina",
        items: [
          { n: "Fansipan cable car", d: "20-minute ride over the valley to Vietnam's highest peak (3,143 m)." },
          { n: "Summit pagodas & Giant Buddha", d: "Temple complex in the clouds near the summit." },
          { n: "Muong Hoa funicular railway", d: "Charming vintage-style train from town to the cable car station." },
        ],
      },
      {
        time: "12PM–5PM", label: "Into the valley",
        items: [
          { n: "Trek Muong Hoa Valley", d: "The classic walk through layered rice terraces." },
          { n: "Lao Chai & Ta Van villages", d: "Black Hmong and Giay villages along the valley floor." },
          { n: "Lunch at a Ta Van homestay", d: "Home-cooked mountain food with valley views." },
          { n: "Ancient rock carvings field", d: "Mysterious centuries-old petroglyphs among the terraces." },
          { n: "Viet Deli", d: "Easy Western-friendly lunch option if you need a break from mountain fare." },
        ],
      },
      {
        time: "5PM–10PM", label: "Night in the mountains",
        items: [
          { n: "Thang co & apple wine tasting", d: "H'mong specialties for the adventurous — local corn & apple wine." },
          { n: "Sapa Lake at night", d: "Lights reflecting on the water, cool mountain air." },
          { n: "Hotpot dinner to warm up", d: "November evenings drop below 12°C — hotpot weather." },
        ],
      },
    ],
  },
  {
    date: "2026-11-07", nice: "Fri, Nov 7", city: "Sapa", route: ["SAPA", "LAO CAI"],
    note: "Last Sapa day. Tonight: <b>sleeper train back to Hanoi, dep. ~9:30 PM</b> from Lao Cai — shuttle down by ~7:30 PM.",
    blocks: [
      {
        time: "5AM–8AM", label: "One last sunrise",
        items: [
          { n: "Final misty sunrise viewpoint", d: "Last chance for the cloud-sea over the valley." },
          { n: "Breakfast at a cliffside cafe", d: "Slow coffee, big view — no rush this morning." },
        ],
      },
      {
        time: "8AM–12PM", label: "Waterfalls & the pass",
        items: [
          { n: "Silver Waterfall (Thac Bac)", d: "100 m cascade on the O Quy Ho road, 15 min from town." },
          { n: "Love Waterfall & Golden Stream", d: "Short forest trek to a storybook waterfall." },
          { n: "Heaven's Gate, O Quy Ho Pass", d: "Sweeping top-of-the-pass panorama toward Lai Chau." },
        ],
      },
      {
        time: "12PM–5PM", label: "Souvenirs & slow goodbye",
        items: [
          { n: "Brocade & Hmong craft shopping", d: "Indigo-dyed textiles and silver — buy direct from makers." },
          { n: "Last valley viewpoint coffee", d: "One more look at the terraces before heading down." },
          { n: "Early salmon hotpot dinner", d: "Eat well in Sapa — train snacks are slim." },
        ],
      },
      {
        time: "5PM–10PM", label: "Down the mountain",
        transit: "🚐 Shuttle Sapa → Lao Cai (~1 hr), then 🚆 sleeper train to Hanoi departs ~9:30 PM.",
        items: [
          { n: "Dinner near Lao Cai station", d: "Simple rice or noodle spots if you go down early." },
          { n: "Snacks & water for the train", d: "Stock up at a mini-mart before boarding." },
        ],
      },
    ],
  },
  {
    date: "2026-11-08", nice: "Sat, Nov 8", city: "Hanoi", route: ["LAO CAI", "HANOI"],
    note: "Train arrives Hanoi ~5:30 AM. Hanoi is at its best at dawn — lean into the early start, nap later if needed.",
    blocks: [
      {
        time: "5AM–8AM", label: "Hanoi at dawn",
        transit: "🚆 Arrive Hanoi Station ~5:30 AM. Drop bags at the hotel (early check-in or luggage storage).",
        items: [
          { n: "Tai chi at Hoan Kiem Lake", d: "Join locals exercising around the lake at sunrise." },
          { n: "Pho breakfast, dawn edition", d: "Pho tastes best at 6 AM on a tiny plastic stool." },
          { n: "Long Bien Bridge sunrise walk", d: "Eiffel-era iron bridge over the Red River, trains and mopeds." },
          { n: "Muse Hotel", d: "Check in back in Hanoi after the overnight train from Lao Cai." },
        ],
      },
      {
        time: "8AM–12PM", label: "Imperial Hanoi",
        items: [
          { n: "Temple of Literature", d: "Vietnam's first university (1070) — courtyards, stelae, bonsai." },
          { n: "Ho Chi Minh Mausoleum complex", d: "Ba Dinh Square, the stilt house and One Pillar Pagoda." },
          { n: "Imperial Citadel of Thang Long", d: "UNESCO site — a millennium of Vietnamese dynasties." },
        ],
      },
      {
        time: "12PM–5PM", label: "Museums & silk",
        items: [
          { n: "Bun cha lunch in the Old Quarter", d: "Charcoal-grilled pork patties with herbs and noodles." },
          { n: "Hoa Lo Prison Museum", d: 'Sobering, well-told history — the "Hanoi Hilton."' },
          { n: "Vietnamese Women's Museum", d: "One of Hanoi's best museums — often overlooked." },
          { n: "Hang Gai silk street", d: 'Tailors and silk shops on "Silk Street."' },
        ],
      },
      {
        time: "5PM–10PM", label: "Hanoi by night",
        items: [
          { n: "Thang Long Water Puppet Theatre", d: "A thousand-year-old art form — puppets dancing on water." },
          { n: 'Ta Hien "Beer Street"', d: "Fresh bia hoi on low stools in the busiest corner of the Old Quarter." },
          { n: "Street food crawl", d: "Banh cuon, nem chua ran, che desserts — graze street by street." },
        ],
      },
    ],
  },
  {
    date: "2026-11-09", nice: "Sun, Nov 9", city: "Hanoi", route: ["HANOI", "WEST LAKE"],
    note: "Weekend bonus: streets around Hoan Kiem become <b>pedestrian-only</b> — great evening atmosphere.",
    blocks: [
      {
        time: "5AM–8AM", label: "Market dawn",
        items: [
          { n: "Quang Ba flower market", d: "Wholesale flower market at its peak before sunrise." },
          { n: "Banh cuon breakfast", d: "Silky steamed rice rolls made to order on a cloth drum." },
          { n: "Hoan Kiem morning people-watching", d: "Aerobics, badminton, ballroom dancing by the lake." },
        ],
      },
      {
        time: "8AM–12PM", label: "West Lake & beyond",
        items: [
          { n: "Tran Quoc Pagoda", d: "Hanoi's oldest pagoda on a West Lake islet — 1,500 years old." },
          { n: "West Lake loop by bike or scooter", d: "17 km of lakeside cafes, temples and villas." },
          { n: "Bat Trang ceramic village", d: "Half-day pottery village trip — throw your own bowl." },
          { n: "Museum of Ethnology", d: "Vietnam's 54 ethnic groups, with full-size stilt houses outside." },
          { n: "Grand Mega World", d: "Large entertainment and shopping complex — a fun half-day detour." },
          { n: "Bai Da Song Hong Rainbow Slide", d: "Colorful slide art along the Red River rocks — playful photo stop." },
        ],
      },
      {
        time: "12PM–5PM", label: "Classic afternoon",
        items: [
          { n: "Cha ca La Vong lunch", d: "Turmeric fish sizzled with dill at your table — a Hanoi original." },
          { n: "St. Joseph's Cathedral quarter", d: "Neo-gothic cathedral, boutiques and lemon tea corners." },
          { n: "Note Coffee or hidden cafes", d: "Hanoi's cafe culture — sticky notes, courtyards, balconies." },
          { n: "QiQi Hotpot", d: "Alternative lunch pick if you're craving hotpot over street food today." },
          { n: "Katinat Coffee", d: "Popular Vietnamese coffee chain — reliable iced coffee and a spot to rest." },
        ],
      },
      {
        time: "5PM–10PM", label: "Last big night",
        items: [
          { n: "Hoan Kiem walking street (weekend)", d: "Car-free streets, buskers and games around the lake." },
          { n: "Train Street at passing time", d: "Feel the train squeeze past — check passing schedule with the cafe." },
          { n: "Rooftop cocktails over the lake", d: "Skyline views of Hoan Kiem lit up at night." },
          { n: "Che dessert tasting", d: "Sweet soups & jellies — Vietnam's dessert universe." },
          { n: "South Hanoi Train Street", d: "A quieter, less touristy stretch of train-side cafes south of downtown." },
          { n: "Maison Sen Buffet", d: "All-you-can-eat spread if you want variety on your last big night." },
        ],
      },
    ],
  },
  {
    date: "2026-11-10", nice: "Mon, Nov 10", city: "Hanoi", route: ["HANOI", "Home"],
    note: "Departure day. Keep the morning close to the hotel; airport is ~45 min away — leave 3 hours before your flight.",
    blocks: [
      {
        time: "5AM–8AM", label: "Slow last morning",
        items: [
          { n: "One last egg coffee", d: "A farewell ca phe trung at a balcony cafe." },
          { n: "Final Hoan Kiem lake loop", d: "Say goodbye to the lake where the trip began." },
        ],
      },
      {
        time: "8AM–12PM", label: "Last bites & gifts",
        items: [
          { n: "Dong Xuan Market souvenirs", d: "Coffee beans, dried fruit, conical hats — haggle happily." },
          { n: "Banh Mi 25 farewell sandwich", d: "The classic last meal before the airport." },
          { n: "Hanoi Train Street morning coffee", d: "Quieter in the morning — one last photo." },
          { n: "Lotte Mall West Lake (optional)", d: "Modern mall option for last-minute shopping in air-conditioned comfort." },
        ],
      },
      {
        time: "12PM–5PM", label: "To the airport",
        transit: "🛫 Check out, head to Noi Bai Airport (~45 min by Grab or Bus 86). Aim to arrive 3 hrs before an international flight.",
        items: [
          { n: "Airport pho or banh mi", d: "Decent last-chance Vietnamese food after security." },
        ],
      },
      {
        time: "5PM–10PM", label: "Departure",
        transit: "✈️ Fly home — with a phone full of terraces, lanterns and fog.", items: [],
      },
    ],
  },
];
