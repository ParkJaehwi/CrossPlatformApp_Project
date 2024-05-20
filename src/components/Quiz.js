// import React, { useState } from "react";
// import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
// import styles from "../styles";

// function Quiz({ questionCount, questionSum, sum, incFunctions }) {
//   console.log(incFunctions);
//   return (
//     <View style={styles.quiz}>
//       <View style={styles.answer}>
//         <Text style={styles.textAnswer}>
//           ▶ 동전 {questionCount}개로 {questionSum}개 만들기 (현재 사용된 동전: {sum}개)
//         </Text>
//       </View>

//       <View style={styles.quizSort}>
//         <View style={styles.quizContent}>
//           <TouchableOpacity>
//             <Text>
//               <View style={styles.quizCoin}>
//                 <Image style={styles.coin_10} source={require("../images/10Won.jpeg")} />
//               </View>
//             </Text>
//           </TouchableOpacity>

//           <View style={styles.quizSum}>
//             <Text style={styles.textSum}> ( ) 개 </Text>
//           </View>
//         </View>
//         <View style={styles.quizContent}>
//           <TouchableOpacity>
//             <Text>
//               <View style={styles.quizCoin}>
//                 <Image style={styles.coin_50} source={require("../images/50Won.jpeg")} />
//               </View>
//             </Text>
//           </TouchableOpacity>

//           <View style={styles.quizSum}>
//             <Text style={styles.textSum}> ( ) 개 </Text>
//           </View>
//         </View>
//         <View style={styles.quizContent}>
//           <TouchableOpacity>
//             <Text>
//               <View style={styles.quizCoin}>
//                 <Image style={styles.coin_100} source={require("../images/100Won.jpeg")} />
//               </View>
//             </Text>
//           </TouchableOpacity>

//           <View style={styles.quizSum}>
//             <Text style={styles.textSum}> ( ) 개 </Text>
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// }

// export default Quiz;
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import styles from "../styles";

function Quiz(props) {
  const { questionCount, questionSum, sum, count, incFunctions } = props;
  console.log(incFunctions);
  return (
    <View style={styles.quiz}>
      <View style={styles.answer}>
        <Text style={styles.textAnswer}>
          ▶ 동전 {questionCount}개로 {questionSum}개 만들기 (현재 사용된 동전: {sum}개)
        </Text>
      </View>
      <View style={styles.quizSort}>
        <View style={styles.quizContent}>
          <TouchableOpacity onPress={incFunctions.inc10} onLongPress={incFunctions.clear10}>
            <View style={styles.quizCoin}>
              <Image style={styles.coin_10} source={require("../images/10Won.jpeg")} />
            </View>
          </TouchableOpacity>
          <View style={styles.quizSum}>
            <Text style={styles.textSum}> ( {count[0]} ) 개 </Text>
          </View>
        </View>
        <View style={styles.quizContent}>
          <TouchableOpacity onPress={incFunctions.inc50} onLongPress={incFunctions.clear50}>
            <View style={styles.quizCoin}>
              <Image style={styles.coin_50} source={require("../images/50Won.jpeg")} />
            </View>
          </TouchableOpacity>
          <View style={styles.quizSum}>
            <Text style={styles.textSum}> ( {count[1]} ) 개 </Text>
          </View>
        </View>
        <View style={styles.quizContent}>
          <TouchableOpacity onPress={incFunctions.inc100} onLongPress={incFunctions.clear100}>
            <View style={styles.quizCoin}>
              <Image style={styles.coin_100} source={require("../images/100Won.jpeg")} />
            </View>
          </TouchableOpacity>
          <View style={styles.quizSum}>
            <Text style={styles.textSum}> ( {count[2]} ) 개 </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Quiz;
