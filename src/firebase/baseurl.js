import axios from 'axios'
export default axios.create(
    {
        baseURL: 'https://twitter-app-ddf5b-default-rtdb.firebaseio.com/'
    }
)