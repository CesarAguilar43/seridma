import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from '../containers/about/About';
import Home from '../containers/home/Home';
import Benefits from '../containers/benefits/Benefits';
import Contact from '../containers/contact/Contact';
import Services from '../containers/services/Services';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/benefits" component={Benefits} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/services" component={Services} />
            </Switch>
        </BrowserRouter>
    );
}

