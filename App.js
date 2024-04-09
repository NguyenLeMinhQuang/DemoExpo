import { StatusBar } from 'expo-status-bar';
import { useState }  from 'react';
import { Alert, Button, StyleSheet, Text, TextInput,TouchableHight, View } from "react-native";
 App =()=> {
  
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');
    const onPress = ()=>
    {
      alert(`Dang nhap thanh cong voi user name = `);
    }
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.TextInput}
        onChangeText={setEmail}
        placeholder="Nhap user name"
        value={email}
      />
      <TextInput
        style={styles.TextInput}
        onChangeText={setPassword}
        placeholder="Nhap password"
        value={password}
      />
      <TouchableHight
        style={styles.Button}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>
          Login
        </Text>
      </TouchableHight>
       </View>
  );

}
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
