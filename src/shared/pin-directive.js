export default {
  bind: (element, binding) => {
    console.log(binding.modifiers);
    if (binding.arg !== 'position') return;
    Object.keys(binding.modifiers).forEach((key) => {
      element.style[key] = '5px';
    });
    element.style.position = 'absolute';
  },
};
