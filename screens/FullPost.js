import { View, Image, Text } from "react-native";
import styled from "styled-components";

const FullPostImg = styled.Image`
  width: 100%;
  height: 400px;
`;

export const FullPost = ({ route }) => {
  const { item } = route.params;

  return (
    <View style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <FullPostImg
        source={{
          uri: item.imageUrl,
        }}
      />

      <Text>
        {item.text}
      </Text>
    </View>
  );
};
