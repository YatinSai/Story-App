import * as React from 'react';
import { Text, View, StyleSheet, TextInput,TouchableOpacity, Image} from 'react-native';
import * as Speech from 'expo-speech';

export default class Profile extends Component {
   constructor(){
       super();
       this.state={
           title:'A Hare was making fun of the Tortoise one day for being so slow.Do you ever get anywhere? he asked with a mocking laugh.',
       }
   }
    speechConverter=()=>{
        var word = this.state.title
        this.state.title === ''
        ?alert('Enter The Word')
        :Speech.speak(word)
      }

    render() {
      return (
        <View style={styles.container}>
          <TouchableOpacity onPress={this.speechConverter}>
              <Text>Play Story</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    }
  });
  

