const { Pool } = require('pg');

const pool = new Pool({
  user: 'labber',
  password: 'labber',
  host: 'localhost',
  database: 'bootcampx'
})

const args = process.argv.slice(2);
let input = args[0].toUpperCase()


pool.query(`
SELECT DISTINCT cohorts.name as cohort, teachers.name as teacher
FROM teachers
JOIN assistance_requests ON teacher_id = teachers.id
JOIN students ON student_id = students.id
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name = '${input}'
ORDER BY teacher;
`).then(res => {
  console.log(res.rows);
}).catch(err => console.log('Query Error: ', err))
console.log(input);