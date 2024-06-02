import { Actor, Color, Vector, CollisionType } from 'excalibur';
import { Resources } from './resources.js';

export class Key extends Actor {
    constructor(pos) {
        super({
            pos: pos,
            width: 32,
            height: 32,
            collisionType: CollisionType.Passive
        });

        this.graphics.use(Resources.Key.toSprite());
    }
}