import App from "../../src/App"

describe('spec.cy.js',()=>{
    it('should visit',()=>{
       cy.visit('http://localhost:3000')
    })
    it('renders', () => {
        cy.mount(<App />)
      })
})