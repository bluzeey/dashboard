import React, { useEffect, useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";

function Teamstable() {
  const [teams, setTeams] = useState([]);

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
    { dataField: 'id', text: 'Id' },
    { dataField: "full_name", text: "Team Name" },
    { dataField: "city", text: "City" },
    { dataField: "abbreviation", text: "Abbreviation" },
    { dataField: "conference", text: "Conference" },
    { dataField: "division", text: "Division" },
  ];
  const rowEvents = {
    onClick: (e, row, rowIndex) => {
      console.log(rowIndex, 'is selected!')
    }
  };

  if(teams){
    return (
        <BootstrapTable
          keyField="name"
          data={teams}
          columns={columns}
          pagination={paginationFactory({
            paginationSize:5,
            sizePerPageList:[6,10]
          })}
          rowEvents={rowEvents}
        />
    );
  }
}

export default Teamstable;
