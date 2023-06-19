import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './App.css'


const Table = () => {
  const search = useRef();
  const [data, setData] = useState([]);
  const [order, setOrder] = useState(true);

  const getData = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const orderFn = (str) => {
    if (str === 'dec') {
      setData([...data].sort((a, b) => b.id - a.id));
      setOrder(false);
    } else if (str === 'asc') {
      setData([...data].sort((a, b) => a.id - b.id));
      setOrder(true);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div>
        {order ? (
          <button onClick={() => orderFn('dec')}>sorting descending</button>
        ) : (
          <button onClick={() => orderFn('asc')}>sorting ascending</button>
        )}
        <br/>
        <input type='text' ref={search} placeholder='Search by title' onChange={() => console.log(search.current.value)} />
      </div>
      <table class="table table-success table-striped">
        <thead>
          <tr>
            <th >id</th>
            <th>userId</th>
            <th>title</th>
            <th>body</th>
          </tr>
        </thead>
        <tbody>
          {data
            .filter((item) => item.title.includes(search.current?.value || ''))
            .map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.userId}</td>
                <td>{item.title}</td>
                <td>{item.body}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
