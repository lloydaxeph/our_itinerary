import type { Day } from "../types";

export const DAYS: Day[] = [
  {
    date: "2026-11-05", nice: "Tue, Nov 5", city: "Hanoi", route: ["SINGAPORE", "HANOI"],
    note: 'Keep your bags packed light for the overnight journey. <b>Secure all valuables and essential travel documents</b>, including your passport, wallet, phone, medications, and IDs. It is best to convert money before departure.',
    blocks: [
      {
        time: "12PM–4PM", label: "Singapore Departure",
        transit: "✈️ Flight from Singapore to Hanoi — on the way. Rest up, today runs late.", items: [],
      },
      {
        time: "4PM–6PM", label: "Hanoi Arrival",
        transit: "🛬 Land at Noi Bai Airport. This airport is known for its long waiting times during both arrivals and departures so its best to bring your patience.",
        items: [
          { n: "Airport Bus 86 to Old Quarter", d: "Cheap, easy express bus straight to Hoan Kiem — a scenic first look at Hanoi.", thumb: "/images/airport_bus_86_to_old_quarter.png" },
          { n: "Grab car to Old Quarter", d: "Fastest door-to-door option; book in the app, no haggling needed.", thumb: "/images/grab_car_to_hotel.jpg" },
        ],
      },
      {
        time: "6PM–10PM", label: "First dinner in Hanoi",
        items: [
          { n: "Pho Thin Lo Duc", d: "Michelin Selected ⭐. Legendary stir-fried-beef pho — the perfect first meal in Vietnam.", loc: "Pho Thin Lo Duc, Hanoi", thumb: "/images/pho_thin_lo_duc.jpg" },
          { n: "Bun Cha Huong Lien", d: 'Michelin Selected ⭐. Smoky grilled-pork bun cha — the "Obama combo" spot.', loc: "Bun Cha Huong Lien, Hanoi", thumb: "/images/bun_cha_huong_lien.jpg" },
          { n: "Tuyết Bún Chả 34", d: "Grilled pork and noodles done exceptionally well.", loc: "Tuyết Bún Chả 34, Hanoi", thumb: "/images/tuyet_bun_cha_34.jpg" },
          { n: "Cha ca La Vong", d: "Turmeric fish sizzled with dill at your table — a Hanoi original.", loc: "Cha Ca La Vong, Hanoi", thumb: "/images/cha_ca_la_vong.jpg" },
          { n: "Ta Hien Beer Street stalls", d: "Fresh bia hoi and grilled skewers on low plastic stools.", loc: "Ta Hien Beer Street, Hanoi", thumb: "/images/ta_hien_beer_street_stalls.jpg" },
        ],
      },
      {
        time: "11PM–6AM (next day)", label: "Overnight to Sapa",
        items: [
          { n: "Sleeper Train to Sapa", d: "Overnight train to Lao Cai, then shuttle up the mountain — cabin bunks, rocks you to sleep. Could be noisy though.", loc: "Hanoi Railway Station", thumb: "/images/sleeper_train_to_sapa.jpg" },
          { n: "Sleeper Bus to Sapa", d: "Direct overnight bus straight to Sapa town — flat reclining pods, no transfer needed. Space is limited.", loc: "My Dinh Bus Station, Hanoi", thumb: "/images/sleeper_bus_to_sapa.jpg" },
        ],
      },
    ],
  },
  {
    date: "2026-11-06", nice: "Wed, Nov 6", city: "Sapa", route: ["HANOI", "SAPA"],
    note: "Arrive early morning, then a winding shuttle up to Sapa. November is cool (10–18°C) and often misty — <b>bring jackets</b>.",
    blocks: [
      {
        time: "6AM–8AM", label: "Arrival morning",
        transit: "🚆 Arrive Sapa (Lao Cai) — early hotel check-in, drop bags before heading out.",
        items: [
          { n: "Dai Nam Hotel Sapa", d: "Well-located Sapa town stay — ask for an early check-in after the overnight ride.", loc: "Dai Nam Hotel Sapa", thumb: "/images/dai_nam_hotel_sapa.jpg", website: "https://www.booking.com/hotel/vn/dai-nam-47-pho-fansipan-by-bay-luxury.html"},
          { n: "La Do Homestay Sapa", d: "Cozy mountain homestay with stunning Muong Hoa Valley and Fansipan monorail views, near the cable car station.", loc: "La Do Homestay Sapa", thumb: "/images/la_do_homestay_sapa.jpg", website: "https://www.booking.com/hotel/vn/la-do-2-homestay-amp-coffee.html"},
          { n: "Cloud Chaser Hotel", d: "Modern Sapa hotel with panoramic mountain-view rooms, a short walk from the town center.", loc: "Cloud Chaser Hotel, Sapa", thumb: "/images/cloud_chaser_hotel.jpg", website: "https://www.booking.com/hotel/vn/sapa-emerald.html" },
          { n: "Eden Boutique Hotel & Spa", d: "Boutique stay with a spa and valley views, a relaxing base after the overnight ride.", loc: "Eden Boutique Hotel & Spa, Sapa", thumb: "/images/eden_boutique_hotel_and_spa.jpg", website: "https://www.booking.com/hotel/vn/eden-boutique-sapa.html" },
          { n: "Green Villa Sapa", d: "Quiet villa-style hotel surrounded by greenery, close to Sapa's main attractions.", loc: "Green Villa Sapa", thumb: "/images/green_villa_sapa.jpg", website: "https://www.booking.com/hotel/vn/alpha-villa.html" },
          { n: "SaPa Retreat Condotel", d: "Spacious condotel-style rooms with kitchenettes, good for a longer mountain stay.", loc: "SaPa Retreat Condotel, Sapa", thumb: "/images/sapa_retreat_condotel.jpg", website: "https://www.booking.com/hotel/vn/sapa-retreat-sa-pa12.html" },
          { n: "Sapa Relax Hotel & Spa", d: "Spa-focused hotel with mountain views, ideal for unwinding after the sleeper train.", loc: "Sapa Relax Hotel & Spa, Sapa", thumb: "/images/sapa_relax_hotel_and_spa.jpg", website: "https://www.booking.com/hotel/vn/sapa-relax-amp-spa.html" },
          { n: "Sapa Yen Hotel", d: "Budget-friendly, centrally located hotel within easy reach of the town square.", loc: "Sapa Yen Hotel, Sapa", thumb: "/images/sapa_yen_hotel.jpg", website: "https://www.booking.com/hotel/vn/sapa-yen.html" },
          { n: "Terravia Hotel Sapa Mountain View", d: "Contemporary hotel with sweeping mountain-view rooms overlooking the valley.", loc: "Terravia Hotel Sapa", thumb: "/images/terravia_hotel_sapa_moutain_view.jpg", website: "https://www.booking.com/hotel/vn/terravia.html" },
          { n: "TIME Restaurant & Homestay", d: "Homestay with an on-site restaurant, a relaxed and homely option in town.", loc: "TIME Restaurant & Homestay, Sapa", thumb: "/images/time_restaurant_and_homestay.jpg", website: "https://www.booking.com/hotel/vn/time-restaurant-amp-homestay.html" },
          { n: "My's Homestay", d: "Family-run Hmong homestay with a warm, personal welcome and home-cooked meals.", loc: "My's Homestay, Sapa", thumb: "/images/mys_homestay.jpg", website: "https://www.booking.com/hotel/vn/h-39-mong-family-homestay.en-gb.html" },
          { n: "Mekhoo & Zizi Sapa Homestay", d: "Rustic homestay with mountain views, run by a friendly local family.", loc: "Mekhoo & Zizi Sapa Homestay", thumb: "/images/mekhoo_and_zizi_sapa_homestay.jpg", website: "https://www.booking.com/hotel/vn/mekhoo-amp-zizi-sapa-homestay.en-gb.html" },
        ],
      },
      {
        time: "8AM–11AM", label: "Settle into Sapa",
        items: [
          { n: "Sapa Sun Plaza", d: "Alternative Sapa town hotel option, close to restaurants and the main square.", loc: "Sapa Sun Plaza", thumb: "/images/sapa_sun_plaza.jpg" },
          { n: "Hot pho breakfast in Sapa town", d: "Steaming bowl to warm up after the sleeper.", loc: "Sapa town center", thumb: "/images/hot_pho_breakfast_in_sapa_town.jpg" },
          { n: "Banh mi & hot soy milk breakfast", d: "Quick street breakfast if you're eager to get moving.", loc: "Sapa town center", thumb: "/images/banh_mi_hot_soy_milk_breakfast.jpg" },
          { n: "Sapa Stone Church & main square", d: "The 1895 granite church is the heart of town life.", loc: "Sapa Stone Church", thumb: "/images/sapa_stone_church_main_square.jpg" },
          { n: "Sapa Market", d: "Hmong and Dao traders, brocade textiles, mountain herbs.", loc: "Sapa Market", thumb: "/images/sapa_market.jpg" },
          { n: "Coffee with a valley view", d: "Fog rolling over Muong Hoa from a cliffside cafe terrace.", loc: "Muong Hoa Valley viewpoint cafe, Sapa", thumb: "/images/coffee_with_a_valley_view.jpg" },
        ],
      },
      {
        time: "11AM–1PM", label: "Lunch",
        items: [
          { n: "Salmon hotpot lunch", d: "Sapa's mountain specialty — river salmon simmered at your table.", loc: "Salmon hotpot restaurant, Sapa", thumb: "/images/salmon_hotpot_lunch.jpg" },
          { n: "Nha Hang Pho May", d: "Local favorite for a hearty bowl of pho, Sapa style.", loc: "Nha Hang Pho May, Sapa", thumb: "/images/nha_hang_pho_may.jpg" },
        ],
      },
      {
        time: "1PM–5PM", label: "Gentle first afternoon",
        items: [
          { n: "Cat Cat Village walk", d: "Closest village to town — waterfalls, water wheels, Hmong houses.", loc: "Cat Cat Village, Sapa", thumb: "/images/cat_cat_village_walk.jpg" },
          { n: "Sapa Lake stroll", d: "Calm lakeside loop right in the town center.", loc: "Sapa Lake", thumb: "/images/sapa_lake_stroll.jpg" },
          { n: "Ham Rong Mountain gardens", d: "Stone steps to flower gardens and a view over Sapa's rooftops.", loc: "Ham Rong Mountain, Sapa", thumb: "/images/ham_rong_mountain_gardens.jpg" },
          { n: "Rong May Glass Bridge", d: "Cau Kinh Rong May — a glass-floored bridge suspended over the valley.", loc: "Rong May Glass Bridge, Sapa", thumb: "/images/rong_may_glass_bridge.jpg" },
        ],
      },
      {
        time: "5PM–7PM", label: "Dinner",
        items: [
          { n: "Viettrekking Cafe & Restaurant", d: "Cozy trekking-lodge spot for a warming dinner in town.", loc: "Viettrekking Cafe & Restaurant, Sapa", thumb: "/images/viettrekking_cafe_restaurant.jpg" },
          { n: "Hotpot dinner to warm up", d: "November evenings drop below 12°C — hotpot weather.", loc: "Hotpot restaurant, Sapa", thumb: "/images/hotpot_dinner_to_warm_up.jpg" },
        ],
      },
      {
        time: "7PM–10PM", label: "Cozy evening",
        items: [
          { n: "Sapa Night Market", d: "Grilled skewers, sticky rice in bamboo, warm soy milk.", loc: "Sapa Night Market", thumb: "/images/sapa_night_market.jpg" },
          { n: "Herbal bath (Red Dao style)", d: "Traditional Dao medicinal soak — perfect after the night train.", loc: "Red Dao herbal bath, Sapa", thumb: "/images/herbal_bath_red_dao_style.jpg" },
          { n: "Grilled street food alley", d: "Corn, eggs, pork skewers over charcoal in the cold air.", loc: "Sapa town center", thumb: "/images/grilled_street_food_alley.jpg" },
        ],
      },
    ],
  },
  {
    date: "2026-11-07", nice: "Thu, Nov 7", city: "Sapa", route: ["SAPA", "FANSIPAN"],
    note: "Leg day. Go up <b>Fansipan early</b> — mornings give the best chance above the clouds before afternoon fog.",
    blocks: [
      {
        time: "6AM–8AM", label: "Misty sunrise breakfast",
        items: [
          { n: "Sunrise over Muong Hoa Valley", d: "Sea of clouds below the viewpoints on a lucky morning.", loc: "Muong Hoa Valley viewpoint, Sapa", thumb: "/images/sunrise_over_muong_hoa_valley.jpg" },
          { n: "Early photos at O Quy Ho viewpoint", d: "One of Vietnam's four great mountain passes at first light.", loc: "O Quy Ho Pass viewpoint", thumb: "/images/early_photos_at_o_quy_ho_viewpoint.jpg" },
        ],
      },
      {
        time: "8AM–11AM", label: "Roof of Indochina",
        items: [
          { n: "Fansipan cable car", d: "20-minute ride over the valley to Vietnam's highest peak (3,143 m).", loc: "Fansipan Cable Car Station, Sapa", thumb: "/images/fansipan_cable_car.jpg" },
          { n: "Summit pagodas & Giant Buddha", d: "Temple complex in the clouds near the summit.", loc: "Fansipan Summit, Sapa", thumb: "/images/summit_pagodas_giant_buddha.jpg" },
          { n: "Muong Hoa funicular railway", d: "Charming vintage-style train from town to the cable car station.", loc: "Muong Hoa Funicular Railway, Sapa", thumb: "/images/muong_hoa_funicular_railway.jpg" },
        ],
      },
      {
        time: "11AM–1PM", label: "Lunch",
        items: [
          { n: "Lunch at a Ta Van homestay", d: "Home-cooked mountain food with valley views.", loc: "Ta Van Village, Sapa", thumb: "/images/lunch_at_a_ta_van_homestay.jpg" },
          { n: "Viet Deli", d: "Easy Western-friendly lunch option if you need a break from mountain fare.", loc: "Viet Deli, Sapa", thumb: "/images/viet_deli.jpg" },
        ],
      },
      {
        time: "1PM–5PM", label: "Into the valley",
        items: [
          { n: "Trek Muong Hoa Valley", d: "The classic walk through layered rice terraces.", loc: "Muong Hoa Valley, Sapa", thumb: "/images/trek_muong_hoa_valley.jpg" },
          { n: "Paragliding over Muong Hoa Valley", d: "Tandem flight above the rice terraces — book ahead, weather-dependent.", loc: "Muong Hoa Valley, Sapa", thumb: "/images/paragliding_over_muong_hoa_valley.jpg" },
          { n: "Lao Chai & Ta Van villages", d: "Black Hmong and Giay villages along the valley floor.", loc: "Lao Chai Village, Sapa", thumb: "/images/lao_chai_ta_van_villages.jpg" },
          { n: "Ancient rock carvings field", d: "Mysterious centuries-old petroglyphs among the terraces.", loc: "Sapa Ancient Rock Field", thumb: "/images/ancient_rock_carvings_field.jpg" },
          { n: "Mật Pet Farm", d: "Small farm where you can pet alpacas, capybaras, rabbits, goats and other animals — a relaxed stop for animal lovers.", loc: "Mật Pet Farm, Sapa", thumb: "/images/mat_pet_farm.jpg" },
        ],
      },
      {
        time: "5PM–7PM", label: "Dinner",
        items: [
          { n: "Thang co & apple wine tasting", d: "H'mong specialties for the adventurous — local corn & apple wine.", loc: "Sapa town center", thumb: "/images/thang_co_apple_wine_tasting.jpg" },
          { n: "Sapa Sun Plaza dinner spot", d: "Well-located restaurant row near the town center.", loc: "Sapa Sun Plaza", thumb: "/images/sapa_sun_plaza_dinner_spot.jpg" },
        ],
      },
      {
        time: "7PM–10PM", label: "Night in the mountains",
        items: [
          { n: "Sapa Lake at night", d: "Lights reflecting on the water, cool mountain air.", loc: "Sapa Lake", thumb: "/images/sapa_lake_at_night.jpg" },
          { n: "Live H'mong music evening", d: "Local folk performances at a town-center venue.", loc: "Sapa town center", thumb: "/images/live_h_mong_music_evening.jpg" },
        ],
      },
    ],
  },
  {
    date: "2026-11-08", nice: "Fri, Nov 8", city: "Sapa", route: ["SAPA", "LAO CAI"],
    note: "Last Sapa day. Just relax and enjoy the fresh air.",
    blocks: [
      {
        time: "6AM–8AM", label: "One last sunrise",
        items: [
          { n: "Final misty sunrise viewpoint", d: "Last chance for the cloud-sea over the valley.", loc: "Muong Hoa Valley viewpoint, Sapa", thumb: "/images/final_misty_sunrise_viewpoint.jpg" },
          { n: "Breakfast at a cliffside cafe", d: "Slow coffee, big view — no rush this morning.", loc: "Sapa town center", thumb: "/images/breakfast_at_a_cliffside_cafe.jpg" },
        ],
      },
      {
        time: "8AM–11AM", label: "Waterfalls & the pass",
        items: [
          { n: "Silver Waterfall (Thac Bac)", d: "100 m cascade on the O Quy Ho road, 15 min from town.", loc: "Silver Waterfall (Thac Bac), Sapa", thumb: "/images/silver_waterfall_thac_bac.jpg" },
          { n: "Love Waterfall & Golden Stream", d: "Short forest trek to a storybook waterfall.", loc: "Love Waterfall, Sapa", thumb: "/images/love_waterfall_golden_stream.jpg" },
          { n: "Heaven's Gate, O Quy Ho Pass", d: "Sweeping top-of-the-pass panorama toward Lai Chau.", loc: "Heaven's Gate O Quy Ho Pass", thumb: "/images/heaven_s_gate_o_quy_ho_pass.jpg" },
        ],
      },
      {
        time: "11AM–1PM", label: "Lunch",
        transit: "Hotel Check-out.",
        items: [
          { n: "Early salmon hotpot dinner spot for lunch", d: "Eat well in Sapa — train snacks are slim, so make lunch count.", loc: "Salmon hotpot restaurant, Sapa", thumb: "/images/early_salmon_hotpot_dinner_spot_for_lunch.jpg" },
          { n: "Noodle stall near the market", d: "Quick, filling bowl before an afternoon of shopping.", loc: "Sapa Market", thumb: "/images/noodle_stall_near_the_market.jpg" },
        ],
      },
      {
        time: "1PM–5PM", label: "Souvenirs & slow goodbye",
        items: [
          { n: "Brocade & Hmong craft shopping", d: "Indigo-dyed textiles and silver — buy direct from makers.", loc: "Sapa Market", thumb: "/images/brocade_hmong_craft_shopping.jpg" },
          { n: "Last valley viewpoint coffee", d: "One more look at the terraces before heading down.", loc: "Muong Hoa Valley viewpoint cafe, Sapa", thumb: "/images/last_valley_viewpoint_coffee.jpg" },
        ],
      },
      {
        time: "5PM–7PM", label: "Dinner before the ride down",
        transit: "🚐 Shuttle Sapa → Lao Cai in the evening ahead of the overnight departure.",
        items: [
          { n: "Dinner near Lao Cai station", d: "Simple rice or noodle spots if you go down early.", loc: "Lao Cai Railway Station", thumb: "/images/dinner_near_lao_cai_station.jpg" },
          { n: "Snacks & water for the ride", d: "Stock up at a mini-mart before boarding.", loc: "Lao Cai Railway Station", thumb: "/images/snacks_water_for_the_ride.jpg" },
        ],
      },
      {
        time: "7PM–10PM", label: "Evening in transit",
        items: [
          { n: "Last-minute Lao Cai market browse", d: "Small stalls near the station for final souvenirs.", loc: "Lao Cai Market", thumb: "/images/last_minute_lao_cai_market_browse.jpg" },
        ],
      },
      {
        time: "11PM–6AM (next day)", label: "Overnight to Hanoi",
        items: [
          { n: "Sleeper Train to Hanoi", d: "Overnight train back down from Lao Cai — cabin bunks, arrive Hanoi at dawn.", loc: "Lao Cai Railway Station", thumb: "/images/sleeper_train_to_sapa.jpg" },
          { n: "Sleeper Bus to Hanoi", d: "Direct overnight bus straight back to Hanoi — flat reclining pods.", loc: "Lao Cai Bus Station", thumb: "/images/sleeper_bus_to_sapa.jpg" },
        ],
      },
    ],
  },
  {
    date: "2026-11-09", nice: "Sat, Nov 9", city: "Hanoi", route: ["LAO CAI", "HANOI"],
    note: "Train or bus arrives Hanoi early morning. Hanoi is at its best at dawn.",
    blocks: [
      {
        time: "6AM–8AM", label: "Hanoi at dawn",
        transit: "🚆 Arrive back in Hanoi — early hotel check-in, drop bags before heading out or settle down.",
        items: [
          { n: "Centraltique Downtown", d: "Bespoke French colonial house steps from Hoan Kiem Lake, blending heritage charm with modern comfort.", loc: "Centraltique Downtown, Hanoi", thumb: "/images/centraltique_downtown.jpg", website: "https://www.booking.com/hotel/vn/centraltique-bespoke-french-colonial-house-near-hoan-kiem-lake.html" },
          { n: "The Little Hanoi Duplex", d: "Stylish duplex apartment in the Old Quarter with lake-view balconies, a homely upscale option.", loc: "The Little Hanoi Duplex, Hanoi", thumb: "/images/the_little_hanoi_duplex.jpg", website: "https://www.booking.com/hotel/vn/duplex-luxury-home-old-quater-street-view-hoan-kiem.html" },
          { n: "Spring Home Ha Noi", d: "Warm, budget-friendly homestay tucked in the Old Quarter, close to lake and street food.", loc: "Spring Home Ha Noi", thumb: "/images/spring_home_ha_noi.jpg", website: "https://www.booking.com/hotel/vn/spring-home-ha-noi.html" },
          { n: "Hanoi New Comb Hostel", d: "Clean, sociable hostel in the heart of the Old Quarter, great for meeting fellow travelers.", loc: "Hanoi New Comb Hostel", thumb: "/images/hanoi_new_comb_hostel.jpg", website: "https://www.booking.com/hotel/vn/the-comb-hanoi.html" },
          { n: "Lotuz Hanoi Hostel", d: "Friendly hostel with an in-house travel desk, handy for booking the Ha Giang loop and onward trips.", loc: "Lotuz Hanoi Hostel", thumb: "/images/lotuz_hanoi_hostel.jpg", website: "https://www.booking.com/hotel/vn/lotuz-hanoi-hostel-ha-giang-loop-office.html" },
          { n: "Hanoi High Five Hostel", d: "Lively backpacker hostel with a rooftop hangout spot, minutes from Old Quarter nightlife.", loc: "Hanoi High Five Hostel", thumb: "/images/hanoi_high_five_hostel.jpg", website: "https://www.booking.com/hotel/vn/hanoi-high-five-hostel-ha-noi.html" },
          { n: "Cozy Backpackers Beer Street", d: "Budget stay right by Ta Hien Beer Street, ideal for travelers who want the action outside their door.", loc: "Cozy Backpackers Beer Street, Hanoi", thumb: "/images/cozy_backpackers_beerstreet.jpg", website: "https://www.booking.com/hotel/vn/cozy-backpackers-beerstreet-private-old-quarter.html" },
        ],
      },
      {
        time: "8AM–11AM", label: "Imperial Hanoi",
        items: [
          { n: "Tai chi at Hoan Kiem Lake", d: "Join locals exercising around the lake at sunrise.", loc: "Hoan Kiem Lake, Hanoi", thumb: "/images/tai_chi_at_hoan_kiem_lake.jpg" },
          { n: "Pho breakfast, dawn edition", d: "Pho tastes best at 6 AM on a tiny plastic stool.", loc: "Old Quarter, Hanoi", thumb: "/images/pho_breakfast_dawn_edition.jpg" },
          { n: "Pho 10 Ly Quoc Su", d: "Michelin Selected ⭐. Rich broth and tender beef, one of Hanoi's most popular pho destinations.", loc: "Pho 10 Ly Quoc Su, Hanoi", thumb: "/images/pho_10_ly_quoc_su.jpg" },
          { n: "Temple of Literature", d: "Vietnam's first university (1070) — courtyards, stelae, bonsai.", loc: "Temple of Literature, Hanoi", thumb: "/images/temple_of_literature.jpg" },
          { n: "Ho Chi Minh Mausoleum complex", d: "Ba Dinh Square, the stilt house and One Pillar Pagoda.", loc: "Ho Chi Minh Mausoleum, Hanoi", thumb: "/images/ho_chi_minh_mausoleum_complex.jpg" },
          { n: "Imperial Citadel of Thang Long", d: "UNESCO site — a millennium of Vietnamese dynasties.", loc: "Imperial Citadel of Thang Long, Hanoi", thumb: "/images/imperial_citadel_of_thang_long.jpg" },
        ],
      },
      {
        time: "11AM–1PM", label: "Lunch",
        items: [
          { n: "Bun cha lunch in the Old Quarter", d: "Charcoal-grilled pork patties with herbs and noodles.", loc: "Old Quarter, Hanoi", thumb: "/images/bun_cha_lunch_in_the_old_quarter.jpg" },
          { n: "Banh cuon lunch stop", d: "Silky steamed rice rolls made to order on a cloth drum.", loc: "Old Quarter, Hanoi", thumb: "/images/banh_cuon_lunch_stop.jpg" },
          { n: "Cha Ca Thang Long", d: "Michelin Selected ⭐. Turmeric fish grilled tableside with dill, assembled with noodles, herbs and peanuts.", loc: "Cha Ca Thang Long, Hanoi", thumb: "/images/cha_ca_thang_long.jpg" },
        ],
      },
      {
        time: "1PM–5PM", label: "Museums & silk",
        items: [
          { n: "Hoa Lo Prison Museum", d: 'Sobering, well-told history — the "Hanoi Hilton."', loc: "Hoa Lo Prison Museum, Hanoi", thumb: "/images/hoa_lo_prison_museum.jpg" },
          { n: "Vietnamese Women's Museum", d: "One of Hanoi's best museums — often overlooked.", loc: "Vietnamese Women's Museum, Hanoi", thumb: "/images/vietnamese_women_s_museum.jpg" },
          { n: "Hang Gai silk street", d: 'Tailors and silk shops on "Silk Street."', loc: "Hang Gai Street, Hanoi", thumb: "/images/hang_gai_silk_street.jpg" },
        ],
      },
      {
        time: "5PM–7PM", label: "Dinner",
        items: [
          { n: "Street food crawl", d: "Banh cuon, nem chua ran, che desserts — graze street by street.", loc: "Old Quarter, Hanoi", thumb: "/images/street_food_crawl.jpg" },
          { n: "Ta Hien Beer Street dinner", d: "Fresh bia hoi on low stools in the busiest corner of the Old Quarter.", loc: "Ta Hien Beer Street, Hanoi", thumb: "/images/ta_hien_beer_street_dinner.jpg" },
          { n: "Pho Gia Truyen Bat Dan", d: "Famous no-frills pho stall — queue early, bowls sell out by mid-afternoon.", loc: "Pho Gia Truyen Bat Dan, Hanoi", thumb: "/images/pho_gia_truyen_bat_dan.jpg" },
          { n: "Banh Mi 25", d: "Michelin Selected ⭐. Old Quarter banh mi institution — crusty baguette, pate, grilled pork.", loc: "Banh Mi 25, Hanoi", thumb: "/images/banh_mi_25.jpg" },
          { n: "Bun Dau Mam Tom", d: "Fried tofu, noodles and fermented shrimp paste — a true local classic.", loc: "Old Quarter, Hanoi", thumb: "/images/bun_dau_mam_tom.jpg" },
          { n: "Xoi Yen sticky rice", d: "Sticky rice piled with pate, sausage and shredded pork, day or night.", loc: "Xoi Yen, Hanoi", thumb: "/images/xoi_yen_sticky_rice.jpg" },
        ],
      },
      {
        time: "7PM–10PM", label: "Hanoi by night",
        items: [
          { n: "Thang Long Water Puppet Theatre", d: "A thousand-year-old art form — puppets dancing on water.", loc: "Thang Long Water Puppet Theatre, Hanoi", thumb: "/images/thang_long_water_puppet_theatre.jpg" },
          { n: "Long Bien Bridge night walk", d: "Eiffel-era iron bridge over the Red River, trains and mopeds lit up.", loc: "Long Bien Bridge, Hanoi", thumb: "/images/long_bien_bridge_night_walk.jpg" },
        ],
      },
    ],
  },
  {
    date: "2026-11-10", nice: "Sun, Nov 10", city: "Hanoi", route: ["HANOI", "HANOI"],
    note: "Weekend bonus: streets around Hoan Kiem become <b>pedestrian-only</b> — great evening atmosphere.",
    blocks: [
      {
        time: "6AM–8AM", label: "Market dawn breakfast",
        items: [
          { n: "Quang Ba flower market", d: "Wholesale flower market at its peak before sunrise.", loc: "Quang Ba Flower Market, Hanoi", thumb: "/images/quang_ba_flower_market.jpg" },
          { n: "Egg coffee at Cafe Giang", d: "Birthplace of ca phe trung: whipped egg yolk over dark coffee.", loc: "Cafe Giang, Hanoi", thumb: "/images/egg_coffee_at_cafe_giang.jpg" },
        ],
      },
      {
        time: "8AM–11AM", label: "West Lake & beyond",
        items: [
          { n: "Tran Quoc Pagoda", d: "Hanoi's oldest pagoda on a West Lake islet — 1,500 years old.", loc: "Tran Quoc Pagoda, Hanoi", thumb: "/images/tran_quoc_pagoda.jpg" },
          { n: "West Lake loop by bike or scooter", d: "17 km of lakeside cafes, temples and villas.", loc: "West Lake, Hanoi", thumb: "/images/west_lake_loop_by_bike_or_scooter.jpg" },
          { n: "Museum of Ethnology", d: "Vietnam's 54 ethnic groups, with full-size stilt houses outside.", loc: "Vietnam Museum of Ethnology, Hanoi", thumb: "/images/museum_of_ethnology.jpg" },
        ],
      },
      {
        time: "11AM–1PM", label: "Lunch",
        items: [
          { n: "Cha ca La Vong lunch", d: "Turmeric fish sizzled with dill at your table — a Hanoi original.", loc: "Cha Ca La Vong, Hanoi", thumb: "/images/cha_ca_la_vong_lunch.jpg" },
          { n: "QiQi Hotpot", d: "Alternative lunch pick if you're craving hotpot over street food today.", loc: "QiQi Hotpot, Hanoi", thumb: "/images/qiqi_hotpot.jpg" },
          { n: "Tam Vi", d: "Michelin Selected ⭐. Northern Vietnamese home-style cooking in a charming vintage setting.", loc: "Tam Vi, Hanoi", thumb: "/images/tam_vi.jpg" },
        ],
      },
      {
        time: "1PM–5PM", label: "Classic afternoon",
        items: [
          { n: "Bat Trang ceramic village", d: "Half-day pottery village trip — throw your own bowl.", loc: "Bat Trang Ceramic Village, Hanoi", thumb: "/images/bat_trang_ceramic_village.jpg" },
          { n: "St. Joseph's Cathedral quarter", d: "Neo-gothic cathedral, boutiques and lemon tea corners.", loc: "St. Joseph's Cathedral, Hanoi", thumb: "/images/st_joseph_s_cathedral_quarter.jpg" },
          { n: "Note Coffee or hidden cafes", d: "Hanoi's cafe culture — sticky notes, courtyards, balconies.", loc: "Note Coffee, Hanoi", thumb: "/images/note_coffee_or_hidden_cafes.jpg" },
          { n: "Grand Mega World", d: "Large entertainment and shopping complex — a fun half-day detour.", loc: "Grand Mega World, Hanoi", thumb: "/images/grand_mega.jpg" },
          { n: "Bai Da Song Hong Rainbow Slide", d: "Colorful slide art along the Red River rocks — playful photo stop.", loc: "Bai Da Song Hong, Hanoi", thumb: "/images/bai_da_song_hong_rainbow_slide.jpg" },
        ],
      },
      {
        time: "5PM–7PM", label: "Dinner",
        items: [
          { n: "Maison Sen Buffet", d: "All-you-can-eat spread if you want variety on your last big night.", loc: "Maison Sen Buffet, Hanoi", thumb: "/images/maison_sen_buffet.jpg" },
          { n: "Katinat Coffee & light bites", d: "Popular Vietnamese coffee chain — reliable iced coffee and a spot to rest before dinner out.", loc: "Katinat Coffee, Hanoi", thumb: "/images/katinat_coffee_light_bites.jpg" },
          { n: "Hanoi Oi Kitchen", d: "Michelin Selected ⭐. Modern take on Vietnamese classics in a relaxed dining room.", loc: "Hanoi Oi Kitchen, Hanoi", thumb: "/images/hanoi_oi_kitchen.jpg" },
        ],
      },
      {
        time: "7PM–10PM", label: "Last big night",
        items: [
          { n: "Hoan Kiem walking street (weekend)", d: "Car-free streets, buskers and games around the lake.", loc: "Hoan Kiem Lake, Hanoi", thumb: "/images/hoan_kiem_walking_street_weekend.jpg" },
          { n: "Train Street at passing time", d: "Feel the train squeeze past — check passing schedule with the cafe.", loc: "Hanoi Train Street", thumb: "/images/train_street_at_passing_time.jpg" },
          { n: "Rooftop cocktails over the lake", d: "Skyline views of Hoan Kiem lit up at night.", loc: "Hoan Kiem Lake, Hanoi", thumb: "/images/rooftop_cocktails_over_the_lake.jpg" },
          { n: "Che dessert tasting", d: "Sweet soups & jellies — Vietnam's dessert universe.", loc: "Old Quarter, Hanoi", thumb: "/images/che_dessert_tasting.jpg" },
          { n: "South Hanoi Train Street", d: "A quieter, less touristy stretch of train-side cafes south of downtown.", loc: "South Hanoi Train Street", thumb: "/images/south_hanoi_train_street.jpg" },
        ],
      },
    ],
  },
  {
    date: "2026-11-11", nice: "Mon, Nov 11", city: "Hanoi", route: ["HANOI", "SINGAPORE"],
    note: "Departure day. Keep the morning close to the hotel; airport is roughly 45 min away — leave with plenty of buffer before your flight. Airport lines could take <b>1-3hrs</b>.",
    blocks: [
      {
        time: "6AM–8AM", label: "Slow last breakfast",
        items: [
          { n: "One last egg coffee", d: "A farewell ca phe trung at a balcony cafe.", loc: "Old Quarter, Hanoi", thumb: "/images/one_last_egg_coffee.jpg" },
          { n: "Final Hoan Kiem lake loop", d: "Say goodbye to the lake where the trip began.", loc: "Hoan Kiem Lake, Hanoi", thumb: "/images/final_hoan_kiem_lake_loop.jpg" },
          { n: "Dong Xuan Market breakfast stall", d: "Grab a quick bite while browsing the market's edges.", loc: "Dong Xuan Market, Hanoi", thumb: "/images/dong_xuan_market_breakfast_stall.jpg" },
        ],
      },
      {
        time: "8AM–11AM", label: "Hotel check-out & last bites",
        transit: "Hotel Check-out — settle up and store bags if you're not heading straight to the airport.",
        items: [
          { n: "Dong Xuan Market souvenirs", d: "Coffee beans, dried fruit, conical hats — haggle happily.", loc: "Dong Xuan Market, Hanoi", thumb: "/images/dong_xuan_market_souvenirs.jpg" },
          { n: "Banh Mi 25 farewell sandwich", d: "The classic last meal before the airport.", loc: "Banh Mi 25, Hanoi", thumb: "/images/banh_mi_25_farewell_sandwich.jpg" },
          { n: "Lotte Mall West Lake (optional)", d: "Modern mall option for last-minute shopping in air-conditioned comfort.", loc: "Lotte Mall West Lake, Hanoi", thumb: "/images/lotte_mall_west_lake_optional.jpg" },
          { n: "Hang Ngang & Hang Dao clothing street", d: "Old Quarter street lined with women's clothing stalls and shops.", loc: "Hang Ngang Street, Hanoi", thumb: "/images/hang_ngang_hang_dao_clothing_street.jpg" },
          { n: "Bookworm Hanoi", d: "Cozy English-Vietnamese bookshop, good for reads and gifts.", loc: "Bookworm Hanoi", thumb: "/images/bookworm_hanoi.jpg" },
          { n: "Hang Dau shoe street", d: "A whole street of shoe shops — women's styles, sandals, leather goods.", loc: "Hang Dau Street, Hanoi", thumb: "/images/hang_dau_shoe_street.jpg" },
          { n: "Hang Gai souvenir & silk shops", d: "Silk scarves, lacquerware and handicraft souvenirs on Silk Street.", loc: "Hang Gai Street, Hanoi", thumb: "/images/hang_gai_souvenir_silk_shops.jpg" },
        ],
      },
      {
        time: "11AM–3PM", label: "To the airport",
        transit: "🛫 Flight from Hanoi to Singapore — head to Noi Bai Airport (~45 min by Grab or Bus 86). Aim to arrive well ahead of an international flight.",
        items: [
          { n: "Airport pho or banh mi", d: "Decent last-chance Vietnamese food after security.", loc: "Noi Bai International Airport", thumb: "/images/airport_pho_or_banh_mi.jpg" },
        ],
      },
      {
        time: "3PM-6PM", label: "Arrive at Singapore",
        transit: "🛬 Land at Changi Airport.",
        items: [],
      },
    ],
  },
];
