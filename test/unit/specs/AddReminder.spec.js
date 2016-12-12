import Vue from 'vue';
import AddReminder from 'src/components/Home/AddReminder';

function getRenderedText(Component, propsData) {
  const Ctor = Vue.extend(Component);
  const vm = new Ctor({ propsData }).$mount();
  return vm.$el.textContent;
}

describe('AddReminder', () => {
  it('should render a button', () => {
    const vm = new Vue({
      template: document.createElement('button'),
      render: h => h(AddReminder),
    }).$mount();

    expect(vm.$el.querySelector('.addButton').textContent).to.contain('Add Reminder');
  });

  it('should render an input field', () => {
    const vm = new Vue({
      template: document.createElement('input'),
      render: h => h(AddReminder),
    }).$mount();

    expect(vm.$el.querySelector('.title').textContent).to.contain('');
  });

  it('should render an input field', () => {
    const vm = new Vue({
      template: document.createElement('input'),
      render: h => h(AddReminder),
    }).$mount();

    expect(vm.$el.querySelector('.datePicker').textContent).to.contain('');
  });
});
