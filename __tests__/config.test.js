const { getImageConfig, getScreenshotConfig, createToken } = require('../src/config');

describe('config', () => {
  it('getImageConfig', () => {
    const config = {
      imageConfig: {
        threshold: 0.5,
        bar: 'should be ignored',
      },
      foo: 'should be ignored',
    };

    expect(getImageConfig(config)).toEqual({
      createDiffImage: true,
      resizeDevicePixelRatio: true,
      threshold: 0.5,
      thresholdType: 'percent',
    });
  });

  it('getScreenshotConfig', () => {
    const config = {
      screenshotConfig: {
        log: true,
        clip: {
          x: 0,
          y: 0,
          height: 100,
          width: 100,
        },
      },
    };

    expect(getScreenshotConfig(config)).toEqual({
      blackout: ['.snapshot-diff'],
      capture: 'fullPage',
      disableTimersAndAnimations: true,
      padding: null,
      scale: false,
      timeout: 30000,
      ...config.screenshotConfig,
    });
  });

  it('createToken', () => {
    expect(createToken()).toEqual(expect.stringMatching(/[A-Za-z0-9]{128}/));
  });
});
