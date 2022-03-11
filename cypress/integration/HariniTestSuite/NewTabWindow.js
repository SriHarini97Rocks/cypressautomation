
describe('NewTabWindowTestSuite',function(){

    it('NewTabWindowTestCases',function(){
        
          
cy.visit('https://www.ixigo.com/');

var adults='10+',adultsCount=0;
cy.xpath('//*[@id="content"]/div/div[1]/div[6]/div/div/div[5]/div/div[1]/input').click()
 cy.xpath('//*[@id="content"]/div/div[1]/div[6]/div/div/div[5]/div/div[2]/div[2]/div[1]/div[2]/span').each((x) =>
 {adultsCount+=1;
     let x1=x.text();
    if(x1==adults)
   { 
    cy.xpath('//*[@id="content"]/div/div[1]/div[6]/div/div/div[5]/div/div[2]/div[2]/div[1]/div[2]/span['+adultsCount+']').invoke('attr','onclick').then((x1)=>{
    
     cy.visit(x1.replace('window.open(','').replace(/['"]+/g,'').replace(',_blank)',''));

     cy.xpath('//*[@id="pizuzekqdphidqqwnbksolvvsseptmsekunu"]').click().type('ABC')
     cy.go('back')
    })
   
  }
    
 })


    })
})