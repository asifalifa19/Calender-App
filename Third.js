
import { StyleSheet, Text, View, TextInput,Button } from 'react-native';


const Third = () => {
    return(
      <>
<View style={styles.ForTime}>
      <View>
        <Text style={styles.ForYear} >
          2021
        </Text>
      </View>


        <View style={styles.container} >
      <Text style={styles.firstrow} >Mon</Text>
      <Text style={styles.firstrow} >Tue</Text>
      <Text style={styles.firstrow} >Wed</Text>
      <Text style={styles.firstrow} >Thu</Text>
      <Text style={styles.firstrow} >Fri</Text>
      <Text style={styles.firstrow} >Sat</Text>
      <Text style={styles.firstrow} >Sun</Text>
    </View>
    <View style={styles.container} >
      <Text>31</Text>
      <Text>30</Text>
      <Text>1</Text>
      <Text>2</Text>
      <Text>3</Text>
      <Text>4</Text>
      <Text>5</Text>
    </View>

    <View style={styles.container} >
      <Text>6</Text>
      <Text>7</Text>
      <Text>8</Text>
      <Text>9</Text>
      <Text>10</Text>
      <Text>11</Text>
      <Text>12</Text>
    </View> 
    </View>
    <View style ={styles.containerS}>
      <Text style={styles.text} >Add New Event</Text>
      <View>
   <TextInput style={styles.Input} >
            <Text> Event Name</Text>
        </TextInput>

        <TextInput style={styles.Input} >
            <Text> Type the note here...</Text>
        </TextInput>

        <TextInput style={styles.Input} >
            <Text> Date </Text>
        </TextInput>
        <View style={styles.Align}>
        <TextInput style={styles.Input} >
            <Text> Start Time </Text>
        </TextInput>

        <TextInput style={styles.Input} >
            <Text> End Time </Text>
        </TextInput>
        </View>

      
   </View>
   <View>
    <Text>Reminds me</Text>
   </View>
   <View>
    <Text>Select Catgeory</Text>
   </View>

   


     </View>
  

    </>
  );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        Color: '#6a6c6e',
        justifyContent :'space-evenly',
        padding:5,
        margin:1,
      },
      firstrow: {
        color:'#8F9BB3',
      },


      text: {
        textAlign:'center',
        fontSize: 20,
        padding: 10,
      },
    containerS:{
      justifyContent: 'center',
      color:'#D0D3D7',
      borderTopRightRadius: 32,
      borderTopLeftRadius: 32,
      borderCurve : 30,
      padding: 20,

    },

    ForTime:{
      justifyContent:'flex-start',
    },  
    ForYear:{
      textAlign:'center',
      justifyContent: 'center',
      alignContent: 'center',
      margin:2,  
    },
    Input:{
        color: '#8F9BB3',
        fontSize: 15,
        padding:6,
        

    },
    Align:{
        flexDirection:'row',
        justifyContent:'space-between'

    }
});

export default Third;
