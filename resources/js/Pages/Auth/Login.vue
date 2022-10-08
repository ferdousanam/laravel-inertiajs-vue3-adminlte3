<template>
    <Head title="Login" />
    <div class="login-page">
        <div class="login-box">
            <div class="login-logo">
                <Link :href="$route('login')"><b>Admin</b>LTE</Link>
            </div>

            <div class="card">
                <div class="card-body login-card-body">
                    <!--<p class="login-box-msg">Sign in to start your session</p>-->
                    <form @submit.prevent="login">
                        <div class="input-group mb-3">
                            <input v-model="form.email" type="email" class="form-control" placeholder="Email">
                            <div class="input-group-append">
                                <div class="input-group-text">
                                    <span class="fas fa-envelope"></span>
                                </div>
                            </div>
                        </div>
                        <div class="input-group mb-3">
                            <input v-model="form.password" type="password" class="form-control" placeholder="Password">
                            <div class="input-group-append">
                                <div class="input-group-text">
                                    <span class="fas fa-lock"></span>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-8">
                                <div class="icheck-primary">
                                    <input v-model="form.remember" type="checkbox" id="remember">
                                    <label for="remember">
                                        Remember Me
                                    </label>
                                </div>
                            </div>

                            <div class="col-4">
                                <button type="submit" class="btn btn-primary btn-block">Sign In</button>
                            </div>

                        </div>
                    </form>

                    <div v-if="isSocialLoginEnabled" class="social-auth-links text-center mb-3">
                        <p>- OR -</p>
                        <a href="#" class="btn btn-block btn-primary">
                            <i class="fab fa-facebook mr-2"></i> Sign in using Facebook
                        </a>
                        <a href="#" class="btn btn-block btn-danger">
                            <i class="fab fa-google-plus mr-2"></i> Sign in using Google+
                        </a>
                    </div>

                    <p class="mb-1">
                        <a href="forgot-password.html">I forgot my password</a>
                    </p>
                    <p class="mb-0">
                        <a href="register.html" class="text-center">Register a new membership</a>
                    </p>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import 'icheck-bootstrap';
import { Head, Link } from "@inertiajs/inertia-vue3";

export default {
    components: {
        Head,
        Link,
    },
    data() {
        return {
            isSocialLoginEnabled: false,
            form: this.$inertia.form({
                email: "admin@gmail.com",
                password: "12345678",
                remember: false
            })
        };
    },
    methods: {
        login() {
            this.form.post("/login");
        }
    }
};
</script>
