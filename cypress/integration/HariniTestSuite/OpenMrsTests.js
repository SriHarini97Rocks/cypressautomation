

describe('OpenMRS',function()
{

    it('OpenMRSWebsite',function(){

      
        cy.LoginIntoOpenMrs({username : 'admin',password : 'Admin123',location : 'Pharmacy'})
        cy.title().should('eq','Home')
        cy.get('div.container-fluid:nth-child(4) div.row:nth-child(3) div.col-12.col-sm-12.col-md-12.col-lg-12.homeList a.btn.btn-default.btn-lg.button.app.big.align-self-center:nth-child(1) > i.icon-search').click()
cy.title().should('eq','OpenMRS Electronic Medical Record')
    })
})