import familiarJson from "../mocks/familiar.JSON" with { type: "json" }

const familiar = JSON.parse(localStorage.getItem("familiar")) || [];

const allFamiliars = [...familiarJson, ...familiar,];
const user = JSON.parse(localStorage.getItem("login_success"));

export function familiares() {
  const familiares = allFamiliars.filter((familiar) => {
    return familiar.cedula_Emple === user.cedula_Emple;
  });
  return familiares;
}