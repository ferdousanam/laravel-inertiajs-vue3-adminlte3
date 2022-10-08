<template>
    <li class="nav-item d-none d-sm-inline-block">
        <Link v-bind="$attrs" class="nav-link">
            <slot/>
        </Link>
    </li>
</template>

<script>
import {Link} from "@inertiajs/inertia-vue3";

export default {
    inheritAttrs: false,
    components: {
        Link,
    },
}
</script>
