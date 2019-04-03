const styles = theme => { debugger; return({
    secondaryBar: {
      zIndex: 0,
    },
    menuButton: {
      marginLeft: -theme.spacing.unit,
    },
    iconButtonAvatar: {
      padding: 4,
    },
    link: {
      textDecoration: 'none',
      color: 'rgba(255, 255, 255, 0.7)',
      '&:hover': {
        color: theme.palette.common.white,
      },
    },
    button: {
      borderColor: 'rgba(255, 255, 255, 0.7)',
    },
  })};

  export default styles