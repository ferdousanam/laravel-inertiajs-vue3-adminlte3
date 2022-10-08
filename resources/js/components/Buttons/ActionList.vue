<template>
    <div class="btn-group">
        <button type="button" class="btn btn-default btn-flat dropdown-toggle dropdown-icon" data-toggle="dropdown" aria-expanded="false">
            Action
            <span class="sr-only">Toggle Dropdown</span>
        </button>
        <div class="dropdown-menu" role="menu">
            <slot />
        </div>
    </div>
</template>

<script>
export default {

};
</script>
