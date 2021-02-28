import React from "react";
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";
import Base64Diff from "./diff/Base64Diff";


export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Switch>

                <Route exact path="/">
                    <Base64Diff/>
                </Route>

            </Switch>
        </BrowserRouter>
    );
}
