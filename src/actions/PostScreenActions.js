import {
  USERNAME_SET,
  USERID_SET,
  CHATUSERNAME_SET,
  REPLY_LIST
} from './ActionTypes';



export const usernameSet = (text) => dispatch => {
  // console.log("Action  ",text)
  dispatch({
    type: USERNAME_SET,
    payload: text,
  });
  
};
export const useridSet = (text) => dispatch => {
  // console.log("Action ",text)
  dispatch({
    type: USERID_SET,
    payload: text,
  });
  
};

export const chatUserNameSet = (text) => dispatch => {
  // console.log("Action ",text)
  dispatch({
    type: CHATUSERNAME_SET,
    payload: text,
  });
  
};

export const replyListSet = (text) => dispatch => {
  // console.log("Action ",text)
  dispatch({
    type: REPLY_LIST,
    payload: text,
  });
  
};
// export const usernameSet = text => {
//   return {
//     type: USERNAME_SET,
//     payload: text,
//   };
// };
