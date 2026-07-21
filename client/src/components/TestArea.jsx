function TextArea({ label, placeholder, name, id, value, onChange }) {
    return (
        <>
            <div className="flex flex-col gap-1">
                <label htmlFor={id} className="font-bold">{label}</label>
                <textarea name={name} id={id} placeholder={placeholder} value={value} onChange={onChange} rows={4} className="border border-gray-400 rounded-md p-2"></textarea>
            </div>
        </>
    )
}
export default TextArea