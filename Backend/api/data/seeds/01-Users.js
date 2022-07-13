exports.seed = async function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(()=>{
      return knex('users').insert([
        {
          username: 'Eric',
          password: '$2a$12$ZcHVOR8gK52KM8ix08a5TO3WSP8XI8q8eW9jXg0tGuol5CmNepOV.'
        },
        {
          username: 'Peng',
          password: '$2a$12$tbMSo3U5ZGnaJ8XQwjw.IeQtPwOrMplMUPiBks2aXGlF/tvaIEJyy'
        }
      ])
    })
};
