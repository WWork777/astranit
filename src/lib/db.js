import mysql from 'mysql2/promise'

const pool = mysql.createPool({
	host: '111.111.111.111',
	user: 'admin',
	password: 'admin',
	database: 'astranit',
	port: '3306',
})

export default pool

// import mysql from 'mysql2/promise'

// const pool = mysql.createPool({
// 	host: process.env.DB_HOST,
// 	user: process.env.DB_USER,
// 	password: process.env.DB_PASSWORD,
// 	database: process.env.DB_NAME,
// 	port: process.env.DB_PORT || 3306,

// 	// Опциональные настройки пула соединений
// 	waitForConnections: true,
// 	connectionLimit: process.env.DB_POOL_LIMIT || 10,
// 	queueLimit: process.env.DB_QUEUE_LIMIT || 0,

// 	// Настройки SSL (если требуется)
// 	ssl: process.env.DB_SSL === 'true' ? {
// 		rejectUnauthorized: false
// 	} : undefined
// })

// export default pool
