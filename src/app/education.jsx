export default function Education({ isEditing, data, onChange, onToggleEdit, onAdd, onDelete }) {
    if (isEditing) {
        return (
            <div className="eduInfo">
                
            </div>
        )
    } else {
        return (
            <div className="dispEdu">

            </div>
        )
    }
}
