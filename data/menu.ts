export interface MenuSection {
  title: string;
  dishes: string[];
}

export interface MenuCategory {
  slug: string;
  title: string;
  group: "Indian" | "International";
  tagline: string;
  image: string;
  sections: MenuSection[];
}

// PLACEHOLDER: confirm welcome-drink list with client
export const menuCategories: MenuCategory[] = [
  {
    slug: "breakfast",
    title: "Breakfast",
    group: "Indian",
    tagline: "Authentic morning feasts with hot savouries, parathas, and fresh chutneys",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1200&q=80",
    sections: [
      {
        title: "Hot Breakfast",
        dishes: [
          "Idli", "Mendu Wada", "Idli Fry", "Spice Dosa", "Kaju Uttapam", "Upma", "Kanda Pohe",
          "Puri Bhaji", "Paneer Paratha", "Gobi Paratha", "Matar Paratha", "Mix Veg Paratha",
          "Bread Butter", "Bread Sandwich", "Chutney Sandwich", "Aloo Paratha with Dahi",
          "Puri Makhani Dal", "Dal Pakwan", "Aloo Tuk with Meetha Sev", "Koki Dahi",
          "Matar ki Kachori", "Pyaz aur Besan ke Wade", "Pyaaz ki Kachori", "Raj Kachori",
          "Bread Pakoda", "Chole Bhature", "Khasta Kachori with Dum Aloo", "Khakhra", "Fafda",
          "Surti Papdi", "Bhavnagari", "Gathiya", "Masala Milk", "Sooji Halwa (Rava Shira)",
          "Thepla", "Tomato Omelette"
        ]
      },
      {
        title: "Chutney",
        dishes: [
          "Tomato", "Imli", "Green", "Fruit", "Sweet", "Garlic", "Hot Pepper", "Onion",
          "Peanut", "Mint Coconut", "Carrot", "Khajoor", "Mint", "Tomato Garlic", "Mango", "Khajur ki"
        ]
      },
      {
        title: "Salad",
        dishes: [
          "Green", "Fruit", "Pasta", "Chana", "Rajma", "Gold", "Macaroni", "Sirka Onion",
          "Wonton", "Coconut", "Kabuli Chana", "Aloo", "Sprout Moong", "Russian", "Simple"
        ]
      },
      {
        title: "Achar & Sauce",
        dishes: [
          "Mix Achar", "Chilli Achar", "Mango Achar", "Mooli Laccha", "Schezwan Sauce",
          "Garlic Sauce", "Tomato Sauce"
        ]
      },
      {
        title: "Papad",
        dishes: [
          "Fry Papad", "Roasted Papad", "Masala Papad", "Sabudana Papad", "Potato Papad", "Mix Fry Papad"
        ]
      }
    ]
  },
  {
    slug: "starter",
    title: "Starter",
    group: "Indian",
    tagline: "Crisp tikkis, royal tandoori skewers, and delightful party bites",
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=1200&q=80",
    sections: [
      {
        title: "Hot & Crispy",
        dishes: [
          "Paneer Chilli Dry", "Paneer Red Pepper", "Veg Manchurian Dry", "Chow Chow Potato",
          "China Garden", "China Toast", "Flower Lollipop", "Mushroom Manchurian Dry",
          "Golden Fry Baby Corn", "Paneer Tikka Hariyali", "Paneer Malai Tikka", "Paneer Crunch",
          "Aloo Kurkure", "Tandoori Baby Corn", "Tandoori Mushroom", "Paneer Pakoda",
          "Gobi Pakoda", "Paneer Tikka", "Potato Toast", "American Roll"
        ]
      },
      {
        title: "Tikkis & Rolls",
        dishes: [
          "Veg Spring Roll", "Veg Seekh Kabab", "Harabhara Kabab", "Green Peas Tikki",
          "Corn Tikki", "Cheese Ball", "Mushroom Golden", "Methi Kaju Roll", "Corn Cheese",
          "Veg Lollipop", "Pahari Aloo", "Aloo Tikki", "Hari Tikki", "Mini Samosa",
          "Veg Chilli Dry", "Veg Crispy", "Khaman Dhokla", "Dhokla", "Tiranga Dhokla", "Khandvi"
        ]
      },
      {
        title: "Chaat-side Bites",
        dishes: [
          "Patra", "Patti Samosa", "Gold Coin", "Paneer Finger", "Paneer Kurkure",
          "Dry Fruit Fry", "Corn Pakoda", "Bread Pizza", "Mini Pizza", "Veg Sandwich", "Paneer Lollipop"
        ]
      }
    ]
  },
  {
    slug: "welcome-drink",
    title: "Welcome Drinks",
    group: "Indian",
    tagline: "Refreshing signature mocktails, chilled coolers, and traditional sherbets",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=1200&q=80",
    sections: [
      {
        title: "Welcome Drinks",
        dishes: [
          "Fresh Lime Soda", "Mango Lassi", "Jaljeera", "Aam Panna",
          "Rose Sharbat", "Fruit Punch", "Masala Chaas", "Cold Coffee"
        ]
      }
    ]
  },
  {
    slug: "main-course",
    title: "Main Course",
    group: "Indian",
    tagline: "Rich North Indian gravies, slow-cooked royal dals, fragrant biryanis & fresh breads",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1200&q=80",
    sections: [
      {
        title: "Paneer Delicacies",
        dishes: [
          "Green Gujarat", "Paneer Tiranga with Tava", "Paneer Kulchand", "Paneer Makhanwala",
          "Shahi Paneer", "Paneer Lahsuniya", "Paneer Tiranga", "Paneer Dopyaza", "Paneer Korma",
          "Palak Paneer", "Paneer Pasanda", "Paneer Kadai", "Paneer Tikka Masala", "Paneer Bhurji",
          "Paneer Kofta", "Paneer Mushroom Masala", "Paneer Matar", "Paneer Chana", "Aloo Matar",
          "Paneer Kaju Masala", "Veg Makhanwala"
        ]
      },
      {
        title: "Vegetable Specials",
        dishes: [
          "Veg Hyderabadi", "Veg Kolhapuri", "Veg Matar Strawberry", "Kaju Curry", "Undhiyu",
          "Veg Tiranga", "Kaju Masala", "Veg Jaipuri", "Veg Jalfrezi", "Veg Handi", "Veg Kadai",
          "Veg Kofta", "Malai Kofta", "Aloo Methi Dry", "Aloo Gobi Masala", "Shimla Masala Dum",
          "Aloo Kashmiri", "Bhendi Masala", "Rajma", "Bhendi Fry", "Aloo Bhendi"
        ]
      },
      {
        title: "Home-style & Dum Specials",
        dishes: [
          "Tomato Bharta", "Stuffed Tomato", "Dum Aloo Punjabi", "Dum Aloo Kashmiri",
          "Dum Aloo Hyderabadi", "Mushroom Masala", "Baby Corn Mushroom Masala", "Aloo Palak",
          "Aloo Jeera", "Navratan Korma", "Malai Methi Matar", "Chhole Punjabi", "Veg Korma",
          "Mix Bhaji", "Sarson ka Saag", "Chana Tendli", "Chana Suran", "Mensi Kai",
          "Batata Sukhi Bhaji", "Aloo Gobi", "Wangi Batata"
        ]
      },
      {
        title: "Roti & Breads",
        dishes: [
          "Makai Roti", "Tandoori Roti", "Green Puri", "Puri", "Mini Paratha", "Missi Roti",
          "Chapati", "Paneer Lachedar", "Paratha", "Phulka", "Rumali Roti", "Kulcha",
          "Methi Paratha", "Stuffed Paratha", "Baby Corn Kulcha", "Batura"
        ]
      },
      {
        title: "Rice & Biryani",
        dishes: [
          "Tawa Biryani", "Peas Pulav with Kaju", "Kismis", "Veg Pulav", "Veg Biryani",
          "Ghee Pulav", "Kadai Pulav", "Kashmiri Pulav", "Navratna Pulav", "Rajarani Pulav",
          "Dum Pulav", "Green Pulav", "Jeera Pulav", "Plain Rice", "Jeera Rice"
        ]
      },
      {
        title: "Dal & Kadhi",
        dishes: [
          "Dal Fry", "Dal Tadka", "Dal Kolhapuri", "Dal Makhani", "Kali Dal", "Pili Dal",
          "Dal Panchrangi", "Plain Dal", "Godavari", "Butter Dal Fry", "Gujarati Kadhi",
          "Punjabi Kadhi", "Pakoda Kadhi", "Sindhi Kadhi", "Solkadhi", "Kokam Kadhi",
          "Rasam", "Kala Vatana", "Usal", "Sambar"
        ]
      }
    ]
  },
  {
    slug: "gujarati",
    title: "Gujarati",
    group: "Indian",
    tagline: "Authentic kathiyawadi & surti delicacies, soft dhoklas, and royal farsan",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=80",
    sections: [
      {
        title: "Sabzi",
        dishes: [
          "Rangooni Val", "Green Gujarat", "Green Sawar", "Rajma Masala", "Rajma Kofta",
          "Italian Chaat", "Mix Kathol", "Val Dal Kaju Kishmish", "Mix Undhiyu", "Surti Undhiyu",
          "Green Undhiyu", "Turiya Matar", "Malai Marble", "Bharela Sabji", "Turiya Patra Draksh",
          "Turiya Patra Khandvi", "Stuffed Bhendi", "Stuffed Parwal", "Dudhi Chana Dal",
          "Baingan Bharta", "Banana Kofta", "Matar Fancy Muthiya", "Rotla Pizza", "Bhendi Sombhariya"
        ]
      },
      {
        title: "Dhokla & Khandvi",
        dishes: [
          "Khaman Dhokla", "Damni Dhokli", "Russian Dhokla", "Moong Dal Dhokla", "Wati Dhokla",
          "Sandwich Dhokla", "Tiranga Dhokla", "Kesar Pista Dhokla", "Chutney Dhokla",
          "White Dhokla", "Paneeri Dhokla", "Green Dhokla", "Veg Dhokla", "American Dhokla",
          "Khandvi", "Stuffed Khandvi", "Green Pearl", "Falafel", "Patti Roti", "Patra"
        ]
      },
      {
        title: "Farsan & Snacks",
        dishes: [
          "Gold Coin", "Kachori", "Munmun Kachori", "Ghugra", "Patti Biscuit Samosa",
          "Patti Spring Roll", "Chilla Kachori", "Gulab Kachori", "Makai Kachori",
          "Potla Kachori", "Chandra Kala", "Baby Chaat", "Banana Biscuit", "Malai Roll",
          "Kulfi Coin", "Bread Pizza", "Batata Reengna Tomato", "Turiya Patra Vatana Dhokli", "Malai Delight"
        ]
      }
    ]
  },
  {
    slug: "south-indian",
    title: "South Indian",
    group: "Indian",
    tagline: "Crisp dosas, fragrant sambhar, tamarind curries, and traditional payasam",
    image: "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=1200&q=80",
    sections: [
      {
        title: "Rice & Curries",
        dishes: [
          "Avial", "Poriyal", "Khutkari", "Rasam", "Sambhar", "Curd Rice", "Bisi Bele Rice",
          "Pulav Rice", "Lemon Rice", "Coconut Rice", "Bagala Rice", "Veg Rice"
        ]
      },
      {
        title: "Sweets & Snacks",
        dishes: [
          "Pineapple Sheera", "Payasam (Rice & Seviyan)", "Pal Payasam", "Upma", "Kadhi Idli",
          "Plain Idli", "Kanchipuram Idli", "Rasam Wada", "Mendu Wada", "Dal Wada"
        ]
      },
      {
        title: "Dosa & Uttapam",
        dishes: [
          "Sada Dosa", "Masala Dosa", "Mysore Masala", "Cheese Mysore", "Cheese Dosa",
          "Spring Roll Dosa", "Paneer Mysore", "Paneer Masala", "Uttapam with Chutney",
          "Onion Uttapam", "Tomato Uttapam", "Sandwich Uttapam", "Pizza Sandwich Uttapam", "Dahi Bhel"
        ]
      }
    ]
  },
  {
    slug: "sweets",
    title: "Sweets",
    group: "Indian",
    tagline: "Royal Indian mithai, warm rich halwas, and chilled festival basundis",
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=1200&q=80",
    sections: [
      {
        title: "Halwa & Mithai",
        dishes: [
          "Butter Scotch Halwa (Extra Rs.30/-)", "Chikoo Halwa", "Chhena Toast", "Mava Barfi",
          "Akhrot Halwa (Extra Rs.30/-)", "Rabdi Jalebi", "Kaju Roll", "Kaju Katli",
          "Mohan Thal", "Malai Sandwich", "Chamcham"
        ]
      },
      {
        title: "Classics",
        dishes: [
          "Kala Jamun", "Rajbhog", "Motichur Ladoo", "Lapsi", "Sevai Kheer", "Jalebi",
          "Kesari Jalebi", "Tandul Kheer", "Gulab Jamun", "Gajar Halwa", "Dudhi Halwa"
        ]
      },
      {
        title: "Creamy & Festive",
        dishes: [
          "Shrikhand", "Amrakhand", "Rasgulla", "Plain Basundi", "Angoor Basundi",
          "Rasmalai", "Moong Dal Halwa", "Shira", "Rabdi", "Aamras", "Sitaphal Basundi",
          "Malpua", "Strawberry Basundi"
        ]
      }
    ]
  },
  {
    slug: "ice-cream",
    title: "Ice Cream & Kulfi",
    group: "Indian",
    tagline: "Handcrafted natural kulfis, sundaes, and classic ice cream scoops",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1200&q=80",
    sections: [
      {
        title: "Ice Creams",
        dishes: [
          "Rich Vanilla", "Strawberry", "2×1 (Vanilla Strawberry)", "2×1 (Vanilla Pista)",
          "Kesar Pista", "Anjeer Shake", "Ripple Vanilla (Strawberry + Chocolate)", "Tutti Frutti",
          "Butter Scotch", "Kaju Draksh", "Pista Cream", "Chocolate", "Mango",
          "Anjeer Badam", "Shahi Gulab", "Roasted Almond", "Choco Chips"
        ]
      },
      {
        title: "Kulfi Specialties",
        dishes: [
          "Malai Kulfi", "Pista Kulfi", "Kesar Kulfi", "Anjeer Kulfi",
          "Fresh Sitaphal Kulfi", "Kulfi Falooda", "Kulfi"
        ]
      }
    ]
  },
  {
    slug: "chinese",
    title: "Chinese",
    group: "International",
    tagline: "Wok-tossed noodles, Indo-Chinese sizzling gravies, and comforting warm soups",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1200&q=80",
    sections: [
      {
        title: "Noodles & Rice",
        dishes: [
          "Veg Hakka Noodles", "Veg Schezwan Noodles", "Veg Mix Noodles", "Veg American Chopsuey",
          "Veg Garlic Noodles", "Veg Ginger Noodles", "Veg Fried Rice", "Veg Mix Rice",
          "Veg American Rice", "Veg Ginger Rice"
        ]
      },
      {
        title: "Gravies & Dry",
        dishes: [
          "Veg Manchurian", "Veg Mix Manchurian", "Veg Ball Schezwan Sauce", "Schezwan Manchurian",
          "Paneer Manchurian", "Paneer Chilli", "Paneer Schezwan", "Paneer in Green Sauce",
          "Paneer Garlic", "Veg Finger Green Sauce", "Veg Finger Schezwan Sauce", "Veg Finger Manchurian",
          "Veg Finger Chilli", "Ladies Finger Gravy", "Ladies Finger Green Sauce", "Mongolian Hot Pot Tawa",
          "Desi Veg Tawa", "Veg Hong Kong Style", "Mushroom Chilli", "Mushroom Garlic Sauce",
          "Mushroom Green Sauce", "Mushroom Schezwan Sauce", "Mushroom", "Punjabi in Gravy"
        ]
      },
      {
        title: "Soups",
        dishes: [
          "Sweet Corn Veg Soup", "Hot & Sour Veg Soup", "Veg Clear Soup", "Veg Manchow Soup",
          "Cream of Veg Soup", "Tomato Soup", "Cream of Mushroom", "Cream of Tomato", "Mulligatawny"
        ]
      }
    ]
  },
  {
    slug: "continental",
    title: "Continental",
    group: "International",
    tagline: "Gourmet European salads, herb pilafs, baked platters, and wholesome stews",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80",
    sections: [
      {
        title: "Salads",
        dishes: [
          "Pineapple & Lettuce Salad", "Spinach Salad with Almonds", "Cucumber, Tomato & Cottage Cheese Salad",
          "Greek Potato with Almond Dip", "Pineapple & Waldorf Salad", "Tomato & Mint Salad with Pomegranate",
          "Beet & Cabbage Salad", "Chickpea Salad with Lemon & Mint Herbs", "Apple Slaw",
          "Bean Sprout & Fruit Salad", "Apple & Cucumber Salad", "Coleslaw with Cottage Cheese",
          "Bread Salad with Roasted Onions", "Mushroom & Cheese Salad",
          "Bean Salad with Spinach, Olives & Sun-dried Tomatoes", "Spicy Tomato, Pepper, Cucumber, Mint & Parsley Salad"
        ]
      },
      {
        title: "Starter",
        dishes: [
          "Cheesy Corn & Potato Basket", "Potato Samosa Phyllo Triangles", "Baby Corn Satay",
          "Crispy Spinach Dumpling", "Macaroni with Chickpeas", "Pan Fried Mushrooms",
          "Potato Omelette", "Minted Mushrooms", "Rainbow Shashlik", "Corn & Cheese Balls"
        ]
      },
      {
        title: "Rice & Pilaf",
        dishes: [
          "Saffron Pilaf", "Rice with Green Lentils, Raisins & Dates", "Sesame Cilantro Rice",
          "Green Rice", "Herb Spring Onion Rice", "Caribbean Rice", "Corn & Coriander Rice",
          "Carrot Tomato Pulao", "Mushroom Pulao", "Almond Rice with Mixed Vegetables"
        ]
      },
      {
        title: "Main Course",
        dishes: [
          "Mushroom Curry", "Rice Pilaf with Almonds & Raisins", "Thai Curry", "Spicy & Sour Mushroom",
          "Panang Tofu Curry", "Lime Noodles with Vegetables", "Basil & Sesame", "Spicy Tofu with Red Peppers & Peanuts",
          "Singapore Noodles", "Ginger & Curry Leaf Curry", "Pasta al Pomodoro", "Pumpkin Potato Curry",
          "Baked Mixed Vegetables", "Potato Cheese Balls in Spinach Gravy", "Grilled Salt & Pepper Tofu",
          "Middle Eastern Veg Stew", "Pesto Pasta with Olive Oil"
        ]
      }
    ]
  },
  {
    slug: "thai",
    title: "Thai",
    group: "International",
    tagline: "Fragrant coconut curries, pad thai noodles, kaffir lime aromas & crisp satays",
    image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=1200&q=80",
    sections: [
      {
        title: "Salads",
        dishes: [
          "Potato & Pasta Salad", "Green Papaya Salad", "Cucumber Relish", "Hot & Sour Noodle Veg Salad",
          "Mongolian Bean Salad", "Bean Sprout Yam", "Red & Green Salad with Peanut Dressing"
        ]
      },
      {
        title: "Starter",
        dishes: [
          "Mushroom Balls", "Fried Potatoes with Ginger Mushroom", "Paneer, Mushroom & Capsicum Satay",
          "Sweet Corn Cutlets", "Chilli Corn Fritter", "Golden Garlic Mushrooms", "Thai Spring Rolls"
        ]
      },
      {
        title: "Main Course Curries",
        dishes: [
          "Thai Green Curry", "Thai Red Curry", "Thai Veg Curry", "Vegetables in Soya Sauce",
          "Saucy Indonesian Potatoes", "Red Thai Curry with Vegetable & Tofu", "Coconut Curried Vegetables",
          "Yellow Thai Veg Curry", "Crispy Vegetables", "Curry of Tofu, Mushrooms & Vegetables",
          "Peanut Sesame Vegetables", "Peppered Cashew Stir Fry", "Peppered Mushrooms, Paneer & Cashew",
          "Thai Style Veg Curry", "Thai Massaman Curry", "Mongolian Tofu", "Mongolian Stir Fry",
          "Drumstick Brinjal Tamarind Curry", "Green Garlic Mashed Curry", "Potato Spice Curry", "Tomato Spice Curry"
        ]
      },
      {
        title: "Rice & Noodles",
        dishes: [
          "Chatuchak Fried Rice", "Coconut Rice Noodles", "Crispy Noodles", "Green Rice",
          "Massaman Curried Rice", "Thai Fried Noodles", "Rice Noodles with Vegetables",
          "Thai Fried Rice", "Thai Layered Rice", "Thai Pineapple Rice", "Thai Stir-Fried Noodles with Tofu",
          "Special Veg Fried Rice"
        ]
      }
    ]
  },
  {
    slug: "italian",
    title: "Italian",
    group: "International",
    tagline: "Handcrafted pastas, stone-baked pizzas, aromatic pestos, and antipasti salads",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1200&q=80",
    sections: [
      {
        title: "Salad",
        dishes: [
          "Mushroom & Tomato Salad", "Feta Cheese Salad", "Macaroni Salad", "Bean & Walnut Salad",
          "Caesar Salad", "Coleslaw", "Sesame Noodle Salad", "White Bean Salad",
          "Italian Pasta Salad", "Mozzarella & Tomato Salad", "Spaghetti with Potato Salad",
          "Italian Potato Salad", "Cold Pasta Salad", "Pasta Salad with Italian Dressing",
          "Pasta Salad with Lemon & Peas", "Spaghetti with Pesto & Tomato Mozzarella Salad"
        ]
      },
      {
        title: "Starter",
        dishes: [
          "Baked Mushrooms", "Cheese Croutons", "Garlic Bread", "Chickpea Stuffed Mushroom",
          "Pizza with Mushroom & Cheese"
        ]
      },
      {
        title: "Main Course",
        dishes: [
          "Sauteed Veg", "Classic Italian Lasagna", "Spaghetti", "Herb Butter Stuffed Mushrooms",
          "Baked Macaroni & Cheese", "Pasta with Tomato & Cream", "Mushroom & Spinach Cream Sauce",
          "Italian Garlic Mushroom in Olive Oil", "Spaghetti Bolognese", "Fagioli with Spinach"
        ]
      },
      {
        title: "Pasta",
        dishes: [
          "Red Sauce Pasta", "White Sauce Pasta", "Green Sauce Pasta", "Sun-dried Tomato & Walnut Penne",
          "Bean Pasta with Creamy Spinach Sauce", "Creamy Garlic Penne", "Pasta with Mushrooms & Peas",
          "Pasta with Tomato & Red Pepper", "Pasta with Cauliflower", "Tomato & Mozzarella Pasta",
          "Penne with Tomato, Mushroom & Olives", "Peppery Pasta", "Cheese Veg Pasta",
          "Tomato & Capsicum Pasta", "Cheese & Tomato Pasta", "Ricotta & Olive Pasta", "Spring Green Pasta"
        ]
      }
    ]
  },
  {
    slug: "mexican",
    title: "Mexican",
    group: "International",
    tagline: "Loaded nachos, salsa bowls, sizzler burritos, and spiced bean enchiladas",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=1200&q=80",
    sections: [
      {
        title: "Salads & Salsas",
        dishes: [
          "Sweet Corn & Kidney Bean Salad", "Mexican Bean & Cheese Salad", "Mexican Salad Bowl",
          "Mixed Vegetable Salad", "Mexican Rajma Salad", "Mexican Carrot Salad",
          "Mexican Chickpea Salad", "Spicy Mexican Salad", "Black Bean & Corn Salsa",
          "Colourful Black Bean Salad"
        ]
      },
      {
        title: "Starter",
        dishes: [
          "Cheesy Nachos", "Crepes Mexicana", "Crispy Fried Cauliflower", "Crispy Potato Fingers",
          "Mexican Bread Roll", "Nachos", "Mexican Fingers", "Mexican Chaat",
          "Chatpata Canape Chaat", "Mexican Cauliflower Fritters"
        ]
      },
      {
        title: "Main Course",
        dishes: [
          "Nacho Stir Fry", "Roasted Corn Salsa", "Macaroni Supreme", "Spicy Peanut Curry",
          "Mushroom Stir Fry", "Spicy Vegetarian Chilli", "Mushroom Fajitas", "Tofu Tacos",
          "Tomato, Spinach & Bean Burritos", "Portobello Mushroom Caps & Veggies"
        ]
      },
      {
        title: "Rice",
        dishes: [
          "Cheesy Pepper Rice", "Coconut Curry Fried Rice", "Mexican Fried Rice",
          "Mexican Rice", "Spanish Rice", "Mushroom Risotto"
        ]
      }
    ]
  }
];

export function getMenuCategory(slug: string): MenuCategory | undefined {
  return menuCategories.find((cat) => cat.slug === slug);
}

export function getAllDishes(): { name: string; category: string; slug: string }[] {
  const result: { name: string; category: string; slug: string }[] = [];
  menuCategories.forEach((cat) => {
    cat.sections.forEach((sec) => {
      sec.dishes.forEach((dish) => {
        result.push({ name: dish, category: cat.title, slug: cat.slug });
      });
    });
  });
  return result;
}
