import { Scene, Label, TextAlign, Color, Vector, Keys, Font } from 'excalibur';
import { ResourceLoader, Resources } from './resources.js';
import { Background } from './backgrounds.js';


export class OutroWon extends Scene {
    constructor(game) {
        super();
        this.game = game;
        this.z = 0;
    }

    onInitialize() {
        this.game.input.keyboard.on('press', (evt) => {
            if (evt.key === Keys.Space) {
                this.game.goToLevelOne();
            }
        });

        const backgroundWon = new Background(Resources.OutroWon, 640, 360)
        this.add(backgroundWon)
        
    }
}
