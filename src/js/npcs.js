import { Actor, Vector, CollisionType, CompositeCollider, Font, Color, SpriteSheet, range, Animation, Shape } from "excalibur";
import { Resources } from './resources.js';

export class SamodivaBad extends Actor {
    constructor(pos) {
        super({
            pos: pos,
            collisionType: CollisionType.Passive
        });

        this.z = 10;
        this.scale = new Vector(0.48, 0.48);

        this.graphics.use(Resources.SamodivaBad.toSprite());
    }

    onInitialize(engine) {
        const samodivaBad = SpriteSheet.fromImageSource({
            image: Resources.SamodivaBad,
            grid: {
                rows: 1,
                columns: 2,
                spriteWidth: 189,
                spriteHeight: 198
            }
        });

        this.runAnimation = Animation.fromSpriteSheet(samodivaBad, range(0, 1), 100);
        this.graphics.use(this.runAnimation);
    }
}


export class BabaYaga extends Actor {
    constructor(pos) {
        super({
            pos: pos,
            collisionType: CollisionType.Passive
        });
        this.hasInteracted = false;
        this.z = 4;
        this.scale = new Vector(0.7, 0.7);

        this.graphics.use(Resources.BabaYaga.toSprite());

        
    }

    onInitialize(engine) {
        const babaYaga = SpriteSheet.fromImageSource({
            image: Resources.BabaYaga,
            grid: {
                rows: 1,
                columns: 4,
                spriteWidth: 264,
                spriteHeight: 304
            }
        });

        this.runAnimation = Animation.fromSpriteSheet(babaYaga, range(0, 3), 150);
        this.graphics.use(this.runAnimation);
    }
}



export class Kuker extends Actor {
    constructor(pos, dialogues, inventory) {
        super({
            pos: pos,
            collisionType: CollisionType.Passive
        });

        this.z = 4;
        this.scale = new Vector(0.48, 0.48);

    }

    onInitialize(engine) {
        const kuker = SpriteSheet.fromImageSource({
            image: Resources.Kuker,
            grid: {
                rows: 1,
                columns: 2,
                spriteWidth: 238,
                spriteHeight: 245
            }
        });

        this.runAnimation = Animation.fromSpriteSheet(kuker, range(0, 1), 100);
        this.graphics.use(this.runAnimation);
    }

}

export class Fiut extends Actor {
    constructor(pos, dialogues, inventory) {
        super({
            pos: pos,
            collisionType: CollisionType.Fixed
        });

        this.z = 3;
        this.scale = new Vector(0.7, 0.7);

    }

    onInitialize(engine) {
        const fiut = SpriteSheet.fromImageSource({
            image: Resources.Fiut,
            grid: {
                rows: 1,
                columns: 2,
                spriteWidth: 183,
                spriteHeight: 170
            }
        });

        this.runAnimation = Animation.fromSpriteSheet(fiut, range(0, 1), 100);
        this.graphics.use(this.runAnimation);
    }

}