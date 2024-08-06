import axios from 'axios';
import apiClient from './api';
import { signIn_url, signUp_url, mm_url } from './url';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const signIn = (email, password) => {
  return apiClient
    .post(signIn_url, { email, password })
    .then(async (response) => {
      const { accessToken, role } = response.data;

      await AsyncStorage.setItem('accessToken', accessToken);
      await AsyncStorage.setItem('userEmail', email);
      await AsyncStorage.setItem('userRole', role);

      console.log('Access Token:', accessToken);

      return { role };
    })
    .catch(async (error) => {
      await AsyncStorage.removeItem('accessToken');
      await AsyncStorage.removeItem('userEmail');
      await AsyncStorage.removeItem('userRole');

      if (error.response) {
        throw new Error(error.response.data.message || '로그인 실패');
      } else if (error.request) {
        throw new Error('서버로부터 응답이 없습니다');
      } else {
        throw new Error('요청 설정 중 오류 발생');
      }
    });
};

export const signUp = async (userData) => {
  try {
    const response = await apiClient.post(signUp_url, userData);
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message || '회원가입 실패');
    } else if (error.request) {
      throw new Error('서버로부터 응답이 없습니다');
    } else {
      throw new Error('요청 설정 중 오류 발생');
    }
  }
};

export const mmAuth = (mmData) => {
  axios.post(mm_url, mmData);
};
