import React from 'react'
import Sidebar from './Sidebar'

describe('<Sidebar />', () => {
  it('renders', () => {
    cy.mount(<Sidebar />)
  })
  it('fetches the games data',()=>{
    cy.request('https://www.balldontlie.io/api/v1/games?seasons[]=2021', function(err, res, body) {
        expect(res.statusCode).to.equal(200);
        done();
        });
  })
})