import React, { useEffect, useState } from 'react';

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setList(data));
  }, []);

  const handleSort = () => {
    const sortedData = [...list].sort((a, b) => a.id.localeCompare(b.id));
    setList(sortedData);
  };

  return (
    <>
    <button onClick={handleSort}> sorting ascending</button>
    <table>
      <thead>
        <tr>
         
          <th>userId</th>
          <th>id</th>
          <th>title</th>
          <th>body</th>
        </tr>      
      </thead>
      <tbody>
        {list.map(item => (
          <tr key={item.id}>
            <td>{item.userId}</td>
            <td>{item.id}</td>      
            <td>{item.title}</td>      
            <td>{item.body}</td>      
          </tr>
        ))}
      </tbody>
    </table>
    </>
  );
}

export default App;
