import { Image, View } from "react-native";

const PhotosMap = ({ item, index }) => {
  return (
    <View style={{ alignItems: "center" }}>
      <Image resizeMode="cover" style={{ width: 350, height: 325, margin: 24, borderRadius: 15 }} source={{ uri: `${item}` }} />
    </View>
  );
};
export default PhotosMap;
