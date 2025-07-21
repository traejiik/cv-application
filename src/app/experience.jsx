export default function Experience({
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
      <section className="exp visible">
        <button onClick={() => onToggleView('experience')}>
          <h3>Experience</h3>
          <div className="fieldIcon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="m12 10.8l-3.9 3.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.6-4.6q.3-.3.7-.3t.7.3l4.6 4.6q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"
              />
            </svg>
          </div>
        </button>
        <ul className="expInfo">
          {data.map((comp, index) => {
            if (index == editingIndex) {
              //visble and editing
              return (
                <div key={comp.id} className="eduEdit eduListItem">
                  <h3>Eexperience Details</h3>
                  <div className="expGroup">
                    <label htmlFor="expComp">Company</label>
                    <input
                      type="text"
                      name="expComp"
                      id="expComp"
                      value={comp.company}
                      onChange={(e) => onChange('experience', index, 'company', e.target.value)}
                    />
                  </div>
                  <div className="exoGroup">
                    <label htmlFor="expRole">Role</label>
                    <input
                      type="text"
                      name="expRole"
                      id="expRole"
                      value={comp.role}
                      onChange={(e) => onChange('experience', index, 'role', e.target.value)}
                    />
                  </div>
                  <div className="inlineExpGroup">
                    <div className="expGroup">
                      <label htmlFor="expFrom">Date From</label>
                      <input
                        type="date"
                        name="expFrom"
                        id="expFrom"
                        value={comp.from}
                        onChange={(e) => onChange('experience', index, 'from', e.target.value)}
                      />
                    </div>
                    <div className="expGroup">
                      <label htmlFor="expUntil">Until</label>
                      <input
                        type="date"
                        name="expUntil"
                        id="expUntil"
                        value={comp.until}
                        onChange={(e) => onChange('experience', index, 'until', e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="expBtnCtn">
                    <button className="expDelete" onClick={() => onDelete('experience', index)}>
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
                    <div className="expActionButtons">
                      <button
                        className="expCancel"
                        onClick={() => onToggleEdit('experience', index)}
                      >
                        Cancel
                      </button>
                      <button className="expAdd" onClick={() => onToggleEdit('experience', index)}>
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
                <li key={comp.id} className="expListItem">
                  <button className="expListBtn" onClick={() => onToggleEdit('experience', index)}>
                    <span className="expListComp">{comp.company},</span>
                    <span className="expListRole">{comp.role}</span>
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
            Add Experience
          </button>
        </div>
      </section>
    );
  } else {
    //not visible
    return (
      <section className="exp">
        <button onClick={() => onToggleView('experience')}>
          <h3>Experience</h3>
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
