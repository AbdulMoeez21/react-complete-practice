const Accdata = [
  {
    id: 1,
    question: "Why am I seeing stale props or state inside my function?",
    answer:
      "Any function inside a component, including event handlers and effects, “sees” the props and state from the render it was created in",
  },
  {
    id: 2,
    question: "How do I implement getDerivedStateFromProps?",
    answer:
      "While you probably dont need it, in rare cases that you do (such as implementing a <Transition> component), you can update the state right during rendering.",
  },
  {
    id: 3,
    question: "Is there something like forceUpdate?",
    answer:
      "Both useState and useReducer Hooks bail out of updates if the next value is the same as the previous one. Mutating state in place and calling setState will not cause a re-render.",
  },
  {
    id: 4,
    question: "Can I make a ref to a function component?",
    answer:
      "While you shouldnt need this often, you may expose some imperative methods to a parent component with the useImperativeHandle Hook.",
  },
  {
    id: 5,
    question: "How can I measure a DOM node?",
    answer:
      "One rudimentary way to measure the position or size of a DOM node is to use a callback ref. React will call that callback whenever the ref gets attached to a different node. ",
  }
];
export default Accdata;
