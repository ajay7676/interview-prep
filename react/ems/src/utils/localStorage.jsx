const employees = [
    {
      "id": "emp001",
      "email": "emp001@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "new": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Task 1",
          "taskDescription": "Description for Task 1",
          "taskDate": "2025-03-14",
          "category": "Development"
        },
        {
          "active": true,
          "new": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Task 2",
          "taskDescription": "Description for Task 2",
          "taskDate": "2025-03-15",
          "category": "Testing"
        },
        {
          "active": false,
          "new": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Task 3",
          "taskDescription": "Description for Task 3",
          "taskDate": "2025-03-16",
          "category": "Research"
        }
      ]
    },
    {
      "id": "emp002",
      "email": "emp002@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "new": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Task 1",
          "taskDescription": "Description for Task 1",
          "taskDate": "2025-03-17",
          "category": "Design"
        },
        {
          "active": true,
          "new": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Task 2",
          "taskDescription": "Description for Task 2",
          "taskDate": "2025-03-18",
          "category": "Development"
        },
        {
          "active": false,
          "new": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Task 3",
          "taskDescription": "Description for Task 3",
          "taskDate": "2025-03-19",
          "category": "Testing"
        }
      ]
    },
    {
      "id": "emp003",
      "email": "emp003@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "new": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Task 1",
          "taskDescription": "Description for Task 1",
          "taskDate": "2025-03-20",
          "category": "Testing"
        },
        {
          "active": false,
          "new": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Task 2",
          "taskDescription": "Description for Task 2",
          "taskDate": "2025-03-21",
          "category": "Research"
        },
        {
          "active": true,
          "new": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Task 3",
          "taskDescription": "Description for Task 3",
          "taskDate": "2025-03-22",
          "category": "Development"
        }
      ]
    },
    {
      "id": "emp004",
      "email": "emp004@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "new": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Task 1",
          "taskDescription": "Description for Task 1",
          "taskDate": "2025-03-23",
          "category": "Design"
        },
        {
          "active": true,
          "new": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Task 2",
          "taskDescription": "Description for Task 2",
          "taskDate": "2025-03-24",
          "category": "Testing"
        },
        {
          "active": false,
          "new": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Task 3",
          "taskDescription": "Description for Task 3",
          "taskDate": "2025-03-25",
          "category": "Development"
        }
      ]
    },
    {
      "id": "emp005",
      "email": "emp005@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "new": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Task 1",
          "taskDescription": "Description for Task 1",
          "taskDate": "2025-03-26",
          "category": "Research"
        },
        {
          "active": true,
          "new": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Task 2",
          "taskDescription": "Description for Task 2",
          "taskDate": "2025-03-27",
          "category": "Design"
        },
        {
          "active": false,
          "new": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Task 3",
          "taskDescription": "Description for Task 3",
          "taskDate": "2025-03-28",
          "category": "Testing"
        }
      ]
    }
  ];
  
  const admin = [
    {
      "id": "admin001",
      "email": "admin@example.com",
      "password": "123"
    }
  ];


  export const setLocalStorage = () =>{
    localStorage.setItem('employees' , JSON.stringify(employees))
    localStorage.setItem('admin' , JSON.stringify(admin))
    
  }
  export const getLocalStorage = () =>{
    const employees =  JSON.parse(localStorage.getItem('employees'));
    const admin =  JSON.parse(localStorage.getItem('admin'));

    return {employees , admin};

  }
