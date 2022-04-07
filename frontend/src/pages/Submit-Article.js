import React, { Component } from "react";
import SubmissionForm from "../components/SubmissionForm.js";

class SubmitArticle  extends Component {
    render() {
    return (
    <div>
        <h2>Submit Article</h2>
        <p>This will be a form to allow submitters to submit an article for possible inclusion in our SEPER repo.</p>
        <p>Also the display table of evidence levels for different claims will show here for the SE practice selected</p>
        <p>Also the display table of evidence levels for different claims will show here for the SE practice selected</p>
        <SubmissionForm></SubmissionForm>
    </div>
    );
}
}
export default SubmitArticle ;

