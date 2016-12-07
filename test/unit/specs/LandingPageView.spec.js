import Vue from 'vue';
import Home from 'src/components/Home';

describe('Home.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: h => h(Home),
    }).$mount();

    expect(vm.$el.querySelector('h1').textContent).to.contain('Welcome.');
  });
});
