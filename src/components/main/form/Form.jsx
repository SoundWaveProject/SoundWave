import "./Form";

export default function Form() {
    return (
        <form className="form">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name"></input>
            <label for="email">E-mail:</label>
            <input type="email" id="email" name="email"></input>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password"></input>
            <button>Join Now</button>
        </form>
    )
}
