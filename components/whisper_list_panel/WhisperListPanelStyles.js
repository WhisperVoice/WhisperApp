import { 
  StyleSheet,
  Dimensions
} from "react-native"

const { width, height } = Dimensions.get('window');
export default StyleSheet.create({
    container: {
      flex: 1,
    },
    bodyViewStyle: {
      flex: 1,
      justifyContent: 'center', 
      alignItems: 'center',
    },
    headerLayoutStyle: {
      width, 
      height: 110, 
      backgroundColor: '#E84361', 
      justifyContent: 'center', 
      alignItems: 'center',
    },
    slidingPanelLayoutStyle: {
      width, 
      height, 
      backgroundColor: '#000000', 
      justifyContent: 'center', 
      alignItems: 'center',
    },
    commonTextStyle: {
      color: 'white', 
      fontSize: 18,
    },
  });