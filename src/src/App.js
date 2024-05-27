import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import Quiz from "./components/Quiz";
import styles from "./styles";
import { useEffect, useState } from "react";

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.question}>
        <StatusBar style="auto" />
        <Text style={styles.textTitle}>
          ★ ' 10원, 50원, 100원 동전을 이용하여 제시된 금액이 되려면 각각 몇 개씩 필요한지 적어보세요. '
        </Text>
      </View>
      <ScrollView>
        <View style={styles.content}>
          <Quiz questionCount={11} questionSum={530} />
          <Quiz questionCount={9} questionSum={620} />
          <Quiz questionCount={7} questionSum={200} />
          <Quiz questionCount={10} questionSum={510} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
