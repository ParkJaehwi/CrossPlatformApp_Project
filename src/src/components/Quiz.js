import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import styles from "../styles";

function Quiz({ questionCount, questionSum }) {
  const [count10, setCount10] = useState(0); //10원 동전의 개수
  const [count50, setCount50] = useState(0); //50원 동전의 개수
  const [count100, setCount100] = useState(0); //100원 동전의 개수

  const [amountSum, setAmountSum] = useState(0); //총 금액
  const [countSum, setCountSum] = useState(0); //동전의 총 개수

  const inc10 = () => setCount10(count10 + 1); //동전의 개수 1 증가
  const reset10 = () => setCount10(0); //동전 개수 초기화
  const inc50 = () => setCount50(count50 + 1);
  const reset50 = () => setCount50(0);
  const inc100 = () => setCount100(count100 + 1);
  const reset100 = () => setCount100(0);

  useEffect(() => {
    //총 금액의 합계 변수, useEffect를 사용하여 동전의 개수가 변하면 금액의 합계도 변한다.
    setAmountSum(count10 * 10 + count50 * 50 + count100 * 100);
  }, [count10, count50, count100]);

  useEffect(() => {
    //사용된 동전의 총 개수를 세는 변수
    setCountSum(count10 + count50 + count100);
  }, [count10, count50, count100]);

  const check = () => {
    return questionCount == countSum && questionSum == amountSum;
  };

  return (
    <View style={styles.quiz}>
      <View style={styles.answer}>
        <Text style={styles.textAnswer}>
          ▶ 동전 {questionCount}개로 {questionSum}원 만들기(동전 개수:{" "}
          <Text style={countSum == questionCount ? styles.colorGreen : styles.colorRed}>{countSum}</Text>
          개, 합계: <Text style={amountSum == questionSum ? styles.colorGreen : styles.colorRed}>{amountSum}</Text>)
        </Text>
      </View>
      <View style={styles.quizSort}>
        <View style={styles.quizContent}>
          <TouchableOpacity onPress={inc10} onLongPress={reset10}>
            <View style={styles.quizCoin}>
              <Image style={styles.coin_10} source={require("../images/10Won.jpeg")} />
            </View>
          </TouchableOpacity>
          <View style={styles.quizSum}>
            <Text style={styles.textSum}> ( {count10} ) 개 </Text>
          </View>
        </View>
        <View style={styles.quizContent}>
          <TouchableOpacity onPress={inc50} onLongPress={reset50}>
            <View style={styles.quizCoin}>
              <Image style={styles.coin_50} source={require("../images/50Won.jpeg")} />
            </View>
          </TouchableOpacity>
          <View style={styles.quizSum}>
            <Text style={styles.textSum}> ( {count50} ) 개 </Text>
          </View>
        </View>
        <View style={styles.quizContent}>
          <TouchableOpacity onPress={inc100} onLongPress={reset100}>
            <View style={styles.quizCoin}>
              <Image style={styles.coin_100} source={require("../images/100Won.jpeg")} />
            </View>
          </TouchableOpacity>
          <View style={styles.quizSum}>
            <Text style={styles.textSum}> ( {count100} ) 개 </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Quiz;
