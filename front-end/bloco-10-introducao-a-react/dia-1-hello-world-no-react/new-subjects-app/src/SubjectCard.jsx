import React from "react";

class SubjectCard extends React.Component {
  render(){
    return (
      <div className="subject-card-div">
            <p> O conteúdo é: {this.props.conteudo} </p>
            <p> Status: {this.props.status} </p>
            <p> Bloco: {this.props.bloco} </p>
      </div>
    )
  }
}

export default SubjectCard