import React from 'react'
import { Component } from 'react'
import axios from 'axios'
import { ServicesContainer , ServicesWrapper , ServicesCard , ServicesIcon , ServicesH1 , ServicesH2 , ServicesP } from './style'
class Services extends Component {
    state = {
        srvs:[]
    }
    componentDidMount(){
        axios.get('data/data.json').then(res => {
            this.setState({
                srvs:res.data.srv
            })
        })
    }
    render(){
        const {srvs} = this.state;
        const Srv = srvs.map(srv => {
            console.log(srv.icon);
            return(
                <ServicesCard key={srv.id}>
                <ServicesIcon src={srv.icon}/>
                <ServicesH2>{srv.title}</ServicesH2>
                <ServicesP>{srv.desc}</ServicesP>
            </ServicesCard>

            )
        }) 
        return (
            <ServicesContainer id='services'>
                <ServicesH1>Our Services</ServicesH1>
                <ServicesWrapper>
                    {Srv}
                </ServicesWrapper>
            </ServicesContainer>
        )    
    }
}

export default Services
