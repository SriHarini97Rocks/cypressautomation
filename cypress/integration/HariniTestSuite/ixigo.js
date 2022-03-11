////*[@id="content"]/div/div[1]/div[6]/div/div/div[4]/div/div[1]/div/input

function getWeeksStartAndEndInMonth(month, year){
  let weeks = [];
    const d=new Date(year,month,1);
  
  let firstDay=d.getDay();
  let lastDate = new Date(year, month + 1, 0);
  let total=lastDate.getDate();
  
  let a=1,b=0;
  while(a<=total )
  {
  
  if(a==1)
  {b=a+(6-firstDay);}
     weeks.push({start:a, end: b});
  
  a=b+1;
  
  b+=7;
  if(b>total){b-=7;
  b+=(total-b);
  }
  }
  let final=[];let builder="";
  weeks.forEach(function(element,index) {builder="";
    if(element.end-element.start!=6)
    {
      var ji=new Date(year,month,element.start).getDay();
      if(ji!=0){
for(var n=0;n<firstDay;n++)
builder+='0-';
for(var n=element.start;n<=element.end;n++)
builder+=n+'-';

      final.push(builder.substring(0, builder.length - 1));
    }
  else{
   
    for(var n=element.start;n<=element.end;n++)
builder+=n+'-';
const d3=new Date(year,month,element.end);
for(var n=d3.getDay();n<6;n++)
builder+='0-';
final.push(builder.substring(0, builder.length - 1));
  }
  }
    else
    {
      for( var n=element.start;n<=element.end;n++)
builder+=n+'-';
final.push(builder.substring(0, builder.length - 1));
    }
  });
  return final;
  }

const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

function monthDiff(d1, d2) {
  var months;
  months = (d2.getFullYear() - d1.getFullYear()) * 12;
  months -= d1.getMonth();
  months += d2.getMonth();
  return months <= 0 ? 0 : months;
}
  describe ('SecondTestSuite',function(){

    it('NonProperDeparture',function(){
      cy.visit('https://www.ixigo.com/')
  
     
      cy.xpath('//*[@id="content"]/div/div[1]/div[6]/div/div/div[1]/div/div[1]/input').clear().click()
      cy.xpath('//*[@id="content"]/div/div[1]/div[6]/div/div/div[1]/div/div[2]').should('be.visible')
      cy.xpath('//*[@id="content"]/div/div[1]/div[6]/div/div/div[1]/div/div[1]/input').type('ABC - ABC')
      cy.xpath('//*[@id="content"]/div/div[1]/div[6]/div/div/div[3]/div/div[1]/input').clear().click()
  cy.xpath('//*[@id="content"]/div/div[1]/div[6]/div/div/div[3]/div/div[2]').should('be.visible')
  
  cy.xpath('//*[@id="content"]/div/div[1]/div[6]/div/div/div[3]/div/div[1]/input').type('WGC - Warangal')
  cy.wait(500)
           
  cy.xpath('//*[@id="content"]/div/div[1]/div[6]/div/div/div[3]/div/div[3]/div/div[1]/div/div[1]/div').click()
  
  cy.xpath('//*[@id="content"]/div/div[1]/div[6]/div/div/div[6]/button').click({force: true})

  cy.xpath('//*[@id="content"]/div/div[1]/div[6]/div/div/div[1]/div/div[2]/div/div[1]').should('be.visible')
    })

    it('NonProperArrival',function(){
      cy.visit('https://www.ixigo.com/')
  
      
      cy.xpath('//*[@id="content"]/div/div[1]/div[6]/div/div/div[1]/div/div[1]/input').clear().click()
      cy.xpath('//*[@id="content"]/div/div[1]/div[6]/div/div/div[1]/div/div[2]').should('be.visible')
      cy.xpath('//*[@id="content"]/div/div[1]/div[6]/div/div/div[1]/div/div[1]/input').type('WGC - Warangal')
      cy.wait(500)
               
      cy.xpath('//*[@id="content"]/div/div[1]/div[6]/div/div/div[1]/div/div[3]/div/div[1]/div/div[1]/div').click()
      cy.xpath('//*[@id="content"]/div/div[1]/div[6]/div/div/div[3]/div/div[1]/input').clear().click()
  cy.xpath('//*[@id="content"]/div/div[1]/div[6]/div/div/div[3]/div/div[2]').should('be.visible')
  
  cy.xpath('//*[@id="content"]/div/div[1]/div[6]/div/div/div[3]/div/div[1]/input').type('ABC - ABC')
  
  cy.xpath('//*[@id="content"]/div/div[1]/div[6]/div/div/div[6]/button').click({force: true})

 cy.xpath('//*[@id="content"]/div/div[1]/div[6]/div/div/div[3]/div/div[2]/div/div[1]').should('be.visible')
    })

      it('FlightSearch',function(){
        //visitng site
  cy.visit('https://www.ixigo.com/')
  
  //departure
  cy.xpath('//*[@id="content"]/div/div[1]/div[6]/div/div/div[1]/div/div[1]/input').clear().click()
  
  
  cy.xpath('//*[@id="content"]/div/div[1]/div[6]/div/div/div[1]/div/div[2]').should('be.visible')
  
  cy.xpath('//*[@id="content"]/div/div[1]/div[6]/div/div/div[1]/div/div[1]/input').type('WGC - Warangal')
  cy.wait(500)
           
  cy.xpath('//*[@id="content"]/div/div[1]/div[6]/div/div/div[1]/div/div[3]/div/div[1]/div/div[1]/div').click()
  //destination
  cy.xpath('//*[@id="content"]/div/div[1]/div[6]/div/div/div[3]/div/div[1]/input').clear().click()
  cy.xpath('//*[@id="content"]/div/div[1]/div[6]/div/div/div[3]/div/div[2]').should('be.visible')
  
  cy.xpath('//*[@id="content"]/div/div[1]/div[6]/div/div/div[3]/div/div[1]/input').type('KJB - Kurnool')
  cy.wait(500)
           
  cy.xpath('//*[@id="content"]/div/div[1]/div[6]/div/div/div[3]/div/div[3]/div/div[1]/div/div[1]/div').click()
  
  cy.xpath('//*[@id="content"]/div/div[1]/div[6]/div/div/div[4]/div/div[1]/div/input').click()
  const d = new Date(2022,5,18);
  const now=new Date();
  
  var n=monthDiff(now,d);
  for(var i=1;i<n;i++)
  {
    cy.xpath('/html/body/div[2]/div[2]/div[2]/button').click()
    cy.wait(500)
  }
 
var a=0,b=0,c=0;

///html/body/div[5]/div[2]
cy.xpath('/html/body/div[2]/div[2]/div').each((x)=>{a+=1;
  var name=x.text(); let row=0,column=0;
  var monthName=monthNames[d.getMonth()];
  if(name.includes(monthName))
  {
    const a1=a;
    var val=getWeeksStartAndEndInMonth(d.getMonth(),d.getFullYear());
    console.log(val);
val.forEach(function(item,index){
  var ele=item.split('-');console.log(ele);
if(ele.includes(d.getDate().toString()))
{
   row=index+1;
 
  for(var h=0;h<=d.getDay();h++){if(ele[h]==d.getDate().toString())
  { column=h+1;break;}
  }
}
});
    cy.xpath('/html/body/div[2]/div[2]/div['+a1+']/table/tbody/tr['+row+']/td['+column+']/div[1]').click()
  }
})



  

  })
  
  })