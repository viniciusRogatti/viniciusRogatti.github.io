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
    y: [0, -25, 0],
    transition: {
      repeat: Infinity,
      duration: 3,
      delay: 1,
      ease: "easeIn"
    }

  }
}

export { menuVariants, navLinkVariants, moveVariants  }
