
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import Third from './Third';

const September = ({ navigation }) => {

  


  const navigateToNextScreen = () => {
    navigation.navigate('Third');
  };
  return (
    <>
      <View style={styles.image} >
        <TouchableHighlight onPress={() => navigation.navigate('Third')} >
          <Text >➤</Text>
        </TouchableHighlight>

      </View>

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
      <View style={styles.container} >
        <Text>13</Text>
        <Text>14</Text>
        <Text>15</Text>
        <Text>16</Text>
        <Text>17</Text>
        <Text>18</Text>
        <Text>19</Text>
      </View>
      <View style={styles.container} >
        <Text>20</Text>
        <Text>21</Text>
        <Text>22</Text>
        <Text>23</Text>
        <Text>24</Text>
        <Text>25</Text>
        <Text>26</Text>
      </View>
      <View style={styles.container} >
        <Text>27</Text>
        <Text>28</Text>
        <Text>29</Text>
        <Text>30</Text>
        <Text>31</Text>
        <Text style={styles.firstrow} >1</Text>
        <Text style={styles.firstrow} >2</Text>
      </View>

      <View style={styles.containerForTexT}>
        <View style={styles.ForTime}>
          <Text style={styles.forlowerTime} >10:00-13:00</Text>
          <Text>...</Text>
        </View>
        <Text>
          Design new UX flow for Michael
        </Text>
        <Text style={styles.ForlowerText}  >Start from screen 16</Text>
      </View>
      <View style={styles.containerForTexT}>
        <View style={styles.ForTime}>
          <Text style={styles.forlowerTime} >14:00-15:00</Text>
          <Text>
            ...
          </Text>
        </View>
        <Text>

          Brainstorm with the team
        </Text>
        <Text style={styles.ForlowerText}  >Define the problem or question that.. View more
          the brainstorming session will aim to address. The question should be clear and concise. </Text>
      </View>


      <View style={styles.containerForTexT} >
        <View style={styles.ForTime}>
          <Text style={styles.forlowerTime} >19:00-20:00</Text>
          <Text>...</Text>
        </View>
        <Text>
          Workout with Ella
        </Text>
        <Text style={styles.ForlowerText} >We will do the legs and back workout</Text>
      </View>



    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    Color: '#6a6c6e',
    justifyContent: 'space-evenly',
    padding: 5,
    margin: 1,
  },
  firstrow: {
    color: '#8F9BB3',
  },


  text: {
    flexDirection: 'row',
  },
  containerForTexT: {
    padding: 10,
    margin: 10,
  },
  ForTime: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  ForlowerText: {
    fontSize: 12,
    color: '#8F9BB3',
  },
  forlowerTime: {
    fontSize: 12,
    color: '#8F9BB3',
  },
  ForYear: {
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    margin: 2,
  },
  image: {

    alignItems:'flex-end',
     width: 20,
     left: 320,
 },




});

export default September;
