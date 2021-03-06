import React,{useEffect} from 'react'
import LogItem from './LogItem'
import { connect } from 'react-redux'
import PreLoader from '../PreLoader';
import PropTypes from 'prop-types';
import { getLogs } from '../../../Actions/LogActions'


const Logs = ({ log : {logs, loading},getLogs }) => {
    

    useEffect(() =>{
        getLogs();

        //eslint-disable-next-line
    },[])



    if (loading || logs === null){
        return <PreLoader/>
    }


    return (
        <ul className="collection with-header">
           <li className="collection-header">
               <h4 className="center"> System Logs </h4>
               </li> 
               {!loading && logs.length === 0 ? (<p className="center">No Logs to show </p>) : (
                   logs.map(log => <LogItem log = {log} key = {log.id} />)
               )}
        </ul>
    )
}

Logs.protoType = {
    log : PropTypes.object.isRequired,
}

const mapStateToProps = state =>({
    log : state.log
});

export default connect(mapStateToProps, {getLogs}) (Logs)
