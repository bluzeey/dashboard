import React from 'react'
import Teamstable from './Table'

describe('<Teamstable />', () => {
  it('renders', () => {
    cy.mount(<Teamstable />)
  })
  it('fetches the data for NBA teams',()=>{
    cy.request('https://www.balldontlie.io/api/v1/teams', function(err, res, body) {
        expect(res.statusCode).to.equal(200);
        done();
        });
  })
  
})