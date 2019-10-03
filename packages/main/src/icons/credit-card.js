import { registerIcon } from "@ui5/webcomponents-base/dist/SVGIconRegistry.js";

const name = "sap-icon://credit-card";
const d = "M448 64q26 0 45 18.5t19 45.5v256q0 26-19 45t-45 19H64q-26 0-45-19T0 384V128q0-27 19-45.5T64 64h384zm32 64q0-14-9-23t-23-9H64q-14 0-23 9t-9 23v256q0 13 9 22.5t23 9.5h384q14 0 23-9.5t9-22.5V128zm-86 0q16 0 27 11t11 28q0 16-11 27t-27 11q-14 0-26-10-12 10-25 10-17 0-28-11t-11-27q0-17 11-28t28-11q13 0 25 10 12-10 26-10zM80 192q-7 0-11.5-5T64 176v-32q0-16 16-16h64q16 0 16 16v32q0 6-4.5 11t-11.5 5H80zm352 64q16 0 16 16v32q0 6-4.5 11t-11.5 5H80q-7 0-11.5-5T64 304v-32q0-16 16-16h352zm-192 96q16 0 16 16 0 6-4.5 11t-11.5 5H80q-7 0-11.5-5T64 368q0-16 16-16h160z";

registerIcon(name, d);