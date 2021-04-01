export function getBuildingIndexName(obj) {
  if (!obj || !obj.name || obj.name === "ground" || obj.name === "GROUND1" || obj.name === "Null") {
    return null;
  }
  if (obj.name.startsWith("C4")) {
    return "Food space";
  }
  return obj.name.slice(0, 2);
}

export function getInteractiveBuildingIndexName(obj) {
  if (!obj || !obj.name || obj.name === "ground" || obj.name === "GROUND1") {
    return null;
  }
  return getBuildingIndexName(obj);
}
