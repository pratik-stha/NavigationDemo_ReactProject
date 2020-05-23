import React,{useState,useEffect} from 'react';
import {View, StyleSheet,Text,TouchableOpacity} from 'react-native';
import {Button,Card} from 'react-native-elements';
import { Feather } from '@expo/vector-icons';

const HomeScreen=({route,navigation})=>{
    console.log(route.params);;
   
    const [Name,setName] = useState('Pizza');
    const [ImageUrl,setImageUrl] = useState('https://www.kingarthurflour.com/sites/default/files/recipe_legacy/20-3-large.jpg') ;
    const [Description,setDescription] = useState('Sweet and Sour');


    useEffect(() => {
        console.log('Profile: called anytime a specific state variable changes')
        if (route.params?.Name) {
          setName(route.params.Name)
        }
        if (route.params?.ImageUrl) {
          setImageUrl(route.params.ImageUrl);
        }
        if (route.params?.Description) {
          setDescription(route.params.Description);
        }
      }, [route.params?.Name, route.params?.ImageUrl, route.params?.Description]);
    

    navigation.setOptions(
        {
            headerRight:()=>(
                    <TouchableOpacity onPress = {()=>{navigation.navigate('Edit',{Name,ImageUrl,Description})}}>
                    <Feather style={{marginRight: 10}} name="feather" size={24} color="black" />
                    </TouchableOpacity>
            )
        }


    );
   
   
    return (
        <View>
            <Card title={Name} image={{uri:ImageUrl}} >
            
             <Text style={{alignSelf:'center'}}>{Description} </Text>
    
            </Card>
            </View>


    );
}

const styles = StyleSheet.create({});

export default HomeScreen;