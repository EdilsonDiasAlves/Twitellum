import React, { Component, Fragment } from 'react';
import Cabecalho from './components/Cabecalho'
import Dashboard from './components/Dashboard'
import Widget from './components/Widget'
import TrendsArea from './components/TrendsArea'
import Tweet from './components/Tweet'

class App extends Component {

    constructor(){
        super();
        this.state = {
            novoTweet: 'Textinho muito louco',
            tweets: []
        }

        this.adicionaTweet = this.adicionaTweet.bind(this);
    }

    validateLength(){
        return this.state.novoTweet.length > 140;
    }

    adicionaTweet(event){
        event.preventDefault();
        const novoTweet = this.state.novoTweet;

        if(novoTweet){

            fetch('http://localhost:3001/tweets', {
                method: 'POST',
                body: JSON.stringify({login: 'omariosouto', conteudo: novoTweet})
            })
            .then((respostaDoServidor) => { return respostaDoServidor.json() })
            .then((tweetVindoDoServidor) => {
                console.log(tweetVindoDoServidor);

                this.setState({
                    tweets: [tweetVindoDoServidor, ...this.state.tweets],
                    novoTweet: ''
                })
            })

        }
    }

    componentDidMount(){
        fetch('http://localhost:3001/tweets')
        .then((respostaDoServidor) => {return respostaDoServidor.json()})
        .then((respostaEmJson) => {
            this.setState({
                tweets: respostaEmJson
            })
        })
    }

  render() {
      const attributecolored = this.validateLength() ? "novoTweet__status--invalido" : "";
    return (
      <Fragment>
        <Cabecalho usuario="@omariosouto" />
        <div className="container">
            <Dashboard>
                <Widget>
                    <form className="novoTweet" onSubmit={this.adicionaTweet}>
                        <div className="novoTweet__editorArea">
                        <span className={`novoTweet__status ${attributecolored}`}>{this.state.novoTweet.length}/140</span>
                            <textarea 
                                value={this.state.novoTweet}
                                onChange={ (event) => { this.setState({novoTweet: event.target.value}) }}
                                className="novoTweet__editor" 
                                placeholder="O que está acontecendo?"></textarea>
                        </div>
                        <button type="submit" disabled={this.validateLength()} className="novoTweet__envia">Tweetar</button>
                    </form>
                </Widget>
                <Widget>
                    <TrendsArea />
                </Widget>
            </Dashboard>
            <Dashboard posicao="centro">
                <Widget>
                    <div className="tweetsArea">
                        {
                            this.state.tweets.map(function(tweetEmObjeto, indice){
                                return <Tweet key={indice} tweetTexto={tweetEmObjeto.conteudo}/>
                            })
                        }
                    </div>
                </Widget>
            </Dashboard>
        </div>
      </Fragment>
    );
  }
}

export default App;
