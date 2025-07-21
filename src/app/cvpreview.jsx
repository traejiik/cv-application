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
                <h1>{data.personalInfo.data.name}</h1>
                <p>
                  <div className="fieldIcon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M12 12q.825 0 1.413-.587T14 10t-.587-1.412T12 8t-1.412.588T10 10t.588 1.413T12 12m0 10q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2t5.588 2.225T20 10.2q0 2.5-1.987 5.438T12 22"
                      />
                    </svg>
                  </div>
                  {data.personalInfo.data.location}
                </p>
              </div>
              <h3>{data.personalInfo.data.title}</h3>
            </div>
            <div className="detSec">
              <p>
                <div className="fieldIcon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7.175q.125 0 .263-.038t.262-.112L19.6 8.25q.2-.125.3-.312t.1-.413q0-.5-.425-.75T18.7 6.8L12 11L5.3 6.8q-.45-.275-.875-.012T4 7.525q0 .25.1.438t.3.287l7.075 4.425q.125.075.263.113t.262.037"
                    />
                  </svg>
                </div>
                {data.personalInfo.data.email}
              </p>
              <p>
                <div className="fieldIcon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3"
                    />
                  </svg>
                </div>
                {data.personalInfo.data.phone}
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
            <h4>Skils</h4>
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
