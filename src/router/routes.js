const PageMain = () => import(/* webpackChunkName: 'PageMain' */ 'Pages/PageMain');
const PageProduct = () => import(/* webpackChunkName: 'PageProduct' */ 'Pages/PageProduct');
const PageBrand = () => import(/* webpackChunkName: 'PageBrand' */ 'Pages/PageBrand');
const PageUiKit = () => import(/* webpackChunkName: 'PageUiKit' */ 'Pages/PageUiKit');
const PageTeam = () => import(/* webpackChunkName: 'PageTeam' */ 'Pages/PageTeam');
const PageTerms = () => import(/* webpackChunkName: 'PageTerms' */ 'Pages/PageTerms');
const PagePrivacyPolicy = () => import(/* webpackChunkName: 'PageTerms' */ 'Pages/PagePrivacyPolicy');

export default [
  {
    path: '/',
    name: 'home',
    component: PageMain,
  },
  {
    path: '/home',
    redirect: { name: 'home' },
  },
  {
    path: '/team',
    name: 'team',
    component: PageTeam,
  },
  {
    path: '/product',
    name: 'product',
    component: PageProduct,
  },
  {
    path: '/brand',
    name: 'brand',
    component: PageBrand,
  },
  {
    path: '/terms',
    name: 'terms',
    component: PageTerms,
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: PagePrivacyPolicy,
  },
  {
    path: '/ui',
    name: 'ui',
    component: PageUiKit,
  },
  {
    path: '*',
    redirect: { name: '404' },
  },
];
