


function monthDiff(d1, d2) {
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
  }
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

describe ('HariniTestsuite',function(){

   /* it('SampleTestWrap',function(){
        cy.visit('https://www.ixigo.com/');
        cy.xpath('//*[@id="content"]/div/div[1]/div[6]/div/div/div[6]/button/div').then((x)=>{
            cy.wrap(x).click({force:true})
        })
    })
    it('NonProperDepature',function(){
      //visitng site
cy.visit('https://www.ixigo.com/')//visiting the site


//get will locate the element, click -clicking the element/DOM, clear- clear will reset the text, type- type the text given

cy.get('div.flight-home-page div.banner:nth-child(1) div.form-cntr.flight:nth-child(8) div.flight-form.max-container-width div.form-fields div.orgn.u-ib.u-v-align-bottom.u-text-left div.c-auto-cmpltr > div.c-input-cntr').then((x)=>{
    if(x.find('input.c-input.u-v-align-middle').length>0)
    {
      cy.get('div.flight-home-page div.banner:nth-child(1) div.form-cntr.flight:nth-child(8) div.flight-form.max-container-width div.form-fields div.orgn.u-ib.u-v-align-bottom.u-text-left div.c-auto-cmpltr > div.c-input-cntr > input.c-input.u-v-align-middle').clear().click().type('ABC - ABC')
    }
})


cy.get('div.flight-home-page div.banner:nth-child(1) div.form-cntr.flight:nth-child(8) div.flight-form.max-container-width div.form-fields div.dstn.u-ib.u-v-align-bottom.u-text-left div.c-auto-cmpltr div.c-input-cntr > input.c-input.u-v-align-middle').click().clear().type('DEL - New Delhi')
cy.wait(500);
cy.xpath('//*[@id="content"]/div/div[1]/div[6]/div/div/div[3]/div/div[3]/div/div[1]/div/div[1]/div').click()


cy.get('div.flight-home-page div.banner:nth-child(1) div.form-cntr.flight:nth-child(8) div.flight-form.max-container-width div.form-fields div.search.u-ib.u-v-align-bottom button.c-btn.u-link.enabled > div.u-ripple').click({force:true})

 cy.xpath('//*[@id="content"]/div/div[1]/div[6]/div/div/div[1]/div/div[2]/div/div[1]').then((x)=>{
     if(x.find('.error-msg').length>0)
     {

         cy.xpath('//*[@id="content"]/div/div[1]/div[6]/div/div/div[1]/div/div[2]/div/div[1]/div[1]').should('have.text','Please select airport from suggestions')
     }
 })
    })


    it('EmptyDeparture',function(){

        cy.xpath('//*[@id="content"]/div/div[1]/div[6]/div/div/div[3]/div/div[1]/input').click().clear().type('DEL - New Delhi')
        cy.wait(500)
        cy.xpath('//*[@id="content"]/div/div[1]/div[6]/div/div/div[3]/div/div[3]/div/div[1]/div/div[1]/div').click()
        cy.xpath('//*[@id="content"]/div/div[1]/div[6]/div/div/div[6]/button/div').click({force:true})
        

        cy.xpath('//*[@id="content"]/div/div[1]/div[6]/div/div/div[1]/div/div[2]/div/div[1]/div[2]').should('have.attr','class')
        cy.xpath('//*[@id="content"]/div/div[1]/div[6]/div/div/div[1]/div/div[2]/div/div[1]/div[2]').should('have.class','ixi-icon-error error-icon')
    })


    it('DateChecker',function(){
        cy.xpath('//*[@id="content"]/div/div[1]/div[6]/div/div/div[4]/div/div[1]/div/input').click()
        cy.xpath('/html/body/div[2]/div[2]/div[2]/table/tbody')

        for(let a=1;a<=6;a++)
        {
            for(let b=1;b<=7;b++)
            {
                cy.xpath('/html/body/div[2]/div[2]/div[2]/table/tbody/tr['+a+']/td['+b+']/div[1]').then((x)=>{
                    console.log(x.text());
                    if(x.text()=='15')
                    {
                        cy.xpath('/html/body/div[2]/div[2]/div[2]/table/tbody/tr['+a+']/td['+b+']/div[1]').click()
                    }
                })
            }
        }
    })*/

    it('CorrectDepatureandArrival',function()
    {
        cy.visit('https://www.ixigo.com/');
        cy.xpath('//*[@id="content"]/div/div[1]/div[6]/div/div/div[1]/div/div[1]/input').click().clear().type('MAA - Chennai');

        cy.xpath('//*[@id="content"]/div/div[1]/div[6]/div/div/div[1]/div/div[3]/div/div[1]/div/div[2]').click()

        cy.xpath('//*[@id="content"]/div/div[1]/div[6]/div/div/div[3]/div/div[1]/input').click().clear().type('BOM - Mumbai')
        cy.xpath('//*[@id="content"]/div/div[1]/div[6]/div/div/div[3]/div/div[3]/div/div[1]/div/div[2]').click()
        
        cy.xpath('//*[@id="content"]/div/div[1]/div[6]/div/div/div[4]/div/div[1]/div/input').click()
        const d= new Date(2022,2,16)
        var n=monthDiff(new Date(),d);
        for(var l=0;l<n;l++)
        {cy.xpath('//html/body/div[2]/div[2]/div[2]/button').click()
         cy.wait(300)}

    let c=0;   
cy.xpath('/html/body/div[2]/div[2]/div').each((x)=>{c+=1;
let text=x.text();
if(text.includes(monthNames[d.getMonth()]))
{
   
    const a1=c;
  cy.xpath('/html/body/div[2]/div[2]/div['+a1+']/table/tbody').then((y1)=>{
let rowCount=y1.find('tr').length;
for (let a=1;a<=rowCount;a++)
{
    for(let b=1;b<=7;b++)
    {
                cy.xpath('/html/body/div[2]/div[2]/div['+a1+']/table/tbody/tr['+a+']/td['+b+']/div[1]').then((x)=>
    {
cy.xpath('/html/body/div[2]/div[2]/div['+a1+']/table/tbody/tr['+a+']/td['+b+']').invoke('attr','class').then((y)=>{



if(x.text()==d.getDate() && y.toString()!='rd-day-body rd-day-prev-month' && !y.toString().includes('rd-day-body rd-day-next-month rd-day-concealed'))

{ cy.xpath('/html/body/div[2]/div[2]/div['+a1+']/table/tbody/tr['+a+']/td['+b+']/div[1]').click()

}
})
       
   

})

 
}


}
     })
  

}
})
//passenger select
let adults=2,children=2,infants=2,adultsCount=0,childrenCount=0,infantsCount=0;
cy.xpath('//*[@id="content"]/div/div[1]/div[6]/div/div/div[5]/div/div[1]/input').click()
 cy.xpath('//*[@id="content"]/div/div[1]/div[6]/div/div/div[5]/div/div[2]/div[2]/div[1]/div[2]/span').each((x) =>
 {adultsCount+=1;
     let x1=x.text();
    if(parseInt(x1)==adults)
   { 
       cy.xpath('//*[@id="content"]/div/div[1]/div[6]/div/div/div[5]/div/div[2]/div[2]/div[1]/div[2]/span['+adultsCount+']').click()
    return false;}
     // cy.xpath('//*[@id="content"]/div/div[1]/div[6]/div/div/div[5]/div/div[2]/div[2]/div[1]/div[2]/span ['+x1+ ')
 })

 cy.xpath('//*[@id="content"]/div/div[1]/div[6]/div/div/div[5]/div/div[2]/div[2]/div[2]/div[2]/span').each((x) =>
 {
     childrenCount+=1
     let x1=x.text();
     if(parseInt(x1)==children)
     {
         cy.xpath('//*[@id="content"]/div/div[1]/div[6]/div/div/div[5]/div/div[2]/div[2]/div[2]/div[2]/span['+childrenCount+']').click()
         return false;
     }


 })

 cy.xpath('//*[@id="content"]/div/div[1]/div[6]/div/div/div[5]/div/div[2]/div[2]/div[3]/div[2]/span').each((x) =>
 {
     infantsCount+=1
     let x1=x.text();
     if(parseInt(x1)==infants)
     {
         cy.xpath('//*[@id="content"]/div/div[1]/div[6]/div/div/div[5]/div/div[2]/div[2]/div[3]/div[2]/span['+infantsCount+']').click()
         return false;
     }
})



//choose travel class and search flights
let travelclass='Business';let a=0;
cy.xpath('//*[@id="content"]/div/div[1]/div[6]/div/div/div[5]/div/div[2]/div[4]/span/div').each((x) =>
{a+=1;
  if(x.text()==travelclass)
  {
    cy.xpath('//*[@id="content"]/div/div[1]/div[6]/div/div/div[5]/div/div[2]/div[4]/span/div['+a+']').click()
    return false;
  }
})



let stops='Non stop'; let oneplusstopscount=0;let a9=0,a8=0;let nonstopcount=0;let flights=[];
////*[@id="content"]/div/div[4]/div[1]/div[2]/div[10]/div/div[1]/div[1]/div[2]/div/div
cy.xpath('//*[@id="content"]/div/div[1]/div[6]/div/div/div[6]/button/div').click({force:true})
cy.wait(25000)
cy.xpath('//*[@id="content"]/div/div[2]/div/div[1]/div[1]/div/div[2]/div[1]/span/div[1]/span[1]/span').click()
cy.wait(5000)


cy.xpath('//*[@id="content"]/div/div[4]/div[1]/div[2]/div').each((x)=>{
    cy.wrap(x).invoke('attr','class').then((y)=>{
        if(y.toString()=='c-flight-listing-row-v2'){nonstopcount+=1;}
    })
}).then(()=>{
    expect(nonstopcount).to.equal(6)
})






})



//end
   
})