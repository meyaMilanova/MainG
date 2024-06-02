import { Scene, Vector, Keys } from 'excalibur';
import { Resources } from './resources.js';
import { MainSamodiva } from './mainSamodiva.js';
import { DoorOneLevelTwo } from './doors.js';
import { BabaYaga } from './npcs.js';


export class LevelTwoScene extends Scene {
    constructor(game) {
        super();
        this.game = game;
        this.z = 0;
    }

    onInitialize() {
        Resources.MapTwo.addToScene(this);

        const mainChar = new MainSamodiva();
        mainChar.pos = new Vector(480, 448);
        this.add(mainChar);

        this.camera.zoom = 2.3;

        const door = new DoorOneLevelTwo(this.game);
        this.add(door);

        this.mainChar = mainChar;

        const npc = new BabaYaga(new Vector(1076, 667));
        this.add(npc);
    }

    onPreUpdate(engine, delta) {
        const offset = new Vector(0, 70); 
        const targetPos = this.mainChar.pos.add(offset);
        this.camera.move(targetPos, 0); 
    }
}

export { Scene };
