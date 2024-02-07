import {
  Alert,
  Button,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from "react-native";

export default function App() {
  const vai = () => {
    Alert.alert("Titulo da janela", "Fala parça");
    console.log("Teste");
  };
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View>
          <Text>Cabeçalho</Text>
        </View>

        <View>
          <Text>Conteúdo</Text>
        </View>
        <View>
          <Text>Rodapé</Text>
          <Button title="Toca aqui!" onPress={vai} />
        </View>
      </SafeAreaView>
    </>
  );
}
