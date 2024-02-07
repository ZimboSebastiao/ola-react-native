import { StyleSheet } from "react-native";
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

export default estilos;
