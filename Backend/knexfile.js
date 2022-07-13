const base = {
  client:'sqlite3',
  useNullAsDefault:true,

}

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './api/data/dev.sqlite3'
    },
    migrations:{
      directory: './api/data/migrations'
    },
    seeds:{
      directory: './api/data/seeds'
    },
    useNullAsDefault:true,
    pool : {
      afterCreate: (conn, done)=>{
        conn.run('PRAGMA foreign_keys = ON', done)
      }
    }
  },

  staging: {
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
