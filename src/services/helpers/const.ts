const menuVariants = {
  hidden: {
      scale: 0
  },
  visible: {
      scale: 50,
      transition: {
          type: "tween",
          duration: 0.5,
      }
  }
}

const navLinkVariants = {
  hidden: {
      display: "none",
      opacity: 0
  },
  visible: {
      opacity: 1,
      y: -30,
      transition: {
          delay: 0.7
      }
  }
}

const moveVariants = {
  animation: {
    y: [0, -15],
    transition: {
      yoyo: Infinity,
      duration: 2,
      delay: 1,
    }
  }
}

export { menuVariants, navLinkVariants, moveVariants  }
