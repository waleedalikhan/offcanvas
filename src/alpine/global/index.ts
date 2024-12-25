import { tableDataOne } from "../../constants";

interface xDataOne {
  showModal?: boolean;
  tableHeaders?: string[];
  tableData?: typeof tableDataOne;
  selectedRow?: (typeof tableDataOne)[0];
  onRowClick?: (row?: (typeof tableDataOne)[0]) => void;
  closeModal?: () => void;
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
});
