import { Label, Font, Color, Vector } from "excalibur";

export class KeyLabel extends Label {
    constructor() {
        super({
            text: 'Keys: 1',
            pos: new Vector(0, -80), 
            font: new Font({
                family: 'Arial',
                size: 13,
                color: Color.White,
                textAlign: 'center'
            }),
            z: 10
        });
    }
}