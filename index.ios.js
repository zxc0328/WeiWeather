'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image
} = React;

var LinearGradient = require('react-native-linear-gradient');


var WeatherProject = React.createClass({
    getInitialState : function(){
        return {
            forecast : ""
        }
    },
  componentWillMount : function(){
     fetch('http://api.openweathermap.org/data/2.5/weather?q=wuhan&units=metric')
      .then((response) => response.json())
      .then((responseJSON) => {
          this.setState({
              forecast:{
              main: responseJSON.weather[0].main,
            description: responseJSON.weather[0].description,
            temp: responseJSON.main.temp,
            city: responseJSON.name
              }
            
          })
          
      })
  },
  render: function() {
      
      
    return (

       
    
                                       

             <LinearGradient colors={['#214e78','#bde3ff']} style={styles.linearGradient}>
        <View style={styles.info_container}>
            <View style={styles.info_holder_top}>
            </View>
            <View style={styles.info_main}>
                <View style={styles.info_main_left}>
                </View>
                <View style={styles.info_main_center}>
                    <View style={styles.info_temp}>
                        <View style={styles.info_temp_warpper}>
                            <Text style={[styles.text_temp,styles.text_base]}>
                            { this.state.forecast.temp } 
                            </Text>
                            <Text style={[styles.text_temp_sign,styles.text_base]}>
                            { "℃" } 
                            </Text>
                        </View>
                    </View>
                    <View style={styles.info_des}>
                        <Text style={[styles.text_des,styles.text_base]}>
                        { this.state.forecast.description }
                        </Text>
                        <Text style={[styles.text_city,styles.text_base]}>
                        { "China, " + this.state.forecast.city }
                        </Text>
                    </View>
                    </View>
                <View style={styles.info_main_right}>
                </View>
            </View>
            <View style={styles.info_holder_bottom}>
            </View>
        </View>
        <View style={styles.img_container}>
         <Image
   
   style={styles.img}
    resizeMode="contain"
      source={require('image!sunny')}
     />
        </View>
 

</LinearGradient>
        
       
                    

    );
  }
});

var baseFontSize = 16;

var styles = StyleSheet.create({

  
     linearGradient: {
    flex: 1,
    flexDirection: 'column'
  },
    info_container:{
      flex:54,
      flexDirection: 'column'
  },
  img_container:{
      flex:46,
      flexDirection: 'row',
      alignItems: 'center'
  },
    img:{
      flex:1
  },
    info_holder_top:{
        flex:24
    },
    info_main:{
        flex:51,
        flexDirection: 'row'
    },
    info_main_left:{
        flex:9
    },
    info_main_center:{
        flexDirection: 'column',
        flex:63
    },
    info_main_right:{
        flex:28
    },
    info_holder_bottom:{
        flex:25
    },
    info_temp:{
        flex:68,
         flexDirection: 'row',
        alignItems: 'flex-end'
    },
    info_temp_warpper:{
        flex:1,
         flexDirection: 'row',
        height:103
    },
    info_des:{
        flex:32,
        borderLeftWidth:8,
        borderLeftColor:"rgba(255,255,255,0.24)",
        marginTop:5,
        marginLeft:5
    },
    text_base:{
        fontFamily: 'Avenir Next'
    },
    text_temp:{
        flex:6,
        fontSize: 100,
        color:"rgba(255,255,255,0.51)",
        fontWeight: '100'
    },
    text_temp_sign:{
        flex:4,
        fontSize: 50,
        color:"rgba(255,255,255,0.51)",
        fontWeight: '100',
        paddingTop:13
        
    },
   text_des:{
       flex:6,
         color:"rgba(255,255,255,1)",
       fontWeight: '200',
       fontSize: 25,
       paddingLeft:10
   },
    text_city:{
       flex:3,
         color:"rgba(255,255,255,1)",
        fontWeight: '600',
        fontSize: 12,
        paddingLeft:10
   }
})

AppRegistry.registerComponent('WeatherProject', () => WeatherProject);
