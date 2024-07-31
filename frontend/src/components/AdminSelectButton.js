import { Pressable, StyleSheet, Text, View } from 'react-native';
import { BLACK, GRAY, PRIMARY, WHITE } from '../constant/color';

export const ButtonType = {
  PRIMARY: 'PRIMARY',
  GRAY: 'GRAY',
};
const AdminSelectButton = ({ title, onPress, disabled, buttonType }) => {
  const colors = { PRIMARY, GRAY };
  return (
    <View style={styles.container}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          styles.container,
          { backgroundColor: GRAY.BTN },
        ]}
        disabled={disabled}
      >
        <Text style={styles.title}>{title}</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    width: '100%',
    paddingHorizontal: 25,
    marginHorizontal: 5,
  },
  title: {
    color: BLACK,
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 20,
  },
});
export default AdminSelectButton;
