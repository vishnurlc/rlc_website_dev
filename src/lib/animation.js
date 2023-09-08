export const parentVariant = {
  hidden: {},
  visible: {
    transition: {
      delay: 0.7,
      duration: 0.2,
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
};

export const itemVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};
