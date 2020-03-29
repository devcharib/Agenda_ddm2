import React from 'react';
import {View,
        Text,
        FlatList,
        TouchableWithoutFeedback,
        StyleSheet} from 'react-native';

import axios from 'axios';

export default class ContatosHome extends React.Component {

    constructor(props){
        super(props);
        this.state = { arrayContatos : [] }

        console.log('Iniciando...');

        axios.get('http://10.0.2.2:3000/contatos')
        .then(
            (resposta) => {
                console.log('Obtendo resposta ...');
                console.log(resposta.data);
                this.setState({ arrayPraias : resposta.data});
            }
        )
        .catch(
            (erro) => console.log('Erro')
        )
    }

    render(){
        return(
            <View style={styles.container}> 
                <View style={styles.lista}>              
                <FlatList
                    data = {this.state.arrayPraias}
                    renderItem = {
                        ({item}) => 
                        <TouchableWithoutFeedback onPress={
                            () => this.props.navigation.navigate('ContatosDetalhe',{ 'contatoSel' : item} )
                        }>
                       
                        <View style={styles.items}>
                        <Text style={styles.contato}>{item.nome}</Text>
                        </View>
                        </TouchableWithoutFeedback>
                    }
                    keyExtractor = { item => item.id} 
                />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({ 
    container : {
      flex : 0,
      // flexDirection : 'row',
      backgroundColor : '#1a3f96',
      //alignItems: 'stretch',
      //justifyContent: 'center'
    },
    lista:{
        backgroundColor: '#fff',
        flex: 0,
        marginBottom: 0,
        marginTop: 0,
        alignItems:'stretch',
    }, 
    items: {
        flex: 1,
        margin : 0,
        padding : 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor:'#fff',
        borderColor:'#7d8bad',
        borderBottomWidth:1,
        
    },
    contato : {
      fontSize : 20
    }
    });