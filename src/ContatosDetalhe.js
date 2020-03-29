import React from 'react';
import { Text, View, StyleSheet } from 'react-native';



export default class ContatosDetalhe extends React.Component {

  render() {

    const { contatoSel } = this.props.route.params;
    
    
    return (
      <View style={styles.tela}>
        <View style={styles.box}>
            <Text> foto </Text>
        </View>
        <View style={styles.container}>
          
          <Text style={styles.titulo}>
            {contatoSel.nome}
          </Text>
          <Text style={styles.detalhe}>
            Telefone: {contatoSel.telefone}
          </Text>
          <Text style={styles.detalhe}>
            Data de aniversário: {contatoSel.aniversario}
          </Text>
          <Text style={styles.detalhe}>
            Email: {contatoSel.email}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tela:{
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
  },
  box:{
    
    alignItems:'center',
    justifyContent:'center',
    flex:0,
    
    width:200,
    height:200,
    backgroundColor:'#f0f',
  },
  container: {
    marginTop:0,
    flex:0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  titulo: {
    margin: 10,
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  detalhe: {
    
    margin: 5,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  }

});