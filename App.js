import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box1}>
            <View style={styles.imgTop}>
                <Image style={styles.pic} source={require('./assets/doggy.png')}/>
            </View>
            <View style={styles.textTop}>
                <Text style={styles.headingText1}>Heading </Text>
                <Text style={styles.headingText2}>Some descriptional text.
                Preferably in another style.</Text>
            </View>  
            </View>
            <View style={styles.box1}>
            <View style={styles.imgTop}>
                <Image style={styles.pic} source={require('./assets/doggy.png')}/>
            </View>
            <View style={styles.textTop}>
                <Text style={styles.headingText1}>Heading</Text>
                <Text style={styles.headingText2}>Some descriptional text.
                Preferably in another style.</Text>
            </View>           
        </View>
        <View style={styles.box2}>              
                  <Image style={styles.cake} source={require('./assets/cake.jpg')}/>            
              <Text style={styles.TextBottom}>Title</Text>              
        </View>
        
        
        <ScrollView horizontal style={styles.box3s} >
        <View style={styles.box4}>
              <Image style={styles.cake} source={require('./assets/cake.jpg')}/>
              <Text style={styles.TextBottomS}>Title</Text>
        </View>
        <View style={styles.box4}>
              <Image style={styles.cake} source={require('./assets/cake.jpg')}/>
              <Text style={styles.TextBottomS}>Title</Text>
        </View>
        <View style={styles.box4}>
              <Image style={styles.cake} source={require('./assets/cake.jpg')}/>
              <Text style={styles.TextBottomS}>Title</Text>
        </View>
        </ScrollView>
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',    
  },
  box1: {
    flex: 1,
    flexDirection: 'row',
    borderColor: 'grey',
    borderWidth: 0.5,
    borderRadius: 5,   
    margin: 8     
  },
  box2: {
    flex: 1,
    borderColor: 'grey',
    borderWidth: 0.5,
    borderRadius: 5,   
    margin: 8,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    zIndex: 1,
  },
  box3: {
    flex: 1, 
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'center', 
    alignSelf: 'stretch',  
    zIndex: 1, 
  },
  box4: {
    flex: 0.33,
    borderColor: 'grey',
    borderWidth: 0.5,
    borderRadius: 5, 
    margin: 8,
    alignItems: 'center',
    justifyContent: 'center', 
    alignSelf: 'stretch', 
    position: 'relative',
    zIndex: 1,
    width: 345,
       
  },
  imageTop: {
    flex: 1,     
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 4,
  },
  pic: {
    borderRadius: 50,
    height: 100,
    width: 100,
    
  },
  textTop: {
    flex: 2,     
    alignItems: 'flex-start',
    justifyContent: 'center',
    margin: 8,
  },
    headingText1: {
    fontSize: 20,
    margin: 8,
    fontWeight: 'bold',
   },
   headingText2: {
    fontSize: 16,
    margin: 8,
   },
   cake: {
    width: 345,
    height: 172,
    zIndex: 0,
    borderRadius: 5,
    position: 'absolute',
    
   },
   
  



});
