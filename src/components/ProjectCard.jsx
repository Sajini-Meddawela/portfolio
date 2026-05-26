import { Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";

export const ProjectCard = ({ title, description, imgUrl, projectUrl }) => {
  const handleViewProject = () => {
    if (projectUrl) {
      window.open(projectUrl, "_blank");
    }
  };

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          {projectUrl && (
            <button className="view-project-btn" onClick={handleViewProject}>
              View Project <ArrowRightCircle size={18} />
            </button>
          )}
        </div>
      </div>
    </Col>
  );
};