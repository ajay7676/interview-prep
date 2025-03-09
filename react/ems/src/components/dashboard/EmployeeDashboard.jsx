import React from "react";
import Header from "../other/Header";
import TaskListNumber from "../other/TaskListNumber";
import TaskList from "../tasklist/TaskList";

const EmployeeDashboard = () => {
  return (
    <>
      <div className="p-10 bg-[#1c1c1c] h-screen">
        <Header />
        <TaskListNumber />
        <TaskList />
      </div>
    </>
  );
};

export default EmployeeDashboard;
