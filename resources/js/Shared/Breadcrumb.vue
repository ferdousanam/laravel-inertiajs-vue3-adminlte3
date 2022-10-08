<template>
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0">{{ activeTitle }}</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li v-if="backTitle" class="breadcrumb-item"><Link :href="backLink">{{ backTitle }}</Link></li>
                        <li class="breadcrumb-item active">{{ activeTitle }}</li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {Link} from '@inertiajs/inertia-vue3'

export default {
    components: {
        Link,
    },
    props: {
        activeTitle: String,
        backTitle: String,
        backLink: String,
    }
}
</script>
