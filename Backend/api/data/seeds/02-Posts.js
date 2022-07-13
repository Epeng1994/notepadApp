exports.seed = async function(knex) {
  // Deletes ALL existing entries
  return db('tasks').truncate()
    .then(()=>{
      return db('tasks').insert([
        {
          username:'',
          task:'',
          completed:false
        },
        {
          username:'',
          task:'',
          completed:false
        }
      ])
    })
};
