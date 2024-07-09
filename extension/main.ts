import SettingsBox from "./Modules/UI Components/SettingsBox/SettingsBox";

const main = (): void => {
  const settingBox = new SettingsBox();
  settingBox.loadSettings();
};

main();
