import React from 'react';
class MyForm extends React.Component {
    render() {
      return (
        <form>
          <h1>Hello User</h1>
          <p>Enter Username:</p>
          <input
            type="text"
          />
          <p>Enter Password:</p>
          <input
            type="password"
          />
         <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      );
    }
}
export default MyForm;