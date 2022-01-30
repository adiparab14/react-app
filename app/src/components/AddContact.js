import React from "react"

class AddContact extends React.Component {
    state = {
        name: "",
        email: "",
    }

    add = (e) => {
        //It will not allow page to get refresh 
        e.preventDefault();
        if (this.state.name === "" || this.state.email === "") {
            alert("ALl the fields are mandatory!");
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({ name: "", email: "" })
        this.props.history.push("/")
    }


    render() {
        return (
            <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui form" data-testid="form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name" data-testid="name" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="text" name="email" placeholder="Email" data-testid="email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
                    </div>
                    <button className="ui button blue" data-testid="submit button">Add </button>
                </form>
            </div>
        );
    }
}

export default AddContact