import React from 'react'
import Offcanvas from "react-bootstrap/Offcanvas";
import moment from "moment";

function Sidebar({selectedRow,show,handleClose,total,games,gamesError}) {
  let randomGame = 1 + Math.floor(Math.random() * 25);
  if(gamesError){
    return <Offcanvas placement="end" show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton style={{backgroundColor:'rgb(241,245,249)'}}>
      <Offcanvas.Title >{selectedRow?.full_name}</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
      <p>Error in showing the games data </p>
    </Offcanvas.Body>
    </Offcanvas>
  }
  return (
    <Offcanvas placement="end" show={show} onHide={handleClose}>
    <Offcanvas.Header closeButton style={{backgroundColor:'rgb(241,245,249)'}}>
      <Offcanvas.Title >{selectedRow?.full_name}</Offcanvas.Title>
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
            <p>{moment.utc(games?.[randomGame]?.date).format("MM/DD/YY")}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Home Team</p>
            <p>{games?.[randomGame]?.home_team.full_name}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Home Team Score</p>
            <p>{games?.[randomGame]?.home_team_score}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Visitor Team</p>
            <p>{games?.[randomGame]?.visitor_team.full_name}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Visitor Team Score</p>
            <p>{games?.[randomGame]?.visitor_team_score}</p>
          </div>
        </div>
      </div>
    </Offcanvas.Body>
  </Offcanvas>
  )
}

export default Sidebar