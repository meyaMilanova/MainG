import { Scene, Label, TextAlign, Color, Vector, Keys, Font } from 'excalibur';
import { ResourceLoader, Resources } from './resources.js';
import { Background } from './backgrounds.js';

export class IntroSceneFour extends Scene {
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

        const backgroundFour = new Background(Resources.IntroFourBackground, 640, 360)
        this.add(backgroundFour)  
              
    }


}
