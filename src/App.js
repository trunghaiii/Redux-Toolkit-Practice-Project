import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './redux/slices/counterSlice'
import axios from 'axios'
import { useEffect, useState } from 'react';
import { fetchAllUser } from './redux/slices/userSlice'

function App() {
  const dispatch = useDispatch()

  const listUser = useSelector(state => state.user.listUser)
  const isLoading = useSelector(state => state.user.isLoading)
  const isError = useSelector(state => state.user.isError)


  useEffect(() => {
    dispatch(fetchAllUser())
  }, [])

  // const fetchAllUser = async () => {
  //   let res = await axios.get("http://localhost:8080/users/all")
  //   setListUser(res.data)
  //   console.log(res.data);
  // }

  if (isLoading === false && isError === true) {
    return (
      <div>something wrong</div>
    )
  }

  if (isLoading === true && isError === false) {
    return (
      <div>loading....</div>
    )
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
