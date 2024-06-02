import { Scene, Vector, Keys } from 'excalibur';
import { Resources } from './resources.js';
import { MainSamodiva } from './mainSamodiva.js';
import { DoorWhiteLevelFour } from './doors.js';
import { DoorGreenLevelFour } from './doors.js';
import { DoorRedLevelFour } from './doors.js';




export class LevelFourScene extends Scene {
    constructor(game) {
        super();
        this.game = game; 
        this.z = 0;
    }

    onInitialize() {
        Resources.MapFour.addToScene(this);
        
        const mainChar = new MainSamodiva(new Vector(560, 1952))
        this.add(mainChar);

        this.camera.strategy.lockToActor(mainChar);

        this.camera.zoom = 3.3; 

        const doorW = new DoorWhiteLevelFour(this.game);
        this.add(doorW);

        const doorG = new DoorGreenLevelFour(this.game);
        this.add(doorG);

        const doorR = new DoorRedLevelFour(this.game);
        this.add(doorR);
    }
}

export { Scene };