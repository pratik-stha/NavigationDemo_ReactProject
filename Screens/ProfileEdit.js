import React ,{useState} from 'react';
import {View,StyleSheet,Text, Button, TouchableOpacity} from 'react-native';
import {Input} from 'react-native-elements';


const EditScreen=({route,navigation})=>{
    console.log(route.params);

    const initialName = route.params.Name;
    const initialImageUrl = route.params.ImageUrl;
    const initialDescription = route.params.Description;

    const [Name,setName] = useState(initialName);
    const [ImageUrl,setImageUrl] = useState(initialImageUrl) ;
    const [Description,setDescription] = useState(initialDescription);

    navigation.setOptions(
        {
            
            headerLeft:()=>(
                <TouchableOpacity onPress = {()=>{navigation.navigate('Home',{Name,ImageUrl,Description})}}>
               <Text>Save</Text>
               </TouchableOpacity>
            ),

            headerRight:()=>(
                    <TouchableOpacity title='Cancel' onPress = {()=>{navigation.navigate('Home')}}>
                     <Text>Cancel</Text>
                   </TouchableOpacity>
                  )
        }
    );

    return(
        <View>
                <Text style={{alignSelf:'center'}}>Welcome to Profile Edit</Text>
                <Input placeholder='Enter Name' value={Name}   onChangeText={setName} />
                
                <Input placeholder='Enter ImageUrl' value={ImageUrl}   onChangeText={setImageUrl} />
                
                <Input placeholder='Enter Description' value={Description}   onChangeText={setDescription} />
               <Button title='Back' onPress={() => navigation.navigate('Home',{Name,ImageUrl,Description})} />
        </View>

    );

}

const styles = StyleSheet.create({});

export default EditScreen;