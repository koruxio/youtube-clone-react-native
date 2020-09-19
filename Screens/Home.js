import React from 'react';
import {Text, View, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../components/Header';

export default function Home() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#151515'}}>
      <View>
        <Header />
        
      </View>
    </SafeAreaView>
  );
}
