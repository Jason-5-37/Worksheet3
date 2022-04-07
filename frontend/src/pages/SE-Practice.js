import React, { Component } from "react";
import Styles from "../components/tablestyle.js";
import Table from "../components/Evidencetable.js";
import tablecolumns from "../components/tablecolumns.js";
import Dropdown from "../components/Dropdown.js";
import axios from "axios";

class SEPractice extends Component {

    constructor(props) {
        super(props);
        this.state = {
            articles: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/articles')
        .then((res) => {
            this.setState({
                articles: res.data
            })
        })
        .catch(error => {
            console.log("Error to show article");
        })
    }


    render() {
        const articles = this.state.articles;
    return (
    <div>
        <div >
        <input ></input>
        <button>search</button>
        </div>
        <h2>Select SE Practice to get evidence for the claimed benefits</h2>
        <Dropdown></Dropdown>
        
        <Styles>
            <Table 
            data={articles} 
            columns={tablecolumns}
            />
            </Styles>
            </div>

    );
}
}
export default SEPractice;
