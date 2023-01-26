// location
const location = ['east', 'south', 'west', 'north']

// players
class Player {
    constructor(location){
        this.location = undefined
        this.myCards  = new Array()
    }

    sort() {
        // arrayObj[index] = value; for value of arrayObj
        for (const [index, element] of this.myCards.entries()) {
            //mapObj.Map(key, value); mapObj.has(key); value = mapObj.get(key)
            this.myCards[index] = [element, pattern.get(element)]
        }
    }
}


class Poker {
    static play(token, turn) {
        this.token = token
        this.turn  = turn
        console.log(token)
        console.log(turn)
    }

    houseRules() {
        let royalFlush    = null // A,K,Q,J,10, same suit, flush
        let straightFlush = null // 5,4,3,2,1, same suit, flush
        let eightOfaKind  = null // 8,8,8,8,8,8,8
        let sevenOfaKind  = null // 7,7,7,7,7,7,7
        let sixOfaKind    = null // 6,6,6,6,6,6
        let fiveOfaKind   = null // 5,5,5,5,5
        let squads        = null // 4,4,4,4
        let threeOfaKind  = null // 3,3,3
        let fourHouse     = null // 3,3,3,2,2
        let straight      = null // 1,2,3,4,5
        let trips         = null
        let pair          = null // 2,2
        let highCard      = null // A
        let no_pair       = null // 3
    }
}


// cards: club-♣ diamond-♦ heart-♥ spade-♠
const two  = 2,  three = 3,  four = 4,  five = 5,  six  = 6, seven = 7
const king = 13, queen = 12, jack = 11, ten  = 10, nine = 9, eight = 8
const ace  = 1, black_joker = 53, red_joker = 54
const poker_size = (8.8, 5.7) // (8.8, 6.3)
const suits   = ['club', 'diamond', 'heart', 'spade']
const figures = [ace, two, three, four, five, six, seven,   
                 eight, nine, ten, jack, queen, king]
const cards = new Array() // 54
for (let j = 0; j < 13; j++) {
    for(let i = 0; i < 4; i++) {
        cards[i+j*4] = suits[i] + '-' + figures[j]
    }
}
cards[cards.length] = 'joker-' + black_joker
cards[cards.length] = 'joker-' + red_joker 
cards.length *= 2
cards.copyWithin(54) // 108

// pattern
const pattern = new Map()
for (const card of new Set(cards)) {
    pattern.set(card, ++pattern.size)
}

function shuffle() {
    // arrayObj[index] = value; for index in arrayObj
    for (const card in cards) { 
        const rand = Math.floor(Math.random() * 108)
        const temp  = cards[card]
        cards[card] = cards[rand]
        cards[rand] = temp
    }
}
shuffle()

let player_east  = new Player()
let player_south = new Player()
let player_west  = new Player()
let player_north = new Player()
// first player
const first = Math.floor(Math.random() * 4)
const turn  = location[first]

// console.log(cards)

function deal() {
    player_east.myCards  = Array.from(cards)
    player_east.myCards.length  = 27

    player_south.myCards = Array.from(cards)
    player_south.myCards.copyWithin(0, 27, 54)
    player_south.myCards.length = 27

    player_west.myCards  = Array.from(cards)
    player_west.myCards.copyWithin(0, 54, 81)
    player_west.myCards.length  = 27

    player_north.myCards = Array.from(cards)
    player_north.myCards.copyWithin(0, 81, 108)
    player_north.myCards.length = 27
}
deal()

// sort cards
player_east.sort()
player_south.sort()
player_west.sort()
player_north.sort()

// start game
console.info('New Game')
let   token = 'heart-2'
while (true) {
    Poker.play(token, turn)
    break
}