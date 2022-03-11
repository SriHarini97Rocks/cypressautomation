Cypress.Commands.add('HariniVisit', url => {
   cy.visit(url);
});

describe('AlertTestSuite',function(){

    it('AlertTest',function(){

       cy.HariniVisit('https://only-testing-blog.blogspot.com/2014/01/textbox.html')
       const stub = cy.stub()  
       cy.on ('window:alert', stub)
       cy
       .xpath('//*[@id="post-body-4292417847084983089"]/div[1]/input').click()
       .then(() => {
         
         expect(stub.getCall(0)).to.be.calledWith('Hi.. This is alert message!')      
       })  
     


    })
})