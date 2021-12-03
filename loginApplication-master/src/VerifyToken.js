import {push} from "connected-react-router";
import ls from 'local-storage';
import {isAuthenticated} from './jwtUtil';

export function verifyToken() {
  return (dispatch) => {
    if (isAuthenticated()) {
      const segmentURL = window.location.pathname;
      if (segmentURL === '/login') {
        const cuisine = ls.get("cuisine");
        let path='/dashboard';
      switch(cuisine){
        case 'Italian':
          path='/dashboard/italian';
          break;
        case 'Chinese':
          path='/dashboard/Chinese';
          break;
        case 'Baked':
          path='/dashboard/baked';
        break;
        default:
          break;          
      }   
        dispatch(push(path));
        
      }
    }
  };
}