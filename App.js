import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/login';

export default function App() {
  return (
    <View style={styles.container}>
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 150,
    width: '90%',
    flex: 1,
    backgroundColor: '#fff',
    marginLeft: 'auto',
    marginRight: 'auto',   
   
  },
});
