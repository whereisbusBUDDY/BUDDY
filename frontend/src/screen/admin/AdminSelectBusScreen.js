import { StyleSheet, Text, View, Button } from 'react-native';
import RegistButton, { ButtonType } from '../../components/RegistButton';
import { useNavigation } from '@react-navigation/native';
import AdminSelectButton from '../../components/AdminSelectButton';
import { useAdminContext } from '../../context/AdminContext';
import { PRIMARY } from '../../constant/color';
import { useUserContext } from '../../context/UserContext';

const AdminSelectBusScreen = () => {
  const navigate = useNavigation();
  const { setBusNumber } = useAdminContext();
  const { loginUser, setLoginUser } = useUserContext();

  const goMap = (title) => () => {
    setBusNumber(title);
    navigate.navigate('AdminMain');
  };

  const logout = () => {
    setLoginUser(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.description}>운행하실 버스 호차를 선택해주세요</Text>
      <View style={styles.buttonbox}>
        <AdminSelectButton
          title={'1호차'}
          onPress={goMap(1)}
          buttonType={ButtonType.GRAY}
          disabled={false}
        />
        <AdminSelectButton
          title={'2호차'}
          onPress={goMap(2)}
          buttonType={ButtonType.GRAY}
          disabled={false}
        />
        <AdminSelectButton
          title={'3호차'}
          onPress={goMap(3)}
          buttonType={ButtonType.GRAY}
          disabled={false}
        />
        <AdminSelectButton
          title={'4호차'}
          onPress={goMap(4)}
          buttonType={ButtonType.GRAY}
          disabled={false}
        />
        <AdminSelectButton
          title={'5호차'}
          onPress={goMap(5)}
          buttonType={ButtonType.GRAY}
          disabled={false}
        />
        <AdminSelectButton
          title={'6호차'}
          onPress={goMap(6)}
          buttonType={ButtonType.GRAY}
          disabled={false}
        />
      </View>
      <AdminSelectButton
        title="게시판 보기"
        onPress={() => {
          navigate.navigate('UserBoard');
        }}
        buttonType={ButtonType.PRIMARY}
        disabled={false}
      />
      <Text style={styles.logout} onPress={logout}>
        로그아웃
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  description: {
    fontSize: 20,
    marginBottom: 20,
  },
  buttonbox: {
    width: '100%',
    marginBottom: 20,
  },
  logout: {
    color: PRIMARY.BTN,
    fontWeight: 'bold',
    marginTop: 15,
    fontSize: 18,
  },
});

export default AdminSelectBusScreen;
