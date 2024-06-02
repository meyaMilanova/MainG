import { Scene, Label, TextAlign, Color, Vector, Keys, Font } from 'excalibur';
import { ResourceLoader, Resources } from './resources.js';
import { Background } from './backgrounds.js';


export class IntroScene extends Scene {
    constructor(game) {
        super();
        this.game = game;
        this.z = 0;
    }

    onInitialize() {
        this.game.input.keyboard.on('press', (evt) => {
            if (evt.key === Keys.Space) {
                this.game.goToSecondIntro();
            }
        });

        const backgroundOne = new Background(Resources.IntroOneBackground, 640, 360)
        this.add(backgroundOne)

        const name = new Label({
            text: 'Escape the Myth:\nBulgarian Folklore',
            font: new Font({
                size: 130, 
                family: 'VT323',
            }),
            textAlign: TextAlign.Center,
            pos: new Vector((this.game.drawWidth / 2) - 510 , this.game.drawHeight / 2 - 350) ,
            color: Color.fromHex('#ffcb64'),
        });
        this.add(name);
    }


}
