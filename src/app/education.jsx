export default function Education({
  editingIndex,
  isVisible,
  data,
  onChange,
  onToggleEdit,
  onToggleView,
  onAdd,
  onDelete,
}) {
  if (isVisible) {
    //visible no editing
    return (
      <section className="edu visible">
        <button onClick={() => onToggleView('education')}>
          <h3>Education</h3>
          <div className="fieldIcon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="m12 10.8l-3.9 3.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.6-4.6q.3-.3.7-.3t.7.3l4.6 4.6q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"
              />
            </svg>
          </div>
        </button>
        <ul className="eduInfo">
          {data.map((school, index) => {
            if (index == editingIndex) {
              //visble and editing
              return (
                <div key={school.id} className="eduEdit eduListItem">
                  <h3>Education Details</h3>
                  <div className="eduGroup">
                    <label htmlFor="eduSchool">School</label>
                    <input
                      type="text"
                      name="eduSchool"
                      id="eduSchool"
                      value={school.school}
                      onChange={(e) => onChange('education', index, 'school', e.target.value)}
                    />
                  </div>
                  <div className="eduGroup">
                    <label htmlFor="eduDeg">Degree</label>
                    <input
                      type="text"
                      name="eduDeg"
                      id="eduDeg"
                      value={school.degree}
                      onChange={(e) => onChange('education', index, 'degree', e.target.value)}
                    />
                  </div>
                  <div className="inlineEduGroup">
                    <div className="eduGroup">
                      <label htmlFor="eduFrom">Date From</label>
                      <input
                        type="date"
                        name="eduFrom"
                        id="eduFrom"
                        value={school.from}
                        onChange={(e) => onChange('education', index, 'from', e.target.value)}
                      />
                    </div>
                    <div className="eduGroup">
                      <label htmlFor="eduUntil">Until</label>
                      <input
                        type="date"
                        name="eduUntil"
                        id="eduUntil"
                        value={school.until}
                        onChange={(e) => onChange('education', index, 'until', e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="eduBtnCtn">
                    <button className="eduDelete" onClick={() => onDelete('education', index)}>
                      <div className="fieldIcon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M7 21q-.825 0-1.412-.587T5 19V6q-.425 0-.712-.288T4 5t.288-.712T5 4h4q0-.425.288-.712T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5t-.288.713T19 6v13q0 .825-.587 1.413T17 21zm5-7.1l1.9 1.9q.275.275.7.275t.7-.275t.275-.7t-.275-.7l-1.9-1.9l1.9-1.9q.275-.275.275-.7t-.275-.7t-.7-.275t-.7.275L12 11.1l-1.9-1.9q-.275-.275-.7-.275t-.7.275t-.275.7t.275.7l1.9 1.9l-1.9 1.9q-.275.275-.275.7t.275.7t.7.275t.7-.275z"
                          />
                        </svg>
                      </div>
                      Delete
                    </button>
                    <div className="eduActionButtons">
                      <button
                        className="eduCancel"
                        onClick={() => onToggleEdit('education', index)}
                      >
                        Cancel
                      </button>
                      <button className="eduAdd" onClick={() => onToggleEdit('education', index)}>
                        <div className="fieldIcon">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path
                              fill="currentColor"
                              d="m9.55 15.15l8.475-8.475q.3-.3.7-.3t.7.3t.3.713t-.3.712l-9.175 9.2q-.3.3-.7.3t-.7-.3L4.55 13q-.3-.3-.288-.712t.313-.713t.713-.3t.712.3z"
                            />
                          </svg>
                        </div>
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              );
            } else {
              return (
                <li key={school.id} className="eduListItem">
                  <button className="eduListBtn" onClick={() => onToggleEdit('education', index)}>
                    <span className="eduListSch">{school.school},</span>
                    <span className="eduListDeg">{school.degree}</span>
                  </button>
                </li>
              );
            }
          })}
        </ul>
        <div className="addBtnCtn">
          <button onClick={onAdd}>
            <div className="fieldIcon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12 21q-.425 0-.712-.288T11 20v-7H4q-.425 0-.712-.288T3 12t.288-.712T4 11h7V4q0-.425.288-.712T12 3t.713.288T13 4v7h7q.425 0 .713.288T21 12t-.288.713T20 13h-7v7q0 .425-.288.713T12 21"
                />
              </svg>
            </div>
            Add Education
          </button>
        </div>
      </section>
    );
  } else {
    //not visible
    return (
      <section className="edu">
        <button onClick={() => onToggleView('education')}>
          <h3>Education</h3>
          <div className="fieldIcon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12 14.975q-.2 0-.375-.062T11.3 14.7l-4.6-4.6q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l3.9 3.9l3.9-3.9q.275-.275.7-.275t.7.275t.275.7t-.275.7l-4.6 4.6q-.15.15-.325.213t-.375.062"
              />
            </svg>
          </div>
        </button>
      </section>
    );
  }
}
