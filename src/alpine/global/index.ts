import { tableDataOne, tableDataTwo, tasksBoard } from "../../constants";
import type {
  ITableDataTwo,
  ITaskBoard,
  ITaskBoardItem,
} from "../../interfaces";

interface xDataOne {
  showModal?: boolean;
  tableHeaders?: string[];
  tableData?: typeof tableDataOne;
  selectedRow?: (typeof tableDataOne)[0];
  onRowClick?: (row?: (typeof tableDataOne)[0]) => void;
  closeModal?: () => void;
  ["key"]?: any;
}

interface xDataTwo {
  showPopup?: boolean;
  tasksBoard?: ITaskBoard[];
  selectedTask?: ITaskBoardItem;
  onCardClick?: (task?: ITaskBoardItem) => void;
  closeModal?: () => void;
  ["key"]?: any;
}

interface xDataThree {
  showModal?: boolean;
  tableContent?: ITableDataTwo[];
  selectedRow?: ITableDataTwo;
  onRowClick?: (row?: ITableDataTwo) => void;
  closeModal?: () => void;
  ["key"]?: any;
}

export const xDataOne: () => xDataOne = () => ({
  showModal: false,
  tableHeaders: ["Name", "Description", "Email", "Actions"],
  tableData: tableDataOne,
  selectedRow: {},
  onRowClick(row) {
    this.selectedRow = row;
    this.showModal = true;
  },
  closeModal() {
    this.showModal = false;
  },
  dataOverlayClasses: "w-[40rem]",
});

export const xDataTwo: () => xDataTwo = () => ({
  showPopup: false,
  tasksBoard: tasksBoard,
  selectedTask: tasksBoard[1].tasks![0]!,
  onCardClick(card) {
    this.selectedTask = card;
    this.showPopup = true;
  },
  closeModal() {
    this.showPopup = false;
  },
  addNewTask(index: number) {
    const newTask: ITaskBoardItem = {
      id: Math.random(),
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
      inList: this.tasksBoard![index].status,
    };
    const newTaskBoard = [...this.tasksBoard!];
    newTaskBoard[index].tasks?.push(newTask);
    this.tasksBoard = newTaskBoard;
  },
  getStatusBg(task: string, isLine?: boolean) {
    if (!isLine) {
      switch (task.toLowerCase()) {
        case "no status":
          return "bg-[#404040]";
        case "on track":
          return "bg-[#1b2d2d]";
        case "at risk":
          return "bg-[#31271d]";
        case "behind":
          return "bg-[#392127]";
        default:
          return "bg-[#404040]";
      }
    } else {
      switch (task.toLowerCase()) {
        case "no status":
          return "bg-[#737373]";
        case "on track":
          return "bg-[#4b9c73]";
        case "at risk":
          return "bg-[#bb7a29]";
        case "behind":
          return "bg-[#de5e53]";
        default:
          return "bg-[#737373]";
      }
    }
  },
  getTaskProgress(completed: number, total: number) {
    const percentage = (completed / total) * 100;
    return `${percentage.toFixed(0)}%`;
  },
});

export const xDataThree: () => xDataThree = () => ({
  showModal: false,
  tableContent: tableDataTwo,
  selectedRow: tableDataTwo[0],
  tableHeaders: [
    "User",
    "Role/Department",
    "Location",
    "Manager",
    "Last Active",
  ],
  onRowClick(row) {
    this.selectedRow = row;
    this.showModal = true;
  },
  closeModal() {
    this.showModal = false;
  },
  onRowSelect(index: number) {
    const newTableContent = [...this.tableContent!];
    newTableContent[index].isSelected = true;
    this.tableContent = newTableContent;
  },
  selectAll(val?: boolean) {
    const newTableContent = [...this.tableContent!];
    newTableContent.forEach((item) => (item.isSelected = val));
    this.tableContent = newTableContent;
  },
});
