// import { StyleSheet } from "react-native";

// const styles = StyleSheet.create({
//   // App컴포넌트 스타일
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "flex-start",
//     width: "100%", // 전체 폭을 설정
//   },
//   blank: {
//     backgroundColor: "red",
//     flex: 0.5,
//     padding: 20,
//     width: "100%", // 전체 폭을 설정
//   },
//   question: {
//     backgroundColor: "green",
//     flex: 0.5,
//     padding: 20,
//     width: "100%", // 전체 폭을 설정
//   },
//   content: {
//     backgroundColor: "yellow",
//     flex: 8,
//     width: "100%", // 전체 폭을 설정
//   },

//   // Quiz컴포넌트 스타일
//   quiz: {},
//   answer: {},
//   quizSort: { flex: 1, flexDirection: "row" },
//   quizContent: { justifyContent: "space-around" },
//   quizCoin: {},
//   quizSum: {},
//   coin: {
//     width: 100, // 너비 설정
//     height: 100, // 높이 설정
//   },
//   text: {
//     color: "#000000", // 텍스트 색상 설정
//     fontSize: 16, // 텍스트 크기 설정
//   },
// });

// export default styles;

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  // App 컴포넌트 스타일
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%", // 전체 폭을 설정
  },
  blank: {
    flex: 0.1,
    padding: 20,
    width: "100%", // 전체 폭을 설정
  },
  question: {
    // backgroundColor: "green",
    justifyContent: "center",
    flex: 0.5,
    padding: 20,
    width: "100%", // 전체 폭을 설정
  },
  textTitle: {
    color: "#000", // 텍스트 색상 설정
    fontSize: 17, // 텍스트 크기 설정
    fontWeight: "bold",
    flexWrap: "wrap",
  },
  content: {
    flex: 8,
    width: "100%", // 전체 폭을 설정
  },

  // Quiz 컴포넌트 스타일
  quiz: {
    padding: 10,
    margin: 10,
    marginBottom: 0,
  },
  answer: {
    marginBottom: 10,
  },
  quizSort: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  quizContent: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center", //동전 좌우정렬
  },
  quizCoin: {
    marginBottom: 10,
    backgroundColor: "red",
    justifyContent: "center", // 동전 상하 중앙 정렬
    alignItems: "center", // 동전 좌우 중앙 정렬
  },
  quizSum: {
    width: "100%",
    alignItems: "center",
  },
  coin_10: {
    width: 60, // 너비 설정
    height: 60, // 높이 설정
  },
  coin_50: {
    width: 70, // 너비 설정
    height: 70, // 높이 설정
  },
  coin_100: {
    width: 80, // 너비 설정
    height: 80, // 높이 설정
  },
  textAnswer: {
    color: "#000", // 텍스트 색상 설정
    fontSize: 15, // 텍스트 크기 설정
  },
  textSum: {
    color: "#000", // 텍스트 색상 설정
    fontSize: 15, // 텍스트 크기 설정
  },
});

export default styles;
