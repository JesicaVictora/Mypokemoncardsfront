import {
    Switch,
    Route
} from "react-router-dom";

import {HomePage} from "../../pages/HomePage/HomePage";
import {Card} from "../../pages/Card/Card";
import {Serie} from "../../pages/Serie/Serie";
import {CardInfo} from "../../pages/CardInfo/CardInfo";
export function Routes() {


    return (
        <Switch>

            <Route path="/card/:cardId">
                 <CardInfo></CardInfo>
            </Route>

            <Route path="/card">
                <Card/>
            </Route>

            <Route path="/serie">
                <Serie/>
            </Route>

            <Route path="/">
                <HomePage/>
            </Route>
            
          
        </Switch>
    );
}