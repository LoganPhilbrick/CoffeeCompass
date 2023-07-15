import { Skeleton } from "@rneui/themed";
import { View } from "react-native";

const DetailsSkeleton = () => {
  return (
    <View style={{ alignItems: "center" }}>
      <Skeleton width={415} height={310} style={{ position: "relative", bottom: 25 }} />
      <Skeleton width={350} height={240} style={{ borderRadius: 15, marginBottom: 42 }} />
      <Skeleton width={350} height={240} style={{ borderRadius: 15 }} />
    </View>
  );
};

export default DetailsSkeleton;
