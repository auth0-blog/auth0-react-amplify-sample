import configJson from "./auth_config.json";

export const getConfig = () => (
  {
    domain: configJson.domain,
    clientId: configJson.clientId,
  }
)