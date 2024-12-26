export interface Props {
  triggererText?: string;
  isOpen?: boolean;
  hasToggler?: boolean;
  isBackgroundVisible?: boolean;
  isResizeable?: boolean;
  showNext?: boolean;
  drawerHeading?: string;
  overlayClasses?: string;
  modalClasses?: string;
  btnClass?: string;
}

export interface ITaskBoardItem {
  id?: string | number;
  title?: string;
  caption?: string;
  description?: string;
  assignee?: {
    img?: string;
    name?: string;
  }[];
  tags?: string[];
  comments?: string[];
  totalTasks?: number;
  completedTask?: number;
  inList?: string;
}

export interface ITaskBoard {
  status?: string;
  tasks?: ITaskBoardItem[];
}

export interface ITableDataTwo {
  id?: string | number;
  user?: {
    firstName?: string;
    lastName?: string;
    position?: string;
  };
  roles?: {
    role?: string;
    department?: string;
  };
  location?: string;
  manager?: string;
  lastActive?: string;
  infoOfUser?: string;
  achievements?: string[];
  isSelected?: boolean;
}
