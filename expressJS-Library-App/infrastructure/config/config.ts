require("dotenv").config();

type configType = {
  dbPool: dbType,
  util: utilType,
  swagger: any
}

type dbType = {
  host: string,
  user: string,
  password: string,
  database: string,
  connectionLimit: number,
  waitForConnections: boolean,
  maxIdle: number,
  idleTimeout: number
  queueLimit: number,
  enableKeepAlive: boolean,
  keepAliveInitialDelay: number
}

type utilType = {
  base: string,
  port: string,
}

const configuration: configType = {
  dbPool: {
    host: process.env.DB_HOST || "",
    user: process.env.DB_USERNAME || "",
    password: process.env.DB_PASSWORD || "",
    database: (process.env.TEST === "no" ? process.env.DB_NAME : process.env.DB_TEST_NAME) || "",
    connectionLimit: 10,
    waitForConnections: true,
    maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
    idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0
  },
  util: {
     base: process.env.URL_ENDPOINT || "",
     port: process.env.PORT || "3000"
  },
  swagger: {
    definition: {
      openapi: "3.1.0",
      info: {
        title: "Library App Express API with Swagger",
        version: "0.1.0",
        description:
          "This is a simple Library App",
        license: {
          name: "MIT",
          url: "https://spdx.org/licenses/MIT.html",
        },
        contact: {
          name: "Alfaelias W.S.",
          url: "https://alfaeliasws.netlify.app",
          email: "alfaeliaswaristino@gmail.com",
        },
      },
      servers: [
        {
          url: "http://localhost:8111",
        },
      ],
    },
    apis: ["./infrastructure/routes/*.ts"],
  }
}


export default configuration