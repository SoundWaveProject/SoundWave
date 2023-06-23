import "./Form.css";

export default function Form() {
    return (
        <form className="form">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name"></input>
            <label htmlFor="email">E-mail:</label>
            <input type="email" id="email" name="email"></input>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password"></input>
            <button>Join Now</button>
        </form>
    )
}
