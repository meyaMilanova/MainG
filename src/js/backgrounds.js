import { Actor, Vector } from "excalibur";
import { Resources } from "./resources.js";

export class Background extends Actor {
    constructor(resource, posOnX, posOnY) {
        super();
        this.resource = resource;
        this.posOnX = posOnX;
        this.posOnY = posOnY
    }

    onInitialize(engine) {
        this.pos = new Vector(this.posOnX, this.posOnY);
        this.graphics.use(this.resource.toSprite());
    }
}




