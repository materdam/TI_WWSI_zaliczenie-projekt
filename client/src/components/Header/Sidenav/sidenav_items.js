import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';


const SidenavItems = ({}) => {

    const items = [
        {
            type:'navItem',
            icon:'home',
            text:' Home',
            link:'/',
            restricted:false
        },       
        {
            type:'navItem',
            icon:'file-text-o',
            text:' Wypozyczenia',
            link:'/add',
            restricted:false,
            exclude:true
        },
        
    ]

    const element = (item,i) => (
        <div key={i} className={item.type}>
            <Link to={item.link}>
                <FontAwesome name={item.icon}>
                    {item.text}
                </FontAwesome>
            </Link>
        </div>
    )

    const showItems = () => (
            items.map((item,i)=>{
                return element(item,i)

            })
        
    )
    return (
        <div>
            {showItems()}     
        </div>
        
    );
};

function mapStateToProps(state){
    return{
        
        user: state.user
    }
}

export default SidenavItems;