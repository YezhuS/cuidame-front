import Home from "./components/Home"
import Login from "./components/Login"
import Perfil from "./components/Perfil"
import SignUp from "./components/SignUp"
import TimeLine from "./components/TimeLine"
import About from "./components/About"
import Tutorial from "./components/Tutorial"
import CreateArticle from "./components/CreateArticle"
import Error404 from "./components/Error404"




export const routes = [
	{path: "/", component: Home, },
	{path: "/login", component: Login, },
	{path: "/signUp", component: SignUp, },
	{path: "/timeline", component: TimeLine, },
	{path: "/about", component: About, },
	{path: "/tutorial", component: Tutorial, },
	{path: "/perfil", component: Perfil, },
	{path: "/createarticle", component: CreateArticle, },
	{path: "*", redirect: "/", }

]






