import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, SafeAreaView, FlatList, Button, ToastAndroid } from 'react-native';
import { styles } from './styles';

export default function App() {

  let dados = ['John','Doe','Zack']

  return (
    <SafeAreaView style={styles.initial}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Welcome to the Booktracker
        </Text>
      </View>
      <FlatList
      data={dados}
      renderItem={(dados) => (<Text style={styles.text}>{dados['item']}</Text>)}
      />
    <View style={styles.button}>
      
     </View>
    </SafeAreaView>
  );
}