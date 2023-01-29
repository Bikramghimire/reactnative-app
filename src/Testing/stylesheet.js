import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";

export const Styling = () => {
  return (
    <View style={styles.ImageWrapper}>
      <Image
        source={{
          uri: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRakdY47LMaIG5NWV-T_5LgpYmHNdYjr1ykoiyKGzRYRFSVb4KR-n1zbuA-ivF-2h6EPnA30wRFNZMez60",
        }}
        style={styles.robertPattison}
      />
      <Button title="styling" style={styles.button} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  text: {},
  ImageWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
  },
  button: {
    marginTop: 10,
    borderWidth: 2,
  },
  robertPattison: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
});
