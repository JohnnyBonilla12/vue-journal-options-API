import NoEntry from "../views/NoEntry.vue";

const daybookRouter = {
	name: 'daybook',
	component: () => import(/* webpackChunkName: "daybook" */ '@/modules/daybook/layouts/MainLayout.vue'),
	children: [
		{
			path: '',
			name: 'no-entry',
			component: NoEntry
		},
		{
			path: ':id',
			name: 'entry',
			component: () => import(/*webpackChunkName: "Entry"*/ '@/modules/daybook/views/EntryView.vue')
		}
	]
}

export default daybookRouter