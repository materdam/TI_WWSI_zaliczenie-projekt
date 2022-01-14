import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addComic, clearNewcomic } from '../actions/index'


class AddComic extends Component {
    state = {
        formdate:{
            name:'',
            author:'',
            contact:'',
            nick:'',
            city:'',
        }
    }
    handleInput = (event,name) => {
        const newFormdata = {
            ...this.state.formdate
        }
        newFormdata[name] = event.target.value

        this.setState({
            formdate:newFormdata
        })
    }

    submitForm = (e) => {
        e.preventDefault();
        this.props.dispatch(addComic({
            ...this.state.formdate
            
        }))

    }

   render() {
        return (
            <div class='rl_container article'>
                <form onSubmit={this.submitForm}>
                    <h2>Dodaj ogloszenie</h2>

                    <div className='form_element'>
                        <h3>Podaj tytul</h3>
                        <input
                            type="text"
                            paceholder="Enter name"
                            
                            value={this.state.formdate.name}
                            onChange={(event)=>this.handleInput(event,'name')}
                        />
                    </div>
                    <div className='form_element'>
                        <h3>Podaj autora</h3>
                        <input
                            type="text"
                            paceholder="Enter name"
                            
                            value={this.state.formdate.author}
                            onChange={(event)=>this.handleInput(event,'author')}
                        />
                    </div>
                    <div className='form_element'>
                        <h3>Podaj numer kontaktowy</h3>
                        <input
                            type="text"
                            paceholder="Enter name"
                            
                            value={this.state.formdate.contact}
                            onChange={(event)=>this.handleInput(event,'contact')}
                        />
                    </div>
                    <div className='form_element'>
                        <h3>Podaj swoj nick</h3>
                        <input
                            type="text"
                            paceholder="Enter name"
                            
                            value={this.state.formdate.nick}
                            onChange={(event)=>this.handleInput(event,'nick')}
                        />
                    </div>
                    <div className='form_element'>
                        <h3>Podaj miasto</h3>
                        <input
                            type="text"
                            paceholder="Enter name"
                            
                            value={this.state.formdate.city}
                            onChange={(event)=>this.handleInput(event,'city')}
                        />
                    </div>
                    <button type='submit'>Dodaj!</button>
                                       
                </form>
            </div>
        );
   }
    
}

function mapStateToProps(state){
    console.log(state);
    return{
        comics:state.comics
    }
}

export default connect(mapStateToProps)(AddComic);