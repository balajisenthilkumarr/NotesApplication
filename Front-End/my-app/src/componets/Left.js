import Taskcard from "./Taskcard"
function Left({ Taskdata}) {
    console.log("data from title:",Taskdata);
    return (
      <div className="w-1/3 bg-gray-150 p-4 border-r border-gray-300">
        <h2 className="text-lg font-semibold text-gray-800">Your Tasks</h2>
        <ul className="mt-4 space-y-2">
        {Taskdata.map((task, index) => (
          <Taskcard
            key={index}
            task={task}
            onUpdate={() => console.log("Update task:", task)}
            onDelete={() => console.log("Delete task:", task)}
          />
        ))}
        </ul>
      </div>
    );
  }
  
  export default Left;
  