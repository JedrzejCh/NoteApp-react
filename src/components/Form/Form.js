import React from 'react';
import styles from '../Form/Form.module.sass';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Title from '../Title/Title';
import AppContext from "../../context";

const types = {
  twitter: "twitter",
  article: 'article',
  note: "note",
}
const titleDescription = {
  twitter: "twitter account",
  article: "article",
  note: "note",
}

class Form extends React.Component {

  state = {
    type: types.twitter,
    title: '',
    image: '',
    link: '',
    description: '',
  }

  handleType = (type) => {
    this.setState({
      type: type,
    })
  }

  handleInputChange = (e) => {
    this.setState({
      //dynamiczny klucz do state
      [e.target.name]: e.target.value,
    })


  }

  render() {

    const { type } = this.state;

    return (
      <AppContext.Consumer>
        {(context) => (
          <div className={styles.form__wrapper} >
            <Title>Add new {titleDescription[type]}:</Title>
            <form
              autoComplete='off'
              className={styles.form__form}
              onSubmit={(e) => context.addItem(e, this.state)}>
              <div className={styles.radioWrapper}>
                <label className={styles.radioLabel} htmlFor={types.twitter}>Twitter
            <input
                    id={types.twitter}
                    type="radio"
                    onChange={() => this.handleType(types.twitter)}
                    checked={type === types.twitter}
                  />
                  <span></span>
                </label>
                <label className={styles.radioLabel} htmlFor={types.note}>Note
            <input
                    id={types.note}
                    type="radio"
                    onChange={() => this.handleType(types.note)}
                    checked={type === types.note}
                  />
                  <span></span>
                </label>
                <label className={styles.radioLabel} htmlFor={types.article}>Article
            <input
                    id={types.article}
                    type="radio"
                    onChange={() => this.handleType(types.article)}
                    checked={type === types.article}
                  />
                  <span></span>
                </label>
              </div>
              <Input
                onChange={this.handleInputChange}
                value={this.state.title}
                name='title'
                label={type === types.twitter ? "Twitter name" : "Title"}
              />
              {type !== types.note ? <Input
                onChange={this.handleInputChange}
                value={this.state.link}
                name='link'
                label={type === types.twitter ? "Twitter link" : "Link"}
              /> : null}

              {type === types.twitter ? <Input
                onChange={this.handleInputChange}
                value={this.state.image}
                name='image'
                label='Image link'
              /> : null}
              <Input
                onChange={this.handleInputChange}
                value={this.state.description}
                tag='textarea'
                name='description'
                label='Description'
              />
              <Button className={styles.formBtn}>add new item</Button>
            </form>
          </div >
        )}
      </AppContext.Consumer>
    );
  }
}

export default Form;