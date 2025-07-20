export default function Personal({ isEditing, data, onChange, onToggleEdit, onClear }) {
  if (isEditing) {
    return (
      <div className="personalInfo">
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
          <label htmlFor="perLocation">Location</label>
          <input
            value={data.location}
            id="perLocation"
            type="text"
            onChange={(e) => onChange('location', e.target.value)}
          />
        </div>
        <div className="butnCtn">
          <button className="clearBtn" onClick={onClear} type="button">
            <div className="fieldIcon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M17.25 18H21q.425 0 .713.288T22 19t-.288.713T21 20h-5.75zM5.175 20q-.2 0-.388-.075T4.45 19.7l-1.825-1.825q-.575-.575-.588-1.425T2.6 15l11-11.4q.575-.6 1.412-.6t1.413.575L21.4 8.55q.575.575.575 1.425T21.4 11.4l-8.1 8.3q-.15.15-.337.225t-.388.075z"
                />
              </svg>
            </div>
            Clear Form
          </button>
          <div className="actionBtns">
            <button className="cancelBtn" onClick={onToggleEdit} type="button">
              Cancel
            </button>
            <button className="submitBtn" onClick={onToggleEdit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="dispPersonal">
        <div className="dispField">
          <h3>{data.name}</h3>
        </div>
        <div className="dispField">
          <h3>{data.title}</h3>
        </div>
        <div className="dispField">
          <div className="fieldIcon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7.175q.125 0 .263-.038t.262-.112L19.6 8.25q.2-.125.3-.312t.1-.413q0-.5-.425-.75T18.7 6.8L12 11L5.3 6.8q-.45-.275-.875-.012T4 7.525q0 .25.1.438t.3.287l7.075 4.425q.125.075.263.113t.262.037"
              />
            </svg>
          </div>
          <p>{data.email}</p>
        </div>
        <div className="dispField">
          <div className="fieldIcon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3M16.5 11q-.425 0-.712-.288T15.5 10t.288-.712T16.5 9t.713.288t.287.712t-.288.713T16.5 11"
              />
            </svg>
          </div>
          <p>{data.phone}</p>
        </div>
        <div className="dispField">
          <div className="fieldIcon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12 21.325q-.35 0-.7-.125t-.625-.375Q9.05 19.325 7.8 17.9t-2.087-2.762t-1.275-2.575T4 10.2q0-3.75 2.413-5.975T12 2t5.588 2.225T20 10.2q0 1.125-.437 2.363t-1.275 2.575T16.2 17.9t-2.875 2.925q-.275.25-.625.375t-.7.125M12 12q.825 0 1.413-.587T14 10t-.587-1.412T12 8t-1.412.588T10 10t.588 1.413T12 12"
              />
            </svg>
          </div>
          <p>{data.location}</p>
        </div>
        <button className="editBtn" onClick={onToggleEdit} type="button">
          <div className="fieldIcon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M10 15q-.425 0-.712-.288T9 14v-2.425q0-.4.15-.763t.425-.637l8.6-8.6q.3-.3.675-.45t.75-.15q.4 0 .763.15t.662.45L22.425 3q.275.3.425.663T23 4.4t-.137.738t-.438.662l-8.6 8.6q-.275.275-.637.438t-.763.162zm9.6-9.2l1.425-1.4l-1.4-1.4L18.2 4.4zM5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h6.5q.35 0 .575.175t.35.45t.087.55t-.287.525l-4.65 4.65q-.275.275-.425.638T7 10.75V15q0 .825.588 1.412T9 17h4.225q.4 0 .763-.15t.637-.425L19.3 11.75q.25-.25.525-.288t.55.088t.45.35t.175.575V19q0 .825-.587 1.413T19 21z"
              />
            </svg>
          </div>
        </button>
      </div>
    );
  }
}
