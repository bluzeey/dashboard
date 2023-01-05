import React, { useEffect, useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import Sidebar from "./Sidebar";
import ToolkitProvider from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min";
import "../index.css";

function Teamstable() {
  const [teams, setTeams] = useState([]);
  const [games, setGames] = useState([]);
  const [total, setTotal] = useState(0);
  const [selectedRow, setSelectedRow] = useState(0);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const getData = async () => {
      await fetch("https://www.balldontlie.io/api/v1/teams")
        .then((response) => response.json())
        .then((data) => {
          setTeams(data.data);
        });
    };
    getData();
  }, []);

  const headerStyle = {
    backgroundColor: "#052c65",
    color: "white",
  };

  const columns = [
    { dataField: "id", text: "Id", headerStyle: headerStyle },
    { dataField: "full_name", text: "Team Name", headerStyle: headerStyle },
    { dataField: "city", text: "City", sort: true, headerStyle: headerStyle },
    {
      dataField: "abbreviation",
      text: "Abbreviation",
      headerStyle: headerStyle,
    },
    { dataField: "conference", text: "Conference", headerStyle: headerStyle },
    { dataField: "division", text: "Division", headerStyle: headerStyle },
  ];

  const options = {
    paginationSize: 5,
    sizePerPageList: [6, 10],
  };

  const rowEvents = {
    onClick: async (e, row, rowIndex) => {
      setSelectedRow(row);
      await fetch(
        `https://www.balldontlie.io/api/v1/games?seasons[]=2021&team_ids[]=${
          rowIndex + 1
        }`
      )
        .then((response) => response.json())
        .then((data) => {
          setGames(data.data);
          setTotal(data.meta.total_count);
        });
      handleShow();
    },
  };
  const MySearch = (props) => {
    let input;
    const handleClick = () => {
      props.onSearch(input.value);
    };
    return (
      <div className="my-2 w-50">
        <input
          className="form-control"
          style={{ border: "2px solid #052c65" }}
          ref={(n) => (input = n)}
          type="text"
          onChange={handleClick}
        />
      </div>
    );
  };

  return (
    <ToolkitProvider
      keyField="name"
      data={teams}
      columns={columns}
      search={{
        searchFormatted: true,
      }}
    >
      {(props) => (
        <div className="h-100">
          <h2
            style={{ color: "#052c65", marginBottom: "5px" }}
            className="my-2"
          >
            NBA Teams
          </h2>
          <MySearch {...props.searchProps} />
          <BootstrapTable
            {...props.baseProps}
            pagination={paginationFactory(options)}
            rowEvents={rowEvents}
            bootstrap4
            rowStyle={{
              backgroundColor: "rgb(241,245,249)",
              marginBottom: "2px",
              fontWeight: "bold",
            }}
          />
          <Sidebar
            selectedRow={selectedRow}
            show={show}
            handleClose={handleClose}
            total={total}
            games={games}
          />
        </div>
      )}
    </ToolkitProvider>
  );
}

export default Teamstable;
