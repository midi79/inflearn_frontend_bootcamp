export const checkValidationFile = (file?: File): boolean => {
  if (typeof file === "undefined") {
    alert("No file!");
    return false;
  }

  if (file.size > 5 * 1024 * 1024) {
    alert("Too large file!");
    return false;
  }

  if (!file.type.includes("jpeg") && !file.type.includes("png")) {
    alert("Only jpeg or png file can be accepted!");
    return false;
  }

  return true;
};
