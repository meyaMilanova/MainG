import { AsepriteResource } from '@excaliburjs/plugin-aseprite'
import { ImageSource, Sound, Resource, Loader, } from 'excalibur'
import { TiledResource } from '@excaliburjs/plugin-tiled'

const Resources = {
    IntroOneBackground: new ImageSource('img/IntroBG1.png'),
    IntroTwoBackground: new ImageSource('img/IntroBG2.png'),
    IntroThreeBackground: new ImageSource('img/IntroBG3.png'),
    IntroFourBackground: new ImageSource('img/IntroBG4.png'),

    MapOne: new TiledResource('maps/Floor1.0.tmx'),
    MapTwo: new TiledResource('maps/Floor2.1.tmx'),
    MapThree: new TiledResource('maps/Floor3.0.tmx'),
    MapFour: new TiledResource('maps/Floor4.0.tmx'),

    MainChar: new ImageSource('char/MainChar-sheet1.png'),
    Kuker: new ImageSource('char/Kuker.png'),
    SamodivaBad: new ImageSource('char/Samodivas.png'),
    Fiut: new ImageSource('char/Fiut.png'),
    BabaYaga: new ImageSource('char/babaYaga.png'),

    OutroWon: new ImageSource('img/won.png'),
    OutroLost: new ImageSource('img/lost.png'),

    KukerText: new ImageSource('img/kuker-text.png'),
    FiutText: new ImageSource('img/fiut-text.png'),
    SamodivaText: new ImageSource('img/samodiva-text.png'),
    BabaYagaText: new ImageSource('img/babaYaga-text.png'),
    EnterDoorSticker: new ImageSource ('img/enterDoorSticker.png'),
    Key: new ImageSource('img/key.png')
};

const ResourceLoader = new Loader();
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res);
}

export { Resources, ResourceLoader };