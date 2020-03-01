import BANANA from './assets/016-banana.svg'
import APPLE from './assets/011-core.svg'
import CAN from './assets/015-can.svg'
import TV from './assets/061-rubbish.svg'
import TEDDY from './assets/052-teddy.svg'
import MILK from './assets/050-milk carton.svg'
import CLOTH from './assets/049-jumper.svg'
import BULB from './assets/047-bulb.svg'
import FISH from './assets/017-bones.svg'
import BOTTLE from './assets/014-bottle.svg'
import GREEN from './assets/green.svg'
import RED from './assets/red.svg'
import BLUE from './assets/blue.svg'
import ORANGE from './assets/orange.svg'
import BLACK from './assets/black.svg'
import BROWN from './assets/brown.svg'
import YELLOW from './assets/yellow.svg'

const GLASS = 'vidrio';
const PAPPER = 'papel y carton';
const PLASTIC = 'plastico';
const METAL = 'metal';
const FABRIC = 'textil';
const ESCOMBRO = 'escombro';
const ORGANIC = 'organico';

export const STATES = {
    filling: 'filling',
    empty: 'empty',
    full: 'full',
    normal: 'normal'
}

export const BINS = [
    { type: GLASS, color: GREEN, porcentage: 0, state: STATES.normal },
    { type: PAPPER, color: BLUE, porcentage: 0, state: STATES.normal },
    { type: PLASTIC, color: YELLOW, porcentage: 0, state: STATES.normal },
    { type: METAL, color: RED, porcentage: 0, state: STATES.normal },
    { type: FABRIC, color: ORANGE, porcentage: 0, state: STATES.normal },
    { type: ESCOMBRO, color: BLACK, porcentage: 0, state: STATES.normal },
    { type: ORGANIC, color: BROWN, porcentage: 0, state: STATES.normal }];

export const TRASH = [
    { name: BANANA, type: ORGANIC },
    { name: APPLE, type: ORGANIC },
    { name: CAN, type: METAL },
    { name: TV, type: ESCOMBRO },
    { name: TEDDY, type: FABRIC },
    { name: MILK, type: PAPPER },
    { name: CLOTH, type: FABRIC },
    { name: BULB, type: GLASS },
    { name: FISH, type: ORGANIC },
    { name: BOTTLE, type: GLASS },]

export const EASY = [ORGANIC, PAPPER, FABRIC]
