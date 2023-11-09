const colors = {
     primary: '#5849ff',
     secondary: '#1E1E1E',
     light: '#F1F1F1',
     dark: '#181818',
     darker: '#050505',
     dark1: '#2F2F2F',
     dark2: '#232323',
     disabled: '#050505',
     danger: '#FF3939',
};

const hoverColors = {
     primary: '#7063ff',
     secondary: '#303030',
     light: '#F9F9F9',
     dark: '#242424',
};

const textColors = {
     default: '#FFFFFF',
     disabled: '#606060',
};

export const components = {
     background: {
          ...colors,
     },
     hover: {
          ...hoverColors,
     },
     color: {
          ...textColors,
     },
};
