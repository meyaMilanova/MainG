import { AsepriteResource } from '@excaliburjs/plugin-aseprite'
import { ImageSource, Sound, Resource, Loader, } from 'excalibur'
import { TiledResource } from '@excaliburjs/plugin-tiled'

const Resources = {
    IntroOneBackground: new ImageSource('src/used/img/IntroBG1.png'),
    IntroTwoBackground: new ImageSource('src/used/img/IntroBG2.png'),
    IntroThreeBackground: new ImageSource('src/used/img/IntroBG3.png'),
    IntroFourBackground: new ImageSource('src/used/img/IntroBG4.png'),

    MapOne: new TiledResource('src/used/maps/Floor1.0.tmx'),
    MapTwo: new TiledResource('src/used/maps/Floor2.1.tmx'),
    MapThree: new TiledResource('src/used/maps/Floor3.0.tmx'),
    MapFour: new TiledResource('src/used/maps/Floor4.0.tmx'),

    MainChar: new ImageSource('src/used/char/MainChar-sheet1.png'),
    Kuker: new ImageSource('src/used/char/Kuker.png'),
    SamodivaBad: new ImageSource('src/used/char/Samodivas.png'),
    Fiut: new ImageSource('src/used/char/Fiut.png'),
    BabaYaga: new ImageSource('src/used/char/babaYaga.png'),

    OutroWon: new ImageSource('src/used/img/won.png'),
    OutroLost: new ImageSource('src/used/img/lost.png'),

    KukerText: new ImageSource('src/used/img/kuker-text.png'),
    FiutText: new ImageSource('src/used/img/fiut-text.png'),
    SamodivaText: new ImageSource('src/used/img/samodiva-text.png'),
    BabaYagaText: new ImageSource('src/used/img/babaYaga-text.png'),
    EnterDoorSticker: new ImageSource ('src/used/img/enterDoorSticker.png'),
    Key: new ImageSource('src/used/img/key.png')
};

const ResourceLoader = new Loader();
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res);
}

export { Resources, ResourceLoader };