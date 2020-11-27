import axios from 'axios';
const instance=axios.create({
  baseURL:'https://react-my-burger-bc31f.firebaseio.com/'
})

export default instance;
