import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export default function App() {

  const handleCallNotification = async () =>{
    const {status} = await Notifications.getPermissionsAsync();

    if (status !== 'granted'){
      Alert.alert("Você não deixou as notificações ativadas, ative as notificações nas configurações.")

      return;
    }

    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Levantaê 😜',
        body: 'Não esqueça de registrar suas atividades do dia 🏃‍♂️🏃‍♀️',
      },
      trigger: {
        seconds: 1,
      }
    })
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your!</Text>
      <Button title="clique para notificar" onPress={handleCallNotification}/>
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
