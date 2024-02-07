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
          <Text style={estilos.textHeader}>Cabeçalho</Text>
        </View>

        <View style={estilos.conteudo}>
          <Text style={estilos.textMain}>Conteúdo</Text>
        </View>

        <View style={estilos.rodape}>
          <Text style={estilos.textFooter}>Rodapé</Text>
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
    flex: 0.4,
  },
  conteudo: {
    backgroundColor: "yellow",
    flex: 4,
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 10,
    marginBottom: 4,
    marginTop: 4,
  },
  rodape: {
    backgroundColor: "orange",
    flex: 0.6,
  },
  textHeader: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  textMain: {
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "auto",
  },
  textFooter: {
    color: "darkblue",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
});
