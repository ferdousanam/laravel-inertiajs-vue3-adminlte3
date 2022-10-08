<template>
    <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            <li class="nav-item">
                <Link :href="$route('dashboard.index')" class="nav-link" :class="{ 'active': $page.component === 'Dashboard/Index' }">
                    <i class="nav-icon fas fa-tachometer-alt"></i>
                    <p>Dashboard</p>
                </Link>
                <Link :href="$route('users.index')" class="nav-link" :class="{ 'active': $page.component === 'Users/Index' }">
                    <i class="nav-icon fas fa-users"></i>
                    <p>Users</p>
                </Link>
            </li>
        </ul>
    </nav>
</template>

<script>
import {Link} from "@inertiajs/inertia-vue3";

export default {
    components: {
        Link,
    },
}
</script>
