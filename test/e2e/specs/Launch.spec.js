import utils from '../utils';

import { name } from '../../../config';

describe('Launch', function () {
  beforeEach(utils.beforeEach);
  afterEach(utils.afterEach);

  it('shows the proper application title', function () {
    return this.app.client.getTitle()
      .then(title => {
        expect(title).to.equal('electron-vue-reminders-app');
      });
  });

  it('shows an initial window', function () {
    return this.app.client.getWindowCount().then(function (count) {
      assert.equal(count, 1);
    });
  });
});
