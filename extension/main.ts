import SettingsBox from "./Modules/UI Components/SettingsBox/SettingsBox";

const main = (): void => {
  if (document.URL.includes("/manager/")) return;

  const settingBox = new SettingsBox();
  settingBox.loadSettings();
};

main();
