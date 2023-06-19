import React, { useEffect, useState } from 'react';

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch('https://myapi.com/data')
      .then(res => res.json())
      .then(data => setList(data));
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Column 1</th>
          <th>Column 2</th>
        </tr>      
      </thead>
      <tbody>
        {list.map(item => (
          <tr key={item.id}>
            <td>{item.column1}</td>
            <td>{item.column2}</td>      
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default App;