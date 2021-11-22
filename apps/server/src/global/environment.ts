interface IEnvironment {
  Database: {
    Host: string;
    User: string;
    Password: string;
    Name: string;
    Port: number;
  };
}

const Environment: IEnvironment = {
  Database: {
    Host: process.env.DB_HOST!,
    User: process.env.DB_USER!,
    Password: process.env.DB_PASSWORD!,
    Name: process.env.DB_NAME!,
    Port: parseInt(process.env.DB_PORT!, 10)
  }
};

export { Environment };
