import { Actor, Vector, Keys, CollisionType, SpriteSheet, Animation, range, CompositeCollider, Shape } from "excalibur";
import { ResourceLoader, Resources } from './resources.js';
import { KeyLabel } from "./keyLabel.js";
import { Key } from './key.js';


export class MainSamodiva extends Actor {
    constructor(pos = new Vector(688, 448)) {
        super({
            collisionType: CollisionType.Active,
            width: 55,
            height: 1
        });
        this.scale = new Vector(0.48, 0.48);
        this.graphics.use(Resources.MainChar.toSprite());
        this.currentAnimation = null;
        this.direction = new Vector(0, 0);
        this.idleAnimation = null;
        this.z = 4;
        this.pos = pos;
        this.keysCollected = 0;
    }

    onInitialize(engine) {
        const mainChar = SpriteSheet.fromImageSource({
            image: Resources.MainChar,
            grid: {
                rows: 1,
                columns: 12,
                spriteWidth: 57,
                spriteHeight: 125
            }
        });

        let circle = new CompositeCollider([
            Shape.Circle(20, new Vector(0, 45)),
        ]);
        this.collider.set(circle);

        this.runAnimationDownIdle = Animation.fromSpriteSheet(mainChar, range(0, 0), 100);
        this.runAnimationDown = Animation.fromSpriteSheet(mainChar, range(1, 2), 100);
        this.runAnimationRightIdle = Animation.fromSpriteSheet(mainChar, range(3, 3), 100);
        this.runAnimationRight = Animation.fromSpriteSheet(mainChar, range(4, 5), 100);
        this.runAnimationTopIdle = Animation.fromSpriteSheet(mainChar, range(6, 6), 100);
        this.runAnimationTop = Animation.fromSpriteSheet(mainChar, range(7, 8), 100);
        this.runAnimationLeftIdle = Animation.fromSpriteSheet(mainChar, range(9, 9), 100); 
        this.runAnimationLeft = Animation.fromSpriteSheet(mainChar, range(10, 11), 100); 
        this.graphics.use(this.runAnimationDownIdle);
        this.currentAnimation = this.runAnimationDownIdle;
        this.idleAnimation = this.runAnimationDownIdle;

        this.engine = engine;

        this.on('collisionstart', this.onCollisionStart.bind(this));
        this.on('collisionstart', (evt) => this.onCollision(evt));
    }

    movementSpeed(engine) {
        let xSpeed = 0;
        let ySpeed = 0;
        let newAnimation = null;

        if (engine.input.keyboard.isHeld(Keys.W) || engine.input.keyboard.isHeld(Keys.Up)) {
            ySpeed = -1;
            newAnimation = this.runAnimationTop;
            this.idleAnimation = this.runAnimationTopIdle; 
        } else if (engine.input.keyboard.isHeld(Keys.S) || engine.input.keyboard.isHeld(Keys.Down)) {
            ySpeed = 1;
            newAnimation = this.runAnimationDown;
            this.idleAnimation = this.runAnimationDownIdle; 
        }

        if (engine.input.keyboard.isHeld(Keys.D) || engine.input.keyboard.isHeld(Keys.Right)) {
            xSpeed = 1;
            newAnimation = this.runAnimationRight;
            this.idleAnimation = this.runAnimationRightIdle; 
        } else if (engine.input.keyboard.isHeld(Keys.A) || engine.input.keyboard.isHeld(Keys.Left)) {
            xSpeed = -1;
            newAnimation = this.runAnimationLeft;
            this.idleAnimation = this.runAnimationLeftIdle; 
        }

        this.vel.x = xSpeed * 220;
        this.vel.y = ySpeed * 220;

        if (newAnimation && this.currentAnimation !== newAnimation) {
            this.graphics.use(newAnimation);
            this.currentAnimation = newAnimation;
        }

        if (xSpeed === 0 && ySpeed === 0) {
            if (this.currentAnimation !== this.idleAnimation) {
                this.graphics.use(this.idleAnimation);
                this.currentAnimation = this.idleAnimation;
            }
        }
    }

    onCollision(evt) {
        if (evt.other instanceof Key) {
            this.pickUpKey(evt.other);
        }
    }

    pickUpKey(key) {
        key.kill(); 
        this.keysCollected += 1; 
        const label =  new KeyLabel
        this.addChild(label) 
        console.log(`Key picked up! Total keys: ${this.keysCollected}`);
    }

    onPreUpdate(engine, delta) {
        this.movementSpeed(engine);
    
    }

}

