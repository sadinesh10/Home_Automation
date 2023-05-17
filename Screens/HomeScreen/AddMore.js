import React, { useEffect } from "react";
import { Modal, ViewBase } from "react-native";
import { View, Text } from "react-native";
import { useRef } from "react";
import { Entypo } from "@expo/vector-icons";
import {
  BottomSheetModal,
} from '@gorhom/bottom-sheet';

import { StyleSheet } from "react-native";

function AddMore() {
  // useEffect(() => {
  //   buttomSheetModalRef.current?.present()

  // }, []);

  // const buttomSheetModalRef= useRef(null)
  // const snapPoints=["48%"]

  return (
    <View>
      <Entypo name="plus" size={20} color="black"></Entypo>
    </View>
  );
  // <ButtomSheetModalProvider>
  //   <View style={styles.container}>
  //       <ButtomSheetModal
  //         ref={buttomSheetModalRef}
  //         index={0}
  //         snapPoints={snapPoints}
  //         backgroundStyle={{borderRadius: 50}}
  //       >
  //         <View>
  //           <Text>Hello</Text>
  //         </View>
  //       </ButtomSheetModal>
  //   </View>
  // </ButtomSheetModalProvider>
  // );
}

export default AddMore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center",
  },
});
