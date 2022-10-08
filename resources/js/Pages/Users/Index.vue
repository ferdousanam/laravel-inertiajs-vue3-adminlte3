<template>
    <Head title="User List" />

    <section class="content mt-3">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">User List</h3>
                            <div class="card-tools">
                                <div class="input-group input-group-sm" style="width: 150px;">
                                    <input type="text" name="table_search" class="form-control float-right"
                                           placeholder="Search">
                                    <div class="input-group-append">
                                        <button type="submit" class="btn btn-default">
                                            <i class="fas fa-search"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card-body table-responsive p-0" style="height: 100%;">
                            <table class="table table-head-fixed text-nowrap">
                                <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Status</th>
                                    <th class="text-center">Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="user in users" :key="user.id">
                                    <td>{{ user.id }}</td>
                                    <td>{{ user.name }}</td>
                                    <td>{{ user.email }}</td>
                                    <td><span class="tag tag-success">Approved</span></td>
                                    <td class="text-center">
                                        <ActionList>
                                            <a class="dropdown-item" href="#">Show</a>
                                            <a class="dropdown-item" href="#">Edit</a>
                                            <div class="dropdown-divider"></div>
                                            <a class="dropdown-item" href="#">Delete</a>
                                        </ActionList>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { Head } from "@inertiajs/inertia-vue3";
import Layout from "@/Shared/Layout";
import throttle from "lodash/throttle";
import pickBy from "lodash/pickBy";
import mapValues from "lodash/mapValues";
import ActionList from "@/components/Buttons/ActionList";

export default {
    components: {
        ActionList,
        Head
    },
    layout: Layout,
    props: {
        filters: Object,
        users: Array
    },
    data() {
        return {
            form: {
                search: this.filters.search,
                role: this.filters.role,
                trashed: this.filters.trashed
            }
        };
    },
    watch: {
        form: {
            deep: true,
            handler: throttle(function() {
                this.$inertia.get("/users", pickBy(this.form), { preserveState: true });
            }, 150)
        }
    },
    methods: {
        reset() {
            this.form = mapValues(this.form, () => null);
        }
    }
};
</script>
