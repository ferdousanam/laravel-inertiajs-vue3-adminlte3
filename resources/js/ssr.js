import {createSSRApp, h} from 'vue'
import {renderToString} from '@vue/server-renderer'
import {createInertiaApp} from '@inertiajs/inertia-vue3'
import createServer from '@inertiajs/server'
import ziggyRoute from "@/ziggyRoute";

createServer((page) => createInertiaApp({
    page,
    render: renderToString,
    resolve: name => require(`./Pages/${name}`),
    title: title => title ? `${title} - Laravel Inertiajs Vue3 Adminlte3` : 'Laravel Inertiajs Vue3 Adminlte3',
    setup({app, props, plugin}) {
        const ssrApp = createSSRApp({
            render: () => h(app, props),
        }).use(plugin)
        ssrApp.config.globalProperties.$route = ziggyRoute;
        return ssrApp;
    },
}))
