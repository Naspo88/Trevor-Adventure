import { CanvasHTMLAttributes } from "react";

const moduleOfIndex = (ind) => ind >= 0 ? ind : ind * -1;

export default class CanvasManger {
    _context;
    _backgroundImg = new Image();

    constructor(canvasRef: Canvas) {
        console.log('canvasRef', canvasRef, canvasRef.innerWidth());
        this._context = canvasRef.getContext('2d');

        this._backgroundImg.src = '../../img/game/background.png';

        this.init();
    }

    loadFullWidthImage(startDraw?: number) {
        let index = startDraw || 0;
        // if (moduleOfIndex(index) >= winWidth) {
        //   index = (moduleOfIndex(index) - winWidth) * -1;
        // }
        // Context2D.clearRect(0, 0, Context2D.width, Context2D.height);
        // let filledSpace = 0;
        // while (filledSpace < winWidth + moduleOfIndex(index)) {
        //   Context2D.drawImage(background, index + filledSpace, 0);
        //   filledSpace += background.width;
        // }
    }

    init() {
        const ref = this;
        ref._context.clearRect(0, 0, this._context.width, this._context.height);

        ref._backgroundImg.onload = () => {
            ref.loadFullWidthImage();
        };
    }
}