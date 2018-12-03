import React, { Component } from 'react'
import {
  Modal,
  ModalBody
} from 'reactstrap';
import ReactTable from "react-table";
import "react-table/react-table.css";

class CommissionList extends Component {

  render() {
    const { show, commission, toggle } = this.props
    const externalCloseBtn = (
      <button
        className="close"
        style={{
          position: 'absolute',
          top: '15px',
          right: '20px',
          fontSize: '3rem',
        }}
        onClick={toggle}>
        &times;
      </button>
    );
    return (
      <Modal
        isOpen={show}
        // toggle={toggle}
        size="md"
        backdrop="static"
        backdropClassName="modal-backdrop-light"
        external={externalCloseBtn}
        centered>
        <ModalBody>
          <ReactTable
            data={commission}
            filterable
            columns={[
              {
                Header: "Salesman",
                id: "salesman",
                accessor: d => d.name,
                filterable: false
              },
              {
                Header: "Level",
                id: "level",
                accessor: d => d.level,
                filterable: false
              },
              {
                Header: "Commission",
                id: "commission",
                accessor: d => d.commission,
                filterable: false
              }
            ]}
            defaultPageSize={10}
            showPagination={false}
            className="-striped -highlight"
          />
        </ModalBody>
      </Modal>
    )
  }
}

export default CommissionList
