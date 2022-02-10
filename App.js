import React from 'react';
import type {Node} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  Button,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import favicon from './assets/favicon.png';
import main from './assets/windmill.jpg';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => Node = () => {
  // const isDarkMode = useColorScheme() === 'dark';
  // const customAlert = () => {
  //   Alert.alert('TouchableOpacity에도 onPress 속성이 있습니다');
  // };

  console.disableYellowBox = true;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>나만의 꿀팁</Text>
      <Image style={styles.mainImage} source={main} />
      <ScrollView
        style={styles.middleContainer}
        horizontal
        indicatorStyle={'white'}>
        <TouchableOpacity style={styles.middleButton01}>
          <Text style={styles.middleButtonText}>생활</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.middleButton02}>
          <Text style={styles.middleButtonText}>재테크</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.middleButton03}>
          <Text style={styles.middleButtonText}>반려견</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.middleButton04}>
          <Text style={styles.middleButtonText}>꿀팁 찜</Text>
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.cardContainer}>
        {/* 하나의 카드 영역을 나타내는 View */}
        <View style={styles.card}>
          <Image
            style={styles.cardImage}
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2Fpizza.png?alt=media&token=1a099927-d818-45d4-b48a-7906fd0d2ad3',
            }}
          />
          <View style={styles.cardText}>
            <Text style={styles.cardTitle}>먹다 남은 피자를 촉촉하게!</Text>
            <Text style={styles.cardDesc} numberOfLines={3}>
              먹다 남은 피자는 수분이 날라가기 때문에 처음처럼 맛있게 먹을 수
              없는데요. 이럴 경우 그릇에 물을 받아 전자레인지 안에서 1분
              30초에서 2분 정도 함께 돌려주면 촉촉하게 먹을 수 있습니다. 물이
              전자레인지 안에서 수증기를 일으키고, 피자에 촉촉함을 더해줍니다.
            </Text>
            <Text style={styles.cardDate}>2022.02.10</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    //앱의 배경 색
    backgroundColor: '#fff',
  },
  title: {
    //폰트 사이즈
    fontSize: 20,
    //폰트 두께
    fontWeight: '700',
    //위 공간으로 부터 이격
    marginTop: 50,
    //왼쪽 공간으로 부터 이격'
    marginLeft: 20,
  },
  mainImage: {
    //컨텐츠의 넓이 값 --> 화면 전체의 90% 크기라는 뜻
    width: '70%',

    //컨텐츠의 높이 값
    height: 200,
    //컨텐츠의 모서리 구부리기
    borderRadius: 10,
    marginTop: 20,
    //컨텐츠 자체가 앱에서 어떤 곳에 위치시킬지 결정(정렬기능)
    //각 속성의 값들은 공식문서에 고대로~ 나와 있음
    //화면이 flex로 나눠져 있지 않기 때문에 alignItems,justifyContent로 정렬 할 수 없음
    // 따라서 스스로 정렬해주는 style인 alignSelf를 사용해줘야 함
    alignSelf: 'center',
  },
  middleContainer: {
    marginTop: 20,
    marginLeft: 10,
    height: 60,
  },
  middleButton01: {
    width: 100,
    height: 50,
    padding: 15,
    backgroundColor: '#fdc453',
    borderColor: 'deeppink',
    borderRadius: 15,
    margin: 7,
  },
  middleButton02: {
    width: 100,
    height: 50,
    padding: 15,
    backgroundColor: '#fe8d6f',
    borderRadius: 15,
    margin: 7,
  },
  middleButton03: {
    width: 100,
    height: 50,
    padding: 15,
    backgroundColor: '#9adbc5',
    borderRadius: 15,
    margin: 7,
  },
  middleButton04: {
    width: 100,
    height: 50,
    padding: 15,
    backgroundColor: '#f886a8',
    borderRadius: 15,
    margin: 7,
  },
  middleButtonText: {
    color: '#fff',
    fontWeight: '700',

    //텍스트의 현재 위치에서의 정렬
    textAlign: 'center',
  },
  cardContainer: {
    marginTop: 10,
    marginLeft: 10,
  },
  card: {
    flex: 1,
    //컨텐츠들을 가로로 나열
    //세로로 나열은 column <- 디폴트 값임
    flexDirection: 'row',
    margin: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#eee',
    paddingBottom: 10,
  },
  cardImage: {
    flex: 1,
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  cardText: {
    flex: 2,
    flexDirection: 'column',
    marginLeft: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '700',
  },
  cardDesc: {
    fontSize: 15,
  },
  cardDate: {
    fontSize: 10,
    color: '#A6A6A6',
  },
});

export default App;
