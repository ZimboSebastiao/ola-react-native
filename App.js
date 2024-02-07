import {
  Alert,
  Button,
  SafeAreaView,
  StatusBar,
  StyleSheet,
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
      <SafeAreaView style={estilos.container}>
        <View style={estilos.cabecalho}>
          <Text>Cabeçalho</Text>
        </View>

        <View style={estilos.conteudo}>
          <Text>Conteúdo</Text>
        </View>

        <View style={estilos.rodape}>
          <Text>Rodapé</Text>
          <Button title="Toca aqui!" onPress={vai} />
        </View>
      </SafeAreaView>
    </>
  );
}

const estilos = StyleSheet.create({
  container: {
    backgroundColor: "lightblue",
    flex: 1,
    // justifyContent: "center",
    // flexDirection: "row-reverse" / O padrão é column
  },
  cabecalho: {
    backgroundColor: "lightgreen",
  },
  conteudo: {
    backgroundColor: "yellow",
  },
  rodape: {
    backgroundColor: "orange",
  },
});
