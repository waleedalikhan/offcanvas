import type { ITableDataTwo, ITaskBoard } from "../interfaces";

export const tableDataOne: {
  userImg?: string;
  name?: string;
  description?: string;
  caption?: string;
  email?: string;
  isActive?: boolean;
}[] = [
  {
    userImg: "/user-img.webp",
    name: "User 1",
    description: "User 1 description",
    email: "user@email.com",
    isActive: true,
  },
  {
    userImg: "/user-img-2.webp",
    name: "User 2",
    description: "User 2 description",
    email: "user@email.com",
    isActive: true,
  },
  {
    userImg: "/user-img-3.webp",
    name: "User 3",
    description: "User 3 description",
    email: "user@email.com",
  },
  {
    userImg: "/user-img.webp",
    name: "User 4",
    description: "User 4 description",
    email: "user@email.com",
  },
  {
    userImg: "/user-img-2.webp",
    name: "User 5",
    description: "User 5 description",
    email: "user@email.com",
    isActive: true,
  },
];

export const tasksBoard: ITaskBoard[] = [
  {
    status: "No Status",
    tasks: [],
  },
  {
    status: "On track",
    tasks: [
      {
        id: 1,
        title: "New module - 1 to 1s",
        caption: "Create new module (1 tp 1s)",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur totam dignissimos saepe, aut vero, veritatis rerum cum, id nesciunt itaque assumenda quod quam. Aliquid nihil adipisci ea, error deleniti ipsam omnis nisi cupiditate soluta at, laudantium quas, dignissimos enim unde?",
        assignee: [
          {
            img: "/user-img.webp",
            name: "Patrick Fitzgerald",
          },
        ],
        tags: ["Product development"],
        comments: ["This is a comment!"],
        completedTask: 2,
        totalTasks: 4,
        inList: "On track",
      },
      {
        id: 2,
        title: "Platform version 6",
        caption:
          "Major redesign for the Performance Leader application. Objectives",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur totam dignissimos saepe, aut vero, veritatis rerum cum, id nesciunt itaque assumenda quod quam. Aliquid nihil adipisci ea, error deleniti ipsam omnis nisi cupiditate soluta at, laudantium quas, dignissimos enim unde?",
        assignee: [
          {
            img: "/user-img.webp",
            name: "Patrick Fitzgerald",
          },
        ],
        tags: ["Product development"],
        comments: ["This is a comment!", "This is a comment!"],
        completedTask: 2,
        totalTasks: 6,
        inList: "On track",
      },
      {
        id: 3,
        title: "Infrastructure",
        caption:
          "Improve key areas in infrastructure stack Implement cloudflare",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur totam dignissimos saepe, aut vero, veritatis rerum cum, id nesciunt itaque assumenda quod quam. Aliquid nihil adipisci ea, error deleniti ipsam omnis nisi cupiditate soluta at, laudantium quas, dignissimos enim unde?",
        assignee: [
          {
            img: "/user-img.webp",
            name: "Patrick Fitzgerald",
          },
        ],
        tags: ["Product development", "Security & privacy"],
        comments: ["This is a comment!", "This is a comment!"],
        completedTask: 1,
        totalTasks: 4,
        inList: "On track",
      },
    ],
  },
  {
    status: "At risk",
    tasks: [
      {
        id: 1,
        title: "Define & Implement data retention policy for client instances",
        caption: "TBC",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur totam dignissimos saepe, aut vero, veritatis rerum cum, id nesciunt itaque assumenda quod quam. Aliquid nihil adipisci ea, error deleniti ipsam omnis nisi cupiditate soluta at, laudantium quas, dignissimos enim unde?",
        assignee: [
          {
            img: "/user-img.webp",
            name: "Patrick Fitzgerald",
          },
          {
            img: "/user-img-2.webp",
            name: "Ray D'Cruz",
          },
        ],
        tags: ["Product development", "Security & privacy"],
        comments: ["This is a comment!"],
        completedTask: 1,
        totalTasks: 10,
        inList: "At risk",
      },
      {
        id: 2,
        title: "Product improvement tracking & communication",
        caption:
          "Aiming to better commincate with clients on product enhancements and accesibilities.",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur totam dignissimos saepe, aut vero, veritatis rerum cum, id nesciunt itaque assumenda quod quam. Aliquid nihil adipisci ea, error deleniti ipsam omnis nisi cupiditate soluta at, laudantium quas, dignissimos enim unde?",
        assignee: [
          {
            img: "/user-img.webp",
            name: "Patrick Fitzgerald",
          },
        ],
        tags: ["Product development"],
        comments: ["This is a comment!", "This is a comment!"],
        completedTask: 3,
        totalTasks: 10,
        inList: "At risk",
      },
    ],
  },
  {
    status: "Behind",
    tasks: [
      {
        id: 1,
        title: "Website enhancements",
        caption: "New pages, readiness survey tool",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur totam dignissimos saepe, aut vero, veritatis rerum cum, id nesciunt itaque assumenda quod quam. Aliquid nihil adipisci ea, error deleniti ipsam omnis nisi cupiditate soluta at, laudantium quas, dignissimos enim unde?",
        assignee: [
          {
            img: "/user-img.webp",
            name: "Patrick Fitzgerald",
          },
        ],
        tags: ["Sales & marketing"],
        comments: ["This is a comment!"],
        completedTask: 1,
        totalTasks: 2,
        inList: "Behind",
      },
    ],
  },
];

export const tableDataTwo: ITableDataTwo[] = [
  {
    id: 1,
    user: {
      firstName: "Patrick",
      lastName: "Fitzgerald",
      position: "Head of Product",
    },
    roles: {
      role: "Partner",
      department: "Commercial Insurance",
    },
    location: "London",
    manager: "Ray D'Cruz",
    lastActive: "Oct 10, 2024",
    isSelected: false,
  },
  {
    id: 2,
    user: {
      firstName: "User",
      lastName: "2",
      position: "Developer",
    },
    roles: {
      role: "Partner",
      department: "Commercial Insurance",
    },
    location: "London",
    manager: "Patrick Fitzgerald",
    lastActive: "Oct 10, 2024",
    isSelected: false,
  },
  {
    id: 3,
    user: {
      firstName: "User",
      lastName: "3",
      position: "Designer",
    },
    roles: {
      role: "Partner",
      department: "Commercial Insurance",
    },
    location: "New York",
    manager: "Patrick Fitzgerald",
    lastActive: "Oct 18, 2024",
    isSelected: false,
  },
  {
    id: 4,
    user: {
      firstName: "User",
      lastName: "4",
      position: "Analyst",
    },
    roles: {
      role: "Partner",
      department: "Commercial Insurance",
    },
    location: "Paris",
    manager: "Ray D'cruz",
    lastActive: "Oct 12, 2024",
    isSelected: false,
  },
  {
    id: 5,
    user: {
      firstName: "User",
      lastName: "5",
      position: "Manager",
    },
    roles: {
      role: "Partner",
      department: "Commercial Insurance",
    },
    location: "Tokyo",
    manager: "Ray D'cruz",
    lastActive: "Oct 20, 2024",
    isSelected: false,
  },
  {
    id: 6,
    user: {
      firstName: "User",
      lastName: "6",
      position: "Developer",
    },
    roles: {
      role: "Partner",
      department: "Commercial Insurance",
    },
    location: "London",
    manager: "Patrick Fitzgerald",
    lastActive: "Oct 15, 2024",
    isSelected: false,
  },
  {
    id: 7,
    user: {
      firstName: "User",
      lastName: "7",
      position: "Analyst",
    },
    roles: {
      role: "Partner",
      department: "Commercial Insurance",
    },
    location: "New York",
    manager: "Ray",
    lastActive: "Oct 15, 2024",
    isSelected: false,
  },
];
