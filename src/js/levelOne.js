import { CollisionType, Scene, Vector, Keys } from 'excalibur';
import { Resources } from './resources.js';
import { MainSamodiva } from './mainSamodiva.js';
import { DoorOneLevelOne } from './doors.js';
import { Kuker } from './npcs.js';
import { Key } from './key.js';



export class LevelOneScene extends Scene {
    constructor(game) {
        super();
        this.game = game;
        this.z = 0;
    }

    onInitialize(map) {
        Resources.MapOne.addToScene(this);

        const mainChar = new MainSamodiva(new Vector(688, 448));
        this.add(mainChar);

        this.camera.strategy.lockToActor(mainChar);
        this.camera.zoom = 3.8;

        const door = new DoorOneLevelOne(this.game);
        this.add(door);

        const kuker = new Kuker(new Vector(370, 859));
        this.add(kuker);

        const key = new Key(new Vector(740, 448));
        this.add(key);
    }
}

export { Scene };