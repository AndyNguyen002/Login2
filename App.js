import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput,Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <TextInput
          style={styles.input}
          placeholder='Email'
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
        />
        
        <View style={styles.button}>
          <Button
            title="Login"
            color="#00b6ed"
            borderWidth='0'
          />
        </View> 
        
          <Text style={styles.textstyle}>
            Forgot your password?
          </Text>

          <Text style={styles.textstyle}>
            Register
          </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#dddddd",
    flexDirection:'column',
    
  },
  input: {
    height: 40,
    width:'70%',
    margin: 12,
    borderWidth: 0,
    paddingLeft:50,
    borderRadius:20,
    backgroundColor:'white'
  },
  button:{
    width: '65%',
    padding:5,
    backgroundColor:'#00b6ed ',
    borderRadius:20, 
    marginTop:12
  },
  textstyle:{
    fontSize:12,
    marginTop: 30,
  }
});
