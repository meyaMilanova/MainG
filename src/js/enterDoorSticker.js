import { Actor, Vector, Keys, Font } from 'excalibur';
import { ResourceLoader, Resources } from './resources.js';

export class EnterDoorSticker extends Actor {
    constructor( posOnX, posOnY,posOnZ) {
        super();
        this.posOnX = posOnX;
        this.posOnY = posOnY
        this.posOnZ = posOnZ
    }

    onInitialize(engine) {
        this.scale = new Vector(0.0085, 0.0085)
        this.pos = new Vector(this.posOnX, this.posOnY);
        this.z = this.posOnZ
        this.graphics.use(Resources.EnterDoorSticker.toSprite());
    }
}