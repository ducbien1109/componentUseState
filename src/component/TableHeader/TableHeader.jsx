import { Table, Col } from "reactstrap";
import TableColumns from "../TableColumns/TableColumns";
function TableHeader() {
  return (
    <Table bordered>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <TableColumns/>
    </Table>
  );
}
export default TableHeader;
