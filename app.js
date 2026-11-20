const categories = ['All', 'Karnataka Specials', 'Natti Chicken', 'Biryani', 'Kebabs', 'Fish', 'Mutton', 'Starters', 'Vegetarian', 'Rice & Combos', 'Water Bottle', 'Cool Drinks'];
const imageSet = {
  biryani: 'https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&w=680&q=78',
  chicken: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=680&q=78',
  curry: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=680&q=78',
  fry: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=680&q=78',
  fish: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=680&q=78',
  veg: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=680&q=78',
  rice: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=680&q=78',
  drink: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?auto=format&fit=crop&w=680&q=78'
};
const seedMenu = [
  ['Natti Style Chicken Biryani','Natti Chicken','Country chicken, fragrant rice and a deep Karnataka spice blend.','biryani',269,'nonveg',['Biryani']],
  ['Natti Style Dum Biryani','Natti Chicken','Sealed-pot dum, slow-cooked with whole spices.','biryani',289,'nonveg',['Biryani']],
  ['Natti Chicken Dum Biryani','Natti Chicken','Our signature country chicken layered with aromatic rice.','biryani',299,'nonveg',['Biryani']],
  ['Natti Style Chicken Dum Biryani','Biryani','Country chicken and fragrant rice, sealed and slow-cooked in dum.','biryani',309,'nonveg',[]],
  ['Country Chicken Fry','Natti Chicken','Tender country chicken tossed with curry leaves and chilli.','fry',249,'nonveg',[]],
  ['Natti Chicken Curry','Natti Chicken','A homestyle Karnataka country chicken curry with freshly ground spices.','curry',259,'nonveg',[]],
  ['Natti Chicken Roast','Natti Chicken','Pan-roasted with onion, pepper and a fragrant spice mix.','fry',269,'nonveg',[]],
  ['Natti Chicken Pepper Fry','Natti Chicken','Cracked pepper, green chilli and plenty of curry leaves.','fry',249,'nonveg',[]],
  ['Natti Chicken Masala','Natti Chicken','A rich, slow-simmered masala built from toasted spices.','curry',259,'nonveg',[]],
  ['Natti Chicken 65','Natti Chicken','Crisp bites, red chilli, lemon and fresh curry leaves.','fry',219,'nonveg',['Starters']],
  ['Natti Chicken Saaru','Natti Chicken','A warming country chicken saaru with roasted spices.','curry',269,'nonveg',[]],
  ['Natti Style Special Pot Biryani','Biryani','A generous pot of dum rice, chicken and house masala.','biryani',329,'nonveg',[]],
  ['Natti Style Family Pack Biryani','Biryani','A shareable family-sized biryani, made fresh to order.','biryani',699,'nonveg',[]],
  ['Chicken Fry Piece Biryani','Biryani','Fragrant rice topped with crisp, spice-rubbed chicken.','biryani',279,'nonveg',[]],
  ['Chicken Boneless Biryani','Biryani','Boneless chicken tucked into aromatic dum rice.','biryani',259,'nonveg',[]],
  ['Natti Egg Biryani','Biryani','Egg and slow-cooked rice with warm Karnataka seasoning.','biryani',199,'nonveg',[]],
  ['Mangalorean Fish Fry','Karnataka Specials','Fish marinated with chilli, lemon and a coastal spice blend.','fish',249,'nonveg',[]],
  ['Spicy Fish Fry','Fish','A bold chilli crust, crisp edges and a squeeze of lime.','fish',249,'nonveg',[]],
  ['Fish Tawa Fry','Fish','Shallow-fried on the tawa with aromatic masala.','fish',259,'nonveg',[]],
  ['Fish Masala','Fish','Tender fish in a bright, slow-simmered onion masala.','curry',269,'nonveg',[]],
  ['Fish Curry','Fish','A comforting Karnataka-style fish curry with a tangy finish.','curry',259,'nonveg',[]],
  ['Fish Pulusu','Fish','Traditional tamarind fish stew with plenty of flavour.','curry',279,'nonveg',[]],
  ['Apollo Fish','Fish','Crisp fish tossed with chilli, herbs and a little zing.','fish',269,'nonveg',['Starters']],
  ['Coorgi Mutton Curry','Karnataka Specials','Slow-cooked mutton in a rich, deeply spiced gravy.','curry',329,'nonveg',[]],
  ['Natti Style Mutton Biryani','Mutton','Tender mutton and fragrant rice, finished with dum.','biryani',349,'nonveg',['Biryani']],
  ['Mutton Fry','Mutton','Pan-roasted mutton with toasted spice and curry leaves.','fry',329,'nonveg',[]],
  ['Mutton Pepper Fry','Mutton','Bold black pepper and slow-cooked, tender mutton.','fry',329,'nonveg',[]],
  ['Mutton Keema','Mutton','Spiced minced mutton with onion, herbs and green chilli.','curry',299,'nonveg',[]],
  ['Mutton Chops','Mutton','Juicy chops seared with a punchy Karnataka masala.','fry',349,'nonveg',[]],
  ['Mutton Pulusu','Mutton','A tangy, slow-simmered mutton stew with tamarind.','curry',329,'nonveg',[]],
  ['Chicken 65','Starters','Crisp, spicy chicken bites with fresh curry leaves.','fry',199,'nonveg',[]],
  ['Chicken Lollipop','Starters','Crispy chicken lollipops with a lively chilli glaze.','fry',219,'nonveg',[]],
  ['Chilli Chicken','Starters','Wok-tossed chicken with chilli, onion and green pepper.','chicken',219,'nonveg',[]],
  ['Chicken Majestic','Starters','Soft chicken strips tossed in a creamy, peppery masala.','chicken',229,'nonveg',[]],
  ['Pepper Chicken','Starters','Aromatic pepper chicken with ginger and curry leaves.','fry',219,'nonveg',[]],
  ['Crispy Chicken Fry','Starters','Golden, crunchy chicken with our house spice dust.','fry',199,'nonveg',[]],
  ['Paneer Butter Masala','Vegetarian','Soft paneer in a buttery tomato and cashew gravy.','veg',219,'veg',[]],
  ['Mushroom Fry','Vegetarian','Mushrooms tossed with onion, pepper and curry leaves.','veg',189,'veg',[]],
  ['Veg Biryani','Vegetarian','Seasonal vegetables and fragrant rice, cooked dum-style.','rice',189,'veg',['Biryani']],
  ['Gobi 65','Vegetarian','Crispy cauliflower bites with chilli and fresh herbs.','veg',169,'veg',['Starters']],
  ['Paneer Tikka','Vegetarian','Charred paneer marinated with yogurt and warming spices.','veg',219,'veg',['Starters']],
  ['Chicken Tikka Kebab','Kebabs','Boneless chicken marinated with yogurt, ginger, garlic and spices, then grilled.','fry',229,'nonveg',[]],
  ['Chicken Seekh Kebab','Kebabs','Minced chicken seasoned with herbs and spices, shaped on skewers and grilled.','fry',249,'nonveg',[]],
  ['Chicken Malai Kebab','Kebabs','Tender chicken in a creamy, mild marinade, grilled until lightly charred.','chicken',259,'nonveg',[]],
  ['Mutton Seekh Kebab','Kebabs','Minced mutton seasoned with fresh herbs and spices, grilled on skewers.','fry',299,'nonveg',[]],
  ['Hara Bhara Kebab','Kebabs','A grilled vegetarian kebab made with spinach, peas, herbs and warming spices.','veg',219,'veg',[]],
  ['Chicken Fried Rice','Rice & Combos','Wok-fired rice, chicken, egg and a little house spice.','rice',199,'nonveg',[]],
  ['Egg Fried Rice','Rice & Combos','Wok-tossed rice with egg, vegetables and spring onion.','rice',169,'nonveg',[]],
  ['Chicken Meals','Rice & Combos','A filling Karnataka-style chicken meal with rice and sides.','rice',249,'nonveg',[]],
  ['Karnataka Special Meals','Karnataka Specials','Rice, seasonal sides and a rotating Karnataka favourite.','rice',229,'nonveg',[]],
  ['Chicken Biryani Combo','Rice & Combos','A satisfying biryani serving with a house side.','biryani',229,'nonveg',['Biryani']]
];
const karnatakaMenu = [
  ['Bengaluru Donne Chicken Biryani','Karnataka Specials','Fragrant green masala rice with tender chicken, donne-style.','biryani',319,'nonveg',['Biryani']],
  ['Coorgi Natti Chicken Curry','Karnataka Specials','Country chicken simmered with roasted spices and pepper.','curry',299,'nonveg',[]],
  ['Mysore Pepper Chicken','Karnataka Specials','A bold pepper masala with curry leaves and warming spices.','fry',249,'nonveg',[]],
  ['Mangalorean Fish Curry','Karnataka Specials','Coastal-style fish curry with coconut, tamarind and spice.','fish',279,'nonveg',['Fish']],
  ['Ragi Mudde with Natti Chicken Saaru','Karnataka Specials','Ragi balls served with a homestyle country chicken gravy.','curry',289,'nonveg',[]],
  ['Bisi Bele Bath','Karnataka Specials','A comforting rice and lentil dish with vegetables and spices.','rice',179,'veg',['Vegetarian']],
  ['Mysore Masala Dosa','Karnataka Specials','Crisp dosa with spiced potato, chutney and sambar.','veg',149,'veg',['Vegetarian']]
];
const riceMenu = [
  ['Chicken Biryani', 'Classic chicken biryani layered with aromatic rice and house spices.', 'biryani', 229, 'nonveg', ['Biryani']],
  ['Mutton Biryani', 'Tender mutton and fragrant rice, slow-cooked with warming spices.', 'biryani', 329, 'nonveg', ['Biryani']],
  ['Chicken Dum Biryani', 'Chicken and seasoned rice sealed together and slow-cooked dum-style.', 'biryani', 269, 'nonveg', ['Biryani']],
  ['Special Chicken Biryani', 'A generous chicken biryani finished with Natti Adda special masala.', 'biryani', 299, 'nonveg', ['Biryani']],
  ['Fry Piece Chicken Biryani', 'Fragrant biryani rice served with crisp, spice-rubbed chicken.', 'biryani', 249, 'nonveg', ['Biryani']],
  ['Boneless Chicken Biryani', 'Boneless chicken tucked into aromatic dum rice.', 'biryani', 249, 'nonveg', ['Biryani']],
  ['Egg Biryani', 'Egg and slow-cooked rice seasoned with warm spices.', 'biryani', 199, 'nonveg', ['Biryani']],
  ['Veg Biryani', 'Seasonal vegetables and fragrant rice, cooked dum-style.', 'rice', 189, 'veg', ['Biryani', 'Vegetarian']],
  ['Paneer Biryani', 'Soft paneer and fragrant biryani rice with toasted spices.', 'rice', 229, 'veg', ['Biryani', 'Vegetarian']],
  ['Prawn Biryani', 'Juicy prawns and aromatic rice with a coastal spice blend.', 'biryani', 329, 'nonveg', ['Biryani', 'Fish']],
  ['Fish Biryani', 'Tender fish layered with fragrant rice and coastal spices.', 'biryani', 299, 'nonveg', ['Biryani', 'Fish']],
  ['Chicken Fried Rice', 'Wok-fried rice with chicken, vegetables and house seasoning.', 'rice', 199, 'nonveg', []],
  ['Schezwan Chicken Fried Rice', 'Wok-fried chicken rice tossed in a bold Schezwan sauce.', 'rice', 219, 'nonveg', []],
  ['Veg Fried Rice', 'Wok-fried rice with fresh vegetables and spring onion.', 'rice', 169, 'veg', ['Vegetarian']],
  ['Schezwan Veg Fried Rice', 'Vegetable fried rice tossed in a spicy Schezwan sauce.', 'rice', 179, 'veg', ['Vegetarian']]
];
const drinkBottleStyles = {
  Water: { color: '#62c9e8', label: '#eafaff', cap: '#168ab4' },
  Sprite: { color: '#77bd36', label: '#effbdc', cap: '#278c31' },
  'Coca-Cola': { color: '#a91c26', label: '#fff8ee', cap: '#75131d' },
  'Thums Up': { color: '#253d76', label: '#f8f3e8', cap: '#ce2d2b' },
  Pepsi: { color: '#2454a5', label: '#f8f7f1', cap: '#d52e37' },
  Fanta: { color: '#ef7625', label: '#fff2df', cap: '#d84b16' },
  '7UP': { color: '#4b9d45', label: '#f0f9e9', cap: '#23743d' },
  Limca: { color: '#c9d63a', label: '#fffce1', cap: '#74962e' }
};
function drinkBottleImage(name) {
  const { color, label, cap } = drinkBottleStyles[name] || drinkBottleStyles.Water;
  const labelSize = name === 'Coca-Cola' || name === 'Thums Up' ? 18 : 23;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 420"><defs><linearGradient id="bg" x2="0" y2="1"><stop stop-color="#fffdf8"/><stop offset="1" stop-color="#f0eadc"/></linearGradient><linearGradient id="bottle" x2="1"><stop stop-color="${color}" stop-opacity=".68"/><stop offset=".48" stop-color="${color}"/><stop offset="1" stop-color="${color}" stop-opacity=".72"/></linearGradient><filter id="shadow" x="-.5" y="-.5" width="2" height="2"><feDropShadow dx="0" dy="9" stdDeviation="9" flood-color="#30291f" flood-opacity=".2"/></filter></defs><rect width="680" height="420" rx="24" fill="url(#bg)"/><circle cx="110" cy="80" r="28" fill="${color}" opacity=".09"/><circle cx="570" cy="330" r="48" fill="${color}" opacity=".08"/><ellipse cx="340" cy="374" rx="69" ry="13" fill="#30291f" opacity=".12"/><g transform="translate(160 0)" filter="url(#shadow)"><path d="M157 61h46v33c0 12 9 18 20 27 15 13 22 27 22 48v151c0 27-16 42-38 42h-54c-22 0-38-15-38-42V169c0-21 7-35 22-48 11-9 20-15 20-27z" fill="url(#bottle)" stroke="#fff" stroke-opacity=".85" stroke-width="5"/><path d="M158 53q0-8 8-8h30q8 0 8 8v14h-46z" fill="${cap}"/><path d="M135 191h90v91h-90z" fill="${label}"/><path d="M143 200h74v5h-74z" fill="${color}" opacity=".28"/><text x="180" y="239" text-anchor="middle" fill="${color}" font-family="Arial,sans-serif" font-size="${labelSize}" font-weight="800" letter-spacing="-.5">${name}</text><text x="180" y="259" text-anchor="middle" fill="#5f5a50" font-family="Arial,sans-serif" font-size="9" font-weight="700" letter-spacing="2">${name === 'Water' ? 'DRINKING WATER' : 'REFRESHING DRINK'}</text><path d="M127 166h106" stroke="#fff" stroke-opacity=".42" stroke-width="4"/><path d="M128 291h104" stroke="#fff" stroke-opacity=".36" stroke-width="4"/></g><text x="340" y="405" text-anchor="middle" fill="#6c665b" font-family="Arial,sans-serif" font-size="11" font-weight="700" letter-spacing="3">${name.toUpperCase()}</text></svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}
const coolDrinkBrands = [
  ['Sprite', 'Sprite.png', 'Chilled lemon-lime soft drink.'],
  ['Coca-Cola', 'Coca-Cola.png', 'Chilled cola soft drink.'],
  ['Thums Up', 'Thums-Up.png', 'Chilled, bold cola soft drink.'],
  ['Pepsi', 'Pepsi.png', 'Chilled cola soft drink.'],
  ['Fanta', 'Fanta.png', 'Chilled orange soft drink.'],
  ['7UP', '7UP.png', 'Chilled lemon-lime soft drink.'],
  ['Mirinda', 'Mirinda.png', 'Chilled orange soft drink.'],
  ['Mountain Dew', 'Mountain-Dew.png', 'Chilled citrus soft drink.'],
  ['Limca', 'Limca.png', 'Chilled lemon-lime soft drink.'],
  ['Sting', 'Sting.png', 'Chilled energy drink.'],
  ['Sprite Zero', 'Sprite-Zero.png', 'Chilled zero-sugar lemon-lime soft drink.'],
  ['Maaza', 'Maaza.png', 'Chilled mango drink.'],
  ['Real', 'Real.png', 'Chilled fruit drink.'],
  ['Tropicana', 'Tropicana.png', 'Chilled fruit drink.'],
  ['Nestlé Juicy Juice', 'Nestle-Juicy-Juice.png', 'Chilled fruit juice.'],
  ['Appy Fizz', 'Appy-Fizz.png', 'Chilled apple drink.'],
  ['Gatorade', 'Gatorade.png', 'Chilled sports drink.'],
  ['Bournvita', 'Bournvita.png', 'Chilled malt drink.']
];
const drinkMenu = [
  { id: 'water-500ml', name: 'Aquafina Water (500 ml)', category: 'Water Bottle', description: '500 ml Aquafina pure drinking water.', image: 'assets/water/Aquafina-500ml.png', price: 10, diet: 'veg', tags: [] },
  { id: 'water-1l', name: 'Aquafina Water (1 L)', category: 'Water Bottle', description: '1 litre Aquafina pure drinking water.', image: 'assets/water/Aquafina-1l.png', price: 20, diet: 'veg', tags: [] },
  { id: 'water-2l', name: 'Aquafina Water (2 L)', category: 'Water Bottle', description: '2 litre Aquafina pure drinking water.', image: 'assets/water/Aquafina-2l.png', price: 40, diet: 'veg', tags: [] }
];
for (const [brand, image, description] of coolDrinkBrands) {
  const slug = brand.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  for (const [size, price] of [[150, 10], [250, 20]]) {
    drinkMenu.push({
      id: `cool-${slug}-${size}ml`,
      name: `${brand} (${size} ml)`,
      category: 'Cool Drinks',
      description: `${size} ml · ${description}`,
      image: `assets/drinks/${image}`,
      price,
      diet: 'veg',
      tags: []
    });
  }
}
const readStore = (key, fallback) => {
  try { const value = JSON.parse(localStorage.getItem(key)); return value ?? fallback; } catch { return fallback; }
};
const saveStore = (key, value) => localStorage.setItem(key, JSON.stringify(value));
let menuItems = readStore('natti-menu-v1', seedMenu.map((entry, index) => ({ id: `dish-${index}`, name: entry[0], category: entry[1], description: entry[2], image: imageSet[entry[3]], price: entry[4], diet: entry[5], tags: entry[6], available: true })));
const kebabItemId = name => `kebab-${name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`;
const legacyMenuUpdates = [
  ['Chicken Kebab', 'Chicken Tikka Kebab', null, 'Juicy chicken pieces marinated with house spices and grilled until smoky.', 'Boneless chicken marinated with yogurt, ginger, garlic and spices, then grilled.'],
  ['Chicken Seekh Kebab', null, null, 'Minced chicken with herbs and spices, shaped on skewers and flame-grilled.', 'Minced chicken seasoned with herbs and spices, shaped on skewers and grilled.'],
  ['Chicken Malai Kebab', null, null, 'Tender chicken in a creamy, gently spiced marinade, charred in the tandoor.', 'Tender chicken in a creamy, mild marinade, grilled until lightly charred.'],
  ['Mutton Seekh Kebab', null, null, 'Spiced minced mutton with fresh herbs, grilled over a hot flame.', 'Minced mutton seasoned with fresh herbs and spices, grilled on skewers.'],
  ['Paneer Tikka Kebab', 'Hara Bhara Kebab', null, 'Paneer cubes marinated with yogurt and spices, grilled until golden.', 'A grilled vegetarian kebab made with spinach, peas, herbs and warming spices.'],
  ['Natti Style Chicken Biryani', null, null, 'Country chicken, fragrant rice and a deep Andhra masala.', 'Country chicken, fragrant rice and a deep Karnataka spice blend.'],
  ['Natti Chicken Curry', null, null, 'A homestyle Andhra curry with freshly ground spices.', 'A homestyle Karnataka country chicken curry with freshly ground spices.'],
  ['Natti Chicken Pulusu', 'Natti Chicken Saaru', null, 'Tangy, warming country chicken stew, Andhra-style.', 'A warming country chicken saaru with roasted spices.'],
  ['Natti Egg Biryani', null, null, 'Egg and slow-cooked rice with warm Andhra seasoning.', 'Egg and slow-cooked rice with warm Karnataka seasoning.'],
  ['Andhra Fish Fry', 'Mangalorean Fish Fry', 'Karnataka Specials', 'Fish marinated with chilli, lemon and a house spice blend.', 'Fish marinated with chilli, lemon and a coastal spice blend.'],
  ['Fish Curry', null, null, 'A comforting Andhra-style fish curry with a tangy finish.', 'A comforting Karnataka-style fish curry with a tangy finish.'],
  ['Andhra Mutton Curry', 'Coorgi Mutton Curry', 'Karnataka Specials', 'Slow-cooked mutton in a rich, deeply spiced gravy.', 'Slow-cooked mutton in a rich, deeply spiced gravy.'],
  ['Mutton Chops', null, null, 'Juicy chops seared with a punchy Andhra masala.', 'Juicy chops seared with a punchy Karnataka masala.'],
  ['Chicken Meals', null, null, 'A filling Andhra-style chicken meal with rice and sides.', 'A filling Karnataka-style chicken meal with rice and sides.'],
  ['Andhra Special Meals', 'Karnataka Special Meals', 'Karnataka Specials', 'Rice, seasonal sides and a rotating Andhra favourite.', 'Rice, seasonal sides and a rotating Karnataka favourite.']
];
let menuMigrationChanged = false;
for (const [oldName, newName, newCategory, oldDescription, newDescription] of legacyMenuUpdates) {
  const item = menuItems.find(entry => entry.name === oldName);
  if (!item) continue;
  if (newName) {
    item.name = newName;
    if (item.category === 'Kebabs') item.id = kebabItemId(newName);
    menuMigrationChanged = true;
  }
  if (newCategory) {
    item.category = newCategory;
    menuMigrationChanged = true;
  }
  if (item.description === oldDescription) {
    item.description = newDescription;
    menuMigrationChanged = true;
  }
}
const seenMenuIds = new Set();
for (const item of menuItems) {
  if (item.category === 'Kebabs' && item.id !== kebabItemId(item.name)) {
    item.id = kebabItemId(item.name);
    menuMigrationChanged = true;
  }
  if (!item.id || seenMenuIds.has(item.id)) {
    const baseId = `dish-${item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`;
    let uniqueId = baseId;
    let suffix = 2;
    while (seenMenuIds.has(uniqueId)) uniqueId = `${baseId}-${suffix++}`;
    item.id = uniqueId;
    menuMigrationChanged = true;
  }
  seenMenuIds.add(item.id);
}
if (menuMigrationChanged) saveStore('natti-menu-v1', menuItems);
const exactBiryani = seedMenu.find(entry => entry[0] === 'Natti Style Chicken Dum Biryani');
if (!menuItems.some(item => item.name === exactBiryani[0])) {
  const index = seedMenu.indexOf(exactBiryani);
  menuItems.push({ id: `dish-${index}`, name: exactBiryani[0], category: exactBiryani[1], description: exactBiryani[2], image: imageSet[exactBiryani[3]], price: exactBiryani[4], diet: exactBiryani[5], tags: exactBiryani[6], available: true });
  saveStore('natti-menu-v1', menuItems);
}
let kebabMenuChanged = false;
seedMenu.forEach((entry, index) => {
  if (entry[1] !== 'Kebabs' || menuItems.some(item => item.name === entry[0])) return;
  menuItems.push({ id: kebabItemId(entry[0]), name: entry[0], category: entry[1], description: entry[2], image: imageSet[entry[3]], price: entry[4], diet: entry[5], tags: entry[6], available: true });
  kebabMenuChanged = true;
});
if (kebabMenuChanged) saveStore('natti-menu-v1', menuItems);
const excludedKebabNames = /\b(veg|paneer|malai|reshmi|seekh)\b/i;
const excludedKebabItems = menuItems.filter(item =>
  item.category === 'Kebabs' && (excludedKebabNames.test(item.name) || item.diet === 'veg')
);
const excludedKebabIds = excludedKebabItems.map(item => item.id);
menuItems = menuItems.filter(item => !excludedKebabItems.includes(item));
const duplicateKebabCartMigrations = new Map();
const keptKebabNames = new Map();
menuItems = menuItems.filter(item => {
  if (item.category !== 'Kebabs') return true;
  const keptItem = keptKebabNames.get(item.name);
  if (keptItem) {
    duplicateKebabCartMigrations.set(item.id, keptItem.id);
    return false;
  }
  keptKebabNames.set(item.name, item);
  return true;
});
const requestedKebabs = [
  ['Chicken Kebab', 'Juicy chicken pieces marinated with house spices and grilled until smoky.', 'Chicken-Kebab.png', 229],
  ['Mutton Kebab', 'Tender mutton pieces grilled with aromatic spices.', 'Mutton-Kebab.png', 299],
  ['Fish Kebab', 'Fish marinated with herbs and spices, then grilled until golden.', 'Fish-Kebab.png', 269],
  ['Chicken Tikka Kebab', 'Boneless chicken marinated with yogurt and spices, then grilled.', 'Chicken-Tikka.png', 249],
  ['Boti Kebab', 'Tender boneless meat cubes grilled with a bold spice marinade.', 'Boti-Kebab.png', 279],
  ['Tandoori Kebab', 'Smoky, tandoor-style chicken marinated with warming spices.', 'Tandoori-Kebab.png', 259],
  ['Kebab Wrap', 'Grilled kebab wrapped with fresh vegetables and house sauce.', 'Kebab-Wrap.png', 249]
];
let requestedKebabsChanged = excludedKebabItems.length > 0 || duplicateKebabCartMigrations.size > 0;
for (const [name, description, image, price] of requestedKebabs) {
  const entry = {
    id: kebabItemId(name),
    name,
    category: 'Kebabs',
    description,
    image: `assets/kebabs/${image}`,
    price,
    diet: 'nonveg',
    tags: []
  };
  const item = menuItems.find(current => current.name === name);
  if (item) {
    const changed = item.category !== entry.category || item.description !== entry.description
      || item.image !== entry.image || Number(item.price) !== entry.price
      || item.diet !== entry.diet || JSON.stringify(item.tags || []) !== '[]';
    item.category = entry.category;
    item.description = entry.description;
    item.image = entry.image;
    item.price = entry.price;
    item.diet = entry.diet;
    item.tags = entry.tags;
    if (changed) requestedKebabsChanged = true;
  } else {
    menuItems.push({ ...entry, available: true });
    requestedKebabsChanged = true;
  }
}
const requestedStarters = [
  { id: 'dish-32', name: 'Chilli Chicken', category: 'Starters', description: 'Wok-tossed chicken with chilli, onion and green pepper.', image: imageSet.chicken, price: 219, diet: 'nonveg', tags: [] },
  { id: 'starter-dragon-chicken', name: 'Dragon Chicken', category: 'Starters', description: 'Crispy chicken tossed in a fiery chilli-garlic sauce.', image: imageSet.chicken, price: 249, diet: 'nonveg', tags: [] }
];
for (const entry of requestedStarters) {
  const item = menuItems.find(current => current.name === entry.name);
  if (!item) {
    menuItems.push({ ...entry, available: true });
    requestedKebabsChanged = true;
    continue;
  }
  const changed = item.category !== entry.category || item.description !== entry.description;
  item.category = entry.category;
  item.description = entry.description;
  if (changed) requestedKebabsChanged = true;
}
if (requestedKebabsChanged) saveStore('natti-menu-v1', menuItems);
let karnatakaMenuChanged = false;
for (const [index, entry] of karnatakaMenu.entries()) {
  if (menuItems.some(item => item.name === entry[0])) continue;
  menuItems.push({ id: `karnataka-${index}`, name: entry[0], category: entry[1], description: entry[2], image: imageSet[entry[3]], price: entry[4], diet: entry[5], tags: entry[6], available: true });
  karnatakaMenuChanged = true;
}
if (karnatakaMenuChanged) saveStore('natti-menu-v1', menuItems);
let riceMenuChanged = false;
for (const [index, [name, description, image, price, diet, tags]] of riceMenu.entries()) {
  const item = menuItems.find(current => current.name === name);
  if (item) {
    if (item.category !== 'Rice & Combos') {
      item.category = 'Rice & Combos';
      riceMenuChanged = true;
    }
    continue;
  }
  menuItems.push({
    id: `rice-menu-${index}`,
    name,
    category: 'Rice & Combos',
    description,
    image: imageSet[image],
    price,
    diet,
    tags,
    available: true
  });
  riceMenuChanged = true;
}
if (riceMenuChanged) saveStore('natti-menu-v1', menuItems);
const drinkCartMigrations = new Map();
const legacyDrinkBrands = new Set(coolDrinkBrands.map(([brand]) => brand));
const legacyDrinkItems = menuItems.filter(item =>
  item.category === 'Cool Drinks' && legacyDrinkBrands.has(item.name)
);
const legacyWaterItems = menuItems.filter(item =>
  item.category === 'Water Bottle' && (
    ['Water', 'Hot Water Bottle', 'Cold Water Bottle'].includes(item.name)
    || /^Water \((500 ml|1 L|2 L)\)$/.test(item.name)
  )
);
for (const item of legacyDrinkItems) {
  const slug = item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  drinkCartMigrations.set(item.id, `cool-${slug}-250ml`);
}
for (const item of legacyWaterItems) {
  const sizeId = item.name === 'Water (1 L)' ? 'water-1l'
    : item.name === 'Water (2 L)' ? 'water-2l'
      : 'water-500ml';
  drinkCartMigrations.set(item.id, sizeId);
}
let drinkMenuChanged = false;
menuItems = menuItems.filter(item =>
  !legacyDrinkItems.includes(item) && !legacyWaterItems.includes(item)
);
for (const entry of drinkMenu) {
  const item = menuItems.find(current => current.name === entry.name);
  if (item) {
    if (item.id !== entry.id) drinkCartMigrations.set(item.id, entry.id);
    const changed = item.id !== entry.id || item.category !== entry.category
      || item.description !== entry.description || item.image !== entry.image
      || Number(item.price) !== entry.price || item.diet !== entry.diet
      || JSON.stringify(item.tags || []) !== JSON.stringify(entry.tags);
    Object.assign(item, entry);
    item.available = item.available !== false;
    if (changed) drinkMenuChanged = true;
  } else {
    menuItems.push({ ...entry, available: true });
    drinkMenuChanged = true;
  }
}
if (drinkMenuChanged || legacyDrinkItems.length || legacyWaterItems.length) saveStore('natti-menu-v1', menuItems);
let cart = readStore('natti-cart-v1', {});
for (const id of excludedKebabIds) delete cart[id];
for (const [oldId, newId] of duplicateKebabCartMigrations) {
  if (cart[oldId]) {
    cart[newId] = (cart[newId] || 0) + cart[oldId];
    delete cart[oldId];
  }
}
for (const [oldId, newId] of drinkCartMigrations) {
  if (cart[oldId]) {
    cart[newId] = (cart[newId] || 0) + cart[oldId];
    delete cart[oldId];
  }
}
if (drinkCartMigrations.size || excludedKebabIds.length || duplicateKebabCartMigrations.size) saveStore('natti-cart-v1', cart);
let reservations = readStore('natti-reservations-v1', []);
let orders = readStore('natti-orders-v1', []);
const defaultAddress = '83FV+F9H, SSIT Main Rd, Near SSIT College, Saraswathipuram, Tumakur, Karnataka 572105';
const previousDefaultOffer = 'Buy 2 menu items, get 1 free. The lowest-priced item in every group of 3 is free.';
const defaultOffer = 'Buy 2 chicken biryanis, get 1 free. The lowest-priced chicken biryani is free.';
let restaurant = readStore('natti-settings-v1', { address: defaultAddress, phone: '+91 9066574577', instagram: '', facebook: '', hours: '4:00 am – 12:00 pm', map: '', offer: defaultOffer });
if (!restaurant.address || restaurant.address === 'Tumkur, Karnataka') {
  restaurant.address = defaultAddress;
  saveStore('natti-settings-v1', restaurant);
}
if (!restaurant.hours) {
  restaurant.hours = '4:00 am – 12:00 pm';
  saveStore('natti-settings-v1', restaurant);
}
if (!restaurant.phone) {
  restaurant.phone = '+91 9066574577';
  saveStore('natti-settings-v1', restaurant);
}
if (!restaurant.offer || restaurant.offer === previousDefaultOffer) {
  restaurant.offer = defaultOffer;
  saveStore('natti-settings-v1', restaurant);
}
let activeCategory = 'All';
let activeAdminTab = 'menu';
let toastTimer;
const menuGrid = document.querySelector('#menu-grid');
const searchInput = document.querySelector('#menu-search');
const categoryList = document.querySelector('.category-list');
const cartDrawer = document.querySelector('.cart-drawer');
const drawerScrim = document.querySelector('.drawer-scrim');
const toast = document.querySelector('.toast');
const adminDialog = document.querySelector('.admin-dialog');

function money(value) { return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(value); }
function showToast(message) {
  toast.textContent = message;
  toast.classList.add('is-visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 2800);
}
function renderCategories() {
  categoryList.innerHTML = categories.map(category => `<button class="category-pill${category === activeCategory ? ' is-active' : ''}" type="button" data-category="${category}">${category}</button>`).join('');
}
function renderMenu() {
  const query = searchInput.value.trim().toLowerCase();
  const filtered = menuItems.filter(item => (activeCategory === 'All' || item.category === activeCategory || (item.tags || []).includes(activeCategory)) && (!query || `${item.name} ${item.description} ${item.category}`.toLowerCase().includes(query)));
  menuGrid.innerHTML = filtered.map(dishCardHtml).join('');
  document.querySelector('.empty-state').hidden = filtered.length !== 0;
  const featuredNames = ['Natti Style Chicken Dum Biryani', 'Chicken 65', 'Mutton Pepper Fry'];
  document.querySelector('#featured-grid').innerHTML = featuredNames.map(name => menuItems.find(item => item.name === name)).filter(Boolean).map(dishCardHtml).join('');
}
function dishCardHtml(item, index = 0) {
  const sampleNote = ['Water Bottle', 'Cool Drinks'].includes(item.category) ? '' : ' <small>sample</small>';
  const imageClass = item.category === 'Water Bottle' ? ' water-bottle-card' : '';
  return `<article class="dish-card${imageClass}${item.available ? '' : ' unavailable'}" style="animation-delay:${Math.min(index, 12) * 25}ms"><div class="dish-image"><img src="${escapeHtml(item.image || imageSet.chicken)}" alt="${escapeHtml(item.name)}" loading="lazy"><span class="diet-dot ${item.diet === 'veg' ? 'veg' : ''}" title="${item.diet === 'veg' ? 'Vegetarian' : 'Non-vegetarian'}"></span><span class="dish-category">${escapeHtml(item.category)}</span></div><div class="dish-info"><h3>${escapeHtml(item.name)}</h3><p>${escapeHtml(item.description)}</p><div class="dish-meta"><span class="dish-price">${money(Number(item.price) || 0)}${sampleNote}</span><div class="dish-actions"><button class="add-button" type="button" data-add="${escapeHtml(item.id)}" aria-label="${item.available ? `Add ${escapeHtml(item.name)} to cart` : `${escapeHtml(item.name)} unavailable`}" title="${item.available ? 'Add to cart' : 'Unavailable'}" ${item.available ? '' : 'disabled'}>${item.available ? '<span aria-hidden="true">+</span>' : '<span aria-hidden="true">×</span>'}</button><button class="buy-button" type="button" data-buy="${escapeHtml(item.id)}" ${item.available ? '' : 'disabled'}>${item.available ? 'Buy now' : 'Unavailable'}</button></div></div></div></article>`;
}
function escapeHtml(value) { return String(value ?? '').replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]); }
function cartQuantity() { return Object.values(cart).reduce((sum, quantity) => sum + quantity, 0); }
function cartSubtotal() { return Object.entries(cart).reduce((total, [id, quantity]) => total + (menuItems.find(item => item.id === id)?.price || 0) * quantity, 0); }
function isChickenBiryani(item) {
  const name = item.name.toLowerCase();
  if (!name.includes('biryani') || item.diet === 'veg' || /\b(egg|mutton|veg)\b/.test(name)) return false;
  return name.includes('chicken') || item.category === 'Natti Chicken' || item.category === 'Biryani';
}
function eligibleChickenBiryaniQuantity() {
  return Object.entries(cart).reduce((quantity, [id, count]) => {
    const item = menuItems.find(entry => entry.id === id);
    return quantity + (item && isChickenBiryani(item) ? count : 0);
  }, 0);
}
function cartOfferDiscount() {
  if (!/buy\s+2[\s\S]*get\s+1[\s\S]*free/i.test(restaurant.offer || '') || !/chicken\s+biryani/i.test(restaurant.offer || '')) return 0;
  let freeItems = Math.floor(eligibleChickenBiryaniQuantity() / 3);
  return Object.entries(cart)
    .map(([id, quantity]) => ({ item: menuItems.find(item => item.id === id), quantity }))
    .filter(line => line.item && isChickenBiryani(line.item))
    .map(line => ({ price: line.item.price || 0, quantity: line.quantity }))
    .sort((left, right) => left.price - right.price)
    .reduce((discount, line) => {
      const freeHere = Math.min(freeItems, line.quantity);
      freeItems -= freeHere;
      return discount + freeHere * line.price;
    }, 0);
}
function cartTotal() { return cartSubtotal() - cartOfferDiscount(); }
function renderCart() {
  const lines = Object.entries(cart).filter(([, quantity]) => quantity > 0).map(([id, quantity]) => ({ item: menuItems.find(entry => entry.id === id), quantity })).filter(line => line.item);
  const count = cartQuantity();
  document.querySelector('.cart-count').textContent = count;
  document.querySelector('.drawer-count').textContent = `(${count})`;
  document.querySelector('.cart-items').innerHTML = lines.map(({ item, quantity }) => `<div class="cart-line"><div><h3>${escapeHtml(item.name)}</h3><small>${money(item.price)} each</small><div class="quantity-control"><button type="button" data-quantity="${escapeHtml(item.id)}" data-change="-1" aria-label="Decrease ${escapeHtml(item.name)} quantity">−</button><span>${quantity}</span><button type="button" data-quantity="${escapeHtml(item.id)}" data-change="1" aria-label="Increase ${escapeHtml(item.name)} quantity">+</button><button type="button" class="remove-item" data-remove="${escapeHtml(item.id)}">Remove</button></div></div><span class="cart-line-total">${money(item.price * quantity)}</span></div>`).join('');
  document.querySelector('.cart-empty').hidden = lines.length > 0;
  document.querySelector('.checkout-form').hidden = lines.length === 0;
  document.querySelector('.cart-subtotal strong').textContent = money(cartSubtotal());
  const discount = cartOfferDiscount();
  document.querySelector('.cart-discount span').textContent = 'Chicken biryani offer';
  document.querySelector('.cart-discount').hidden = discount === 0;
  document.querySelector('.cart-discount strong').textContent = `-${money(discount)}`;
  document.querySelector('.cart-grand-total strong').textContent = money(cartTotal());
  document.querySelector('.checkout-note').textContent = 'Buy 2 chicken biryanis, get the lowest-priced one free. Delivery fees, if any, are confirmed by the restaurant.';
}
function openCart() { renderCart(); cartDrawer.classList.add('is-open'); cartDrawer.setAttribute('aria-hidden', 'false'); drawerScrim.hidden = false; document.body.classList.add('drawer-open'); }
function closeCart() { cartDrawer.classList.remove('is-open'); cartDrawer.setAttribute('aria-hidden', 'true'); drawerScrim.hidden = true; document.body.classList.remove('drawer-open'); }
function addToCart(id) {
  const item = menuItems.find(entry => entry.id === id);
  if (!item || !item.available) return;
  cart[id] = (cart[id] || 0) + 1;
  saveStore('natti-cart-v1', cart);
  renderCart();
  showToast(`${item.name} added to your bag`);
}
function buyNow(id) {
  const item = menuItems.find(entry => entry.id === id);
  if (!item || !item.available) return;
  cart = { [id]: 1 };
  saveStore('natti-cart-v1', cart);
  openCart();
  document.querySelector('#checkout-form [name="name"]').focus();
}
function updateContact() {
  document.querySelector('[data-contact="address"]').textContent = restaurant.address || defaultAddress;
  document.querySelector('[data-contact="phone"]').textContent = restaurant.phone || 'Add your phone in Admin';
  const hoursDisplay = document.querySelector('.contact-grid > div:nth-child(3) .contact-value');
  hoursDisplay.dataset.contact = 'hours';
  hoursDisplay.textContent = restaurant.hours || '4:00 am – 12:00 pm';
  const hoursNote = hoursDisplay.nextElementSibling;
  if (hoursNote) hoursNote.textContent = 'Hours set by the restaurant';
  document.querySelector('.review-credit small').textContent = 'Sample customer story';
  const phone = restaurant.phone.replace(/\D/g, '');
  const whatsAppUrl = phone ? `https://wa.me/${phone}` : 'https://wa.me/';
  document.querySelectorAll('.whatsapp-link,.floating-whatsapp').forEach(link => link.href = `${whatsAppUrl}?text=${encodeURIComponent('Hello Natti Adda, I would like to order.')}`);
  const mapUrl = restaurant.map || `https://maps.google.com/?q=${encodeURIComponent(restaurant.address || defaultAddress)}`;
  document.querySelectorAll('.map-link').forEach(link => link.href = mapUrl);
  document.querySelector('.instagram-link').href = restaurant.instagram || 'https://instagram.com/';
  let facebookLink = document.querySelector('.facebook-link');
  if (!facebookLink) {
    facebookLink = document.createElement('a');
    facebookLink.className = 'contact-link facebook-link';
    facebookLink.textContent = 'Facebook ↗';
    facebookLink.target = '_blank';
    facebookLink.rel = 'noreferrer';
    document.querySelector('.instagram-link').after(facebookLink);
  }
  facebookLink.href = restaurant.facebook || 'https://facebook.com/';
  let offerBanner = document.querySelector('.offer-banner');
  if (!offerBanner) {
    offerBanner = document.createElement('div');
    offerBanner.className = 'offer-banner';
    document.querySelector('.ticker').after(offerBanner);
  }
  document.querySelector('.ticker').after(offerBanner);
  offerBanner.hidden = !restaurant.offer;
  offerBanner.id = 'todays-offer';
  offerBanner.textContent = restaurant.offer || '';
  let mapFrame = document.querySelector('.map-placeholder iframe');
  if (!mapFrame) {
    mapFrame = document.createElement('iframe');
    mapFrame.title = 'Map to Natti Adda';
    mapFrame.loading = 'lazy';
    mapFrame.referrerPolicy = 'no-referrer-when-downgrade';
    const mapContainer = document.querySelector('.map-placeholder');
    mapContainer.replaceChildren(mapFrame);
  }
  mapFrame.src = `https://maps.google.com/maps?q=${encodeURIComponent(restaurant.address || defaultAddress)}&output=embed`;
}
function renderGallery() {
  const galleryItems = [
    ['https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=850&q=85', 'A cooked fish dish served with fresh herbs', 'MANGALOREAN FISH SPECIAL'],
    ['https://images.unsplash.com/photo-1642821373181-696a54913e93?auto=format&fit=crop&w=850&q=85', 'A rich serving of biryani and long-grain rice', 'DUM BIRYANI, MADE TO SHARE'],
    ['https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=850&q=85', 'A cook preparing a fresh meal in the kitchen', 'SLOW COOKED, SPICE BY SPICE'],
    ['https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=850&q=85', 'A welcoming restaurant dining room', 'A PLACE AT THE TABLE']
  ];
  document.querySelector('.gallery-grid').insertAdjacentHTML('beforeend', galleryItems.map(([src, alt, caption]) => `<figure><img src="${src}" alt="${alt}" loading="lazy"><figcaption>${caption}</figcaption></figure>`).join(''));
}
function openAdmin(tab = activeAdminTab) {
  activeAdminTab = tab;
  renderAdmin();
  adminDialog.showModal();
}
function renderAdmin() {
  document.querySelectorAll('.admin-tab').forEach(button => button.classList.toggle('is-active', button.dataset.adminTab === activeAdminTab));
  const content = document.querySelector('.admin-content');
  if (activeAdminTab === 'menu') renderAdminMenu(content);
  if (activeAdminTab === 'orders') renderAdminRecords(content, orders, 'orders');
  if (activeAdminTab === 'reservations') renderAdminRecords(content, reservations, 'reservations');
  if (activeAdminTab === 'settings') renderAdminSettings(content);
}
function renderAdminMenu(content) {
  content.innerHTML = `<h3>Menu items (${menuItems.length})</h3><p>Sample prices are for preview only. Changes are saved to this browser.</p><form class="admin-form" id="add-dish-form"><div class="admin-form-row"><label>Dish name<input name="name" required maxlength="80" placeholder="Dish name"></label><label>Category<select name="category">${categories.slice(1).map(category => `<option>${category}</option>`).join('')}</select></label></div><div class="admin-form-row"><label>Description<textarea name="description" required maxlength="180" rows="2" placeholder="Short menu description"></textarea></label><label>Price (INR)<input name="price" type="number" min="0" step="1" required placeholder="Sample price"></label></div><div class="admin-form-row"><label>Image URL<input name="image" type="url" placeholder="https://..."></label><label>Or upload image<input name="imageFile" type="file" accept="image/*"></label></div><button class="button button-red" type="submit">Add menu item +</button></form><input class="admin-menu-search" type="search" placeholder="Search menu items" aria-label="Search menu items"> <div class="admin-menu-list">${menuItems.map(item => `<details class="admin-item" data-admin-name="${escapeHtml(item.name.toLowerCase())}"><summary>${escapeHtml(item.name)} · ${money(item.price)}${item.available ? '' : ' · unavailable'}</summary><form data-edit-dish="${escapeHtml(item.id)}"><div class="admin-form-row"><label>Name<input name="name" required value="${escapeHtml(item.name)}"></label><label>Category<select name="category">${categories.slice(1).map(category => `<option ${category === item.category ? 'selected' : ''}>${category}</option>`).join('')}</select></label></div><div class="admin-form-row"><label>Description<textarea name="description" required rows="2">${escapeHtml(item.description)}</textarea></label><label>Price (INR)<input name="price" type="number" min="0" step="1" required value="${Number(item.price) || 0}"></label></div><div class="admin-form-row"><label>Image URL<input name="image" type="url" value="${escapeHtml(item.image || '')}"></label><label>Replace image<input name="imageFile" type="file" accept="image/*"></label></div><label class="admin-inline"><input name="available" type="checkbox" ${item.available ? 'checked' : ''}> Available to order</label><button class="button button-red" type="submit">Save changes</button> <button class="button button-line admin-delete" type="button" data-delete="${escapeHtml(item.id)}" style="color:#a63420;border-color:#a63420">Delete item</button></form></details>`).join('')}</div>`;
}
function renderAdminSettings(content) {
  content.innerHTML = `<h3>Restaurant details</h3><p>These details appear on the website. Use the full international format for WhatsApp, without spaces.</p><form class="admin-form" id="settings-form"><label>Address<input name="address" maxlength="180" value="${escapeHtml(restaurant.address)}" placeholder="Street, city, postal code"></label><div class="admin-form-row"><label>Phone / WhatsApp<input name="phone" type="tel" value="${escapeHtml(restaurant.phone)}" placeholder="+91 98765 43210"></label><label>Opening hours<input name="hours" maxlength="100" value="${escapeHtml(restaurant.hours)}"></label></div><div class="admin-form-row"><label>Google Maps link<input name="map" type="url" value="${escapeHtml(restaurant.map)}" placeholder="https://maps.google.com/..."></label><label>Instagram link<input name="instagram" type="url" value="${escapeHtml(restaurant.instagram)}" placeholder="https://instagram.com/..."></label></div><div class="admin-form-row"><label>Facebook link<input name="facebook" type="url" value="${escapeHtml(restaurant.facebook || '')}" placeholder="https://facebook.com/..."></label><label>Offer / discount banner<input name="offer" maxlength="180" value="${escapeHtml(restaurant.offer || '')}" placeholder="Offer text to show on the website"></label></div><button class="button button-red" type="submit">Save restaurant details</button></form>`;
}
function renderAdminRecords(content, records, type) {
  const isOrders = type === 'orders';
  content.innerHTML = `<h3>${isOrders ? 'Customer orders' : 'Reservation requests'} (${records.length})</h3><p>Records are stored only in this browser and are not sent to the restaurant.</p>${records.length ? [...records].reverse().map((record, reverseIndex) => { const index = records.length - 1 - reverseIndex; return `<article class="admin-record"><strong>${escapeHtml(record.name)}</strong><p>${isOrders ? escapeHtml(record.items) + '<br>' + money(record.total) + '<br>' + escapeHtml(record.address) : `${escapeHtml(record.guests)} guest(s) · ${escapeHtml(record.date)} at ${escapeHtml(record.time)}<br>${escapeHtml(record.phone)}${record.note ? '<br>' + escapeHtml(record.note) : ''}`}</p><small>${escapeHtml(record.phone)} · ${escapeHtml(record.createdAt)}</small><p class="admin-status">Status: ${escapeHtml(record.status || 'New request')}</p><button class="button button-line" type="button" data-record-status="${type}" data-index="${index}" style="color:#34342f;border-color:#aaa">Mark ${record.status === 'Contacted' ? 'new' : 'contacted'}</button> <button class="button button-line" type="button" data-record-delete="${type}" data-index="${index}" style="color:#a63420;border-color:#a63420">Delete</button></article>`; }).join('') : '<p class="admin-empty">No records in this browser yet.</p>'}`;
}
function readImage(file) {
  return new Promise((resolve, reject) => {
    if (!file) return resolve('');
    if (file.size > 500000) return reject(new Error('Please use an image smaller than 500 KB.'));
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error('Could not read that image.'));
    reader.readAsDataURL(file);
  });
}

renderCategories();
renderMenu();
renderCart();
updateContact();
renderGallery();
document.querySelector('#year').textContent = new Date().getFullYear();
const dateInput = document.querySelector('#reservation-form [name="date"]');
dateInput.min = new Date().toISOString().slice(0, 10);

document.addEventListener('click', event => {
  const category = event.target.closest('[data-category]');
  if (category) { activeCategory = category.dataset.category; renderCategories(); renderMenu(); }
  const buy = event.target.closest('[data-buy]');
  if (buy) buyNow(buy.dataset.buy);
  const add = event.target.closest('[data-add]');
  if (add) addToCart(add.dataset.add);
  const quantityButton = event.target.closest('[data-quantity]');
  if (quantityButton) {
    const id = quantityButton.dataset.quantity;
    cart[id] = (cart[id] || 0) + Number(quantityButton.dataset.change);
    if (cart[id] <= 0) delete cart[id];
    saveStore('natti-cart-v1', cart); renderCart();
  }
  const remove = event.target.closest('[data-remove]');
  if (remove) { delete cart[remove.dataset.remove]; saveStore('natti-cart-v1', cart); renderCart(); }
  if (event.target.closest('.cart-trigger')) openCart();
  if (event.target.closest('.cart-close') || event.target === drawerScrim) closeCart();
  if (event.target.closest('.browse-menu')) { closeCart(); document.querySelector('#menu').scrollIntoView({ behavior: 'smooth' }); }
  if (event.target.closest('.admin-open')) openAdmin();
  if (event.target.closest('.admin-close')) adminDialog.close();
  const tab = event.target.closest('[data-admin-tab]');
  if (tab) { activeAdminTab = tab.dataset.adminTab; renderAdmin(); }
  const deleteDish = event.target.closest('[data-delete]');
  if (deleteDish && confirm('Delete this menu item?')) {
    menuItems = menuItems.filter(item => item.id !== deleteDish.dataset.delete);
    delete cart[deleteDish.dataset.delete];
    saveStore('natti-menu-v1', menuItems); saveStore('natti-cart-v1', cart); renderAdmin(); renderMenu(); renderCart();
  }
  const recordDelete = event.target.closest('[data-record-delete]');
  if (recordDelete && confirm('Delete this local record?')) {
    const records = recordDelete.dataset.recordDelete === 'orders' ? orders : reservations;
    records.splice(Number(recordDelete.dataset.index), 1);
    saveStore(`natti-${recordDelete.dataset.recordDelete}-v1`, records); renderAdmin();
  }
  const statusButton = event.target.closest('[data-record-status]');
  if (statusButton) {
    const records = statusButton.dataset.recordStatus === 'orders' ? orders : reservations;
    const record = records[Number(statusButton.dataset.index)];
    record.status = record.status === 'Contacted' ? 'New request' : 'Contacted';
    saveStore(`natti-${statusButton.dataset.recordStatus}-v1`, records); renderAdmin();
  }
  if (event.target.closest('.search-trigger')) { document.querySelector('#menu').scrollIntoView({ behavior: 'smooth' }); setTimeout(() => searchInput.focus(), 400); }
  if (event.target.closest('.mobile-menu-toggle')) {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.main-nav');
    const open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
  }
  if (event.target.closest('.main-nav a')) { document.querySelector('.main-nav').classList.remove('is-open'); document.querySelector('.mobile-menu-toggle').setAttribute('aria-expanded', 'false'); }
});
searchInput.addEventListener('input', renderMenu);
document.addEventListener('input', event => {
  if (event.target.matches('.admin-menu-search')) {
    const query = event.target.value.toLowerCase();
    document.querySelectorAll('.admin-item').forEach(item => item.hidden = !item.dataset.adminName.includes(query));
  }
});
document.addEventListener('keydown', event => {
  if (event.key === '/' && !['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) { event.preventDefault(); document.querySelector('#menu').scrollIntoView({ behavior: 'smooth' }); setTimeout(() => searchInput.focus(), 400); }
  if (event.key === 'Escape') closeCart();
});

document.querySelector('#reservation-form').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const data = Object.fromEntries(new FormData(form));
  reservations.push({ ...data, status: 'New request', createdAt: new Date().toLocaleString() });
  saveStore('natti-reservations-v1', reservations);
  form.reset(); dateInput.min = new Date().toISOString().slice(0, 10);
  showToast('Request saved in this browser. The restaurant still needs to confirm it.');
});
document.querySelector('#checkout-form').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity() || !cartQuantity()) return;
  const data = Object.fromEntries(new FormData(form));
  const lines = Object.entries(cart).map(([id, quantity]) => ({ item: menuItems.find(entry => entry.id === id), quantity })).filter(line => line.item);
  const items = lines.map(line => `${line.quantity} x ${line.item.name} (${money(line.item.price * line.quantity)})`).join('\n');
  const subtotal = cartSubtotal();
  const discount = cartOfferDiscount();
  const total = cartTotal();
  const promotion = discount ? `Chicken biryani offer: -${money(discount)}\n` : '';
  const message = `Hello Natti Adda!\n\nI'd like to place this order:\n${items}\n\nSubtotal: ${money(subtotal)}\n${promotion}Total: ${money(total)}\n\nName: ${data.name}\nPhone: ${data.phone}\nDelivery address: ${data.address}`;
  orders.push({ ...data, items: lines.map(line => `${line.quantity} x ${line.item.name}`).join(', '), subtotal, discount, total, status: 'New request', createdAt: new Date().toLocaleString() });
  saveStore('natti-orders-v1', orders);
  const phone = restaurant.phone.replace(/\D/g, '');
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  cart = {}; saveStore('natti-cart-v1', cart); renderCart(); closeCart();
  showToast('Order prepared in WhatsApp. Send the message to place your order.');
});

document.addEventListener('submit', async event => {
  if (event.target.matches('[data-edit-dish]')) {
    event.preventDefault();
    const form = event.target;
    const item = menuItems.find(entry => entry.id === form.dataset.editDish);
    try {
      const image = await readImage(form.elements.imageFile.files[0]);
      item.name = form.elements.name.value.trim(); item.category = form.elements.category.value; item.description = form.elements.description.value.trim(); item.price = Number(form.elements.price.value); item.available = form.elements.available.checked;
      item.image = image || form.elements.image.value.trim() || item.image;
      saveStore('natti-menu-v1', menuItems); renderAdmin(); renderMenu(); renderCart(); showToast('Menu item updated on this device.');
    } catch (error) { showToast(error.message); }
  }
  if (event.target.matches('#add-dish-form')) {
    event.preventDefault();
    const form = event.target;
    try {
      const image = await readImage(form.elements.imageFile.files[0]);
      const name = form.elements.name.value.trim();
      menuItems.push({ id: `custom-${Date.now()}`, name, category: form.elements.category.value, description: form.elements.description.value.trim(), image: image || form.elements.image.value.trim() || imageSet.chicken, price: Number(form.elements.price.value), diet: form.elements.category.value === 'Vegetarian' ? 'veg' : 'nonveg', tags: [], available: true });
      saveStore('natti-menu-v1', menuItems); renderAdmin(); renderMenu(); showToast('Menu item added on this device.');
    } catch (error) { showToast(error.message); }
  }
  if (event.target.matches('#settings-form')) {
    event.preventDefault();
    restaurant = Object.fromEntries(new FormData(event.target));
    saveStore('natti-settings-v1', restaurant); updateContact(); renderCart(); showToast('Restaurant details saved on this device.');
  }
});

document.querySelectorAll('.review-arrows button').forEach(button => button.addEventListener('click', () => showToast('More customer stories coming soon.')));
