import React, { Component } from 'react';
import { Text, View,TextInput,StyleSheet,TouchableOpacity,Picker } from 'react-native';
import db from '../config'
export default class CreateStories extends Component {
    constructor(){
      super()
      this.state={
       story:'',
       name:'',
       dropdownHeight:40,
       previewImage:'image1',
       moral:'',
      }
    }
    
    updateFirestore=()=>{
   db.collection("stories").doc("this.state.name").set({
        story: this.state.story,
        name: this.state.name,
        previewImage: this.state.previewImage,
        moral:this.state.moral,

       
      })
}

    render() {
        return (
            <View>
                <Text>CreateStories</Text>
               
                <TextInput
	                    placeholder="Enter The Story Name"
	                    onChangeText= {(text)=>{
	                        this.setState({
	                            name: text
	                        })
	                    }}
	                    placeholderTextColor=''
	                    value={this.state.name}
	                    style={styles.inputBoxStyle}/>

                 <TextInput
	                    placeholder="Enter The Story"
	                    onChangeText= {(text)=>{
	                        this.setState({
	                            story: text
	                        })
	                    }}
	                    placeholderTextColor=''
	                    value={this.state.story}
	                    style={styles.inputBoxStyle}/>
                
                <TextInput
	                    placeholder="Enter The Moral Of the Story"
	                    onChangeText= {(text)=>{
	                        this.setState({
	                            moral: text
	                        })
	                    }}
	                    placeholderTextColor=''
	                    value={this.state.moral}
	                    style={styles.inputBoxStyle}/>

                        <View style={styles.picker}> 
          <Picker selectedValue={this.state.previewImage} onValueChange={(lang) => this.setState({previewImage: lang})} >
           <Picker.Item label="Choose product" /> 
           <Picker.Item label="image1" value="image1" /> 
           <Picker.Item label="image2" value="image2" /> 
           <Picker.Item label="image3" value="image3" /> 
           <Picker.Item label="image4" value="image4" /> 
           <Picker.Item label="image5" value="image5" /> 
           </Picker> 
           </View>
            </View>
            
        )
    }
}
const styles = StyleSheet.create({
inputBoxStyle:{
  borderWidth:2
},

  buttonStyle :{backgroundColor : "red",width : 150,height :30,alignSelf : "center",marginTop : 50},
  mainTextStyle :{backgroundColor:"orange",color:"green",alignSelf:"center",fontSize:30},
  buttonTextStyle :{color : "cyan",fontSize:20}
})