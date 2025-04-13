import { Text, View, FlatList, ActivityIndicator, RefreshControl } from "react-native";
import axios from "axios";
import { useEffect, useState } from "react";

import { Post } from "../componets/Post/Post";

export const Home = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);

  const fetchPosts = async () => {
    try {
      const { data } = await axios.get(
        "https://6741cf43e4647499008ed9f7.mockapi.io/posts"
      );
      setItems(data);
    } catch {
      setItems([]);
    } finally {
        setIsLoading(false);
        setRefreshing(false);
      }
  };

  const handlePressItem = (post) => {
    navigation.navigate('FullPost', {
        item: post
    })
  }

  useEffect(() => {
    fetchPosts();
  }, []);


  if (isLoading) {
    return (
        <View style={{display: 'flex', alignItems: 'center',justifyContent : 'center'}}>
             <ActivityIndicator size="large" />

            <Text>Идет загрузка...</Text>
        </View>

    )
  }

  return (
    <View style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <FlatList
        data={items}
        renderItem={({ item }) => <Post item={item} onPress={() => handlePressItem(item)}/>}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={{ gap: 20 }}
      />
    </View>
  );
};
