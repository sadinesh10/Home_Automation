import {
  Canvas,
  Circle,
  Path,
  Rect,
  Skia,
  useSharedValueEffect,
  useValue,
  RadialGradient,
  SweepGradient,
  vec,
} from "@shopify/react-native-skia";
import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { polar2Canvas } from "react-native-redash";

const width = 280;
const height = 200;

export default RGB_Custom_Slider = () => {
  const strokeWidth = 40;
  const center = width / 2
  const r = (width - strokeWidth) / 2 - 40;
  const startAngle = Math.PI;
  const endAngle = 2 * Math.PI;
  const x1 = center - r * Math.cos(startAngle);
  const y1 = -r * Math.sin(startAngle) + center;
  const x2 = center - r * Math.cos(endAngle);
  const y2 = -r * Math.sin(endAngle) + center;

  const circlePath = Skia.Path.Make();
  circlePath.addCircle(center, center, r);

  const movableCx = useSharedValue(x2);
  const movableCy = useSharedValue(y2);
  const previousPositionX = useSharedValue(x2);
  const previousPositionY = useSharedValue(y2);
  const percentComplete = useSharedValue(0);

  const skiaCx = useValue(x2);
  const skiaCy = useValue(y2);
  const skiaPercentComplete = useValue(0);

  const gesture = Gesture.Pan()
    .onUpdate(({ translationX, translationY, absoluteX }) => {
      const oldCanvasX = translationX + previousPositionX.value;
      const oldCanvasY = translationY + previousPositionY.value;

      const xPrime = oldCanvasX - center;
      const yPrime = -(oldCanvasY - center);
      const rawTheta = Math.atan2(yPrime, xPrime);

      let newTheta;

      if (absoluteX < width / 2 && rawTheta < 0) {
        newTheta = Math.PI;
      } else if (absoluteX > width / 2 && rawTheta <= 0) {
        newTheta = 0;
      } else {
        newTheta = rawTheta;
      }

      const percent = 1 - newTheta / Math.PI;
      percentComplete.value = percent;

      const newCoords = polar2Canvas(
        {
          theta: rawTheta,
          radius: r,
        },
        {
          x: center,
          y: center,
        }
      );

      movableCx.value = newCoords.x;
      movableCy.value = newCoords.y;
    })
    .onEnd(() => {
      previousPositionX.value = movableCx.value;
      previousPositionY.value = movableCy.value;
    });

  useSharedValueEffect(() => {
    skiaCx.current = movableCx.value;
    skiaCy.current = movableCy.value;
    skiaPercentComplete.current = percentComplete.value;
  }, [movableCx, movableCy, percentComplete]);

  const style = useAnimatedStyle(() => {
    return { height: 200, width: 300, opacity: percentComplete.value };
  }, [percentComplete]);

  return (
    <GestureHandlerRootView>
      <GestureDetector gesture={gesture}>
        <Canvas style={styles.canvas}>
          <Rect x={0} y={0} width={width} height={height} color="#FFFFFF" />
          <SweepGradient
            c={vec(center, center)}
            colors={["cyan", "magenta", "yellow", "cyan"]}
          />
          <Path
            path={circlePath}
            style="stroke"
            strokeWidth={strokeWidth}
            strokeCap="round"
          />

          <Circle cx={skiaCx} cy={skiaCy} r={15} color="white" style="fill" />
        </Canvas>
      </GestureDetector>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  canvas: {
    width: width,
    height: width,
  },
  cursor: {
    backgroundColor: "green",
  },
});
