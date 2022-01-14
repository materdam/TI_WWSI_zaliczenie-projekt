import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getcomics } from '../actions';


import ComicItem from '../widgetsUI/comic_item';

class HomeContainer extends Component {

    componentWillMount(){
        
        this.props.dispatch(getcomics(5,0,'desc'))
    }


    renderItems = (comics) => (
        comics.list ?  
            comics.list.map( item => (
                <ComicItem { ... item} key={item._id}/>
            ))
        :null
    )
    loadmore = () =>{
        let count = this.props.comics.list.lenght;
        this.props.dispatch(getcomics(1,count,'desc',this.props.comics.list))
    }


    render() {
        return (
            <div>
               {this.renderItems(this.props.comics)}
                <div 
                className='loadmore'
                onClick={this.loadmore}
                >Wczytaj wiecej</div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        comics:state.comics
    }
}

export default connect(mapStateToProps)(HomeContainer)