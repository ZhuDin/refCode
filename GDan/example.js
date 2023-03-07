const poker_size = (8.8, 5.7) // (8.8, 6.3)
const choice = ['east', 'south', 'west', 'north']
const two  = 2,  three = 3,  four = 4,  five = 5,  six  = 6, seven = 7
const king = 13, queen = 12, jack = 11, ten  = 10, nine = 9, eight = 8
const ace  = 1, black_joker = 53, red_joker = 54

// cards: club-♣ diamond-♦ heart-♥ spade-♠
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
console.log('Array-cards: ' + cards)

const drawing = document.getElementById('drawing')
if (drawing.getContext) {
    let context = drawing.getContext('2d')
    context.strokeStyle = 'red'
    context.fillStyle = '#ff0000'
}


// players
class Player {
    constructor(choice){
        this.choice   = undefined
        this.myCards  = new Array() 
    }

    sort(cards) {
        // pattern
        const pattern = new Map()
        for (const card of new Set(cards)) {
            pattern.set(card, ++pattern.size)
        }
        console.log('Map-pattern: ' + pattern)

        // arrayObj[index] = value; for value of arrayObj
        for (const [index, element] of this.myCards.entries()) {
            //mapObj.Map(key, value); mapObj.has(key); value = mapObj.get(key)
            this.myCards[index] = [element, pattern.get(element)]
        }
    }

    show(choice) {
        let path = Array.from(window.location.pathname)
        path.splice(0, 1)
        path.length -= 10
        path = path.join('')
        // console.log(window.innerHeight + ' ' + window.innerWidth)
        let links = document.getElementsByClassName(choice)
        for (let i = 0; i < links.length; i++) {
            let myCardPath = path + 'images/'
            if (choice == 'south') {
                myCardPath += this.myCards[i] + '.jpg'
            } else {
                myCardPath += 'poker-back.jpg'
            }
            links[i].setAttribute('src', myCardPath)
            links[i].setAttribute('height', '80')
            links[i].setAttribute('width', "55")
        }
    }
}


class Poker {
    static play(token, turn) {
        this.token = token
        this.turn  = turn
        console.log(token)

        // const http = require('http')
        // const hostname = "192.168.43.56"
        // const port = 53333
        // const server = http.createServer((req, res) => {
        //     res.statusCode = 200;
        //     res.setHeader('Content-Type', 'text/html; charset=utf-8')
        //     res.end('')
        // })

        console.log(turn)
    }

    houseRules(token) {
        let royalFlush    = null // A,K,Q,J,10, same suit, flush
        let straightFlush = null // 5,4,3,2,1, same suit, flush
        let eightOfaKind  = null // 8,8,8,8,8,8,8
        let sevenOfaKind  = null // 7,7,7,7,7,7,7
        let sixOfaKind    = null // 6,6,6,6,6,6
        let fiveOfaKind   = null // 5,5,5,5,5
        let squads        = null // 4,4,4,4
        // let threeOfaKind  = null // 3,3,3
        let fourHouse     = null // 3,3,3,2,2
        let straight      = null // 1,2,3,4,5
        let trips         = null ///3,3,3
        let pair          = null // 2,2
        let highCard      = null // A
        let no_pair       = null // 3
    }
}


function shuffle() {
    // arrayObj[index] = value; for index in arrayObj
    for (const card in cards) { 
        // const rand = Math.floor(Math.random() * 108)
        const rand = getRandomIntInclusive(0, 107)
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
const turn  = choice[first]

function deal() {
    player_east.myCards  = Array.from(cards)
    player_east.myCards.length  = 27
    player_east.show('east')

    player_south.myCards = Array.from(cards)
    player_south.myCards.copyWithin(0, 27, 54)
    player_south.myCards.length = 27
    player_south.show('south')

    player_west.myCards  = Array.from(cards)
    player_west.myCards.copyWithin(0, 54, 81)
    player_west.myCards.length  = 27
    player_west.show('west')

    player_north.myCards = Array.from(cards)
    player_north.myCards.copyWithin(0, 81, 108)
    player_north.myCards.length = 27
    player_north.show('north')
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

// --------------------------------------------------------------------------
const timeID = document.getElementById('time')
function currentTime() {
    timeID.innerHTML = 'current time: ' + new Date()
}
setInterval(currentTime, 500)

// --------------------------------------------------------------------------
function addLoadEvent(func) {
    let oldonload = window.onload
    if (typeof window.onload != 'function') {
        window.onload = func
    } else {
        window.onload = function() {
            oldonload()
            func()
        }
    }
}

function insertAfter(newElement, targetElement) {
    let parent = targetElement.parentNode
    if (parent.lastChild == targetElement) {
        parent.appendChild(newElement)
    } else {
        parent.insertBefore(newElement, targetElement.newSibling)
    }
}

// console.log(getRandomIntInclusive(1,100))
// get random number
function getRandomIntInclusive(min, max) {
    const randomBuffer = new Uint32Array(1);
    window.crypto.getRandomValues(randomBuffer);
    let randomNumber = randomBuffer[0] / (0xffffffff + 1);
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(randomNumber * (max - min + 1)) + min;
}

/*
                                    掼蛋定义

        掼蛋是以扑克牌为主要竞赛器材，由两名选手组成一对与另一对选手相对抗的智力竞赛
    扑克项目。

        掼蛋是需采用二副标准扑克牌（共108张牌）进行升级比赛。一副牌为54张，分为黑桃、
    红心方块、梅花四种花色和大、小王。每名选手都应有27张牌，每一圈牌的领出牌者可以出单
    张、对子、三同张、三带对、五张顺子、三连对、三同连张、炸弹等规定的不同牌型，以后各选
    手可轮流跟进压牌，直至无人再压牌时，则由这圈牌的最后压牌者再领出下一圈牌的牌型。
        
        在每一副牌中，以四名选手中最先出完全手牌的一位选手为上游（亦称头游），其余依
    次为二游、三游、下游（即四游）。只有上游一方可以升级，而下游方则需在下一副牌开始前
    向上游方贡牌，一局牌的比赛最终以双方升级级数的高低（最高为“过A”）决定比赛的胜负。

        掼蛋最突出的特点是每副牌都加了2张红心级牌（以称红心参谋、逢人配、百搭）。由于红
    心级牌可以任意搭配各种牌型，因此极大丰富了掼蛋比赛中各种技战术的组合变化。


                                    术语定义

    一、己方和对方

        比赛须由四位选手组成两对搭档进行。由本家与搭档(对门)组成己方；由另一对选手(上
    家和下家)组成对方。

    二、上家和下家

        位于本家左方的选手称为上家。

        位于本家右方的选手称为下家。

    三、全副牌

        在一副牌中，四名选手所抓(发)得的全部牌张，共有108张。

    四、全手牌

        在一副牌中，一名选手所抓(发)得的全部牌张，共27张。

    五、一副牌

        四名选手从抓第一张牌到有三名选手先后打完全手牌，由此分别产生上游、二游、三游及
    下游。如果是打成“双下”(即同一方的选手分别获得上游和二游)时，则一副牌自然结束。

    六、一手牌

        某位选手一次所打出的牌，可以是一张也可以是多张。

    七、一圈牌

        四名选手先后按领出的牌型相继出牌、逐级压制的过程称为一圈牌。一圈牌中可以有人
    不出牌，连续三人过牌不出时，该圈结束。

    八、领出牌

        每圈牌首先出的牌，称为领出牌。

        1、一局牌第一副牌的第一圈，是由抓到抽出的牌张者先领出牌。以后每副牌由向上游贡牌
        的下游者领出牌。

        2、如不需贡牌，则由上游者领出牌。

    九、上游、二游、三游、下游和“双下”

        一副牌中，第一个把全手牌出完的选手是上游；第二个把全手牌出完的选手是二游；
    第三个把全手牌出完的选手是三游；三游出完全手牌后，未出完牌的选手就是下游。

        如果是同一方的选手分别获得上游和二游，则这副牌的结果称为“双下”。

    十、升级

        只有获得上游的一方可以升级。

        1、掼蛋比赛每局第一副牌从打2开始。每副牌结束时根据获上游选手的搭档获得二游、
        三游或下游的不同情况，确定上游方的升级数。

        2、如果上游选手的搭档为二游(双下)，则上游方升3级；如其为三游，则升2级；如其为
        下游，则升１级。

    十一、级数

        是指每局牌从2至A的从小到大依次排列的每一个序数，包括2、3、4、5、6、7、8、9、10、
    J、Q、K、A、过A(亦称A+)共十四个级数。

    十二、记级

        每打完一副牌在记分表上记录比赛结果，称为记级。

    十三、局

        是由若干副牌组成的每轮次(单元)比赛胜负的基本单位。

    十四、轮

        是指参赛选手之间轮流交替比赛的轮次。每轮比赛可以是一局，也可以是多局。


                                    牌型与名称

        一、单张：可以是手中的任意一张牌。

        二、对子（一对）：两张牌点相同的牌，两张牌的花色可以不同。

        三、三连对(俗称木板)：三对相连的牌。如22 33 44、77 88 99。说明:必须而且只能是
    三连对作为一手牌同时打出，不可以二连对，如33 44 或77 88，也不可以四连对或四个以上
    的连对，如AA 22 33 44，JJ QQ KK AA等。
        一对参谋可以按其自然顺序参加三连对同时打出。当2是参谋时，不可以KK AA 22打出，
    只能算22 33 44打出。而AA则既可以作为AA 22 33，也可以作为QQ KK AA打出。

    
        四、三同张(俗称三不带)：三张牌点相同的牌，三张牌的花色可以不同，如666等。

        五、三同连张(俗称钢板):两个相连的三同张牌，如:333 444,888 999。说明:一手牌
    不可以有三个或三个以上相连的三同张牌，如:JJJ QQQ KKK等。A和2的使用与第三款相同。

        六、三带对（俗称夯）：三同张可以带一对相同牌点的牌作为一手牌同时打出，如999+JJ。
    说明：三同张不可以带一张牌，也不可以带二张牌点不同的牌。

        七、顺子（俗称杂花顺）：五张且只能五张相连的单张牌，花色可以不限。
    例如:3、4、5、6、7；8、9、10、J、Q 等。需要说明:当A、2在构成顺子时，可以A、2、3、4、5或
    10、J、Q、K、A，而不能组成J、Q、K、A、2（2是参谋时）这样的顺子。

        八、炸弹：四张或四张以上牌点相同的牌，如:4444、JJJJJ、777777等。

        九、同花顺 (俗称火箭)：五张且只能五张相连、花色相同的顺子，如:红心3、4、5、6、7，
    黑桃10、J、Q、K、A等。

        十、四大天王（俗称王炸）：大小王各两张。


                                    洗牌与抓牌

    一、洗牌、切牌和抓牌

        1、比赛开始前，须将牌均匀地洗好(3-5次)后放置牌桌上，以后每次洗牌必须均匀地洗
        二至三次。

        2、第一副牌可由任意一名选手洗牌，由对方任意一名选手切牌并翻出一张牌，自他开始
        按此牌点数按逆时针方向来决定由谁先抓第一张牌。如翻出的牌为大、小王，则需重切重翻。

        3、第二副牌以后由下游洗牌，由上游切牌，下游先抓牌。如双下时，则由上游的下家先抓牌。

        4、洗牌者均匀地洗牌后，不允许有切牌或乱插牌等多余动作。

        5、上游者应尽可能均匀地从牌墩中间切牌，不允许只切上面或下面的五张以内的牌，
        也不允许数牌张后切牌。

        6、抓牌时务必牌面向下，按逆时针方向依次抓牌，每人每次只能抓一张牌。

    二、重洗与重抓

        全副牌抓牌完毕，各选手应自行清点手中牌张数，若发现张数不符时，须召请裁判员清点
        每家手中牌张数；若各家张数无误，可继续比赛；若有张数不符则须换牌后重洗重抓。

    三、使用自动发牌机(桌)的比赛，其洗牌、发牌可按发牌机设定的程序进行。


                                    打牌

    全副牌抓完后，进入打牌阶段。

    一、打牌均按逆时针顺序出牌。领出牌时可以出任意合理牌型，其余三家须按照相同牌型按
    顺序轮流选择压(盖)牌，也可以出炸弹，下一家出的牌必须大于上一家出的牌。

    二、若无压牌或选择不出时，称为过牌。比赛时，选手对过牌可选用语言“过”或用团手轻敲
    桌面来表示。但是在一局牌中，一名选手只能选择某一种固定的表示方法。

    三、如果其他三家选手都选择过牌，则最后出（压）牌的一方可以领出新的牌型。

    四、重复步骤一的程序，直到有三个选手的全手牌出完时，一副牌自然结束。如果同一方的两名
    选手分别获得上游及二游(双下)，则一副牌自然结束。


                        参谋（即级牌，以下统称参谋）与红心参谋

    一、参谋的大小

        当所打级数为X时，与所打X相同数字的所有花色的牌都是本局的参谋。
    它们小于小王、大于A（打A时A就是参谋）。

    二、红心参谋

        当级数为X时，红心X可作为万能牌配用，称为红心参谋（俗称逢人配或百搭，
    但不可以配大、小王）。可以配成任意牌型和花色。如是组成特定的牌型，应在打出后立即加以
    说明。以打2时红心2为例:

        1、对子：梅花8+红心2，算一对8；

        2、三带对：KK+66(可任意配不同花色)+红心2，可算三张K带一对6；
        如算三张6带一对K，须在打出后立即说明；

        3、四张及以上炸弹：如666(任意花色)+红心2，算四张6等；

        4、三连对：55677或55667+红心2，均算556677的三连对；

        5、顺子：4568或4567(任意杂花色)+红心2，均可算45678的顺子

        6、同花顺：789J 或78910(方片)+红心2，均可算78910J的同花顺；

        7、三同连张：33344 或33444(任意花色)+红心2，均可算333444的三同连张；

    三、参谋的插带使用

        １、参谋既可以大于Ａ，也允许按自然顺序插在顺子或三连对、三同连张、三带对中使用。
        
        ２、当红心参谋参加组成特定的牌型时，必须在打出后立即加以说明。例如:当配在顺子的
        两端时，须说明算大点还是算小点。当配在二个对子作为三带对打出时，需说明算大点的
        三带对还是算小点的三带对。当二个红心参谋加在二个连对打出，如与７７８８ 同时打出
        时，需说明算三连对还是三同连张等。


                                    牌型大小的比较

    一、牌点由大到小排列为:大王、小王、参谋、Ａ、Ｋ、Ｑ、Ｊ、10、９、８、７、６、５、４、３、２。
       以下各种牌型都不分花色。

    二、单张、对子、三同张、三连对、三同连张、顺子、同花顺等牌型，直接根据牌点确定大小。

    三、三带对:仅比较三同张的大小，不比较所带对子大小。

    四、炸弹: 炸弹可炸单张、对子、三同张、三带对、三连对、三同连张、杂花顺等牌型。五张炸弹
       可压任何4张炸弹而不比较牌点数大小。张数多的炸弹可以压任何张数少的炸弹。如果
       炸弹的牌张数相同，则按牌点确定大小。

    五、同花顺 (火箭): “同花顺”可压５张(含５张)以下的炸弹，牌点大的“同花顺”可以压
       牌点小的“同花顺”。

    六、六张及以上张数的炸弹可以压“同花顺”。

    七、四大天王：4张大小王作为一手牌齐出，是最大的炸弹，可以压所有的牌。


                                        借风出牌

    如上游选手出完最后一手牌后，其他三家无人压牌，则由上游的搭档借风出牌(俗称对门借风)。


                                        贡牌与还牌

    一、贡牌与还牌

        一副牌开始前，上一副牌的下游者需向得上游者进贡一张牌， 进贡的牌必须是自己手中
    最大的牌（“红心参谋”除外）。接受进贡者须将自己手中的一张牌还给进贡者，并由下游者出牌。
    还给己方搭档的牌必须是10以下(含10)的牌；还给对方的牌可以为任意牌。

    二、双贡及其还牌

        “双下”时，下游方的二名选手都应向上游方分别进贡，称为双贡。

        双贡时，上游者拿贡的大牌，并还牌给贡大牌者。二游者拿贡的小牌，并还牌给贡小牌
    者。由贡大牌者在第一圈领出牌。如双方进贡的牌一样大小，则按照顺时针方向进贡。还牌时
    应将牌面向下，按逆时针方向分别还牌。双方得牌后同时亮牌，并由上游者的下家(右手方者)
    领出牌。

    三、抗贡

        下游者抓到两个大王，则不用进贡，由上游者领出牌。

        双贡时，如下游方二人各抓到一个大王或任一方抓到两个大王，则都不用进贡，由上游者
    领出牌。


                                        出牌方式

    一、出牌时，应将一手牌一次性出完，不得分次出牌。

    二、出顺子、同花顺、三连对、三同连张、三带对等牌型时，必须按从小到大、从左到右的顺序，
        一次性出完牌，牌张不得杂放。

    三、当红心参谋参加组成特定的牌型时，必须将其放在应有的位置处。

    四、每次打出的牌必须放在示牌区内，不得与其他选手的出牌杂放。待一圈牌结束后，要把自己
       打出的牌牌面向下，按顺序置放于本人面前桌上规定的弃牌区内。任何选手不得翻查其他选
       手弃牌区的牌张，也不得将本人弃牌区的牌张再明示给他人。

    五、如有选手未按规定方式出牌，一经发现后，第一次可给予违规者口头警告，如同一对选手
       再次出现未按规定方式出牌，则记违例一次，并停止该选手一圈出牌权或跟牌权，如同一
       对选手第三次出现未按规定方式出牌，可判罚犯规一次。

    
                                        10张报牌

        每名选手在打完一手牌后手中牌达到10张以下(包括10张牌) 时，必须主动报张数（每次
    全手牌只报一次），称为10张报牌。

    一、如选手没有按规定主动报张数而继续比赛，则对方选手有权要求其将牌收回至需报牌时的
       状况，重新报牌后继续进行比赛。并报请裁判给予未报牌者口头警告一次。

    二、如同一对选手在一局比赛中再次发现没有主动报牌，则记违例一次，并停止其一圈出牌权
       或跟牌权。

    三、一名选手10张主动报清楚牌张后，任何一方选手均不得再次询问其手中牌张数。该选手也
       不得以任何方式作出回答。违者第一次给予警告，第二次记违例一次，并停止其一圈出牌
       权或跟牌权。

    四、在10张报牌的同时应将自己的报牌卡放在报牌卡区内，直至一副牌结束后收回报牌卡。

    五、对于报牌有其他规定的，应在比赛规程或补充规定中予以明确。


                                        每局比赛的计分

    一、每打完一副牌记一次分，把每副牌后双方各级情况记录下来。记分是双方比赛过程的原始
       记录，也是最终判定胜、负、平的文字依据。

    二、每局比赛分别按场分和级分(26分制级差分)计分。

    三、每局比赛结束时，胜方场分得２分，负方得０分，平级双方场分各得１分。级分均按26分
       制级差与级分换算表对照计算(比赛规程也可另行规定级分计算办法)。


                            牌局结束和每轮比赛胜、负、平局的判定

    一、一局牌的比赛最终以双方升级级数的高低(最高为“过Ａ”)决定比赛的胜负。

        可以从下列四种方法中选取一种作为一局比赛结束和胜负的判定：

        １、计局制: 一方过Ａ取胜结束（A必须打，不得直接升级过A）。但必须一人是上游、
           另一人不是下游才能算取胜, 否则需再继续打“Ａ”。

        ２、计副制: 双方每局共打若干副牌(可由比赛规程规定具体副数)，在若干副牌结束后，
           以级数高者为本局胜方。如其间某方已过Ａ则自然结束（过Ａ要求同1款）。如为平级
           则按第十三条之第三款计算双方得分。

        ３、计时制:双方每局共用时１小时(或根据比赛规程另行制定每局用时)。比赛时间到时
           比赛结束，以级数高者为本局胜方。如一方过Ａ则自然结束（过Ａ要求同1款）。如为
           平级则按第十三条之第三款计算双方得分。

        4、计时计副制：每局比赛在达到规定的时间或规定的副数时，比赛即行结束，以级数高者
           为本局胜方。如其间某方已过Ａ则自然结束（过Ａ要求同1款）。如为平级则按第十三条
           之第三款计算双方得分。

    二、一轮比赛的胜负

        每轮比赛可以采用一局决胜负，或采用三局二胜制等方法，均需在比赛规程或补充规定
    中予以说明。

    三、平局

        采用计时制或计副制的积分编排赛与循环赛时，当比赛规定时间或规定副数已到，双方
    若级数相同，可作为平局。平局则应按第十三条之第三款计算双方得分。

    若采用淘汰赛赛制时，不论采用计局制、计副制或计时制，每轮比赛的双方都必须分出胜负。

    出牌:０—20秒属正常出牌时间；20—30秒给予口头警告一次；
         警告后10秒内仍不出牌，则记违例一次及停止其本圈出牌权一次，
         并由其下家出牌继续比赛。
    
    贡牌:贡牌者须在抓完牌后15秒内贡牌。
         贡牌后，还牌人须在30秒内还牌，超时则给予口头警告一次；
         若再拖延超过15秒，则记违例一次，以下类推。

 */