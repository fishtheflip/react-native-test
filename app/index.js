import React from "react";
import { View, Text, Image, ScrollView, TextInput, FlatList,StyleSheet } from "react-native";

const Home = () => {
  const fontNum = 16;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 22,
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  });
  return (
    <ScrollView>
      <Text>Some text</Text>
      <Text style={{ fontSize: fontNum }}>Scroll me plz</Text>
      <Text style={{ fontSize: fontNum }}>Scroll me plz</Text>
      <Text style={{ fontSize: fontNum }}>Scroll me plz</Text>
      <Text style={{ fontSize: fontNum }}>Scroll me plz</Text>

      <View>
        <Text>Some more text</Text>
        <Image
          source={{
            uri: "https://reactnative.dev/docs/assets/p_cat2.png",
          }}
          style={{ width: 200, height: 200 }}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
        }}
        defaultValue="You can type in me"
      />
      <View>
        <FlatList
        data={[
            {key:'one'},
            {key:'two'},
            {key:'three'},
        ]}
        renderItem={({item})=>
        <Text style={styles.item}>
            {item.key}
        </Text>}
        />
      </View>
    </ScrollView>
  );
};
export default Home;
