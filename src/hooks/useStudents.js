import { useCallback } from 'react';
import axios from 'axios';
import { useError } from './useError';

const studentsAPI = axios.create({});

studentsAPI.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');

    if (token) {
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export const useStudents = () => {
  const { dispatchError } = useError();

  const getGroups = useCallback(async () => {
    try {
      const result = await studentsAPI.get('/groups');
      return result.data.groups;
    } catch (e) {
      dispatchError('Something went wrong!');
    }
  }, []);

  const getStudentById = useCallback(async (studentId) => {
    try {
      const result = await studentsAPI.get(`/students/${studentId}`);
      return result.data.students;
    } catch (e) {
      dispatchError('Something went wrong! We cannot find student');
    }
  }, []);

  const getStudentsByGroup = useCallback(async (groupId) => {
    try {
      const result = await studentsAPI.get(`/groups/${groupId}`);
      return result.data.students;
    } catch (e) {
      dispatchError('Something went wrong! We cannot get a students group');
    }
  }, []);

  const findStudents = async (searchPhrase) => {
    try {
      const { data } = await studentsAPI.post(`/students/search`, {
        searchPhrase,
      });
      return data;
    } catch (e) {
      dispatchError('We cannot find student');
    }
  };

  return {
    getGroups,
    getStudentsByGroup,
    findStudents,
    getStudentById,
  };
};
