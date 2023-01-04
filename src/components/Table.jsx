import React, { useEffect, useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import Offcanvas from "react-bootstrap/Offcanvas";
import moment from "moment";

function Teamstable() {
  const [teams, setTeams] = useState([]);
  const [games, setGames] = useState([]);
  const [total, setTotal] = useState(0);
  const [selectedRow, setSelectedRow] = useState(0);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let randomGame = 1 + Math.floor(Math.random() * 25);

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

  const columns = [
    { dataField: "id", text: "Id" },
    { dataField: "full_name", text: "Team Name" },
    { dataField: "city", text: "City" },
    { dataField: "abbreviation", text: "Abbreviation" },
    { dataField: "conference", text: "Conference" },
    { dataField: "division", text: "Division" },
  ];
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
          console.log(games);
          setTotal(data.meta.total_count);
        });
      handleShow();
    },
  };
  return (
    <>
      <BootstrapTable
        keyField="name"
        data={teams}
        columns={columns}
        pagination={paginationFactory({
          paginationSize: 5,
          sizePerPageList: [6, 10],
        })}
        rowEvents={rowEvents}
      />
      <Offcanvas placement="end" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{selectedRow.full_name}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="d-flex justify-content-between">
            <p>Team full name:</p>
            <p>{selectedRow?.full_name} </p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Total Games in 2021 :</p>
            <p>{total}</p>
          </div>
          <p className="fw-bold">Random Game Details: </p>
          <div className="fw-bold">
            <div className="px-2">
              <div className="d-flex justify-content-between">
                <p>Date</p>
                <p>{moment.utc(games[randomGame]?.date).format("MM/DD/YY")}</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Home Team</p>
                <p>{games[randomGame]?.home_team.full_name}</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Home Team Score</p>
                <p>{games[randomGame]?.home_team_score}</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Visitor Team</p>
                <p>{games[randomGame]?.visitor_team.full_name}</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Visitor Team Score</p>
                <p>{games[randomGame]?.visitor_team_score}</p>
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Teamstable;
