use blackjack;
db.dropDatabase();

db.deck.insertMany([
{
"suit": "SPADES",
"code": "AS",
"value": 11,
"images": {
"png": "https://deckofcardsapi.com/static/img/AS.png",
"svg": "https://deckofcardsapi.com/static/img/AS.svg"
},
"image": "https://deckofcardsapi.com/static/img/AS.png"
},
{
"suit": "SPADES",
"code": "2S",
"value": 2,
"images": {
"png": "https://deckofcardsapi.com/static/img/2S.png",
"svg": "https://deckofcardsapi.com/static/img/2S.svg"
},
"image": "https://deckofcardsapi.com/static/img/2S.png"
},
{
"suit": "SPADES",
"code": "3S",
"value": 3,
"images": {
"png": "https://deckofcardsapi.com/static/img/3S.png",
"svg": "https://deckofcardsapi.com/static/img/3S.svg"
},
"image": "https://deckofcardsapi.com/static/img/3S.png"
},
{
"suit": "SPADES",
"code": "4S",
"value": 4,
"images": {
"png": "https://deckofcardsapi.com/static/img/4S.png",
"svg": "https://deckofcardsapi.com/static/img/4S.svg"
},
"image": "https://deckofcardsapi.com/static/img/4S.png"
},
{
"suit": "SPADES",
"code": "5S",
"value": 5,
"images": {
"png": "https://deckofcardsapi.com/static/img/5S.png",
"svg": "https://deckofcardsapi.com/static/img/5S.svg"
},
"image": "https://deckofcardsapi.com/static/img/5S.png"
},
{
"suit": "SPADES",
"code": "6S",
"value": 6,
"images": {
"png": "https://deckofcardsapi.com/static/img/6S.png",
"svg": "https://deckofcardsapi.com/static/img/6S.svg"
},
"image": "https://deckofcardsapi.com/static/img/6S.png"
},
{
"suit": "SPADES",
"code": "7S",
"value": 7,
"images": {
"png": "https://deckofcardsapi.com/static/img/7S.png",
"svg": "https://deckofcardsapi.com/static/img/7S.svg"
},
"image": "https://deckofcardsapi.com/static/img/7S.png"
},
{
"suit": "SPADES",
"code": "8S",
"value": 8,
"images": {
"png": "https://deckofcardsapi.com/static/img/8S.png",
"svg": "https://deckofcardsapi.com/static/img/8S.svg"
},
"image": "https://deckofcardsapi.com/static/img/8S.png"
},
{
"suit": "SPADES",
"code": "9S",
"value": 9,
"images": {
"png": "https://deckofcardsapi.com/static/img/9S.png",
"svg": "https://deckofcardsapi.com/static/img/9S.svg"
},
"image": "https://deckofcardsapi.com/static/img/9S.png"
},
{
"suit": "SPADES",
"code": "0S",
"value": 10,
"images": {
"png": "https://deckofcardsapi.com/static/img/0S.png",
"svg": "https://deckofcardsapi.com/static/img/0S.svg"
},
"image": "https://deckofcardsapi.com/static/img/0S.png"
},
{
"suit": "SPADES",
"code": "JS",
"value": 10,
"images": {
"png": "https://deckofcardsapi.com/static/img/JS.png",
"svg": "https://deckofcardsapi.com/static/img/JS.svg"
},
"image": "https://deckofcardsapi.com/static/img/JS.png"
},
{
"suit": "SPADES",
"code": "QS",
"value": 10,
"images": {
"png": "https://deckofcardsapi.com/static/img/QS.png",
"svg": "https://deckofcardsapi.com/static/img/QS.svg"
},
"image": "https://deckofcardsapi.com/static/img/QS.png"
},
{
"suit": "SPADES",
"code": "KS",
"value": 10,
"images": {
"png": "https://deckofcardsapi.com/static/img/KS.png",
"svg": "https://deckofcardsapi.com/static/img/KS.svg"
},
"image": "https://deckofcardsapi.com/static/img/KS.png"
},
{
"suit": "DIAMONDS",
"code": "AD",
"value": 11,
"images": {
"png": "https://deckofcardsapi.com/static/img/AD.png",
"svg": "https://deckofcardsapi.com/static/img/AD.svg"
},
"image": "https://deckofcardsapi.com/static/img/aceDiamonds.png"
},
{
"suit": "DIAMONDS",
"code": "2D",
"value": 2,
"images": {
"png": "https://deckofcardsapi.com/static/img/2D.png",
"svg": "https://deckofcardsapi.com/static/img/2D.svg"
},
"image": "https://deckofcardsapi.com/static/img/2D.png"
},
{
"suit": "DIAMONDS",
"code": "3D",
"value": 3,
"images": {
"png": "https://deckofcardsapi.com/static/img/3D.png",
"svg": "https://deckofcardsapi.com/static/img/3D.svg"
},
"image": "https://deckofcardsapi.com/static/img/3D.png"
},
{
"suit": "DIAMONDS",
"code": "4D",
"value": 4,
"images": {
"png": "https://deckofcardsapi.com/static/img/4D.png",
"svg": "https://deckofcardsapi.com/static/img/4D.svg"
},
"image": "https://deckofcardsapi.com/static/img/4D.png"
},
{
"suit": "DIAMONDS",
"code": "5D",
"value": 5,
"images": {
"png": "https://deckofcardsapi.com/static/img/5D.png",
"svg": "https://deckofcardsapi.com/static/img/5D.svg"
},
"image": "https://deckofcardsapi.com/static/img/5D.png"
},
{
"suit": "DIAMONDS",
"code": "6D",
"value": 6,
"images": {
"png": "https://deckofcardsapi.com/static/img/6D.png",
"svg": "https://deckofcardsapi.com/static/img/6D.svg"
},
"image": "https://deckofcardsapi.com/static/img/6D.png"
},
{
"suit": "DIAMONDS",
"code": "7D",
"value": 7,
"images": {
"png": "https://deckofcardsapi.com/static/img/7D.png",
"svg": "https://deckofcardsapi.com/static/img/7D.svg"
},
"image": "https://deckofcardsapi.com/static/img/7D.png"
},
{
"suit": "DIAMONDS",
"code": "8D",
"value": 8,
"images": {
"png": "https://deckofcardsapi.com/static/img/8D.png",
"svg": "https://deckofcardsapi.com/static/img/8D.svg"
},
"image": "https://deckofcardsapi.com/static/img/8D.png"
},
{
"suit": "DIAMONDS",
"code": "9D",
"value": 9,
"images": {
"png": "https://deckofcardsapi.com/static/img/9D.png",
"svg": "https://deckofcardsapi.com/static/img/9D.svg"
},
"image": "https://deckofcardsapi.com/static/img/9D.png"
},
{
"suit": "DIAMONDS",
"code": "0D",
"value": 10,
"images": {
"png": "https://deckofcardsapi.com/static/img/0D.png",
"svg": "https://deckofcardsapi.com/static/img/0D.svg"
},
"image": "https://deckofcardsapi.com/static/img/0D.png"
},
{
"suit": "DIAMONDS",
"code": "JD",
"value": 10,
"images": {
"png": "https://deckofcardsapi.com/static/img/JD.png",
"svg": "https://deckofcardsapi.com/static/img/JD.svg"
},
"image": "https://deckofcardsapi.com/static/img/JD.png"
},
{
"suit": "DIAMONDS",
"code": "QD",
"value": 10,
"images": {
"png": "https://deckofcardsapi.com/static/img/QD.png",
"svg": "https://deckofcardsapi.com/static/img/QD.svg"
},
"image": "https://deckofcardsapi.com/static/img/QD.png"
},
{
"suit": "DIAMONDS",
"code": "KD",
"value": 10,
"images": {
"png": "https://deckofcardsapi.com/static/img/KD.png",
"svg": "https://deckofcardsapi.com/static/img/KD.svg"
},
"image": "https://deckofcardsapi.com/static/img/KD.png"
},
{
"suit": "CLUBS",
"code": "AC",
"value": 11,
"images": {
"png": "https://deckofcardsapi.com/static/img/AC.png",
"svg": "https://deckofcardsapi.com/static/img/AC.svg"
},
"image": "https://deckofcardsapi.com/static/img/AC.png"
},
{
"suit": "CLUBS",
"code": "2C",
"value": 2,
"images": {
"png": "https://deckofcardsapi.com/static/img/2C.png",
"svg": "https://deckofcardsapi.com/static/img/2C.svg"
},
"image": "https://deckofcardsapi.com/static/img/2C.png"
},
{
"suit": "CLUBS",
"code": "3C",
"value": 3,
"images": {
"png": "https://deckofcardsapi.com/static/img/3C.png",
"svg": "https://deckofcardsapi.com/static/img/3C.svg"
},
"image": "https://deckofcardsapi.com/static/img/3C.png"
},
{
"suit": "CLUBS",
"code": "4C",
"value": 4,
"images": {
"png": "https://deckofcardsapi.com/static/img/4C.png",
"svg": "https://deckofcardsapi.com/static/img/4C.svg"
},
"image": "https://deckofcardsapi.com/static/img/4C.png"
},
{
"suit": "CLUBS",
"code": "5C",
"value": 5,
"images": {
"png": "https://deckofcardsapi.com/static/img/5C.png",
"svg": "https://deckofcardsapi.com/static/img/5C.svg"
},
"image": "https://deckofcardsapi.com/static/img/5C.png"
},
{
"suit": "CLUBS",
"code": "6C",
"value": 6,
"images": {
"png": "https://deckofcardsapi.com/static/img/6C.png",
"svg": "https://deckofcardsapi.com/static/img/6C.svg"
},
"image": "https://deckofcardsapi.com/static/img/6C.png"
},
{
"suit": "CLUBS",
"code": "7C",
"value": 7,
"images": {
"png": "https://deckofcardsapi.com/static/img/7C.png",
"svg": "https://deckofcardsapi.com/static/img/7C.svg"
},
"image": "https://deckofcardsapi.com/static/img/7C.png"
},
{
"suit": "CLUBS",
"code": "8C",
"value": 8,
"images": {
"png": "https://deckofcardsapi.com/static/img/8C.png",
"svg": "https://deckofcardsapi.com/static/img/8C.svg"
},
"image": "https://deckofcardsapi.com/static/img/8C.png"
},
{
"suit": "CLUBS",
"code": "9C",
"value": 9,
"images": {
"png": "https://deckofcardsapi.com/static/img/9C.png",
"svg": "https://deckofcardsapi.com/static/img/9C.svg"
},
"image": "https://deckofcardsapi.com/static/img/9C.png"
},
{
"suit": "CLUBS",
"code": "0C",
"value": 10,
"images": {
"png": "https://deckofcardsapi.com/static/img/0C.png",
"svg": "https://deckofcardsapi.com/static/img/0C.svg"
},
"image": "https://deckofcardsapi.com/static/img/0C.png"
},
{
"suit": "CLUBS",
"code": "JC",
"value": 10,
"images": {
"png": "https://deckofcardsapi.com/static/img/JC.png",
"svg": "https://deckofcardsapi.com/static/img/JC.svg"
},
"image": "https://deckofcardsapi.com/static/img/JC.png"
},
{
"suit": "CLUBS",
"code": "QC",
"value": 10,
"images": {
"png": "https://deckofcardsapi.com/static/img/QC.png",
"svg": "https://deckofcardsapi.com/static/img/QC.svg"
},
"image": "https://deckofcardsapi.com/static/img/QC.png"
},
{
"suit": "CLUBS",
"code": "KC",
"value": 10,
"images": {
"png": "https://deckofcardsapi.com/static/img/KC.png",
"svg": "https://deckofcardsapi.com/static/img/KC.svg"
},
"image": "https://deckofcardsapi.com/static/img/KC.png"
},
{
"suit": "HEARTS",
"code": "AH",
"value": 11,
"images": {
"png": "https://deckofcardsapi.com/static/img/AH.png",
"svg": "https://deckofcardsapi.com/static/img/AH.svg"
},
"image": "https://deckofcardsapi.com/static/img/AH.png"
},
{
"suit": "HEARTS",
"code": "2H",
"value": 2,
"images": {
"png": "https://deckofcardsapi.com/static/img/2H.png",
"svg": "https://deckofcardsapi.com/static/img/2H.svg"
},
"image": "https://deckofcardsapi.com/static/img/2H.png"
},
{
"suit": "HEARTS",
"code": "3H",
"value": 3,
"images": {
"png": "https://deckofcardsapi.com/static/img/3H.png",
"svg": "https://deckofcardsapi.com/static/img/3H.svg"
},
"image": "https://deckofcardsapi.com/static/img/3H.png"
},
{
"suit": "HEARTS",
"code": "4H",
"value": 4,
"images": {
"png": "https://deckofcardsapi.com/static/img/4H.png",
"svg": "https://deckofcardsapi.com/static/img/4H.svg"
},
"image": "https://deckofcardsapi.com/static/img/4H.png"
},
{
"suit": "HEARTS",
"code": "5H",
"value": 5,
"images": {
"png": "https://deckofcardsapi.com/static/img/5H.png",
"svg": "https://deckofcardsapi.com/static/img/5H.svg"
},
"image": "https://deckofcardsapi.com/static/img/5H.png"
},
{
"suit": "HEARTS",
"code": "6H",
"value": 6,
"images": {
"png": "https://deckofcardsapi.com/static/img/6H.png",
"svg": "https://deckofcardsapi.com/static/img/6H.svg"
},
"image": "https://deckofcardsapi.com/static/img/6H.png"
},
{
"suit": "HEARTS",
"code": "7H",
"value": 7,
"images": {
"png": "https://deckofcardsapi.com/static/img/7H.png",
"svg": "https://deckofcardsapi.com/static/img/7H.svg"
},
"image": "https://deckofcardsapi.com/static/img/7H.png"
},
{
"suit": "HEARTS",
"code": "8H",
"value": 8,
"images": {
"png": "https://deckofcardsapi.com/static/img/8H.png",
"svg": "https://deckofcardsapi.com/static/img/8H.svg"
},
"image": "https://deckofcardsapi.com/static/img/8H.png"
},
{
"suit": "HEARTS",
"code": "9H",
"value": 9,
"images": {
"png": "https://deckofcardsapi.com/static/img/9H.png",
"svg": "https://deckofcardsapi.com/static/img/9H.svg"
},
"image": "https://deckofcardsapi.com/static/img/9H.png"
},
{
"suit": "HEARTS",
"code": "0H",
"value": 10,
"images": {
"png": "https://deckofcardsapi.com/static/img/0H.png",
"svg": "https://deckofcardsapi.com/static/img/0H.svg"
},
"image": "https://deckofcardsapi.com/static/img/0H.png"
},
{
"suit": "HEARTS",
"code": "JH",
"value": 10,
"images": {
"png": "https://deckofcardsapi.com/static/img/JH.png",
"svg": "https://deckofcardsapi.com/static/img/JH.svg"
},
"image": "https://deckofcardsapi.com/static/img/JH.png"
},
{
"suit": "HEARTS",
"code": "QH",
"value": 10,
"images": {
"png": "https://deckofcardsapi.com/static/img/QH.png",
"svg": "https://deckofcardsapi.com/static/img/QH.svg"
},
"image": "https://deckofcardsapi.com/static/img/QH.png"
},
{
"suit": "HEARTS",
"code": "KH",
"value": 10,
"images": {
"png": "https://deckofcardsapi.com/static/img/KH.png",
"svg": "https://deckofcardsapi.com/static/img/KH.svg"
},
"image": "https://deckofcardsapi.com/static/img/KH.png"
}
]);
