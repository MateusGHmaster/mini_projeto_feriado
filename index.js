const express = require('express');
const cors = require('cors') ;

const app = express();
app.use(cors());

const holidays = [
    { date: "1/1/2022", name: "Confraternização mundial" },
    { date: "1/3/2022", name: "Carnaval" },
    { date: "4/17/2022", name: "Páscoa" },
    { date: "4/21/2022", name: "Tiradentes" },
    { date: "5/1/2022", name: "Dia do trabalho" },
    { date: "6/16/2022", name: "Corpus Christi" },
    { date: "9/7/2022", name: "Independência do Brasil" },
    { date: "10/12/2022", name: "Nossa Senhora Aparecida" },
    { date: "11/2/2022", name: "Finados" },
    { date: "11/15/2022", name: "Proclamação da República" },
    { date: "12/25/2022", name: "Natal" }
  ];

app.get('/holidays', (request, response) => {

    response.send(holidays);

});
  
app.get('/is-today-holiday', (request, response) => {

    const hoje = new Date();
    console.log(hoje.toLocaleDateString());
    
    const todayIs = holidays.date.toLocaleDateString();
    
    console.log('minha alguma coisa');
    if (todayIs === hoje) {
        console.log(`Sim, hoje é ${holidays.name}`);
    } else {
        console.log(`Não, hoje não é feriado...`);
    }
    
});


app.listen(5000, () => {
    console.log('Funcionou!');
});
