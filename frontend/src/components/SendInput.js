import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import { WHITE, GRAY, PRIMARY } from '../constant/color';

const SendInput = ({ placeholder, buttonText }) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder={placeholder} />
      <TouchableOpacity style={styles.sendButton}>
        <Text style={styles.sendButtonText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    padding: 3,
    borderRadius: 15,
    backgroundColor: GRAY.BACKGROUND,
  },
  input: {
    flex: 1,
    height: 40,
    borderRadius: 15,
    backgroundColor: GRAY.BACKGROUND,
    paddingHorizontal: 10,
  },
  sendButton: {
    backgroundColor: PRIMARY.DEFAULT,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 15,
  },
  sendButtonText: {
    color: WHITE,
    fontWeight: 'bold',
  },
});

export default SendInput;
