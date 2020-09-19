import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.header__left}>
        <AntDesign name="youtube" color={'white'} size={32} />
        <Text style={styles.title}> YouTube</Text>
      </View>
      <View style={styles.header__right}>
        <TouchableOpacity style={{right: 30}}>
          <Ionicons name="notifications" color={'white'} size={30} />
        </TouchableOpacity>
        <TouchableOpacity style={{right: 15}}>
          <AntDesign name="search1" color={'white'} size={30} />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="user-circle" color={'white'} size={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 50,
    backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  title: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },

  header__left: {
    top: 8,
    flexDirection: 'row',
  },

  header__right: {
    top: 8,
    flexDirection: 'row',
  },
});
