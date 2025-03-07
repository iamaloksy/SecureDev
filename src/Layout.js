import React from "react";
import { connect } from 'react-redux';
import Dashboard from "./dashboard";
import LoginForm from "./pages/loginForm";

class Layout extends React.Component {   
   constructor(props) {
      super(props);
      this.state = {}
   }
   
   render() {
      return (
         this.props.isAuthorized  ? 
         <Dashboard isAuthorized={this.props.isAuthorized}/> :       
         <LoginForm />
      );   
   }
}

function mapStateToProps(state) {
   return {      
      isAuthorized: state.userReducer.isAuthorized,
   };
}

export default connect(
   mapStateToProps,
)(Layout);