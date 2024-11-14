const app = require('./config/server');
const routes = require('./app/routes/routes');

routes.carrinho(app);
routes.home(app);
routes.dashboard(app);
routes.login(app);
routes.register(app);

