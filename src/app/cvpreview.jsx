export default function CVPreview({ data }) {
  return (
    <>
      <div className="prevContainer">
        {/* personal section */}
        <div className="logo">
          <div className="fieldIcon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M16.275 11.5h3.35l1.15-2.025q.275-.45.275-.975t-.275-.975l-.575-1q-.275-.475-.737-.75T18.45 5.5h-2.175l-1.7 3zm-5.95 3.5h3.35l1.7-3l-1.7-3h-3.35l-1.7 3zm0-7h3.35l1.7-3l-1.125-1.975q-.275-.475-.737-.75T12.5 2h-1q-.55 0-1.012.275t-.738.75L8.625 5zm-.975.5l-1.625-3H5.55q-.55 0-1.012.275t-.738.75l-.575 1q-.275.45-.275.975t.275.975l1.15 2.025h3.35zm0 7l-1.625-3h-3.35l-1.15 2.025q-.275.45-.275.975t.275.975l.575 1q.275.475.738.75t1.012.275h2.175zm.975.5l-1.7 3l1.225 2.025q.275.45.725.713t.975.262h.95q.55 0 1.012-.275t.738-.75L15.375 19l-1.7-3zm5.95 2.5h2.175q.55 0 1.013-.275t.737-.75l.575-1q.275-.45.275-.975t-.275-.975l-1.15-2.025h-3.35l-1.7 3z"
              />
            </svg>
          </div>
          <h1>upRESUME</h1>
        </div>
        <div className="prevPersonal">
          <div className="title">
            <h4>Personal Information</h4>
          </div>
          <div className="content">
            <div className="nameSec">
              <div className="sub">
                <h2>{data.personalInfo.data.name}</h2>
                <p>
                  <div className="fieldIcon">loc:</div>
                  {data.personalInfo.data.location}
                </p>
              </div>
              <h3>{data.personalInfo.data.title}</h3>
            </div>
            <div className="detSec">
              <p>
                <div className="fieldIcon">eml:</div> {data.personalInfo.data.email}
              </p>
              <p>
                <div className="fieldIcon">ph:</div> {data.personalInfo.data.phone}
              </p>
            </div>
          </div>
        </div>
        {/* education section */}
        <div className="prevEducation">
          <div className="title">
            <h4>Education</h4>
          </div>

          <div className="content">
            {data.education.data.map((edu) => {
              return (
                <div className="cvField" key={edu.id}>
                  <div className="eduDetSec">
                    <h3>{edu.school}</h3>
                    <span>
                      | {edu.from} to {edu.until}
                    </span>
                  </div>
                  <div>
                    <h4>{edu.degree}</h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* experience section */}
        <div className="prevExperience">
          <div className="title">
            <h4>Experience</h4>
          </div>
          <div className="content">
            {data.experience.data.map((edu) => {
              return (
                <div className="cvField" key={edu.id}>
                  <div className="eduDetSec">
                    <h3>{edu.company}</h3>
                    <span>
                      | {edu.from} to {edu.until}
                    </span>
                  </div>
                  <div>
                    <h4>{edu.role}</h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* projects section */}
        <div className="prevProjects">
          <div className="title">
            <h4>Projects</h4>
          </div>
          <div className="content">
            {data.projects.data.map((edu) => {
              return (
                <div className="cvField" key={edu.id}>
                  <div className="eduDetSec">
                    <h3>{edu.title}</h3>
                    <span>
                      | {edu.from} to {edu.until}
                    </span>
                  </div>
                  <div>
                    <p>{edu.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* skill section */}
        <div className="prevSkills">
          <div className="title">
            <h4>Skilss</h4>
          </div>
          <div className="content">
            {data.skills.data.map((edu) => {
              return (
                <div className="skillPill" key={edu.id}>
                  {edu.skill}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
