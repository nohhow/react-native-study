import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>로그인</Text>
      <TextInput
        style={styles.input}
        placeholder="아이디"
      />
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="비밀번호"
      />
      <TouchableOpacity 
        onPress={() => navigation.navigate('Main')}
      > 
        <Text style = {styles.loginBtn}>
          로그인
        </Text>
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={() => navigation.navigate('SignUp')}
      >
        <Text style={styles.signUpBtn}>
          회원가입
        </Text>
      </TouchableOpacity>
    </View>
  );
}

function MainScreen() {
  return (
    <View style={styles.container}>
      <Text>메인 페이지입니다.</Text>
    </View>
  );
}

function SignUpScreen({ navigation }) {
  return (
  <View style={styles.container}>
      <Text style={styles.titleText}>회원가입</Text>
      <View style={styles.row}>
        <Text style={styles.text}>ID</Text>
        <TextInput
          style={styles.input}
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>PWD</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>CONFIRM</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Name</Text>
        <TextInput
          style={styles.input}
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Main')}
      >
        <Text style={styles.loginBtn}>
          회원가입
        </Text>
      </TouchableOpacity>
  </View>
  );
}

const Stack = createStackNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'   screenOptions={{headerShown: false}}>
          <Stack.Screen name = 'Login' component={LoginScreen}/>
          <Stack.Screen name = 'SignUp' component={SignUpScreen}/> 
          <Stack.Screen name = 'Main' component={MainScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    margin : 5,
    fontSize: 30,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    width : 200,
    margin : 5,
    borderWidth: 1,
  },
  loginBtn: {
    height: 40,
    width : 200,
    margin : 20,
    paddingTop : 5,
    fontSize: 20,
    backgroundColor: '#000',
    color : "#fff",
    textAlign: "center"
  },
  signUpBtn: {
    margin: 10,
    fontSize: 15,
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text : {
    width : '15%',
  }
});

export default App;