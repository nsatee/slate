import {} from 'styled-components';
import { ThemeType } from '.'; // Import type from above file
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType { } // extends the global DefaultTheme with our ThemeType.
}
