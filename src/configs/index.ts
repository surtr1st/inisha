const colors = {
   primary: '#5849ff',
   secondary: '#1E1E1E',
   light: '#F1F1F1',
   dark: '#1B1B1B',
   disabled: '#050505',
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
