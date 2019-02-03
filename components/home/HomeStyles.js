import { StyleSheet } from "react-native"

const SIZE = 40;

export default StyleSheet.create({
    container: {
      flex: 1,
      margin: 20,
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      width: SIZE,
      height: SIZE,
      borderRadius: 100,
      zIndex: 99,
      backgroundColor: '#F035E0',
    },
    circle: {
      height: SIZE,
      width: SIZE,
      marginTop: -SIZE,
      borderRadius: 100,
      backgroundColor: '#F035E0',
    },
    image: {
      width: 24,
      height: 24,
    },
    text: {
      color: 'black',
      backgroundColor: 'transparent',
    },
    mapContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      flex: 1,
      zIndex: -1, 
    },
  });