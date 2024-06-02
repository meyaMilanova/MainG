import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'


import { IntroScene } from './intro1.js';
import { IntroSceneTwo } from './intro2.js'
import { IntroSceneThree } from './intro3.js'
import { IntroSceneFour } from './intro4.js'
import { LevelOneScene } from './levelOne.js'
import { LevelTwoScene } from './levelTwo.js'
import { LevelThreeScene } from './levelThree.js'
import { LevelFourScene } from './levelFour.js'
import { OutroWon } from './outroWon.js';
import { OutroLost } from './outroLost.js';

export class Game extends Engine {
    engine
    constructor() {
        super({ 
            width: 1280,
            height: 720,
            displayMode: DisplayMode.FitScreen,
            antialiasing: false,
            pixelArt: true
         });

        this.start(ResourceLoader).then(() => this.onInitialize());
        
    }

    onInitialize(engine) {
        this.goToFirstIntro()
        this.engine = engine
    }

    goToFirstIntro() {
        const introSceneOne = new IntroScene(this);
        this.addScene('introOne', introSceneOne);
        this.goToScene('introOne');
    }

    goToSecondIntro() {
        const introSceneTwo = new IntroSceneTwo(this);
        this.addScene('introTwo', introSceneTwo);
        this.goToScene('introTwo');
    }

    goToThirdIntro() {
        const introSceneThree = new IntroSceneThree(this);
        this.addScene('introThree', introSceneThree);
        this.goToScene('introThree');
    }

    goToFourIntro() {
        const introSceneFour = new IntroSceneFour(this);
        this.addScene('introFour', introSceneFour);
        this.goToScene('introFour');
    }

    goToLevelOne() {
        const levelOne = new LevelOneScene(this);
        this.addScene('onelevelOneL', levelOne);
        this.goToScene('onelevelOneL');
    }

    goToLevelTwo() {
        const levelTwo = new LevelTwoScene(this);
        this.addScene('onelevelTwoL', levelTwo);
        this.goToScene('onelevelTwoL');
    }

    goToLevelThree() {
        const levelThree = new LevelThreeScene(this);
        this.addScene('onelevelThreeL', levelThree);
        this.goToScene('onelevelThreeL');
    }

    goToLevelFour() {
        const levelFour = new LevelFourScene(this);
        this.addScene('onelevelFourL', levelFour);
        this.goToScene('onelevelFourL');
    }

    goToOutroWon() {
        const outroWon = new OutroWon(this);
        this.addScene('outroWon', outroWon);
        this.goToScene('outroWon');
    }

    goToOutroLost() {
        const outroLost = new OutroLost(this);
        this.addScene('outroLost', outroLost);
        this.goToScene('outroLost');
    }


}

new Game()
