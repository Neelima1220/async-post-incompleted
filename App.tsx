import React, { useEffect, useState } from 'react';
import './style.css';
import { User } from './user';

const link = 'https://jsonplaceholder.typicode.com/posts';

const App = () => {
  const [data, setData] = useState([]);
  console.log(data, 'data');
  const getData = async () => {
    let tempdata = await (await fetch(link)).json();
    tempdata = tempdata.slice(0, 10);
    console.log(tempdata);
    setData(tempdata);
  };
  useEffect(() => {
    getData();
  }, []);

  const randomTitles = ['rand1', 'rand2', 'rand3', 'rand4', 'rand5'];
  const randomTexts = ['desc1', 'desc2', 'desc3', 'desc4', 'desc5'];
  const handleSubmitData = async () => {
    const tempObj = await (
      await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: randomTitles[Math.floor(Math.random() * randomTitles.length)],
          body: randomTexts[Math.floor(Math.random() * randomTexts.length)],
          userId: Math.random(),
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
    ).json();
    setData([...data, tempObj]);
  };

  const handleDeleteData = (id) => {
    const tempData = [...data];
    const filteredData = tempData.filter((item) => item.userId !== id);
    console.log(filteredData);
    setData(filteredData);
  };

  return (
    <div className="App">
      {data &&
        data.map((item) => {
          return <User item={item} handleDeleteData={handleDeleteData} />;
        })}
      <button onClick={handleSubmitData}>add data</button>
    </div>
  );
};

export default App;
