    
// -- Example Usage: 
// -- cypress/tsconfig.json
// {
//   "compilerOptions": {
//      "types": ["cypress", "cypress-plugin-visual-tests"]
//    }
// }

declare namespace Cypress {

  type ScreenshotDefaultsOptions = {
    blackout: any[];
    capture: string;
    clip: {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    padding: any;
    disableTimersAndAnimations: boolean;
    log: boolean;
    scale: boolean;
    timeout: number;
  }
  interface Chainable<Subject = any> {
    toMatchSnapshot(options?: Partial<{
      ignoreExtralFields: boolean,
      ignoreExtraArrayItems: boolean,
      normalizeJson: boolean,
      replace: any,
      name: string
    }>): Chainable<null>;

    toMatchImageSnapshot(options?: Partial<{
      imageConfig: Partial<{
        createDiffImage: boolean,
        threshold: number,
        thresholdType: "percent" | "pixels",
        resizeDevicePixelRatio: boolean
      }>,
      screenshotConfig: Partial<ScreenshotDefaultsOptions>,
      name: string,
      separator: string
    }>): Chainable<null>;
  }
}
