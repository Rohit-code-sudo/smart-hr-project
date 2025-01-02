import Keycloak from "keycloak-js";

// Initialize Keycloak instance with configuration
const keycloak = Keycloak({
  url: "https://keycloak.billmex.com/",
  realm: "smarthr",
  clientId: "smarthr",
});

export default keycloak;
