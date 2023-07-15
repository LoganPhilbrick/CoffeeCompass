import { Skeleton } from "@rneui/themed";
import { View } from "react-native";

const SkeletonBody = () => {
  return (
    <View>
      <Skeleton width={350} height={180} style={{ marginBottom: 10, borderRadius: 10 }} />
      <Skeleton width={200} height={30} style={{ marginBottom: 10, marginLeft: 20 }} />
      <Skeleton width={170} height={18} style={{ marginBottom: 10, marginLeft: 20 }} />
      <Skeleton width={50} height={18} style={{ marginBottom: 10, marginLeft: 20 }} />
      <Skeleton width={250} height={18} style={{ marginBottom: 40, marginLeft: 20 }} />
      <Skeleton width={350} height={180} style={{ marginBottom: 10, borderRadius: 10 }} />
      <Skeleton width={180} height={30} style={{ marginBottom: 10, marginLeft: 20 }} />
      <Skeleton width={220} height={18} style={{ marginBottom: 10, marginLeft: 20 }} />
      <Skeleton width={50} height={18} style={{ marginBottom: 10, marginLeft: 20 }} />
      <Skeleton width={270} height={18} style={{ marginBottom: 40, marginLeft: 20 }} />
      <Skeleton width={350} height={180} style={{ marginBottom: 40, borderRadius: 10 }} />
    </View>
  );
};

export default SkeletonBody;
