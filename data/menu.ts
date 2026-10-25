export interface Dish {
  name: string;
  description: string;
  isJainAvailable?: boolean;
  isLiveCounter?: boolean;
  isPopular?: boolean;
  extraPriceNote?: string;
  image?: string;
}

export interface MenuSection {
  title: string;
  dishes: Dish[];
}

export interface MenuCategory {
  slug: string;
  title: string;
  group: "Indian" | "Global";
  tagline: string;
  image: string;
  sections: MenuSection[];
}

export const menuCategories: MenuCategory[] = [
  {
    slug: "breakfast",
    title: "Breakfast & Morning Tiffin",
    group: "Indian",
    tagline: "Authentic morning feasts with steaming savouries, parathas, and fresh stone-ground chutneys.",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1200&q=80",
    sections: [
      {
        title: "Hot Breakfast Specials",
        dishes: [
          { name: "Steamed Idli", description: "Fluffy steamed fermented rice and lentil cakes served with sambhar and coconut chutney.", isJainAvailable: true, isPopular: true },
          { name: "Mendu Wada", description: "Crisp-fried golden lentil doughnuts with spiced peppercorn and fresh curry leaves.", isPopular: true },
          { name: "Idli Fry", description: "Bite-sized idli cubes sautéed with mustard seeds, curry leaves, and gun powder spice.", isJainAvailable: true },
          { name: "Spice Dosa", description: "Crispy fermented crepe smeared with red chilli garlic paste and potato stuffing.", isPopular: true, isLiveCounter: true },
          { name: "Kaju Uttapam", description: "Thick savory rice pancake topped with toasted cashews and herbs.", isJainAvailable: true, isLiveCounter: true },
          { name: "Upma", description: "Traditional roasted semolina tempered with mustard seeds, ginger, and crunchy peanuts.", isJainAvailable: true },
          { name: "Kanda Pohe", description: "Flattened rice flakes tempered with turmeric, onions, roasted peanuts, and fresh lemon.", isPopular: true },
          { name: "Puri Bhaji", description: "Puffed golden whole wheat puris served with mildly spiced potato masala.", isPopular: true },
          { name: "Paneer Paratha", description: "Tawa-roasted flatbread stuffed with spiced grated fresh cottage cheese and herbs.", isJainAvailable: true, isPopular: true },
          { name: "Gobi Paratha", description: "Whole wheat griddled paratha stuffed with finely grated spiced cauliflower.", isJainAvailable: true },
          { name: "Matar Paratha", description: "Crisp flaky paratha filled with green peas, roasted cumin, and ginger mash.", isJainAvailable: true },
          { name: "Mix Veg Paratha", description: "Wholesome griddled flatbread packed with spiced seasonal farm vegetables.", isJainAvailable: true },
          { name: "Bread Butter & Toast", description: "Golden toasted bakery bread served with creamy salted table butter.", isJainAvailable: true },
          { name: "Grilled Veg Sandwich", description: "Triple-decker griddled bread layered with mint chutney, cucumber, and tomatoes.", isJainAvailable: true },
          { name: "Chutney Sandwich", description: "Light tea-time sandwich filled with zesty fresh mint, coriander, and coconut spread.", isJainAvailable: true },
          { name: "Aloo Paratha with Dahi", description: "Classic Punjabi potato stuffed flatbread served with chilled cultured curd.", isPopular: true },
          { name: "Puri Makhani Dal", description: "Crispy puffed puris paired with rich, slow-simmered buttery lentils.", isPopular: true },
          { name: "Dal Pakwan", description: "Sindhi speciality of crispy fried cumin flour crackers with spicy chana dal.", isPopular: true },
          { name: "Aloo Tuk with Meetha Sev", description: "Double-fried crisp flattened baby potatoes tossed in chaat masala.", isPopular: true },
          { name: "Koki Dahi", description: "Traditional crispy Sindhi spiced whole wheat flatbread served with sweet yoghurt.", isJainAvailable: true },
          { name: "Matar ki Kachori", description: "Crisp flaky pastry shells stuffed with spiced sweet green peas mixture.", isJainAvailable: true },
          { name: "Pyaz aur Besan ke Wade", description: "Crispy gram-flour and sliced onion fritters seasoned with ajwain.", isPopular: true },
          { name: "Pyaaz ki Kachori", description: "Authentic Rajasthani flaky pastry stuffed with caramelized spiced onions.", isPopular: true },
          { name: "Raj Kachori", description: "King-sized crispy puri loaded with sprouts, potatoes, sweet curd, and chutneys.", isPopular: true, isLiveCounter: true },
          { name: "Bread Pakoda", description: "Spiced potato stuffed bread sandwiches dipped in gram flour batter and fried golden.", isPopular: true },
          { name: "Chole Bhature", description: "Fluffy leavened fried bread served with spicy dark Punjabi chickpea masala.", isPopular: true, isLiveCounter: true },
          { name: "Khasta Kachori with Dum Aloo", description: "Crusty moong dal kachori served drowned in slow-cooked spiced potato gravy.", isPopular: true },
          { name: "Khakhra & Chutney", description: "Crisp wafer-thin Gujarati roasted whole wheat discs with pickles.", isJainAvailable: true },
          { name: "Fafda & Jalebi", description: "Traditional gram flour ribbon crackers served with raw papaya sambharo and hot jalebis.", isPopular: true, isLiveCounter: true },
          { name: "Surti Papdi", description: "Fresh steamed flat winter beans tossed with sesame, coconut, and green chillies.", isJainAvailable: true },
          { name: "Bhavnagari Gathiya", description: "Soft, melt-in-mouth spiced Gujarati chickpea flour snacks.", isJainAvailable: true },
          { name: "Masala Milk", description: "Warm sweetened milk infused with saffron, green cardamom, almond and pistachio slivers.", isJainAvailable: true, isPopular: true },
          { name: "Sooji Halwa (Rava Shira)", description: "Velvety roasted semolina pudding cooked in pure desi ghee with dry fruits.", isJainAvailable: true, isPopular: true },
          { name: "Thepla", description: "Spiced Gujarati flatbread made with fenugreek leaves, yoghurt, and whole wheat flour.", isJainAvailable: true, isPopular: true },
          { name: "Tomato Cheela (Eggless Omelette)", description: "Savory spiced chickpea and tomato batter pancake cooked crisp on tawa.", isJainAvailable: true, isLiveCounter: true }
        ]
      },
      {
        title: "Chutneys & Accompaniments",
        dishes: [
          { name: "Roasted Tomato Chutney", description: "Tangy spiced chutney made with fire-roasted tomatoes and garlic.", isPopular: true },
          { name: "Imli Chutney", description: "Classic sweet-and-sour tamarind relish simmered with dates and dry ginger.", isJainAvailable: true },
          { name: "Fresh Green Mint Chutney", description: "Refreshing blend of garden mint, fresh coriander, lemon, and green chillies.", isJainAvailable: true },
          { name: "Sweet Fruit Chutney", description: "Aromatic preserve of seasonal tropical fruits and warming spices.", isJainAvailable: true },
          { name: "Garlic Chutney", description: "Fiery Maharashtrian dry red chilli and garlic condiment.", isPopular: true },
          { name: "Hot Pepper Chutney", description: "Spicy tempered crushed pepper relish for evening savouries.", isJainAvailable: true },
          { name: "Peanut Coconut Chutney", description: "Creamy roasted peanut and fresh grated coconut dip tempered with mustard.", isJainAvailable: true },
          { name: "Mint Coconut Dip", description: "South Indian style coconut chutney infused with fresh garden mint.", isJainAvailable: true },
          { name: "Sweet Khajoor Imli Chutney", description: "Slow-reduced black dates and tamarind syrup spiced with roasted cumin.", isJainAvailable: true, isPopular: true }
        ]
      },
      {
        title: "Salads & Cold Sides",
        dishes: [
          { name: "Fresh Garden Green Salad", description: "Crisp sliced cucumbers, ripe tomatoes, carrots, and lemon wedges.", isJainAvailable: true },
          { name: "Seasonal Fresh Fruit Salad", description: "Medley of seasonal apples, pomegranate, sweet lime, and mint syrup.", isJainAvailable: true, isPopular: true },
          { name: "Sprouted Moong Salad", description: "Protein-rich tender mung sprouts tossed with lemon juice, chaat masala, and cilantro.", isJainAvailable: true },
          { name: "Kabuli Chana Salad", description: "Boiled white chickpeas tossed with onions, tomatoes, and tangy chaat seasoning.", isPopular: true },
          { name: "Sirka Onion Salad", description: "Pickled shallots steeped in vinegar, beet juice, and whole spices.", isPopular: true },
          { name: "Crispy Golden Corn Toss", description: "Sweet American corn kernels tossed with diced bell peppers and herbs.", isJainAvailable: true }
        ]
      },
      {
        title: "Papad & Crunch",
        dishes: [
          { name: "Roasted Udad Papad", description: "Crisp fire-roasted black gram papad seasoned with cracked black pepper.", isJainAvailable: true },
          { name: "Masala Papad", description: "Crisp fried papad piled high with diced onions, tomatoes, and zesty spices.", isPopular: true },
          { name: "Sabudana Papad", description: "Delicate translucent tapioca pearls crisped to perfection.", isJainAvailable: true }
        ]
      }
    ]
  },
  {
    slug: "starter",
    title: "Starters & Appetizers",
    group: "Indian",
    tagline: "Crisp tikkis, royal tandoori skewers, hot rolls, and interactive street food bites.",
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=1200&q=80",
    sections: [
      {
        title: "Hot & Crispy Appetizers",
        dishes: [
          { name: "Paneer Chilli Dry", description: "Indo-Chinese style crispy cottage cheese cubes wok-tossed with capsicum, spring onions, and green chillies.", isPopular: true },
          { name: "Paneer Red Pepper", description: "Soft malai paneer stir-fried with sweet roasted red bell peppers and Sichuan pepper.", isJainAvailable: true },
          { name: "Veg Manchurian Dry", description: "Minced vegetable dumplings fried crisp and tossed in savory soya-garlic glaze.", isPopular: true },
          { name: "Chow Chow Potato", description: "Crispy golden shredded potato nests tossed with spiced schezwan sauce.", isPopular: true },
          { name: "China Garden Crispy Toss", description: "Crispy fried baby vegetables tossed in sweet-and-spicy sesame sauce.", isPopular: true },
          { name: "Sesame China Toast", description: "Triangular bread bites topped with seasoned vegetables, coated with sesame and fried crisp.", isPopular: true },
          { name: "Crispy Cauliflower Lollipop", description: "Cauliflower florets marinated in spiced batter and fried with hot dip.", isJainAvailable: true },
          { name: "Mushroom Manchurian Dry", description: "Fresh button mushrooms fried crisp and tossed in ginger, garlic, and coriander sauce.", isPopular: true },
          { name: "Golden Fried Baby Corn", description: "Tender baby corn spears dipped in pepper batter and fried to golden crunch.", isJainAvailable: true, isPopular: true },
          { name: "Paneer Tikka Hariyali", description: "Cottage cheese cubes steeped in cilantro-mint marinade and roasted in tandoor.", isJainAvailable: true, isLiveCounter: true, isPopular: true },
          { name: "Paneer Malai Tikka", description: "Velvety cottage cheese marinated with cashew cream, cardamom, and gentle cheese glaze.", isJainAvailable: true, isLiveCounter: true, isPopular: true },
          { name: "Paneer Crunch", description: "Panko-crusted fresh paneer fingers served with tangy mint dip.", isJainAvailable: true, isPopular: true },
          { name: "Aloo Kurkure", description: "Crispy spiced potato bites coated with roasted cumin crumbs.", isPopular: true },
          { name: "Tandoori Baby Corn", description: "Whole baby corn skewers smoked with tandoori spices and char-grilled.", isJainAvailable: true, isLiveCounter: true },
          { name: "Tandoori Mushroom Skewers", description: "Juicy button mushrooms marinated in spiced yoghurt and roasted over charcoal.", isLiveCounter: true, isPopular: true },
          { name: "Paneer Pakoda", description: "Thick fresh paneer slices stuffed with mint chutney and fried in gram flour crust.", isJainAvailable: true, isPopular: true },
          { name: "Gobi Pakoda", description: "Spiced cauliflower florets coated with carom seeds batter and deep fried.", isJainAvailable: true },
          { name: "Classic Paneer Tikka", description: "Charcoal-grilled cottage cheese cubes with bell peppers and onions in tandoori masala.", isPopular: true, isLiveCounter: true },
          { name: "Potato Toast", description: "Crusty golden bread slices topped with cumin-spiced potato layer.", isPopular: true },
          { name: "American Veg Roll", description: "Crispy pastry rolls packed with sweet corn, cheese, and seasoned bell peppers.", isJainAvailable: true }
        ]
      },
      {
        title: "Tikkis & Cocktail Rolls",
        dishes: [
          { name: "Crispy Veg Spring Roll", description: "Thin pastry wraps filled with shredded stir-fried cabbage, carrots, and glass noodles.", isPopular: true },
          { name: "Veg Seekh Kabab", description: "Minced vegetable and cottage cheese kababs shaped onto skewers and tandoor-roasted.", isJainAvailable: true, isLiveCounter: true, isPopular: true },
          { name: "Harabhara Kabab", description: "Wholesome spinach, green peas, and fresh paneer patties shallow-fried in desi ghee.", isJainAvailable: true, isPopular: true },
          { name: "Green Peas Tikki", description: "Mashed sweet green peas flavored with dry mango powder and green chillies.", isJainAvailable: true },
          { name: "Corn Cheese Ball", description: "Crispy golden spheres filled with melted mozzarella, sweet corn, and herbs.", isJainAvailable: true, isPopular: true },
          { name: "Methi Kaju Roll", description: "Aromatic fresh fenugreek leaves and roasted cashew mash rolled in crisp outer casing.", isJainAvailable: true, isPopular: true },
          { name: "Veg Lollipop", description: "Spiced vegetable bites mounted on skewers with tangy dipping sauce.", isPopular: true },
          { name: "Pahari Aloo Tikki", description: "Rustic spiced potato patties griddled crisp with mountain herbs and mint glaze.", isPopular: true, isLiveCounter: true },
          { name: "Mini Cocktail Samosa", description: "Bite-sized flaky pastry cones stuffed with seasoned green peas and potatoes.", isPopular: true },
          { name: "Khaman Dhokla", description: "Juicy, spongy steamed gram flour cakes tempered with mustard seeds and fresh green chillies.", isJainAvailable: true, isPopular: true },
          { name: "Tiranga Dhokla", description: "Festive tri-color steamed savory cakes layered with spinach and saffron batters.", isJainAvailable: true },
          { name: "Fresh Khandvi", description: "Silky rolled gram flour and buttermilk pinwheels tempered with mustard and fresh coconut.", isJainAvailable: true, isPopular: true }
        ]
      },
      {
        title: "Chaat-side Bites",
        dishes: [
          { name: "Traditional Patra", description: "Steamed colocasia leaf rolls stuffed with spiced gram flour paste and tempered with sesame.", isJainAvailable: true, isPopular: true },
          { name: "Patti Samosa", description: "Thin crisp Lucknowi patti parcels stuffed with spiced peas or sweet corn.", isJainAvailable: true },
          { name: "Gold Coin", description: "Deep-fried bread rounds topped with sesame-crusted minced vegetable spread.", isPopular: true },
          { name: "Paneer Finger Fries", description: "Seasoned cottage cheese batons fried crisp and dusted with chaat masala.", isJainAvailable: true },
          { name: "Corn Pakoda", description: "Sweet corn kernels coated in spiced chickpea batter and fried golden.", isJainAvailable: true },
          { name: "Mini Veg Pizza", description: "Bite-sized oven-baked crusts loaded with homemade tomato coulis and diced vegetables.", isJainAvailable: true },
          { name: "Paneer Lollipop", description: "Skewered spiced paneer spheres glazed with barbecue sauce.", isJainAvailable: true, isLiveCounter: true }
        ]
      }
    ]
  },
  {
    slug: "welcome-drink",
    title: "Welcome Drinks & Mocktails",
    group: "Indian",
    tagline: "Chilled signature coolers, rich mango lassi, aromatic sherbets, and refreshing tropical punches.",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=1200&q=80",
    sections: [
      {
        title: "Signature Welcome Coolers",
        dishes: [
          { name: "Fresh Lime Soda", description: "Fizzy club soda freshly churned with lime juice, black salt, and optional sugar syrup.", isJainAvailable: true, isPopular: true },
          { name: "Alphonsa Mango Lassi", description: "Creamy churned yoghurt beverage enriched with Ratnagiri Alphonso mango pulp and saffron.", isJainAvailable: true, isPopular: true },
          { name: "Royal Jaljeera", description: "Refreshing digestive cooler with fresh mint, coriander, roasted cumin, dry mango, and boondi.", isJainAvailable: true, isPopular: true },
          { name: "Kairi Aam Panna", description: "Roasted raw mango nectar flavored with black salt, roasted cumin, and fresh mint leaves.", isJainAvailable: true, isPopular: true },
          { name: "Gulab Rose Sharbat", description: "Fragrant rose petal extract blended with chilled milk or mineral water and basil seeds.", isJainAvailable: true },
          { name: "Exotic Fruit Punch", description: "Vibrant blend of orange, pineapple, and guava juices topped with fresh diced seasonal fruits.", isJainAvailable: true, isPopular: true },
          { name: "Masala Chaas", description: "Light traditional spiced buttermilk churned with ginger, green chillies, and roasted cumin.", isJainAvailable: true, isPopular: true },
          { name: "Chilled Cold Coffee", description: "Rich brewed espresso blended with creamy milk, vanilla bean ice cream, and chocolate syrup.", isJainAvailable: true, isPopular: true },
          { name: "Kokum Solkadhi Cooler", description: "Traditional Konkani digestive prepared from tangy kokum extract and cooling coconut cream.", isJainAvailable: true, isPopular: true }
        ]
      }
    ]
  },
  {
    slug: "main-course",
    title: "Main Course Delicacies",
    group: "Indian",
    tagline: "Rich North Indian gravies, royal slow-simmered dals, fragrant biryanis, and tandoori breads.",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1200&q=80",
    sections: [
      {
        title: "Paneer Delicacies",
        dishes: [
          { name: "Paneer Makhanwala", description: "Succulent cottage cheese cubes simmered in velvety tomato, butter, and cashew nut gravy.", isJainAvailable: true, isPopular: true },
          { name: "Paneer Tikka Masala", description: "Tandoor-charred spiced paneer tikka tossed in robust onion-tomato masala gravy.", isPopular: true },
          { name: "Shahi Paneer", description: "Royal preparation of paneer in a creamy white cashew and melon seed sauce scented with cardamom.", isJainAvailable: true, isPopular: true },
          { name: "Palak Paneer", description: "Fresh cottage cheese cooked in silky blanched spinach puree tempered with garlic and cumin.", isJainAvailable: true, isPopular: true },
          { name: "Paneer Pasanda", description: "Stuffed paneer sandwiches coated in batter, fried crisp, and served in luscious royal korma.", isJainAvailable: true, isPopular: true },
          { name: "Paneer Kadai", description: "Cottage cheese batons stir-cooked with freshly ground coriander seeds, dry red chillies, and bell peppers.", isPopular: true },
          { name: "Paneer Bhurji", description: "Crumbled fresh cottage cheese tempered with tomatoes, green chillies, and fresh coriander.", isJainAvailable: true },
          { name: "Paneer Kofta", description: "Melt-in-mouth cottage cheese dumplings stuffed with raisins and nuts in smooth rich gravy.", isJainAvailable: true, isPopular: true },
          { name: "Hariyali Paneer Gravy (Green Gujarat)", description: "Paneer simmered in vibrant cilantro, mint, and green chili gravy with mild spices.", isJainAvailable: true, isPopular: true },
          { name: "Paneer Kaju Masala", description: "Rich celebration dish combining roasted whole cashew nuts and paneer cubes in amber gravy.", isJainAvailable: true, isPopular: true }
        ]
      },
      {
        title: "Vegetable Specials",
        dishes: [
          { name: "Malai Kofta", description: "Opulent dumplings of paneer and mawa served in creamy golden cashew gravy.", isJainAvailable: true, isPopular: true },
          { name: "Traditional Undhiyu", description: "Surati winter vegetable medley cooked with fenugreek dumplings, baby brinjals, and winter beans.", isJainAvailable: true, isPopular: true },
          { name: "Kaju Curry", description: "Whole roasted cashews cooked in mild, fragrant onion-tomato-cream gravy.", isJainAvailable: true, isPopular: true },
          { name: "Veg Kolhapuri", description: "Spicy mixed vegetable curry prepared with special Maharashtrian Kolhapuri roasted masala.", isPopular: true },
          { name: "Veg Jaipuri", description: "Assorted vegetables simmered in rich saffron gravy, topped with crushed papad.", isPopular: true },
          { name: "Veg Jalfrezi", description: "Stir-fried farm fresh vegetables and bell peppers cooked in sweet-and-tangy tomato sauce.", isJainAvailable: true },
          { name: "Veg Handi", description: "Seasonal garden vegetables cooked in traditional earthenware clay pot with aromatic spices.", isPopular: true },
          { name: "Aloo Gobi Masala", description: "Homestyle stir-fried potatoes and tender cauliflower florets flavored with ginger and cumin.", isPopular: true }
        ]
      },
      {
        title: "Rice & Biryani",
        dishes: [
          { name: "Royal Dum Biryani", description: "Layered basmati rice and marinated vegetables slow-cooked under dough seal with saffron and rose water.", isPopular: true, isLiveCounter: true },
          { name: "Kaju Kishmish Royal Pulav", description: "Long-grain basmati rice sautéed with whole cashews, golden raisins, and sweet whole spices.", isJainAvailable: true, isPopular: true },
          { name: "Tawa Biryani", description: "Street-style Mumbai tawa rice tossed with vegetables, pav bhaji butter, and spicy masala.", isPopular: true, isLiveCounter: true },
          { name: "Jeera Rice", description: "Aromatic basmati rice tempered with roasted cumin seeds and desi ghee.", isJainAvailable: true, isPopular: true },
          { name: "Kashmiri Pulav", description: "Fragrant sweet basmati rice garnished with pomegranate arils, fresh apple, and dry fruits.", isJainAvailable: true }
        ]
      },
      {
        title: "Dals & Kadhis",
        dishes: [
          { name: "Dal Makhani", description: "Black lentils and kidney beans slow-simmered overnight with churned butter and cream.", isPopular: true },
          { name: "Yellow Dal Tadka", description: "Split pigeon peas tempered with cumin, garlic, dry red chillies, and fresh coriander.", isJainAvailable: true, isPopular: true },
          { name: "Authentic Gujarati Kadhi", description: "Sweet and tangy buttermilk curry tempered with cinnamon, cloves, and curry leaves.", isJainAvailable: true, isPopular: true },
          { name: "Punjabi Pakoda Kadhi", description: "Gram flour yogurt curry loaded with soft onion and fenugreek dumplings.", isPopular: true },
          { name: "Kokam Kadhi", description: "Refreshing coastal curry infused with fresh kokum fruit extract and coconut milk.", isJainAvailable: true }
        ]
      },
      {
        title: "Indian Breads & Rotis",
        dishes: [
          { name: "Butter Naan", description: "Soft leavened tandoor-baked flatbread glazed with melted table butter.", isLiveCounter: true, isPopular: true },
          { name: "Garlic Naan", description: "Crisp tandoori naan topped with roasted minced garlic and fresh coriander.", isLiveCounter: true, isPopular: true },
          { name: "Tandoori Roti", description: "Whole wheat round flatbread baked crisp in clay oven.", isJainAvailable: true, isLiveCounter: true },
          { name: "Roomali Roti", description: "Ultra-thin handkerchief flatbread tossed in air and cooked over inverted tawa.", isLiveCounter: true, isPopular: true },
          { name: "Phulka", description: "Soft whole wheat balloon rotis smeared with pure desi ghee.", isJainAvailable: true },
          { name: "Bhatura", description: "Deep-fried fluffy leavened bread paired with spicy chana.", isLiveCounter: true, isPopular: true }
        ]
      }
    ]
  },
  {
    slug: "gujarati",
    title: "Gujarati Kathiyawadi & Surti",
    group: "Indian",
    tagline: "Authentic surti undhiyu, soft khaman dhoklas, royal farsan, and traditional kathiyawadi rasoi.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=80",
    sections: [
      {
        title: "Authentic Sabzi Specials",
        dishes: [
          { name: "Surti Undhiyu", description: "Classic winter celebration specialty of winter papdi, baby eggplants, purple yam, and muthiya.", isJainAvailable: true, isPopular: true },
          { name: "Rangooni Val", description: "Tender sprouted field beans cooked in sweet and tangy jaggery tamarind gravy.", isJainAvailable: true },
          { name: "Sev Tameta nu Shaak", description: "Tangy tomato curry tempered with mustard and topped with crispy chickpea sev.", isJainAvailable: true, isPopular: true },
          { name: "Bharela Ringna Ravaiya", description: "Baby eggplants stuffed with roasted peanut, sesame, and coriander masala.", isJainAvailable: true, isPopular: true },
          { name: "Dudhi Chana Dal", description: "Tender bottle gourd and split Bengal gram simmered in traditional Gujarati spices.", isJainAvailable: true },
          { name: "Baingan Bharta (Kathiyawadi)", description: "Smoky fire-roasted mashed eggplants tossed with green garlic and chillies.", isPopular: true }
        ]
      },
      {
        title: "Farsan & Snacks",
        dishes: [
          { name: "Surti Khaman", description: "Steamed fluffy gram flour cakes seasoned with mustard seeds, sesame, and fresh coriander.", isJainAvailable: true, isPopular: true },
          { name: "Fresh Khandvi Rolls", description: "Gram flour and buttermilk sheets tightly rolled and tempered with mustard seeds.", isJainAvailable: true, isPopular: true },
          { name: "Surti Ghugra", description: "Crisp half-moon pastry pockets stuffed with seasoned fresh green pigeon peas.", isJainAvailable: true, isPopular: true },
          { name: "Moong Dal Dhokla", description: "Healthy fermented yellow split moong batter steamed to golden perfection.", isJainAvailable: true },
          { name: "Sandwich Dhokla", description: "Double-layered steamed dhokla sandwiching spicy coriander-mint chutney.", isJainAvailable: true, isPopular: true },
          { name: "Methi Na Gota", description: "Golden fried fenugreek and gram flour fritters served with hot kadhi dip.", isPopular: true, isLiveCounter: true }
        ]
      }
    ]
  },
  {
    slug: "south-indian",
    title: "South Indian Specialities",
    group: "Indian",
    tagline: "Crisp golden dosas, fragrant sambhar, tangy tamarind curries, and payasam.",
    image: "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=1200&q=80",
    sections: [
      {
        title: "Live Dosa & Uttapam Counter",
        dishes: [
          { name: "Mysore Masala Dosa", description: "Crisp rice crepe smeared with fiery red garlic chutney and spiced potato filling.", isPopular: true, isLiveCounter: true },
          { name: "Cheese Mysore Dosa", description: "Crispy dosa layered with spicy Mysore paste, potato stuffing, and melted cheese.", isPopular: true, isLiveCounter: true },
          { name: "Spring Roll Dosa", description: "Fusion dosa stuffed with shredded crunchy stir-fried noodles and vegetables.", isPopular: true, isLiveCounter: true },
          { name: "Paneer Masala Dosa", description: "Paper-thin crepe packed with seasoned cottage cheese and onions.", isJainAvailable: true, isLiveCounter: true, isPopular: true },
          { name: "Onion Tomato Uttapam", description: "Thick fermented pancake griddled with chopped shallots, ripe tomatoes, and coriander.", isPopular: true, isLiveCounter: true },
          { name: "Sada Butter Dosa", description: "Classic golden fermented crepe roasted with generous dollops of butter.", isJainAvailable: true, isLiveCounter: true }
        ]
      },
      {
        title: "Rice & Curries",
        dishes: [
          { name: "Bisi Bele Bath", description: "Karnataka specialty of spicy rice, toor dal, and vegetables simmered with ghee.", isPopular: true },
          { name: "Thayir Sadam (Curd Rice)", description: "Comforting rice mixed with thick yoghurt, tempered with mustard, curry leaves, and pomegranate.", isJainAvailable: true, isPopular: true },
          { name: "Avial", description: "Kerela celebration dish of 13 vegetables cooked in coconut paste and sour curd.", isJainAvailable: true, isPopular: true },
          { name: "Lemon Rice", description: "Fluffy basmati rice tempered with lemon juice, turmeric, crunchy lentils, and peanuts.", isJainAvailable: true }
        ]
      }
    ]
  },
  {
    slug: "sweets",
    title: "Royal Sweets & Mithai",
    group: "Indian",
    tagline: "Slow-simmered desi ghee halwas, soft rasmalai, saffron jalebis, and festive basundi.",
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=1200&q=80",
    sections: [
      {
        title: "Signature Halwas & Mithai",
        dishes: [
          { name: "Butter Scotch Halwa", description: "Rich semolina halwa cooked in pure desi ghee with crunchy caramel butterscotch praline.", isJainAvailable: true, isPopular: true, extraPriceNote: "(Extra Rs.30/-)" },
          { name: "Akhrot Halwa", description: "Decadent slow-cooked crushed walnut pudding prepared with condensed milk and saffron.", isJainAvailable: true, isPopular: true, extraPriceNote: "(Extra Rs.30/-)" },
          { name: "Moong Dal Halwa", description: "Royal Rajasthani sweet prepared from split yellow moong slow-roasted in pure ghee.", isJainAvailable: true, isPopular: true },
          { name: "Gajar Ka Halwa", description: "Winter red carrots simmered in full-cream milk, mawa, cardamom, and dry fruits.", isJainAvailable: true, isPopular: true },
          { name: "Rabdi Jalebi", description: "Crisp pretzel-shaped fried spirals soaked in saffron syrup, topped with chilled thick rabdi.", isPopular: true, isLiveCounter: true },
          { name: "Kaju Katli", description: "Diamond-shaped rich fudge prepared with premium Cashew nuts and silver leaf.", isJainAvailable: true, isPopular: true },
          { name: "Kala Jamun", description: "Deep dark golden milk-solid dumplings soaked in warm rose-cardamom sugar syrup.", isJainAvailable: true, isPopular: true },
          { name: "Rasmalai", description: "Flattened cottage cheese patties soaked in saffron and cardamom scented sweetened milk.", isJainAvailable: true, isPopular: true },
          { name: "Sitaphal Basundi", description: "Slow-reduced milk pudding flavored with fresh custard apple pulp and nuts.", isJainAvailable: true, isPopular: true }
        ]
      }
    ]
  },
  {
    slug: "ice-cream",
    title: "Ice Cream & Kulfi Bar",
    group: "Indian",
    tagline: "Handcrafted natural kulfis, royal falooda counters, sundaes, and classic scoops.",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1200&q=80",
    sections: [
      {
        title: "Artisanal Kulfi & Falooda",
        dishes: [
          { name: "Royal Malai Kulfi", description: "Dense, slow-cooked whole milk kulfi on stick flavored with cardamom.", isJainAvailable: true, isPopular: true },
          { name: "Kesar Pista Kulfi", description: "Traditional frozen dairy treat enriched with pure Kashmiri saffron strands and pistachios.", isJainAvailable: true, isPopular: true },
          { name: "Fresh Sitaphal Kulfi", description: "Seasonal natural custard apple pulp blended into rich creamy kulfi.", isJainAvailable: true, isPopular: true },
          { name: "Kulfi Falooda", description: "Sliced kulfi served over chilled cornstarch vermicelli, sabja seeds, and rose syrup.", isPopular: true, isLiveCounter: true },
          { name: "Anjeer Badam Kulfi", description: "Rich dried fig and roasted almond kulfi with pure natural sweetness.", isJainAvailable: true }
        ]
      },
      {
        title: "Gourmet Ice Cream Scoops",
        dishes: [
          { name: "Roasted Almond Scoop", description: "Creamy vanilla ice cream loaded with toasted buttered Californian almond crunch.", isJainAvailable: true, isPopular: true },
          { name: "Kesar Pista Ice Cream", description: "Saffron-infused rich dairy ice cream with pistachios.", isJainAvailable: true },
          { name: "Belgian Chocolate", description: "Rich dark chocolate ice cream crafted with Dutch cocoa and chocolate chips.", isJainAvailable: true, isPopular: true }
        ]
      }
    ]
  },
  {
    slug: "chinese",
    title: "Indo-Chinese Wok Specialities",
    group: "Global",
    tagline: "Wok-tossed noodles, sizzling gravies, spicy schezwan delicacies, and comforting soups.",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1200&q=80",
    sections: [
      {
        title: "Noodles & Fried Rice",
        dishes: [
          { name: "Veg Hakka Noodles", description: "Wok-tossed noodles with shredded cabbage, carrots, bell peppers, and white pepper.", isPopular: true, isLiveCounter: true },
          { name: "Veg Schezwan Noodles", description: "Fiery spicy noodles stir-fried with house-made Schezwan chili paste and garlic.", isPopular: true, isLiveCounter: true },
          { name: "Veg American Chopsuey", description: "Crisp fried noodles topped with sweet and sour shredded vegetable gravy.", isPopular: true },
          { name: "Veg Fried Rice", description: "Steamed rice wok-tossed with finely minced seasonal vegetables and aromatic soy seasoning.", isJainAvailable: true, isPopular: true }
        ]
      },
      {
        title: "Gravies & Sizzlers",
        dishes: [
          { name: "Paneer Chilli Gravy", description: "Crisp paneer cubes in dark savory soya, chili, and spring onion gravy.", isPopular: true },
          { name: "Veg Manchurian Gravy", description: "Crisp vegetable balls immersed in glossy, pungent coriander-garlic sauce.", isPopular: true },
          { name: "Sweet Corn Veg Soup", description: "Comforting thick Chinese soup with crushed sweet corn kernels and delicate veggies.", isJainAvailable: true, isPopular: true },
          { name: "Hot & Sour Veg Soup", description: "Spicy and tangy soup flavored with dark soy, vinegar, and minced mushrooms.", isPopular: true }
        ]
      }
    ]
  },
  {
    slug: "continental",
    title: "Continental & European",
    group: "Global",
    tagline: "Gourmet salads, herb pilafs, baked platters, and wholesome vegetable casseroles.",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80",
    sections: [
      {
        title: "Salads & Starters",
        dishes: [
          { name: "Pineapple & Waldorf Salad", description: "Crisp celery, green apples, walnuts, and pineapple chunks in creamy dressing.", isJainAvailable: true, isPopular: true },
          { name: "Cheesy Corn & Potato Basket", description: "Tartlet shells filled with seasoned mashed potatoes, corn, and baked cheddar cheese.", isPopular: true },
          { name: "Pan Fried Herbed Mushrooms", description: "Button mushrooms sautéed in extra virgin olive oil with thyme, rosemary, and cracked pepper.", isPopular: true }
        ]
      },
      {
        title: "Main Course & Bakes",
        dishes: [
          { name: "Baked Vegetable Au Gratin", description: "Tender broccoli, corn, and carrots baked in silky white bechamel sauce under cheese crust.", isJainAvailable: true, isPopular: true },
          { name: "Saffron Herb Pilaf", description: "Aromatic long-grain rice cooked with thyme, bay leaves, and roasted almonds.", isJainAvailable: true, isPopular: true },
          { name: "Pesto Penne with Olive Oil", description: "Al dente penne pasta tossed in fresh basil, pine nut, and parmesan pesto.", isJainAvailable: true, isPopular: true }
        ]
      }
    ]
  },
  {
    slug: "thai",
    title: "Thai Fragrant Kitchen",
    group: "Global",
    tagline: "Fragrant coconut curries, pad thai noodles, kaffir lime aromas, and crispy satays.",
    image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=1200&q=80",
    sections: [
      {
        title: "Curries & Noodles",
        dishes: [
          { name: "Thai Green Curry with Jasmine Rice", description: "Aromatic coconut milk curry infused with green chilies, galangal, kaffir lime, and baby corn.", isJainAvailable: true, isPopular: true },
          { name: "Thai Red Curry with Tofu", description: "Rich coconut red chili curry with silken tofu, bamboo shoots, and sweet Thai basil.", isPopular: true },
          { name: "Vegetable Pad Thai", description: "Flat rice noodles stir-fried with tamarind sauce, bean sprouts, and crushed roasted peanuts.", isPopular: true, isLiveCounter: true },
          { name: "Paneer Satay with Peanut Dip", description: "Skewered marinated paneer strips char-grilled and served with rich peanut sauce.", isJainAvailable: true, isLiveCounter: true, isPopular: true }
        ]
      }
    ]
  },
  {
    slug: "italian",
    title: "Italian Artisan Kitchen",
    group: "Global",
    tagline: "Handcrafted pastas, stone-baked thin crust pizzas, aromatic pestos, and antipasti.",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1200&q=80",
    sections: [
      {
        title: "Pasta & Pizza Live Station",
        dishes: [
          { name: "Penne all'Arrabbiata", description: "Penne pasta tossed in spicy San Marzano tomato sauce, garlic, and fresh basil.", isPopular: true, isLiveCounter: true },
          { name: "Fettuccine Alfredo", description: "Silky fettuccine ribbons tossed in butter, rich cream, and aged parmesan glaze.", isJainAvailable: true, isPopular: true, isLiveCounter: true },
          { name: "Classic Italian Lasagna", description: "Layered sheets of fresh pasta with roasted vegetables, tomato ragu, and melted mozzarella.", isPopular: true },
          { name: "Stone-Baked Margherita Pizza", description: "Thin-crust pizza topped with San Marzano tomato coulis, fresh mozzarella, and basil leaves.", isJainAvailable: true, isPopular: true, isLiveCounter: true },
          { name: "Garlic Herb Bread with Cheese", description: "Toasted baguette slices rubbed with garlic butter and melted golden cheddar.", isPopular: true }
        ]
      }
    ]
  },
  {
    slug: "mexican",
    title: "Mexican Sizzler Fiesta",
    group: "Global",
    tagline: "Loaded nachos, fresh salsa bowls, bean enchiladas, and sizzler burritos.",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=1200&q=80",
    sections: [
      {
        title: "Tacos, Nachos & Sizzlers",
        dishes: [
          { name: "Cheesy Loaded Nachos", description: "Crisp corn tortilla chips smothered with warm queso, refried beans, pico de gallo, and sour cream.", isJainAvailable: true, isPopular: true, isLiveCounter: true },
          { name: "Bean & Cheese Burritos", description: "Warm flour tortillas wrapped around spiced refried pinto beans, Mexican rice, and cheese.", isPopular: true },
          { name: "Crispy Potato Quesadillas", description: "Toasted folded tortillas filled with seasoned potatoes, jalapeños, and melted cheese.", isPopular: true },
          { name: "Mexican Rice with Corn Salsa", description: "Zesty tomato-spiced rice cooked with black beans and topped with roasted corn salsa.", isJainAvailable: true, isPopular: true }
        ]
      }
    ]
  }
];

export function getMenuCategory(slug: string): MenuCategory | undefined {
  return menuCategories.find((cat) => cat.slug === slug);
}

export function getCategoryDishCount(category: MenuCategory): number {
  return category.sections.reduce((acc, sec) => acc + sec.dishes.length, 0);
}

export function getTotalDishCount(): number {
  return menuCategories.reduce((acc, cat) => acc + getCategoryDishCount(cat), 0);
}

export function getFeaturedDishes(): { name: string; category: string; description: string; image: string }[] {
  return [
    {
      name: "Paneer Tikka Hariyali",
      category: "Starters & Tandoor",
      description: "Charcoal-grilled cottage cheese cubes steeped in fresh mint, coriander, and royal spices.",
      image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Paneer Makhanwala",
      category: "Royal Main Course",
      description: "Velvety butter-cashew gravy with tender cottage cheese cubes, slow-cooked in copper vessels.",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Surti Undhiyu",
      category: "Traditional Gujarati",
      description: "Legendary winter vegetable delicacy cooked with methi muthiya, baby brinjals, and winter beans.",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Dal Makhani",
      category: "Slow-Cooked Specials",
      description: "Black lentils slow-cooked for 18 hours with hand-churned butter and cream.",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Butter Scotch Halwa",
      category: "Signature Halwas",
      description: "Pure desi ghee semolina halwa studded with crunchy golden butterscotch praline.",
      image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Royal Malai Kulfi",
      category: "Desserts & Kulfi",
      description: "Rich, slow-reduced whole milk kulfi flavored with green cardamom and saffron.",
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80",
    },
  ];
}
