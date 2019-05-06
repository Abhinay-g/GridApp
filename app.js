const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const request = require('request');
const app = express();
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  cors({
    origin: 'http://localhost:4200'
  })
);
data = JSON.parse(fs.readFileSync('data.json', { encoding: 'utf-8' }));
app.get('/getUserData', (req, res) => {
  //   const pageNo = parseInt(req.query.noi);
  //   console.log([req.query.noi, req.query.pageNo]);
  //   console.log([pageNo, typeof pageNo]);
  request.get(
    'https://jsonplaceholder.typicode.com/users',
    (error, response, body) => {
      // console.log(body);
      res.send(body);
    }
  );

  //   res.json({ data: data['data'][pageNo] });
});
app.listen(3000);
//
// b = {
//   data: [
//     {
//       id: 1,
//       name: 'Leanne Graham',
//       username: 'Bret',
//       email: 'Sincere@april.biz',
//       address: 'Mumbai',
//       phone: '1-770-736-8031 x56442',
//       website: 'hildegard.org',
//       company: 'Majesco'
//     },
//     {
//       id: 2,
//       name: 'Ervin Howell',
//       username: 'Antonette',
//       email: 'Shanna@melissa.tv',
//       address: 'Pune',
//       phone: '010-692-6593 x09125',
//       website: 'anastasia.net',
//       company: 'Mastek'
//     },
//     {
//       id: 3,
//       name: 'Clementine Bauch',
//       username: 'Samantha',
//       email: 'Nathan@yesenia.net',
//       address: 'Bangalore',
//       phone: '1-463-123-4447',
//       website: 'ramiro.info',
//       company: 'Infosys'
//     },
//     {
//       id: 4,
//       name: 'Patricia Lebsack',
//       username: 'Karianne',
//       email: 'Julianne.OConner@kory.org',
//       address: 'CA',
//       phone: '493-170-9623 x156',
//       website: 'kale.biz',
//       company: 'Microsoft'
//     },
//     {
//       id: 5,
//       name: 'Chelsey Dietrich',
//       username: 'Kamren',
//       email: 'Lucio_Hettinger@annie.ca',
//       address: 'IL',
//       phone: '(254)954-1289',
//       website: 'demarco.info',
//       company: 'Apple'
//     },
//     {
//       id: 6,
//       name: 'Mrs. Dennis Schulist',
//       username: 'Leopoldo_Corkery',
//       email: 'Karley_Dach@jasper.info',
//       address: 'Maxico',
//       phone: '1-477-935-8478 x6430',
//       website: 'ola.org',
//       company: 'Google'
//     },
//     {
//       id: 7,
//       name: 'Kurtis Weissnat',
//       username: 'Elwyn.Skiles',
//       email: 'Telly.Hoeger@billy.biz',
//       address: 'Delhi',
//       phone: '210.067.6132',
//       website: 'elvis.io',
//       company: 'TCS'
//     },
//     {
//       id: 8,
//       name: 'Nicholas Runolfsdottir V',
//       username: 'Maxime_Nienow',
//       email: 'Sherwood@rosamond.me',
//       address: 'Delhi',
//       phone: '586.493.6943 x140',
//       website: 'jacynthe.com',
//       company: 'cognizant'
//     }
//   ]
// };
// const a = JSON.stringify(b);

// fs.writeFileSync('data.json', a);
