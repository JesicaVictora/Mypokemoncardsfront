import {
    Switch,
    Route
} from "react-router-dom";

import {HomePage} from "../../pages/HomePage/HomePage";
import {Card} from "../../pages/Card/Card";
import {Sets} from "../../pages/Sets/Sets";
import {ContactPage} from "../../pages/ContactPage/ContactPage"
export function Routes() {


    return (
        <Switch>
             <Route path="/contact">
                <ContactPage/>
            </Route>

            <Route path="/card/:setId">
                <Card/>
            </Route>

            <Route path="/card/:setId">
                <Card/>
            </Route>
            
            <Route path="/card">
                <Card/>
            </Route>
        
            <Route path="/sets">
                <Sets/>
            </Route>

            <Route path="/">
                <HomePage/>
            </Route>
            
          
        </Switch>
    );
}