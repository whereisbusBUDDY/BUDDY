import { Pressable, StyleSheet, Text, View } from 'react-native';
import { BLACK, GRAY, PRIMARY, WHITE, SKYBLUE } from '../../constant/color';
import { useAdminContext } from '../../context/AdminContext';

export const ButtonType = {
  PRIMARY: 'PRIMARY',
  GRAY: 'GRAY',
  SKYBLUE: 'SKYBLUE',
};
const StopTrackingButton = ({
  title,
  onPress,
  disabled,
  buttonType,
  height,
}) => {
  const colors = { PRIMARY, GRAY, SKYBLUE };
  const textColor = buttonType === ButtonType.PRIMARY ? WHITE : BLACK;
  const { isTracking } = useAdminContext();
  return (
    <View style={[styles.container]}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          styles.container,
          { height: height },
          { backgroundColor: colors[buttonType].DEFAULT },
          pressed && { backgroundColor: colors[buttonType].CLICK },
        ]}
        disabled={disabled}
      >
        <View style={styles.title_contianer}>
          <Text style={[styles.title, { color: textColor }]}>
            {title} 운행종료
          </Text>
        </View>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 25,
    width: '100%',
    marginBottom: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    justifyContent: 'center',
  },
  title_contianer: {
    alignItems: 'center',
  },
});
export default StopTrackingButton;
