const Index = ()=> import("../pages/index/index.vue");
const Car = ()=> import("../pages/car/car.vue");
const Category = ()=> import("../pages/category/category.vue");
const Deserve = ()=> import("../pages/deserve/deserve.vue");
const Login = ()=> import("../pages/login/login.vue");
const Personal = ()=> import("../pages/personal/personal.vue");
const Search = ()=> import("../pages/search/search.vue");


export default [
    {path:"/Index",component:Index,meta:{showFooter:true}},
    {path:"/Car",component:Car,meta:{showFooter:true}},
    {path:"/Category",component:Category,meta:{showFooter:true}},
    {path:"/Deserve",component:Deserve,meta:{showFooter:true}},
    {path:"/Login",component:Login,meta:{showFooter:false}},
    {path:"/Personal",component:Personal,meta:{showFooter:true}},
    {path:"/Search",component:Search,meta:{showFooter:false}},
    {path:"/",redirect:"/Index"}

]