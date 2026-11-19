
(function(){
"use strict";
const MENU={"cats": ["Raciones", "Cervezas", "Bebidas", "Batidos", "Granizados", "Cócteles", "Cócteles especiales", "Ginebras", "Whisky", "Vodka", "Ron", "Licores", "Chupitos", "Botellas", "Cachimbas"], "items": [{"id": "c-racion-alitas", "n": "Alitas", "c": "Raciones", "p": 9.5, "o": 1}, {"id": "c-racion-chicken-tenders", "n": "Chicken tenders", "c": "Raciones", "p": 7.5, "o": 2}, {"id": "c-racion-nuggets", "n": "Nuggets", "c": "Raciones", "p": 8, "o": 3}, {"id": "c-racion-patatas-bravas", "n": "Patatas bravas", "c": "Raciones", "p": 4, "o": 4}, {"id": "c-racion-patatas-fritas", "n": "Patatas fritas", "c": "Raciones", "p": 4, "o": 5}, {"id": "c-racion-salchipapa", "n": "Salchipapa", "c": "Raciones", "p": 10, "o": 6, "d": "Con carne o pollo mechado y queso", "x": [{"choices": [{"n": "Carne mechada", "p": 0}, {"n": "Pollo mechado", "p": 0}], "name": "Carne"}]}, {"id": "c-racion-empanada-de-ternera", "n": "Empanada de ternera", "c": "Raciones", "p": 2, "o": 7}, {"id": "c-racion-empanada-de-pollo", "n": "Empanada de pollo", "c": "Raciones", "p": 2, "o": 8}, {"id": "c-racion-combo-para-compartir", "n": "Combo para compartir", "c": "Raciones", "p": 17, "o": 9, "d": "Alitas, tenders, nuggets, patatas, salchicha y 2 bebidas a escoger"}, {"id": "c-racion-chuzo-de-chorizo", "n": "Chuzo de chorizo", "c": "Raciones", "p": 6.99, "o": 10}, {"id": "c-racion-tequenos", "n": "Tequeños", "c": "Raciones", "p": 10, "o": 11, "d": "Ración de 8 unidades con salsa a elegir", "x": [{"choices": [{"n": "Rosada", "p": 0}, {"n": "Ajo", "p": 0}, {"n": "Tártara", "p": 0}, {"n": "Barbacoa", "p": 0}, {"n": "Piña", "p": 0}, {"n": "Picante", "p": 0}], "name": "Salsa"}]}, {"id": "c-racion-chuleta-valluna", "n": "Chuleta valluna", "c": "Raciones", "p": 0, "o": 12, "d": "Incluye bebida, arroz, patata y tomate", "x": [{"choices": [{"n": "Coca-Cola", "p": 0}, {"n": "Fanta naranja", "p": 0}, {"n": "Fanta limón", "p": 0}, {"n": "Nestea", "p": 0}, {"n": "Aquarius naranja", "p": 0}, {"n": "Aquarius limón", "p": 0}, {"n": "Sprite", "p": 0}, {"n": "Agua", "p": 0}], "name": "Bebida"}], "off": 1}, {"id": "c-racion-hotdog-especial", "n": "Hotdog especial Lounge Bar", "c": "Raciones", "p": 6, "o": 13, "d": "Pan, salchicha, huevo de codorniz entero, patata, cebolla frita y salsa a elegir. 1 por 6 € o 2 por 10 €", "x": [{"choices": [{"n": "1 unidad", "p": 0}, {"n": "2 unidades", "p": 4}], "name": "Cantidad"}, {"choices": [{"n": "Rosada", "p": 0}, {"n": "Ajo", "p": 0}, {"n": "Tártara", "p": 0}, {"n": "Barbacoa", "p": 0}, {"n": "Piña", "p": 0}, {"n": "Picante", "p": 0}], "name": "Salsa"}]}, {"id": "c-cervez-heineken", "n": "Heineken", "c": "Cervezas", "p": 3, "o": 1}, {"id": "c-cervez-mahou", "n": "Mahou", "c": "Cervezas", "p": 3, "o": 2}, {"id": "c-cervez-corona", "n": "Corona", "c": "Cervezas", "p": 3, "o": 3}, {"id": "c-cervez-estrella-galicia", "n": "Estrella Galicia", "c": "Cervezas", "p": 3, "o": 4}, {"id": "c-cervez-radler", "n": "Radler", "c": "Cervezas", "p": 2, "o": 5}, {"id": "c-cervez-michelada", "n": "Michelada", "c": "Cervezas", "p": 4, "o": 6}, {"id": "c-cervez-tinto-de-verano", "n": "Tinto de verano", "c": "Cervezas", "p": 3.5, "o": 7}, {"id": "c-cervez-vino", "n": "Vino", "c": "Cervezas", "p": 3.5, "o": 8}, {"id": "c-cervez-cana", "n": "Caña", "c": "Cervezas", "p": 1.2, "o": 9}, {"id": "c-cervez-jarra-pequena", "n": "Jarra pequeña", "c": "Cervezas", "p": 2.2, "o": 10}, {"id": "c-cervez-jarra-grande", "n": "Jarra grande", "c": "Cervezas", "p": 4, "o": 11}, {"id": "c-cervez-jarra-pequena-limon", "n": "Jarra pequeña limón", "c": "Cervezas", "p": 2.7, "o": 12}, {"id": "c-cervez-jarra-grande-limon", "n": "Jarra grande limón", "c": "Cervezas", "p": 4.5, "o": 13}, {"id": "c-cervez-cubo-de-botellines", "n": "Cubo de botellines", "c": "Cervezas", "p": 8, "o": 14}, {"id": "c-cervez-cubo-de-tercios", "n": "Cubo de tercios", "c": "Cervezas", "p": 14, "o": 15}, {"id": "c-bebida-coca-cola", "n": "Coca-Cola", "c": "Bebidas", "p": 2.5, "o": 1}, {"id": "c-bebida-fanta-naranja", "n": "Fanta naranja", "c": "Bebidas", "p": 2.5, "o": 2}, {"id": "c-bebida-fanta-limon", "n": "Fanta limón", "c": "Bebidas", "p": 2.5, "o": 3}, {"id": "c-bebida-nestea", "n": "Nestea", "c": "Bebidas", "p": 2.9, "o": 4}, {"id": "c-bebida-aquarius-naranja", "n": "Aquarius naranja", "c": "Bebidas", "p": 2.8, "o": 5}, {"id": "c-bebida-aquarius-limon", "n": "Aquarius limón", "c": "Bebidas", "p": 2.8, "o": 6}, {"id": "c-bebida-sprite", "n": "Sprite", "c": "Bebidas", "p": 2.5, "o": 7}, {"id": "c-bebida-tonica", "n": "Tónica", "c": "Bebidas", "p": 2.5, "o": 8}, {"id": "c-bebida-red-bull", "n": "Red Bull", "c": "Bebidas", "p": 3, "o": 9}, {"id": "c-bebida-energetico", "n": "Energético", "c": "Bebidas", "p": 2, "o": 10}, {"id": "c-bebida-pony-malta", "n": "Pony Malta", "c": "Bebidas", "p": 3, "o": 11}, {"id": "c-bebida-agua", "n": "Agua", "c": "Bebidas", "p": 1.5, "o": 12}, {"id": "c-batido-maracuya", "n": "Maracuyá", "c": "Batidos", "p": 4.5, "o": 1}, {"id": "c-batido-mora", "n": "Mora", "c": "Batidos", "p": 4.5, "o": 2}, {"id": "c-batido-mango", "n": "Mango", "c": "Batidos", "p": 4.5, "o": 3}, {"id": "c-batido-lulo", "n": "Lulo", "c": "Batidos", "p": 4.5, "o": 4}, {"id": "c-batido-guanabana", "n": "Guanábana", "c": "Batidos", "p": 4.5, "o": 5}, {"id": "c-batido-fresa", "n": "Fresa", "c": "Batidos", "p": 4.5, "o": 6}, {"id": "c-batido-milo", "n": "Milo", "c": "Batidos", "p": 4.5, "o": 7}, {"id": "c-granizado-maracumango", "n": "Granizado Maracumango", "c": "Granizados", "p": 5.99, "o": 1, "d": "Mango, tajín, sal, limón, lecherita y pimienta", "x": [{"choices": [{"n": "Sin alcohol", "p": 0}, {"n": "Con alcohol", "p": 2}], "name": "Alcohol"}]}, {"id": "c-coctel-classic-mojito", "n": "Classic Mojito", "c": "Cócteles", "p": 8.5, "o": 1, "d": "Ron, lima, azúcar, menta, soda y angostura"}, {"id": "c-coctel-maracuya-mojito", "n": "Maracuyá Mojito", "c": "Cócteles", "p": 8.5, "o": 2, "d": "Ron, lima, azúcar, maracuyá, menta, soda y angostura"}, {"id": "c-coctel-mango-mojito", "n": "Mango Mojito", "c": "Cócteles", "p": 8.5, "o": 3, "d": "Ron, lima, azúcar, mango, menta, soda y angostura"}, {"id": "c-coctel-cointreau-caipirinha", "n": "Cointreau Caipirinha", "c": "Cócteles", "p": 8.5, "o": 4, "d": "Cachaça, Cointreau y lima"}, {"id": "c-coctel-pina-colada", "n": "Piña Colada", "c": "Cócteles", "p": 8.5, "o": 5, "d": "Bacardí, Malibú, coco y piña"}, {"id": "c-coctel-cosmopolitan", "n": "Cosmopolitan", "c": "Cócteles", "p": 8.5, "o": 6, "d": "Vodka, Cointreau y zumo de arándanos"}, {"id": "c-coctel-long-island-iced-tea", "n": "Long Island Iced Tea", "c": "Cócteles", "p": 8.5, "o": 7, "d": "Tequila, vodka, ron oscuro, Cointreau, ginebra, limón y cola"}, {"id": "c-coctel-kama-sutra", "n": "Kama Sutra", "c": "Cócteles", "p": 8.5, "o": 8, "d": "Vodka negro, licor de fruta de la pasión y zumo de arándanos"}, {"id": "c-coctel-moscow-mule", "n": "Moscow Mule", "c": "Cócteles", "p": 8.5, "o": 9, "d": "Vodka, lima y ginger beer"}, {"id": "c-coctel-blue-avatar", "n": "Blue Avatar", "c": "Cócteles", "p": 8.5, "o": 10, "d": "Vodka, blue curaçao, zumo de limón y menta"}, {"id": "c-coctel-jamaican-punch", "n": "Jamaican Punch", "c": "Cócteles", "p": 8.5, "o": 11, "d": "Ron oscuro, zumo de naranja, piña y limón, granadina y angostura"}, {"id": "c-coctel-tropical-dreams", "n": "Tropical Dreams", "c": "Cócteles", "p": 8.5, "o": 12, "d": "Vodka, licor de fruta de la pasión, zumo de naranja natural, maracuyá natural y sirope de fresa"}, {"id": "c-coctel-sex-on-the-beach", "n": "Sex on the Beach", "c": "Cócteles", "p": 8.5, "o": 13, "d": "Vodka, licor de melocotón, zumo de naranja y arándanos"}, {"id": "c-coctel-frozen-daiquiri", "n": "Frozen Daiquiri", "c": "Cócteles", "p": 8.5, "o": 14, "d": "Bacardí, lima y fruta a elegir: fresa, mango o melón"}, {"id": "c-coctel-margarita", "n": "Margarita", "c": "Cócteles", "p": 8.5, "o": 15, "d": "Tequila, triple seco y zumo de lima o limón"}, {"id": "c-coctel-tequila-sunrise", "n": "Tequila Sunrise", "c": "Cócteles", "p": 8.5, "o": 16, "d": "Tequila, zumo de naranja y granadina"}, {"id": "c-coctel-mai-tai", "n": "Mai Tai", "c": "Cócteles", "p": 8.5, "o": 17, "d": "Ron oscuro, ron overproof, Cointreau, lima y sirope de orgeat"}, {"id": "c-coctel-passion-fruit-caipiroska", "n": "Passion Fruit Caipiroska", "c": "Cócteles especiales", "p": 12, "o": 1, "d": "Vodka, lima, maracuyá natural y soda"}, {"id": "c-coctel-aku-abu", "n": "Aku Abu", "c": "Cócteles especiales", "p": 12, "o": 2, "d": "Ron, zumo de lima y piña, hierbabuena y licor de melocotón"}, {"id": "c-ginebr-beefeater", "n": "Beefeater", "c": "Ginebras", "p": 7.5, "o": 1}, {"id": "c-ginebr-tanqueray", "n": "Tanqueray", "c": "Ginebras", "p": 7.5, "o": 2}, {"id": "c-ginebr-seagram-s", "n": "Seagram's", "c": "Ginebras", "p": 7.5, "o": 3}, {"id": "c-ginebr-bombay-blanco", "n": "Bombay blanco", "c": "Ginebras", "p": 7.5, "o": 4}, {"id": "c-ginebr-puerto-de-indias", "n": "Puerto de Indias", "c": "Ginebras", "p": 7.5, "o": 5}, {"id": "c-ginebr-nordes", "n": "Nordés", "c": "Ginebras", "p": 9, "o": 6}, {"id": "c-ginebr-bombay-sapphire", "n": "Bombay Sapphire", "c": "Ginebras", "p": 9, "o": 7}, {"id": "c-ginebr-bulldog", "n": "Bulldog", "c": "Ginebras", "p": 10, "o": 8}, {"id": "c-ginebr-gin-mare", "n": "Gin Mare", "c": "Ginebras", "p": 12, "o": 9}, {"id": "c-ginebr-brockmans", "n": "Brockmans", "c": "Ginebras", "p": 12, "o": 10}, {"id": "c-ginebr-hendrick-s", "n": "Hendrick's", "c": "Ginebras", "p": 12, "o": 11}, {"id": "c-ginebr-roku-gin", "n": "Roku Gin", "c": "Ginebras", "p": 12, "o": 12}, {"id": "c-ginebr-g-vine", "n": "G'Vine", "c": "Ginebras", "p": 14, "o": 13}, {"id": "c-ginebr-monkey-47", "n": "Monkey 47", "c": "Ginebras", "p": 15, "o": 14}, {"id": "c-whisky-red-label", "n": "Red Label", "c": "Whisky", "p": 7.5, "o": 1}, {"id": "c-whisky-jb", "n": "JB", "c": "Whisky", "p": 7.5, "o": 2}, {"id": "c-whisky-ballantine-s", "n": "Ballantine's", "c": "Whisky", "p": 7.5, "o": 3}, {"id": "c-whisky-cutty-sark", "n": "Cutty Sark", "c": "Whisky", "p": 7.5, "o": 4}, {"id": "c-whisky-dewar-s-white-label", "n": "Dewar's White Label", "c": "Whisky", "p": 7.5, "o": 5}, {"id": "c-whisky-jack-daniel-s", "n": "Jack Daniel's", "c": "Whisky", "p": 10, "o": 6}, {"id": "c-whisky-black-label", "n": "Black Label", "c": "Whisky", "p": 9, "o": 7}, {"id": "c-whisky-buchanan-s-12-anos", "n": "Buchanan's 12 años", "c": "Whisky", "p": 10, "o": 8}, {"id": "c-whisky-old-parr-12-anos", "n": "Old Parr 12 años", "c": "Whisky", "p": 8, "o": 9}, {"id": "c-whisky-chivas-regal-12-anos", "n": "Chivas Regal 12 años", "c": "Whisky", "p": 10, "o": 10}, {"id": "c-vodka-smirnoff", "n": "Smirnoff", "c": "Vodka", "p": 7.5, "o": 1}, {"id": "c-vodka-absolut", "n": "Absolut", "c": "Vodka", "p": 7.5, "o": 2}, {"id": "c-vodka-eristoff-black", "n": "Eristoff Black", "c": "Vodka", "p": 7.5, "o": 3}, {"id": "c-vodka-roberto-cavalli", "n": "Roberto Cavalli", "c": "Vodka", "p": 12, "o": 4}, {"id": "c-vodka-ciroc", "n": "Cîroc", "c": "Vodka", "p": 10, "o": 5}, {"id": "c-vodka-ciroc-summer-citrus", "n": "Cîroc Summer Citrus", "c": "Vodka", "p": 12, "o": 6}, {"id": "c-vodka-belvedere", "n": "Belvedere", "c": "Vodka", "p": 12, "o": 7}, {"id": "c-vodka-grey-goose", "n": "Grey Goose", "c": "Vodka", "p": 12, "o": 8}, {"id": "c-ron-negrita", "n": "Negrita", "c": "Ron", "p": 7.5, "o": 1}, {"id": "c-ron-santa-teresa", "n": "Santa Teresa", "c": "Ron", "p": 7.5, "o": 2}, {"id": "c-ron-caldas-3-anos", "n": "Caldas 3 años", "c": "Ron", "p": 7.5, "o": 3}, {"id": "c-ron-brugal", "n": "Brugal", "c": "Ron", "p": 7.5, "o": 4}, {"id": "c-ron-cacique", "n": "Cacique", "c": "Ron", "p": 7.5, "o": 5}, {"id": "c-ron-barcelo", "n": "Barceló", "c": "Ron", "p": 7.5, "o": 6}, {"id": "c-ron-bacardi", "n": "Bacardí", "c": "Ron", "p": 7.5, "o": 7}, {"id": "c-ron-brugal-extra-viejo", "n": "Brugal Extra Viejo", "c": "Ron", "p": 9, "o": 8}, {"id": "c-ron-havana-club-7-anos", "n": "Havana Club 7 años", "c": "Ron", "p": 9, "o": 9}, {"id": "c-ron-legendario-7-anos", "n": "Legendario 7 años", "c": "Ron", "p": 9, "o": 10}, {"id": "c-ron-matusalem", "n": "Matusalem", "c": "Ron", "p": 9, "o": 11}, {"id": "c-ron-caldas-5-anos", "n": "Caldas 5 años", "c": "Ron", "p": 9, "o": 12}, {"id": "c-ron-imperial", "n": "Imperial", "c": "Ron", "p": 12, "o": 13}, {"id": "c-ron-brugal-1888", "n": "Brugal 1888", "c": "Ron", "p": 14, "o": 14}, {"id": "c-licore-malibu", "n": "Malibú", "c": "Licores", "p": 7.5, "o": 1}, {"id": "c-licore-jagermeister", "n": "Jägermeister", "c": "Licores", "p": 7.5, "o": 2}, {"id": "c-licore-dry-martini", "n": "Dry Martini", "c": "Licores", "p": 7.5, "o": 3}, {"id": "c-licore-fireball", "n": "Fireball", "c": "Licores", "p": 7.5, "o": 4}, {"id": "c-licore-martini-rojo", "n": "Martini Rojo", "c": "Licores", "p": 7.5, "o": 5}, {"id": "c-licore-martini", "n": "Martini", "c": "Licores", "p": 7.5, "o": 6}, {"id": "c-licore-negroni", "n": "Negroni", "c": "Licores", "p": 7.5, "o": 7}, {"id": "c-licore-baileys", "n": "Baileys", "c": "Licores", "p": 7.5, "o": 8}, {"id": "c-chupit-chupito-standard", "n": "Chupito standard", "c": "Chupitos", "p": 3, "o": 1, "d": "Tequila José Cuervo o Silver, aguardiente, Jägermeister, Fireball, limoncillo, fuego valyrio o cremas de sabores"}, {"id": "c-chupit-chupito-premium", "n": "Chupito premium", "c": "Chupitos", "p": 5, "o": 2, "d": "Tequila Reserva 1800 Silver, Reserva 1800 Reposado o Herradura Reposado"}, {"id": "c-botell-botella-jb", "n": "Botella JB", "c": "Botellas", "p": 40, "o": 1}, {"id": "c-botell-botella-ballantine-s", "n": "Botella Ballantine's", "c": "Botellas", "p": 40, "o": 2}, {"id": "c-botell-botella-red-label", "n": "Botella Red Label", "c": "Botellas", "p": 45, "o": 3}, {"id": "c-botell-botella-jack-daniel-s", "n": "Botella Jack Daniel's", "c": "Botellas", "p": 60, "o": 4}, {"id": "c-botell-botella-black-label", "n": "Botella Black Label", "c": "Botellas", "p": 70, "o": 5}, {"id": "c-botell-botella-chivas", "n": "Botella Chivas", "c": "Botellas", "p": 80, "o": 6}, {"id": "c-botell-botella-buchanan-s", "n": "Botella Buchanan's", "c": "Botellas", "p": 90, "o": 7}, {"id": "c-botell-botella-old-parr", "n": "Botella Old Parr", "c": "Botellas", "p": 70, "o": 8}, {"id": "c-botell-botella-brugal", "n": "Botella Brugal", "c": "Botellas", "p": 45, "o": 9}, {"id": "c-botell-botella-cacique", "n": "Botella Cacique", "c": "Botellas", "p": 45, "o": 10}, {"id": "c-botell-botella-barcelo", "n": "Botella Barceló", "c": "Botellas", "p": 45, "o": 11}, {"id": "c-botell-botella-caldas-3-anos", "n": "Botella Caldas 3 años", "c": "Botellas", "p": 45, "o": 12}, {"id": "c-botell-botella-caldas-5-anos", "n": "Botella Caldas 5 años", "c": "Botellas", "p": 50, "o": 13}, {"id": "c-botell-botella-havana-club", "n": "Botella Havana Club", "c": "Botellas", "p": 60, "o": 14}, {"id": "c-botell-botella-brugal-extra-viejo", "n": "Botella Brugal Extra Viejo", "c": "Botellas", "p": 70, "o": 15}, {"id": "c-botell-botella-brugal-1888", "n": "Botella Brugal 1888", "c": "Botellas", "p": 110, "o": 16}, {"id": "c-botell-botella-jose-cuervo", "n": "Botella José Cuervo", "c": "Botellas", "p": 45, "o": 17}, {"id": "c-botell-botella-jose-cuervo-silver", "n": "Botella José Cuervo Silver", "c": "Botellas", "p": 45, "o": 18}, {"id": "c-botell-botella-reserva-1800-reposado", "n": "Botella Reserva 1800 Reposado", "c": "Botellas", "p": 100, "o": 19}, {"id": "c-botell-botella-reserva-1800-silver", "n": "Botella Reserva 1800 Silver", "c": "Botellas", "p": 100, "o": 20}, {"id": "c-botell-botella-reserva-1800-anejo", "n": "Botella Reserva 1800 Añejo", "c": "Botellas", "p": 110, "o": 21}, {"id": "c-botell-botella-don-julio-silver", "n": "Botella Don Julio Silver", "c": "Botellas", "p": 130, "o": 22}, {"id": "c-botell-botella-patron-reposado", "n": "Botella Patrón Reposado", "c": "Botellas", "p": 130, "o": 23}, {"id": "c-botell-botella-don-julio-reposado", "n": "Botella Don Julio Reposado", "c": "Botellas", "p": 130, "o": 24}, {"id": "c-botell-botella-aguardiente-antioqueno", "n": "Botella Aguardiente Antioqueño", "c": "Botellas", "p": 40, "o": 25}, {"id": "c-botell-botella-aguardiente-amarillo", "n": "Botella Aguardiente Amarillo", "c": "Botellas", "p": 45, "o": 26}, {"id": "c-cachim-cachimba-tarta-de-caramelo", "n": "Cachimba Tarta de caramelo", "c": "Cachimbas", "p": 10, "o": 1}, {"id": "c-cachim-cachimba-mango-maracuya", "n": "Cachimba Mango-maracuyá", "c": "Cachimbas", "p": 10, "o": 2}, {"id": "c-cachim-cachimba-frutos-rojos", "n": "Cachimba Frutos rojos", "c": "Cachimbas", "p": 10, "o": 3}, {"id": "c-cachim-cachimba-menta", "n": "Cachimba Menta", "c": "Cachimbas", "p": 10, "o": 4}, {"id": "c-cachim-cachimba-love-66", "n": "Cachimba Love 66", "c": "Cachimbas", "p": 10, "o": 5}, {"id": "c-cachim-cachimba-sandia", "n": "Cachimba Sandía", "c": "Cachimbas", "p": 10, "o": 6}, {"id": "c-cachim-cachimba-blue-isis", "n": "Cachimba Blue Isis", "c": "Cachimbas", "p": 10, "o": 7}, {"id": "c-cachim-suplemento-mezcla-de-sabores", "n": "Suplemento mezcla de sabores", "c": "Cachimbas", "p": 2, "o": 8, "d": "Para combinar sabores en tu cachimba"}]};
const PAGE=document.body.dataset.page||"inicio";
const slug=s=>s.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
const WA='34614261784';
const PHOTOS={'c-racion-chicken-tenders':'tenders','c-racion-hotdog-especial':'hotdog','c-racion-chuleta-valluna':'chuleta','c-racion-chuzo-de-chorizo':'chorizo','c-granizado-maracumango':'maracumango','c-ginebr-nordes':'nordes','c-coctel-classic-mojito':'mojito-brugal','c-ron-brugal':'mojito-brugal-2','c-cachim-cachimba-mango-maracuya':'cachimba','c-cachim-cachimba-blue-isis':'cachimba-2','c-cachim-cachimba-menta':'cachimba','c-cachim-cachimba-tarta-de-caramelo':'cachimba-2','c-cachim-cachimba-frutos-rojos':'cachimba','c-cachim-cachimba-love-66':'cachimba-2','c-cachim-cachimba-sandia':'cachimba'};
const NEW=new Set(['c-racion-chuleta-valluna','c-racion-hotdog-especial','c-racion-tequenos','c-racion-chuzo-de-chorizo','c-granizado-maracumango']);

/* ---------- utilidades ---------- */
const $=s=>document.querySelector(s);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const r2=n=>Math.round((+n||0)*100)/100;
const eur=n=>r2(n).toLocaleString('es-ES',{style:'currency',currency:'EUR'});
const uid=()=>Date.now().toString(36)+Math.random().toString(36).slice(2,6);
const ls={get(k,d){try{const v=localStorage.getItem(k);return v==null?d:JSON.parse(v)}catch(e){return d}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}};
let tt;function toast(m){const t=$('#toast');t.textContent=m;t.hidden=false;clearTimeout(tt);tt=setTimeout(()=>t.hidden=true,2800)}
const digits=s=>String(s||'').replace(/\D/g,'');
let items=MENU.items;let byId=Object.fromEntries(items.map(i=>[i.id,i]));

/* ---------- mesa desde el QR ---------- */
const MESAS={barra:'Barra',barra1:'Barra 1',barra2:'Barra 2',barra3:'Barra 3',billar:'Mesa de billar'};
function mesaLabel(m){return !m?'':/^\d+$/.test(m)?'Mesa '+m:(MESAS[m]||m)}
let mesa=null;
try{const q=new URLSearchParams(location.search).get('mesa');if(q&&/^([1-9]|1[01]|barra[1-3]?|billar)$/.test(q)){mesa=q;sessionStorage.setItem('blb-mesa',q)}else mesa=sessionStorage.getItem('blb-mesa')}catch(e){}
if(mesa&&$('#mesaBand')){$('#mesaBand').hidden=false;$('#mesaName').textContent=mesaLabel(mesa)}

/* ---------- cliente registrado ---------- */
let user=ls.get('blb-user',null);
function renderWho(){$('#whoName').textContent=user?user.name.split(' ')[0]:'Entrar';$('#whoIni').innerHTML=user?esc(user.name.trim()[0].toUpperCase()):'<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>';
  if(user&&$('#r-name')){$('#r-name').value=$('#r-name').value||user.name;$('#r-phone').value=$('#r-phone').value||user.phone}}

/* ---------- ilustraciones ---------- */
/* ---------- ilustraciones de producto (SVG propio, sin fotos externas) ---------- */
const ART=new Map();let artN=0;
function artTint(p){
  const s=(p.name+' '+(p.desc||'')).toLowerCase();
  const R=[[/blue/,'#3B7BFF'],[/sand[ií]a|love|negroni|martini rojo|frutos rojos|fresa|mora|cosmo|kama|sex on|sunrise/,'#E0466B'],
    [/mango|maracuy|naranja|tropical|passion|jamaican|mai tai|fireball/,'#F5A524'],[/menta|mojito|caipi|aku/,'#5CC98B'],
    [/lulo|lim[oó]n|sprite|margarita|radler/,'#C6E06A'],[/guan[aá]bana|pi[ñn]a colada|baileys|caramelo|malib/,'#EFE3C8'],
    [/milo|coca|pony|j[äa]ger|cola/,'#5A2A12'],[/vino|tinto/,'#8E1B3A'],[/red bull|energ/,'#3E8EDB'],[/nestea|aquarius/,'#E2A64A'],[/t[oó]nica|agua|vodka|smirnoff|absolut|ciroc|c[îi]roc|belvedere|goose|cavalli|eristoff|tequila|cuervo|1800|julio|patr[oó]n|aguardiente|martini|dry/,'#CFE6FF']];
  for(const [r,c] of R)if(r.test(s))return c;
  return {Whisky:'#C8782A',Ron:'#9A4E1C',Ginebras:'#BFE3F2',Cervezas:'#F2B33D',Licores:'#C98A3A',Chupitos:'#F0B341',Botellas:'#B5651D',Cachimbas:'#8E6CF0',Batidos:'#F29BB6',Granizados:'#F5A524',Bebidas:'#E9E2D0','Cócteles':'#F5A524','Cócteles especiales':'#F5A524'}[p.cat]||'#5A84FF';
}
function artKind(p){
  const n=p.name.toLowerCase(),c=p.cat;
  if(c==='Raciones'){if(/alitas/.test(n))return 'wings';if(/tender/.test(n))return 'tenders';if(/nugget/.test(n))return 'nuggets';if(/bravas/.test(n))return 'bravas';if(/salchipapa/.test(n))return 'salchipapa';if(/empanada/.test(n))return 'empanada';if(/combo/.test(n))return 'combo';if(/chuzo|pincho/.test(n))return 'skewer';if(/teque/.test(n))return 'tequenos';if(/chuleta/.test(n))return 'chop';if(/hot ?dog|perro/.test(n))return 'hotdog';return 'fries'}
  if(c==='Granizados')return 'slush';
  if(c==='Cervezas'){if(/ca[ñn]a|michelada/.test(n))return 'pint';if(/jarra/.test(n))return 'mug';if(/cubo/.test(n))return 'bucket';if(/vino|tinto/.test(n))return 'wine';return 'beerbottle'}
  if(c==='Bebidas')return /agua/.test(n)?'water':'can';
  if(c==='Batidos')return 'shake';
  if(c==='Cócteles'||c==='Cócteles especiales'){if(/cosmo|margarita|kama|daiquiri/.test(n))return 'martini';if(/colada|mai tai|jamaican|tropical|avatar|sunrise|aku|passion/.test(n))return 'hurricane';return 'highball'}
  if(c==='Ginebras')return 'balloon';if(c==='Whisky')return 'rocks';if(c==='Vodka'||c==='Ron')return 'highball';if(c==='Licores')return 'rocks';
  if(c==='Chupitos')return 'shots';if(c==='Botellas')return 'bottle';if(c==='Cachimbas')return 'hookah';
  return 'highball';
}
function art(p){
  const key=p.id+'|'+p.name+'|'+p.cat;if(ART.has(key))return ART.get(key);
  const t=artTint(p),k=artKind(p),id='a'+(++artN),G='#DCE6FF';
  const glass=(path,level,extra='',foam=false)=>`<clipPath id="${id}"><path d="${path}"/></clipPath><path d="${path}" fill="#FFFFFF" fill-opacity=".07"/>
    <g clip-path="url(#${id})"><rect x="0" y="${level}" width="100" height="100" fill="${t}" fill-opacity=".9"/>${foam?`<rect x="0" y="${level-8}" width="100" height="9" fill="#FFF8E6"/>`:''}${extra}</g>
    <path d="${path}" fill="none" stroke="${G}" stroke-opacity=".75" stroke-width="2" stroke-linejoin="round"/>`;
  const ice=(x,y)=>`<rect x="${x}" y="${y}" width="11" height="11" rx="2" fill="#fff" fill-opacity=".45" transform="rotate(14 ${x+5} ${y+5})"/>`;
  const plate=`<ellipse cx="50" cy="74" rx="40" ry="13" fill="#E9EEFB"/><ellipse cx="50" cy="72" rx="31" ry="9" fill="#F7F9FF"/>`;
  const gold='#E9A93A',crust='#C9802A';
  let s='';
  switch(k){
    case 'highball':s=glass('M31 22 L69 22 L66 84 L34 84 Z',36,ice(38,40)+ice(52,52))+`<line x1="60" y1="8" x2="53" y2="44" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round"/><circle cx="33" cy="23" r="7" fill="#9AD35A" stroke="#E8F7D0" stroke-width="2"/>`;break;
    case 'martini':s=glass('M20 22 L80 22 L50 54 Z',30)+`<line x1="50" y1="54" x2="50" y2="82" stroke="${G}" stroke-width="2.5"/><ellipse cx="50" cy="84" rx="15" ry="3.5" fill="${G}" fill-opacity=".8"/><circle cx="66" cy="22" r="5" fill="#C81E3A"/><path d="M66 17 q4 -8 9 -9" stroke="#3E7D3A" stroke-width="1.6" fill="none"/>`;break;
    case 'hurricane':s=glass('M35 16 C30 38 40 46 38 60 C36 74 42 82 50 82 C58 82 64 74 62 60 C60 46 70 38 65 16 Z',30,`<rect x="0" y="62" width="100" height="40" fill="#C81E3A" fill-opacity=".45"/>`+ice(44,40))+`<circle cx="64" cy="18" r="8" fill="#F7C948" stroke="#FFF2C2" stroke-width="2"/><path d="M38 10 L50 30" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round"/><path d="M70 10 l6 -4 M70 10 l2 -7" stroke="#3E9D4A" stroke-width="2.5" stroke-linecap="round"/>`;break;
    case 'rocks':s=glass('M27 42 L73 42 L70 84 L30 84 Z',58,ice(40,60)+ice(52,64));break;
    case 'balloon':s=glass('M27 18 C23 50 35 62 50 62 C65 62 77 50 73 18 Z',36,ice(38,40)+ice(52,44)+`<circle cx="44" cy="52" r="5" fill="#8BC34A" fill-opacity=".8"/>`)+`<line x1="50" y1="62" x2="50" y2="82" stroke="${G}" stroke-width="2.5"/><ellipse cx="50" cy="84" rx="15" ry="3.5" fill="${G}" fill-opacity=".8"/><path d="M66 12 q6 10 -2 22" stroke="#4E8A3A" stroke-width="2" fill="none"/>`;break;
    case 'pint':s=glass('M32 16 L68 16 L63 84 L37 84 Z',30,'',true);break;
    case 'mug':s=glass('M26 20 L64 20 L64 82 Q64 86 60 86 L30 86 Q26 86 26 82 Z',32,'<rect x="30" y="40" width="4" height="40" fill="#fff" fill-opacity=".25"/>',true)+`<path d="M64 34 h8 q8 0 8 10 v14 q0 10 -8 10 h-8" fill="none" stroke="${G}" stroke-opacity=".75" stroke-width="5"/>`;break;
    case 'wine':s=glass('M30 16 C27 44 37 56 50 56 C63 56 73 44 70 16 Z',34)+`<line x1="50" y1="56" x2="50" y2="82" stroke="${G}" stroke-width="2.5"/><ellipse cx="50" cy="84" rx="14" ry="3.5" fill="${G}" fill-opacity=".8"/>`;break;
    case 'beerbottle':{const b=/heineken/i.test(p.name)?'#2E7D32':/corona/i.test(p.name)?'#E8D9A8':'#7A4A1E';s=`<path d="M44 8 h12 v16 c0 6 11 9 11 20 v40 c0 4 -2 6 -6 6 h-22 c-4 0 -6 -2 -6 -6 v-40 c0 -11 11 -14 11 -20 z" fill="${b}"/><rect x="44" y="6" width="12" height="5" rx="1.5" fill="#D4AF37"/><rect x="36" y="50" width="28" height="20" rx="3" fill="#F6F1E4"/><rect x="40" y="56" width="20" height="3" fill="#C62828" fill-opacity=".8"/><rect x="40" y="62" width="14" height="2" fill="#7A6A50"/><rect x="38" y="30" width="3" height="50" rx="1.5" fill="#fff" fill-opacity=".25"/>`;break}
    case 'bucket':s=`<path d="M44 10 h6 v14 c0 3 4 5 4 10 v14 h-14 v-14 c0 -5 4 -7 4 -10z" fill="#7A4A1E"/><path d="M58 14 h6 v12 c0 3 4 5 4 10 v12 h-14 v-12 c0 -5 4 -7 4 -10z" fill="#2E7D32"/><path d="M32 18 h6 v12 c0 3 4 5 4 10 v8 h-14 v-8 c0 -5 4 -7 4 -10z" fill="#E8D9A8"/><path d="M20 42 L80 42 L72 86 L28 86 Z" fill="#AAB6CC"/><path d="M20 42 L80 42 L79 48 L21 48 Z" fill="#DCE3F0"/><rect x="34" y="54" width="32" height="3" fill="#fff" fill-opacity=".35"/>`;break;
    case 'can':{const dark=/coca|pony/i.test(p.name);s=`<rect x="33" y="16" width="34" height="68" rx="7" fill="${t}"/><ellipse cx="50" cy="17" rx="15" ry="3.5" fill="#C9D2E3"/><path d="M33 50 C42 42 58 58 67 48 V60 C58 70 42 54 33 62 Z" fill="#fff" fill-opacity="${dark?'.85':'.45'}"/><rect x="37" y="24" width="4" height="54" rx="2" fill="#fff" fill-opacity=".25"/>`;break}
    case 'water':s=`<rect x="44" y="8" width="12" height="8" rx="2" fill="#2F6FD6"/><path d="M40 18 h20 c4 4 6 8 6 14 v48 c0 4 -2 6 -6 6 h-20 c-4 0 -6 -2 -6 -6 v-48 c0 -6 2 -10 6 -14z" fill="#CFE6FF" fill-opacity=".55" stroke="#E6F2FF" stroke-width="2"/><rect x="34" y="46" width="32" height="16" fill="#2F6FD6" fill-opacity=".8"/><path d="M38 70 q12 -6 24 0" stroke="#fff" stroke-opacity=".6" stroke-width="2" fill="none"/>`;break;
    case 'shake':s=glass('M30 30 L70 30 L63 86 L37 86 Z',36)+`<circle cx="40" cy="28" r="9" fill="#FFF8EE"/><circle cx="52" cy="24" r="11" fill="#FFF8EE"/><circle cx="63" cy="29" r="8" fill="#FFF8EE"/><line x1="58" y1="6" x2="54" y2="28" stroke="#E0466B" stroke-width="3.5" stroke-linecap="round"/><circle cx="46" cy="18" r="4" fill="${t}"/>`;break;
    case 'shots':s=[[22,0],[40,-6],[58,0]].map(([x,dy],i)=>{const path=`M${x} ${44+dy} L${x+20} ${44+dy} L${x+18} ${76+dy} L${x+2} ${76+dy} Z`;return `<clipPath id="${id}s${i}"><path d="${path}"/></clipPath><path d="${path}" fill="#fff" fill-opacity=".07"/><g clip-path="url(#${id}s${i})"><rect x="0" y="${52+dy}" width="100" height="40" fill="${i===1?'#5A2A12':t}"/></g><path d="${path}" fill="none" stroke="${G}" stroke-width="2"/>`}).join('')+`<circle cx="30" cy="42" r="5" fill="#C6E06A"/>`;break;
    case 'bottle':{const clear=/tequila|cuervo|1800|julio|patr|aguardiente/i.test(p.name);s=`<path d="M44 6 h12 v20 c0 4 13 8 13 20 v38 c0 4 -3 6 -6 6 h-26 c-3 0 -6 -2 -6 -6 v-38 c0 -12 13 -16 13 -20 z" fill="${clear?'#E9F3FF':'#2A1A10'}" fill-opacity="${clear?'.55':'1'}" stroke="#E6EEFF" stroke-opacity=".5" stroke-width="1.5"/>${clear?`<path d="M32 60 h36 v24 c0 4 -3 6 -6 6 h-24 c-3 0 -6 -2 -6 -6z" fill="${t}" fill-opacity=".6"/>`:`<path d="M32 50 h36 v34 c0 4 -3 6 -6 6 h-24 c-3 0 -6 -2 -6 -6z" fill="${t}" fill-opacity=".9"/>`}<rect x="44" y="4" width="12" height="7" rx="1.5" fill="#D4AF37"/><rect x="36" y="54" width="28" height="18" rx="2" fill="#F6F1E4"/><rect x="40" y="60" width="20" height="2.5" fill="#1C2A5A"/><rect x="42" y="65" width="16" height="2" fill="#9A8A60"/>`;break}
    case 'hookah':s=`<path d="M68 22 C82 14 76 2 88 0" stroke="#fff" stroke-opacity=".35" stroke-width="3" fill="none"/><path d="M74 30 C90 22 84 10 96 6" stroke="#fff" stroke-opacity=".25" stroke-width="3" fill="none"/><path d="M42 14 h16 l-3 8 h-10z" fill="#3A3A48"/><rect x="47" y="22" width="6" height="34" fill="#C9A44C"/><ellipse cx="50" cy="40" rx="8" ry="3" fill="#C9A44C"/><path d="M50 56 C30 58 30 88 50 88 C70 88 70 58 50 56 Z" fill="${t}" fill-opacity=".85" stroke="#E6EEFF" stroke-opacity=".6" stroke-width="2"/><path d="M54 30 C76 34 80 60 70 74" stroke="#2B2B36" stroke-width="3.5" fill="none" stroke-linecap="round"/><ellipse cx="44" cy="68" rx="4" ry="8" fill="#fff" fill-opacity=".3"/>`;break;
    case 'fries':s=[30,36,42,48,54,60,66].map((x,i)=>`<rect x="${x}" y="${16+(i%3)*5}" width="5" height="36" rx="1.5" fill="#F7C948" stroke="#E0A92A" stroke-width=".8" transform="rotate(${(i-3)*4} ${x} 50)"/>`).join('')+`<path d="M28 44 L72 44 L64 88 L36 88 Z" fill="#D62839"/><path d="M42 58 q8 8 16 0" stroke="#fff" stroke-width="3" fill="none"/>`;break;
    case 'wings':s=plate+[[34,60,-25],[54,56,10],[44,68,-5],[64,66,30]].map(([x,y,r])=>`<g transform="rotate(${r} ${x} ${y})"><rect x="${x+8}" y="${y-2}" width="10" height="4" rx="2" fill="#F5EBDD"/><circle cx="${x+19}" cy="${y-2}" r="2.6" fill="#F5EBDD"/><circle cx="${x+19}" cy="${y+2}" r="2.6" fill="#F5EBDD"/><ellipse cx="${x}" cy="${y}" rx="11" ry="7.5" fill="#B5461C"/><ellipse cx="${x-3}" cy="${y-2}" rx="5" ry="2.5" fill="#E07A3A" fill-opacity=".8"/></g>`).join('')+`<circle cx="72" cy="52" r="7" fill="#fff"/><circle cx="72" cy="52" r="5" fill="#F3E3B0"/>`;break;
    case 'tenders':s=plate+[[30,64,-15],[42,58,10],[54,66,-8],[46,72,20]].map(([x,y,r])=>`<rect x="${x}" y="${y-5}" width="24" height="10" rx="5" fill="${gold}" stroke="${crust}" stroke-width="1.2" transform="rotate(${r} ${x+12} ${y})"/>`).join('')+`<circle cx="74" cy="58" r="8" fill="#fff"/><circle cx="74" cy="58" r="6" fill="#E8B23A"/>`;break;
    case 'nuggets':s=plate+[[34,66],[46,62],[58,68],[42,74],[54,58],[62,74]].map(([x,y])=>`<path d="M${x-7} ${y} q0 -7 7 -7 q8 0 8 6 q0 7 -8 7 q-7 0 -7 -6z" fill="${gold}" stroke="${crust}" stroke-width="1.2"/>`).join('')+`<circle cx="76" cy="58" r="7" fill="#fff"/><circle cx="76" cy="58" r="5" fill="#D9481F"/>`;break;
    case 'bravas':s=plate+[[34,64],[44,60],[54,64],[40,70],[50,72],[60,70],[64,62]].map(([x,y])=>`<rect x="${x-5}" y="${y-5}" width="10" height="10" rx="3" fill="#F2B544" stroke="#D18A1E" stroke-width="1"/>`).join('')+`<path d="M32 62 q8 -6 14 0 t14 0 t10 2" stroke="#D9341F" stroke-width="3.5" fill="none" stroke-linecap="round"/>`+[[40,66],[52,68],[60,64]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="2" fill="#FFF8E1"/>`).join('');break;
    case 'salchipapa':s=plate+[30,36,42,48,54,60,66].map((x,i)=>`<rect x="${x}" y="${60+(i%2)*4}" width="16" height="4.5" rx="2" fill="#F7C948" transform="rotate(${(i-3)*18} ${x+8} 66)"/>`).join('')+[[38,64],[50,60],[60,68],[46,72]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="5" fill="#B4442A" stroke="#7E2A18" stroke-width="1"/>`).join('')+`<path d="M34 58 q16 -6 32 2" stroke="#E9C33A" stroke-width="2.5" fill="none"/><path d="M36 70 q14 6 28 -2" stroke="#D9341F" stroke-width="2.5" fill="none"/>`;break;
    case 'empanada':s=plate+`<path d="M24 70 Q50 30 76 70 Z" fill="${gold}" stroke="${crust}" stroke-width="2"/>`+[28,34,40,46,52,58,64,70].map(x=>`<circle cx="${x+1}" cy="69" r="2.4" fill="${crust}"/>`).join('')+`<path d="M38 58 q12 -8 24 0" stroke="#F7D488" stroke-width="2" fill="none"/>`;break;
    case 'skewer':s=plate+`<line x1="18" y1="84" x2="84" y2="38" stroke="#D9B98A" stroke-width="3.5" stroke-linecap="round"/>`+[[34,73],[49,62],[64,52]].map(([x,y])=>`<g transform="rotate(-35 ${x} ${y})"><rect x="${x-9}" y="${y-7}" width="18" height="14" rx="6" fill="#A8321E" stroke="#6E1E10" stroke-width="1.5"/><circle cx="${x-3}" cy="${y-2}" r="1.8" fill="#E9A07A"/><circle cx="${x+3}" cy="${y+2}" r="1.5" fill="#E9A07A"/></g>`).join('')+`<circle cx="74" cy="72" r="9" fill="#F2C94C" stroke="#D9A72A" stroke-width="1.5"/>`;break;
    case 'tequenos':s=plate+[[30,60,-12],[40,66,-6],[50,62,4],[60,68,10],[46,74,-2]].map(([x,y,r])=>`<rect x="${x-4}" y="${y-5}" width="24" height="9" rx="4.5" fill="${gold}" stroke="${crust}" stroke-width="1.2" transform="rotate(${r} ${x+8} ${y})"/>`).join('')+`<circle cx="76" cy="56" r="8" fill="#fff"/><circle cx="76" cy="56" r="6" fill="#F3B6A6"/>`;break;
    case 'chop':s=plate+`<path d="M26 66 q-2 -14 12 -16 q10 -6 18 2 q10 2 8 12 q-2 10 -16 10 q-18 2 -22 -8z" fill="${gold}" stroke="${crust}" stroke-width="1.8"/>`+[[36,60],[46,58],[52,66],[40,68]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="1.4" fill="${crust}"/>`).join('')+`<ellipse cx="70" cy="62" rx="12" ry="8" fill="#FFFDF5" stroke="#E8E2D2" stroke-width="1"/><circle cx="64" cy="76" r="5" fill="#E2463A"/><circle cx="64" cy="76" r="2.4" fill="#F7A08F"/><rect x="72" y="72" width="10" height="7" rx="3" fill="#F2C94C"/>`;break;
    case 'hotdog':s=`<ellipse cx="50" cy="80" rx="40" ry="8" fill="#E9EEFB" fill-opacity=".9"/><path d="M14 60 q36 26 72 0 q2 14 -8 18 q-28 10 -56 0 q-10 -4 -8 -18z" fill="#D99A4E"/><rect x="12" y="52" width="76" height="12" rx="6" fill="#A8321E"/><path d="M18 52 q6 -6 10 0 t10 0 t10 0 t10 0 t10 0 t10 0" stroke="#F5D547" stroke-width="2.5" fill="none"/><path d="M20 56 q6 -5 10 0 t10 0 t10 0 t10 0 t10 0" stroke="#F3B6A6" stroke-width="2.2" fill="none"/><path d="M14 58 q36 -22 72 0 q-2 -10 -10 -14 q-26 -10 -52 0 q-8 4 -10 14z" fill="#E7B26A"/>`+[[30,44],[44,40],[58,40],[70,44]].map(([x,y])=>`<rect x="${x}" y="${y}" width="5" height="2.5" rx="1.2" fill="#B5731E"/>`).join('')+`<ellipse cx="48" cy="34" rx="7" ry="5.5" fill="#FFFDF5"/><circle cx="48" cy="34" r="2.6" fill="#F2B33D"/>`;break;
    case 'slush':s=glass('M30 36 L70 36 L64 88 L36 88 Z',40,`<rect x="40" y="56" width="7" height="7" rx="1.5" fill="#FFD27A"/><rect x="52" y="66" width="7" height="7" rx="1.5" fill="#FFD27A"/>`)+`<path d="M30 36 q20 -18 40 0 z" fill="#F7B54A" stroke="#E7953A" stroke-width="1.5"/><path d="M30 37 L70 37" stroke="#C8321E" stroke-width="3"/>`+[34,40,46,52,58,64].map(x=>`<circle cx="${x}" cy="35" r="1.4" fill="#C8321E"/>`).join('')+`<line x1="56" y1="6" x2="52" y2="34" stroke="#E0466B" stroke-width="3.5" stroke-linecap="round"/><circle cx="34" cy="34" r="6" fill="#9AD35A" stroke="#E8F7D0" stroke-width="1.5"/>`;break;
    case 'combo':s=plate+`<ellipse cx="38" cy="66" rx="10" ry="7" fill="#B5461C"/><rect x="46" y="64" width="8" height="3.5" rx="1.7" fill="#F5EBDD"/>`+[[58,62],[66,68]].map(([x,y])=>`<path d="M${x-6} ${y} q0 -6 6 -6 q7 0 7 5 q0 6 -7 6 q-6 0 -6 -5z" fill="${gold}" stroke="${crust}" stroke-width="1"/>`).join('')+[44,48,52,56].map((x,i)=>`<rect x="${x}" y="70" width="14" height="4" rx="2" fill="#F7C948" transform="rotate(${(i-1.5)*14} ${x+7} 72)"/>`).join('')+`<rect x="26" y="34" width="12" height="22" rx="2" fill="#5A2A12" fill-opacity=".85" stroke="${G}" stroke-width="1.5"/><rect x="66" y="34" width="12" height="22" rx="2" fill="#F2B33D" fill-opacity=".9" stroke="${G}" stroke-width="1.5"/>`;break;
  }
  const out=`<svg viewBox="0 0 100 100" aria-hidden="true" focusable="false"><rect width="100" height="100" rx="20" fill="${t}" fill-opacity=".16"/><circle cx="50" cy="56" r="40" fill="#FFFFFF" fill-opacity=".04"/>${s}</svg>`;
  ART.set(key,out);return out;
}

function pic(i){const ph=PHOTOS[i.id];if(ph)return `<img src="img/${ph}.webp" alt="${esc(i.n)}" loading="lazy">`;return art({id:i.id,name:i.n,desc:i.d||'',cat:i.c})}

/* ---------- carta ---------- */
let cat=MENU.cats[0],q='';
const avail=i=>!i.off&&i.p>0;
const fromP=i=>(i.x||[]).some(g=>g.choices.some(c=>c.p>0));
function renderCats(){if(PAGE==='inicio'){renderTiles();return}
  if(PAGE==='carta'){$('#cats').innerHTML=MENU.cats.filter(c=>items.some(i=>i.c===c)).map(c=>`<a class="chip" href="#${slug(c)}" data-cs="${slug(c)}">${esc(c)}</a>`).join('');return}
  $('#cats').innerHTML=MENU.cats.filter(c=>items.some(i=>i.c===c)).map(c=>`<button class="chip ${c===cat&&!q?'on':''}" data-act="cat" data-c="${esc(c)}">${esc(c)}</button>`).join('')}
function renderGrid(){if(PAGE==='inicio')return;if(PAGE==='carta'){renderList();return}
  
  const qq=q.toLowerCase().trim();
  const list=items.filter(i=>qq?(i.n+' '+i.c+' '+(i.d||'')).toLowerCase().includes(qq):i.c===cat);
  $('#grid').innerHTML=list.length?list.map(i=>`<article class="item ${avail(i)?'':'off'}">
    <div class="pimg">${pic(i)}${NEW.has(i.id)?'<span class="tag">Nuevo</span>':''}</div>
    <div class="body"><h4>${esc(i.n)}</h4>${i.d?`<p>${esc(i.d)}</p>`:''}
    <div class="foot">${avail(i)?`<span class="price num">${fromP(i)?'<small>desde</small>':''}${eur(i.p)}</span><button class="add" data-act="add" data-id="${i.id}" aria-label="Añadir ${esc(i.n)}">+</button>`:`<span class="price" style="font-size:18px;color:var(--muted)">Próximamente</span>`}</div></div></article>`).join(''):`<p class="empty-note">No encontramos «${esc(q)}». Prueba con otra palabra.</p>`;
}

function renderTiles(){
  const cover={'Raciones':'img/chuleta.webp','Granizados':'img/maracumango.webp','Cócteles':'img/mojito-fresa.webp','Ginebras':'img/nordes.webp','Ron':'img/mojito-brugal-2.webp','Cachimbas':'img/cachimba.webp','Licores':'img/licores.webp'};
  const el=$('#catTiles');if(!el)return;
  el.innerHTML=MENU.cats.filter(c=>items.some(i=>i.c===c)).map(c=>{const f=items.find(i=>i.c===c);const n=items.filter(i=>i.c===c).length;
    return `<a class="ctile" href="carta.html#${slug(c)}"><span class="cimg">${cover[c]?`<img src="${cover[c]}" alt="" loading="lazy">`:art({id:f.id,name:f.n,desc:f.d||'',cat:f.c})}</span><span class="ctx"><b>${esc(c)}</b><small>${n} ${n===1?'producto':'productos'}</small></span></a>`}).join('');
}
function renderList(){
  const qq=q.toLowerCase().trim();
  const html=MENU.cats.map(c=>{const list=items.filter(i=>i.c===c&&(!qq||(i.n+' '+i.c+' '+(i.d||'')).toLowerCase().includes(qq)));if(!list.length)return '';
    return `<section class="cs" id="${slug(c)}"><h2>${esc(c)}</h2>${list.map(i=>`<article class="mi ${avail(i)?'':'off'}" ${avail(i)?`data-act="add" data-id="${i.id}"`:''}>
      <div class="th">${pic(i)}</div>
      <div class="mt"><div class="nl"><h3>${esc(i.n)}${NEW.has(i.id)?' <em>Nuevo</em>':''}</h3><span class="dots"></span><span class="pr num">${avail(i)?(fromP(i)?'<small>desde </small>':'')+eur(i.p):'Pronto'}</span></div>
      ${i.d?`<p>${esc(i.d)}</p>`:''}${i.x?`<p class="ox">${i.x.map(g=>'Elige '+esc(g.name.toLowerCase())).join(' · ')}</p>`:''}</div>
      ${avail(i)?`<button class="addc" data-act="add" data-id="${i.id}" aria-label="Añadir ${esc(i.n)}">+</button>`:'<span></span>'}</article>`).join('')}</section>`}).join('');
  $('#list').innerHTML=html||`<p class="none">No encontramos «${esc(q)}». Prueba con otra palabra.</p>`;
  spy();
}
let spyObs=null;
function spy(){if(!('IntersectionObserver' in window))return;if(spyObs)spyObs.disconnect();
  spyObs=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){document.querySelectorAll('#cats .chip').forEach(a=>{const on=a.dataset.cs===e.target.id;a.classList.toggle('on',on);if(on)a.scrollIntoView({block:'nearest',inline:'center'})})}})},{rootMargin:'-140px 0px -70% 0px'});
  document.querySelectorAll('.cs').forEach(s=>spyObs.observe(s))}

/* ---------- pedido ---------- */
let cart=ls.get('blb-cart',[]).filter(c=>byId[c.id]);
const saveCart=()=>{ls.set('blb-cart',cart);renderFab()};
const unit=c=>r2(byId[c.id].p+(c.sel||[]).reduce((s,x)=>s+(+x.p||0),0));
const lineName=c=>byId[c.id].n+((c.sel||[]).length?' · '+c.sel.map(x=>x.n).join(' · '):'');
const cartTotal=()=>r2(cart.reduce((s,c)=>s+unit(c)*c.qty,0));
function renderFab(){const n=cart.reduce((s,c)=>s+c.qty,0);$('#fab').hidden=!n;$('#fabN').textContent=n;$('#fabT').textContent=eur(cartTotal())}
function addToCart(id,sel){const key=id+'|'+(sel||[]).map(x=>x.n).join('|');const ex=cart.find(c=>c.key===key);if(ex)ex.qty++;else cart.push({key,id,sel:sel||[],qty:1});saveCart();toast('Añadido: '+lineName({id,sel:sel||[]}))}

/* opciones obligatorias */
let opt=null;
function openOpts(id){opt={id,sel:[]};renderOpts()}
function renderOpts(){const i=byId[opt.id];const miss=i.x.filter((g,k)=>!opt.sel[k]).map(g=>g.name);const extra=opt.sel.filter(Boolean).reduce((s,x)=>s+(+x.p||0),0);
  modal(`<div class="mh"><div><h3>${esc(i.n)}</h3>${i.d?`<p>${esc(i.d)}</p>`:''}</div><button class="x" data-act="close" aria-label="Cerrar">✕</button></div>`+
  i.x.map((g,k)=>`<div class="og"><h5>${esc(g.name)} <span class="req ${opt.sel[k]?'ok':''}">${opt.sel[k]?'Elegido':'Obligatorio'}</span></h5><div class="opts">${g.choices.map((c,ci)=>`<button class="opt ${opt.sel[k]&&opt.sel[k].n===c.n?'on':''}" data-act="pick" data-g="${k}" data-c="${ci}">${esc(c.n)}${c.p?' · +'+eur(c.p):''}</button>`).join('')}</div></div>`).join('')+
  `<div class="mfoot"><button class="btn line" data-act="close">Cancelar</button><button class="btn solid" data-act="optok" ${miss.length?'disabled':''}>${miss.length?'Elige '+esc(miss.join(' y ').toLowerCase()):'Añadir · '+eur(i.p+extra)}</button></div>`)}

function openCart(){
  if(!cart.length){closeModal();return}
  const mode=ls.get('blb-mode',mesa?'mesa':'recoger');
  modal(`<div class="mh"><div><h3>Tu pedido</h3><p>${mesa?esc(mesaLabel(mesa))+' · ':''}Pagas al final, en barra.</p></div><button class="x" data-act="close" aria-label="Cerrar">✕</button></div>
  ${cart.map((c,k)=>`<div class="cl"><div class="qty"><button data-act="cq" data-k="${k}" data-d="-1" aria-label="Quitar uno">−</button><span class="num">${c.qty}</span><button data-act="cq" data-k="${k}" data-d="1" aria-label="Añadir uno">+</button></div><div><b>${esc(lineName(c))}</b><small class="num">${eur(unit(c))} / ud.</small></div><b class="num">${eur(unit(c)*c.qty)}</b></div>`).join('')}
  <div class="tot"><span>Total</span><b class="num">${eur(cartTotal())}</b></div>
  ${mesa?`<p style="margin:0 0 12px;color:var(--ice)">Lo llevamos a <b>${esc(mesaLabel(mesa))}</b>.</p>`:`<div class="seg" style="margin-bottom:12px"><button class="${mode==='recoger'?'on':''}" data-act="mode" data-m="recoger">Para recoger</button><button class="${mode==='local'?'on':''}" data-act="mode" data-m="local">Estoy en el bar</button></div>
  ${mode==='local'?`<label class="l" style="margin-bottom:12px">¿En qué mesa estás?<select class="inp" id="c-mesa">${['1','2','3','4','5','6','7','8','9','10','11','barra1','barra2','barra3','billar'].map(m=>`<option value="${m}">${mesaLabel(m)}</option>`).join('')}</select></label>`:`<label class="l" style="margin-bottom:12px">¿A qué hora lo recoges?<input class="inp" id="c-hora" type="time"></label>`}`}
  <label class="l">Nota para la barra o la cocina<textarea class="inp" id="c-note" placeholder="Ej.: sin hielo, salsas aparte…">${esc(ls.get('blb-note',''))}</textarea></label>
  <div class="mfoot"><button class="btn line" data-act="close">Seguir pidiendo</button><button class="btn solid" data-act="send">${user?'Enviar pedido':'Regístrate y envía'}</button></div>
  <p class="legal" style="margin-top:12px">Tu pedido llega directo al bar. ${mesa||mode==='local'?'Tu mesa queda abierta: puedes seguir pidiendo y la cuenta la cierra el personal al cobrar.':'Te avisamos aquí cuando esté listo para recoger.'}</p>`)}

/* ---------- servidor del bar ---------- */
async function api(path,body){
  const r=await fetch('/api/'+path,{method:body?'POST':'GET',headers:Object.assign({'content-type':'application/json'},user&&user.token?{authorization:'Bearer '+user.token}:{}),body:body?JSON.stringify(body):undefined,cache:'no-store'});
  let d={};try{d=await r.json()}catch(e){}
  if(!r.ok){const e=new Error(d.error||'No hemos podido conectar con el bar. Revisa tu conexión.');e.status=r.status;throw e}
  return d;
}
async function ensureToken(force){
  if(!user)return false;if(user.token&&!force)return true;
  const d=await api('cliente',{name:user.name,phone:user.phone,adulto:true,acepto:true});
  user=Object.assign({},user,d);ls.set('blb-user',user);return true;
}
async function withToken(fn){
  await ensureToken();
  try{return await fn()}catch(e){if(e.status===401){await ensureToken(true);return await fn()}throw e}
}
async function loadMenu(){
  try{const d=await api('carta');if(!d||!Array.isArray(d.items)||!d.items.length)return;
    items=d.items;byId=Object.fromEntries(items.map(i=>[i.id,i]));MENU.items=items;MENU.cats=d.cats;
    cart=cart.filter(c=>byId[c.id]);saveCart();renderCats();renderGrid();
  }catch(e){}
}

async function sendOrder(){
  if(!user){regForm('send');return}
  const note=($('#c-note')||{}).value||'';
  const mode=ls.get('blb-mode',mesa?'mesa':'recoger');
  const body={items:cart.map(c=>({id:c.id,qty:c.qty,sel:c.sel})),note};
  let where;
  if(mesa){body.mesa=mesa;where=mesaLabel(mesa)}
  else if(mode==='local'){const m=($('#c-mesa')||{}).value||'';body.mesa=m;where=mesaLabel(m)}
  else{const h=($('#c-hora')||{}).value;if(!h){toast('Indica a qué hora lo recoges');return}body.hora=h;where='Para recoger a las '+h}
  const btn=$('[data-act=send]');if(btn){btn.disabled=true;btn.textContent='Enviando…'}
  const lines=cart.map(c=>`${c.qty}× ${lineName(c)} — ${eur(unit(c)*c.qty)}`);const total=eur(cartTotal());
  try{await withToken(()=>api('pedido',body))}
  catch(e){
    const text=`🧾 *PEDIDO WEB · ${where}*\n👤 ${user.name} · ${user.phone}\n\n${lines.join('\n')}\n\n*Total: ${total}*${note?'\n📝 '+note:''}`;
    modal(`<div class="mh"><div><h3>No se pudo enviar</h3><p>${esc(e.message)}</p></div><button class="x" data-act="close" aria-label="Cerrar">✕</button></div>
      <p>Tu pedido sigue en el carrito. Vuelve a intentarlo o mándalo por WhatsApp.</p>
      <div class="mfoot"><button class="btn line" data-act="cart">Volver al pedido</button><a class="btn solid" href="https://wa.me/${WA}?text=${encodeURIComponent(text)}" target="_blank" rel="noopener">Enviar por WhatsApp</a></div>`);
    return;
  }
  ls.set('blb-note','');
  const hist=ls.get('blb-hist',[]);hist.unshift({at:Date.now(),where,lines,total});ls.set('blb-hist',hist.slice(0,20));
  cart=[];saveCart();
  const canNotif='Notification' in window&&Notification.permission==='default';
  modal(`<div class="mh"><div><h3>¡Pedido enviado!</h3><p>${esc(where)} · ${total}</p></div><button class="x" data-act="close" aria-label="Cerrar">✕</button></div>
    <p>Ya lo tiene el bar. ${body.mesa?'Te lo llevamos a la mesa y pagas al final.':'Te avisamos aquí en cuanto esté listo para recoger.'} Cuando esté preparado te saldrá un aviso en esta página.</p>
    ${canNotif?'<p class="legal">Activa los avisos para enterarte aunque estés en otra pestaña.</p>':''}
    <div class="mfoot">${canNotif?'<button class="btn line" data-act="notif">Activar avisos</button>':'<button class="btn line" data-act="close">Seguir pidiendo</button>'}<button class="btn solid" data-act="account">Ver mi cuenta</button></div>`);
  startPoll();
}

/* ---------- registro ---------- */
let after=null;
function regForm(then){after=then||null;
  modal(`<div class="mh"><div><h3>Crea tu cuenta</h3><p>Necesaria para pedir. Solo tu nombre y tu móvil; se guarda en este teléfono.</p></div><button class="x" data-act="close" aria-label="Cerrar">✕</button></div>
  <form class="f" id="regForm" novalidate>
   <label class="l full">Nombre<input class="inp" id="g-name" autocomplete="name" value="${esc(user?user.name:'')}"></label>
   <label class="l full">Móvil<input class="inp" id="g-phone" type="tel" inputmode="tel" autocomplete="tel" value="${esc(user?user.phone:'')}"></label>
   <label class="check full"><input type="checkbox" id="g-age"><span>Soy mayor de 18 años.</span></label>
   <label class="check full"><input type="checkbox" id="g-ok"><span>Acepto que Blue Lounge Bar use mis datos para gestionar mis pedidos y reservas. <button type="button" data-act="legal" style="text-decoration:underline">Privacidad</button></span></label>
   <div class="full mfoot" style="margin-top:4px"><button class="btn solid" type="submit">${then==='send'?'Crear cuenta y enviar':'Crear cuenta'}</button></div>
  </form>`)}
async function saveReg(){
  const name=$('#g-name').value.trim(),phone=digits($('#g-phone').value);
  if(name.length<2){toast('Escribe tu nombre');return}
  if(phone.length<9){toast('Escribe un móvil válido (9 cifras)');return}
  if(!$('#g-age').checked){toast('Tienes que ser mayor de 18 años para pedir');return}
  if(!$('#g-ok').checked){toast('Acepta el uso de tus datos para continuar');return}
  const b=$('#regForm [type=submit]');if(b){b.disabled=true;b.textContent='Creando…'}
  try{const d=await api('cliente',{name,phone,adulto:true,acepto:true});user={name:d.name,phone:d.phone,id:d.id,token:d.token,since:Date.now()};ls.set('blb-user',user)}
  catch(e){toast(e.message);if(b){b.disabled=false;b.textContent='Crear cuenta'}return}
  renderWho();
  const a=after;after=null;toast('¡Bienvenido, '+name.split(' ')[0]+'!');
  if(a==='send'){openCart()}else closeModal();
  startPoll();
}

/* ---------- mi cuenta en vivo ---------- */
let yo=null,pollT=null;
const RES_ST={pendiente:'Pendiente de confirmar',confirmada:'Confirmada',llegaron:'Disfrutada',novino:'No asististe',cancelada:'Cancelada',rechazada:'Sin sitio a esa hora'};
async function refreshYo(){
  if(!user)return;
  try{yo=await withToken(()=>api('yo'))}catch(e){return}
  (yo.tables||[]).forEach(t=>{if(t.ready){const k='blb-rdy-'+t.id+'-'+t.ready.at;if(!ls.get(k,false)){ls.set(k,true);if(Date.now()-t.ready.at<3*3600e3)readyAlert(t)}}});
  renderMyBar();
  if($('#sheet [data-acc]')&&!$('#modal').hidden)renderAccount();
}
function startPoll(){clearTimeout(pollT);if(!user)return;
  const tick=async()=>{if(!document.hidden)await refreshYo();const active=yo&&yo.tables&&yo.tables.length;pollT=setTimeout(tick,document.hidden?45000:(active?8000:60000))};tick()}
document.addEventListener('visibilitychange',()=>{if(!document.hidden&&user)startPoll()});

function renderMyBar(){
  let b=$('#mybar');const ts=(yo&&yo.tables)||[];
  if(!user||!ts.length){if(b)b.remove();return}
  if(!b){b=document.createElement('button');b.id='mybar';b.dataset.act='account';document.body.appendChild(b)}
  const t=ts[0];const rd=ts.some(x=>x.ready);
  b.className=rd?'rd':'';
  b.innerHTML=`<span>${rd?'🔔 ¡Listo!':esc(t.temp?'Tu pedido':t.name)}</span><b class="num">${eur(ts.reduce((s,x)=>s+x.total,0))}</b>`;
}
function readyAlert(t){
  try{navigator.vibrate&&navigator.vibrate([250,120,250,120,400])}catch(e){}
  try{const c=new (window.AudioContext||window.webkitAudioContext)();[880,1175,1568].forEach((f,i)=>{const o=c.createOscillator(),g=c.createGain();o.frequency.value=f;o.connect(g);g.connect(c.destination);const t0=c.currentTime+i*.2;g.gain.setValueAtTime(.0001,t0);g.gain.exponentialRampToValueAtTime(.4,t0+.02);g.gain.exponentialRampToValueAtTime(.0001,t0+.18);o.start(t0);o.stop(t0+.2)})}catch(e){}
  try{if('Notification' in window&&Notification.permission==='granted')new Notification('Blue Lounge Bar',{body:t.ready.msg,icon:'img/logo-192.png'})}catch(e){}
  const old=$('.rdy');if(old)old.remove();
  const d=document.createElement('div');d.className='rdy';d.setAttribute('role','alert');
  d.innerHTML=`<span class="bell">🔔</span><div><b>${esc(t.ready.msg||'¡Tu pedido está listo!')}</b><small>${esc(t.temp?'Pedido para recoger':t.name)}</small></div><button data-act="rdyx" aria-label="Cerrar aviso">✕</button>`;
  document.body.appendChild(d);
}
async function askNotif(){try{const p=await Notification.requestPermission();toast(p==='granted'?'Avisos activados':'Sin avisos: te saldrá el aviso dentro de la página')}catch(e){}account()}

async function account(){
  if(!user){regForm();return}
  modal(`<div data-acc><div class="mh"><div><h3>Hola, ${esc(user.name.split(' ')[0])}</h3><p>${esc(user.phone)}</p></div><button class="x" data-act="close" aria-label="Cerrar">✕</button></div><p class="legal">Cargando tu cuenta…</p></div>`);
  await refreshYo();renderAccount();
}
function renderAccount(){
  const ts=(yo&&yo.tables)||[],rs=(yo&&yo.reservas)||[];
  const hist=ls.get('blb-hist',[]);
  const tHtml=ts.map(t=>{
    const state=t.ready?`<span class="st ok">${esc(t.ready.msg)}</span>`:t.bill?'<span class="st">Cuenta pedida. Ahora vamos.</span>':t.items.some(i=>!i.sent)?'<span class="st">Pedido recibido en el bar</span>':'<span class="st">En preparación</span>';
    return `<div class="acct"><div class="ah"><b>${esc(t.temp?'Para recoger'+(t.pickup?' a las '+t.pickup:''):t.name)}</b>${state}</div>
      ${t.items.map(i=>`<div class="al"><span>${i.qty}× ${esc(i.name)}${i.mine?' <em>tú</em>':''}</span><b class="num">${eur(i.price*i.qty)}</b></div>`).join('')}
      <div class="al tot"><span>Total ${t.temp?'del pedido':'de la mesa'}</span><b class="num">${eur(t.total)}</b></div>
      ${t.temp?'<p class="legal">Pagas al recogerlo en barra.</p>':`<div class="mfoot"><button class="btn line" data-act="tcall" data-id="${esc(t.id)}" ${t.call&&!t.bill?'disabled':''}>Llamar al camarero</button><button class="btn solid" data-act="tbill" data-id="${esc(t.id)}" ${t.bill?'disabled':''}>${t.bill?'Cuenta pedida':'Pedir la cuenta'}</button></div>
      <p class="legal">La mesa sigue abierta hasta que el personal te cobre: puedes seguir pidiendo desde la carta.</p>`}</div>`}).join('');
  $('#sheet').innerHTML=`<div data-acc><div class="mh"><div><h3>Hola, ${esc(user.name.split(' ')[0])}</h3><p>${esc(user.phone)}</p></div><button class="x" data-act="close" aria-label="Cerrar">✕</button></div>
    <h5 class="ah5">Tu cuenta ahora</h5>${tHtml||`<p class="legal">No tienes ninguna mesa abierta. Escanea el QR de tu mesa o pide desde la <a href="carta.html" style="color:var(--ice)">carta</a>.</p>`}
    ${rs.length?`<h5 class="ah5">Tus reservas</h5><div class="hist">${rs.map(r=>`<div><b>${new Date(r.date+'T12:00').toLocaleDateString('es-ES',{weekday:'long',day:'numeric',month:'long'})} · ${esc(r.time)} · ${esc(r.pax)} pers.</b>${esc(RES_ST[r.status]||r.status)}</div>`).join('')}</div>`:''}
    ${hist.length?`<h5 class="ah5">Pedidos desde este móvil</h5><div class="hist">${hist.slice(0,5).map(h=>`<div><b>${new Date(h.at).toLocaleString('es-ES',{dateStyle:'short',timeStyle:'short'})} · ${esc(h.where)} · ${esc(h.total)}</b>${h.lines.map(esc).join('<br>')}</div>`).join('')}</div>`:''}
    <div class="mfoot"><button class="btn line" data-act="editreg">Editar datos</button><button class="btn line" data-act="logout">Cerrar sesión</button></div></div>`;
}
async function mesaAccion(el,accion){el.disabled=true;
  try{await withToken(()=>api('mesa',{id:el.dataset.id,accion}));toast(accion==='cuenta'?'Cuenta pedida. Ahora vamos':'Hemos avisado al camarero');await refreshYo()}
  catch(e){toast(e.message);el.disabled=false}}

/* estilos de la cuenta y los avisos (compartidos por las dos páginas) */
(function(){const st=document.createElement('style');st.textContent=`
#mybar{position:fixed;left:max(16px,env(safe-area-inset-left,0px));bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:40;display:flex;gap:10px;align-items:center;padding:12px 16px;border-radius:99px;background:#0D1538;color:#fff;border:1.5px solid rgba(190,205,255,.35);font:700 14px var(--fb);box-shadow:0 10px 30px -8px rgba(0,0,0,.6);cursor:pointer}
#mybar.rd{background:#2EC48C;border-color:#2EC48C;color:#04140D;animation:pulse 1.2s infinite}
.rdy{position:fixed;left:50%;top:calc(12px + env(safe-area-inset-top,0px));transform:translateX(-50%);z-index:90;width:min(520px,calc(100% - 24px));display:flex;gap:12px;align-items:center;padding:14px 16px;border-radius:16px;background:#2EC48C;color:#04140D;box-shadow:0 20px 50px rgba(0,0,0,.45);font-family:var(--fb)}
.rdy .bell{font-size:28px}.rdy div{flex:1}.rdy b{display:block;font-size:16px}.rdy small{font-weight:600}.rdy button{font-size:20px;font-weight:800;color:#04140D;width:40px;height:40px}
.acct{border:1px solid rgba(190,205,255,.18);padding:14px;margin-bottom:14px;background:rgba(255,255,255,.03)}
.acct .ah{display:flex;flex-wrap:wrap;gap:6px 12px;align-items:baseline;justify-content:space-between;margin-bottom:8px}
.acct .ah b{font:900 24px/1 var(--fd);text-transform:uppercase}
.acct .st{font-size:13px;font-weight:700;color:#DCE6FF}.acct .st.ok{color:#2EC48C}
.acct .al{display:flex;justify-content:space-between;gap:12px;padding:5px 0;font-size:14px}
.acct .al em{font-style:normal;font-size:10px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;background:#2347D6;color:#fff;padding:2px 6px;border-radius:99px;margin-left:4px}
.acct .al.tot{border-top:1px solid rgba(190,205,255,.18);margin-top:6px;padding-top:10px;font-size:16px}
.ah5{margin:6px 0 10px;font:800 13px var(--fb);letter-spacing:.14em;text-transform:uppercase;color:#fff}
@keyframes pulse{50%{opacity:.75}}`;document.head.appendChild(st)})();

/* ---------- reservas ---------- */
function initResDefaults(){const d=new Date();const iso=d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');$('#r-date').min=iso;$('#r-date').value=iso;$('#r-pax').value='4';if(user){$('#r-name').value=user.name;$('#r-phone').value=user.phone}}
function initRes(){if(!$('#resForm'))return;
  $('#r-pax').innerHTML=Array.from({length:20},(_,k)=>`<option>${k+1}</option>`).join('')+'<option>Más de 20</option>';initResDefaults();
  $('#resForm').addEventListener('submit',e=>{e.preventDefault();
    const v={nombre:$('#r-name').value.trim(),telefono:digits($('#r-phone').value),fecha:$('#r-date').value,hora:$('#r-time').value,personas:$('#r-pax').value,zona:$('#r-zone').value,notas:$('#r-notes').value.trim()};
    if(v.nombre.length<2){toast('Escribe tu nombre');return}if(v.telefono.length<9){toast('Escribe un teléfono válido');return}
    if(!v.fecha||!v.hora){toast('Elige día y hora');return}if(!$('#r-ok').checked){toast('Acepta el uso de tus datos para reservar');return}
    const fd=new Date(v.fecha+'T12:00').toLocaleDateString('es-ES',{weekday:'long',day:'numeric',month:'long'});
    const text=`📅 *RESERVA WEB*\n👤 ${v.nombre} · ${v.telefono}\n🗓️ ${fd} a las ${v.hora}\n👥 ${v.personas} personas · ${v.zona}${v.notas?'\n📝 '+v.notas:''}`;
    const wa='https://wa.me/'+WA+'?text='+encodeURIComponent(text);
    const btn=$('#resForm [type=submit]');if(btn)btn.disabled=true;
    api('reserva',{name:v.nombre,phone:v.telefono,date:v.fecha,time:v.hora,pax:v.personas,zone:v.zona,notes:v.notas}).then(()=>{
      modal(`<div class="mh"><div><h3>¡Reserva enviada!</h3><p>${esc(fd)} · ${esc(v.hora)} · ${esc(v.personas)} pers.</p></div><button class="x" data-act="close" aria-label="Cerrar">✕</button></div><p>Ya la tenemos en la agenda del bar. Te confirmamos por WhatsApp en cuanto la revisemos.</p>${user?'<p class="legal">Puedes ver su estado en «Mi cuenta».</p>':''}<div class="mfoot"><button class="btn solid" data-act="close">Perfecto</button></div>`);
      $('#resForm').reset();initResDefaults();
    }).catch(err=>{
      modal(`<div class="mh"><div><h3>No se pudo enviar</h3><p>${esc(err.message)}</p></div><button class="x" data-act="close" aria-label="Cerrar">✕</button></div><p>Si el problema sigue, mándanos la reserva por WhatsApp.</p><div class="mfoot"><a class="btn solid" href="${wa}" target="_blank" rel="noopener">Reservar por WhatsApp</a></div>`);
    }).finally(()=>{if(btn)btn.disabled=false});
  });
}

/* ---------- fútbol automático ---------- */
const LEAGUES=[['esp.1','LaLiga'],['uefa.champions','Champions'],['esp.copa_del_rey','Copa del Rey'],['uefa.europa','Europa League'],['uefa.europa.conf','Conference'],['eng.1','Premier'],['ita.1','Serie A'],['ger.1','Bundesliga'],['fra.1','Ligue 1'],['esp.2','LaLiga 2'],['col.1','Liga colombiana'],['conmebol.libertadores','Libertadores'],['uefa.nations','Nations League'],['fifa.friendly','Amistosos']];
let matches=[],lgSel='Todas',ftimer=null;
const ymd=d=>d.getFullYear()+String(d.getMonth()+1).padStart(2,'0')+String(d.getDate()).padStart(2,'0');
async function getJSON(path){
  for(const base of ['/futbol-api/','https://site.api.espn.com/apis/site/v2/sports/soccer/']){
    try{const r=await fetch(base+path,{cache:'no-store'});if(r.ok){const j=await r.json();if(j&&j.events)return j}}catch(e){}
  }
  return null;
}
async function loadMatches(){if(!$('#matches'))return;
  const tom=new Date(Date.now()+864e5);
  const jobs=[];LEAGUES.forEach(([id,name])=>{jobs.push(getJSON(id+'/scoreboard').then(j=>[name,j]));jobs.push(getJSON(id+'/scoreboard?dates='+ymd(tom)).then(j=>[name,j]));jobs.push(getJSON(id+'/scoreboard?dates='+ymd(new Date(Date.now()-864e5))).then(j=>[name,j]))});
  const res=await Promise.all(jobs);const seen=new Map();
  res.forEach(([lg,j])=>{if(!j)return;(j.events||[]).forEach(ev=>{const c=(ev.competitions||[])[0];if(!c)return;const h=c.competitors.find(x=>x.homeAway==='home')||c.competitors[0];const a=c.competitors.find(x=>x.homeAway==='away')||c.competitors[1];if(!h||!a)return;
    const st=(ev.status||c.status||{}).type||{};const s=ev.status||c.status||{};
    seen.set(ev.id,{id:ev.id,lg,at:new Date(ev.date).getTime(),state:st.state,done:!!st.completed,clock:s.displayClock,detail:st.shortDetail||'',
      home:{n:h.team.shortDisplayName||h.team.displayName,logo:h.team.logo,sc:h.score},away:{n:a.team.shortDisplayName||a.team.displayName,logo:a.team.logo,sc:a.score},venue:(c.venue&&c.venue.fullName)||''})})});
  const now=Date.now(),from=new Date();from.setHours(0,0,0,0);
  matches=[...seen.values()].filter(m=>m.at>=from.getTime()-864e5&&m.at<=now+8*864e5).sort((x,y)=>(x.state==='in'?-1:0)-(y.state==='in'?-1:0)||x.at-y.at);
  renderMatches();renderTicker();
  clearTimeout(ftimer);ftimer=setTimeout(loadMatches,matches.some(m=>m.state==='in')?60e3:600e3);
}
function dayKey(t){const d=new Date(t),t0=new Date();t0.setHours(0,0,0,0);const diff=Math.round((new Date(d).setHours(0,0,0,0)-t0)/864e5);
  if(diff===0)return 'Hoy';if(diff===1)return 'Mañana';if(diff===-1)return 'Ayer';return d.toLocaleDateString('es-ES',{weekday:'long',day:'numeric',month:'short'})}
const hm=t=>new Date(t).toLocaleTimeString('es-ES',{hour:'2-digit',minute:'2-digit'});
const LGP=Object.fromEntries(LEAGUES.map(([_,n],i)=>[n,i]));
function mCard(m,showDay){
  const lvx=m.state==='in',pre=m.state==='pre';
  const st=lvx?`<span class="st lv">${esc(m.clock||'En juego')}</span>`:pre?`<span class="st">${showDay?`<span class="dk">${esc(dayKey(m.at))}</span> · `:''}${hm(m.at)}</span>`:`<span class="st">${showDay?`<span class="dk">${esc(dayKey(m.at))}</span> · `:''}Final</span>`;
  const tm=(t)=>`<div class="tm">${t.logo?`<img src="${esc(t.logo)}" alt="" loading="lazy">`:'<span class="ph0"></span>'}<b>${esc(t.n)}</b><span class="sc num">${pre?'':esc(t.sc??'')}</span></div>`;
  return `<div class="match ${lvx?'live':''}"><div class="mt"><span>${esc(m.lg)}</span>${st}</div><div class="teams">${tm(m.home)}${tm(m.away)}</div>
    <div class="mf"><span>${esc(m.venue)}</span>${pre?`<button data-act="resmatch" data-id="${m.id}">Reservar →</button>`:''}</div></div>`}
const TOPN=6;
function renderMatches(){
  const lgs=['Todas',...new Set(matches.map(m=>m.lg))].sort((a,b)=>a==='Todas'?-1:b==='Todas'?1:(LGP[a]??99)-(LGP[b]??99));if(!lgs.includes(lgSel))lgSel='Todas';
  $('#lgs').innerHTML=matches.length?lgs.map(l=>`<button class="chip ${l===lgSel?'on':''}" data-act="lg" data-l="${esc(l)}">${esc(l)}</button>`).join(''):'';
  const list=matches.filter(m=>lgSel==='Todas'||m.lg===lgSel);
  const more=$('#moreM');
  if(!list.length){$('#matches').innerHTML=`<p class="empty-note">Ahora mismo no podemos cargar los partidos. Pregúntanos por WhatsApp qué ponemos hoy o mira los <a href="https://www.marca.com/resultados.html" target="_blank" rel="noopener" style="color:var(--ice)">resultados en Marca</a>.</p>`;if(more)more.hidden=true;return}
  // destacados: en directo, luego hoy, luego ayer; las ligas grandes primero
  const dk=m=>m.state==='in'?0:dayKey(m.at)==='Hoy'?1:dayKey(m.at)==='Ayer'?2:9;
  const near=list.filter(m=>dk(m)<9).sort((x,y)=>dk(x)-dk(y)||(LGP[x.lg]??99)-(LGP[y.lg]??99)||x.at-y.at);
  const top=near.slice(0,TOPN),topIds=new Set(top.map(m=>m.id));
  const rest=list.filter(m=>!topIds.has(m.id)).sort((x,y)=>{const fx=x.at>=Date.now()-3*36e5,fy=y.at>=Date.now()-3*36e5;return (fy-fx)||(fx?x.at-y.at:y.at-x.at)});
  $('#matches').innerHTML=top.length?`<div class="daylbl ${top.some(m=>m.state==='in')?'live':''}">${top.some(m=>m.state==='in')?'En directo, hoy y ayer':'Hoy y ayer'}</div><div class="matches">${top.map(m=>mCard(m,true)).join('')}</div>`
    :`<p class="empty-note">Hoy no hay partidos de ${lgSel==='Todas'?'estas ligas':esc(lgSel)}. Mira los próximos aquí abajo.</p>`;
  if(more){more.hidden=!rest.length;$('#moreN').textContent=rest.length?`Desliza para ver los ${rest.length}`:'';$('#mrail').innerHTML=rest.map(m=>mCard(m,true)).join('');$('#mrail').scrollLeft=0}
}
function renderTicker(){if(!$('#ticker'))return;
  const today=matches.filter(m=>dayKey(m.at)==='Hoy'||m.state==='in').slice(0,4);
  const msgs=today.length?today.map(m=>`<b>⚽ ${m.state==='in'?'EN DIRECTO':'HOY '+hm(m.at)}</b><span>${esc(m.home.n)} – ${esc(m.away.n)} en pantalla gigante</span>`):[];
  msgs.push('<b>BLUE LOUNGE BAR</b><span>Cócteles · Cachimbas · Billar · Fútbol en directo · C. Van Gogh 6, Seseña</span>','<b>PIDE DESDE TU MESA</b><span>Escanea el QR, elige y te lo llevamos</span>');
  const one=msgs.map(m=>`<div style="display:inline-flex;gap:10px">${m}</div>`).join('');
  $('#ticker').innerHTML=one+one;
  const liveN=matches.filter(m=>m.state==='in').length,todayN=matches.filter(m=>dayKey(m.at)==='Hoy').length;
  const hb=$('#heroBadges');const old=hb.querySelector('[data-live]');if(old)old.remove();
  if(liveN||todayN){hb.insertAdjacentHTML('afterbegin',`<a class="chipx" data-live href="#futbol" style="text-decoration:none">${liveN?'<i></i>':''}${liveN?liveN+' partido'+(liveN>1?'s':'')+' en directo':todayN+' partido'+(todayN>1?'s':'')+' hoy'}</a>`)}
}

/* ---------- modal ---------- */
function modal(html,side){const m=$('#modal');m.className='scrim'+(side?' side':'');$('#sheet').innerHTML=html;m.hidden=false;document.body.style.overflow='hidden'}
function closeModal(){$('#modal').hidden=true;document.body.style.overflow='';opt=null}
$('#modal').addEventListener('click',e=>{if(e.target.id==='modal')closeModal()});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!$('#modal').hidden)closeModal()});
document.addEventListener('submit',e=>{if(e.target.id==='regForm'){e.preventDefault();saveReg()}});

const A={
  close:closeModal,
  add:el=>{const i=byId[el.dataset.id];if(!i||!avail(i))return;if(i.x&&i.x.length)openOpts(i.id);else addToCart(i.id,[])},
  pick:el=>{const i=byId[opt.id];const g=+el.dataset.g;opt.sel[g]=i.x[g].choices[+el.dataset.c];renderOpts()},
  optok:()=>{const i=byId[opt.id];if(i.x.some((g,k)=>!opt.sel[k])){toast('Elige una opción en cada grupo');return}const sel=i.x.map((g,k)=>({g:g.name,n:opt.sel[k].n,p:+opt.sel[k].p||0}));const id=opt.id;closeModal();addToCart(id,sel)},
  cart:()=>openCart(),
  cq:el=>{const c=cart[+el.dataset.k];if(!c)return;c.qty+=+el.dataset.d;if(c.qty<=0)cart.splice(+el.dataset.k,1);saveCart();openCart()},
  mode:el=>{const n=$('#c-note');if(n)ls.set('blb-note',n.value);ls.set('blb-mode',el.dataset.m);openCart()},
  send:()=>{const n=$('#c-note');if(n)ls.set('blb-note',n.value);sendOrder()},
  account:()=>account(),
  tcall:el=>mesaAccion(el,'llamar'),
  tbill:el=>mesaAccion(el,'cuenta'),
  notif:()=>askNotif(),
  rdyx:el=>{const b=el.closest('.rdy');if(b)b.remove()},
  editreg:()=>regForm(),
  logout:()=>{user=null;yo=null;ls.set('blb-user',null);renderWho();renderMyBar();closeModal();toast('Sesión cerrada en este móvil')},
  lg:el=>{lgSel=el.dataset.l;renderMatches()},
  resmatch:el=>{const m=matches.find(x=>x.id===el.dataset.id);if(!m)return;const d=new Date(m.at);$('#r-date').value=ymd(d).replace(/(\d{4})(\d\d)(\d\d)/,'$1-$2-$3');
    const pre=new Date(m.at-30*60e3);$('#r-time').value=String(pre.getHours()).padStart(2,'0')+':'+String(pre.getMinutes()).padStart(2,'0');
    $('#r-notes').value=`Venimos a ver ${m.home.n} – ${m.away.n} (${m.lg})`;$('#reservas').scrollIntoView();toast('Reserva preparada para el partido')},
  rail:el=>{const r=$(el.dataset.t||'#rail');r.scrollBy({left:(+el.dataset.d)*r.clientWidth*.9,behavior:'smooth'})},
  nav:()=>{modalNav()},
  share:async()=>{const data={title:'Blue Lounge Bar',text:'Cócteles, cachimbas, billar y fútbol en directo en Seseña 💙',url:'https://blue-lounge-bar.netlify.app/'};
    try{if(navigator.share){await navigator.share(data);return}}catch(e){return}
    try{await navigator.clipboard.writeText(data.url);toast('Enlace copiado. ¡Pásaselo a tu grupo!')}catch(e){toast(data.url)}},
  legal:()=>modal(`<div class="mh"><div><h3>Privacidad</h3></div><button class="x" data-act="close" aria-label="Cerrar">✕</button></div><div class="legal">
    <p>Responsable: Blue Lounge Bar, C. Van Gogh 6, 45224 Seseña (Toledo). Contacto: 614 26 17 84.</p>
    <h4>Qué datos usamos</h4><p>Tu nombre y tu teléfono, y lo que pides o reservas. Se guardan en el sistema de caja del bar para preparar tus pedidos, llevar tu cuenta y gestionar tus reservas.</p>
    <h4>Para qué</h4><p>Solo para preparar tu pedido, gestionar tu reserva y contactarte sobre ellos. No los cedemos a terceros ni los usamos para publicidad sin tu permiso.</p>
    <h4>Tus derechos</h4><p>Puedes pedirnos ver, corregir o borrar tus datos escribiéndonos al 614 26 17 84. Cerrar sesión borra tu cuenta solo de este móvil.</p></div>`),
};
function modalNav(){const P=PAGE==='inicio'?'':'index.html';const links=[[P+'#inicio','Inicio'],['carta.html','Carta'],[P+'#futbol','Fútbol'],[P+'#reservas','Reservas'],[P+'#galeria','Ambiente'],[P+'#visitanos','Contacto']];
  const d=document.createElement('div');d.className='drawer-nav';d.innerHTML='<button class="x" aria-label="Cerrar">✕</button>'+links.map(([h,l])=>`<a href="${h}">${l}</a>`).join('')+`<button class="btn solid" style="margin-top:20px" data-act="account">${user?'Mi cuenta':'Entrar o registrarme'}</button>`;
  d.addEventListener('click',e=>{if(e.target.closest('a,.x,[data-act]'))d.remove()});document.body.appendChild(d)}

document.addEventListener('click',e=>{const el=e.target.closest('[data-act]');if(!el||el.disabled)return;
  const f=A[el.dataset.act];if(f){if(el.tagName==='BUTTON')e.preventDefault();f(el,e)}});
const qi=$('#q');if(qi)qi.addEventListener('input',e=>{q=e.target.value;renderGrid()});
if($('#yr'))$('#yr').textContent=new Date().getFullYear();
if(PAGE==='inicio'&&/[?&]pedido=1/.test(location.search)&&cart.length)setTimeout(openCart,300);

renderWho();renderCats();renderGrid();renderFab();initRes();renderWho();renderTicker();loadMatches();loadMenu();startPoll();
})();
