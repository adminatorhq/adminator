import knex, { Knex } from "knex";
import { IDBCredentials, SupportedDatabaseTypes } from "shared/types";
import { connectionManager } from "./_manager";

const SupportedDatabaseTypeToKnexClientMap: Record<
  SupportedDatabaseTypes,
  string
> = {
  mssql: "tedious",
  postgres: "pg",
  mysql: "mysql2",
  sqlite: "better-sqlite3",
};

const handleStringCredentials = (credentials: string) => {
  if (credentials.startsWith("sqlite")) {
    return knex({
      client: "better-sqlite3",
      connection: {
        filename: credentials.split(":")[1],
      },
      useNullAsDefault: true,
    });
  }

  return knex(credentials);
};

const make = (credentials: IDBCredentials | string) => {
  if (typeof credentials === "string") {
    return handleStringCredentials(credentials);
  }

  if (credentials.connectionString) {
    return handleStringCredentials(credentials.connectionString);
  }

  return knex({
    client: SupportedDatabaseTypeToKnexClientMap[credentials.databaseType],

    connection: {
      database: credentials.database,
      user: credentials.user,
      password: credentials.password,
      host: credentials.host,
      port: credentials.port,
      ssl: credentials.ssl,
    },
  });
};

const verify = async (connection: Knex) => {
  await connection.raw("SELECT 1");
};

export const getDbConnection = async (credentials: IDBCredentials | string) => {
  return await connectionManager(credentials, {
    make,
    verify,
  });
};