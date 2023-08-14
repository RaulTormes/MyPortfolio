import "styled-components";
import { theme } from "~/styles/DefaultTheme";

// and extend them!
declare module "styled-components" {
  type ThemeType = typeof theme;

  export interface DefaultTheme extends ThemeType {}
}
