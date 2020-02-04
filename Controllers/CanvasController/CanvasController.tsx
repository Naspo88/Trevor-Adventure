import React, { useRef, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import CanvasManager from '../../Helpers/CanvasManager';
import GameManager from '../../Helpers/GameManager';

const styles = StyleSheet.create({
    canvas: {
      position: 'relative',
      overflow: 'hidden',
      width: '100%',
      height: '100%'
    },
});

export default function Canvas() {
    const canvas = useRef(null);
    useEffect(() => {
        if (canvas) {
            const canvasManager = new CanvasManager(canvas);
            const gameManager = new GameManager(canvasManager);
            gameManager.init();
        }
    }, [canvas]);
    return (
        <canvas ref={canvas} style={styles.canvas}>Canvas is not supported on this browser</canvas>
    );
  }


