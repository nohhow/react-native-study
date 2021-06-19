import React, {useState} from 'react';
import {View, StyleSheet, Text, TextInput, Button, TouchableOpacity, Alert} from 'react-native';

const App = () => {

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
      <Button
        style={styles.loginBtn}
        title="로그인"
        onPress={() => Alert.alert('Login Button pressed')}
      />
      <TouchableOpacity onPress={() => Alert.alert('Login Button pressed')}> 
        <Text style = {styles.loginBtn}>
            로그인
        </Text>
      </TouchableOpacity >
    </View>
  );
};

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
    paddingTop : 5,
    fontSize: 20,
    backgroundColor: '#000',
    color : "#fff",
    textAlign: "center"
  },
});

export default App;