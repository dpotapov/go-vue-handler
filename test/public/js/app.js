const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
const FooBar = { template: '<div>foo.bar</div>' }
const routes = [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar },
    { path: '/foo.bar', component: FooBar },
]
const router = new VueRouter({
    mode: 'history',
    routes: routes
})

var app = new Vue({
    el: '#app',
    router: router,
    data: {
    message: 'Hello Vue!'
    }
})