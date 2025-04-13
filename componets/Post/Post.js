import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

const borderRaduis = "12px";

const PostItem = styled.View`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: flex-start;
  padding: 15px;
  background-color: gray;
  border-radius: ${borderRaduis};
  color: #fff;
`;

const PostContent = styled.View`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
`;

const PostName = styled.Text`
  color: #fff;
  font-size: 16px;
  flex-shrink: 1;
  max-width: 100%;
  flex-wrap: wrap;
  font-weight: 700;
  font-family: sans-serif;
`;

const PostDate = styled.Text`
  font-size: 12px;
  color: #fff;
`;

const PostImg = styled.Image`
  border-radius: ${borderRaduis};
  width: 60px;
  height: 60px;
  flex-shrink: 0;
`;

export const Post = ({ item, onPress }) => {
  const sliceText = (str) => {
    if (str.length > 60) {
      return `${str.substring(0, 60) + "..."}`;
    }

    return str;
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <PostItem>
        <PostImg
          source={{
            uri: item.imageUrl,
          }}
        />

        <PostContent>
          <PostName>{sliceText(item.text)}</PostName>

          {item.createdAt && (
            <PostDate>
              {new Date(item.createdAt).toLocaleDateString("ru-RU", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </PostDate>
          )}
        </PostContent>
      </PostItem>
    </TouchableOpacity>
  );
};
