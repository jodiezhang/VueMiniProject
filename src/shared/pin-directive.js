export default {
  bind: (element, binding) => {
    console.log(binding.modifiers);

    Object.keys(binding.value).forEach((position) => {
      element.style[position] = binding.value[position];
    });
    element.style.position = 'absolute';
  },
};
