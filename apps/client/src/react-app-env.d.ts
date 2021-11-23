/// <reference types="react-scripts" />
import { ThemeUIStyleObject } from 'theme-ui';

declare module 'react' {
  interface Attributes {
    sx?: ThemeUIStyleObject;
  }
}
