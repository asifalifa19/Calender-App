import * as React from 'react';
import First from './First';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import September from './Second';
import Third from './Third';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="First">
        <Stack.Screen name="CALENDER.io" component={First} 
        options={{
          title: 'Calender.io',
          headerTitleStyle: {
            
            fontWeight: 'bold',
          },
        }}
        />
        <Stack.Screen name="September" component={September}        
         options={{
          title: 'September',
          headerTitleAlign: "center",
          
        }} />

        <Stack.Screen name= "Third" component={Third}
        
        options={{
          title: 'September',
          headerTitleAlign: "center",
          
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
