import jwtDecode from 'jwt-decode';
import ls from 'local-storage'

export let isTokenExpired = (token) => {
  try {
    const decoded = jwtDecode(token);
    if (decoded.exp < Date.now() / 1000) { // Checking if token is expired.
      return true;
    }
    return false;
  } catch (e) {
    return false;
  }
};

export let decodeUsername = (token) => {
  try {
    const decoded = jwtDecode(token);
    return decoded.sub;
  } catch (e) {
    return null;
  }
};

export let getToken = () => {
  return ls.get('token');
};

export let isAuthenticated = () => {
  return getToken();
};
