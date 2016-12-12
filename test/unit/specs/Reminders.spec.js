import Vue from 'vue';
import Reminders from 'src/components/Home/RemindersList';

function getRenderedText(Component, propsData) {
  const Ctor = Vue.extend(Component);
  const vm = new Ctor({ propsData }).$mount();
  return vm.$el.textContent;
}

describe('Reminders', () => {
  it('renders correctly with different props', () => {
    expect(getRenderedText(Reminders, {
      reminders: [{ title: 'Do Something' }],
    })).to.contain('Do Something');
  });

  it('renders correctly with different props', () => {
    expect(getRenderedText(Reminders, {
      reminders: [{ title: 'Do Something' }, { title: 'Hello' }],
    })).to.contain('Hello');
  });
});
