import { LOGGED_USER_ID } from '_common/constants/common.constants';
import api from '_common/services/api';
import { TASK_STATUS_ROUTE } from '../constants/tasks.constants';
import UserService from 'modules/users/services/user.service';

const BASE_PATH = '/task';

const getByStatus = (status) => {
  const statusCode = TASK_STATUS_ROUTE[status] || 3;
  return api.get(`${BASE_PATH}/${statusCode}/${LOGGED_USER_ID}`);
};

const getResponsibles = () => {
  return UserService.getAll();
}

const post = (task) => {
  return api.post(`${BASE_PATH}`, task)
} 

const put = (task) => {
  return api.put(`${BASE_PATH}/${task._id}`, task)
}

const remove = (taskId) => {
  return api.delete(`${BASE_PATH}/${taskId}`)
}

const TaskService = {
  getByStatus,
  getResponsibles,
  post,
  put,
  remove
};

export default TaskService;
