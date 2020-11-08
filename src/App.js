import React from 'react';
import { useState } from 'react';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
import Signup from './comps/Signup';
import { Container } from 'react-bootstrap';
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './comps/Dashboard';
import Login from './comps/Login';
import PrivateRoute from './comps/PrivateRoute';
import ForgotPassword from './comps/ForgotPassword';
import UpdateProfile from './comps/UpdateProfile';

function App() {
    const [selectedImg, setSelectedImg] = useState(null);
    return (
        <>
            <Container
                className="d-flex align-items-center justify-content-center"
                style={{ minHeight: '100vh' }}
            >
                <div className="w-100" style={{ maxWidth: '400px' }}>
                    <Router>
                        <AuthProvider>
                            <Switch>
                                <PrivateRoute
                                    exact
                                    path="/"
                                    component={Dashboard}
                                />
                                <PrivateRoute
                                    path="/update-profile"
                                    component={UpdateProfile}
                                />
                                <Route path="/signup" component={Signup} />
                                <Route path="/login" component={Login} />
                                <Route
                                    path="/forgot-password"
                                    component={ForgotPassword}
                                />
                            </Switch>
                        </AuthProvider>
                    </Router>
                </div>
            </Container>
            <div className="App">
                <Title />
                <UploadForm />
                <ImageGrid setSelectedImg={setSelectedImg} />
                {selectedImg && (
                    <Modal
                        selectedImg={selectedImg}
                        setSelectedImg={setSelectedImg}
                    />
                )}
            </div>
        </>
    );
}

export default App;
