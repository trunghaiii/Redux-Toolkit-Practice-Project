import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './redux/slices/counterSlice'
import axios from 'axios'
import { useEffect, useState } from 'react';

function App() {
  const dispatch = useDispatch()

  const count = useSelector(state => state.counter.value)

  const [listUser, setListUser] = useState([])

  useEffect(() => {
    fetchAllUser()
  }, [])

  const fetchAllUser = async () => {
    let res = await axios.get("http://localhost:8080/users/all")
    setListUser(res.data)
    console.log(res.data);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <h1>Hello world with React and Trung Hai!</h1>
        <button onClick={() => dispatch(increment())}>Increase</button>
        <button onClick={() => dispatch(decrement())}>Decrease</button>
        <br />
        <div>Count = {count}</div> */}

        <table>
          <thead>
            <th>ID</th>
            <th>email</th>
            <th>username</th>
          </thead>
          <tbody>
            {listUser && listUser.length > 0 &&

              listUser.map((item, index) => {
                return (
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.email}</td>
                    <td>{item.username}</td>
                  </tr>
                )
              })

            }

          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
