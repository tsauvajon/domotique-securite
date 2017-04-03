const recursivePropsTesting = (component, toTest) => {
  if (component.children) {
    component.children.forEach(child => recursivePropsTesting(child, toTest));
  }

  if (component.props) {
    Object.keys(component.props).forEach((key) => {
      if (typeof component.props[key] === 'function' && toTest.includes(key)) {
        component.props[key]();
      }
    });
  }
};

export default recursivePropsTesting;
