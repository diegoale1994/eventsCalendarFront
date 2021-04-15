import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Redirect, Route, Switch
} from 'react-router-dom';
import { startCheckingToken } from '../actions/auth';
import { LoginScreen } from '../components/auth/LoginScreen';
import { CalendarScreen } from '../components/calendar/CalendarScreen';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

    const { checking, id } = useSelector(state => state.auth)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startCheckingToken());
    }, [dispatch]);

    if (checking) {
        return <h5>ESPERE UN MOMENTO</h5>
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute exact path="/login" component={LoginScreen} isLoggedIn={!!id}></PublicRoute>
                    <PrivateRoute exact path="/" component={CalendarScreen} isLoggedIn={!!id}></PrivateRoute>
                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}
