import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Quiz from "./components/Quiz";
import styles from "./styles";
import { useEffect, useState } from "react";

function App() {
  const [count1, setCount1] = useState([0, 0, 0]);
  const [sum1, setSum1] = useState(0);

  const [count2, setCount2] = useState([0, 0, 0]);
  const [sum2, setSum2] = useState(0);

  const [count3, setCount3] = useState([0, 0, 0]);
  const [sum3, setSum3] = useState(0);

  const [count4, setCount4] = useState([0, 0, 0]);
  const [sum4, setSum4] = useState(0);

  useEffect(() => {
    setSum1(count1[0] + count1[1] + count1[2]);
  }, [count1]);

  useEffect(() => {
    setSum2(count2[0] + count2[1] + count2[2]);
  }, [count2]);

  useEffect(() => {
    setSum3(count3[0] + count3[1] + count3[2]);
  }, [count3]);

  useEffect(() => {
    setSum4(count4[0] + count4[1] + count4[2]);
  }, [count4]);

  const incFunctions1 = {
    inc10: () => {
      setCount1((prevCount) => [prevCount[0] + 1, prevCount[1], prevCount[2]]);
    },
    inc50: () => {
      setCount1((prevCount) => [prevCount[0], prevCount[1] + 1, prevCount[2]]);
    },
    inc100: () => {
      setCount1((prevCount) => [prevCount[0], prevCount[1], prevCount[2] + 1]);
    },
    clear10: () => setCount1((prevCount) => [0, prevCount[1], prevCount[2]]),
    clear50: () => setCount1((prevCount) => [prevCount[0], 0, prevCount[2]]),
    clear100: () => setCount1((prevCount) => [prevCount[0], prevCount[1], 0]),
  };

  const incFunctions2 = {
    inc10: () => {
      setCount2((prevCount) => [prevCount[0] + 1, prevCount[1], prevCount[2]]);
    },
    inc50: () => {
      setCount2((prevCount) => [prevCount[0], prevCount[1] + 1, prevCount[2]]);
    },
    inc100: () => {
      setCount2((prevCount) => [prevCount[0], prevCount[1], prevCount[2] + 1]);
    },
    clear10: () => setCount2((prevCount) => [0, prevCount[1], prevCount[2]]),
    clear50: () => setCount2((prevCount) => [prevCount[0], 0, prevCount[2]]),
    clear100: () => setCount2((prevCount) => [prevCount[0], prevCount[1], 0]),
  };

  const incFunctions3 = {
    inc10: () => {
      setCount3((prevCount) => [prevCount[0] + 1, prevCount[1], prevCount[2]]);
    },
    inc50: () => {
      setCount3((prevCount) => [prevCount[0], prevCount[1] + 1, prevCount[2]]);
    },
    inc100: () => {
      setCount3((prevCount) => [prevCount[0], prevCount[1], prevCount[2] + 1]);
    },
    clear10: () => setCount3((prevCount) => [0, prevCount[1], prevCount[2]]),
    clear50: () => setCount3((prevCount) => [prevCount[0], 0, prevCount[2]]),
    clear100: () => setCount3((prevCount) => [prevCount[0], prevCount[1], 0]),
  };

  const incFunctions4 = {
    inc10: () => {
      setCount4((prevCount) => [prevCount[0] + 1, prevCount[1], prevCount[2]]);
    },
    inc50: () => {
      setCount4((prevCount) => [prevCount[0], prevCount[1] + 1, prevCount[2]]);
    },
    inc100: () => {
      setCount4((prevCount) => [prevCount[0], prevCount[1], prevCount[2] + 1]);
    },
    clear10: () => setCount4((prevCount) => [0, prevCount[1], prevCount[2]]),
    clear50: () => setCount4((prevCount) => [prevCount[0], 0, prevCount[2]]),
    clear100: () => setCount4((prevCount) => [prevCount[0], prevCount[1], 0]),
  };

  return (
    <View style={styles.container}>
      <View style={styles.blank} />
      <View style={styles.question}>
        <StatusBar style="auto" />
        <Text style={styles.textTitle}>
          ★ ' 10원, 50원, 100원 동전을 이용하여 제시된 금액이 되려면 각각 몇 개씩 필요한지 적어보세요. '
        </Text>
      </View>
      <View style={styles.content}>
        <Quiz questionCount={11} questionSum={530} incFunctions={incFunctions1} sum={sum1} count={count1} />
        <Quiz questionCount={9} questionSum={620} incFunctions={incFunctions2} sum={sum2} count={count2} />
        <Quiz questionCount={7} questionSum={200} incFunctions={incFunctions3} sum={sum3} count={count3} />
        <Quiz questionCount={10} questionSum={510} incFunctions={incFunctions4} sum={sum4} count={count4} />
      </View>
    </View>
  );
}

export default App;
