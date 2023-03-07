/* eslint-disable no-console */

(async () => {
  const path = require("path");
  const fs = require("fs-extra");
  const { StringUtils } = require("@hadmean/protozoa");
  const { default: terminalLink } = await import("terminal-link");
  const { execa } = await import("execa");

  const { default: fetch } = await import("node-fetch");

  const replaceRandomCharaters = (envContent: string) => {
    return ["CREDENTIALS_ENCRYPTION_KEY", "AUTH_TOKEN_KEY"].reduce(
      (reducedEnvContent, currentKey) => {
        return reducedEnvContent.replace(
          `${currentKey}=RANDOM_CHARACTERS`,
          `${currentKey}=${StringUtils.generateRandomString(128)}`
        );
      },
      envContent
    );
  };

  const defaultEnv = () => {
    if (fs.existsSync(path.join(process.cwd(), "./.env.local"))) {
      return;
    }

    const envContent: string = fs.readFileSync(
      path.join(__dirname, "../.env.example"),
      "utf8"
    );

    fs.writeFileSync(
      path.join(process.cwd(), "./.env.local"),
      replaceRandomCharaters(envContent)
    );
  };

  const copyEnvHere = () => {
    const envContent: string = fs.readFileSync(
      path.join(process.cwd(), "./.env.local"),
      "utf8"
    );

    fs.writeFileSync(
      path.join(__dirname, "../.env.local"),
      `${envContent}\nCURRENT_WORKING_DIRECTORY=${process.cwd()}`
    );
  };

  const currentPkgJson = require("../../package.json");

  process.stdout.write("\n");

  console.log(`
  /88   /88                 /88
  | 88  | 88                | 88
  | 88  | 88  /888888   /8888888 /888888/8888   /888888   /888888  /8888888
  | 88888888 |____  88 /88__  88| 88_  88_  88 /88__  88 |____  88| 88__  88
  | 88__  88  /8888888| 88  | 88| 88 \\ 88 \\ 88| 88888888  /8888888| 88  \\ 88
  | 88  | 88 /88__  88| 88  | 88| 88 | 88 | 88| 88_____/ /88__  88| 88  | 88
  | 88  | 88|  8888888|  8888888| 88 | 88 | 88|  8888888|  888888$| 88  | 88
  |__/  |__/ \\_______/ \\_______/|__/ |__/ |__/ \\_______/ \\_______/|__/  |__/

  `);

  const MINIMUM_NODE_VERSION = 16;

  console.log(`🟢 You're about to run Hadmean v${currentPkgJson.version}`);

  const nodeVersion = process.versions.node;

  if (+nodeVersion.split(".")[0] < MINIMUM_NODE_VERSION) {
    console.log("");
    console.warn(
      `🟨 Your node version ${nodeVersion} is not officially supported. Kindly upgrade to version ${MINIMUM_NODE_VERSION} before reporting any issues.`
    );
  }

  defaultEnv();

  copyEnvHere();

  process.stdout.write("\n");

  const endpoint = `http://localhost:${process.env.PORT || 3000}`;

  console.log(`- ${terminalLink(
    "💗 Show us support by dropping a ✨ at github.com/hadmean/hadmean",
    "https://github.com/hadmean/hadmean"
  )}

- ${terminalLink(
    "💬 If you have questions? Join our community",
    "https://discord.gg/aV6DxwXhzN"
  )}
    `);

  const { stdout, stderr } = execa("npm", ["run", "start"], {
    cwd: path.join(__dirname, ".."),
  });

  const WAIT_FOR_NEXT_TO_START = 1000;

  console.log(
    `🚀 Application started successfully at ${terminalLink(endpoint, endpoint)}`
  );

  /*
  We want to ping the application to bootstrap itself from here
  Else it boostraps on the first request which messes a lot of things up
  We dont want the ping to crash the application if the port is not ready yet
  Hence the catch(() => {});
  */
  setTimeout(() => {
    fetch(`${endpoint}/api/healthcheck`).catch(() => {});
  }, WAIT_FOR_NEXT_TO_START);

  stdout.pipe(process.stdout);
  stderr.pipe(process.stderr);
})().catch((err) => {
  console.error(err);
  process.exit(1);
});

export {};
