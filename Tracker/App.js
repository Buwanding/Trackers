import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AtendeeTracker from './components/screens/AtendeeTracker';
import InventoryTracker from './components/screens/InventoryTracker';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <AtendeeTracker/> */}
      <InventoryTracker/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
