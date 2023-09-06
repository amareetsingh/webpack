// import Login from '../Pages/Login';
// import Register from '../Pages/Login/Register'
// import ResetPassword from '../Pages/Login/ResetPassword';
// import Dashboard from '../Pages/Dashboard';
// import Pricing from '../Pages/Pricing';
// import NotFound from '../Pages/NotFound';
// import Templates from '../Pages/Templates';
// import TemplateView from '../Pages/Templates/TemplateView';
// import AssesmentPage from '../Pages/Assesment';
// import AnalyticsresultPage from '../Pages/Analyticsresult';
// import Showlandingpage from '../Pages/Front/Showlandingpage';
// import Setting from '../Pages/Settings/Setting';
// import Profile from '../Pages/Profile/Profile'
// import Thankyou from '../Pages/Thankyou/Thankyou';
// import AccountVerify from '../Pages/Login/AccountVerify';
// import constantcontact from '../constantcontact/constantcontact'
// import Hubspot from '../Integrations/hubspot';
// // import constantcontact from "../constantcontact/constantcontact"
// import Preregistration from '../Pages/Dashboard/Preregistration/Preregistration';
// import AnalyticsresultG from '../Pages/Dashboard/AnalyticsresultGroup'
// import AnalyticsResultEval from '../Pages/Dashboard/AnalyticsresultGroup/AnalyticsResultEval';
// import LinkedAssessments from '../Pages/Dashboard/LinkedAssessments';
// import ViewResultsPage from '../Pages/Front/ViewResultsPage'

import React, { Suspense, lazy } from 'react';
const Login = lazy(() => import('../Pages/Login'));
const Register = lazy(() => import('../Pages/Login/Register'));
const ResetPassword = lazy(() => import('../Pages/Login/ResetPassword'));
const Dashboard = lazy(() => import('../Pages/Dashboard'));
const Pricing = lazy(() => import('../Pages/Pricing'));
const NotFound = lazy(() => import('../Pages/NotFound'));
const Templates = lazy(() => import('../Pages/Templates'));
const TemplateView = lazy(() => import('../Pages/Templates/TemplateView'));
const AssesmentPage = lazy(() => import('../Pages/Assesment'));
const AnalyticsresultPage = lazy(() => import('../Pages/Analyticsresult'));
const Showlandingpage = lazy(() => import('../Pages/Front/Showlandingpage'));
const Setting = lazy(() => import('../Pages/Settings/Setting'));
const Profile = lazy(() => import('../Pages/Profile/Profile'));
const Thankyou = lazy(() => import('../Pages/Thankyou/Thankyou'));
const AccountVerify = lazy(() => import('../Pages/Login/AccountVerify'));
const constantcontact = lazy(() => import('../constantcontact/constantcontact'));
const Hubspot = lazy(() => import('../Integrations/hubspot'));
const Preregistration = lazy(() => import('../Pages/Dashboard/Preregistration/Preregistration'));
const AnalyticsresultG = lazy(() => import('../Pages/Dashboard/AnalyticsresultGroup'));
const AnalyticsResultEval = lazy(() => import('../Pages/Dashboard/AnalyticsresultGroup/AnalyticsResultEval'));
const LinkedAssessments = lazy(() => import('../Pages/Dashboard/LinkedAssessments'));
const ViewResultsPage = lazy(() => import('../Pages/Front/ViewResultsPage'));


const routes = [
	{
		path: '/login',
		component: Login,
		isPrivate: false,
	},
	{
		path: '/register',
		component: Register,
		isPrivate: false,
	},
	{
		path: '/reset-password',
		component: ResetPassword,
		isPrivate: false,
	},
	{
		path: '/confirm',
		component: AccountVerify,
		isPrivate: false,
	},
	{
		path: '/dashboard',
		component: Dashboard,
		isPrivate: true,
	},
	{
		path: '/profile',
		component: Profile,
		isPrivate: true,
	},
	{
		path: '/pricing',
		component: Pricing,
		isPrivate: false,
	},
	{
		path: '/templates',
		component: Templates,
		isPrivate: true,
	},
	{
		path: '/assesment/:id',
		component: AssesmentPage,
		isPrivate: false,
	},
	{
		path: '/:slug/assessment/:id/:stage',
		component: Showlandingpage,
		isPrivate: false,
	},
	{
		path: '/:slug/assessment/:id',
		component: Showlandingpage,
		isPrivate: false,
	},
	{
		path: '/thank-you',
		component: Thankyou,
		isPrivate: false,
	},
	{
		path: '/template-view',
		component: TemplateView,
		isPrivate: false,
	},
	{
		path: '/analyticsresult',
		component: AnalyticsresultPage,
		isPrivate: false,
	},
	{
		path: '/setting',
		component: Setting,
		isPrivate: true,
	},
	{
		path: `/constantcontact`,
		component: constantcontact,
		isPrivate: true,
	},
	{
		path: `/hubspot`,
		component: Hubspot,
		isPrivate: true,
	},
	{
		path: `/analyticsresultgroup`,
		component: AnalyticsresultG,
		isPrivate: true,
	},


	{

		path: '/preregistration',
		component: Preregistration,
		isPrivate: true,
	},
	{

		path: '/linkedassessments',
		component: LinkedAssessments,
		isPrivate: true,
	},
	{

		path: '/viewresults/:id',
		component: ViewResultsPage,
		isPrivate: true,
	},
	
	{

		path: '/analyticsresultevalgroup',
		component: AnalyticsResultEval,
		isPrivate: true,
	},

	{
		path: '/*',
		component: NotFound,
		isPrivate: true,
	},


];

export default routes;
