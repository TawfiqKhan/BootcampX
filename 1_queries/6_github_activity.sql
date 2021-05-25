SELECT name, email, phone
FROM students
WHERE github IS NULL
AND end_date IS NOT NULL;

SELECT students.name AS student_name, cohorts.name AS cohort_name, 
cohorts.start_date AS cohort_start_date, students.start_date as student_start_date
FROM students LEFT JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.start_date != students.start_date
ORDER BY cohorts.start_date;