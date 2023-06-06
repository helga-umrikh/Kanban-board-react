import React from "react";
import { Link, useParams } from "react-router-dom";

import "./FullView.css";

const FullView = ({ data }) => {
  const { id } = useParams();
  const allIssues = data.map((item) => item.issues).flat();
  const issue = allIssues.find((item) => id === item.id);

  return (
    <div className="fullView">
      <h2 className="fullViewTitle">{issue.name}</h2>
      <Link to="/" className="close" />
      <p className="fullViewPar">
        Это был темный лес, издали казавшийся непроходимым. Там Пахапиль
        охотился, глушил рыбу, спал на еловых ветках. Короче – жил, пока русские
        не выгнали оккупантов. А когда немцы ушли, Пахапиль вернулся. Он
        появился в Раквере, где советский капитан наградил его медалью. Медаль
        была украшена четырьмя непонятными словами, фигурой и восклицательным
        знаком.
      </p>
    </div>
  );
};

export default FullView;