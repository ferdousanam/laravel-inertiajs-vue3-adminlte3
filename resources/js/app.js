import 'bootstrap';
import $ from 'jquery';
import 'admin-lte';
import {createApp, h} from 'vue'
import {InertiaProgress} from '@inertiajs/progress'
import {createInertiaApp} from '@inertiajs/inertia-vue3'
import ziggyRoute from "@/ziggyRoute";

window.$ = window.jQuery = $;

InertiaProgress.init();

createInertiaApp({
    resolve: name => require(`./Pages/${name}`),
    title: title => title ? `${title} - Laravel Inertiajs Vue3 Adminlte3` : 'Laravel Inertiajs Vue3 Adminlte3',
    setup({el, App, props, plugin}) {
        const app = createApp({render: () => h(App, props)}).use(plugin)
        app.config.globalProperties.$route = ziggyRoute;
        app.mount(el);
    },
});
