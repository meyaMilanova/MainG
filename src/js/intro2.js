import { Scene, Label, TextAlign, Color, Vector, Keys, Font } from 'excalibur';
import { ResourceLoader, Resources } from './resources.js';
import { Background } from './backgrounds.js';

export class IntroSceneTwo extends Scene {
    constructor(game) {
        super();
        this.game = game;
        this.z = 0;
    }

    onInitialize() {
        this.game.input.keyboard.on('press', (evt) => {
            if (evt.key === Keys.Space) {
                this.game.goToThirdIntro();
            }
        });

        const backgroundTwo = new Background(Resources.IntroTwoBackground, 640, 360)
        this.add(backgroundTwo)

        const name = new Label({
            text: 'You are going to play as Eli,\na Samodiva.\nSamodivas are Bulagarian\ncreatures.\nThey are beautiful, magical\nforest nymphs,\nwho are known to be both\nenchanting and dangerous.\nTry to escape without Baba Yaga\ncatches you.',

            font: new Font({
                size: 60, 
                family: 'VT323',
            }),
            textAlign: TextAlign.Center,
            pos: new Vector((this.game.drawWidth / 2) - 600 , this.game.drawHeight / 2 - 350) ,
            color: Color.fromHex('#ffd88a'),
        });
        this.add(name);

        
    }
}
