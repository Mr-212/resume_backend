// import './bootstrap';
// import { createInertiaApp } from '@inertiajs/inertia-react';
// import React from 'react';
// import { render } from 'react-dom/cjs/react-dom.development';


// const app = document.getElementById('app');

// render(
//     <InertiaApp initialPage={ JSON.parse(app.dataset.page)} 
//                 resolveComponent={name => import(`/pages/${name}`).then(module => module.default)}
//     ></InertiaApp>,
//     app
// )


import { createInertiaApp } from '@inertiajs/react'
// import { createInertiaApp } from '@inertiajs/inertia-react';

import { createRoot } from 'react-dom/client';
import React from 'react';
// import { render } from 'react-dom';
import { InertiaProgress } from '@inertiajs/progress';

InertiaProgress.init();

createInertiaApp({
  resolve: name => import(`./Pages/${name}`),
  // resolve: name => {
  //   const pages = import(`./Pages/**/*.tsx`)
  //   return pages[`./Pages/${name}.jsx`]
  // },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)
  },
})