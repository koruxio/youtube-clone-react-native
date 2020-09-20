import React from 'react';
import {Text, View, FlatList, StyleSheet, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Home() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#151515'}}>
      <Header />
      <FlatList
        data={DATA}
        renderItem={({item}) => (
          <Item
            title={item.title}
            imageUrl={item.imageUrl}
            channel={item.channel}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Get a Website Now! Dont be a Web Peasant!',
    imageUrl: 'http://i3.ytimg.com/vi/bdKZVIGRAKQ/hqdefault.jpg',
    channel:
      'https://yt3.ggpht.com/a/AATXAJysIv4Yc0twEcwfSIjQCZMnYPvGn9dRLjRq5T7r5g=s100-c-k-c0xffffffff-no-rj-mo',
  },

  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa96f63',
    title: 'Logically, Linux cant exist. CHECKMATE GNUTARDS!',
    imageUrl: 'https://i3.ytimg.com/vi/jLKFLFErtk8/maxresdefault.jpg',
    channel:
      'https://yt3.ggpht.com/a/AATXAJysIv4Yc0twEcwfSIjQCZMnYPvGn9dRLjRq5T7r5g=s100-c-k-c0xffffffff-no-rj-mo',
  },

  {
    id: '58694a0f-3da1-471f-jd96-145571e29d72',
    title: 'Virgin Social Media vs. Chad RSS (UNCENSORED!)',
    imageUrl: 'http://i3.ytimg.com/vi/hMH9w6pyzvU/maxresdefault.jpg',
    channel:
      'https://yt3.ggpht.com/a/AATXAJysIv4Yc0twEcwfSIjQCZMnYPvGn9dRLjRq5T7r5g=s100-c-k-c0xffffffff-no-rj-mo',
  },

  {
    id: 'bd7acaea-c1b1-46c2-aed5-3ad53abb28bc',
    title: 'The "Free Software Movement" Is as Good as Over (RIP in peace)',
    imageUrl: 'http://i3.ytimg.com/vi/IDE87W_HrmY/hqdefault.jpg',
    channel:
      'https://yt3.ggpht.com/a/AATXAJysIv4Yc0twEcwfSIjQCZMnYPvGn9dRLjRq5T7r5g=s100-c-k-c0xffffffff-no-rj-mo',
  },

  {
    id: '3ac68afc-c605-48d3-a3f8-fbd91aa97f63',
    title: 'The Virgin YouTube vs. the Chad PeerTube',
    imageUrl: 'http://i3.ytimg.com/vi/zrEwHn7XmRU/maxresdefault.jpg',
    channel:
      'https://yt3.ggpht.com/a/AATXAJysIv4Yc0twEcwfSIjQCZMnYPvGn9dRLjRq5T7r5g=s100-c-k-c0xffffffff-no-rj-mo',
  },

  {
    id: '3ac68afc-c605-48d3-a4f8-dbd91aa97f63',
    title: 'The Boomer Economy is Over!',
    imageUrl: 'http://i3.ytimg.com/vi/WapemYM5QQs/hqdefault.jpg',
    channel:
      'https://yt3.ggpht.com/a/AATXAJysIv4Yc0twEcwfSIjQCZMnYPvGn9dRLjRq5T7r5g=s100-c-k-c0xffffffff-no-rj-mo',
  },

  {
    id: '3ac68afc-c605-48dg-a4f8-fbd91aa97f63',
    title: 'WANTED: Unaboomer (livestream)',
    imageUrl: 'http://i3.ytimg.com/vi/s1iaWraWi38/maxresdefault.jpg',
    channel:
      'https://yt3.ggpht.com/a/AATXAJysIv4Yc0twEcwfSIjQCZMnYPvGn9dRLjRq5T7r5g=s100-c-k-c0xffffffff-no-rj-mo',
  },

  {
    id: '3ac68afc-c605-4853-a4f8-fbd91aa97f63',
    title: 'Using and Scripting Battery Information on 『ＬＩＮＵＸ』!',
    imageUrl: 'http://i3.ytimg.com/vi/XypZGzWOO-U/maxresdefault.jpg',
    channel:
      'https://yt3.ggpht.com/a/AATXAJysIv4Yc0twEcwfSIjQCZMnYPvGn9dRLjRq5T7r5g=s100-c-k-c0xffffffff-no-rj-mo',
  },

  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title:
      "Let's Shell Script Together: Case statements, audio control and more",
    imageUrl: 'http://i3.ytimg.com/vi/zrUW14L_uqE/maxresdefault.jpg',
    channel:
      'https://yt3.ggpht.com/a/AATXAJysIv4Yc0twEcwfSIjQCZMnYPvGn9dRLjRq5T7r5g=s100-c-k-c0xffffffff-no-rj-mo',
  },
];

function Item({title, imageUrl, channel}) {
  return (
    <View style={styles.item}>
      <Image source={{uri: imageUrl}} style={{height: 200}} />
      <View
        style={{
          bottom: 1,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
          }}>
          <Image
            source={{uri: channel}}
            style={{height: 60, width: 60, borderRadius: 30, margin: 10}}
          />
          <View>
            <Text style={styles.title}>{title}</Text>
            <Text
              style={{
                paddingLeft: 6,
                paddingTop: 4,
                color: 'gray',
              }}>
              Luke Smith . {parseInt(Math.random() * 1000)}K Views
            </Text>
            <Text
              style={{
                paddingLeft: 6,
                color: 'gray',
              }}>
              {parseInt(Math.random() * 10)} months ago
            </Text>
          </View>
        </View>
        <Icon
          name="dots-vertical"
          size={25}
          color="gray"
          style={{paddingTop: 20}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  item: {
    height: 300,
    borderStyle: 'solid',
    borderBottomColor: 'gray',
  },
  title: {
    fontSize: 20,
    paddingLeft: 6,
    paddingTop: 10,
    shadowOpacity: 0,
    color: 'white',
  },
});
