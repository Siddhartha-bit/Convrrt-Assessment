import CheckBox from "../components/checkbox-scratch.vue";

export default {
  title: "checkbox from scratch",
  component: CheckBox,
  argTypes: {
    selectionType: {
      control: { type: "select", options: ["checkbox", "remove"] },
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { CheckBox },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<CheckBox v-bind="args" />',
});

export const Primary = Template.bind({});
// Primary.args = {
//   isDisabled: true,
// };
