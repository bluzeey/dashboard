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
  const [error, setError] = useState(false);
  const [gamesError,setGamesError]=useState(false)
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
        })
        .catch((err) => {
          setError(true);
        });
    };
    getData();
  }, []);

  const headerStyle = {
    backgroundColor: "#074684",
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

  const pageButtonRenderer = ({
    page,
    active,
    onPageChange,
  }) => {
    const handleClick = (e) => {
      e.preventDefault();
      onPageChange(page);
    };
    const activeStyle = {};
    if (active) {
      activeStyle.backgroundColor = "#074684";
      activeStyle.color = "white";
    } else {
      activeStyle.backgroundColor = "#F8FBFD";
      activeStyle.color = "black";
    }
    if (typeof page === "string") {
      activeStyle.backgroundColor = "white";
      activeStyle.color = "black";
    }
    return (
      <li className="page-item">
        <a
          className="page-link"
          href="#"
          onClick={handleClick}
          style={activeStyle}
        >
          {page}
        </a>
      </li>
    );
  };

  const options = {
    paginationSize: 5,
    sizePerPageList: [6, 10],
    pageButtonRenderer,
  };

  const selectRow = {
    mode: "radio",
    clickToSelect: true,
    hideSelectColumn: true,
    style: {
      backgroundColor: "#074684",
      color: "white",
    },
  };

  const rowEvents = {
    onClick: async (e, row, rowIndex) => {
      setSelectedRow(row);
      await fetch(
        `https://www.balldontlie.io/api/v1/gamses?seasons[]=2021&team_ids[]=${
          rowIndex + 1
        }`
      )
        .then((response) => response.json())
        .then((data) => {
          setGames(data.data);
          setTotal(data.meta.total_count);
        }).catch((err)=>
          setGamesError(true)
        );
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
          style={{ border: "2px solid #074684" }}
          ref={(n) => (input = n)}
          type="text"
          onChange={handleClick}
        />
      </div>
    );
  };

  if(error){
    return <p>We cannot load the data at the moment.</p>
  }

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
            style={{ color: "#074684", marginBottom: "5px" }}
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
              backgroundColor: "#F8FBFD",
              marginBottom: "2px",
              fontWeight: "700",
            }}
            selectRow={selectRow}
          />
          <Sidebar
            selectedRow={selectedRow}
            show={show}
            handleClose={handleClose}
            total={total}
            games={games}
            gamesError={gamesError}
          />
        </div>
      )}
    </ToolkitProvider>
  );
}

export default Teamstable;
