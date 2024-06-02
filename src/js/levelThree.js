import { Scene, Vector, Keys } from 'excalibur';
import { Resources } from './resources.js';
import { MainSamodiva } from './mainSamodiva.js'
import { DoorOneLevelThree, DoorDontEnterLevelThree } from './doors.js';
import { SamodivaBad, Fiut, Kuker } from './npcs.js';



export class LevelThreeScene extends Scene {
    constructor(game) {
        super();
        this.game = game; 
        this.z = 0;
    }

    onInitialize() {
        Resources.MapThree.addToScene(this);
        
        const mainChar = new MainSamodiva(new Vector(480, 512))
        this.add(mainChar);

        this.camera.strategy.lockToActor(mainChar);

        this.camera.zoom = 3.8; 

        const door = new DoorOneLevelThree(this.game);
        this.add(door);

        const doorNo = new DoorDontEnterLevelThree(this.game);
        this.add(doorNo);

        
        const npc = new SamodivaBad(new Vector(570, 882));
        this.add(npc);

        const kuker = new Kuker(new Vector(818, 1260))
        this.add(kuker)

        const fiut = new Fiut(new Vector(2435, 785));
        this.add(fiut);
    }
}

export { Scene };