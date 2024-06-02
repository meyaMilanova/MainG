import { Actor, Vector, Color, Keys, CollisionType } from "excalibur";
import { MainSamodiva } from "./mainSamodiva";
import { EnterDoorSticker } from "./enterDoorSticker";

export class Door extends Actor {
    constructor(game, x, y) {
        super({
            collisionType: CollisionType.PreventCollision,
            width: 32,
            height: 64,
        });
        this.pos = new Vector(x, y);
        this.z = 3;
        this.game = game;
        this.keyPressed = false;
    }

    onInitialize(engine) {
        this.body.collisionType = CollisionType.Passive;
        this.on('precollision', (event) => this.hitSomething(event, this.game, this.keyPressed));

        const enterDoorSticker = new EnterDoorSticker(0, -10, 10)
        this.addChild(enterDoorSticker);
    }

    hitSomething(event, game, key) {

    }

    onPreUpdate(engine, delta) {
        super.onPreUpdate(engine, delta);
        this.keyPressed = engine.input.keyboard.isHeld(Keys.E);
    }
}

export class DoorOneLevelOne extends Door {
    constructor(game) {
        super(game, 816, 384);
    }

    hitSomething(event, game, key) {
        if (event.other instanceof MainSamodiva && key) {
            game.goToLevelTwo();
        }
    }
}

export class DoorOneLevelTwo extends Door {
    constructor(game) {
        super(game, 1584, 384);
    }

    hitSomething(event, game, key) {
        if (event.other instanceof MainSamodiva && key) {
            game.goToLevelThree();
        }
    }
}

export class DoorOneLevelThree extends Door {
    constructor(game) {
        super(game, 2352, 736);
    }

    hitSomething(event, game, key) {
        if (event.other instanceof MainSamodiva && key) {
            game.goToLevelFour();
        }
    }
}

export class DoorDontEnterLevelThree extends Door {
    constructor(game) {
        super(game, 656, 544);
    }

    hitSomething(event, game, key) {
        if (event.other instanceof MainSamodiva && key) {
            game.goToOutroLost();
        }
    }
}

export class DoorWhiteLevelFour extends Door {
    constructor(game) {
        super(game, 1168, 192);
    }

    hitSomething(event, game, key) {
        if (event.other instanceof MainSamodiva && key) {
            game.goToOutroLost();
        }
    }
}

export class DoorGreenLevelFour extends Door {
    constructor(game) {
        super(game, 1232, 192);
    }

    hitSomething(event, game, key) {
        if (event.other instanceof MainSamodiva && key) {
            game.goToOutroLost();
        }
    }
}

export class DoorRedLevelFour extends Door {
    constructor(game) {
        super(game, 1296, 192);
    }

    hitSomething(event, game, key) {
        if (event.other instanceof MainSamodiva && key) {
            game.goToOutroWon();
        }
    }
}
