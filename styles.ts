import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    header:{
      margin: 10,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#0000005c',
      paddingVertical: 10,
    },
    headerText:{
      fontWeight: 'bold',
      fontSize: 20
    },
    initial:{
      flex: 1,
      marginTop: 25,
      padding: 15
    },
    container: {
      flex: 5,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text:{
      alignContent: 'center',
      justifyContent:'center',
      backgroundColor: '#ccc',
      padding: 120,
      margin: 10,
      borderRadius: 5
    },
    button:{
      width: 80,  
      height: 80,   
      borderRadius: 50,            
      backgroundColor: '#ee6e73',                                    
      position: 'absolute',                                          
      bottom: 10,                                                    
      right: 10, 
      shadowOpacity: 50,
      shadowColor: '#ccc'
    }
  });