import { useEffect, useState } from 'react';
import LeftPane from './Left';
import RightPane from './Right';

function Body() {
  const [Task, setTask] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/data/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setTask(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);

  
  const SaveData = ({ title, description }) => {
    console.log('Saving task:',{title,description});
  
    fetch('http://localhost:3000/data/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({title,description}),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to save the task');
        }
        return response.json();
      })
      .then((savedTask) => {
        console.log('Task saved successfully:', savedTask);
        setTask((prevTasks) => [...prevTasks, savedTask]);
      })
      .catch((error) => {
        console.error('Error saving task:', error);
      });
  };
  
  

  

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <LeftPane Taskdata={Task} /> {/* Pass Task array */}
      <RightPane  onSave={SaveData} />
    </div>
  );
}

export default Body;
