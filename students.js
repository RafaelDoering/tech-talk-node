let students = [];

function create(id, name){
  const student = {
    id,
    name,
  }

  students.push(student);

  return student;
}

function findById(id){
  const student = students.find(student => student.id === id);

  return student;
}

function findAll(){
  return students;
}

function updateById(id, name){
  const student = students.find(student => student.id === id);

  student.name = name;

  return student;
}

function deleteById(id){
  students = students.filter(student => student.id !== id);

  return students;
}

module.exports = {
  create,
  findById,
  findAll,
  updateById,
  deleteById,
}