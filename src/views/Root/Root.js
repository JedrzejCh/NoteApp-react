import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppContext from "../../context";
import './index.css';
import ArticlesView from '../ArticlesView/ArticlesView';
import NotesView from '../NotesView/NotesView';
import TwitterView from '../TwittersView/TwitterView';
import Header from '../../components/Header/Header';
import Modal from '../../components/Modal/Modal';




class Root extends Component {
    state = {
        twitter: [
            {
                image: 'https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg',
                title: 'Dan Abramov',
                description: 'Dan Abramov is a software engineer at Facebook. Together with Andrew Clark, he created Redux. He also co-authored the Create React App.',
                link: 'https://twitter.com/dan_abramov',
            },
            {
                image: 'https://pbs.twimg.com/profile_images/1257111841508974592/2_rEXazl_400x400.jpg',
                title: 'Ryan Florence',
                description: 'Making React accessible for users and developers at https://reach.tech . Online learning, workshops, OSS, and consulting.',
                link: 'https://twitter.com/ryanflorence',
            },
            {
                image: 'https://pbs.twimg.com/profile_images/1095819845382299649/zG-2_UHS_400x400.jpg',
                title: 'Michael Jackson',
                description: 'Maker. Co-author of React Router. Working on @ReactTraining. Created @unpkg. Head over heels for @cari.',
                link: 'https://twitter.com/mjackson',
            },
            {
                image: 'https://pbs.twimg.com/profile_images/759557613445001216/6M2E1l4q_400x400.jpg',
                title: 'Kent C. Dodds',
                description: 'Making software development more accessible · Husband, Father, Latter-day Saint, Teacher, OSS, GDE, @TC39 · @PayPalEng @eggheadio @FrontendMasters · #JS',
                link: 'https://twitter.com/kentcdodds',
            },
        ],
        article: [],
        note: [],
        modalOpen: false,
    };

    addItem = (e, newItem) => {
        e.preventDefault();

        this.setState(prevState => ({
            [newItem.type]: [...prevState[newItem.type], newItem]
        }))

        this.handleModalClose();
    }

    handleModalOpen = () => {
        this.setState({
            modalOpen: true,
        })
    }

    handleModalClose = () => {
        this.setState({
            modalOpen: false,
        })
    }

    render() {
        const contextItems = {
            ...this.state,
            addItem: this.addItem,
        }

        return (
            <BrowserRouter>
                <AppContext.Provider value={contextItems}>
                    <Header handleModalOpn={this.handleModalOpen} />
                    <Switch>
                        <Route exact path="/" component={TwitterView} />
                        <Route path="/articles" component={ArticlesView} />
                        <Route path="/notes" component={NotesView} />
                    </Switch>
                    {this.state.modalOpen && <Modal handleModalCls={this.handleModalClose} />}
                </AppContext.Provider>
            </BrowserRouter>
        )
    }
}


export default Root;
