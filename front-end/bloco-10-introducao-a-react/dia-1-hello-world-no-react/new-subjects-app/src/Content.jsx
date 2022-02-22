import React from "react";
import conteudos from "./data";
import SubjectCard from "./SubjectCard";

class Content extends React.Component {
  render(){
    return(
      <div className="subject-container">
      {
        conteudos.map((content) => {
          return (
          <SubjectCard
          conteudo={content.conteudo}
          status={content.status}
          bloco={content.bloco}
          />
          )
        })
      }
      </div>
    )
  }
}

export default Content;