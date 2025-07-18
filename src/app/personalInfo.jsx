export default function Personal({ isEditing, data, onChange, onToggleEdit, onClear }) {
  if (isEditing) {
    return (
      <div>
        <div className="infoField">
          <label htmlFor="fullName">Full Name</label>
          <input
            value={data.name}
            id="fullName"
            type="text"
            onChange={(e) => onChange('name', e.target.value)}
          />
        </div>
        <div className="infoField">
          <label htmlFor="jobTitle">Job Title</label>
          <input
            value={data.title}
            id="jobTitle"
            onChange={(e) => onChange('title', e.target.value)}
          />
        </div>
        <div className="contactInfo">
          <div className="infoField">
            <label htmlFor="email">Email</label>
            <input
              value={data.email}
              id="email"
              type="email"
              onChange={(e) => onChange('email', e.target.value)}
            />
          </div>
          <div className="infoField">
            <label htmlFor="phone">Phone</label>
            <input
              value={data.phone}
              id="phone"
              type="tel"
              onChange={(e) => onChange('phone', e.target.value)}
            />
          </div>
        </div>
        <div className="infoField">
          <label htmlFor="location">Location</label>
          <input
            value={data.location}
            id="location"
            type="text"
            onChange={(e) => onChange('location', e.target.value)}
          />
        </div>
        <div className="butnCtn">
          <button className="clearBtn" onClick={onClear} type="button">Clear Form</button>
          <button className="cancelBtn" onClick={onToggleEdit} type="button">
            Cancel
          </button>
          <button className="submitBtn" onClick={onToggleEdit}>
            Submit
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="dispInfo">
        <div className="dispField">
          <h3>{data.name}</h3>
        </div>
        <div className="dispField">
          <h3>{data.title}</h3>
        </div>
        <div className="dispField">
          <div className="fieldIcon"></div>
          <p>{data.email}</p>
        </div>
        <div className="dispField">
          <div className="fieldIcon"></div>
          <p>{data.phone}</p>
        </div>
        <div className="dispField">
          <div className="fieldIcon"></div>
          <p>{data.location}</p>
        </div>
        <button onClick={onToggleEdit} type="button">
          <div className="fieldIcon"></div>
        </button>
      </div>
    );
  }
}
