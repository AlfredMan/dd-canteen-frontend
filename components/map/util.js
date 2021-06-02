const IGNORE_OBJECTS = ["ground", "GROUND1", "LTop1", "Plank", "RTop1", "RTop2", "LBottom1", "RBottom1", "C3extra"];
export function getBuildingIndexName(obj) {
  // if (!obj || !obj.name || obj.name === "ground" || obj.name === "GROUND1" || obj.name === "Null") {
  if (
    !obj ||
    !obj.name ||
    IGNORE_OBJECTS.includes(obj.name) ||
    obj.name === "Null"
  ) {
    return null;
  }
  if (obj.name.startsWith("C4")) {
    return "canteen";
  }
  return obj.name.slice(0, 2);
}

export function getInteractiveBuildingIndexName(obj) {
  // if (!obj || !obj.name || obj.name === "ground" || obj.name === "GROUND1") {
  if (!obj || !obj.name || IGNORE_OBJECTS.includes(obj.name)) {
    return null;
  }
  console.log('object name:', obj.name)
  return getBuildingIndexName(obj);
}
